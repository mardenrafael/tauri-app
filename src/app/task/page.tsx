"use client";
import { useEffect, useState } from "react";
import Database from "tauri-plugin-sql-api";

export default function Page() {
  const [tasks, setTasks] = useState<
    Array<{
      id: number;
      task_name: string;
      task_description: string;
      task_date_start?: Date;
      task_date_end?: Date;
    }>
  >([]);

  useEffect(() => {
    async function getTasks() {
      const db = await Database.load("sqlite:test.db");
      const tasks = await db.select("SELECT * FROM tasks");

      setTasks(
        tasks as Array<{
          id: number;
          task_name: string;
          task_description: string;
          task_date_start?: Date;
          task_date_end?: Date;
        }>
      );
    }

    getTasks();
  }, []);

  return (
    <main>
      <table>
        <tr>
          <th>id</th>
          <th>nome</th>
          <th>descrição</th>
          <th>data inicio</th>
          <th>data termino</th>
        </tr>
        {tasks.map((task, idx) => {
          return (
            <tr key={idx}>
              <td>{task.id}</td>
              <td>{task.task_name}</td>
              <td>{task.task_description}</td>
              <td>
                {task.task_date_start != undefined &&
                  (task.task_date_start + "")
                    .replaceAll("-", "/")
                    .split("/")
                    .reverse()
                    .join("/")}
              </td>
              <td>
                {task.task_date_end != undefined &&
                  (task.task_date_end + "")
                    .replaceAll("-", "/")
                    .split("/")
                    .reverse()
                    .join("/")}
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}
