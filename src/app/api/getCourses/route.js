import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "courses"]{
        ...,
        categories[]->
    }
`
export async function GET(request){
    const courses = await sanityClient.fetch(query)
    return NextResponse.json({courses}, {status:200})
}
