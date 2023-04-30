import { getBlog } from "@/config/axios";
import Image from "next/image";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Highlight from "./Highlight";

export default async function Page({ params }: { params: { id: number } }) {
  const { metadata, content } = await getBlog(params.id).then((text) => {
    const matterResult = matter(text);

    return {
      metadata: {
        title: matterResult.data.title || "",
        description: matterResult.data.description,
        thumbnail: matterResult.data.thumbnail || "",
      },
      content: matterResult.content,
    };
  });

  return (
    <>
      <main className="relative w-[40ch] md:w-[60ch] lg:w-[80ch] mx-auto flex flex-col mt-5">
        <h1 className="text-3xl font-bold">{metadata.title}</h1>
        {metadata.thumbnail ? (
          <Image
            src={metadata.thumbnail}
            width={1920}
            height={1080}
            alt={metadata.title}
            className="my-5 shadow-xl"
          ></Image>
        ) : null}
        <article className="prose lg:prose-xl">
          <Markdown>{content}</Markdown>
        </article>
        <Highlight />
      </main>
    </>
  );
}
