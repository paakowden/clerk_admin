import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Admin = async () => {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();

  // if (user?.publicMetadata?.role !== "ADMIN") {
  // Handle non-admin users here
  // return <div>Access Denied</div>;
  //}

  if (!user || user.publicMetadata.role !== "ADMIN") {
    return redirect("/");
  }
  return (
    <div>
      <h1>Welcome to Admin Page</h1>
    </div>
  );
};

export default Admin;
