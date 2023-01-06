import { Navbar, Button } from "flowbite-react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import React from "react";

export default function Header() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      style={{ backgroundColor: "transparent", width: "100%", zIndex: 2 }}
    >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link
          href={"/Gordon_MacMaster_Resume_2022.pdf"}
          style={{ display: "flex" }}
          target={"_blank"}
        >
          <div className={styles.thirteen}>Resume</div>
        </Link>
      </div>
      <Navbar.Collapse className={styles.header}>
        <Navbar.Link href="#about">
          <span className={styles.green}>1. </span>About
        </Navbar.Link>
        <Navbar.Link href="#experience">
          <span className={styles.green}>2. </span>Experience
        </Navbar.Link>
        <Navbar.Link href="#work">
          <span className={styles.green}>3. </span>Work
        </Navbar.Link>
        <Navbar.Link href="#contact">
          <span className={styles.green}>4. </span>Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
