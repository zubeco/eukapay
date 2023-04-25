import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Body from "@/components/Body";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Body />
      </main>
    </>
  );
}
