import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60;

async function HomePage() {
  if (previewData()) {
    return (
      <>
        <h1 className="uppercase text-center bg-red-500">Preview mode</h1>
        <PreviewBlogList query={query} />
      </>
      // <PreviewSuspense
      //   fallback={
      //     <div role="status">
      //       <p className="text-center text-lg animate-pulse text-red-600">
      //         Loading Preview Data...
      //       </p>
      //     </div>
      //   }
      // >
      //   <PreviewBlogList query={query} />
      // </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <div>
      {/* <h1 className="uppercase text-center bg-red-500">not in preview mode</h1> */}
      <BlogList posts={posts} />
    </div>
  );
}

export default HomePage;
