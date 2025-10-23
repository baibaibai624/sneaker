export default function ContactPage() {
  
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">联系</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        你可以通过以下方式联系我：
      </p>
      <ul className="mt-2 list-disc pl-6 text-zinc-600 dark:text-zinc-400">
        <li>邮箱：you@example.com</li>
        <li>GitHub：@your-handle</li>
        <li>LinkedIn：your-profile</li>
      </ul>
    </main>
  );
}

