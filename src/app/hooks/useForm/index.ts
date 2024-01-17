import Database from "tauri-plugin-sql-api";
import { useState } from "react";

function useForm() {
  const [formValue, setFormState] = useState<{
    taskName: string;
    taskDescription: string;
    taskDateStart?: Date;
    taskDateEnd?: Date;
  }>({
    taskName: "",
    taskDescription: "",
    taskDateEnd: undefined,
    taskDateStart: undefined,
  });
  const [sucess, setSucess] = useState<boolean>(false);

  async function handleSubmit() {
    const db = await Database.load("sqlite:test.db");
    const result = await db.execute(
      "INSERT into tasks (task_name, task_description, task_date_start, task_date_end) values ($1, $2, $3, $4)",
      [
        formValue.taskName,
        formValue.taskDescription,
        formValue.taskDateStart,
        formValue.taskDateEnd,
      ]
    );

    if (result.rowsAffected >= 1) {
      setSucess(true);
    }

    await db.close();
  }

  return {
    sucess,
    handleSubmit,
    setFormState,
  };
}

export { useForm };
