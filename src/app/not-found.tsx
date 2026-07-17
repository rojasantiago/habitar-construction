import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0a1830] px-6 text-center font-sans">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f2761e]">404</p>
        <h1 className="text-3xl font-bold text-white">
          Page introuvable · Page not found
        </h1>
        <p className="max-w-md text-slate-300">
          La page que vous cherchez n&rsquo;existe pas. / The page you are
          looking for does not exist.
        </p>
        <div className="flex gap-4">
          <Link
            href="/fr"
            className="rounded-md bg-[#f2761e] px-6 py-3 text-sm font-semibold text-white"
          >
            Accueil (FR)
          </Link>
          <Link
            href="/en"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white"
          >
            Home (EN)
          </Link>
        </div>
      </body>
    </html>
  );
}
