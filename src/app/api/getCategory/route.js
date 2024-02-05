import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "category"]
`
export async function GET(request){
    const category = await sanityClient.fetch(query)
    return NextResponse.json({category}, {status:200})
}
