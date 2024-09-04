import { useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Admin = async () => {
  // const { userId } = auth();
  //const isAuth = !!userId;
  // const user = await currentUser();

  // if (user?.publicMetadata?.role !== "ADMIN") {
  // Handle non-admin users here
  // return <div>Access Denied</div>;
  //}

  //if (!user || !== "ADMIN") {
  //  return redirect("/");
  // }

  //const { user } = useUser()
  //const isAdmin = user?.publicMetadata?.role = 'ADMIN'
  return (
    <div>
      <h1>Welcome to Admin Page</h1>
    </div>
  );
};

export default Admin;
