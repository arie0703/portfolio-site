"use client";
import { cloudSkills, devOpsSkills, frontendSkills } from "@/consts/skills";
import styles from "@/styles/components/skills.module.scss";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className={`${styles["skills"]}`}>
      <div className={`${styles["skills__container"]}`}>
        <h3>Frontend Developing</h3>
        <div className={styles["skills__flex"]}>
          {frontendSkills.map((item) => {
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
        <h3>Testing & DevOps</h3>
        <div className={styles["skills__flex"]}>
          {devOpsSkills.map((item) => {
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
          {cloudSkills.map((item) => {
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
