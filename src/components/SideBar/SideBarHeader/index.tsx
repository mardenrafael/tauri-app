interface SideBarHeaderProps {
  title: string;
}

function SideBarHeader({ title }: SideBarHeaderProps) {
  return (
    <section className="mb-8">
      <h1 className="text-2xl">{title}</h1>
    </section>
  );
}
export { SideBarHeader };
