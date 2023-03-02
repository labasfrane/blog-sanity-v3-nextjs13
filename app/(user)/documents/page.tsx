import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

async function Documents() {
  const query = groq`
  *[_type=='files']{
      _id,
      fileName,
      "downloadUrl": upload.asset->url
    }`;

  const documents: any = await client.fetch(query);

  return (
    <>
      <h2 className="uppercase mb-8 py-4 text-center font-medium border-b border-neutral-400 bg-gradient-to-t from-neutral-100">
        DOKUMENTI DRUŠTVA
      </h2>
      <div className="px-4 sm:px-5 md:px-7 gap-10 gap-y-16 pb-24">
        <ul className="text-sm sm:text-sm md:text-base grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 ">
          {documents.map((document: any) => (
            <li
              key={document?._id}
              className="border border-neutral-400 w-10/12 h-24"
            >
              <a
                className="h-full flex justify-start items-center px-6 py-4 md:px-7 md:py-6 bg-gradient-to-r from-neutral-100 hover:border-l-4 hover:border-l-neutral-600 ease-out duration-150 after:border-l-4"
                href={`${document?.downloadUrl}?dl=`}
              >
                {document?.fileName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Documents;
