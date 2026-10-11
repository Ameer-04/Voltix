
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Workspace</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Demo Admin</h1>
        <p className="mt-2 text-sm text-slate-600">
          Development dashboard
        </p>

        <nav className="mt-5 flex gap-4 text-sm font-semibold text-cyan-700">
          <Link href="/admin">Dashboard</Link>
          <Link href="/products">View Store</Link>
        </nav>
      </div>

      {children}
    </section>
  );
}