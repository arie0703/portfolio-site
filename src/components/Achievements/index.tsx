"use client";
import styles from "@/styles/components/achievements.module.scss";
import { achievements } from "@/consts/achievements";
import useEmblaCarousel from "embla-carousel-react";

export const Achievements = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const handleNext = () => {
    if (!emblaApi || !emblaApi.canScrollNext()) return;

    console.log('next');
    emblaApi.scrollNext();
  }

  const handlePrev = () => {
    if (!emblaApi || !emblaApi.canScrollPrev()) return;

    console.log('next');
    emblaApi.scrollPrev();
  }

  return (
    <div className={`${styles["achievements-container"]} ${styles["carousel-slider"]}`} ref={emblaRef}>

      <div className={styles["carousel-item-list"]}>
        {achievements.map((item, index) => {
          return (
            <div className={styles["carousel-item"]} key={index}>
              <div className={styles["_box"]}>
                {/* Next Imageは使わない */}
                <img src={item.image}></img>

                <div className={styles["_description"]}>
                  <p className={styles["_caption"]}>{item.caption}</p>
                  <ul>
                    {item.experiences.map((exp, index) => {
                      return <li key={index}>{exp}</li>
                    })}
                  </ul>
                </div>  

              </div>
            </div>
            
          );
        })}
      </div>
      <div className={styles["carousel-controls"]}>
        <button type="button" onClick={handlePrev}>
          <span className={styles["dli-chevron-round-left"]}></span>
          <span>Prev</span>
        </button>
        <button type="button" onClick={handleNext}>
          <span>Next</span>
          <span className={styles["dli-chevron-round-right"]}></span>
        </button>
      </div>
    </div>
  );
};
