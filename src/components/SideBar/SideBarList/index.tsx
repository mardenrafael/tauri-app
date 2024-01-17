import { SideBarListItem } from "../SideBarListItem";

interface SideBarListProps {
  itens: {
    title: string;
    path: string;
  }[];
}

function SideBarList({ itens }: SideBarListProps) {
  return (
    <main>
      <ul className="flex flex-col gap-2">
        {itens.map((item, idx) => {
          return (
            <SideBarListItem key={idx} path={item.path} title={item.title} />
          );
        })}
      </ul>
    </main>
  );
}

export { SideBarList };
