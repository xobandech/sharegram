"use server";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
export const handleRegistration = async (data: FormData) => {
  "use server";
  const password = data.get("password")?.valueOf() as string;
  const confirmPassword = data.get("confirmPassword")?.valueOf();
  const username = data.get("username")?.valueOf() as string;
  if (password === confirmPassword) {
    await prisma.user.create({ data: { password, username } });
    console.log("Successfull registration");
    redirect("/");
  }
};

export const handleLogin = async (data: FormData) => {
  "use server";
  const password = data.get("password")?.valueOf() as string;
  const username = data.get("username")?.valueOf() as string;
  try {
    await prisma.user
      .findUnique({ where: { username: username } })
      .then((user) => {
        console.log(password === user?.password);
        console.log(password, user?.password);
        if (password === user?.password) {
          console.log("Succesfull login");
          redirect("/");
        }
      });
  } catch (e) {
    console.log(e);
  }
};

export async function getUsers() {
  "use server";
  return prisma.user.findMany();
}
