import {db} from "@/db"
import { notFound } from "next/navigation"
import Link from "next/link"

import * as actions from "@/actions"

interface ArticleShowPageProps {
    params : {
        id : string
    }
}
export default async function ArticleShowPage(props: ArticleShowPageProps) {
    const article = await db.article.findFirst({
        where: {id : parseInt(props.params.id)}
    })

    if(!article) notFound();

    const deleteArticleAction = actions.deleteArticle.bind(null, article.id);

    return (<div>
        <div className="flex m-4 justify-between items-center">
            <h1 className="text-xl font-bold">{article.title}</h1>
            <div>
                <Link href={`/article/${article.id}/edit`} className="p-2 border rounded">Edit</Link>
                <Link href={`/article/${article.id}/delete`} className="p-2 border rounded">
                <form action={deleteArticleAction}><button type="submit">Delete</button></form>
                </Link>
            </div>
        </div>
        <div className="p-3 border rounded bg-gray-200">
            <div>{article.detail}</div>
        </div>
    </div>)

}