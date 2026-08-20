"use client";

import styles from "./LearningEngine.module.css";

interface StageProps {
  number: string;
  label: string;
  title: string;
  description: string;
  active: boolean;
}

export default function StageComponent({
  number,
  label,
  title,
  description,
  active,
}: StageProps) {
  return (
    <div
      className={`${styles.stage} ${
        active ? styles.active : ""
      }`}
    >
      <div className={styles.stageNumber}>
        {number}
      </div>

      <div className={styles.stageContent}>
        <div className={styles.stageLabel}>
          {label}
        </div>

        <div className={styles.stageTitle}>
          {title}
        </div>

        <div className={styles.stageDescription}>
          {description}
        </div>
      </div>
    </div>
  );
}