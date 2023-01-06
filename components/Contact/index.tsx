import styles from "../../styles/Sections.module.css";
import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function Contact() {
  return (
    <div id={"contact"} className={styles.section}>
      <div className={styles.sectionHeader}>04. Contact</div>
      <div className={styles.sectionTitle}>Reach out!</div>
      <div className={styles.description}>
        I&apos;m not actively seeking out new employment opportunities, but I
        would love to hear from you! Reach out with comments, questions, advice,
        or just to say hi!
      </div>
      <br />
      <div className={styles.description}>
        <p>I do occasional freelancing. If you have an idea, send it my way!</p>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginTop: "3rem" }}>
        <Button>
          <Link href={"mailto:gordondmacmaster@gmail.com"}>Reach out</Link>
        </Button>
      </div>
    </div>
  );
}
