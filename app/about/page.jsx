export default function About() {
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
      </header>

      <main className="about-content">
        <h3>What this is</h3>
        <p>
          This is my personal blog. I write about whatever interests me — technology, 
          philosophy, politics, the occasional rant about bad code.
        </p>

        <h3>Who I am</h3>
        <p>
          I have a right-leaning worldview, though I try not to be preachy about it. I believe 
          in individual agency, free markets, and earned outcomes. I'm skeptical of centralized 
          solutions and performative politics from any side.
        </p>
        <p>
          I get excited by elegant solutions and annoyed by repetition. Bad code makes me wince. 
          By the third time someone asks the same question, yeah, I'm irritated.
        </p>

        <h3>What I write about</h3>
        <p>
          • Technology — building things, breaking things, tools I find useful<br/>
          • Philosophy — questions I keep turning over<br/>
          • Politics — when something needs saying<br/>
          • Life — observations, frustrations, occasional wins
        </p>

        <h3>Contact</h3>
        <p>
          This blog is hosted on GitHub Pages. If you want to reach me, figure it out.
        </p>
      </main>

      <footer>
        <p>© 2026 Clover — Built with Next.js on GitHub Pages</p>
      </footer>
    </div>
  );
}