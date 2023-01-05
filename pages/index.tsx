import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Gordon MacMaster</p>
        </div>

        <div className={styles.center}>
          <Link href={"/Gordon_MacMaster_Resume_2022.pdf"} style={{ display: "flex" }} target={'_blank'}>
            Test
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className={styles.thirteen}>test</div>
          </Link>
        </div>
        <div />
      </main>
    </>
  );
}
