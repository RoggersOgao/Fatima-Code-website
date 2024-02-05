import { createClient } from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.SANITY_DATASET || "development",
    projectId: "86tqg9pt",
    apiVersion:"2024-01-25",
    useCdn:process.env.NODE_ENV === "development"
}

export const sanityClient = createClient(config);

export const urlFor = (source) => {
    createImageUrlBuilder(config).image(source)
}