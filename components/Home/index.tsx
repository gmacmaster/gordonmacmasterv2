import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Model from "./Model";
import Loading from "./Loading";
import Button from "../Button";

const mobile = require("is-mobile");

export default function Home({ loading }: { loading: boolean }) {
  const isMobile = mobile();

  const [waving, setWaving] = useState(true);

  /*useEffect(() => {
      const html = document.getElementById("html");
      if (html) {
        html.style.overflow = "hidden";
      }
      setTimeout(() => {
        const html = document.getElementById("html");
        if (html) {
          html.style.overflow = "unset";
        }
        setLoading(false);
      }, 2000);
    }, []);*/
  return (
    <>
      <div style={{ display: "flex" }}>
        {!isMobile && <Model waving={waving} loading={loading} />}
        {!loading && (
          <div className={styles.center}>
            <div className={styles.introContainer}>
              <div className={styles.greetingText}>Hello!</div>
              <div className={styles.nameText}>I&apos;m Gordon MacMaster</div>
              <div className={styles.greetingDescription}>
                I like to build cool things
              </div>
              <div className={styles.intro}>
                I&apos;m a full stack software engineer with a passion for
                driving positive environmental change. I love tinkering with new
                technologies, exploring the outdoors, and learning from others.
                I&apos;m currently building at{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  target={"_blank"}
                  href="https://www.vendora.io"
                  rel="noreferrer"
                >
                  Vendora
                </a>
                .
              </div>
              <Button style={{ marginTop: 10 }}>
                <Link
                  href={"/Gordon_MacMaster_Resume_2022.pdf"}
                  target={"_blank"}
                >
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      {loading && <Loading />}
    </>
  );
}
