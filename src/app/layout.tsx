"use client";

import { Inter } from "next/font/google";
import { SideBar } from "../components/SideBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + " select-none hover:cursor-default"}>
        <main className="grid grid-cols-12">
          <SideBar.Root>
            <SideBar.Header title="TODO list" />
            <SideBar.List
              itens={[
                {
                  path: "/",
                  title: "Home",
                },
                {
                  path: "/task",
                  title: "Tarefas",
                },
              ]}
            />
          </SideBar.Root>
          <section className="col-start-3 col-end-13">{children}</section>
        </main>
      </body>
    </html>
  );
}
