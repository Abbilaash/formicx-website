'use client'

import Link from 'next/link'
import { ArrowRight, Download, GitFork, Terminal, Zap } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { HomeSections } from '@/components/formicx-sections'
import { AntVideo } from '@/components/ant-scene'
import { SITE_CONFIG } from '@/config/site'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-split container">
            <div className="hero-copy">
              <div className="pill">
                <span className="pulse-dot" /> Linux manages processes. Formicx manages agents.
              </div>
              <h1>
                The Agent-Native <span>Operating Layer</span> for Autonomous AI
              </h1>
              <p className="hero-lede">
                Formicx maps AI agents directly to Linux kernel processes—delivering real-time process monitoring, zero-config LAN discovery, and security policies for autonomous agent fleets.
              </p>
              <div className="hero-actions">
                <a
                  className="button"
                  href={SITE_CONFIG.osDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download /> Download Formicx OS
                </a>
                <Link className="button button-ghost" href="#docs">
                  Explore Documentation <ArrowRight />
                </Link>
                <a
                  className="button button-ghost"
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitFork /> GitHub
                </a>
              </div>
              <div className="install-box">
                <span className="install-label">
                  <Terminal /> QUICK INSTALL
                </span>
                <code>
                  <b>$</b> pip install -e .
                </code>
                <button
                  aria-label="Copy install command"
                  onClick={() => navigator.clipboard?.writeText('pip install -e .')}
                >
                  COPY
                </button>
              </div>
            </div>

            <div className="hero-media-half">
              <AntVideo />
            </div>
          </div>

          <div className="scroll-cue">
            SCROLL TO EXPLORE <span>↓</span>
          </div>
        </section>
        <HomeSections />
      </main>
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand">
            <span className="brand-mark">F</span>
            <span>Formicx</span>
          </Link>
          <p>Built for the Linux open source ecosystem.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Abbilaash/Formicx">GitHub</a>
          <Link href="/contribute">Contribute</Link>
          <a href="#docs">Documentation</a>
          <a href="#issues">Issues</a>
        </div>
        <div className="license">
          Released under the <b>MIT License.</b>
          <br />
          © 2026 Formicx contributors.
        </div>
      </div>
    </footer>
  )
}
