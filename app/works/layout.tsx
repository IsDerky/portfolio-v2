import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Derkyu - Works",
  description: "Explore my portfolio of web development projects, including Derkyu Hosting, Discord bots, and custom web applications built with modern technologies.",
};

export default function WorksLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
