import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description:
    "Muhammad Hateem Hussain — Software Engineer and Co-Founder & COO of CodeBettle. Full-stack products, machine learning, and Python taught to 2,500+ learners.",
  title: "Hateem Hussain — Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
