"use server"
import { prisma } from "./db"

export const getPosts = async () => {
    return await prisma.posts.findMany()
}