'use client'

import type {Article} from "@prisma/client"
import { useState } from "react"
import * as actions from "@/actions"

interface ArticleEditFormProps {
    article : Article
}

export default function ArticleEditForm({article} : ArticleEditFormProps) {
    const [detail, setDetail] = useState(article.detail);

    const handleEditorChange = (value: string = '') => {setDetail(value)}

    const editArticleAction = actions.editArticle.bind(null, article.id, detail);
    return (
    <div>
        <input className="border border-black" name="detailEditor" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleEditorChange(event.target.value)} />
        <label htmlFor="detailEditor">Editor</label>

        <form action={editArticleAction}>
            <button type="submit" className="p-2 border rounded">Save</button>
        </form>
    </div>)
}