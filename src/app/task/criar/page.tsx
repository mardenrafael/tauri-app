"use client";
import { useForm } from "@/app/hooks/useForm";

export default function Page() {
  const { handleSubmit, setFormState, sucess } = useForm();

  return (
    <main className="h-full">
      <form
        className="grid grid-cols-6 grid-rows-6"
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit();
        }}
      >
        <FormField
          id="task-name"
          title="Nome da tarefa"
          name="taskName"
          placeholder="nome da tarefa"
          colPosition="col-start-2 col-end-4"
          input={({ id, placeholder, name }) => {
            return (
              <input
                type="text"
                id={id}
                placeholder={placeholder}
                name={name}
                onChange={(e) => {
                  const value = e.currentTarget.value;

                  setFormState((prevState) => {
                    return {
                      ...prevState,
                      taskName: value,
                    };
                  });
                }}
              />
            );
          }}
        />
        <FormField
          id="task-description"
          title="Descrição"
          name="taskDescription"
          placeholder="Descrição da tarefa"
          colPosition="col-start-2 col-end-4"
          input={({ id, placeholder, name }) => {
            return (
              <textarea
                id={id}
                placeholder={placeholder}
                name={name}
                onChange={(e) => {
                  const value = e.currentTarget.value;

                  setFormState((prevState) => {
                    return {
                      ...prevState,
                      taskDescription: value,
                    };
                  });
                }}
              />
            );
          }}
        />
        <FormField
          id="task-date-start"
          title="Data inicio"
          name="taskDateStart"
          colPosition="col-start-2 col-end-4"
          input={({ id, name }) => {
            return (
              <input
                type="date"
                id={id}
                name={name}
                onChange={(e) => {
                  const value = e.currentTarget.value as unknown as Date;

                  setFormState((prevState) => {
                    return {
                      ...prevState,
                      taskDateStart: value,
                    };
                  });
                }}
              />
            );
          }}
        />
        <FormField
          id="task-date-end"
          title="Data terminio"
          name="taskDateEnd"
          colPosition="col-start-2 col-end-4"
          input={({ id, name }) => {
            return (
              <input
                type="date"
                id={id}
                name={name}
                onChange={(e) => {
                  const value = e.currentTarget.value as unknown as Date;

                  setFormState((prevState) => {
                    return {
                      ...prevState,
                      taskDateEnd: value,
                    };
                  });
                }}
              />
            );
          }}
        />
        <button className="col-start-2 col-end-6 hover:border rounded">
          Salvar
        </button>
      </form>
      {sucess && <div>Tarefa salva com sucesso</div>}
    </main>
  );
}

interface FormFieldProps {
  title: string;
  id: string;
  name: string;
  placeholder?: string;
  colPosition: string;
  input: (inputParams: {
    placeholder?: string;
    id: string;
    name: string;
  }) => JSX.Element;
}

function FormField({
  title,
  id,
  name,
  placeholder,
  colPosition,
  input,
}: FormFieldProps) {
  return (
    <>
      <div className={`${colPosition} flex gap-2 justify-start items-center`}>
        <label htmlFor={id}>{title}</label>
      </div>
      <div
        className={`col-start-4 col-end-6 flex gap-2 justify-start items-center`}
      >
        {input({
          id,
          placeholder,
          name,
        })}
      </div>
    </>
  );
}
