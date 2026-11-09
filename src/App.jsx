import { useState } from 'react'

const projects = [
  {
    title: 'Swiftwing Courier',
    platform: 'Web',
    type: 'Logistics platform',
    description: 'A delivery operations platform with service flows, order handling and a responsive customer experience.',
    image: '/images/Capture.png',
    stack: ['React', 'Laravel', 'MySQL'],
   // github: 'https://github.com/samyKingSKC/Swiftwing_courier',
    live: 'https://swiftwingcouriers.com',
  },
  {
    title: 'Treanch',
    platform: 'Web',
    type: 'Vehicle marketplace',
    description: 'A vehicle sales platform with searchable listings, order flows and an admin area for managing inventory.',
    image: '/images/Capture4.PNG',
    stack: ['PHP', 'Laravel', 'MySQL'],
  //  github: 'https://github.com/samyKingSKC/Car-sales-website',
    live: 'https://trench.quantumtrustllcweb3.com/',
  },
  {
    title: 'QuantumTrust',
    platform: 'Web',
    type: 'crypto platform',
    description: 'A full-stack crypto platform with a seamless user experience, deposits, and investment records.',
    image: '/images/Capture1.PNG',
    stack: ['react', 'Laravel', 'MySQL'],
   // github: 'https://github.com/samyKingSKC/Lacertrade',
    live: 'https://quantumtrustllcweb3.com/',
  },
  {
    title: 'Harmony wellness',
    platform: 'Web',
    type: 'crypto platform',
    description: 'A holistic practitioner wellness website with booking system',
    image: '/images/Capture3.PNG',
    stack: ['react', 'Laravel', 'MySQL'],
   // github: 'https://github.com/samyKingSKC/Lacertrade',
    live: 'https://wellnessfront.vercel.app/',
  },
  {
    title: 'Cursive Hair',
    platform: 'Web',
    type: 'Booking system',
    description: 'A service catalogue and booking experience backed by content management tools for the owner.',
    image: '/images/hairbraid.png',
    stack: ['vue', 'Laravel', 'Inertia'],
    github: 'https://github.com/samyKingSKC/Hair-Braiding-Website',
    live: 'https://cursivehair.quantumtrustllcweb3.com',
  },
]

const skills = [
  ['01', 'Frontend', 'React, Vue.js, React Native, JavaScript, Tailwind CSS, responsive UI'],
  ['02', 'Backend', 'PHP, Laravel, REST APIs, authentication'],
  ['03', 'Data', 'MySQL, relational modelling, admin workflows'],
  ['04', 'Delivery', 'Git, deployment, maintenance, clear handover'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <span className="wordmark-mark">SK</span>
          <span>Samuel Kingsley</span>
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><b>{menuOpen ? '×' : '☰'}</b>
        </button>
        <nav className={menuOpen ? 'navigation is-open' : 'navigation'}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#profile" onClick={closeMenu}>Profile</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro section-wrap">
          <div className="intro-copy">
            <p className="kicker">React / PHP / Laravel</p>
            <h1>Web applications<br /><em>built for the work.</em></h1>
            <p className="intro-text">I am Samuel Kingsley, a full-stack developer focused on dependable interfaces, useful admin systems and backend services that hold up after launch.</p>
            <div className="intro-actions">
              <a className="button button-primary" href="#work">See selected work <span>↓</span></a>
              <a className="text-link" href="mailto:fedrickjohnson642@gmail.com">Start a conversation <span>↗</span></a>
            </div>
          </div>
          <div className="intro-aside">
            <div className="portrait-frame"><img src="/images/kingsley.PNG" alt="Samuel Kingsley" /></div>
            <div className="availability"><span className="status-dot" /> Available for selected projects <span className="aside-arrow">↗</span></div>
          </div>
        </section>

        <section className="stats section-wrap" aria-label="Developer profile summary">
          <div><strong>4+</strong><span>years building<br />for the web</span></div>
          <div><strong>15</strong><span>projects shipped<br />or maintained</span></div>
          <div><strong>01</strong><span>focused stack:<br />React + Laravel</span></div>
        </section>

        <section id="work" className="work section-wrap">
          <div className="section-heading"><p className="kicker">Selected work</p><h2>Things I have<br /><em>put into production.</em></h2><p className="section-note">Web, iOS and Android applications, built with React, React Native and Laravel.</p></div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-image"><img src={project.image} alt={`${project.title} preview`} /></div>
                <div className="project-details">
                  <p className="project-type">{project.platform} · {project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">View project ↗</a><a href={project.github} target="_blank" rel="noreferrer">Source ↗</a></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="profile" className="profile section-wrap">
          <div className="section-heading"><p className="kicker">Profile</p><h2>Practical by<br /><em>default.</em></h2></div>
          <div className="profile-content"><p className="profile-lede">I like software that makes the next action obvious. My work moves between a careful React interface and a Laravel backend that is structured, testable and easy to hand over.</p><div className="skill-grid">{skills.map(([number, title, detail]) => <div className="skill" key={title}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div></div>
        </section>

        <section className="experience section-wrap"><div className="section-heading"><p className="kicker">Experience</p><h2>Built alongside<br /><em>real teams.</em></h2></div><div className="timeline"><div className="timeline-item"><span>2022 — now</span><div><h3>Full-stack developer</h3><p>Business applications, dashboards, booking systems and API-backed products.</p></div></div><div className="timeline-item"><span>Earlier work</span><div><h3>Web instructor & developer</h3><p>Teaching web fundamentals while delivering and maintaining client systems.</p></div></div></div></section>

        <section id="contact" className="contact section-wrap"><p className="kicker">Have a project in mind?</p><h2>Let’s make it<br /><em>useful.</em></h2><a className="contact-email" href="mailto:fedrickjohnson642@gmail.com">fedrickjohnson642@gmail.com <span>↗</span></a><div className="contact-meta"><a href="https://github.com/samyKingSKC" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/SKCMYCV.pdf">Resume ↓</a><span>Lagos, Nigeria</span></div></section>
      </main>

      <footer><span>© {new Date().getFullYear()} Samuel Kingsley</span><span>React / PHP / Laravel</span></footer>
    </div>
  )
}

export default App
