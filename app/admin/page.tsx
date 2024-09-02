import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const Admin = async () => {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();

  if (user?.publicMetadata?.role !== "ADMIN") {
    // Handle non-admin users here
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Welcome to Admin Page</h1>
    </div>
  );
};

export default Admin;
