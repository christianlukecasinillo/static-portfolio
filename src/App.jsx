import { useState } from 'react'

const skills = [
  { name: 'Testing Tools', pct: 80, tags: ['Playwright', 'Selenium', 'Postman'] },
  { name: 'Google Workspace Proficiency', pct: 95, tags: ['Spreadsheet', 'Docx'] },
  { name: 'Programming (Basic)', pct: 85, tags: ['PHP', 'C#', 'ReactJS', 'HTML', 'CSS', 'JavaScript'] },
  { name: 'Database', pct: 86, tags: ['PHPMyAdmin', 'MySQL'] },
  { name: 'Defect Tracking & Management', pct: 90, tags: ['JIRA'] },
  { name: 'AI & Productivity Tools', pct: 90, tags: ['Gemini', 'ChatGPT', 'ClaudeAI', 'Cline', 'Git', 'GitHub'] },
  { name: 'Testing Methodologies', pct: 88, tags: ['Functional', 'Regression', 'Integration', 'Exploratory', 'UAT'] },
]

const experience = [
  {
    date: 'Aug 2025 – Jul 2026',
    role: 'Quality Assurance Tester',
    org: 'Forty Degrees Celsius Inc.',
    desc: 'Designed and executed manual test cases, identified and documented defects using JIRA, collaborated with developers to resolve issues, and performed basic automation testing with Playwright to ensure software quality.',
  },
  {
    date: 'Jan 2025 – Apr 2025',
    role: 'Quality Assurance — Intern',
    org: 'Cerenimbus Inc.',
    desc: 'Developed PHP APIs, conducted software testing, created detailed test cases, documented defects, and collaborated with developers to improve application functionality, user interface, and overall software quality.',
  },
]

const activities = [
  {
    img: '/images/activities/2022.jpg',
    tag: 'Sports',
    title: 'UCLM Indoor Volleyball Varsity Team — Player',
    desc: 'Represented the school in intercollegiate competition (CESAFI 2022).',
  },
  {
    img: '/images/activities/2023.png',
    tag: 'Sports',
    title: 'UCLM Beach Volleyball Varsity Team — Player',
    desc: 'Represented the school in intercollegiate competition (CESAFI Beach Volleyball 2023).',
  },
  {
    img: '/images/activities/cviraa.jpg',
    tag: 'Sports',
    title: 'Central Visayas Regional Athletics Association (CVIRAA 2017)',
    desc: 'Represented the school/city Secondary Division in the Regional competition — Top 4.',
  },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com/christianlukecasinillo2' },
  { label: 'Instagram', href: 'https://instagram.com/saint_lukee' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@st_lukeee' },
]

function Nav() {
  const links = ['About', 'Skills', 'Experience', 'Activities', 'Contact']
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="brand">Casinillo<span> / Portfolio</span></div>
        <ul className="topnav">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero container">
      <div>
        <div className="status-line">
          <span className="status-dot" />
          OPEN TO RELOCATE — CANDIDATE PROFILE
        </div>
        <h1>Christian Luke B. Casinillo</h1>
        <div className="role">Quality Assurance Tester</div>
        <p className="tagline">Passionate about delivering quality software — from test case design to defect resolution.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/UpdatedCasinillo_CV.pdf" download>Download CV</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>
      <div className="hero-photo">
        <img src="/images/photo.jpg" alt="Christian Luke B. Casinillo" />
      </div>
    </section>
  )
}

function ContactStrip() {
  return (
    <div className="container contact-strip">
      <div><strong>Contact No.</strong><span>+63 916 567 9714</span></div>
      <div><strong>Email</strong><span>christianlukecasinillo2@gmail.com</span></div>
      <div><strong>Address</strong><span>Sacred Heart Village, Gun-ob, Lapu-Lapu City, Cebu, Philippines</span></div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section container">
      <div className="section-head">
        <span className="suite-name">01 · </span>
        <h2>About me</h2>
      </div>
      <div className="about-body">
        <p>
          Detail-oriented and results-driven Quality Assurance Tester with a year of experience in
          software testing, quality assurance processes, and defect management. Skilled in creating
          and executing test cases, identifying and documenting software defects, performing
          functional and regression testing, and collaborating with cross-functional teams to ensure
          the delivery of high-quality software products.
        </p>
        <p style={{ marginTop: 16 }}>
          Proficient in test management and bug-tracking tools, with a strong understanding of the
          software development life cycle (SDLC) and Agile methodologies. Committed to improving
          product reliability, enhancing user experience, and maintaining quality standards through
          thorough testing and continuous process improvement.
        </p>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-head">
        <span className="suite-name">02 · </span>
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-row" key={s.name}>
            <div className="skill-top">
              <span className="name">{s.name}</span>
              <span className="pct">{s.pct}%</span>
            </div>
            <div className="meter"><div className="meter-fill" style={{ width: `${s.pct}%` }} /></div>
            <div className="tag-row">
              {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section container">
      <div className="section-head">
        <span className="suite-name">03 · </span>
        <h2>Work Experience</h2>
      </div>
      <div>
        {experience.map((e) => (
          <div className="log-entry" key={e.role}>
            <div className="log-date">{e.date}</div>
            <div>
              <h3 className="log-role">{e.role}</h3>
              <div className="log-org">{e.org}</div>
              <p className="log-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Activities() {
  return (
    <section id="activities" className="section container">
      <div className="section-head">
        <span className="suite-name">04 · </span>
        <h2>Extra-Curricular Activities</h2>
      </div>
      <div className="activities-grid">
        {activities.map((a) => (
          <div className="activity-card" key={a.title}>
            <img src={a.img} alt={a.title} />
            <div className="activity-body">
              <div className="activity-tag">{a.tag}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function encodeForm(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', reason: '' })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm({ 'form-name': 'inquiry', ...form }),
    })
      .then(() => {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', phone: '', reason: '' })
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" className="section container" style={{ borderBottom: 'none' }}>
      <div className="section-head">
        <span className="suite-name">05 · </span>
        <h2>Get in touch</h2>
      </div>
      <div className="contact-grid">
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, maxWidth: '40ch' }}>
            Inquiry form — reach out about QA roles, collaborations, or just to say hello.
            Submissions land in your Netlify dashboard under Forms.
          </p>
          <div className="social-list">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
        {status === 'sent' ? (
          <div className="form-note" style={{ fontSize: 15 }}>
            Thanks — your message was sent. I'll get back to you soon.
          </div>
        ) : (
          <form
            className="contact-form"
            name="inquiry"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            {/* Required so Netlify's build-time crawler registers this form */}
            <input type="hidden" name="form-name" value="inquiry" />
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={update('name')} />
            </div>
            <div className="field">
              <label htmlFor="email">Your email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={update('email')} />
            </div>
            <div className="field">
              <label htmlFor="company">Company (optional)</label>
              <input id="company" name="company" type="text" value={form.company} onChange={update('company')} />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={update('phone')} />
            </div>
            <div className="field">
              <label htmlFor="reason">Reason for contacting me</label>
              <textarea id="reason" name="reason" rows={4} required value={form.reason} onChange={update('reason')} />
            </div>
            <button className="submit-btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'error' && (
              <div className="form-note" style={{ color: '#e07a5f' }}>
                Something went wrong — please try again or email me directly.
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ContactStrip />
      <About />
      <Skills />
      <Experience />
      <Activities />
      <Contact />
      <footer>© {new Date().getFullYear()} Christian Luke B. Casinillo. Built with React + Vite.</footer>
    </>
  )
}
