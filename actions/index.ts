'use server'

import { db } from "@/db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function editArticle(id : number, detail : string) {
    await db.article.update({
        where: {id},
        data: {detail}
    })


    revalidatePath(`/article/${id}`)
    redirect(`/article/${id}`)
}

export async function deleteArticle(id:number) {
    await db.article.delete({
        where: {id},
    })


    revalidatePath("/")
    redirect("/")
}

export async function createArticle(formState: {message: string} , formData:FormData) {

    try {
        const title = formData.get("title")
        const detail = formData.get("detail")

        if(typeof title !=="string" || title.length < 3) return {message : 'title must be longer'}
        if(typeof detail !=="string" || detail.length < 10) return {message : 'detail must be longer'}

        await db.article.create({
            data: {
                title,
                detail,
            }
        })
    } catch(err: unknown) {

        if(err instanceof Error) {
            return {
                message: err.message
            }
        } else {
            return {
                message: 'Something went wrong'
            }
        }
    
    }
    revalidatePath("/");
    redirect("/");
}