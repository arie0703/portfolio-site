"use client";
import styles from "@/styles/components/content-area.module.scss";
import { MenuBar } from "../MenuBar";
import { Work } from "../Work";
import { About } from "../About";
import { Skills } from "../Skills";
import { Title } from "@/components/Title";
import { Contact } from "../Contact";

export const ContentArea = () => {
  const items = ["About", "Skills", "Contact"];

  return (
    <div className={styles.switchContent}>
      <MenuBar items={items} />
      <Title title={"About"} />
      <About />
      <Title title={"Skills"} />
      <Skills />
      <Title title={"Contact"} />
      <Contact />
    </div>
  );
};
