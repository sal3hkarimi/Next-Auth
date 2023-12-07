import Layout from "@/components/Layout";
import LoginBtn from "@/components/LoginBtn";
import LoginForm from "@/components/LoginForm";
import LogoutBtn from "@/components/LogoutBtn";
import { useSession } from "next-auth/react";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Page() {
  const session = useSession();
  const data = session.data;
  const [user, setUser] = useState(null);
  console.log(session);

  useEffect(() => {
    setUser(data?.user);
  }, [data]);

  return (
    <Layout title="Home">
      <div className="mb-4">
        <LoginBtn />
        <LogoutBtn />
      </div>
      <hr />
      {user ? <p>{user.email}</p> : <LoginForm />}
    </Layout>
  );
}
