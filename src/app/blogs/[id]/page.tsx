import { marked } from "marked";

async function getBlog(id: number) {
  const res = await fetch("http://localhost:3000/sll.md");

  return res.text();
}

export default async function Home() {
  const blog = await getBlog(1).then((text) => marked(text));

  return (
    <main className="w-15 mx-auto">
      <article
        dangerouslySetInnerHTML={{ __html: blog }}
        className="prose xl:prose-xl mx-auto"
      ></article>
    </main>
  );
}
