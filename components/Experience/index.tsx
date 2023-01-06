import styles from "../../styles/Sections.module.css";
import homeStyles from "../../styles/Home.module.css";
import React from "react";
import { Tabs } from "flowbite-react";

export default function About() {
  return (
    <div
      id={"experience"}
      className={styles.sectionLeftAlign}
      style={{ marginTop: "6rem" }}
    >
      <div className={styles.aboutContainer}>
        <div className={styles.tabContainer}>
          <div
            className={styles.sectionHeader}
            style={{ marginBottom: "1rem" }}
          >
            02. Work Experience
          </div>
          <Tabs.Group
            aria-label="Default tabs"
            style="underline"
            className={styles.noBorder}
          >
            <Tabs.Item active={true} title="Current Project">
              🤫 Nothing to see here.
            </Tabs.Item>
            <Tabs.Item title="Tesla">
              <ul style={{ listStyle: "inside" }}>
                <li>
                  Scaled localization app to more than 100 consuming
                  applications from 40 teams across Tesla
                </li>
                <li>
                  Built V2 of Tesla Kiosks now deployed in all Tesla stores
                  world-wide
                </li>
                <li>
                  Built REST API to request/consume localized content in 30+
                  locales and 10+ file formats
                </li>
                <li>
                  Built content management system and software distribution
                  server that allows content team to create and deploy updates
                  to kiosks from a web-based application
                </li>
                <li>
                  Built server to proxy all network requests coming from Tesla
                  retail locations in order to improve security and reliability
                  of system
                </li>
                <li>
                  Built iPad app used by Tesla Sales Advisors in React-native to
                  modernize tech stack and improve security features
                </li>
              </ul>
            </Tabs.Item>
            <Tabs.Item title="Tesla (Internship)">
              <ul style={{ listStyle: "inside" }}>
                <li>
                  Designed and built app for simplified content localization
                </li>
                <li>
                  Designed and built admin tool for Tesla’s digital kiosks
                </li>
              </ul>
            </Tabs.Item>
            <Tabs.Item title="PMAM">
              <ul style={{ listStyle: "inside" }}>
                <li>
                  Designed and Built web-based project management system for
                  recipient of part of $56 million Department of Housing and
                  Urban Development (HUD) Community Compass contract
                </li>
                <li>
                  Built contact management system for Section 8 (low-income
                  housing) property management application
                </li>
              </ul>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
}
