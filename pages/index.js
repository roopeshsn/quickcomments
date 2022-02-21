import { Button, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useAuth } from "@/lib/auth";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  const { signinWithGithub, signout, user } = useAuth();
  return (
    <div>
      <Head>
        <title>Quick Comments</title>
        <meta name="description" content="Comment system for your blog posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Quick Comments</Heading>

        <Button onClick={signinWithGithub}>Signin</Button>
        {user && <Button onClick={signout}>Signout</Button>}
      </main>

      <footer>
        <p>Copyright Quick Comments 2022</p>
      </footer>
    </div>
  );
}
