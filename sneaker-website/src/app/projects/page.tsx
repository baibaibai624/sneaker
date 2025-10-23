export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">项目</h1>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <article className="rounded-lg border p-4 border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-medium">项目 A</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">一句话介绍项目与技术栈。</p>
        </article>
        <article className="rounded-lg border p-4 border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-medium">项目 B</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">一句话介绍项目与技术栈。</p>
        </article>
      </div>
    </main>
  );
}

