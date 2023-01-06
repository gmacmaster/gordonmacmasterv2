import { GitHub, Linkedin, Twitter, Instagram } from "react-feather";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={styles.centered} style={{ zIndex: 10, marginTop: "2rem" }}>
      <div style={{ display: "flex" }} className={styles.centered}>
        <div className={styles.linkContainer}>
          <Link
            href={"https://github.com/gmacmaster"}
            target={"_blank"}
            className={styles.footerLink}
          >
            <GitHub />
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            href={"https://www.linkedin.com/in/gordon-macmaster/"}
            target={"_blank"}
            className={styles.footerLink}
          >
            <Linkedin />
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            href={"https://twitter.com/gordomacmaster"}
            target={"_blank"}
            className={styles.footerLink}
          >
            <Twitter />
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            href={"https://www.instagram.com/gordomacmaster/"}
            target={"_blank"}
            className={styles.footerLink}
          >
            <Instagram />
          </Link>
        </div>
      </div>
      <div
        className={styles.footerText}
        style={{ fontSize: 12, marginTop: "1rem", lineHeight: "24px" }}
      >
        <div>Made with ❤️ on 🌎</div>©{year} Gordon MacMaster
      </div>
    </div>
  );
}
