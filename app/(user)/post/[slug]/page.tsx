import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug: slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="pb-20 mt-1">
      <section className="space-y-2 px-2 border-t border-b border-neutral-400 mb-10">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post?.mainImage)?.url()}
              alt={post?.author?.name}
              fill
            />
          </div>

          <section className="p-5 w-full bg-neutral-100">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post?.title}</h1>
                <h2 className="italic pt-2 pb-6">{post.description}</h2>
                <p className="ml-auto">
                  {new Date(post?._createdAt).toLocaleDateString("hr-HR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="mx-8">
        <PortableText value={post?.body} components={RichTextComponents} />
      </section>
    </article>
  );
}

type Props = {
  params: {
    slug: string;
  };
};

export default Post;
