'use client'

import Link from 'next/link'
import { ArrowUpRight, Cpu, Network, ShieldCheck, Code2, GitPullRequest, Heart, BookOpen, ExternalLink } from 'lucide-react'
import contributors from '@/data/contributors.json'
import { TerminalSimulator } from './terminal-simulator'

const features = [
  ['Agent → OS PID Mapping','Every agent gets a first-class process identity. Query live CPU, RAM, and uptime through psutil.','01',Cpu],
  ['Automatic LAN Discovery','Zero-config peer networking over mDNS. Find and connect agents across your local network.','02',Network],
  ['Authoritative ACL Policies','Define exactly who can talk to whom. Policies are enforced at the control plane.','03',ShieldCheck],
  ['Python Agent SDK','A framework-independent lifecycle for any agent. Build, observe, and orchestrate in Python.','04',Code2],
] as const

export function HeroBackground() { return null }


export function FeaturesGrid() { return <section className="section" id="architecture"><div className="container"><div className="section-heading"><p className="eyebrow">THE CONTROL PLANE</p><h2>Agents need an <em>operating layer.</em></h2><p>Formicx gives autonomous systems the primitives they need to operate as reliable, observable processes.</p></div><div className="feature-grid">{features.map(([title, body, number, Icon]) => <article className="feature-card" key={title}><div className="card-top"><span className="feature-icon"><Icon /></span><span className="feature-number">{number}</span></div><h3>{title}</h3><p>{body}</p><ArrowUpRight className="card-arrow" /></article>)}</div></div></section> }

export function ContributorWall() { return <section className="section section-tight" id="contributors"><div className="container"><div className="section-heading row-heading"><div><p className="eyebrow">OPEN BY DEFAULT</p><h2>Built by the <em>community.</em></h2></div><Link href="/contribute" className="text-link">Become a contributor <ArrowUpRight /></Link></div><div className="contributors-list">{contributors.map((person) => <a className="contributor-card" href={person.prUrl} target="_blank" rel="noreferrer" key={person.id}><div className="contributor-top"><img src={person.avatarUrl} alt={`${person.name} avatar`} /></div><div className="contributor-identity"><p className="handle">@{person.username}</p><h3>{person.name}</h3></div><div className="contributor-meta"><span>{person.date}</span></div></a>)}<Link href="/contribute" className="contributor-card join-card"><Heart /><h3>Your name could be here.</h3><p>Find your first issue and ship something meaningful.</p><span className="text-link">Start contributing <ArrowUpRight /></span></Link></div></div></section> }

export function Issues() { return <section className="section" id="issues"><div className="container"><div className="section-heading"><p className="eyebrow">GOOD FIRST ISSUES</p><h2>Make your first <em>mark.</em></h2></div><div className="issues-grid">{[['Add --json output to resource tables','CLI · formicx/commands/resources.py'],['Colorize CPU & memory thresholds','CLI · formicx/ui/tables.py'],['Build systemd service supervisor','OS Integration · formicxd/service.py']].map((issue, i) => <a href="https://github.com/Abbilaash/Formicx/issues" target="_blank" rel="noreferrer" className="issue-card" key={issue[0]}><div><span className="issue-label">BEGINNER</span><span className="issue-number">#{42-i}</span></div><h3>{issue[0]}</h3><p>{issue[1]}</p><span className="text-link">View issue <ExternalLink /></span></a>)}</div></div></section> }

export function HomeSections() { return <><FeaturesGrid /><section className="section terminal-section"><div className="container split-section"><div className="section-heading"><p className="eyebrow">SEE IT IN ACTION</p><h2>The OS layer for your <em>agent fleet.</em></h2><p>One command to understand every agent, every process, and every policy on your network.</p><div className="mini-stat"><b>100%</b><span>Python-native<br/>agent lifecycle</span></div></div><TerminalSimulator /></div></section><ContributorWall /><Issues /></> }
