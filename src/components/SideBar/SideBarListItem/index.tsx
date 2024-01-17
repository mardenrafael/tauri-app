import Link from "next/link";

interface SideBarListItemProps {
  title: string;
  path: string;
}

function SideBarListItem({ path, title }: SideBarListItemProps) {
  return (
    <li className="hover:border-b flex">
      <Link href={path} className="flex-1">
        {title}
      </Link>
    </li>
  );
}

export { SideBarListItem };
