'use client'

import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

const outputs = {
  resources: { label: 'Resource Monitor', command: 'formicx agent resources', lines: ['AGENT            PID     CPU      MEM      UPTIME', 'hello-agent      8421    12.4%    128MB    02:14:08', 'researcher       9134     4.8%     84MB    00:43:17', '', 'TOTAL            2 agents online'] },
  status: { label: 'Agent Status', command: 'formicx agent status hello-agent', lines: ['Agent: hello-agent', 'Status: ONLINE / healthy', 'PID: 8421  |  Node: atlas.local', 'Policy: allow → researcher, logger', 'Last heartbeat: 12ms ago'] },
  discovery: { label: 'LAN Discovery', command: 'formicx node discover', lines: ['Scanning _formicx._tcp.local...', '', 'atlas.local       192.168.1.42    ONLINE', 'workstation.local 192.168.1.67    ONLINE', '', '2 peers discovered · 0.82s'] },
}

export function TerminalSimulator() {
  const [tab, setTab] = useState<keyof typeof outputs>('resources')
  const [copied, setCopied] = useState(false)
  const output = outputs[tab]
  const copy = async () => { await navigator.clipboard?.writeText(output.command); setCopied(true); setTimeout(() => setCopied(false), 1400) }
  return <div className="terminal-wrap" id="docs">
    <div className="terminal-tabs">{Object.entries(outputs).map(([key, item]) => <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key as keyof typeof outputs)}><span className="tab-dot" />{item.label}</button>)}</div>
    <div className="terminal-window"><div className="terminal-top"><div className="window-dots"><i/><i/><i/></div><span><Terminal /> formicx — zsh</span><button onClick={copy} aria-label="Copy command">{copied ? <Check /> : <Copy />}</button></div><div className="terminal-body"><p className="muted">Last login: today on ttys001</p><p><strong className="prompt">➜</strong> <span className="cyan">~/formicx</span> <span className="prompt">$</span> {output.command}</p>{output.lines.map((line, i) => <p key={i} className={i === output.lines.length - 1 ? 'cyan' : ''}>{line || '\u00a0'}</p>)}<p><strong className="prompt">➜</strong> <span className="cyan">~/formicx</span> <span className="prompt">$</span><span className="cursor" /></p></div></div>
  </div>
}
