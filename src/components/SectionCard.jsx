export default function SectionCard({ title, action, children }) {
  return (
    <section className="flex flex-col space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-primary text-xl">{title}</h1>
        <div>
          {action}
        </div>
      </header>
      <div>
        {children}
      </div>
    </section>
  );
}
