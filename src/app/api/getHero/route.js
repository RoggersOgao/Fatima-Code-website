import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "hero"]
`
export async function GET(request){
    const hero = await sanityClient.fetch(query)
    return NextResponse.json({hero}, {status:200})
}
