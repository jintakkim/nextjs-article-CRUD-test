import {db} from "@/db"
import { notFound } from "next/navigation";
import ArticleEditForm from "@/components/article-edit-form";


interface ArticleEditPageProps {
    params : {
        id: string
    }
}

export default async function ArticleEditPage(props:ArticleEditPageProps) {
    const id = parseInt(props.params.id);

    const article = await db.article.findFirst({
        where: {id: id}
    });

    if(!article) notFound();

    return <ArticleEditForm article={article} />

}