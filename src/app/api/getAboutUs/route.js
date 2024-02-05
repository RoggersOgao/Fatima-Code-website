import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";


const query = groq`
    *[_type == "aboutUs"]
`
export async function GET(request){
    const aboutUs = await client.fetch(query)
    return NextResponse.json({aboutUs}, {status:200})
}
