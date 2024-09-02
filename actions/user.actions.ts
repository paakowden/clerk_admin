"use server";

import prismadb from "@/lib/prismadb";

export async function createUser(user: any) {
  const {
    email,
    username,
    image,
    first_name,
    last_name,
    role,
    created_at,
    updated_at,
  } = user;
  try {
    const newUser = await prismadb.user.create({
      data: {
        email,
        username,
        image,
        first_name,
        last_name,
        role,
        created_at,
        updated_at,
      },
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
