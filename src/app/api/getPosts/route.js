import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type == "post"]{
  ...,
  categories[], author->,
}
`
export async function GET(request){
    const post = await sanityClient.fetch(query)
    return NextResponse.json({post}, {status:200})

}


