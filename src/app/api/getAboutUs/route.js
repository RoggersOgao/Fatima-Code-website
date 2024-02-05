import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";


const query = groq`
    *[_type == "aboutUs"]
`
export async function GET(request){
    const aboutUs = await sanityClient.fetch(query)
    return NextResponse.json({aboutUs}, {status:200})
}
