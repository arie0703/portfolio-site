"use client";
import { infraSkills, languageSkills } from "@/consts/skills";
import styles from "@/styles/components/skills.module.scss";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className={`${styles["skills"]}`}>
      <div className={`${styles["skills__container"]}`}>
        <h3>Language & Framework</h3>
        <div className={styles["skills__flex"]}>
          {languageSkills.map((item) => {
            return (
              <div key={item.title}>
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt={item.title}
                />
              </div>
            );
          })}
        </div>
        <h3>Infrastructure</h3>
        <div className={styles["skills__flex"]}>
          {infraSkills.map((item) => {
            return (
              <div key={item.title}>
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
