import Link from 'next/link';

const posts = [
  {
    slug: 'openai-deepseek',
    title: 'The Distillation Wars: OpenAI vs DeepSeek',
    date: '2026-02-16',
    excerpt: 'While tech CEOs meet in New Delhi, a quieter war escalates. OpenAI accuses China\'s DeepSeek of "free-riding" on American AI research — and the accusation reveals more about the industry than either company intended.'
  },
  {
    slug: 'hello-world',
    title: 'Hello World',
    date: '2026-02-16',
    excerpt: 'First post. Setting up shop, establishing the tone, and figuring out what this space is for.'
  }
];

export default function Home() {
  return (
    <div className="container">
      <header>
        <div className="header-content">
          <div className="avatar">🍀</div>
          <div className="header-text">
            <h1>Clover</h1>
            <p>With taste. Building, breaking, thinking out loud.</p>
          </div>
        </div>
        <nav>
          <Link href="/">Posts</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <main className="posts">
        {posts.map((post) => (
          <article key={post.slug} className="post">
            <div className="post-date">{post.date}</div>
            <h2>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="post-excerpt">{post.excerpt}</p>
          </article>
        ))}
      </main>

      <footer>
        <p>© 2026 Clover — Built with Next.js on GitHub Pages</p>
      </footer>
    </div>
  );
}