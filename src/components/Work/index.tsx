"use client";
import styles from "@/styles/components/work.module.scss";
import { work } from "@/consts/work";
import Image from "next/image";
import { useState } from "react";

export const Work = () => {
  const [isOpenPreview, setIsOpenPreview] = useState(false);

  return (
    <div className={styles["workContainer"]}>
      <div className={styles["_flex"]}>
        <Image
          className={styles["_thumbnail"]}
          src={work.imagePath}
          alt={work.title}
          width={200}
          height={200}
        />
        <div className={styles["_description"]}>
          <p className={styles["_description__title"]}>
            <a
              href={work.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {work.title}
            </a>
          </p>
          <div className={styles["_description__text"]}>
            <p>{work.description}</p>
          </div>
          <div className={styles["_description__repoLink"]}>
            <a
              href={work.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
      <div className={styles["_preview"]}>
        <button
          className={styles["_preview__button"]}
          onClick={() => setIsOpenPreview(!isOpenPreview)}
        >
          <h3>
            Preview
            {isOpenPreview && <span>▲</span>}
            {!isOpenPreview && <span>▼</span>}
          </h3>
        </button>

        {isOpenPreview && (
          <div className={styles["_flex"]}>
            {(work.previewImages as string[]).map((image) => {
              return (
                <Image src={image} alt={work.title} width={184} height={328} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
