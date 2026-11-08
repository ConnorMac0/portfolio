export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  size: "feature" | "full" | "wide" | "tall" | "small";
};

export const projects: Project[] = [
  {
    title: "TUTELA",
    description:
      "This is a Full-Stack eCommerce Website built using the MERN stack (MongoDB, Express, React, Node.js). \
      The application allows users to browse products, add them to their cart, and complete transactions securely using Stripe for payments. \
      The platform also includes an Admin Panel for managing products, users, and orders. \
      As of now, this project has been suspended indefinitely.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    href: "https://github.com/ConnorMac0/tutela",
    size: "feature",
  },
  {
    title: "UNDERCUT",
    description: "A multi-tenant motorsport prediction league platform built with ASP.NET Core. \
      Each league is an isolated tenant with its own members, picks, and scoring rules. \
      Players predict race podiums before a server-enforced lock deadline, and results are scored idempotently after each race.",
    tags: ["ASP.NET Core", "C#", "REST", "SQL Server"],
    href: "https://github.com/ConnorMac0/undercut",
    size: "feature",
  },
  {
    title: "DEEP FAKE AUDIO DETECTION",
    description: "A TensorFlow neural network that classifies speech as human or AI-generated. \
    Trained on roughly 11,800 labeled audio samples using spectral and temporal features, it reached 95% accuracy on a held-out test set.",
    tags: ["TensorFlow", "Python", "AI & ML"],
    href: "https://github.com/ConnorMac0/DeepFakeAudioDetection",
    size: "full",
  }
];
