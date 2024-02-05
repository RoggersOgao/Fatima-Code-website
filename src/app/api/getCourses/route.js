import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

const query = groq`
    *[_type == "courses"]{
        ...,
        categories[]->
    }
`
export async function GET(request){
    const courses = await client.fetch(query)
    return NextResponse.json({courses}, {status:200})
}
