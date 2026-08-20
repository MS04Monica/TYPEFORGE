export interface LearningStage {
  number: string;
  label: string;
  title: string;
  description: string;
}

export const learningStages: LearningStage[] = [
  {
    number: "01",
    label: "PROBLEM",
    title: "Two Sum",
    description: "Given an array of integers...",
  },
  {
    number: "02",
    label: "YOUR APPROACH",
    title: "Brute Force",
    description: "Time complexity O(n²)",
  },
  {
    number: "03",
    label: "ANALYZING",
    title: "Complexity detected",
    description: "The solution can be improved",
  },
  {
    number: "04",
    label: "INSIGHT",
    title: "Use Hash Map",
    description: "Reduce the search to O(n)",
  },
  {
    number: "05",
    label: "NEXT SKILL",
    title: "Pattern Recognition",
    description: "Build toward problem mastery",
  },
];