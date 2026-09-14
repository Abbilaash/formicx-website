'use client'

import Link from 'next/link'
import { GitFork, Menu, X, Network, Download } from 'lucide-react'
import { useState } from 'react'
import { SITE_CONFIG } from '@/config/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Architecture', '#architecture'], ['Docs', '#docs'], ['Contribute', '/contribute'], ['Wall of Fame', '#contributors']]
  return <header className="site-header">
    <div className="container nav-inner">
      <Link href="/" className="brand"><span className="brand-mark"><Network /></span><span>Formicx</span></Link>
      <nav className="desktop-nav">{links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
      <div className="nav-actions">
        <a className="github-link" href={SITE_CONFIG.githubUrl} target="_blank" rel="noreferrer">
          <GitFork /> <span>GitHub</span><b>★ 2</b>
        </a>
        <a className="button button-small button-ghost" href={SITE_CONFIG.osDownloadUrl} target="_blank" rel="noreferrer">
          <Download className="w-3.5 h-3.5" /> <span>Download OS</span>
        </a>
        <Link className="button button-small" href="/contribute">Get Started</Link>
      </div>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav">
      {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href={SITE_CONFIG.osDownloadUrl} target="_blank" rel="noreferrer">Download OS</a>
    </nav>}
  </header>
}

