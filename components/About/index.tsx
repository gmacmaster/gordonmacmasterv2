import styles from "../../styles/Sections.module.css";
import homeStyles from "../../styles/Home.module.css";
import React from "react";

export default function About() {
  return (
    <div id={"about"} className={styles.sectionLeftAlign}>
      <div className={styles.aboutContainer}>
        <div>
          <div className={styles.sectionHeader}>01. About</div>
          <div className={styles.sectionTitle}>Hi. I&apos;m Gordon</div>
          <div className={homeStyles.intro} style={{ maxWidth: 500 }}>
            I have been coding for 10 years. I enjoy building things that will
            help people
          </div>
          <div
            className={homeStyles.intro}
            style={{ maxWidth: 500, marginTop: ".5rem" }}
          >
            I spent nearly three years at Tesla working on their digital
            experience team. I built out the core system for managing localized
            content, the in-store kiosk experience, the iPad app for Tesla
            advisors, and a few other smaller projects.
          </div>
          <div
            className={homeStyles.intro}
            style={{ maxWidth: 500, marginTop: ".5rem" }}
          >
            In my spare time (what&apos;s that??) I enjoy skiing, camping, and
            basically anything else that will get me away from my computer and
            into the outdoors.
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={"/Me.jpg"}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
