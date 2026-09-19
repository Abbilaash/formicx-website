'use client'

import { useState } from 'react'
import { Check, Copy, Sparkles, Terminal, Cpu, Bot, Zap, BookOpen } from 'lucide-react'

const MCP_CONFIG_JSON = `{
  "mcpServers": {
    "formicx": {
      "command": "python",
      "args": ["-m", "formicx.mcp.main"]
    }
  }
}`

const ASSISTANTS = [
  { name: 'Antigravity', tag: 'Native IDE', active: true },
  { name: 'Cursor', tag: 'AI Editor', active: true },
  { name: 'Claude Desktop', tag: 'Anthropic', active: true },
  { name: 'VS Code / Copilot', tag: 'Extension', active: true },
]

const MCP_TOOLS = [
  {
    name: 'formicx_get_documentation',
    desc: 'Provides full context & SDK guides to AI coding assistants.',
    icon: BookOpen,
  },
  {
    name: 'formicx_list_agents',
    desc: 'Inspects running agent swarms, statuses, and kernel PIDs.',
    icon: Cpu,
  },
  {
    name: 'formicx_send_message',
    desc: 'Dispatches task payloads and fetches responses from agent inboxes.',
    icon: Zap,
  },
  {
    name: 'formicx_register_agent',
    desc: 'Registers agent manifests directly from your IDE environment.',
    icon: Bot,
  },
]

export function McpSection() {
  const [copied, setCopied] = useState(false)

  const copyConfig = async () => {
    await navigator.clipboard?.writeText(MCP_CONFIG_JSON)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section className="section mcp-section" id="mcp">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">
            <Sparkles className="inline-icon" /> MODEL CONTEXT PROTOCOL (MCP)
          </p>
          <h2>
            Connect Formicx to <em>Antigravity & AI Assistants.</em>
          </h2>
          <p>
            Control, monitor, and query your autonomous agent fleet directly from your favorite AI coding assistants using standard STDIO JSON-RPC.
          </p>
        </div>

        <div className="mcp-grid">
          {/* Easy Setup Card */}
          <div className="mcp-card mcp-setup-card">
            <div className="mcp-card-header">
              <span className="mcp-badge">EASY SETUP</span>
              <h3>1-Click MCP Configuration</h3>
            </div>
            <p className="mcp-card-desc">
              Add Formicx to your <code>mcp_config.json</code> in Antigravity, Cursor, or Claude Desktop:
            </p>

            <div className="mcp-code-block">
              <div className="code-header">
                <span>mcp_config.json</span>
                <button onClick={copyConfig} className="copy-btn" aria-label="Copy MCP Config">
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED!' : 'COPY CONFIG'}</span>
                </button>
              </div>
              <pre>
                <code>{MCP_CONFIG_JSON}</code>
              </pre>
            </div>

            <div className="assistants-row">
              <span className="assistants-label">COMPATIBLE ASSISTANTS:</span>
              <div className="assistants-badges">
                {ASSISTANTS.map((ast) => (
                  <span key={ast.name} className="assistant-pill">
                    <span className="pulse-dot" /> {ast.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Exposed MCP Tools & Capabilities */}
          <div className="mcp-card mcp-tools-card">
            <div className="mcp-card-header">
              <span className="mcp-badge mcp-badge-ghost">MCP TOOLS & RESOURCES</span>
              <h3>Exposed Agent Capabilities</h3>
            </div>
            <p className="mcp-card-desc">
              AI Agents gain instant tools to manage, orchestrate, and query Formicx workloads:
            </p>

            <div className="tools-list">
              {MCP_TOOLS.map((t) => {
                const Icon = t.icon
                return (
                  <div key={t.name} className="tool-item">
                    <div className="tool-icon">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="tool-meta">
                      <code>{t.name}</code>
                      <p>{t.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
