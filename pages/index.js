import { Button, Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useAuth } from "@/lib/auth";
import Dashboard from "@/lib/components/DashboardTemplate";
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
        <Heading mt={4} mb={4}>
          Quick Comments
        </Heading>
        {user ? (
          <Button onClick={signout}>Signout</Button>
        ) : (
          <Button onClick={signinWithGithub}>Signin</Button>
        )}
      </main>
    </div>
  );
}
