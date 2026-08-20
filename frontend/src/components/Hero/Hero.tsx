"use client";

import { useEffect, useState } from "react";
import LearningEngine from "../LearningEngine/LearningEngine";
import styles from "./Hero.module.css";

const floatingTerms = [
  {
    text: "O(n)",
    className: styles.termOne,
  },
  {
    text: "HashMap",
    className: styles.termTwo,
  },
  {
    text: "two pointers",
    className: styles.termThree,
  },
  {
    text: "stack.pop()",
    className: styles.termFour,
  },
  {
    text: "dp[i]",
    className: styles.termFive,
  },
  {
    text: "O(log n)",
    className: styles.termSix,
  },
  {
    text: "recursion",
    className: styles.termSeven,
  },
];

export default function Hero() {
  const [problemVisible, setProblemVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setProblemVisible(true);
    }, 700);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section className={styles.hero}>

      {/* Background grid */}
      <div className={styles.gridBackground} />

      {/* Decorative concentric rings */}
      <div className={styles.rings} />

      {/* Floating algorithm terminology */}
      {floatingTerms.map((term) => (
        <span
          key={term.text}
          className={`${styles.floatingTerm} ${term.className}`}
        >
          {term.text}
        </span>
      ))}

      <div className={styles.heroLayout}>

        {/* =========================================
            LEFT — HERO MESSAGE
        ========================================= */}

        <div className={styles.heroCopy}>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            <span>
              01 / LEARNING ENGINE
            </span>
          </div>

          <h1 className={styles.title}>

            <span className={styles.lineBlack}>
              LEARN THE
            </span>

            <span className={styles.lineBlue}>
              PA
              <span className={styles.doubleT}>
                TT
              </span>
              ERN.
            </span>

            <span className={styles.lineBlack}>
              OWN THE
            </span>

            <span
              className={`${styles.lineBlue} ${
                problemVisible
                  ? styles.problemVisible
                  : styles.problemHidden
              }`}
            >
              PROBLEM.
            </span>

          </h1>

          <div className={styles.divider} />

          <p className={styles.description}>
            A progressive DSA system that adapts
            to how you learn, think, and improve.
          </p>

          <div className={styles.actions}>

            <button
              type="button"
              className={styles.primaryButton}
            >
              <span>
                START LEARNING
              </span>

              <span className={styles.arrow}>
                →
              </span>
            </button>

            <button
              type="button"
              className={styles.secondaryButton}
            >
              <span>
                EXPLORE PLATFORM
              </span>

              <span className={styles.arrow}>
                →
              </span>
            </button>

          </div>

        </div>

        {/* =========================================
            RIGHT — LEARNING ENGINE
        ========================================= */}

        <LearningEngine />

      </div>

    </section>
  );
}