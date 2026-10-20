import { Link } from 'react-router-dom';
import SocialWidget from '../components/SocialWidget';
import { usePageTitle } from '../hooks/usePageTitle';
import { principles, studio } from '../data/site';

const editors = [
  ['Mara Ellison', 'Editor. Workspace pieces and the method notes.'],
  ['Jonah Park', 'Product editor. Audio, cameras, and anything with a switch.'],
  ['Adele Okonkwo', 'Platforms editor. The software we still open on a Tuesday.'],
  ['Chris Lang', 'Studio editor. The espresso bar and the Friday tasting.'],
];

/**
 * 关于页面。标题、照片和人物用三种不同的块，而不是通栏大图。
 * @returns {JSX.Element}
 */
export default function About() {
  usePageTitle('About');

  return (
    <>
      <header className="dossier-head">
        <div className="wrap">
          <p className="kicker">About the desk</p>
          <h1>A small lab for slow recommendations.</h1>
        </div>
      </header>
      <section className="section">
        <div className="wrap dossier-grid">
          <figure className="dossier-photo">
            <img src="/images/about-studio.jpg" alt="The comparison room: a wood table, pink chairs, and tall windows." />
            <figcaption>The room where a recommendation has to survive an argument.</figcaption>
          </figure>
          <div className="prose">
            <p>
              We review the products and platforms a small studio actually lives with: the desk, the headphones, the note app, the tracker, the cup of coffee that has to happen before noon. The journal is in English. The tests are dated. When we change our minds, the date changes with us.
            </p>
            <p>
              Most of the writing happens one floor away, on the window desk, with one camera left out on purpose. Scores are a shorthand for the essay, not an instrument reading.
            </p>
            <Link className="btn btn-dark" to="/blog/how-we-decide-what-to-test">
              Read the method
            </Link>
          </div>
        </div>
      </section>
      <section className="editor-board" aria-label="Editors">
        {editors.map(([name, role], index) => (
          <article key={name} className={`editor-tile editor-tile-${index}`}>
            <h2>{name}</h2>
            <p>{role}</p>
          </article>
        ))}
      </section>
      <section className="section">
        <div className="wrap principle-steps">
          {principles.map((item, index) => (
            <article key={item.title}>
              <span>Step 0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="wrap visit-bar">
          <div>
            <h2>Visit</h2>
            <address>
              {studio.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </address>
          </div>
          <img src="/images/article-method.jpg" alt="Glass beakers on the UncoverLab bench." />
          <SocialWidget variant="stack" title="Find us" />
        </div>
      </section>
    </>
  );
}
