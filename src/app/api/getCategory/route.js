import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

const query = groq`
    *[_type == "category"]
`
export async function GET(request){
    const category = await client.fetch(query)
    return NextResponse.json({category}, {status:200})
}
