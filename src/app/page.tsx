"use client";
import { useEffect, useState } from "react";
import Database from "tauri-plugin-sql-api";

export default function Page() {
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    async function getTasks() {
      const db = await Database.load("sqlite:test.db");
      const taskQtd: { qtd: number }[] = await db.select(
        "SELECT COUNT(*) as qtd FROM tasks"
      );

      setTaskCount(taskQtd[0].qtd);
    }

    getTasks();
  }, []);

  return (
    <main className="flex justify-center items-center w-full h-full">
      <h1 className="text-4xl">Numero de tarefas {taskCount}</h1>
    </main>
  );
}
