import { SideBar } from "../../components/SideBar";

export default function TaksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-12">
      <SideBar.Root>
        <SideBar.Header title="Tarefas" />
        <SideBar.List
          itens={[
            {
              path: "/task",
              title: "Lista",
            },
            {
              path: "/task/criar",
              title: "Criar",
            },
          ]}
        />
      </SideBar.Root>
      <section className="col-start-3 col-end-13 p-2">{children}</section>
    </main>
  );
}
