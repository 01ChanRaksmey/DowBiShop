import { useEffect, useState } from 'react'

const deploymentSteps = [
  {
    number: '01',
    title: 'Build something real',
    description: 'Start with a small, useful idea. A personal site is a perfect first project.',
    tag: 'CREATE',
  },
  {
    number: '02',
    title: 'Push it to GitHub',
    description: 'Save your work with Git, then give your project a home in a repository.',
    tag: 'COMMIT',
  },
  {
    number: '03',
    title: 'Put it online',
    description: 'Connect your repo to a hosting platform and ship your first live site.',
    tag: 'DEPLOY',
  },
]

const faqs = [
  {
    question: 'What does “deploy” actually mean?',
    answer:
      'Deployment is the process of publishing your project so other people can visit it on the internet. You write the code locally, push it to a repository, and a hosting service serves it at a public URL.',
  },
  {
    question: 'Do I need to pay to get started?',
    answer:
      'No. You can learn the workflow and publish a personal project using the free tiers of popular hosting platforms. You can add a custom domain later if you want one.',
  },
  {
    question: 'What happens when I update my site?',
    answer:
      'With a Git-connected deployment, push your changes to the linked branch and your host can build and publish the update for you. That repeatable loop is one of the best things to learn.',
  },
]

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m4.5 10 3.4 3.4 7.6-7.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  const [theme, setTheme] = useState('default')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [copyMessage, setCopyMessage] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText('npm run build')
      setCopyMessage('Copied to clipboard')
    } catch {
      setCopyMessage('Clipboard access is unavailable in this browser.')
    }
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Launchpad home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span>launchpad<span className="brand-period">.</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>

          <nav id="primary-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <a href="#journey" onClick={closeMenu}>The journey</a>
            <a href="#toolkit" onClick={closeMenu}>Your toolkit</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav-cta" href="#journey" onClick={closeMenu}>
              Let&apos;s ship <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> YOUR FIRST DEPLOY STARTS HERE</div>
            <h1>From local<br />to <span>live.</span></h1>
            <p className="hero-description">
              A friendly little launchpad for your front-end journey. Learn the basics, build something you love, and put it out into the world.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#journey">Explore the journey <ArrowIcon /></a>
              <a className="text-link" href="#toolkit">What you&apos;ll need <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-note">
              <span className="avatar-stack" aria-hidden="true"><i>✳</i><i>↗</i><i>⌘</i></span>
              <span>Small steps. Real skills. Your own live URL.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a project deploying successfully">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="spark spark-one">✳</div>
            <div className="spark spark-two">✦</div>
            <div className="deploy-card">
              <div className="deploy-card-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>YOUR FIRST PROJECT</span>
                <span className="card-menu">···</span>
              </div>
              <div className="project-preview">
                <div className="preview-topline"><span>MY LITTLE CORNER</span><span>☼</span></div>
                <div className="preview-art">
                  <div className="preview-sun" />
                  <div className="preview-hill hill-back" />
                  <div className="preview-hill hill-front" />
                  <div className="preview-star">✦</div>
                </div>
                <div className="preview-copy">
                  <span className="preview-label">A SITE BY YOU</span>
                  <span className="preview-lines"><i /><i /></span>
                  <span className="preview-button" />
                </div>
              </div>
              <div className="deploy-status">
                <span className="status-icon"><CheckIcon /></span>
                <span className="status-copy"><strong>It&apos;s live on the internet!</strong><small>your-first-site.example</small></span>
                <span className="status-arrow"><ArrowIcon diagonal /></span>
              </div>
              <div className="deploy-progress"><span /></div>
            </div>
            <div className="floating-label"><span className="floating-spark">✳</span> made by you</div>
            <div className="art-caption"><span className="caption-line" /> THE INTERNET IS YOURS</div>
          </div>
        </section>

        <section className="ticker" aria-label="What you will learn">
          <div className="ticker-inner">
            <span>MAKE A THING</span><i>✳</i><span>LEARN THE FLOW</span><i>✳</i><span>SHIP IT ONLINE</span><i>✳</i><span>MAKE A THING</span><i>✳</i><span>LEARN THE FLOW</span>
          </div>
        </section>

        <section className="journey section-wrap" id="journey">
          <div className="section-heading">
            <div>
              <div className="eyebrow">NO MYSTERY, JUST MOMENTUM</div>
              <h2>Three steps to<br />your first <span>“it&apos;s live!”</span></h2>
            </div>
            <p>You don&apos;t need to know everything to get started. Just follow the same simple path developers use every day.</p>
          </div>
          <div className="steps-grid">
            {deploymentSteps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-card-top"><span className="step-number">{step.number}</span><span className="step-tag">{step.tag}</span></div>
                <div className="step-icon" aria-hidden="true">
                  {step.number === '01' ? '✳' : step.number === '02' ? '⌘' : '↗'}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <a href="#toolkit" aria-label={`Learn about the toolkit for: ${step.title}`}><ArrowIcon diagonal /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="toolkit section-wrap" id="toolkit">
          <div className="toolkit-card">
            <div className="toolkit-copy">
              <div className="eyebrow eyebrow-light">A LITTLE PREP GOES A LONG WAY</div>
              <h2>Your tiny<br />launch <span>checklist.</span></h2>
              <p>These are the only things you need to get that first project out the door. You probably know more than you think.</p>
              <a className="button button-light" href="#faq">A few common questions <ArrowIcon /></a>
            </div>
            <div className="checklist">
              <div className="checklist-heading"><span>THE STARTER KIT</span><span className="checklist-count">04 ITEMS</span></div>
              <div className="checklist-item"><span className="check-badge"><CheckIcon /></span><span><strong>A project you&apos;re proud of</strong><small>It can be tiny. It just has to be yours.</small></span><span className="item-number">01</span></div>
              <div className="checklist-item"><span className="check-badge"><CheckIcon /></span><span><strong>Node.js &amp; npm</strong><small>So your project can build for production.</small></span><span className="item-number">02</span></div>
              <div className="checklist-item"><span className="check-badge"><CheckIcon /></span><span><strong>A GitHub account</strong><small>Your code&apos;s home base on the internet.</small></span><span className="item-number">03</span></div>
              <div className="checklist-item"><span className="check-badge"><CheckIcon /></span><span><strong>One brave little click</strong><small>Every developer has a first deployment.</small></span><span className="item-number">04</span></div>
              <div className="terminal">
                <div className="terminal-top"><span><i /> QUICK BUILD CHECK</span><button type="button" onClick={copyCommand}>COPY COMMAND <ArrowIcon diagonal /></button></div>
                <code><span>$</span> npm run build</code>
                <p aria-live="polite">{copyMessage || 'A green check here means you’re ready to go.'}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq section-wrap" id="faq">
          <div className="faq-intro">
            <div className="eyebrow">GOOD QUESTIONS</div>
            <h2>Wondering<br />about <span>something?</span></h2>
            <p>Everyone starts somewhere. Here are a few things you might be asking.</p>
            <a className="text-link" href="#home">Back to the top <ArrowIcon diagonal /></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className={`faq-item${openFaq === index ? ' is-open' : ''}`} key={faq.question}>
                <h3>
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    <span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p>{faq.answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-inner">
            <span className="cta-spark" aria-hidden="true">✳</span>
            <div className="eyebrow eyebrow-light">YOUR TURN, INTERNET</div>
            <h2>Well, what are<br />you waiting <span>for?</span></h2>
            <p>Your first deployment is closer than you think. Pick a project, take the first step, and go make something that&apos;s yours.</p>
            <a className="button button-primary button-cta" href="#journey">Start your journey <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true"><span /></span><span>launchpad<span className="brand-period">.</span></span></a>
          <p>Made for the next thing you put online.</p>
          <div className="theme-picker" role="group" aria-label="Choose a color theme">
            <span>SET THE MOOD</span>
            <button type="button" className={`theme-swatch theme-default${theme === 'default' ? ' is-selected' : ''}`} aria-label="Use warm theme" aria-pressed={theme === 'default'} onClick={() => setTheme('default')} />
            <button type="button" className={`theme-swatch theme-midnight${theme === 'midnight' ? ' is-selected' : ''}`} aria-label="Use midnight theme" aria-pressed={theme === 'midnight'} onClick={() => setTheme('midnight')} />
            <button type="button" className={`theme-swatch theme-forest${theme === 'forest' ? ' is-selected' : ''}`} aria-label="Use forest theme" aria-pressed={theme === 'forest'} onClick={() => setTheme('forest')} />
          </div>
          <span className="footer-copyright">© 2026 LAUNCHPAD. BUILT FOR BEGINNERS.</span>
        </div>
      </footer>
    </>
  )
}

export default App
