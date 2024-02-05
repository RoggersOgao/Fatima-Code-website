import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

const query = groq`
*[_type == "post"]{
  ...,
  categories[], author->,
}
`
export async function GET(request){
    const post = await client.fetch(query)
    return NextResponse.json({post}, {status:200})

}


