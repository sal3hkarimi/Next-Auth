import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutBtn() {
  return (
    <button
      className="bg-cyan-500 text-white py-2 px-4 mx-4 hover:bg-cyan-600"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
