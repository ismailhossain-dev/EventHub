//sessionProvider use for user authentication and looking evrywhere in the app
"use client";
import { SessionProvider } from "next-auth/react";

interface childrenProps {
  children?: React.ReactNode;
  className?: string;
}
const NextAuthProvider = ({ children }:childrenProps) => {

    //sessionProvider coming with next auth 
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;