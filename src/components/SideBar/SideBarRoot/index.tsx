import { PropsWithChildren } from "react";

interface SideBarRootProps extends PropsWithChildren {}

function SideBarRoot({ children }: SideBarRootProps) {
  return (
    <aside className="col-start-1 col-end-3 p-4">
      <main>{children}</main>
    </aside>
  );
}

export { SideBarRoot };
