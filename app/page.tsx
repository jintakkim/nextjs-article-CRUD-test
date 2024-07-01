import {db} from "@/db";
import Link from "next/link";

export default async function Home() {
  const articles = await db.article.findMany();

  const renderedArticles = articles.map((article)=> {
    return (
      <Link href={`/article/${article.id}`} key={article.id} className="flex justify-between items-center p-2 border rounded">
        <div>{article.title}</div>
        <div>View</div>
      </Link>
    )
  })
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Articles</h1>
        <Link href="/article/new" className="border p-2 rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">{renderedArticles}</div>
    </div>
  );
}
