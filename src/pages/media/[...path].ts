import type { APIRoute } from "astro";
import site from "@/site.json";

export const prerender = false;

const cloudinaryUrl = `https://res.cloudinary.com/${site.cloudinaryName}`

export const GET: APIRoute = async ({ params }) => {
  let response = await fetch(`${cloudinaryUrl}/${params.path}`);
  response = new Response(response.body, response);
  if (response.status === 200) {
    response.headers.set("Cache-Control", "public, max-age=31536000, s-maxage=31536000");
  }
  return response
};
