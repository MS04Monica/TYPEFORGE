"use client";

import { useEffect, useState } from "react";
import { learningStages } from "@/data/learningStages";
import StageComponent from "./StageComponent";
import styles from "./LearningEngine.module.css";

export default function LearningEngine() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStage((current) => {
        return (current + 1) % learningStages.length;
      });
    }, 2200);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.engineArea}>
      <div className={styles.engineCard}>

        <div className={styles.engineTop}>
          <span>LEARNING ENGINE</span>

          <span className={styles.live}>
            <span className={styles.liveDot} />
            LIVE
          </span>
        </div>

        <div className={styles.engineContent}>

          <div className={styles.engineTrack} />

          {learningStages.map((stage, index) => (
            <StageComponent
              key={stage.number}
              number={stage.number}
              label={stage.label}
              title={stage.title}
              description={stage.description}
              active={index === activeStage}
            />
          ))}

        </div>

        <div className={styles.engineNext}>

          <div className={styles.nextContent}>
            <span>UP NEXT</span>

            <strong>
              Two Sum — Variation 02
            </strong>
          </div>

          <button
            type="button"
            aria-label="Open next problem"
          >
            →
          </button>

        </div>

      </div>
    </div>
  );
}