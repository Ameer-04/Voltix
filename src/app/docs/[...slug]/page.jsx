
export const instant = false;

export default async function DocsPage({ params }) {
  const { slug } = await params;

  return (
    <section>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
        Developer documentation
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Catch-all Route Exercise
      </h1>

      <p className="mt-4">URL segments:</p>

      <ul className="mt-4 max-w-xl space-y-2 rounded-2xl border border-slate-200 bg-white/80 p-6 text-slate-700 shadow-sm">
        {slug.map((segment, index) => (
          <li key={`${segment}-${index}`}>{segment}</li>
        ))}
      </ul>
    </section>
  );
}