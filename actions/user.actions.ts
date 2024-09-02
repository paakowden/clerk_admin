"use server";

import prismadb from "@/lib/prismadb";

export async function createUser(user: any) {
  try {
    const newUser = await prismadb.user.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
