'use client'

import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

const outputs = {
  os_install: {
    label: '1. Boot OS',
    command: 'sudo formicx-os-install --target=/dev/nvme0n1',
    lines: [
      'Booting Formicx Debian-Native Agent OS v0.1.0-alpha...',
      '[ OK ] Initialized Linux Kernel 6.6-agent-rt',
      '[ OK ] Started formicxd system supervisor daemon',
      '[ OK ] Enabled mDNS zero-config peer discovery service',
      '[ OK ] Mounted isolated cgroup memory controller for AI agents',
      '',
      'Formicx OS environment ready. Run "formicx agent start" to deploy workloads.'
    ]
  },
  start_agent: {
    label: '2. Spawn Agent',
    command: 'formicx agent start --script ./agents/swarm_leader.py',
    lines: [
      '[+] Registering agent "swarm_leader"...',
      '[+] Assigned Linux Kernel PID: 48192',
      '[+] mDNS advertisement active: swarm_leader.local',
      '[+] Enforcing ACL policy: strict-isolation',
      '',
      'Agent "swarm_leader" is running under kernel process supervision.'
    ]
  },
  monitor: {
    label: '3. Monitor Fleet',
    command: 'formicx agent resources',
    lines: [
      'AGENT          PID     CPU      MEM      UPTIME     NODE',
      'swarm_leader   48192   2.1%     96MB     04:12:30   formicx-os-01',
      'data_fetcher   48210   8.4%    142MB     02:18:15   formicx-os-01',
      '',
      'Formicx OS Telemetry: 2 active agents · 0 policy violations'
    ]
  },
  mcp_start: {
    label: '4. MCP Setup',
    command: 'formicx mcp start',
    lines: [
      '[+] Initializing Formicx Model Context Protocol (MCP) Server...',
      '[ OK ] STDIO JSON-RPC transport ready on stdin/stdout',
      '[ OK ] Registered MCP tools: formicx_list_agents, formicx_send_message, formicx_get_documentation',
      '[ OK ] Connected to local formicxd control plane at http://127.0.0.1:8765',
      '',
      'Formicx MCP Server active. Ready for Antigravity, Cursor, Claude Desktop & Copilot!'
    ]
  },
}

export function TerminalSimulator() {
  const [tab, setTab] = useState<keyof typeof outputs>('os_install')
  const [copied, setCopied] = useState(false)
  const output = outputs[tab]
  const copy = async () => {
    await navigator.clipboard?.writeText(output.command)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="terminal-wrap" id="docs">
      <div className="terminal-tabs">
        {Object.entries(outputs).map(([key, item]) => (
          <button
            key={key}
            className={tab === key ? 'active' : ''}
            onClick={() => setTab(key as keyof typeof outputs)}
          >
            <span className="tab-dot" />
            {item.label}
          </button>
        ))}
      </div>
      <div className="terminal-window">
        <div className="terminal-top">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>
            <Terminal /> formicx-os — bash
          </span>
          <button onClick={copy} aria-label="Copy command">
            {copied ? <Check /> : <Copy />}
          </button>
        </div>
        <div className="terminal-body">
          <p className="muted">Formicx Debian-Native Agent OS (x86_64-linux)</p>
          <p>
            <strong className="prompt">root@formicx-os</strong>:<span className="cyan">~</span># {output.command}
          </p>
          {output.lines.map((line, i) => (
            <p key={i} className={i === output.lines.length - 1 ? 'cyan' : ''}>
              {line || '\u00a0'}
            </p>
          ))}
          <p>
            <strong className="prompt">root@formicx-os</strong>:<span className="cyan">~</span>#<span className="cursor" />
          </p>
        </div>
      </div>
    </div>
  )
}

