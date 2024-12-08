"use client";
import styles from "@/styles/components/content-area.module.scss";
import { MenuBar } from "../MenuBar";
import { About } from "../About";
import { Skills } from "../Skills";
import { Title } from "@/components/Title";
import { Contact } from "../Contact";
import { Activity } from "../Activity";

export const ContentArea = () => {
  const items = ["About", "Skills", "Activity", "Contact"];

  return (
    <div className={styles.switchContent}>
      <MenuBar items={items} />
      <Title title={"About"} />
      <About />
      <Title title={"Skills"} />
      <Skills />
      <Title title={"Activity"} />
      <Activity />
      <Title title={"Contact"} />
      <Contact />
    </div>
  );
};
