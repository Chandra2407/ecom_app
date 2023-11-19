import ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId:'07arxyqu',
    dataset:'production',
    apiVersion:'2022-03-25',
    useCdn:true
})

const builder = ImageUrlBuilder(client)

export const urlFol = (source: any)=>{
    return builder.image(source)
}