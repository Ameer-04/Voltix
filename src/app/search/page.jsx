
export const instant = false;

export default async function SearchPage({ searchParams }) {
  const queryParams = await searchParams;
  const query = queryParams.q ?? "";

  return (
    <section>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Find your next favorite</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Search products</h1>

      <form action="/search" className="mt-8 flex max-w-2xl gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search electronics..."
          className="min-w-0 flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />

        <button
          type="submit"
          className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-white transition hover:bg-cyan-600"
        >
          Search
        </button>
      </form>

      {query ? (
        <p className="mt-6">
          Search query: <strong>{query}</strong>
        </p>
      ) : (
        <p className="mt-6 text-slate-600">
          Enter a product name to begin searching.
        </p>
      )}
    </section>
  );
}