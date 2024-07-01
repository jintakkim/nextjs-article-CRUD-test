'use client'

import {db} from "@/db"
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import * as actions from "@/actions"
export default function ArticleCreatePage() {
    const [formState, action]= useFormState(actions.createArticle,{message: ""})

 
    return (<form action={action}>

        <h3 className="font-bold m-3">Create a Article</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">Title</label>
                <input name="title" id="title" className="border rounded p-2 w-full"/>
            </div>
            <div className="flex gap-4">
                <label className="w-12" htmlFor="detail">detail</label>
                <textarea name="detail" id="detail" className="border rounded p-2 w-full"/>
            </div>
            <div>{formState.message}</div>
            <button className="rounded p-2 bg-blue-200" type="submit">Create</button>
        </div>

        </form>)
}