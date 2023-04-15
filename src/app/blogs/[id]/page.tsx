import { marked } from "marked";
import { getBlog } from "@/config/axios";

export default async function Page({ params }: { params: { id: number } }) {
  // const blog = await getBlog(1).then((text) => {marked(text)});
  const blog = await getBlog(params.id);

  return (
    <main className="w-15 mx-auto">
      {/* <article
        dangerouslySetInnerHTML={{ __html: blog }}
        className="prose xl:prose-xl mx-auto"
      ></article> */}
    </main>
  );
}
