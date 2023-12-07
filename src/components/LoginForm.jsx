import { useRef } from "react";
import LoginBtn from "./LoginBtn";
import { signIn } from "next-auth/react";


export default function LoginForm() {
  const email = useRef();
  const password = useRef();

  const signInAction = () =>
    signIn(
      "credentials",
      { redirect: false },
      { email: email.current.value, password: password.current.value }
    );

  return (
    <div className="flex flex-col">
      <h4 className="font-semibold text-2xl my-2">Login Form</h4>
      <input
        type="text"
        ref={email}
        autoFocus={true}
        className="border w-96 p-2 outline-none mb-2"
        placeholder="email"
      />
      <input
        type="text"
        ref={password}
        className="border w-96 p-2 outline-none mb-2"
        placeholder="password"
      />
      <LoginBtn className="w-fit" onClick={signInAction} />
    </div>
  );
}
