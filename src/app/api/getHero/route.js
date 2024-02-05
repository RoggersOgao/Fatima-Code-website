import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

const query = groq`
    *[_type == "hero"]
`
export async function GET(request){
    const hero = await client.fetch(query)
    return NextResponse.json({hero}, {status:200})
}
