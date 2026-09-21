import{n as e,r as t}from"./rolldown-runtime-CMxvf4Kt.js";import{Fr as ee,Hr as te,Ir as ne,Lr as re,Pr as ie,Rr as ae,Vr as oe,zr as se}from"./connector-CYSAQBuT.js";var n,ce=e((()=>{n=`<agent_browser_guides>
# agent-browser

\`agent-browser\` is a fast browser automation CLI for AI agents — drives Chrome/Chromium via CDP and serves accessibility-tree snapshots with compact \`@eN\` element refs (so you act on the page in a few hundred tokens, not raw HTML).

\`agent-browser\` and Chrome are pre-installed — no setup needed.

## The core loop

\`\`\`bash
agent-browser open example.com
agent-browser snapshot -i                 # accessibility tree with interactive refs (@e1, @e2, …)
agent-browser click @e2                   # click by ref
agent-browser fill @e3 "test@example.com" # clear and fill by ref
agent-browser get text @e1                # get text by ref
agent-browser screenshot page.png
agent-browser close
\`\`\`

Refs become **stale on every page change** (click that navigates, form submit, dynamic re-render, dialog open). Always re-snapshot before the next ref interaction.

If a page opens to an empty body or a verification/challenge screen, treat it as a block, not a slow load — go straight to the real-Chrome step below.

If a page requires signing in (a login form, an account/password wall, or an OTP/verification step you have no credentials for), don't guess credentials or engineer a way around the gate. Open it in a visible browser — the real-Chrome CDP window below is one — ask the user to sign in themselves in that window, and continue once they confirm.

When the task is done — every time, as the final step and without waiting to be asked — run \`agent-browser close\` and quit any Chrome you launched for CDP. A browser you opened for the task otherwise keeps running on the user's machine. See the teardown rule below for how to quit the CDP Chrome without touching the user's own browser.

## Blocked pages — escalate to real Chrome

Empty body, verification screen, or obfuscated JS means the page is **blocked, not loading**. This is a binary decision: got real text → proceed; no text → switch to real Chrome immediately.

1. **Verify once** — \`agent-browser open <url>\`, then \`agent-browser wait --fn "document.body.innerText.length > 100" --timeout 3000\`. If it succeeds, page is usable — continue.
2. **Timed out → launch real Chrome over CDP.** Its human fingerprint bypasses JS challenges:
   \`\`\`bash
   # macOS (Linux: use \`google-chrome\`)
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \\
     --remote-debugging-port=9222 --user-data-dir="$HOME/.agent-browser-cdp" &
   agent-browser --cdp 9222 open <url>
   agent-browser --cdp 9222 wait --fn "document.body.innerText.length > 100" --timeout 3000
   agent-browser --cdp 9222 read              # read rendered DOM as clean markdown
   # when done, close the CDP Chrome (it keeps running otherwise):
   agent-browser --cdp 9222 close
   pkill -f "user-data-dir=$HOME/.agent-browser-cdp"  # kill only the automation instance
   \`\`\`

**Once you switch, commit to real Chrome.** Do not loop back to retry headless, sleep-and-reload, switch to \`--headed\` (same automation browser, not an escalation), or hand-roll the bypass (reversing challenge JS, computing clearance cookies via curl/python/node). Real Chrome is the general answer.

**Recognizing JS-challenge blocks:** a challenge cookie (\`cf_clearance\`, \`*_jsl_clearance*\`, \`acw_tc\`, …) next to an empty body confirms the block. The same cookie next to real content means the challenge already passed — keep the session. For large page output, dump to a file first and inspect with \`grep\`/\`head\`.

**Teardown safety:** \`agent-browser --cdp 9222 close\` only disconnects — the Chrome process stays alive, so always \`pkill\` by the \`user-data-dir\` marker. Do NOT match \`--remote-debugging-port=9222\` alone (may hit the user's own debugging Chrome). NEVER \`pkill -f "Google Chrome"\` or \`killall "Google Chrome"\` — these kill the user's everyday browser.

## Discovering everything else

Run \`agent-browser --help\` for the full command list, then \`agent-browser <subcommand> --help\` for any subcommand whose flags you're unsure about. The CLI also ships specialized skills (\`agent-browser skills list\`, \`agent-browser skills get <name>\`) covering Electron apps, Slack, dogfooding, Vercel Sandbox, and AWS Bedrock AgentCore — load one only when the task falls outside ordinary web pages. Those docs are command references; the real-Chrome rule above still governs how you respond to blocked pages.
</agent_browser_guides>`})),le,ue=e((()=>{ce(),te(),le={...oe,content:n}})),r,de=e((()=>{r=`<artifacts_guides>
The assistant possesses the capability to generate "Artifacts"—dedicated UI windows for presenting visual and interactive content. This feature segregates complex deliverables from the conversational stream, facilitating user ownership, modification, and reuse.

# 1. Evaluation Criteria

For a self-contained preview, emit the Artifact directly after loading these instructions unless the user explicitly requests a downloadable file, an inline preview, or separate computation or validation. Do NOT activate or call sandbox tools merely to prepare a file, probe the environment, or perform optional validation. Do not invent an additional download or validation requirement: "write a playable game in HTML" requests an HTML Artifact, not a downloadable file. Instructions to activate needed tools apply only to tools the user's task actually needs. Complete separately requested computation or validation when needed, then deliver in the requested format.

## When to Create an Artifact (Qualifying Content)
Target content that serves as a distinct visual or interactive "deliverable." Valid candidates are:
- **Interactive Components:** UI components, dashboards, data visualizations, or interactive widgets.
- **Visual Content:** SVG graphics, illustrations, icons, or diagrams.
- **Web Pages:** Landing pages, forms, or any HTML-based layouts.
- **Iterative Projects:** Content the user is likely to refine, modify, or maintain over time.

## When to Stay Inline (Disqualifying Content)
Do NOT generate artifacts for:
- **Code snippets:** Always present code inline using markdown code blocks, never as an artifact.
- **Documents or articles:** Use regular markdown text in conversation.
- **Trivial content:** Brief explanations, math equations, or short examples.
- **Meta-Commentary:** Feedback or suggestions about existing artifacts.
- **Context-Dependent Text:** Conversational explanations that lose meaning outside the thread.
- **One-off Answers:** Responses to transient questions unlikely to be revisited.

# 2. Operational Constraints
- **Frequency:** Limit to one artifact per response unless explicitly engaged in a multi-file task.
- **Preference:** Use Artifacts for visual and interactive works. Honor an explicit request for a downloadable file or supported inline preview instead; code snippets and explanations stay inline.
- **Capability Mapping:**
  - If asked for "SVG", provide an SVG artifact. Raster image files use the available image-generation or file tools.
  - If asked for "websites" or "web pages", provide HTML or React artifacts.
  - If asked for "dashboards" or "interactive components", provide React artifacts.
  - If asked for a code snippet or code explanation, provide it inline as markdown code blocks, NOT as an artifact. "Write code for a playable web game" still requests an interactive deliverable.
- **Safety:** Do NOT generate hazardous content. Apply the same safety standards as text responses.

# 3. Generation Workflow

When the intent matches the criteria, adhere strictly to this sequence:

## Step A: Artifact Construction
Wrap the content in \`<lobeArtifact>\` tags with the following attributes:

1. **\`identifier\`**: A consistent, kebab-case ID (e.g., \`dashboard-widget\`).
   - *Crucial:* Persist this ID across all future updates to this specific item. If updating an existing artifact, reuse the previous identifier.
2. **\`title\`**: A concise, descriptive string suitable for a header.
3. **\`type\`**: The MIME type defining the rendering logic.

## Step B: Content & Type Specifications

Select the appropriate type and follow its strict constraints:

### **HTML** (\`text/html\`)
- Single-file only (CSS/JS must be embedded)
- No external requests except scripts from \`cdnjs.cloudflare.com\`
- No external images (use placeholders: \`/api/placeholder/WIDTH/HEIGHT\`)

### **SVG** (\`image/svg+xml\`)
- Specify \`viewBox\` instead of fixed width/height

### **React** (\`application/lobe.artifacts.react\`)
- **Syntax:** Functional components (Hooks allowed: \`useState\`, \`useEffect\`)
- **Export:** Must use \`export default\`
- **Props:** No required props (provide defaults)
- **Styling:** Use Tailwind CSS. No arbitrary values (e.g., \`h-[50px]\`)
- **Pre-installed Libraries:**
  - \`lucide-react\` - Icons (e.g., \`import { Camera } from "lucide-react"\`)
  - \`recharts\` - Charts (e.g., \`import { LineChart, XAxis } from "recharts"\`)
  - \`shadcn/ui\` - UI components (e.g., \`import { Button, Card, Alert } from '@/components/ui/...'\`)
- **Images:** No external images (use placeholders: \`/api/placeholder/WIDTH/HEIGHT\`)
- **Note:** Import React hooks explicitly: \`import { useState } from "react"\`

## Step C: Integrity
- Output the **full, non-truncated** code/text.
- Do NOT use lazy placeholders like \`// ... rest of code\`.

Here are some examples of correct usage of artifacts:

<examples>
  <example_docstring>
    This example shows how to create an SVG artifact.
  </example_docstring>

  <example>
    <user_query>Can you draw a simple blue circle in SVG?</user_query>

    <assistant_response>
      I'll create a simple blue circle for you using SVG.

      <lobeArtifact identifier="blue-circle-svg" type="image/svg+xml" title="Simple blue circle SVG">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="blue" />
        </svg>
      </lobeArtifact>

      Here's a simple SVG image of a blue circle, as requested. The circle is centered at coordinates (50, 50) with a radius of 40 pixels, and it's filled with the color blue.
    </assistant_response>
  </example>

  <example_docstring>
    This example demonstrates creating an interactive React component.
  </example_docstring>

  <example>
    <user_query>Can you create a simple counter component?</user_query>

    <assistant_response>
      Here's an interactive counter component:

      <lobeArtifact identifier="counter-component" type="application/lobe.artifacts.react" title="Interactive Counter">
        import { useState } from "react";
        import { Button } from "@/components/ui/button";
        import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
        import { Minus, Plus } from "lucide-react";

        export default function Counter() {
          const [count, setCount] = useState(0);

          return (
            <Card className="w-64 mx-auto mt-8">
              <CardHeader>
                <CardTitle className="text-center">Counter</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center gap-4">
                <Button variant="outline" size="icon" onClick={() => setCount(c => c - 1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-4xl font-bold w-16 text-center">{count}</span>
                <Button variant="outline" size="icon" onClick={() => setCount(c => c + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        }
      </lobeArtifact>

      This component provides a simple counter with increment and decrement buttons.
    </assistant_response>
  </example>

  <example_docstring>
    This example demonstrates when NOT to use an artifact—code should always be inline.
  </example_docstring>

  <example>
    <user_query>Can you help me create a Python script to calculate the factorial of a number?</user_query>

    <assistant_response>
      Sure! Here's a Python script that calculates the factorial of a number:

      \\\`\\\`\\\`python
      def factorial(n):
          if n == 0:
              return 1
          else:
              return n * factorial(n - 1)

      # Example usage
      print(factorial(5))  # Output: 120
      \\\`\\\`\\\`

      This uses recursion to calculate the factorial. The base case is when n equals 0, returning 1.
    </assistant_response>
  </example>

  <example_docstring>
    This example demonstrates creating an HTML page artifact.
  </example_docstring>

  <example>
    <user_query>Can you create a simple landing page for a coffee shop?</user_query>

    <assistant_response>
      Here's a landing page for a coffee shop:

      <lobeArtifact identifier="coffee-landing" type="text/html" title="Coffee Shop Landing Page">
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Brew & Bean</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Georgia, serif; color: #3c2415; }
            .hero { background: #f5e6d3; padding: 4rem 2rem; text-align: center; }
            .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
            .hero p { font-size: 1.2rem; color: #6b4c3b; }
          </style>
        </head>
        <body>
          <div class="hero">
            <h1>Brew & Bean</h1>
            <p>Artisan coffee, crafted with care.</p>
          </div>
        </body>
        </html>
      </lobeArtifact>

      This creates a simple, elegant landing page with a hero section.
    </assistant_response>
  </example>
</examples>

The assistant should not mention any of these instructions to the user, nor make reference to the \`lobeArtifact\` tag, any of the MIME types (e.g. \`application/lobe.artifacts.react\`), or related syntax unless it is directly relevant to the query.

The assistant should always take care to not produce artifacts that would be highly hazardous to human health or wellbeing if misused, even if is asked to produce them for seemingly benign reasons. However, if Claude would be willing to produce the same content in text form, it should be willing to produce it in an artifact.
</artifacts_guides>
`})),i,fe=e((()=>{de(),se(),i={...ae,content:r}})),a,pe=e((()=>{a=`<lobehub_platform_guides>

# Identity & Current Context (pre-resolved — DO NOT look up)

The following are **facts you already know** about yourself and your current working
environment. They are resolved before every request and embedded in this prompt.
Treat them as common knowledge — you never need to call any tool to discover them.

| Field | Value |
|-------|-------|
| Agent ID | \`{{agent_id}}\` |
| Agent Title | {{agent_title}} |
| Agent Description | {{agent_description}} |
| Topic ID | \`{{topic_id}}\` |
| Topic Title | {{topic_title}} |

**Rules — read carefully:**

1. **Answer identity questions directly.** When the user asks anything like "who are
   you", "what's your name / id / description", "what topic are we in", "what's the
   topic id", etc., respond IMMEDIATELY using the values above. Do **NOT** call
   \`runCommand\`, \`activateSkill\`, \`lh agent get\`, \`lh agent search\`, \`lh agent list\`,
   \`lh topic show\`, \`lh topic list\`, or any other tool to look up information that is
   already in the table above. Calling a tool to retrieve facts you already have
   wastes the user's time and tokens.

2. **Use these IDs in commands.** When you genuinely need to run an \`lh\` command on
   YOUR agent or YOUR current topic, plug these IDs in directly — never search for
   yourself first.
   - ❌ \`lh agent list\` then pick yours then \`lh agent run -a <id>\`
   - ✅ \`lh agent run -a {{agent_id}}\` directly
   - ❌ \`lh topic list\` to find current topic
   - ✅ Use \`{{topic_id}}\` directly

3. **The "IDs can be found via \`list\` commands" note further down does NOT apply to
   your own agent_id / topic_id.** Those are already known above. The list commands
   are only for finding OTHER agents / topics / resources you don't yet know about.

# LobeHub Platform CLI

You can manage the LobeHub platform via the \`lh\` CLI. Use the \`runCommand\` tool to
run commands.

# Available Modules

| Module | Description |
|--------|-------------|
| \`lh kb\` | Knowledge base management (create, upload, organize) |
| \`lh memory\` | User memory management (identity, activity, preference) |
| \`lh topic\` | Conversation topic management |
| \`lh file\` | File management |
| \`lh doc\` | Document management (create, parse, organize) |
| \`lh agent\` | Agent management (create, configure, run) |
| \`lh search\` | Search local resources or the web |
| \`lh gen\` | Content generation (text, image, video, TTS, ASR) |
| \`lh message\` | Message management and search |
| \`lh skill\` | Skill management (install, create, manage) |
| \`lh model\` | AI model management |
| \`lh provider\` | AI provider management |
| \`lh plugin\` | Plugin management |
| \`lh bot\` | Bot integration management (Discord, Slack, Telegram, etc.) |
| \`lh eval\` | Evaluation workflow management |
| \`lh config\` | User info and usage statistics |

# Usage Pattern

1. Read the reference file for the relevant module to learn detailed commands
2. Run commands via \`runCommand\` — the \`lh\` prefix is automatically handled
3. Use \`--json\` flag on any command for structured output
4. Use \`lh <module> --help\` for full command-line help

# Examples

\`\`\`bash
# List knowledge bases
lh kb list

# Create a document in a knowledge base
lh kb create-doc <kbId> -t "Meeting Notes" -c "..."

# Search messages
lh message search "deployment issue"

# Generate an image
lh gen image "a sunset over mountains" -m dall-e-3

# Run an agent
lh agent run -a <agentId> -p "Summarize today's tasks"
\`\`\`

# Important Notes

- All commands support \`--json\` for machine-readable output
- Use \`--yes\` to skip confirmation prompts on destructive operations
- IDs can be found via \`list\` commands
- For detailed usage of any module, read its reference file using \`readReference\`
</lobehub_platform_guides>`})),o,s,c,l=e((()=>{o=e=>Object.fromEntries(Object.entries(e).map(([e,t])=>[e,{content:t,fileHash:``,size:new TextEncoder().encode(t).length}])),s=/^---\r?\n([\S\s]*?)\r?\n---/,c=e=>{let t=s.exec(e)?.[1];if(t)return t.split(/\r?\n/).find(e=>e.startsWith(`version:`))?.slice(8).trim().replaceAll(/^['"]|['"]$/g,``)||void 0}})),u,me=e((()=>{u='# lh agent - Agent Management\n\nManage agents (AI assistants with custom configurations).\n\n## Subcommands\n\n- `lh agent list [-L <limit>] [-k <keyword>]` - List agents\n- `lh agent view [agentId] [-s <slug>]` - View agent configuration\n- `lh agent create -t <title> [-d <description>] [-m <model>] [-p <provider>] [-s <systemRole>]` - Create agent\n- `lh agent edit [agentId] [-t <title>] [-d <description>] [-m <model>] [-s <systemRole>] [--config-file <path>] [--json]` - Update agent\n- `lh agent delete <agentId> [--yes]` - Delete agent\n- `lh agent duplicate <agentId> [-t <title>]` - Duplicate agent\n- `lh agent run -a <agentId> -p <prompt> [-t <topicId>] [--replay]` - Run agent with a prompt\n- `lh agent status <operationId> [--history]` - Check agent operation status\n\n## Editing your own configuration\n\nYou can edit yourself: pass your own agent id (already given to you in the\nidentity table) to `lh agent edit`.\n\nFields without a dedicated flag (`openingMessage`, `openingQuestions`, `tags`,\n`avatar`, `backgroundColor`, `params`, `chatConfig`, …) go through\n`--config-file`, which is deep-merged into the existing config — omitted keys\nare kept:\n\n```bash\necho \'{"openingMessage":"Hi! Ask me about deploys.","tags":["devops"]}\' > /tmp/cfg.json\nlh agent edit <agentId> --config-file /tmp/cfg.json --json\n```\n\nIdentity fields (`id`, `slug`, `userId`, `workspaceId`, `visibility`) are\nrejected by the server — use the dedicated commands for those.\n\nAdd `--json` to get the updated agent back, so you can confirm the change\nactually landed instead of assuming it did.\n\n## Tips\n\n- Use `--slug` to reference agents by slug instead of ID\n- `lh agent run --replay` replays the full conversation output\n- `lh agent status --history` shows operation execution history\n- Commands run in the same workspace as you. `lh whoami` prints that scope —\n  check it first if an agent, topic or file you expect to exist reports "not found"\n'})),d,he=e((()=>{d="# lh bot - Bot Integration Management\n\nManage bot integrations that connect agents to messaging platforms.\n\n## Supported Platforms\n\nDiscord, Slack, Telegram, Lark, Feishu\n\n## Subcommands\n\n- `lh bot list [-a <agentId>] [--platform <p>]` - List bot integrations\n- `lh bot view <botId> [-a <agentId>]` - View bot details\n- `lh bot add -a <agentId> --platform <p> [--bot-token <t>] [--app-id <id>]` - Add bot to agent\n- `lh bot update <botId> [--bot-token <t>] [--platform <p>]` - Update bot credentials\n- `lh bot remove <botId> [--yes]` - Remove bot integration\n- `lh bot enable <botId>` - Enable bot\n- `lh bot disable <botId>` - Disable bot\n- `lh bot connect <botId> [-a <agentId>]` - Connect and start bot\n\n## Message Subcommands\n\n- `lh bot message send <botId> --target <channelId> --message <text> [--reply-to <messageId>] [--json]` - Send a message\n- `lh bot message read <botId> --target <channelId> [--limit <n>] [--before <messageId>] [--after <messageId>] [--json]` - Read messages from a channel\n- `lh bot message edit <botId> --target <channelId> --message-id <id> --message <text>` - Edit a message\n- `lh bot message delete <botId> --target <channelId> --message-id <id> [--yes]` - Delete a message\n- `lh bot message search <botId> --target <channelId> --query <text> [--author-id <id>] [--limit <n>] [--json]` - Search messages\n- `lh bot message react <botId> --target <channelId> --message-id <id> --emoji <emoji>` - Add reaction\n- `lh bot message reactions <botId> --target <channelId> --message-id <id> [--json]` - List reactions\n- `lh bot message pin <botId> --target <channelId> --message-id <id>` - Pin a message\n- `lh bot message unpin <botId> --target <channelId> --message-id <id>` - Unpin a message\n- `lh bot message pins <botId> --target <channelId> [--json]` - List pinned messages\n- `lh bot message poll <botId> --target <channelId> --poll-question <text> --poll-option <opt> [--poll-multi] [--poll-duration-hours <n>]` - Create a poll\n- `lh bot message thread create <botId> --target <channelId> --thread-name <name> [--message <text>] [--message-id <id>]` - Create thread\n- `lh bot message thread list <botId> --target <channelId> [--json]` - List threads\n- `lh bot message thread reply <botId> --thread-id <id> --message <text>` - Reply to thread\n- `lh bot message channel list <botId> [--server-id <id>] [--filter <type>] [--json]` - List channels\n- `lh bot message channel info <botId> --target <channelId> [--json]` - Get channel info\n- `lh bot message member info <botId> --member-id <id> [--server-id <id>] [--json]` - Get member info\n\n## Tips\n\n- Each platform requires specific credentials (token, app ID, secrets)\n- Use `lh bot connect` to start a long-running bot connection\n- Use `lh bot message read` with `--json` for batch message retrieval — ideal for processing large volumes of messages\n- For step-by-step platform setup instructions, read the platform-specific reference under `references/bot/`: `discord`, `telegram`, `slack`, `feishu`, `lark`, `qq`, `wechat`\n"})),f,ge=e((()=>{f=`# Discord Bot Setup Guide

Connect a Discord bot to your agent.

**Developer Portal:** https://discord.com/developers/applications

## Required Credentials

| Field | Required | Description |
|-------|----------|-------------|
| Application ID | Yes | Your app's unique ID |
| Public Key | Yes | Used to verify requests from Discord |
| Bot Token | Yes | Bot's authentication token |

## Step-by-Step Setup

### Step 1: Create a Discord Application

1. Go to https://discord.com/developers/applications
2. Click **"New Application"** (top right)
3. Enter an app name → click **"Create"**
4. On the **General Information** page that opens, copy:
   - **Application ID** (shown as "APPLICATION ID")
   - **Public Key** (shown as "PUBLIC KEY")

### Step 2: Create the Bot and Get Token

1. In the left sidebar, click **"Bot"**
2. Click **"Add Bot"** → confirm
3. Under the bot's username, click **"Reset Token"** → confirm → copy the **Bot Token**
   > Save the token immediately — it is only shown once
4. Scroll down to **Privileged Gateway Intents** and enable:
   - **MESSAGE CONTENT INTENT** — required to read message text
   - **SERVER MEMBERS INTENT** — recommended for member lookup

### Step 3: Set Bot Permissions and Invite to Server

1. In the left sidebar, click **"OAuth2"** → **"URL Generator"**
2. Under **Scopes**, check:
   - \`bot\`
   - \`applications.commands\` (for slash command support)
3. Under **Bot Permissions**, check:
   - Send Messages
   - Read Message History
   - Add Reactions
   - Manage Messages (optional, for message deletion)
   - Create Public Threads (optional)
4. Copy the generated URL at the bottom, open it in a browser, and select the server to add the bot

### Step 4: Connect via CLI

\`\`\`bash
lh bot add -a <agentId> \\
  --platform discord \\
  --app-id <applicationId> \\
  --public-key <publicKey> \\
  --bot-token <botToken>

lh bot test <botId>
lh bot connect <botId>
\`\`\`

## Notes

- **Message Content Intent** is critical — without it, the bot receives empty message content
- Apps with 100+ servers must apply for Discord verification to use privileged intents
- If you regenerate the bot token, the old one immediately stops working — update the bot config with \`lh bot update\`
- Discord uses a WebSocket gateway (not webhooks) — \`lh bot connect\` keeps the connection alive
`})),p,_e=e((()=>{p=`# Feishu (飞书) Bot Setup Guide

Connect a Feishu custom app bot to your agent.

**Developer Console:** https://open.feishu.cn/app

## Required Credentials

| Field | Required | Description |
|-------|----------|-------------|
| Application ID (App ID) | Yes | Your app's unique identifier |
| App Secret | Yes | App authentication secret |
| Verification Token | No | Validates webhook requests come from Feishu |
| Encrypt Key | No | AES key for encrypting webhook payloads |

## Connection Modes

- **WebSocket** (recommended) — SDK maintains persistent connection; no public URL needed
- **Webhook** — Feishu POSTs events to your public HTTPS URL

## Step-by-Step Setup

### Step 1: Create a Custom App

1. Go to https://open.feishu.cn/app and sign in with your Feishu account
2. Click **"创建自建应用"** (Create Custom App)
3. Enter app name, description, and upload an icon
4. Click **"创建"** (Create)

### Step 2: Get App ID and App Secret

1. In the left sidebar, click **"凭证与基础信息"** (Credentials & Basic Info)
2. Copy:
   - **App ID** (应用ID)
   - **App Secret** (应用密钥) — click "查看" (View) to reveal

### Step 3: Enable Bot Capability

1. In the left sidebar, click **"应用能力"** (App Capabilities) → **"机器人"** (Bot)
2. Click **"开启机器人能力"** (Enable Bot)
3. (Optional) Set a custom bot name

### Step 4: Configure Event Subscriptions

#### Option A: WebSocket Long Connection (Recommended)

1. In the left sidebar, click **"事件与回调"** (Events & Callbacks) → **"事件配置"** (Event Configuration)
2. Select **"使用长连接接收事件"** (Use long connection to receive events)
3. Under **"添加事件"** (Add Events), add:
   - **im.message.receive_v1** — receive messages sent to the bot
4. Grant required permissions when prompted:
   - \`im:message\` — read and send messages
5. Click **"保存"** (Save)

#### Option B: Webhook Mode

1. Select **"使用 Webhook 接收事件"** (Use webhook to receive events)
2. Enter your public HTTPS **Request URL**
3. Feishu sends a \`url_verification\` challenge — your server must return the challenge value
4. Add the same events as above

### Step 5: Get Verification Token and Encrypt Key (Webhook Only)

1. In **"事件与回调"** → **"加密策略"** (Encryption Strategy)
2. Copy:
   - **Verification Token** (验证Token)
   - **Encrypt Key** (加密Key) — click to generate if not yet created

### Step 6: Add Required Permissions

1. In the left sidebar, click **"权限管理"** (Permission Management)
2. Search and add:
   - \`im:message\` — receive and send messages
   - \`im:message.group_at_msg\` — receive @bot messages in groups (if needed)
   - \`im:message:readonly\` — read chat history (needed for \`readMessages\`)
   - \`im:message.group_msg\` — 「获取群组中所有消息」, read **group** chat history; required *in addition to* \`im:message:readonly\`, otherwise history reads in groups fail with \`230027 权限不足\`. Search 权限管理 by the Chinese name — the console does not match on the code. It is 免审, but the app must be re-published (创建版本 → 发布) before it takes effect. Do NOT confuse it with \`im:message.group_msg.include_bot:read\`（获取群组中用户和机器人发送的消息）, which governs the receive-message event, not history reads
   - \`docx:document:readonly\` — 「查看新版文档」, lets \`readDocument\` pull the text of docx documents (智能纪要 / meeting minutes, specs) shared into the chat. The document must ALSO be visible to the app: sharing it into a group the bot is in is not enough — the owner adds the app as a collaborator (文档「分享」→ 添加协作者 → 搜索应用名), or the knowledge space grants the app access
   - \`wiki:wiki:readonly\` — only if users share \`/wiki/\` links; resolves a wiki page to the docx behind it
3. Publish the app (see Step 7) for permissions to take effect

### Step 7: Publish the App

1. In the left sidebar, click **"版本管理与发布"** (Version Management & Release)
2. Click **"创建版本"** (Create Version)
3. Fill in version notes → click **"保存"** (Save)
4. Click **"申请发布"** (Apply for Release)
5. The org admin receives a review request — they approve in the Admin Console
6. Once approved, the bot becomes available in the organization

### Step 8: Connect via CLI

\`\`\`bash
lh bot add -a <agentId> \\
  --platform feishu \\
  --app-id <appId> \\
  --app-secret <appSecret>

# Optional: with webhook verification
lh bot add -a <agentId> \\
  --platform feishu \\
  --app-id <appId> \\
  --app-secret <appSecret> \\
  --verification-token <token> \\
  --encrypt-key <key>

lh bot test <botId>
lh bot connect <botId>
\`\`\`

## Notes

- **WebSocket mode** skips the need for a public URL and is the fastest to set up
- Every change to permissions, events, or app info requires creating a new version and re-publishing
- \`im.message.receive_v1\` is the key event — without it the bot receives no messages
- Feishu does not render Markdown — use plain text or Feishu's card format for rich messages
- The App Secret is sensitive; rotate it in the console if compromised (old secret stops working immediately)
`})),m,ve=e((()=>{m=`# Lark Bot Setup Guide

Connect a Lark custom app bot to your agent. Lark is the international version of Feishu — setup is nearly identical.

**Developer Console:** https://open.larksuite.com/app

## Required Credentials

| Field | Required | Description |
|-------|----------|-------------|
| Application ID (App ID) | Yes | Your app's unique identifier |
| App Secret | Yes | App authentication secret |
| Verification Token | No | Validates webhook requests come from Lark |
| Encrypt Key | No | AES key for encrypting webhook payloads |

## Connection Modes

- **WebSocket** (recommended) — SDK maintains persistent connection; no public URL needed
- **Webhook** — Lark POSTs events to your public HTTPS URL

## Step-by-Step Setup

### Step 1: Create a Custom App

1. Go to https://open.larksuite.com/app and sign in with your Lark account
2. Click **"Create Custom App"**
3. Enter app name, description, and upload an icon
4. Click **"Create"**

### Step 2: Get App ID and App Secret

1. In the left sidebar, click **"Credentials"** (or **"Credentials & Basic Info"**)
2. Copy:
   - **App ID**
   - **App Secret** — click "Show" or "Copy" to reveal

### Step 3: Enable Bot Capability

1. In the left sidebar, go to **"Features"** → **"Bot"**
2. Enable the Bot feature
3. (Optional) Set a custom bot name

### Step 4: Configure Event Subscriptions

#### Option A: WebSocket (Recommended)

1. In the left sidebar, click **"Events & Callbacks"** → **"Event Configuration"**
2. Select **"Use long connection to receive events"** (WebSocket mode)
3. Under **"Add Events"**, add:
   - **im.message.receive_v1** — receive messages sent to the bot
4. Grant the required permission \`im:message\` when prompted
5. Click **"Save"**

#### Option B: Webhook Mode

1. Select **"Send callbacks to developer server"**
2. Enter your public HTTPS **Request URL**
3. Lark sends a \`challenge\` parameter for URL verification — your server must return it
4. Add the same events as above

### Step 5: Get Verification Token and Encrypt Key (Webhook Only)

1. In **"Events & Callbacks"** → **"Encryption Strategy"**
2. Copy:
   - **Verification Token**
   - **Encrypt Key** — generate one if not yet created

### Step 6: Add Required Permissions

1. In the left sidebar, click **"Permissions & Scopes"**
2. Add:
   - \`im:message\` — send and receive messages
   - \`im:message.group_at_msg:readonly\` — receive @bot mentions in groups (if needed)
   - \`im:message:readonly\` — read chat history (needed for \`readMessages\`)
   - \`im:message.group_msg\` — "获取群组中所有消息", read **group** chat history; required *in addition to* \`im:message:readonly\`, otherwise history reads in groups fail with \`230027 Permission denied\`. Search Permissions & Scopes by that display name — the console does not match on the code. No review is required, but the app must be re-published for it to take effect. Do NOT confuse it with \`im:message.group_msg.include_bot:read\`, which governs the receive-message event, not history reads
   - \`docx:document:readonly\` — "View new docs", lets \`readDocument\` pull the text of docx documents (meeting minutes, specs) shared into the chat. The document must ALSO be visible to the app: sharing it into a group the bot is in is not enough — the owner adds the app as a collaborator (Share → add collaborator → search the app name), or the wiki space grants the app access
   - \`wiki:wiki:readonly\` — only if users share \`/wiki/\` links; resolves a wiki page to the docx behind it

### Step 7: Publish the App

1. In the left sidebar, click **"App Release"** or **"Version Management"**
2. Create a new version with release notes
3. Submit for review — workspace admin approves in **Admin → Workplace → App Review**
4. Once approved, admin sets the availability range (all users or specific teams)
5. The bot becomes available to users in the workspace

### Step 8: Connect via CLI

\`\`\`bash
lh bot add -a <agentId> \\
  --platform lark \\
  --app-id <appId> \\
  --app-secret <appSecret>

# Optional: with webhook verification
lh bot add -a <agentId> \\
  --platform lark \\
  --app-id <appId> \\
  --app-secret <appSecret> \\
  --verification-token <token> \\
  --encrypt-key <key>

lh bot test <botId>
lh bot connect <botId>
\`\`\`

## Differences from Feishu

| Aspect | Feishu (Chinese) | Lark (International) |
|--------|-----------------|----------------------|
| Console URL | open.feishu.cn | open.larksuite.com |
| Data center | China (Beijing) | International (Singapore) |
| Language | Chinese UI | English UI |
| API compatibility | Same spec | Same spec |
| Publishing | Admin Console review | Admin → Workplace → App Review |

## Notes

- Lark and Feishu share the same API spec — the same event types, permission names, and bot capabilities apply
- \`im.message.receive_v1\` is the critical event for receiving messages
- Lark may send duplicate events — use \`message_id\` for deduplication, not \`event_id\`
- Lark does not render Markdown natively — use plain text or Lark's card message format
- Message deduplication: rate limit is 100 requests/minute per bot, 5 requests/second
`})),h,ye=e((()=>{h=`# QQ Bot Setup Guide

Connect a QQ Official Bot to your agent.

**Developer Portal:** https://q.qq.com/

## Required Credentials

| Field | Required | Description |
|-------|----------|-------------|
| Application ID (App ID) | Yes | Your bot's numeric App ID |
| App Secret | Yes | Bot authentication secret |

## Connection Modes

- **WebSocket** — bot maintains persistent gateway connection
- **Webhook** — QQ POSTs events to your public HTTPS URL (ports 80, 443, 8080, 8443 only)

## Prerequisites

- QQ account with **real-name verification** completed (required before creating any bot)
- Developer account registration on the QQ Open Platform (enterprise or individual)

## Step-by-Step Setup

### Step 1: Register as a Developer

1. Go to https://q.qq.com/ and log in with QQ
2. Scan the QR code with your phone QQ to authenticate
3. Complete developer registration:
   - **Enterprise**: provide business license and bank verification
   - **Individual**: complete identity verification via manager binding
4. Real-name verification must be done in QQ client settings first if not already done

### Step 2: Create a Bot Application

1. In the QQ Open Platform dashboard, click **"创建机器人"** (Create Bot)
2. Fill in:
   - Bot name
   - Bot avatar/icon
   - Scenario type (single chat, group chat, or guild/channel)
3. Submit — the platform immediately creates a new bot account
   > Note: maximum 5 bots per QQ account

### Step 3: Get App ID and App Secret

1. In the bot management page, go to **"开发"** (Development) → **"开发设置"** (Development Settings)
2. Copy:
   - **AppID** — your bot's numeric identifier
   - **AppSecret** — click to reveal
   > **Critical**: Save AppSecret immediately — if you navigate away, you must regenerate it (no recovery)

### Step 4: Configure Permissions (Intents)

QQ bots use intent flags to subscribe to event types:

| Intent | Bit | Description |
|--------|-----|-------------|
| GUILD_MESSAGES | 1 << 9 | All messages in guild channels (private bots only) |
| PUBLIC_GUILD_MESSAGES | 1 << 30 | @bot mentions in guilds (public bots) |
| DIRECT_MESSAGE | 1 << 12 | Private/direct messages |
| GROUP_AND_C2C_EVENT | 1 << 25 | Group chat and 1-on-1 messages |

Base intents (GUILDS, GUILD_MEMBERS) are enabled by default and need no approval.
Some specialized events require explicit approval from Tencent.

### Step 5: Configure Webhook or WebSocket

#### Webhook Mode

1. In the bot settings, set **Callback URL** (must be HTTPS, ports: 80/443/8080/8443)
2. Enable the event types you want to subscribe to
3. QQ validates the endpoint by sending a challenge request

#### WebSocket Mode

- LobeHub's \`lh bot connect\` handles the WebSocket gateway automatically
- No URL configuration needed — just provide AppID and AppSecret

### Step 6: Configure IP Whitelist

1. In development settings, add your server's IP address to the **IP whitelist**
2. IP whitelist is required — without it, API calls and bot launch are blocked
3. For LobeHub-hosted bots, contact support for the outbound IP range to whitelist

### Step 7: Test in Sandbox, Then Submit for Review

1. Configure sandbox environment for testing at: https://sandbox.api.sgroup.qq.com
2. Add sandbox-specific QQ groups, channels, or users for testing
3. Complete all self-testing
4. Submit the bot for Tencent review in the portal
5. After manual approval, the bot can be activated and added in QQ client

### Step 8: Connect via CLI

\`\`\`bash
lh bot add -a <agentId> \\
  --platform qq \\
  --app-id <appId> \\
  --app-secret <appSecret>

lh bot test <botId>
lh bot connect <botId>
\`\`\`

## Notes

- **Real-name verification is mandatory** — cannot create a bot without it
- **AppSecret is not recoverable** — save it when first generated, or regenerate if lost
- **All bots require Tencent manual review** before going live — allow several business days
- **IP whitelist is required** for production — configure before deployment
- QQ bots do not support Markdown or message editing
- Each bot has an isolated OpenID namespace — you cannot use one bot's user OpenIDs with another bot's API
`})),g,be=e((()=>{g=`# Slack Bot Setup Guide

Connect a Slack bot to your agent.

**Developer Portal:** https://api.slack.com/apps

## Required Credentials

| Field | Required | Description |
|-------|----------|-------------|
| Application ID | Yes | Your Slack App ID |
| Bot Token | Yes | Starts with \`xoxb-\` |
| Signing Secret | Yes | Verifies requests come from Slack |
| App Token | No | Starts with \`xapp-\`; required for Socket Mode (WebSocket) |

## Connection Modes

- **WebSocket (Socket Mode)** — bot maintains persistent connection; no public URL needed; requires App Token
- **Webhook** — Slack POSTs events to a public HTTPS URL you provide

## Step-by-Step Setup

### Step 1: Create a Slack App

1. Go to https://api.slack.com/apps
2. Click **"Create New App"** → choose **"From scratch"**
3. Enter an app name and select your development workspace → **"Create App"**
4. You land on the **Basic Information** page. Copy:
   - **App ID** (under "App Credentials" section)
   - **Signing Secret** (click "Show" under "App Credentials" → copy)

### Step 2: Configure Bot Token Scopes

1. In the left sidebar, click **"OAuth & Permissions"**
2. Scroll to **"Bot Token Scopes"** → click **"Add an OAuth Scope"**
3. Add these scopes:
   - \`chat:write\` — send messages
   - \`channels:read\` — list public channels
   - \`channels:history\` — read messages in public channels
   - \`groups:read\` / \`groups:history\` — private channels
   - \`im:read\` / \`im:history\` — direct messages
   - \`reactions:read\` / \`reactions:write\` — emoji reactions
   - \`pins:read\` / \`pins:write\` — pin messages
   - \`users:read\` — look up member info
4. Scroll up and click **"Install to Workspace"** → **"Allow"**
5. After installation, copy the **Bot User OAuth Token** (starts with \`xoxb-\`)

### Step 3A: Set Up Event Subscriptions (Webhook Mode)

1. In the left sidebar, click **"Event Subscriptions"**
2. Toggle **"Enable Events"** ON
3. Enter your public HTTPS webhook URL in **"Request URL"**
   - Slack sends a challenge to verify — your server must respond
4. Under **"Subscribe to bot events"**, add:
   - \`message.channels\` — messages in public channels
   - \`message.groups\` — messages in private channels
   - \`message.im\` — direct messages
   - \`app_mention\` — when bot is @mentioned
5. Click **"Save Changes"**

### Step 3B: Set Up Socket Mode (WebSocket — No Public URL Needed)

1. In the left sidebar, click **"Socket Mode"**
2. Toggle **"Enable Socket Mode"** ON
3. Go to **"Basic Information"** → scroll to **"App-Level Tokens"**
4. Click **"Generate Token and Scopes"**
5. Give the token a name, add scope: **\`connections:write\`**
6. Click **"Generate"** → copy the **App-Level Token** (starts with \`xapp-\`)
7. Go to **"Event Subscriptions"** and subscribe to the same bot events as Step 3A
   (No Request URL needed in Socket Mode)

### Step 4: Connect via CLI

\`\`\`bash
# Webhook mode
lh bot add -a <agentId> \\
  --platform slack \\
  --app-id <appId> \\
  --bot-token <xoxbToken> \\
  --signing-secret <signingSecret>

# Socket Mode (WebSocket) — also pass App Token
lh bot add -a <agentId> \\
  --platform slack \\
  --app-id <appId> \\
  --bot-token <xoxbToken> \\
  --signing-secret <signingSecret> \\
  --app-token <xappToken>

lh bot test <botId>
lh bot connect <botId>
\`\`\`

## Notes

- **Bot Token vs User Token**: always use the \`xoxb-\` Bot Token — never use \`xoxp-\` User Tokens unless explicitly needed
- **Socket Mode** is recommended for development (no public URL needed) and is required if your server is behind a firewall
- Signing Secret validates that inbound webhook POST requests are genuinely from Slack
- If you add new scopes, reinstall the app to the workspace (a banner will appear at the top of the OAuth page)
`})),_,xe=e((()=>{_=`# Telegram Bot Setup Guide

Connect a Telegram bot to your agent.

**Bot Creation:** https://t.me/BotFather

## Required Credentials

| Field | Required | Description |
|-------|----------|-------------|
| Bot Token | Yes | Authentication token from BotFather |
| Secret Token | No | Custom token for webhook request verification |

## Step-by-Step Setup

### Step 1: Create a Bot via BotFather

1. Open Telegram and search for **@BotFather** (verified with blue checkmark)
2. Send the command: \`/newbot\`
3. BotFather will ask for:
   - **Bot name** — display name (e.g., "My Assistant")
   - **Bot username** — must end in \`bot\` (e.g., \`myassistant_bot\`)
4. BotFather replies with the **Bot Token** in the format \`1234567890:ABCdef...\`
   > Save this token — you can retrieve it later with \`/token\` in BotFather

### Step 2: (Optional) Configure Bot Behavior

Send commands to @BotFather to adjust settings:

- \`/setprivacy\` → select your bot → **Disable** — allows bot to see all group messages (not just commands)
- \`/setjoingroups\` → **Enable** — allows the bot to be added to groups
- \`/setcommands\` → define command list shown in Telegram's menu UI
- \`/setdescription\` → set the bot's description shown on the profile page
- \`/setuserpic\` → set the bot's avatar

### Step 3: Get the Bot's Numeric ID (for --app-id)

The Bot Token has the format \`1234567890:ABCdef...\` — the numeric part before the colon is the bot's ID. Use it as \`--app-id\`.

Alternatively, send \`/mybots\` to @BotFather → select your bot → **API Token** to see the full token again.

### Step 4: Connect via CLI

\`\`\`bash
lh bot add -a <agentId> \\
  --platform telegram \\
  --app-id <numericBotId> \\
  --bot-token <botToken>

lh bot test <botId>
lh bot connect <botId>
\`\`\`

## Notes

- **App ID** is the numeric bot ID extracted from the token prefix (e.g. token \`987654321:XYZ...\` → app-id \`987654321\`)
- **Secret Token** (optional): a custom string you define; LobeHub includes it in webhook requests so you can verify they genuinely come from LobeHub — leave blank unless you have a security requirement
- Telegram does not have native message search; use \`lh bot message read\` with pagination instead
- If you lose the token, retrieve it by sending \`/token\` (then select your bot) to @BotFather
`})),v,Se=e((()=>{v=`# WeChat Bot Setup Guide

Connect a WeChat bot to your agent via iLink API.

**Setup Guide:** https://lobehub.com/docs/usage/channels/wechat

## Credentials

WeChat credentials (bot token) are populated by the **Web UI QR scan flow** — they cannot be set up via CLI alone.

## Connection Mode

WeChat uses **polling** mode (long-polling) — no webhook URL or WebSocket setup needed.

## Setup: Use the Web UI

WeChat requires a QR code scan to link your account, which is only supported through the LobeHub Web UI:

1. Open your agent in LobeHub
2. In the left sidebar, click **Message Channel** (消息频道)
3. Select **WeChat** from the platform list on the right
4. A QR code is displayed — scan it with WeChat to authenticate
5. Once scanned, credentials are saved automatically and the bot connects

> WeChat cannot be set up via CLI. The \`lh bot connect\` command only starts an already-configured provider and does not perform the QR authentication flow.

## After Web UI Setup: CLI Operations

Once the bot is configured via Web UI, you can use CLI to manage and monitor it:

\`\`\`bash
# Check bot status
lh bot list -a <agentId>

# Reconnect if disconnected
lh bot connect <botId>

# Send a message
lh bot message send <botId> --target <conversationId> --message "Hello"
\`\`\`

## Limitations

- No message editing support (WeChat API restriction)
- Character limit: 2048 characters per message
- No native Markdown rendering — WeChat displays plain text

## Notes

- WeChat uses iLink Bot API — no developer portal setup is needed
- The QR code session expires periodically; reconnect via Web UI when it does
- Default debounce is 5 seconds (higher than other platforms) due to WeChat's polling architecture
`})),y,Ce=e((()=>{y=`# lh config - User Info and Usage

View account information and usage statistics.

## Subcommands

- \`lh config whoami\` - Display current user information
- \`lh config usage [--month <YYYY-MM>] [--daily]\` - View token usage statistics

## Tips

- \`whoami\` shows user ID, email, and account details
- \`usage --daily\` shows a daily breakdown with heatmap
`})),b,we=e((()=>{b="# lh doc - Document Management\n\nManage documents (text content that can be standalone or in knowledge bases).\n\n## Subcommands\n\n- `lh doc list [-L <limit>] [--file-type <type>] [--source-type <type>]` - List documents\n- `lh doc view <id>` - View document content\n- `lh doc create -t <title> -b <body> [--kb <kbId>] [--parent <folderId>]` - Create document\n- `lh doc batch-create <jsonFile>` - Batch create documents from JSON file\n- `lh doc edit <id> [-t <title>] [-b <body>]` - Edit document\n- `lh doc delete <ids...> [--yes]` - Delete documents\n- `lh doc parse <fileId> [--with-pages]` - Parse uploaded file into document\n- `lh doc link-topic <docId> <topicId>` - Associate document with topic\n- `lh doc topic-docs <topicId> [--type <type>]` - List documents for a topic\n\n## Tips\n\n- Use `-F <filePath>` instead of `-b` to read body content from a file\n- `lh doc parse` extracts text from uploaded files (PDF, DOCX, etc.)\n"})),x,Te=e((()=>{x=`# lh eval - Evaluation Workflow Management

Manage external evaluation workflows for testing agent quality.

## Subcommands

- \`lh eval run get --run-id <id>\` - Get run information
- \`lh eval run set-status --run-id <id> --status <completed|external>\` - Set run status
- \`lh eval dataset get --dataset-id <id>\` - Get dataset information
- \`lh eval run-topics list --run-id <id> [--only-external]\` - List topics in a run
- \`lh eval threads list --topic-id <id>\` - List threads by topic
- \`lh eval messages list --topic-id <id> [--thread-id <id>]\` - List messages
- \`lh eval test-cases count --dataset-id <id>\` - Count test cases
- \`lh eval run-topic report-result --run-id <id> --topic-id <id> --score <n>\` - Report result

## Tips

- Evaluation runs test agent responses against datasets
- Use \`report-result\` to submit scores for individual topics
`})),S,Ee=e((()=>{S=`# lh file - File Management

Manage uploaded files.

## Subcommands

- \`lh file list [--kb-id <id>] [-L <limit>]\` - List files (optionally filter by knowledge base)
- \`lh file view <id>\` - View file details
- \`lh file delete <ids...> [--yes]\` - Delete one or more files
- \`lh file recent [-L <limit>]\` - List recently accessed files

## Tips

- Files can be associated with knowledge bases
- Use \`lh kb upload\` to upload new files to a knowledge base
`})),C,De=e((()=>{C='# lh gen - Content Generation\n\nGenerate text, images, videos, and audio. Alias: `lh generate`.\n\n## Subcommands\n\n- `lh gen text <prompt> [-m <model>] [-p <provider>] [--stream] [--temperature <t>]` - Generate text\n- `lh gen image <prompt> [-m <model>] [-n <count>] [--width <w>] [--height <h>]` - Generate image\n- `lh gen video <prompt> -m <model> -p <provider> [--aspect-ratio <r>] [--duration <d>] [--resolution <res>]` - Generate video\n- `lh gen tts <text> [-o <output>] [--voice <v>] [--speed <s>]` - Text-to-speech\n- `lh gen asr <audioFile> [--model <m>] [--language <l>]` - Speech-to-text\n- `lh gen status <generationId> <asyncTaskId>` - Check generation task status\n- `lh gen download <generationId> <asyncTaskId> [-o <output>]` - Wait and download result\n- `lh gen list` - List generation topics\n\n## Tips\n\n- Image/video generation is async; use `status` or `download` to get results\n- `--stream` for text generation outputs tokens as they arrive\n- `--pipe` for text generation outputs only the raw text (no formatting)\n\n## Finding Available Video / Image Models\n\nBefore generating, always look up the correct model ID with `lh model list`:\n\n```bash\n# List all video models for the lobehub provider\nlh model list lobehub --type video\n\n# List only enabled video models\nlh model list lobehub --type video --enabled\n\n# List image generation models\nlh model list lobehub --type image\n```\n\nUse the `id` field from the output as the `-m` argument. Model IDs for video/image are\n**not** the same as human-readable display names — always use the exact `id` field.\n\nExample:\n```bash\n# ✅ Correct — use the id from lh model list\nlh gen video "a cat riding a skateboard" -p lobehub -m dreamina-seedance-2-0-260128\n\n# ❌ Wrong — guessed slugs will fail with no_valid_channel_error\nlh gen video "a cat riding a skateboard" -p lobehub -m seedance-2.0\n```\n\n## ⚠️ asyncTaskId vs generationId\n\n`gen status` and `gen download` require TWO different IDs:\n\n- `<generationId>` — prefixed with `gen_`, e.g. `gen_abc123`\n- `<asyncTaskId>` — a UUID printed after `→ Task` in the `gen image` / `gen video` output,\n  e.g. `7ad0eb13-e9a5-4403-8070-1f7fe95b2f95`\n\nPassing `gen_xxx` as `<asyncTaskId>` will cause a server error. Always use the UUID.\n\nExample output from `lh gen video`:\n```\n✓ Video generation started\n  Batch ID: gb_xxx\n  Generation gen_abc123 → Task 7ad0eb13-e9a5-4403-8070-1f7fe95b2f95\n                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ← this is asyncTaskId\n```\n\nCorrect usage:\n```bash\nlh gen status gen_abc123 7ad0eb13-e9a5-4403-8070-1f7fe95b2f95\nlh gen download gen_abc123 7ad0eb13-e9a5-4403-8070-1f7fe95b2f95 -o result.mp4\n```\n'})),w,Oe=e((()=>{w="# lh kb - Knowledge Base Management\n\nManage knowledge bases, folders, documents, and files.\n\n## Subcommands\n\n- `lh kb list` - List all knowledge bases\n- `lh kb view <id>` - View KB with all items in tree structure\n- `lh kb create -n <name> [-d <description>]` - Create a knowledge base\n- `lh kb edit <id> [-n <name>] [-d <description>]` - Update KB metadata\n- `lh kb delete <id> [--remove-files] [--yes]` - Delete a knowledge base\n- `lh kb add-files <kbId> --ids <fileId1,fileId2>` - Add files to KB\n- `lh kb remove-files <kbId> --ids <fileId1,fileId2>` - Remove files from KB\n- `lh kb mkdir <kbId> -n <name> [--parent <folderId>]` - Create a folder\n- `lh kb create-doc <kbId> -t <title> -c <content> [--parent <folderId>]` - Create a document in KB\n- `lh kb move <id> --parent <folderId> --type <file|doc>` - Move file/document to folder\n- `lh kb upload <kbId> <filePath> [--parent <folderId>]` - Upload file to KB\n\n## Tips\n\n- Use `--json` on any subcommand for structured output\n- `lh kb view` shows a full tree of folders, files, and documents\n- After uploading a file, use `lh doc parse <fileId>` to extract text content\n"})),T,ke=e((()=>{T=`# lh memory - User Memory Management

Manage user memories across five categories: identity, activity, context, experience, preference.

## Subcommands

- \`lh memory list [category]\` - List memories by category
- \`lh memory create --type <type> --role <role> -d <description>\` - Create identity memory
- \`lh memory edit <category> <id> [options]\` - Update memory entry
- \`lh memory delete <category> <id> [--yes]\` - Delete memory entry
- \`lh memory persona\` - View memory persona summary
- \`lh memory extract [--from <date>] [--to <date>]\` - Extract memories from chat history
- \`lh memory extract-status --task-id <id>\` - Check extraction task status

## Memory Categories

- **identity** - Who the user is (role, relationships, descriptions)
- **activity** - What the user does (events, actions, habits)
- **context** - Situational context (environment, constraints)
- **experience** - Past experiences and learnings
- **preference** - User preferences and settings

## Tips

- Use \`lh memory persona\` to get a comprehensive view of the user
- Memory extraction analyzes chat history to automatically create entries
`})),E,Ae=e((()=>{E=`# lh message - Message Management

Manage chat messages.

## Subcommands

- \`lh message list [--topic-id <id>] [--agent-id <id>] [-L <limit>] [--page <n>]\` - List messages
- \`lh message search <keywords>\` - Search messages by keywords
- \`lh message delete <ids...> [--yes]\` - Delete messages
- \`lh message count [--start <date>] [--end <date>]\` - Count messages
- \`lh message heatmap\` - Get message activity heatmap

## Tips

- Filter by \`--topic-id\` to get messages from a specific conversation
- Use \`--user\` flag to filter by message role (user/assistant)
`})),D,je=e((()=>{D="# lh model - AI Model Management\n\nManage AI models for providers.\n\n## Subcommands\n\n- `lh model list <providerId> [--enabled] [--type <type>] [-L <limit>]` - List models\n- `lh model view <id>` - View model details\n- `lh model create --id <id> --provider <p> --display-name <name> [--type <type>]` - Create model\n- `lh model edit <id> [--provider <p>] [--display-name <name>]` - Update model\n- `lh model toggle <id> --provider <p> [--enable|--disable]` - Enable/disable model\n- `lh model delete <id> --provider <p> [--yes]` - Delete model\n- `lh model batch-toggle <ids...> --provider <p> [--enable|--disable]` - Batch toggle\n- `lh model clear --provider <p> [--remote] [--yes]` - Clear all models for provider\n\n## Model Types\n\nThe `--type` filter accepts the following values:\n\n| Type | Description |\n|------|-------------|\n| `chat` | Text chat / LLM models |\n| `embedding` | Text embedding models |\n| `tts` | Text-to-speech models |\n| `stt` | Speech-to-text models |\n| `image` | Image generation models |\n| `video` | Video generation models |\n| `text2music` | Music generation models |\n| `realtime` | Realtime audio/video models |\n\n## Tips\n\n- Models belong to providers; always specify `--provider` when needed\n- `lh model list` without `--type` returns all model types; use `--type video` (or the relevant type) to narrow results when looking for non-chat models\n- Use `--enabled` to filter only active models\n"})),O,Me=e((()=>{O=`# lh plugin - Plugin Management

Manage installed plugins (external tool integrations).

## Subcommands

- \`lh plugin list\` - List installed plugins
- \`lh plugin install -i <identifier> [--manifest <url>] [--type <type>] [--settings <json>]\` - Install plugin
- \`lh plugin uninstall <id> [--yes]\` - Uninstall plugin
- \`lh plugin update <id> [--manifest <url>] [--settings <json>]\` - Update plugin

## Tips

- Plugins extend agent capabilities with external tools
- Use \`--settings\` to pass JSON configuration during install/update
`})),k,Ne=e((()=>{k="# lh provider - AI Provider Management\n\nManage AI providers and their configurations.\n\n## Subcommands\n\n- `lh provider list` - List all providers\n- `lh provider view <id>` - View provider details\n- `lh provider create --id <id> -n <name> [-s <source>] [--sdk-type <type>]` - Create provider\n- `lh provider edit <id> [-n <name>] [-d <description>]` - Update provider\n- `lh provider config <id> [--api-key <key>] [--base-url <url>] [--show]` - Configure settings\n- `lh provider test <id> [-m <model>]` - Test provider connectivity\n- `lh provider toggle <id> [--enable|--disable]` - Enable/disable provider\n- `lh provider delete <id> [--yes]` - Delete provider\n\n## Tips\n\n- Use `lh provider config <id> --show` to view current configuration\n- `lh provider test` verifies API key and connectivity\n"})),Pe,Fe=e((()=>{Pe=`# lh search - Search Resources

Search local resources or the web.

## Subcommands

- \`lh search -q <query> [-t <type>] [-L <limit>]\` - Search local resources
- \`lh search -q <query> -w [-e <engines>] [-c <categories>]\` - Search the web
- \`lh search view <target>\` - View search result details or crawl a URL

## Search Types (local)

agent, topic, file, folder, message, page, memory, mcp, plugin, communityAgent, knowledgeBase

## Tips

- Use \`-w\` flag to perform web search instead of local search
- \`lh search view <url>\` can crawl and extract content from web pages
- Web search supports engine and category filters
`})),A,Ie=e((()=>{A="# lh skill - Skill Management\n\nManage agent skills (reusable prompt+resource bundles).\n\n## Subcommands\n\n- `lh skill list [--source <builtin|market|user>]` - List skills\n- `lh skill view <id>` - View skill details\n- `lh skill create -n <name> -d <description> -c <content>` - Create user skill\n- `lh skill edit <id> [-c <content>] [-n <name>] [-d <description>]` - Update skill\n- `lh skill delete <id> [--yes]` - Delete skill\n- `lh skill search <query>` - Search skills\n- `lh skill install <source> [--branch <b>]` - Install from GitHub/URL/marketplace\n- `lh skill resources <id>` - List skill resource files\n- `lh skill read-resource <id> <path>` - Read a skill resource file\n\n## Tips\n\n- Skills can be installed from GitHub repos, URLs, or the marketplace\n- Use `resources` and `read-resource` to inspect skill reference files\n"})),j,Le=e((()=>{j="# lh topic - Conversation Topic Management\n\nManage conversation topics (chat sessions).\n\n## Subcommands\n\n- `lh topic list [--agent-id <id>] [-L <limit>] [--page <n>]` - List topics with pagination\n- `lh topic view <id> [-L <limit>] [--from <n>] [--to <n>] [--no-messages]` - View topic details and its messages\n- `lh topic search <keywords> [--agent-id <id>]` - Search topics by keywords\n- `lh topic create -t <title> [--agent-id <id>] [--favorite]` - Create a topic\n- `lh topic edit <id> [-t <title>] [--favorite] [--no-favorite]` - Update topic\n- `lh topic delete <ids...> [--yes]` - Delete one or more topics\n- `lh topic recent [-L <limit>]` - List recently accessed topics\n\n## Tips\n\n- Topics are associated with agents; use `--agent-id` to filter\n- Use `--json` for structured output suitable for piping\n- `lh topic view` shows 50 messages per page by default; page with `--from` / `--to`, or `--no-messages` for metadata only\n- When the prompt injects a `<recent_topics>` block (IM channels without a history-read API), use the `id` attribute with `lh topic view <id>` to read that session's full conversation\n"})),M,Re=e((()=>{pe(),l(),re(),me(),he(),ge(),_e(),ve(),ye(),be(),xe(),Se(),Ce(),we(),Te(),Ee(),De(),Oe(),ke(),Ae(),je(),Me(),Ne(),Fe(),Ie(),Le(),M={...ne,content:a,resources:o({"references/agent":u,"references/bot":d,"references/bot/discord":f,"references/bot/feishu":p,"references/bot/lark":m,"references/bot/qq":h,"references/bot/slack":g,"references/bot/telegram":_,"references/bot/wechat":v,"references/config":y,"references/doc":b,"references/eval":x,"references/file":S,"references/generate":C,"references/kb":w,"references/memory":T,"references/message":E,"references/model":D,"references/plugin":O,"references/provider":k,"references/search":Pe,"references/skill":A,"references/topic":j})}})),N,ze=e((()=>{N='# lh task - Complete Command Reference\n\n## Core Commands\n\n- `lh task list [--status <status>] [--root] [--parent <id>] [--agent <id>] [-L <limit>] [--tree]` - List tasks\n  - `--status`: pending, running, paused, completed, failed, canceled\n  - `--root`: Only root tasks (no parent)\n  - `--tree`: Display as tree structure\n- `lh task view <id>` - View task details (instruction, workspace, activities)\n- `lh task create -i <instruction> [-n <name>] [--agent <id>] [--parent <id>] [--priority <0-4>]` - Create task\n  - Priority: 0=none, 1=urgent, 2=high, 3=normal, 4=low\n- `lh task edit <id> [-n <name>] [-i <instruction>] [--status <status>] [--priority <0-4>] [--agent <id>]` - Update task\n- `lh task delete <id> [--yes]` - Delete task\n- `lh task clear [--yes]` - Delete all tasks\n- `lh task tree <id>` - Show subtask tree with dependencies\n\n## Lifecycle Commands\n\n- `lh task start <id> [--no-run] [-p <prompt>] [-f] [-v]` - Start task (pending → running)\n  - `--no-run`: Only update status, skip agent execution\n  - `-f, --follow`: Follow agent output in real-time\n  - `-v, --verbose`: Show detailed tool call info\n- `lh task run <id> [-p <prompt>] [-c <topicId>] [-f] [--topics <n>] [--delay <s>]` - Run/re-run agent execution\n  - `-c, --continue`: Continue on existing topic\n  - `--topics <n>`: Run N topics in sequence\n- `lh task pause <id>` - Pause running task\n- `lh task resume <id>` - Resume paused task\n- `lh task complete <id>` - Mark as completed\n- `lh task cancel <id>` - Cancel task\n- `lh task comment <id> -m <message>` - Add comment\n- `lh task sort <parentId> <id1> <id2> ...` - Reorder subtasks\n- `lh task heartbeat <id>` - Send manual heartbeat\n- `lh task watchdog` - Detect and fail stuck tasks\n\n## Checkpoint Commands\n\n- `lh task checkpoint view <id>` - View checkpoint config\n- `lh task checkpoint set <id> [--on-agent-request <bool>] [--topic-before <bool>] [--topic-after <bool>] [--before <ids>] [--after <ids>]` - Configure checkpoints\n  - `--on-agent-request`: Allow agent to request review\n  - `--topic-before/after`: Pause before/after each topic\n  - `--before/after <ids>`: Pause before/after specific subtask identifiers\n\n## Review Commands (LLM-as-Judge)\n\n- `lh task review view <id>` - View review config\n- `lh task review set <id> [--model <model>] [--provider <provider>] [--max-iterations <n>] [--no-auto-retry] [--recursive]` - Configure review\n- `lh task review criteria list <id>` - List review rubrics\n- `lh task review criteria add <id> -n <name> [--type <type>] [-t <threshold>] [-d <description>] [--value <value>] [--pattern <pattern>] [-w <weight>] [--recursive]` - Add rubric\n  - Types: llm-rubric, contains, equals, starts-with, ends-with, regex\n  - Threshold: 0-100\n- `lh task review criteria rm <id> -n <name> [--recursive]` - Remove rubric\n- `lh task review run <id> --content <text>` - Manually run review\n\n## Dependency Commands\n\n- `lh task dep add <taskId> <dependsOnId> [--type <blocks|relates>]` - Add dependency\n- `lh task dep rm <taskId> <dependsOnId>` - Remove dependency\n- `lh task dep list <taskId>` - List dependencies\n\n## Topic Commands\n\n- `lh task topic list <id>` - List topics for task\n- `lh task topic view <id> <topicId>` - View topic messages (topicId can be seq number like "1")\n- `lh task topic cancel <topicId>` - Cancel running topic and pause task\n- `lh task topic delete <topicId> [--yes]` - Delete topic and messages\n\n## Document Commands (Workspace)\n\n- `lh task doc create <id> -t <title> [-b <content>] [--parent <docId>] [--folder]` - Create and pin document\n- `lh task doc pin <id> <documentId>` - Pin existing document\n- `lh task doc unpin <id> <documentId>` - Unpin document\n- `lh task doc mv <id> <documentId> <folder>` - Move document into folder (auto-creates folder)\n\n## Tips\n\n- All commands support `--json [fields]` for structured output\n- Task identifiers use format like TASK-1, TASK-2, etc.\n- Use `lh task tree` to visualize full task hierarchy before planning work\n- Use `lh task comment` to log progress — comments appear in task activities\n- Documents in workspace are accessible to the agent during execution\n'})),P,Be=e((()=>{P='\\<task\\_skill\\_guides>\nYou are executing a task within the LobeHub task system. Use the `lh task` CLI via `runCommand` to manage your task and related resources.\n\n# Task Lifecycle\n\n| Command                         | Description                                           |\n| ------------------------------- | ----------------------------------------------------- |\n| `lh task view <id>`             | View task details, instruction, workspace, activities |\n| `lh task edit <id>`             | Update task name, instruction, status, priority       |\n| `lh task complete <id>`         | Mark task as completed                                |\n| `lh task comment <id> -m "..."` | Add a progress comment                                |\n| `lh task tree <id>`             | View subtask tree with dependencies                   |\n\n# Working with Subtasks\n\n| Command                                   | Description       |\n| ----------------------------------------- | ----------------- |\n| `lh task create -i "..." --parent <id>`   | Create a subtask  |\n| `lh task list --parent <id>`              | List subtasks     |\n| `lh task sort <parentId> <id1> <id2> ...` | Reorder subtasks  |\n| `lh task dep add <id> <dependsOnId>`      | Add dependency    |\n| `lh task dep rm <id> <dependsOnId>`       | Remove dependency |\n\n# Task Workspace (Documents)\n\n| Command                                           | Description               |\n| ------------------------------------------------- | ------------------------- |\n| `lh task doc create <id> -t "title" -b "content"` | Create and pin a document |\n| `lh task doc pin <id> <docId>`                    | Pin existing document     |\n| `lh task doc unpin <id> <docId>`                  | Unpin document            |\n\n# Task Topics (Conversations)\n\n| Command                             | Description              |\n| ----------------------------------- | ------------------------ |\n| `lh task topic list <id>`           | List conversation topics |\n| `lh task topic view <id> <topicId>` | View topic messages      |\n\n# Usage Pattern\n\n1. Read the reference file for detailed command options: `readReference(\'references/commands\')`\n2. Run commands via `runCommand` — the `lh` prefix is automatically handled\n3. Use `--json` flag on any command for structured output\n4. Use `lh task <subcommand> --help` for full command-line help\n\n# Task Execution Guidelines\n\n- **Check your task first**: Use `lh task view` to understand the full instruction and context\n- **Use workspace documents**: Store outputs and deliverables as task documents\n- **Report progress**: Use `lh task comment` to log key milestones\n- **Respect dependencies**: Check `lh task tree` to understand task ordering\n- **Complete when done**: Use `lh task complete` when all deliverables are ready\n- **Automation tasks are the exception — NEVER complete them**: a task with automation (heartbeat or schedule — shown as an `Automation:` line in the task context) is a recurring loop, and this run is one tick of it. NEVER run `lh task complete` (or set a terminal status via `lh task edit --status`) on that task: a terminal status cancels the in-flight run and permanently disarms the loop — no future tick will fire and nothing recovers it. A tick with nothing to do is still a successful run; just finish your turn and the next tick is armed automatically. Only the user retires a recurring task.\n  \\</task\\_skill\\_guides>\n'})),F,Ve=e((()=>{l(),ee(),ze(),Be(),F={...ie,content:P,resources:o({"references/commands":N})}})),I,He=e((()=>{I=`# Acceptance checker handoff

The \`acceptance-checker\` checks plans and evidence in the **first acceptance
round only**. The primary owns preparation, execution, evidence inspection,
repairs, cleanup, and publication. Reuse one checker across both stages when
supported; otherwise give its replacement the same handoff and prior findings.
Never assume a role name or model parameter exists: use the current host's
supported agent controls. Prefer the cheapest model capable of inspecting every
planned artifact, and record the actual selection when known; an inherited
model does not imply lower cost.

The checker replaces routine user plan approval. Ask the user only for a
user-owned prerequisite (a secret, device/2FA approval, a permission only they
can grant, a destructive action) or a
product decision that materially changes the plan.

## Shared contract

Send one compact handoff per response with the stage, inputs, and requested
output below. For code context, the primary supplies an explicit file list,
relevant diff text or prepared diff artifact paths, and base/tested revisions.
The checker must not run \`git diff\`, search the repository, or expand that
list; return missing context to the primary.

Reference existing plan/report files; do not create a second JSON schema or
duplicate case tables. Keep review notes in the ignored acceptance directory
and summarize them in the existing narrative tail. Save the requirement-to-case
mapping there and include its path in both stages; do not add a report field.

Give every handoff an explicit budget proportional to what it must read (plan
items, artifact count). Diff reading must not displace artifact inspection;
report any inspection limit rather than silently skipping evidence.
Response limits are counted separately by stage and do not reset when the
checker, handoff, or plan changes.

The checker must not start services, change fixtures, run product cases,
repair probes, edit product code, publish, or spawn agents. Return missing or
unreadable artifacts to the primary rather than debugging the environment.

## 1. Plan review

**At most two feedback responses for the plan and cases.** After the initial
response, the primary may request one check of its revisions if needed. The
primary resolves and records remaining findings itself; the limit does not
waive material blockers or require a second response.

Primary input:

- Original requirement/feedback sources and agreed non-goals, separate from
  implementation hypotheses. Use links, local message records, or verbatim
  excerpts with relevant screenshots and scope decisions. Label unavailable
  sources and summaries; never invent a transcript or send the entire
  conversation when focused material is available.
- Code context per the shared contract, plus a plain-language summary of what
  the change does and where it shows up.
- Draft plan using the existing schema, with stable case IDs, requirement mapping,
  preconditions, operations, observable expectations, and evidence requirements.
  Put additional explanation in existing method/text fields or handoff notes.

Checker procedure: read the original sources, list their required outcomes,
and compare them with the draft cases and supplied diff. State coverage limits
when sources are incomplete. Look for missing boundaries, ambiguous
criteria, and probes that cannot distinguish success from failure. Check how
fixtures/fault injections will be proven effective. Also identify duplicate or
out-of-scope cases; review must not only expand scope.
Check that groups reflect independently reviewable user tasks and that each check
can be accepted or rejected on its own. For flow plans, inspect flow titles as
the resulting default checklist categories: flag an umbrella PR group that hides
distinct journeys. Check entry-to-outcome reading order, real transitions, and
expectations duplicated across groups; coverage alone does not make a plan ready.

Checker output:

- Decision: ready, or changes needed.
- Requirement-to-case coverage, including uncovered requirements and source limits.
- Findings: source/case ID, gap or unnecessary case, reason, minimal proposed change.
  If none, say so; do not rewrite the whole plan.

The primary resolves material findings before execution and saves the agreed
plan with the resolutions. A "ready" decision — or "changes needed" with every
material finding resolved — is the plan gate; execution starts without asking
the user. For frozen plans, record uncovered requirements in review notes and
the final narrative tail; do not add items or switch report modes within that
round. If a required outcome cannot be verified under the supplied plan, report
the limitation. The primary requests a corrected plan from its owner rather
than claiming full acceptance.

## 2. Final evidence review

**One quick check of the completed report and evidence.** Complete in-round
repairs and reruns before the handoff. Use the supplied diff only to understand
updates and their mapping to agreed cases, then check report claims against
the plan and original artifacts. Do not reopen requirements, add cases, or
expand into code review. A diff alone proves neither a pass nor a failure.

Primary input:

- The agreed plan (with the plan-review resolutions folded in) and any
  subsequent scope/plan changes.
- Completed report and per-case evidence index: expected behavior, actual observation,
  tested revision, original artifact paths, and the primary's proposed result.
- Runtime/build provenance, fixture/injection evidence, unexecuted cases, reused
  evidence and its original revision, and known limitations. File timestamps or
  a checkout SHA alone do not prove which build produced a screenshot.
  Correlate the target revision with the running instance's build/version marker,
  or probe a changed value in that instance that distinguishes it from the old
  implementation. State limits when exact build identity cannot be established.
- Any repair made during the round, stated by the primary in plain language:
  which cases it affects and which artifacts are first-run versus re-run.
- Code context per the shared contract, including in-round repairs and the
  primary's mapping of updates to affected agreed case IDs.
- For temporal claims, the original clip plus available timestamped frame sequence
  and relevant intervals. Selected assertion frames are navigation aids, not proof
  that the intervening transition was correct.

Checker procedure: inspect each case's original evidence against
its expectation and the primary's observations and verdict. Open images;
file existence and captions are not visual verification. For flicker or transitions,
inspect the relevant sequence, extracting frames into the ignored review
directory if necessary. Do not claim to have watched a video when only stills
were inspected. State sampling limits; sparse
frames cannot establish the absence of a one-frame defect. Check that every
plan item has a result and every declared evidence type is present.

Checker output:

- For every case: what the evidence shows, inspected paths/intervals, whether it
  meets the expectation, and whether the primary's proposed result is supported.
  Keep passing entries brief. For a disagreement or insufficient evidence, cite
  the specific frame, timestamp, log excerpt, or missing artifact.
- Action for each finding: clarify the mapping/report, supplement evidence,
  rerun, or repair then rerun.
- Overall decision: evidence supports acceptance, or further work is required;
  include known coverage limits from the plan review and inspection limitations.

These are review notes, not new report status values. The primary maps unresolved
findings to the existing schema without treating missing evidence as a pass.
A checker label alone is not proof; the primary must resolve supported objections
with evidence or disclose them, never silently override them.
The primary resolves findings and verifies any corrections without another
checker response. Disclose artifacts or verdicts changed after the check as
primary-only in the narrative tail.

## After the first round

Follow-up rounds have no checker. The primary repairs, re-runs affected cases,
inspects new artifacts, and discloses changes in the narrative tail. Preserve
unaffected results with their original provenance. If scope,
surface, or business goal materially changes, it obtains any user-owned decision
and revises the plan. Published rounds remain immutable; follow existing
new-round rules. No per-case approval loop, independent execution worker, or
third audit agent.
`})),L,Ue=e((()=>{L=`# agent-browser CLI reference

Generic reference for the \`agent-browser\` CLI — automate Chromium-based apps
(Electron, Chrome, web) via Chrome DevTools Protocol. This is the shared driver
for Web and Electron evidence; native surfaces use their own tools. Per-surface
setup, authentication, capture, and boundary decisions remain in the selected
surface guide.

## Contents

- [Core workflow](#core-workflow)
- [Essential commands](#essential-commands)
- [Batch execution](#batch-execution)
- [JavaScript evaluation](#javascript-evaluation-eval)
- [Connect to an existing browser or app](#connect-to-an-existing-browser--app)
- [Gotchas](#gotchas)

Install via \`npm i -g agent-browser\`, \`brew install agent-browser\`, or
\`cargo install agent-browser\`. Run \`agent-browser install\` to download Chrome.
Run \`agent-browser upgrade\` to update.

## Core workflow

Every browser automation follows this pattern:

1. **Navigate**: \`agent-browser open <url>\`
2. **Snapshot**: \`agent-browser snapshot -i\` (get element refs like \`@e1\`, \`@e2\`)
3. **Interact**: use refs to click, fill, select
4. **Re-snapshot**: after navigation or DOM changes, get fresh refs

\`\`\`bash
agent-browser open https://example.com/form
agent-browser snapshot -i
# Output: @e1 [input type="email"], @e2 [input type="password"], @e3 [button] "Submit"

agent-browser fill @e1 "user@example.com"
agent-browser fill @e2 "password123"
agent-browser click @e3
agent-browser wait --load networkidle
agent-browser snapshot -i # check result
\`\`\`

## Command chaining

\`\`\`bash
agent-browser open https://example.com && agent-browser wait --load networkidle && agent-browser snapshot -i
\`\`\`

Use \`&&\` when you don't need to read intermediate output. Run commands separately
when you need to parse output first (e.g. snapshot to discover refs, then interact).

## Essential commands

\`\`\`bash
# Navigation
agent-browser open <url>              # Navigate (aliases: goto, navigate)
agent-browser close                   # Close browser
agent-browser close --all             # Close all active sessions

# Snapshot
agent-browser snapshot -i             # Interactive elements with refs (recommended)
agent-browser snapshot -i -C          # Include contenteditable (rich text editors)
agent-browser snapshot -s "#selector" # Scope to CSS selector

# Interaction (use @refs from snapshot)
agent-browser click @e1               # Click element
agent-browser click @e1 --new-tab     # Click and open in new tab
agent-browser fill @e2 "text"         # Clear and type text (NOT for contenteditable)
agent-browser type @e2 "text"         # Type without clearing (use for chat inputs)
agent-browser select @e1 "option"     # Select dropdown option
agent-browser check @e1               # Check checkbox
agent-browser press Enter             # Press key
agent-browser keyboard type "text"    # Type at current focus (no selector)
agent-browser scroll down 500         # Scroll page
agent-browser scroll down 500 --selector "div.content"  # Scroll within container

# Get information
agent-browser get text @e1            # Get element text
agent-browser get url                 # Get current URL
agent-browser get title               # Get page title

# Wait
agent-browser wait @e1                # Wait for element
agent-browser wait --load networkidle # Wait for network idle
agent-browser wait --url "**/page"    # Wait for URL pattern
agent-browser wait 2000               # Wait milliseconds
agent-browser wait --text "Welcome"   # Wait for text to appear
agent-browser wait --fn "!document.body.innerText.includes('Loading...')"  # Wait for condition
agent-browser wait "#spinner" --state hidden  # Wait for element to disappear

# Downloads
agent-browser download @e1 ./file.pdf          # Click an element to trigger a download
agent-browser wait --download ./output.zip     # Wait for a download to finish

# Diff (compare page states)
agent-browser diff snapshot                          # Current vs the last snapshot
agent-browser diff screenshot --baseline before.png  # Visual pixel diff
agent-browser diff url <url1> <url2>                 # Compare two pages

# Network (key for full-stack evidence)
agent-browser network requests                 # Inspect tracked requests
agent-browser network requests --type xhr,fetch  # Filter by resource type
agent-browser network requests --method POST   # Filter by HTTP method
agent-browser network har start                # Start HAR recording
agent-browser network har stop ./capture.har   # Stop and save HAR file

# Viewport & device emulation
agent-browser set viewport 1920 1080          # Set viewport size (default 1280x720)
agent-browser set viewport 1920 1080 2        # 2x retina
agent-browser set device "iPhone 14"          # Emulate device (viewport + UA)

# Capture (evidence!)
agent-browser screenshot ./shot.png   # Screenshot to a path
agent-browser screenshot --full       # Full page screenshot
agent-browser screenshot --annotate   # Annotated screenshot with numbered element labels
agent-browser pdf output.pdf          # Save as PDF

# Dialogs (alert, confirm, prompt, beforeunload)
agent-browser dialog accept           # Accept dialog
agent-browser dialog accept "input"   # Accept prompt dialog with text
agent-browser dialog dismiss          # Dismiss/cancel dialog
agent-browser dialog status           # Check if dialog is open
\`\`\`

## Batch execution

\`\`\`bash
echo '[
  ["open", "https://example.com"],
  ["snapshot", "-i"],
  ["click", "@e1"],
  ["screenshot", "result.png"]
]' | agent-browser batch --json
\`\`\`

## Semantic locators (alternative to refs)

\`\`\`bash
agent-browser find text "Sign In" click
agent-browser find label "Email" fill "user@test.com"
agent-browser find role button click --name "Submit"
agent-browser find placeholder "Search" type "query"
agent-browser find testid "submit-btn" click
\`\`\`

## JavaScript evaluation (eval)

Use eval to read app state, dump DOM/HTML, or assert computed values for \`text\` /
\`dom_snapshot\` evidence.

\`\`\`bash
# Simple expressions
agent-browser eval 'document.title'

# Complex JS: use --stdin with heredoc (RECOMMENDED — avoids shell quoting bugs)
agent-browser eval --stdin << 'EVALEOF'
JSON.stringify(
  Array.from(document.querySelectorAll("img"))
    .filter(i => !i.alt)
    .map(i => ({ src: i.src.split("/").pop(), width: i.width }))
)
EVALEOF

# Base64 encoding (avoids all shell escaping issues)
agent-browser eval -b "$(echo -n 'document.title' | base64)"
\`\`\`

> If the app under test exposes a global state object (a store, a debug handle),
> eval is how you read it for assertion. Don't assume a specific global name —
> discover it from the app you are verifying.

## Ref lifecycle

Refs (\`@e1\`, \`@e2\`, …) are invalidated when the page changes. Always re-snapshot
after clicking links/buttons that navigate, form submissions, or dynamic content
loading. After a hot-reload (HMR) during dev, refs also break — re-snapshot.

## Annotated screenshots (vision mode)

\`\`\`bash
agent-browser screenshot --annotate
# Output includes the image path and a legend:
#   [1] @e1 button "Submit"
#   [2] @e2 link "Home"
agent-browser click @e2 # click using ref from annotated screenshot
\`\`\`

## Parallel sessions

\`\`\`bash
agent-browser --session site1 open https://site-a.com
agent-browser --session site2 open https://site-b.com
agent-browser session list
\`\`\`

A named \`--session\` auto-saves and restores cookies + localStorage across
commands.

## Connect to an existing browser / app

\`\`\`bash
agent-browser --auto-connect snapshot # Auto-discover a running Chrome
agent-browser --cdp 9222 snapshot     # Explicit CDP port (Electron apps, see ../surfaces/electron.md)
\`\`\`

## Cloud providers & engine selection

\`\`\`bash
agent-browser -p browserbase open example.com      # run against a cloud browser
agent-browser --engine lightpanda open example.com # 10x faster, 10x less memory
\`\`\`

Providers: \`agentcore\`, \`browserbase\`, \`browserless\`, \`browseruse\`, \`kernel\`.

## Gotchas

- **Daemon can get stuck** — if commands hang, \`agent-browser close --all\` or
  \`pkill -f agent-browser\` to reset.
- **HMR invalidates everything** — after code changes during dev, refs break;
  re-snapshot or restart.
- **\`snapshot -i\` doesn't find contenteditable** — use \`snapshot -i -C\` for rich
  text editors; \`fill\` doesn't work on contenteditable, use \`type\`.
- **Screenshots written to a path are easiest** — \`agent-browser screenshot
./proof/x.png\` then upload that path; with no path they land in
  \`~/.agent-browser/tmp/screenshots/\`.
- **Dialogs block all commands** — if commands time out, check
  \`agent-browser dialog status\`.
- **Default timeout is 25s** — override with \`AGENT_BROWSER_DEFAULT_TIMEOUT\` (ms)
  or use explicit waits.
- **Shell quoting corrupts eval** — use \`eval --stdin <<'EVALEOF'\` for complex JS.
`})),R,We=e((()=>{R=`# Web authentication with agent-browser

Use this reference only when the Web criterion is behind a login gate.
Authenticate the same named \`agent-browser\` session that will capture evidence;
a screenshot from a different browser does not prove the automated session
reached the state.

This workflow is provider-neutral. Discover the target's actual endpoint, cookie
domain, and session mechanism before selecting a path.

## Decision flow

1. Open the protected target. If it renders without a login wall, stop here.
2. Prefer a named session or state file; use credential replay or cookie injection
   only when required.
3. Reopen a protected URL and verify that \`agent-browser get url\` did not return
   the sign-in route before capturing evidence.

## Built-in mechanisms

\`\`\`bash
# Named session: persists cookies and localStorage.
agent-browser --session app open https://app.example.com/login
# Complete login once, then reuse the same session.
agent-browser --session app open https://app.example.com/dashboard

# Playwright-style storage state.
agent-browser state save auth.json
agent-browser state load auth.json

# Encrypted credential vault and form replay.
echo "$PASSWORD" | agent-browser auth save app \\
  --url https://app.example.com/login --username user --password-stdin
agent-browser auth login app

# Dedicated persistent browser profile.
agent-browser --profile ~/.app-profile open https://app.example.com/login
\`\`\`

## Programmatic login

If the app exposes a sign-in API, POST credentials, capture the returned cookies,
convert them to a storage-state file, and load that state into the evidence
session. Endpoint shape, field names, and cookie names are app-specific; inspect
them rather than assuming.

## Cookie-injection fallback for local development

1. In a logged-in browser, open DevTools Network, select a same-origin request,
   and copy the full \`Cookie:\` request header. Do not use \`document.cookie\`;
   HttpOnly session cookies are invisible there.
2. Build a state file and load it into the named session. Match the cookie domain
   exactly (\`localhost\` is not \`127.0.0.1\`; local domains need no leading dot).
3. Open a protected URL and verify that the session is not redirected.

| Symptom                     | Cause                                                 | Fix                                      |
| --------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| Redirects after injection   | \`document.cookie\` omitted the HttpOnly session        | Copy the Network request's cookie header |
| "no cookies found"          | The copied value is not the raw request cookie header | Preserve the header value verbatim       |
| Works briefly, then expires | The session rotated or expired                        | Acquire and inject a fresh dev session   |
| Works on one host spelling  | Cookie domain and target host differ                  | Use the literal target host              |

## Security boundaries

- Restrict cookie injection to local/development targets. Do not move production
  session cookies into automation state.
- Treat credentials, cookies, and tokens as secrets. Never place them in logs,
  evidence, commits, or PR descriptions.
- Authentication state seeds only the automation session; it does not flow back
  into the source browser.
- When the criterion is the sign-in UI itself, drive the real form instead of
  injecting past it.

Return to the selected Web flow after the authenticated session passes its
protected-route check.
`})),z,Ge=e((()=>{z=`# Common Mistakes (generic layer)

> **This is the GENERIC layer of the living log.** It ships with the skill, so a
> consumer repo's copy is materialized and read-only — change it by PR to the
> skill source. Every entry must be **product-independent**: no project's
> packages, routes, schemas, env vars, service names, or business logic. Those go
> to \`.agents/acceptance/common-mistakes.md\`, the writable project layer.

## How this file is injected

A mistake catalogue works by having been read — you cannot search for a failure
mode you do not yet know you are about to hit. But the rule is what must be in
context, not the narrative. So the file has two tiers, read at two moments:

| Tier          | Read                                                                                      | When                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Checklist** | in full — one line per mistake                                                            | once the target is known, and again before marking any case \`pass\` or the round done |
| **Entries**   | by id — \`rg -n '^### M' <file>\` for line numbers, \`sed -n '<start>,<end>p'\` for one entry | when a checklist line applies to a case, or a reviewer's feedback matches one        |

Only **judgment** rules live here — the ones no tool can check. Rules an agent
skips under pressure are in SKILL.md ("Rules you will be tempted to skip");
rules a validator or a script default can enforce are removed the day that
code lands. Every entry therefore carries \`since\` (first observed) and
\`holds-while\` (the mechanism it depends on; \`always\` means pure judgment). An
entry whose \`holds-while\` no longer holds is deleted, not kept as reference.

Apply the same shape to the project layer's file. Never narrate the reading.

## Checklist

- **M1** Open every screenshot with Read before \`pass\`; greps and element counts never decide. Presence/absence of a UI section is asserted on structured state, never on page text.
- **M5** Before/after is a \`comparison\` pair with exactly one \`before\` and one \`after\`; never a stale shot loose in \`evidence\`, never a hand-composed image, never sequential flow steps.
- **M6** Prove the running instance loads your working-tree code by measuring a changed value. After a direct fixture write, cold-load and assert at the layer the behavior reads, not where you wrote.
- **M12** A UI chip/badge is supporting evidence; the payload, request body, DB row, or side effect is the proof.
- **M13** A GIF's last frame is its headline — end on the asserted state or say in \`observation\` why it ends elsewhere.
- **M14** GIF at source resolution, per-frame palette, no dithering on neutral UI; inspect first/middle/last frames.
- **M15** A changed shared component is verified on every surface that renders it; skipped surfaces are marked untested.
- **M16** A change inside a bar/row with overflow is verified in default and collapsed/overflow state.
- **M22** An error-state case needs the failed status AND the user-facing message in the same screenshot.
- **M28** Non-visual behavioral claims carry two text artifacts in the same round: reasoning, then execution record.
- **M30** Electron evidence is the visible viewport, never \`screenshot --full\`.

## Entries

### M1 — Judging \`pass\` from heuristics instead of the screenshot

\`since 2026-07-17\` · \`holds-while: always\`

**Trap:** deciding "renders fine" from \`innerText\` greps plus an element/skeleton
count. Layout-shell text is always in the DOM and a blank page also has zero
skeletons, so both false-positive. The mirror is worse: grepping page text to
prove a feature is _absent_ matches your own report prose naming it.

**Rule:** every screenshot cited as evidence is opened with the Read tool and
visually confirmed first. Blank / watermark / shell-only = fail or uncertain; go
find the cause. Presence or absence of a UI section is asserted against the state
that drives it or a located DOM node, never a substring.

### M5 — Before/after that is not a comparison pair

\`since 2026-07-17\` · \`holds-while: ingest does not reject a comparison id with a missing or duplicated half\`

**Trap:** a stale "before" shot loose in a passed case's \`evidence\` (the page
headings each image by filename, so it reads as the current result); two shots
hand-composed into one image; or two sequential steps of a flow tagged as
\`before\`/\`after\`.

**Rule:** one view in two states = a \`comparison\` pair with a shared \`id\`,
exactly one \`before\` and one \`after\`, one pair per case; the page owns the
labeling. Flow steps are ordered evidence with captions. Shape in
[report.md](./report.md#beforeafter-comparison-pairs).

### M6 — Verifying against a build or cache that is not your code

\`since 2026-07-17\` · \`holds-while: always\`

**Trap:** driving a resident or packaged instance and eyeballing the first
screenshot as "changed" — it serves a built snapshot, not your working tree.
Same shape one layer down: writing a fixture to the DB, reloading, and filing the
stale value the persisted client cache still serves as a product bug.

**Rule:** verify in an instance that loads your code, and prove it by measuring a
known-changed value before trusting any screenshot; restart non-hot-reloading
layers (server, main process, adapters) and prove which code they run. After a
direct fixture write, cold-load (clear client storage, re-seed auth) and assert
the fixture in the store before anything downstream —
[probe-mock-patterns.md](./probe-mock-patterns.md) B.

### M12 — Verifying the UI state but not the effect

\`since 2026-07-17\` · \`holds-while: always\`

**Trap:** an "inject context / apply setting / send data" feature is marked verified
because the chip or badge showed, while a later transport gate dropped it.

**Rule:** assert the last mile — the transformed request body, the DB row, the
downstream call. UI state is supporting evidence.

### M13 — A GIF that ends on an expected-failure frame

\`since 2026-07-17\` · \`holds-while: always\`

**Trap:** a loading/streaming GIF records through to the terminal error the test
data inevitably produces; it loops on that frame and reads as the case failing.

**Rule:** end the GIF on the asserted phase, or make a static shot the primary
evidence. If the terminal state is worth showing, say so in \`observation\` before
the viewer sees it.

### M14 — One global palette destroys neutral UI

\`since 2026-07-17\` · \`holds-while: the GIF encoder in use does not default to per-frame palettes without dithering\`

**Trap:** downscaling by default and encoding with one shared 256-color palette
plus dithering turns pale skeletons and thin borders into speckle.

**Rule:** keep source resolution, generate palettes per frame, disable dithering
for neutral UI, inspect first/middle/final frames at readable size. Downscale only
when file size forces it.

### M15 — Verifying only the entry surface of a shared component

\`since 2026-07-17\` · \`holds-while: always\`

**Trap:** a shared component changed; one surface is screenshotted; the same
component composed with different wrappers elsewhere still shows the old
behavior.

**Rule:** enumerate every surface that renders it, attach separate evidence for
each, mark skipped surfaces blocked or untested.

### M16 — Default state only, never collapsed / overflow

\`since 2026-07-17\` · \`holds-while: always\`

**Trap:** a change inside a toolbar/action bar/list row is checked expanded only; a
narrower container or a saved collapsed preference hides the affordance.

**Rule:** force and capture both states.

### M22 — A status badge is not the error message

\`since 2026-07-17\` · \`holds-while: always\`

**Trap:** a \`Failed\` badge is on screen, the error alert with the translated
message is not, and the case passes.

**Rule:** an error-presentation case requires the failed status AND the alert
containing the expected user-facing text in the same screenshot. An unrelated
warning does not count.

### M28 — Explanation and raw output as interchangeable text evidence

\`since 2026-08-03\` · \`holds-while: ingest does not warn on a non-visual case with fewer than two text artifacts\`

**Trap:** only a polished explanation with no observations; only a green
transcript the reviewer must infer a claim from; or the explanation in one round
and the logs in a later one.

**Rule:** two ordered text artifacts per non-visual behavioral case — a reasoning
document (claim, setup/threat model, attempt, pass criteria, interpretation,
limitations) and an execution document (exact command/request, raw observations,
mapping to the criteria). Republish both in every follow-up round.

### M30 — Full-page screenshot of an Electron window

\`since 2026-08-16\` · \`holds-while: ingest does not flag a desktop screenshot whose aspect ratio or black margin is implausible\`

**Trap:** \`agent-browser screenshot --full\` follows the renderer's document
extent, not the \`BrowserWindow\`, producing a giant mostly-black image in which
the UI is a tiny corner.

**Rule:** capture the visible viewport without \`--full\` (or the project's CDP
window-capture helper). Open the image; reject it if the app occupies a small
fraction or black margins dominate. Never crop evidence in post-processing.
`})),B,Ke=e((()=>{B=`# macOS Computer Use (osascript) toolkit

\`agent-browser\` drives Chromium surfaces (web, Electron). For everything it can't
reach, this is the escape hatch: **macOS Computer Use** via \`osascript\`
(AppleScript) and \`screencapture\`. Use it to drive native apps, handle OS-level
chrome, and read the screen when no CDP target exists.

This is the native/OS counterpart of Chromium automation. It is **macOS-only and
not cloud-portable** — prefer CDP automation when both can reach the target;
reach here only when CDP cannot.

## Contents

- [When you need it](#when-you-need-it)
- [Core patterns](#core-patterns)
- [Capturing as evidence](#capturing-as-evidence)
- [Gotchas](#gotchas)

## When you need it

- **Native (non-Chromium) app under test** — the thing you're verifying is a native
  macOS app a Chromium driver cannot attach to. Drive it here.
- **OS-level steps inside a web/Electron flow** — a native file picker, a system
  permission prompt, a Save dialog, dock/menu-bar interaction, or a Spotlight/
  app-switch the page can't script. Drop to Computer Use for that step, then return
  to agent-browser.
- **Reading the screen** when no DOM/CDP is available — screenshot + visual read, or
  select-all-copy + \`pbpaste\`.

## Core patterns

### Activate an app

\`\`\`bash
osascript -e 'tell application "AppName" to activate'
\`\`\`

### Type / press keys

\`\`\`bash
osascript -e 'tell application "System Events" to keystroke "Hello world"'
osascript -e 'tell application "System Events" to key code 36' # Enter (hardware code, layout-independent)
osascript -e 'tell application "System Events" to key code 48' # Tab
osascript -e 'tell application "System Events" to key code 53' # Escape
\`\`\`

### Paste from clipboard (fast; required for long / non-ASCII text)

\`\`\`bash
osascript -e 'set the clipboard to "Your long or 中文 / emoji message"'
osascript -e 'tell application "System Events" to keystroke "v" using command down'
\`\`\`

### Keyboard shortcuts (modifiers)

\`\`\`bash
osascript -e 'tell application "System Events" to keystroke "f" using command down'               # Cmd+F
osascript -e 'tell application "System Events" to keystroke "k" using {command down, shift down}' # Cmd+Shift+K
\`\`\`

### Click at screen coordinates

\`\`\`bash
osascript -e 'tell application "System Events" to click at {500, 300}'
\`\`\`

### Window position / size / id

\`\`\`bash
osascript -e '
tell application "System Events" to tell process "AppName"
  get {position, size} of window 1
end tell'
\`\`\`

### Screenshot (OS-level)

\`\`\`bash
screencapture /tmp/shot.png                 # full screen
screencapture -i /tmp/shot.png              # interactive region select
screencapture -l "$WINDOW_ID" /tmp/shot.png # specific window
\`\`\`

Get a window id:

\`\`\`bash
osascript -e 'tell application "System Events" to tell process "AppName" to get id of window 1'
\`\`\`

### Read accessibility elements

\`\`\`bash
osascript -e '
tell application "System Events" to tell process "AppName"
  get value of text field 1 of window 1
end tell'
\`\`\`

> \`entire contents of window 1\` dumps the whole UI tree but is **extremely slow**
> on complex apps — prefer a screenshot + visual read, or the clipboard read below.

### Read screen text via clipboard

\`\`\`bash
osascript -e '
tell application "System Events"
  keystroke "a" using command down
  keystroke "c" using command down
end tell'
sleep 0.5
pbpaste
\`\`\`

## Capturing as evidence

- A \`screencapture\` PNG → \`--type screenshot --by cli\`.
- For time-based native behavior, OS screen-record to MP4/GIF — see
  [recording-native-macos.md](./recording-native-macos.md).
- Text read via \`pbpaste\` → \`--type text --content "$(pbpaste)"\`.

## Gotchas

- **Accessibility permission required.** First run prompts for it; grant the host
  (Terminal / iTerm / the agent runner) in System Settings → Privacy & Security →
  Accessibility, or every \`System Events\` call silently fails.
- **\`keystroke\` is slow and mangles non-ASCII** — use clipboard paste (\`Cmd+V\`) for
  anything long or for Chinese / emoji / special characters.
- **\`key code 36\` is Enter** by hardware code, so it works regardless of keyboard
  layout. Some apps send-on-Enter — use \`Shift+Enter\` for a newline within input.
- **Add small \`delay\`/\`sleep\` between actions** — native apps need time to process
  UI events; back-to-back commands drop.
- **App name varies by locale** — e.g. \`微信\` vs \`WeChat\`; handle the name the
  running OS uses.
- **Not cloud-portable.** Everything here needs a real macOS session with a display.
  Keep evidence CDP-based when the target is reachable that way.
`})),V,qe=e((()=>{V=`# Cross-surface evidence contract

This reference defines the artifact contract shared by every surface. Capture
commands belong to the selected surface guide; do not load another surface's
instructions merely to learn how to submit an artifact.

## Evidence media

| Type           | Use when                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------- |
| \`text\`         | Command output, logs, focused request/response data, or computed assertions prove the criterion   |
| \`markdown\`     | Reviewer-facing prose (a reasoning write-up, structured findings) should render as body text      |
| \`dom_snapshot\` | Structured content is stronger and smaller than pixels                                            |
| \`screenshot\`   | A settled visual state, layout, or native rendering is the claim                                  |
| \`gif\`          | A short temporal state should render inline, usually no more than about 10 seconds                |
| \`video\`        | A longer animation, transition, gesture, or multi-step flow needs a player and better compression |
| \`audio\`        | The deliverable is something the user **hears** — TTS output, a voice reply, an alert tone        |
| \`transcript\`   | A conversation, event stream, or request log is itself the proof                                  |

The declared \`requiredEvidence\` type is binding. Do not replace a required video
with a final screenshot or a required DOM snapshot with prose.

## Audio deliverables

A sound cannot be verified in prose, and a waveform screenshot proves only that
a file exists. Upload the clip itself with \`--type audio\` and the acceptance
page gives the reviewer a player.

\`\`\`bash
# The generated file is the evidence — attach the artifact the feature produced,
# not a re-encode and not a screenshot of the player.
lh acceptance run result submit --operation "$OPERATION_ID" --item "$CHECK_ITEM_ID" \\
  --type audio --file ./out/tts-zh-female.mp3 --by program \\
  --desc "TTS output for 「今天天气不错」, zh-CN female voice, 2.4s"
\`\`\`

- \`mp3\` / \`wav\` / \`m4a\` / \`aac\` / \`flac\` / \`ogg\` / \`opus\` are recognized by
  extension, so \`acceptance run ingest\` types them as \`audio\` automatically.
- **Listen before citing it.** Confirm the clip is non-silent and is the right
  content (duration + a transcription pass, or a spectral check) — an empty or
  truncated file looks identical to a good one in the file list.
- Pair the clip with a short \`text\` artifact when the claim is about _what was
  said_ (the input text, the voice/model, the measured duration). The player
  proves it plays; the text artifact makes it auditable.
- Capture what the product produced. A screen recording with system audio is a
  fallback for "the UI plays it at the right moment" — for "the output is
  correct", attach the file itself.

## Dual text evidence for non-visual behavior

CLI, API, backend, policy, security, and migration claims normally need two
separate \`text\` artifacts on the same check:

1. A reasoning artifact: claim, setup or threat model, method, pass criteria,
   interpretation, and limitations.
2. An execution artifact: exact command or request, relevant raw observations,
   exit/status values, and a short mapping back to the pass criteria.

Keep both artifacts in the current immutable round. Do not ask a reviewer to
join an explanation from an older round with fresh execution output.

## File versus inline content

- Use \`--file\` for binary artifacts and larger text/DOM/transcript files.
- Use \`--content\` for short text assertions. Pass exactly one of \`--file\` and
  \`--content\`.
- **Description is mandatory for every file artifact.** Always supply a non-empty
  \`--desc\` when using \`--file\`, and a \`description\` when attaching a \`fileId\` or
  adding a file to an ingest manifest. Small text files converted to inline
  content still require it; do not rely on the filename fallback.
- Write a concise, factual sentence identifying the file's contents and their
  relevance to the criterion, including the action, observed state, or target
  where useful. The reviewer should know why to open it without inspecting the
  payload. A filename, path, id, "JSON", or "evidence" alone is insufficient.
  Do not invent conclusions or place the verdict in the description unless
  explicitly asked.
- Example: \`goal-final-state.json\` → "Goal final state after training: completion
  status and the four final validation results." Describe each artifact
  separately instead of repeating the criterion title for every file.

\`\`\`bash
# File artifact captured by the selected surface.
lh acceptance run result submit --operation "$OPERATION_ID" --item "$CHECK_ITEM_ID" \\
  --type "$EVIDENCE_TYPE" --file "$ARTIFACT_PATH" --by "$PROVENANCE" \\
  --desc "Observed state after the planned action"

# Short text assertion.
lh acceptance run result submit --operation "$OPERATION_ID" --item "$CHECK_ITEM_ID" \\
  --type text --content "$ASSERTION_OUTPUT" --by cli \\
  --desc "Machine-readable assertion output"
\`\`\`

## Provenance (\`--by\`)

Set \`--by\` to the producer named by the selected surface guide. Use the direct
capture source for an unmodified artifact and \`program\` for a deterministic test,
script, or media transform. Do not infer provenance from the file extension.

## Artifact safety

- Inspect every image, clip, and generated document before citing it.
- Never upload credentials, cookies, tokens, private user data, unrelated host
  windows, or notifications.
- Prefer a focused artifact over an unfiltered log or full-session recording.
- Retain the raw source when submitting a derived chart, contact sheet, GIF, or
  edited comparison image.
`})),H,Je=e((()=>{H=`# Interaction cost (GOMS-KLM)

An optional overlay for **UI rounds**: while you drive the product, record what a
person would have had to do to reach the same state. The round then carries a
_user-equivalent_ interaction cost, so a flow can be judged on what it costs to
walk, not just on whether it passed.

**Where it surfaces:** in that round's report, as its own collapsible section —
which on the acceptance page opens from the round history, available to the
acceptance owner. It is not part of the shared aggregate a non-owner viewer
sees, so never promise a reviewer they will see it there.

**Skip it whenever it does not apply.** A CLI or backend round has no interaction
to price. A machine without a UI driver installed (no \`agent-browser\`) records no
trace. In both cases you publish exactly as usual — no trace file, no cost
section, no warning. Never hand-write the numbers to fill the gap.

## The seam: you count actions, the platform prices them

You never compute seconds. The driver appends one JSON atom per action to
\`interaction-trace.jsonl\` in the report directory, carrying raw **operator
counts**; \`lh acceptance run ingest\` finds that file and prices it with the
platform's pinned timing model (\`goms-klm@lobe-v1\`).

That split is the point: every round is priced by one model, and any published
number can be recomputed from its trace. A summary you calculated yourself is not
comparable with anyone else's.

\`\`\`jsonl
{"schema":"lobehub.agentBrowserKlmTrace@1","type":"action","phase":{"id":"login","label":"Sign in"},"klm":{"category":"action","operators":{"P":1,"K":1}},"durationMs":840}
{"schema":"lobehub.agentBrowserKlmTrace@1","type":"mental_estimate","phase":{"id":"first-view"},"klm":{"category":"mental","operators":{"M":2}},"mentalEstimate":{"score":3,"confidence":0.75,"reason":"Reading the state and deciding the next action"}}
\`\`\`

| Field                | Meaning                                                                    |
| -------------------- | -------------------------------------------------------------------------- |
| \`schema\`             | Must be \`lobehub.agentBrowserKlmTrace@1\`; a foreign tag is not summed      |
| \`phase.id\` / \`label\` | Groups atoms into a step of the journey; \`phase.checkItemId\` links a check |
| \`klm.operators\`      | Raw counts — see the operator table below                                  |
| \`klm.category\`       | \`action\` \\| \`mental\` \\| \`blocked\` — \`blocked\` charges nothing              |
| \`durationMs\`         | Agent wall-clock, reported separately from the user-equivalent price       |

## Operators

| Operator  | Counts                                    | Typical source                       |
| --------- | ----------------------------------------- | ------------------------------------ |
| \`P\`       | Pointing at a target                      | \`click\`, drag                        |
| \`K\`       | One keystroke / button press              | \`click\` (the press), \`press\`         |
| \`T_chars\` | Characters typed                          | \`fill\`, \`type\`                       |
| \`H\`       | Homing between keyboard and pointer       | Switching input device               |
| \`M\`       | Mental preparation — **estimated by you** | Deciding, locating, reading state    |
| \`R_ms\`    | Measured system wait, in ms — not modeled | Navigation / load the user waits out |

Two rules keep the number honest:

- **An action that did not happen costs nothing.** A failed, timed-out, or
  blocked command is recorded with \`"category":"blocked"\` and zero operators.
  Never charge a retry loop as if a person performed it.
- **\`M\` is an estimate, and it is yours.** Record it explicitly at the moments a
  person would actually have to think — first view of a screen, choosing between
  options, re-orienting after a state change — with a short reason. Do not
  sprinkle it on every action to inflate the total.

## Publishing

Leave \`interaction-trace.jsonl\` in the report directory and publish normally:

\`\`\`bash
lh acceptance run ingest "$REPORT_DIR" --source agent-testing --json
\`\`\`

Ingest computes \`interactionCost\` and stores it on the round. If a trace exists
but records nothing priceable — every action blocked, for instance — the round
publishes without a cost section rather than claiming a 0s journey. An explicit
\`result.json.interactionCost\` is left untouched, so a driver that already
computed a summary is never overwritten.
`})),U,Ye=e((()=>{U=`# Plan-driven rounds — discover, submit, self-check

Use this path only when the invocation handed you an operation id: a verify plan
already exists and you satisfy it criterion by criterion. Authoring your own
checks (the default) is [report.md](./report.md). Never mix both for one round.

\`--operation\` and \`--run\` are interchangeable on \`result submit\` and
\`result list\`; \`evidence list\` keys off a positional \`<checkResultId>\` from
\`result list\`.

## (a) \`lh verify plan state $OPERATION_ID --json\`

Returns the run's verify state plus the **frozen plan** (immutable once
confirmed):

\`\`\`jsonc
{
  "verifyStatus": "planned",
  "verifyPlanConfirmedAt": "2026-06-21T07:00:00.000Z",
  "verifyPlan": [
    {
      "id": "vci_a1b2c3", // checkItemId — the stable join key
      "index": 0,
      "title": "Login flow reaches the workspace",
      "description": "After sign-in the home renders the workspace switcher",
      "required": true, // true ⇒ blocks delivery if unproven
      "verifierType": "llm",
      "verifierConfig": {
        "requiredEvidence": [
          // the artifacts you MUST capture
          { "type": "screenshot", "hint": "logged-in home with workspace switcher" },
        ],
      },
    },
  ],
}
\`\`\`

- \`verifyPlan[].id\` is the **checkItemId** — never use \`index\` as a key, it is
  display ordering only.
- \`verifyPlan[].verifierConfig.requiredEvidence\` is the list of \`{ type, hint }\`
  you must satisfy. Absent or empty ⇒ this criterion is judged on text alone.
- \`hint\` is guidance for what the artifact should show — it is not validated, but
  follow it so the reviewer can recognize the proof.

Only items with a non-empty \`requiredEvidence\` need an artifact; the rest are
judged on the deliverable text — don't fabricate evidence for them. The \`hint\`
usually implies the surface (SKILL.md, Pick the surface).

Apply [acceptance-checker.md](acceptance-checker.md) before execution and at final handoff
of the first round; follow-up rounds have no acceptance-checker. Preserve frozen check IDs;
report coverage gaps instead of silently changing the supplied plan. The
acceptance-checker's review does not replace the configured verifier or authorize
overriding its verdict. Keep existing submission and round semantics.

## Your worklist → submit by checkItemId

For each \`verifyPlan[]\` item with non-empty \`requiredEvidence\`, capture each
\`type\` with the selected surface guide and submit **one artifact per call** by
\`checkItemId\` (the same \`--item\` reuses the row):

| checkItemId  | title                            | requiredEvidence |
| ------------ | -------------------------------- | ---------------- |
| \`vci_a1b2c3\` | Login flow reaches the workspace | \`screenshot\`     |

\`\`\`bash
OP="$OPERATION_ID"
lh acceptance run result submit --operation "$OP" --item vci_a1b2c3 --type screenshot \\
  --file ./proof/home.png --by agent-browser --desc "…"
\`\`\`

\`lh acceptance run result submit\` resolves the session from the operation id and **creates the
check-result row for you** (idempotent on \`checkItemId\`), then attaches the
evidence — there is no \`checkResultId\` to look up first. \`--by\` records
provenance (\`agent-browser\` | \`cdp\` | \`cli\` | \`program\`); \`--file\` for binaries,
\`--content\` for text, exactly one. Leave the verdict to the review step — add
\`--verdict\` only when the task explicitly asks you to self-assert. Keep the
printed run URL internal.

## Self-check coverage (do not skip)

Once you've submitted, the result rows exist. Map each \`checkItemId\` to its
\`checkResultId\` and list that row's evidence:

\`\`\`jsonc
// lh acceptance run result list --operation "$OP" --json
[
  {
    "id": "vcr_x9y8z7", // checkResultId (created by submit)
    "checkItemId": "vci_a1b2c3", // joins back to verifyPlan[].id
    "status": "running",
  },
]
\`\`\`

\`\`\`bash
lh acceptance run evidence list "$CHECK_RESULT_ID" --json # confirm each required type is present
\`\`\`

Coverage rule: for each required criterion, **every** \`requiredEvidence[].type\`
appears at least once in its evidence list. A missing type → capture and submit
again; then hand off per SKILL.md (acceptance URL + \`coverage: n/n\`).
`})),W,Xe=e((()=>{W=`# Probe / Mock Pattern Library (generic layer)

> **This is the GENERIC layer of the living log.** It ships with the skill, so a
> consumer repo's copy is materialized and read-only — change it by PR to the
> skill source. Every recipe here must be **product-independent**: framework-level
> or tool-level, no project's stores, routes, tables, env vars, or file paths.
> Project-specific probes and mocks go to
> \`.agents/acceptance/probe-mock-patterns.md\`, the writable project layer.
>
> **Read this before any run that must force an error state or inspect runtime
> state.** Each item: Situation / Doesn't work / Works.
>
> **Separate the observation from the explanation.** When you add an item, cite the
> exact mechanism (a \`file:line\`, a measured A/B) — and if you only saw a symptom,
> write "cause not established" instead of guessing. A wrong mechanism is worse than
> none: it sends the next reader to fix the wrong thing.

---

## A. Forcing a fetch to FAIL (error-state testing)

### A1. Judge interception by the fetch's own outcome, not by the UI or the promise

- Apps commonly **swallow** a failed fetch: a store action can resolve successfully
  even when its underlying request was aborted, so the UI and the action's promise
  both "look like" a 200. Never judge whether your fault landed by the action or the
  UI.
- **Works**: wrap \`window.fetch\` post-load and record each request's own resolve /
  reject. Use a guard so a second \`eval\` doesn't wrap the wrapper (stack overflow):
  \`\`\`js
  if (!window.__W) {
    window.__W = 1;
    window.__R = [];
    const of = window.fetch;
    window.fetch = function (...a) {
      const p = of.apply(this, a);
      if (String(a[0]).includes('<url-fragment>'))
        p.then(
          (r) => window.__R.push('resolved_' + r.status),
          (e) => window.__R.push('REJECTED_' + e.message),
        );
      return p;
    };
  }
  \`\`\`
- **\`agent-browser network route --abort\` glob matching is finicky.** A bare \`**/x\`
  or \`*/path/*\` can match nothing on a nested path; an absolute-URL prefix with a
  trailing \`*\` matches reliably (the trailing \`*\` also covers a \`?query\` string). And
  \`agent-browser network requests\` **under-reports** — it is not ground truth for
  "did the request happen"; trust the \`window.fetch\` wrapper instead.

### A2. \`set offline\` shows the browser's page, not the component error

- \`agent-browser set offline on\` trips Chrome's document-level offline interstitial
  ("Reconnect to Wi-Fi"), not the app's own error component. Its copy (and the dino
  game) also false-matches naive error-copy greps, and offline breaks lazy
  route-chunk loading → a hard-nav fallback to the browser page. Use it to break
  connectivity, not to assert an app-level error state.

### A3. WORKS — force an error by injecting a throw into the code path via HMR

- Add a throw at the top of the client method the data fetcher / mutation calls, let
  the dev server hot-apply it, capture, then revert:
  \`\`\`ts
  // <the service method the fetcher calls> — [AGENT-TEST] REMOVE
  list = async (params) => {
    if (true) throw Object.assign(new Error('injected'), { data: { httpStatus: 500 } });
    return realClient.list(params);
  };
  \`\`\`
- Use a status the UI treats as **retryable** (commonly anything but 401/403) if you
  want the Retry affordance visible; a non-retryable status suppresses it. The same
  technique works on the **write side** — inject into the mutation method to exercise
  a failed-save state.
- **Revert carefully.** \`git checkout -- <file>\` on a service file often triggers a
  FULL reload (not just HMR), resetting the SPA to a blank shell — after reverting,
  re-navigate and re-fetch element refs. And see A5: \`git checkout --\` is the WRONG
  revert when the file already had uncommitted changes.

### A4. WORKS — alternatives when HMR injection isn't available

- **CDP \`Network.setBlockedURLs\`** — blocks at the network stack (below \`fetch\`, so
  it catches requests a page-realm \`fetch\` override might miss). Needs a raw CDP ws
  connection.
- **Server-side** — temporarily make the one endpoint return 500.

### A5. \`git checkout -- <file>\` to revert an injection DESTROYS the branch's uncommitted changes in that file

- When you inject a probe into a file that the branch has **already modified
  (uncommitted)** — the common case for a pre-PR review — \`git checkout -- <file>\`
  resets it to HEAD, silently wiping the very feature edits you were sent to verify,
  not just your probe. Nothing warns you: the residue check (\`grep -rn AGENT-TEST\`)
  comes back clean either way, because your marker is gone too.
- **Works — snapshot the file yourself before injecting, restore from the snapshot:**
  \`\`\`bash
  cp <file> /tmp/probe-backup-$(basename <file>)     # BEFORE the edit
  # ... inject, HMR, capture ...
  cp /tmp/probe-backup-$(basename <file>) <file>     # restore — preserves uncommitted work
  \`\`\`
  Then prove the restore is exact (\`git diff -- <file>\` shows the same working-tree
  blob as before) and \`grep -rn AGENT-TEST\` is empty. Check \`git status --short\`
  before you start so you know which files are dirty; for a dirty file, \`git checkout --\` is never the revert. \`git stash\` has the same failure shape.

### A6. WORKS — before/after visual diffing by checking out the OLD file, gated on a measured version signal

- The clean way to produce a real "before" render is to write the pre-change version
  into the working tree (\`git show <base>:<path> > <path>\`), capture, then restore —
  **not** to trust that HMR applied the swap. HMR can silently fail to apply the
  second swap: the file on disk is old while the renderer keeps the new styles, and
  the screenshot is the AFTER state mislabeled BEFORE (an M5 failure no screenshot
  review catches).
- **Works — gate every capture on a measured version signal, not a sleep.** Pick a
  property that differs between the two versions and read it back with
  \`getComputedStyle\` before shooting; if it's not the expected value, force a full
  reload and re-enter the surface. A full reload resets SPA state, so budget for
  re-establishing any fixture.
- **Corollary — a layout change may be invisible at the default size.** A
  right-alignment / \`flex\` fix can render identically to the broken version in a
  narrow container (content already fills the row); drive the app's own resize
  affordance with real mouse events before concluding "no visual change".

---

## B. Cache / stale state that MASKS the failure

### B1. A failed revalidation cannot show an error once the data has settled

- A surface that loaded successfully once caches the last-good value. On a later
  failed fetch, a well-behaved error boundary keeps the settled content and does NOT
  show the error (by design: a background error must not blow away loaded content). So
  your injected failure shows the old content, not the error.
- **Works**: to see a genuine FIRST-LOAD error, clear all client storage, then
  cold-load. Clearing usually logs you out → re-seed auth after.
  \`\`\`js
  (async () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {}
    try {
      const d = await indexedDB.databases();
      await Promise.all(
        (d || []).map(
          (x) =>
            new Promise((r) => {
              const q = indexedDB.deleteDatabase(x.name);
              q.onsuccess = q.onerror = q.onblocked = () => r();
            }),
        ),
      );
    } catch {}
    try {
      const k = await caches.keys();
      await Promise.all(k.map((c) => caches.delete(c)));
    } catch {}
    return 1;
  })();
  \`\`\`
  then re-seed auth, then \`open about:blank\` → \`open <target>\`.

### B2. SWR-style clients retry for \\~30s before the error settles

- A data client with retry/backoff keeps \`isLoading\` true during retries, so you
  screenshot a skeleton, not the error. A typical config (5 attempts, exponential
  backoff capped at 30s) settles the error only after \\~30s.
- **Works**: wait \\~35s after load for retries to exhaust, THEN screenshot. (Or disable
  retries for the probe — but that can also hide the Retry button, since many clients
  mark a non-retrying error as non-retryable.)

### B3. In-memory cache survives \`open\`; persisted cache survives everything

- \`open about:blank\` then \`open <target>\` forces a fresh JS context (clears in-memory
  cache) but does NOT clear persisted storage — you still need B1 for a true cold
  load. Verify a marker set via \`eval\` (not from the page's own script, which re-runs
  on the second \`open\` and re-creates it, reading as "context preserved"). Persisted
  caches commonly live in **two tiers** — IndexedDB for big collections and
  localStorage for small shells — which is why B1 clears both plus the Cache API.

### B4. Component-local state seeded from a cached item does NOT reset when fresh data arrives

- A row component that initializes local state from its item (\`useState(() =>
derive(item))\`) captures the value at first render. When a persisted cache hydrates
  the list with a stale item first, \`useState\` captures the stale value; when the
  fresh server response replaces the data, the row does not remount (same React key),
  so the stale local state sticks. No amount of waiting fixes it.
- **Works**: for any assertion on an initial-render flag that flows through
  \`useState(init)\`, force a clean first frame by clearing only the persisted-cache
  tier and reloading (login usually survives if you don't touch the session cookie),
  and verify the underlying data separately so a stale render is attributed to cache,
  not to the change under test.

---

## C. Probing app / runtime state

### C1. WORKS — read live component state with a temporary debug global

- The decisive way to read a component's live props / store / fetched values: add a
  debug global in the render, reload, read it, remove it.
  \`\`\`tsx
  // inside the component render, temporary — [AGENT-TEST] REMOVE
  if (typeof window !== 'undefined')
    (window as any).__DBG = { data: /* ... */, hasError: !!error, isLoading };
  \`\`\`
  \`\`\`bash
  agent-browser --session $S eval 'JSON.stringify(window.__DBG)'
  \`\`\`
  This surfaces cases where the data looks settled even on error — a discrepancy a
  screenshot can't show.

### C2. \`agent-browser console\` capture works — use it for what console is for

- Console capture is reliable on current agent-browser (a page-script \`[log]\` and one
  emitted later from \`eval\` both appear). An empty console means the page logged
  nothing, not that capture is broken. The debug-global (C1) is still the better tool
  for reading structured component state; use console for what console is for.

### C3. \`document.body.innerText\` keyword grep false-positives on fixture text

- Asserting a state via \`body.innerText.includes('<phrase>')\` matches your own fixture
  content if it happens to contain that substring (e.g. a fixture literally named
  "…failure…" when you assert on "failure") — a false pass on a state that never
  rendered.
- **Works**: scope the check to the actual UI element (\`querySelectorAll\` on the
  specific tag/toast/alert), never \`body.innerText\`. And pick fixture names that do
  NOT contain any state keyword you'll assert on.

### C4. \`innerText\` can be 0 on a rendered page — use it to tell a wedge from a blank

- On some app shells \`document.body.innerText\` reads \`""\` even on a fully rendered
  page (some ancestor collapses the layout-dependent computation); probe a more
  specific container (e.g. the app root element) instead.
- **Diagnostic**: \`innerText\` needs layout, \`textContent\` does not. When the root
  gives \`innerText === 0\` but \`textContent > 0\`, the DOM is fine and the RENDERER is
  not painting (a compositor wedge — see D9). When both are 0, the DOM is genuinely
  empty. This distinction tells a non-painting renderer from a blank page.

### C5. A successful ingest does not prove acceptance attachment when the CLI is stale

- A globally installed CLI may accept \`acceptance run ingest\` and return a run id while
  lacking newer subject/acceptance behavior. The result is an orphan round even
  though the command appears successful.
- Compare \`lh --version\` with the skill marker before publishing. If the branch
  under test changes the CLI contract, run that branch's CLI; otherwise use
  \`npx @lobehub/cli@latest\`. Confirm the returned acceptance id or inspect the
  acceptance page rather than treating a run id alone as proof.

---

## D. agent-browser / CDP mechanics

- **D1. \`screenshot\` honours a relative path — but still pass an absolute one.** A
  relative path saves to the caller's cwd; the cwd of a step in a longer script is
  easy to lose track of, so an absolute path is the right habit.
- **D2. The CDP port can be ephemeral.** A browser launched with
  \`--remote-debugging-port=0\` picks a random port; read \`DevToolsActivePort\` in the
  user-data-dir, or use \`agent-browser get cdp-url\` (note: \`cdp-url\` is a \`get\`
  subject, not a top-level command). Electron dev instances usually pin a known port
  (e.g. 9222) — the project adapter says which.
- **D3. \`wait --load networkidle\` HANGS during a retry loop** (the network never
  idles) and can blow the command timeout — use a fixed \`wait <ms>\` when a fetch is
  stuck retrying. (macOS has no \`timeout(1)\` to bound it.)
- **D4. Portal toasts auto-dismiss (\\~5s) and \`snapshot -i\` may miss their buttons.** A
  base-ui / portal-rendered toast lives outside the main tree and can be occluded by a
  dev overlay; \`snapshot -i\` does not reliably surface its action buttons. Read the
  toast via an \`eval\` DOM query, and because it dismisses in \\~5s, re-trigger it
  immediately before the screenshot/query (or fire its button via \`.click()\` in the
  same \`eval\`) rather than relying on a timed hover-then-observe.
- **D5. \`agent-browser screenshot\` can WEDGE the session; \`eval\`/\`get\` still work.**
  Each session is one daemon socket, so a wedge is scoped to that session. An
  interrupted screenshot RPC (a killed command, a bad flag, \`--full\` on a giant page)
  can leave the socket half-consumed, after which every later \`screenshot\` fails
  (\`Resource temporarily unavailable\` / \`CDP response channel closed\`) while
  \`eval\`/\`get url\` keep working — **not** a display-sleep or permission issue. Reset
  with \`agent-browser close --all\`, or skip the daemon entirely (D6).
- **D6. WORKS — raw-CDP screenshot bypasses the daemon.** \`scripts/cdp-screenshot.sh [--port <n>] [--out x.png] [--full] [--check]\` opens its own ws to the target, does
  one \`Page.captureScreenshot\`, and closes (\\~60ms). Immune to the D5 wedge and
  **robust when the display is asleep or the window is minimized/occluded** (the
  engine forces a compositor frame). Use it for Electron evidence and as a preflight
  (\`--check\` → exit 0 iff a real, non-black frame was captured).
- **D7. OS \`screencapture\` is BLACK when the display is asleep/locked/screensaver.**
  Distinct from D5/D6: \`screencapture\` (and \`capture-app-window.sh\`, osascript grabs)
  captures the physical framebuffer, so an idle-slept display → a uniformly black PNG
  (mean/max = 0). Permission can be fine. Gate with \`scripts/check-screen-recording.sh\`
  (checks the permission bit + a real-frame blackness probe) and keep the display
  awake for the whole run: \`caffeinate -dimsu &\`. CDP capture (D6) does not have this
  problem.
- **D8. The daemon serializes commands — \`open\` queues behind a screenshot loop.**
  While a recording loop (\`record-gif.sh\`) is running, \`agent-browser open <url>\`
  lands late/out of order, and your "during navigation" screenshot can show the
  PREVIOUS page (which may look identical to the expected end state — a false read).
  **Works**: during any recording loop, navigate with
  \`agent-browser eval 'location.href="<url>"'\` (fire-and-forget) instead of \`open\`.
- **D9. A mid-session bundler dependency re-optimize can wedge the renderer
  compositor.** Symptom: capture returns black, the app root's \`innerText\` is 0 while
  \`textContent\` still holds the full DOM (C4), and \`visibilityState\` is \`visible\` with
  real dimensions — not display sleep or permission (D6/D7 would survive both). It
  often follows a "re-optimizing dependencies" / "failed to fetch dynamically imported
  module" log line. **Works**: restart the dev instance; \`location.reload()\` alone may
  not clear it.
- **D10. Virtualized lists: driving \`scrollTop\` by hand blanks the pane — use a small
  fixture.** A virtualizer unmounts nodes as you scroll past (a \`TreeWalker\` search
  then "loses" a node that was there a second ago), and forcing \`scrollTop\` far
  outside the rendered window can make the scroll container itself disappear — reading
  exactly like a render bug. **Works**: pick a fixture small enough that the target is
  on the first screen; far cheaper and more reliable than fighting the virtualizer.
- **D11. React controlled inputs ignore synthetic events — use \`agent-browser click\`
  (trusted CDP input).** \`el.click()\` and even a full synthetic
  \`pointerdown/mousedown/pointerup/click\` sequence are \`isTrusted: false\`, so a
  React-controlled checkbox/toggle never updates its state. **Works**: \`snapshot -i\`
  for the ref, then \`agent-browser click <ref>\` — it goes through CDP
  \`Input.dispatchMouseEvent\`, which the page sees as a real user click. The snapshot
  also reveals when a control is \`[disabled]\` (the app deliberately refusing), which a
  coordinate-click never would.
- **D12. Disambiguate elements by geometry or an identifying attribute — don't
  singular-select.** A page can render a hidden zero-size duplicate of a subtree
  (e.g. an offscreen measurement copy) at \`(0,0)\`, first in DOM order, so a singular
  \`querySelector\` grabs the phantom: a \`fill\` reports success while the visible box
  stays empty, a click on the phantom button is a silent no-op, and an \`innerText\`/aria
  grep "finds" a control the user can't see. **Works**: enumerate and filter by a
  non-zero \`getBoundingClientRect()\`, or target by the component's own \`aria-label\`;
  tag the resolved element with a \`data-probe\` attribute and drive it with
  \`agent-browser click '[data-probe=...]'\`.
- **D13. A blank page at \`about:blank\` with a 1280px viewport usually means the
  previous \`open\` failed** (exited non-zero without navigating — e.g. an unrecognized
  global flag). The session still exists and answers every later probe — against the
  fresh page it was born with, at the default viewport. Read the \`open\` exit code and
  stderr to learn _why_ rather than assuming the page went blank; treat the
  fingerprint as "the navigation failed".

---

## E. Environment / shell gotchas

- **E1. Not every layer hot-reloads — restart and prove which code the process runs.**
  A dev server's HMR typically covers the renderer/client only. Server code,
  main-process code, and adapters that run out-of-process are often NOT recompiled on
  edit, so reloading the client verifies nothing — the old code is still running, and
  the failure looks exactly like a logic bug in your own diff. **Works**: after an
  edit to a non-client layer, restart before drawing a conclusion, and prove the
  process has your code before debugging it — e.g. curl the dev bundler for the source
  and grep for a marker (renderer), or grep the built bundle for the marker (server /
  main).
- **E2. The shell's \`grep\` may honor \`.gitignore\` — "not found anywhere" can be a
  false negative.** Some environments alias \`grep\` to a wrapper (e.g. \`ugrep --ignore-files\`) that skips \`.gitignore\`d paths, silently omitting \`node_modules\`.
  Before asserting "X exists nowhere", name the ignored directory explicitly
  (\`grep -rl X node_modules\`) or call \`/usr/bin/grep\` directly.
- **E3. In zsh, a loop variable named \`path\` overwrites the command search path.** zsh
  ties \`path\` to \`PATH\` as a special array; assigning it (e.g. parsing a cookie jar's
  path field) replaces the process command search path, and the next executable fails
  with \`command not found\`. Name the field something else (\`cookie_path\`); this is a
  shell failure, not an auth/browser failure. (Similarly, \`zsh does NOT word-split
unquoted vars\` — stashing \`S="--session x --cdp 9226"\` then \`agent-browser $S\`
  fails; inline the flags or use an array.)
- **E4. A curl "502" from a local port with nothing listening can be a shell proxy
  env.** If \`HTTP_PROXY\`/\`HTTPS_PROXY\` are set and \`NO_PROXY\` does not exempt
  localhost, a dead local host is forced through the proxy and returns the proxy's
  502 — a "server up but broken" mirage. \`curl --noproxy '*'\` is a harmless
  belt-and-braces habit; if you actually see a 502 from a local port, check \`NO_PROXY\`
  before believing the server is up.
- **E5. Dev servers can write managed files on start — check \`git status\` before
  reporting the tree clean.** Some frameworks append a managed block to a repo file on
  \`dev\` start (once, idempotently). Reverting it at teardown makes it look like
  per-start churn and causes it to be re-appended on the next start. Commit the block
  or opt out per the framework, and always check \`git status\` before claiming a clean
  tree.
- **E6. Persistent resource exhaustion (e.g. Vite \`EMFILE: too many open files\`) is a
  stop-and-ask, not a workaround.** If a surface exits at startup with a
  file-watcher/resource-exhaustion error while the port is free, the likely cause is
  other running watchers (extra worktrees, surviving terminals, an editor window) that
  you must not kill. Terminate the run, report the exact error, and ask the user to
  clean up other processes — do not change watch mode, fall back to a static build, or
  publish a report from a degraded surface.
- **E7. The default \`lobehub-dev\` browser session is shared — a parallel run can steal your
  tab.** \`agent-browser\` sessions are keyed by name, not by workspace, so two runs both using
  \`--session lobehub-dev\` drive the **same** browser. The other run navigates the tab to _its_
  dev server, after which your \`eval\` reads that page while \`screenshot\` may still show yours —
  a screenshot that renders your fixture next to a \`document.body.innerText\` from the same
  moment containing none of its strings, every assertion \`false\`. It reads like a product bug;
  it is two runs sharing one browser. **Works**: give every run its own session name, seed auth
  into it, and confirm the tab is yours before asserting — \`agent-browser --session <name> tab
list\` must print YOUR port and path. Same applies to ports: a worktree allocates its own
  \`SERVER_PORT\`/\`SPA_PORT\`, so re-run \`test-env.sh\` inside the worktree you are testing rather
  than assuming another checkout's ports.

### B5. ✅ WORKS — client-service mock state must survive reloads; persisted SWR cache replays old terminal data under the same key

- **Situation**: driving a polling flow's UI states (processing / failed / done) with an HMR
  mock of the client service, switching modes between full page reloads via a \`window.__MODE\`
  flag.
- **Doesn't work**: \`window\` flags — a reload wipes them before the first fetch, so the run
  races the mock's default mode. Worse, the persisted SWR cache (localStorage/IndexedDB, B3)
  hydrates the PREVIOUS run's terminal result under the same SWR key at mount — a
  "done"-triggered effect (auto-advance) can fire \\~1s after load even though the mock now
  returns an in-progress state, which reads as "the mode flag didn't take".
- **Works**: read the mode from \`localStorage\` inside the mock (set it BEFORE the reload), and
  make the mock's cache key vary with the mode (e.g. \`topic-mock-\${mode}\`) so each mode gets a
  fresh SWR key that the persisted cache has never seen. Also log every mock entrypoint call
  into a \`window.__CALLS\` array — it is the cheapest proof of which contract fields the UI
  actually sent (e.g. per-provider retry ids).
`})),G,Ze=e((()=>{G=`# Project layer (\`.agents/acceptance/\`)

This skill is project-agnostic. Everything specific to the project under test — how
to start and stop it, which ports and services it needs, how auth works, which
surfaces it has, and how to jump straight into app state — lives in a per-project
adapter at \`.agents/acceptance/PROJECT.md\`. The skill reads it; it never guesses the
project's commands.

A repository that verifies itself often has more than commands to share: a
plan gate owned by the acceptance-checker once environment readiness is established, a teardown discipline, a publish
target, a report directory convention. Those live beside the adapter in
\`.agents/acceptance/PROCESS.md\`. **When that file exists it owns the run process,
and this skill supplies the acceptance contract** — plan, evidence, report,
round. Read both before executing; where they disagree about _how to run_, the
project layer wins, and where they disagree about _what a valid round is_, this
skill wins.

## Where the adapter lives

\`\`\`text
<repo>/.agents/acceptance/        # committed — the adapter and project logs are team assets
├── PROJECT.md                    # the adapter: commands, ports, services, auth, surfaces
├── PROCESS.md                    # optional: the project's run process (gate, teardown, publish)
├── common-mistakes.md            # PROJECT-layer living log (writable)
├── probe-mock-patterns.md        # PROJECT-layer living log (writable)
├── references/                   # optional: project-owned how-tos
└── scripts/                      # optional: project env / probe / capture scripts
\`\`\`

\`.agents/acceptance/\` is **committed** (the adapter and the project living logs are
shared, versioned team assets). The report output directory \`.records/\` is
**gitignored** — reports are per-run artifacts, published to LobeHub Acceptance,
not committed.

## Fixed section skeleton

\`PROJECT.md\` always has these six sections, in this order. Sections the skill refers
to by number (\`PROJECT.md §2\`, \`§3\`, …), so keep the numbering.

1. **Project summary** — what the product is, and the repo layout relevant to
   testing (which package holds the server, the web app, the desktop shell, the
   CLI).
2. **Environment** — how to start and stop the dev environment; the required
   services (database, cache, queue, object store) and how to start each; how to
   detect "already running" so a run does not clobber a user's server; how env and
   ports are resolved (the project's own env-resolver command, if any) so the skill
   never hard-codes a port table.
3. **Auth** — test accounts, seeding commands, and a per-surface status check (one
   command per surface that answers "am I signed in on this surface?").
4. **Surfaces** — which of CLI / Web / Electron apply, and for each that applies:
   launch command, base URL / port, agent-browser session name (web/electron), and
   which probe scripts drive it.
5. **Project probes & quick navigation** — the fast paths into app state: an auth
   probe, a current-route probe, a running-operations probe, and a \`goto <route>\`
   quick-navigation, plus the routes worth jumping to. These are the project's
   equivalent of a state-introspection helper; the skill uses them instead of
   hand-rolling store-eval snippets.
6. **Known constraints** — anything the generic gates must know before running:
   services that are hard prerequisites for a code path (e.g. "agent runs require
   the queue service up"), standalone sub-packages that need their own install,
   surfaces that only work on macOS, or any repo-specific gotcha a run must respect.

\`PROJECT.md\` may reference project scripts under \`.agents/acceptance/scripts/\` or
anywhere in the repo.

## Copy-pasteable template

\`\`\`markdown
# PROJECT.md — acceptance adapter for <project name>

## 1. Project summary

<One paragraph: what the product is. Then the repo layout that matters for testing —
which directory/package is the server, the web app, the desktop shell, the CLI.>

## 2. Environment

- **Start dev server:** \`<command>\` (base URL: \`<url>\`, port: \`<port>\`)
- **Stop dev server:** \`<command>\` (must stop only what this run started)
- **Required services:** <db / cache / queue / object store — with the start command
  for each, or "none">
- **Already-running detection:** \`<health-check command>\` — how to tell the server is
  up before starting another one.
- **Env / port resolution:** \`<command or file>\` — the source of truth for ports and
  URLs. Do NOT hard-code a port table; read it here.

## 3. Auth

- **Test account(s):** <how to obtain — seeded, fixture, or a real login>
- **Seeding command:** \`<command>\` (or "n/a")
- **Per-surface status check:**
  - CLI: \`<command>\` — signed-in when <...>
  - Web: \`<command>\` — signed-in when <...>
  - Electron: \`<command>\` — signed-in when <...>

## 4. Surfaces

<For each surface that applies. Delete the ones that don't.>

### CLI

- Invocation: \`<how the CLI is run — from source or built binary>\`
- Auth: <see §3 CLI>
- Standalone install: \`<command>\` or "covered by root install"

### Web

- Launch: \`<dev server command>\` (from §2)
- Base URL: \`<url>\`
- agent-browser session: \`<session name>\`

### Electron

- Launch: \`<start command>\` — CDP port \`<port>\`
- Stop: \`<command>\`
- Login persistence: <how login survives across runs>

## 5. Project probes & quick navigation

- Auth probe: \`<command>\` → \`{ isSignedIn, userId }\`
- Route probe: \`<command>\` → current route
- Operations probe: \`<command>\` → running operations
- Quick navigation: \`<command> goto <route>\`
- Routes worth jumping to: <list>

## 6. Known constraints

- <e.g. "agent runs require the queue service (§2) up, or the run dies before any
  real work">
- <e.g. "the desktop and CLI packages are standalone — install inside each">
- <e.g. "OS-capture surfaces are macOS-only">
\`\`\`

## First-run bootstrap

When \`.agents/acceptance/PROJECT.md\` is absent, build it before doing anything else:

1. **Explore the repo.** Read the signals that reveal how the project runs:
   \`package.json\` scripts, \`README\`, CI workflows (\`.github/workflows/**\`),
   \`Makefile\` / \`Justfile\`, \`docker-compose*.yml\` / \`compose.yaml\`, \`.env.example\`,
   and any existing test/dev docs. Note the dev-server command, the services it
   needs, the ports, the auth story, and which surfaces exist.
2. **Draft \`PROJECT.md\`** from the fixed skeleton above, filling every section from
   what you found. Where a value is uncertain, mark it explicitly as a guess rather
   than inventing a command.
3. **Present it for confirmation.** Show the draft to the user and ask them to
   confirm or correct it — especially the start/stop commands, the required
   services, and the auth path. Do not run a dev server or write test steps against
   an unconfirmed adapter.
4. **Write it only after approval**, to \`.agents/acceptance/PROJECT.md\`. Create
   \`.agents/acceptance/\` if it does not exist.

\`lh acceptance install\` only places the skill files; it does no repo exploration.
The adapter draft needs a model, so the first verification run is what bootstraps
\`PROJECT.md\`.

## Drift rule

Treat the adapter like a living log: when observed reality diverges from it during a
run (a port moved, a start command changed, a service is now required), **fix
\`PROJECT.md\` in place during the run** rather than working around it silently. The
next run should not rediscover the same divergence.

## Two living-log layers

The skill's \`references/common-mistakes.md\` and \`references/probe-mock-patterns.md\`
are the **generic layer** — product-independent, and read-only in a consumer repo:
the installed copy is materialized from the skill source, so an edit there is lost
on the next update. Change it by PR to the skill source. The project's own
\`.agents/acceptance/common-mistakes.md\` and \`.agents/acceptance/probe-mock-patterns.md\` are
the **project layer** — writable, and the only place a run records project-specific
learnings. At runtime the agent reads both layers and writes only the project layer.
When a project-layer entry turns out to be product-independent, genericize it (drop
every project-specific noun) and PR it to the generic layer upstream.

**Confidentiality runs one way.** Anything naming a project's packages, routes,
schemas, env vars, service names, or business logic stays in the project layer;
only a rule that reads correctly with every project noun removed may be promoted.
`})),K,Qe=e((()=>{K=`# Web and Electron recording via CDP

Use this reference only for Web or Electron criteria that assert behavior over
time: streaming output, loading-to-loaded transitions, timers, animations, or
multi-step flows. Capture renderer frames through \`agent-browser\`; do not record
the host screen.

## Capture a frame sequence

Run the capture loop in a persistent shell while driving the scenario from
another shell. Choose exactly one capture function for the selected surface:

\`\`\`bash
FRAME_DIR=$(mktemp -d)

# Web:
capture_frame() { agent-browser --session app screenshot "$1"; }

# Electron alternative:
# capture_frame() { agent-browser --cdp 9222 screenshot "$1"; }

i=0
while [ "$i" -lt 40 ]; do # about 20 seconds at 0.5 seconds per frame
  printf -v frame_number "%06d" "$i"
  capture_frame "$FRAME_DIR/frame_$frame_number.png"
  i=$((i + 1))
  sleep 0.5
done
\`\`\`

Use a shorter interval such as \`0.25\` seconds for quick transitions and a longer
interval such as \`1\` second for slow flows. Keep the capture scoped to the
behavior under review.

## Assemble and validate the clip

\`\`\`bash
# MP4
ffmpeg -y -framerate 2 -i "$FRAME_DIR/frame_%06d.png" \\
  -c:v libx264 -crf 23 -pix_fmt yuv420p ./proof/flow.mp4

# GIF with a generated palette
ffmpeg -y -framerate 2 -i "$FRAME_DIR/frame_%06d.png" \\
  -vf "scale=900:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \\
  ./proof/flow.gif

ffprobe -v error \\
  -show_entries format=duration:stream=codec_name,width,height,avg_frame_rate,nb_frames \\
  -of json ./proof/flow.mp4
\`\`\`

Inspect the first frame, action frame, transient state, and settled frame before
citing the artifact. Keep the original frame directory until verification is
published; it is useful when a reviewer asks about a one-frame defect.

## Boundaries

- CDP frames are headless/cloud-safe and exclude browser or Electron window
  chrome.
- A native file picker, permission prompt, menu, or other OS-owned surface is not
  present in these frames. Follow the selected surface's conditional native-step
  guidance when that chrome is part of the criterion.
- Use \`--by agent-browser\` for the captured frames and \`--by program\` for the
  assembled media artifact.
- \`agent-browser\` and \`ffmpeg\`/\`ffprobe\` are required. Probe them before the run.

Choose \`gif\` versus \`video\` and submit the artifact using the shared contract in
[evidence.md](./evidence.md).
`})),q,$e=e((()=>{q=`# iOS Simulator framebuffer recording

Use this reference only for an iOS Simulator criterion that requires temporal
evidence. Record device pixels directly with \`simctl\`; this excludes Simulator
window chrome and is stronger evidence than a host-screen crop. Use an explicit
UDID when more than one device is booted.

## Record and finalize

\`\`\`bash
# Start in a persistent terminal/session and wait until stderr says
# "Recording started" before driving the scenario.
xcrun simctl io "$UDID" recordVideo --codec=h264 ./proof/ios-flow.mp4 \\
  2> ./proof/ios-recording.log

# Drive the scenario with AXe or the repository's existing native CLI/UI tests in
# parallel. Stop the recorder with SIGINT (Ctrl-C), then wait for finalization.
\`\`\`

Do not use SIGKILL: \`simctl\` must flush in-flight frames and finalize the movie.
An interrupted recorder command may return a non-zero shell status after a
successful SIGINT finalization; judge the artifact with \`ffprobe\`, not that status
alone.

AXe also exposes \`record-video --fps <1-30> --quality <1-100>\`, but terminal
wrappers can intercept SIGINT before AXe writes MP4 metadata. Use it only after a
short probe file passes \`ffprobe\`; otherwise retain AXe for input/Accessibility
and use \`simctl\` for recording.

## Verify the movie

\`\`\`bash
ffprobe -v error \\
  -show_entries format=duration:stream=codec_name,width,height,r_frame_rate,avg_frame_rate,nb_frames \\
  -of json ./proof/ios-flow.mp4
\`\`\`

Simulator recordings can be variable-frame-rate. Treat a requested rate as a
target, not a guarantee; use \`avg_frame_rate\` and \`nb_frames\` as the observed
values.

## Extract every encoded frame

Use this path for one-frame flashes, flicker, or exact transition continuity:

\`\`\`bash
FRAME_DIR=$(mktemp -d)
ffmpeg -i ./proof/ios-flow.mp4 -map 0:v:0 -fps_mode passthrough \\
  "$FRAME_DIR/frame_%06d.png"
\`\`\`

Count the generated PNGs and compare the total with \`ffprobe\`'s \`nb_frames\`.
Variable timestamps can produce non-monotonic-DTS warnings from the image muxer;
the count check determines whether every decoded frame was retained.

## Sample frames and contact sheets

For ordinary UI review, sample at a declared rate and retain the raw video:

\`\`\`bash
ffmpeg -i ./proof/ios-flow.mp4 -vf "fps=10" \\
  ./proof/review-frame_%06d.png

ffmpeg -i ./proof/ios-flow.mp4 \\
  -vf "fps=2,scale=360:-1,tile=4x4:padding=8:margin=8" \\
  ./proof/contact_%03d.png
\`\`\`

Inspect start, action, transient, and settled states. A contact sheet is a review
index, not proof of gesture delivery; pair it with the driver action and fresh
Accessibility/postcondition evidence from
[the iOS Simulator surface](../surfaces/ios-simulator.md).

Tag the direct recording as \`--by cli\` and deterministic frame/contact-sheet
transforms as \`--by program\`. Submit using the shared contract in
[evidence.md](./evidence.md).
`})),J,et=e((()=>{J=`# Native macOS screen recording

Use this reference only when the criterion owns a native macOS window or OS
chrome that CDP cannot observe. It requires a local macOS display and is not
cloud-portable.

## Record the host screen

Prefer a fixed duration so the recorder finalizes without an external kill:

\`\`\`bash
screencapture -V 15 ./proof/native-flow.mp4
\`\`\`

For explicit encoder control, identify the AVFoundation screen device first,
then record it with \`ffmpeg\`:

\`\`\`bash
ffmpeg -f avfoundation -list_devices true -i ""

# Replace 1 with the discovered screen device index.
ffmpeg -y -f avfoundation -framerate 30 -i "1:none" -t 15 \\
  -c:v libx264 -crf 23 -pix_fmt yuv420p ./proof/native-flow.mp4
\`\`\`

Convert a short clip to GIF when inline playback is important:

\`\`\`bash
ffmpeg -y -i ./proof/native-flow.mp4 \\
  -vf "fps=8,scale=900:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \\
  ./proof/native-flow.gif
\`\`\`

Inspect the resulting file before citing it and confirm that no unrelated window,
notification, or secret entered the host-screen capture. Tag direct
\`screencapture\` output as \`--by cli\` and FFmpeg-derived media as \`--by program\`.

For input and Accessibility commands, use
[computer-use.md](./computer-use.md). Choose \`gif\` versus \`video\` and submit using
the shared contract in [evidence.md](./evidence.md).
`})),Y,tt=e((()=>{Y='# Structured Report Rounds (`lh acceptance run ingest`)\n\nPer-criterion `result submit` (SKILL.md Step 3) assumes a verify plan already\nexists. When it doesn\'t — a standalone delivery, or any run where **you** author\nthe checks, which is the usual case — publish a **structured report round**\ninstead: a self-contained directory that\n`lh acceptance run ingest` uploads as one immutable verification round. The\nacceptance page renders itself from `result.json`: provenance, the overall\nconclusion, and the check list from `plan[]` paired with `cases[]`, each with\nits evidence inline — **images render as figures, before/after pairs render\nunder tinted comparison bands**. A chat-only summary or a bare markdown report\nnever gets that rendering; the structured round does.\n\n## Contents\n\n- [No operation ID needed](#no-operation-id-needed)\n- [Directory layout](#directory-layout)\n- [Workflow](#workflow)\n- [result.json schema](#resultjson-schema)\n- [Rules](#rules)\n\nRule of thumb: **plan exists → per-criterion submit; you author the checks →\nstructured round ingest.** Never mix both for the same delivery round.\n\n## No operation id needed\n\n`--operation` is optional on every command in this skill. Without one, author\nthe checks and use one of these first-class paths:\n\nA round is immutable, so **allocate a fresh directory before every ingest** —\nnever point a second ingest at a directory you already published:\n\n```bash\n# $1 = subject key (see Directory layout), $2 = a short slug for this round.\nnew_round() {\n  dir=".acceptances/$1/$(date +%Y%m%d-%H%M%S)-$2"\n  mkdir -p "$dir/assets" && printf \'%s\' "$dir"\n}\n```\n\n```bash\n# A. first external-project round — creates a standalone acceptance.\n# It has no subject yet, so group it under `standalone-<slug>` until the\n# returned acceptance id gives the tree its permanent name.\nREPORT_DIR=$(new_round standalone-checkout-flow first-pass)\nlh acceptance run ingest "$REPORT_DIR" \\\n  --requirement "<one-sentence business goal>" --json\n\n# Re-verification after a fix — a NEW round on the SAME acceptance.\nREPORT_DIR=$(new_round standalone-checkout-flow repair)\nlh acceptance run ingest "$REPORT_DIR" --acceptance "$ACCEPTANCE_ID" --json\n\n# Attach to a subject you were told to use — a Task, Topic, or Document.\n# Group the round under that same subject so the tree and the page agree.\nREPORT_DIR=$(new_round topic-tpc_xxx first-pass)\nlh acceptance run ingest "$REPORT_DIR" --subject topic:tpc_xxx --json\n\n# B. atomic fallback — create the round first, then submit into it with --run\nRUN=$(lh acceptance run create --title "…" --goal "…" --json | jq -r .id)\nlh acceptance run result submit --run "$RUN" --item "$CHECK_ITEM_ID" …\n```\n\nPrefer **A**: per-criterion submits without a plan produce checks with no\ndeclared intent, so the page has nothing to pair the outcome against.\n\n## Directory layout\n\nRounds live under `.acceptances/`, grouped by the delivery they belong to:\n\n```\n.acceptances/\n├── .gitignore                     # `*` — the whole tree stays out of git\n└── <subject-key>/                 # topic-tpc_x | task-T-12 | document-doc_x\n    │                              # standalone-<slug> until an acceptance id exists\n    ├── acceptance.json            # which acceptance these rounds belong to\n    └── <YYYYMMDD-HHMMSS>-<slug>/  # ONE round — never write into an existing one\n        ├── result.json            # THE report — the page renders from this\n        ├── proposal.md            # what this round delivers, posted to the discussion\n        ├── report.md              # narrative tail only (verdict, follow-ups, score)\n        └── assets/                # evidence referenced from cases[].evidence\n```\n\nThree things the shape buys, none of them cosmetic:\n\n- **The subject key mirrors `--subject <type>:<id>`**, so a directory listing\n  answers what the acceptance page answers: which delivery is this, and how many\n  rounds has it had. A flat `./acceptance-report` answers neither. A standalone\n  round has no subject to key on, so group it under `standalone-<slug>` and keep\n  every later round of that delivery in the same directory.\n- **A round is immutable**, so its directory name carries the timestamp and is\n  written once. Re-verification after a fix creates the NEXT directory; reusing\n  one silently destroys the evidence a reviewer already decided against.\n- **The tree is git-invisible.** `.acceptances/.gitignore` contains `*`, which\n  ignores the whole directory including itself, so evidence binaries never land\n  as untracked noise and the project\'s own `.gitignore` is never rewritten.\n  `lh acceptance install` and `lh acceptance run ingest` both seed that file, so\n  the guarantee does not depend on which entry point a run came through.\n\nWriting a round somewhere else still works — `ingest` takes an explicit path —\nbut then keeping it out of git is on you.\n\n## Workflow\n\n1. **Write `plan[]` BEFORE you run anything.** Each item is\n   `{ id, title, category, verifier, method, expected, requiredEvidence,\nsupersedes? }`.\n   A planned item that never produces a case renders as **未执行** rather than\n   vanishing — cut coverage in the open.\n   Every item is an outcome the reader can judge — never a programmatic gate\n   ([what is not an acceptance check](#what-is-not-an-acceptance-check)).\n   **Copy the shapes in this file rather than reconstructing them**: a\n   plausible-but-wrong nested shape parses as JSON, is dropped on ingest, and\n   the round publishes green with its evidence silently degraded. Read every\n   ingest warning as a failed publish.\n   Before executing the **first round only**, send the draft for\n   [acceptance-checker plan review](acceptance-checker.md) and save the agreed plan and\n   requirement mapping after resolving material gaps. In follow-up rounds the\n   primary carries the agreed plan forward and inspects it itself.\n2. **Collect evidence into `assets/` as you test.** Screenshots must be\n   **visually verified with the Read tool before being cited** — never cite an\n   image you haven\'t looked at. For metrics, time series, model or benchmark\n   comparisons, distributions, matrices, and tables, use native Acceptance\n   structured visualizations: put review-sized values in `cases[].datasets`,\n   declare the view in `cases[].visualizations`, and retain the raw CSV/JSON,\n   benchmark output, trace, profile, or vectors in `evidence`. Do not generate a\n   PNG/GIF when a supported renderer can faithfully express the data. See\n   [Structured visualizations](#structured-visualizations).\n3. **Fill `cases[]` as you go** — one entry per tested behavior\n   (`{ id, name, category, surface, status, observation, evidence }`), reusing\n   the plan item\'s `id`. `status`: `pass` / `fail` / `blocked` (couldn\'t run —\n   a blocked case is not a pass).\n   Keep `observation` brief and reviewer-facing; follow\n   [checklist explanation guidance](../SKILL.md#keep-checklist-explanations-brief).\n   Detailed reasoning and execution records belong in evidence attachments.\n4. **Set `title` and `summary.verdict`** (`pass` / `fail` / `partial`) — without\n   them the run lists as "未命名验证" with a permanent amber "?" glyph. Write the\n   one-paragraph verdict into `summary.conclusion`.\n5. **Write `proposal.md` — the round\'s own note to the reviewer.** What this\n   round delivers and where you want their eyes, the way a person writes a pull\n   request description: a few sentences, in the language the user is conversing\n   in. `ingest` posts it into the acceptance\'s discussion as a message on this\n   round, so it is the first thing a reviewer reads and they can answer it in\n   place. It is NOT the verification write-up — do not restate the checks or the\n   verdict, those are `result.json` and `report.md`. Every round gets one: the\n   first says what the delivery is, later ones say what changed since the\n   feedback. Skip it only when there is genuinely nothing to say beyond the\n   checks.\n6. **`report.md` is the narrative tail only** — this-round notes, follow-ups,\n   score. Do NOT repeat the scope block or a case table; those double up on the\n   page. Write it in the language the user is conversing in.\n7. **Review, then publish:** hand the completed plan, report, original evidence,\n   and an explicit file list with relevant diff text or prepared diff artifact\n   paths (including in-round repairs, base and tested revision, and affected case IDs)\n   to the acceptance-checker for a quick evidence review using [acceptance-checker.md](acceptance-checker.md)\n   (first round only, one quick check with no checker re-review after fixes;\n   the diff helps identify updates and affected agreed cases.\n   The acceptance-checker limits code reading to the supplied materials and must not run `git diff` or\n   expand the file list. It checks the report and artifacts, without reopening requirements\n   or expanding into code review. State repairs and affected cases in plain language). Resolve\n   findings and record review limitations in the narrative tail before declaring\n   a pass. The primary publishes; the acceptance-checker does not operate the product or\n   upload results.\n\n   ```bash\n   lh acceptance run ingest "$REPORT_DIR" --source agent-testing --json\n   ```\n\n   On the first ingest, add `--requirement "<one-sentence business goal>"`.\n   Describe the durable goal of the whole acceptance, not this round\'s narrower\n   implementation scope.\n\n   Grouping needs nothing from you: the command attaches the round to the\n   conversation it was invoked from when it can, and otherwise creates a\n   standalone acceptance. Pass `--subject` only when you were told which Task,\n   Topic, or Document owns the work. To publish a repair into that same history, add\n   `--acceptance <acceptanceId>` using the ID printed by the first ingest. The\n   command uploads cases + evidence + report body and prints\n   `/acceptance/<acceptanceId>` plus its `?r=<roundIndex>` snapshot form —\n   the only link the final reply exposes (SKILL.md, Final handoff).\n\n## result.json schema\n\nEvery `cases[].evidence` file entry must use `{ "path": "...", "description": "..." }`.\nDescribe the file\'s contents and relevance to the criterion, following the\n[shared description requirements](evidence.md#file-versus-inline-content).\nDo not copy the legacy bare-path form: ingestion accepts it for compatibility,\nbut its filename fallback does not satisfy the description requirement.\n\n```json\n{\n  "cases": [\n    {\n      "id": "1",\n      "category": "Task hierarchy",\n      "name": "task tree returns nested children",\n      "surface": "cli",\n      "status": "pass",\n      "observation": "root returned 3 nested children, depth 2",\n      "evidence": [\n        {\n          "path": "assets/task-tree.txt",\n          "description": "Task tree command output showing the root and its 3 nested children at depth 2."\n        }\n      ]\n    },\n    {\n      "id": "2",\n      "category": "Model quality",\n      "name": "candidate model improves average precision",\n      "surface": "cli",\n      "status": "pass",\n      "observation": "average precision improved from 0.742 to 0.796",\n      "evidence": [\n        {\n          "path": "assets/evaluation.json",\n          "description": "Evaluation results comparing baseline and candidate average precision, including the observed change from 0.742 to 0.796."\n        }\n      ],\n      "datasets": [\n        {\n          "id": "model-metrics",\n          "fields": [\n            { "key": "metric", "type": "string" },\n            { "key": "baseline", "type": "number" },\n            { "key": "candidate", "type": "number" }\n          ],\n          "rows": [{ "metric": "Average precision", "baseline": 0.742, "candidate": 0.796 }]\n        }\n      ],\n      "visualizations": [\n        {\n          "id": "model-comparison",\n          "type": "metric-comparison",\n          "version": 1,\n          "dataset": "model-metrics",\n          "title": "Model quality comparison",\n          "encoding": {\n            "label": "metric",\n            "before": "baseline",\n            "after": "candidate"\n          }\n        }\n      ]\n    }\n  ],\n  "createdAt": "2026-06-11T15:30:00+08:00",\n  "entry": "<cli> task list --tree",\n  "plan": [\n    {\n      "id": "1",\n      "title": "task tree returns nested children",\n      "category": "Task hierarchy",\n      "verifier": "program",\n      "method": "<cli> task list --tree against a 3-level fixture",\n      "expected": "root shows 3 nested children at depth 2",\n      "requiredEvidence": ["text"]\n    }\n  ],\n  "summary": {\n    "total": 1,\n    "passed": 1,\n    "failed": 0,\n    "blocked": 0,\n    "verdict": "pass",\n    "conclusion": "One-paragraph verdict the page shows under the title."\n  },\n  "surfaces": ["cli"],\n  "title": "Verify task tree API"\n}\n```\n\nOptional fields: `branch` / `commit` / `pullRequest` (provenance line; when\n`branch` is set without `pullRequest`, ingest asks `gh` for the PR),\n`summary.score` (0–100, only when the verdict has a subjective component),\n`subject` (usually passed via `--subject` instead).\n\n### Structured visualizations\n\nA case containing reviewable structured data should provide `datasets[]` plus\n`visualizations[]`. Supported version-1 renderers are `metric-comparison`,\n`line-chart`, `bar-chart`, `scatter-plot`, `heatmap`, and `table`. Each\nvisualization references one dataset by `id` and maps declared fields through\n`encoding`.\n\nInline datasets use declared `fields[]` and object `rows[]`; keep them to a\nreview-sized summary. Retain raw benchmark results, CSV/JSON, traces, profiles,\nand vectors in `evidence`: the visualization is a decision aid, not a replacement\nfor the audit trail. Do not merely upload a data file and expect Acceptance to\ninfer a chart; declare both the dataset and visualization explicitly.\n\nNative renderers are the default because they preserve machine-readable values,\naccessibility, theme adaptation, and consistent comparison semantics. Generate a\nstatic chart only when none of the supported renderers can faithfully represent\nthe result, and explain that limitation in the case observation.\n\nEvery visualization requires unique non-empty `id`, `type`, `dataset`, and\n`version: 1`; `dataset` must reference a declared dataset id. `title` and\n`context` are optional non-empty strings. Every encoding field name below must\nreference a field declared by that dataset.\n\n| Renderer            | Required encoding                                              | Optional encoding                                                                         |\n| ------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |\n| `metric-comparison` | `label`, `before`, `after`                                     | `beforeSamples`, `afterSamples`, `direction`, `statistic`, `target`, `unit`               |\n| `line-chart`        | `x`, non-empty `series[]`; each series requires `field`        | series `label`, series `style` (`muted` \\| `primary` \\| `accent`), `xLabel`, `yLabel`     |\n| `bar-chart`         | `category`, non-empty `series[]`; each series requires `field` | series `label`, `valueLabel`                                                              |\n| `scatter-plot`      | `x`, `y`                                                       | `color`, `label`, `xLabel`, `yLabel`                                                      |\n| `heatmap`           | `x`, `y`, `value`                                              | none                                                                                      |\n| `table`             | none; `encoding` itself may be omitted                         | non-empty `columns[]`; `highlights[]` entries require `field` and `mode` (`min` \\| `max`) |\n\nOne shape for every renderer — `id`, `type`, `version: 1`, `dataset`, and an\n`encoding` whose field names are keys of that dataset (see the `line-chart`\nbelow; the other types differ only in the encoding keys listed above):\n\n```json\n{\n  "dataset": "training",\n  "encoding": {\n    "x": "step",\n    "series": [\n      { "field": "baselineLoss", "label": "Baseline", "style": "muted" },\n      { "field": "candidateLoss", "label": "Candidate", "style": "primary" }\n    ],\n    "xLabel": "Step",\n    "yLabel": "Loss"\n  },\n  "id": "loss-over-time",\n  "type": "line-chart",\n  "version": 1\n}\n```\n\nDataset field `type` is one of `boolean`, `category`, `number`, `string`, or\n`temporal`; field keys and dataset/view ids must be unique. Rows may contain only\ndeclared keys with string, number, boolean, or null values. The combined inline\nrow limit is 10,000.\n\n### Closed vocabularies — the pipeline acts on these, they are not labels\n\n| field                           | values                                                                                                | what it does                                                                                                         |\n| ------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |\n| `verifier`                      | `program` \\| `agent` \\| `llm` (default `agent`)                                                       | How the verdict is reached. A command-asserted check is `program`; calling it `agent` hides what actually judged it. |\n| `requiredEvidence`              | `screenshot` \\| `gif` \\| `video` \\| `audio` \\| `text` \\| `markdown` \\| `dom_snapshot` \\| `transcript` | The artifact this check **must** produce. The coverage gate **fails** an item whose required medium is missing.      |\n| `surfaces` / per-case `surface` | `web` \\| `desktop` \\| `cli` \\| `mobile` \\| `bot` (`electron` → `desktop`)                             | The product surface a check ran **on**. A test kind (`unit`, `backend`) or runtime mode is not a surface.            |\n\n`category` names the user-facing requirement area (e.g. `Task hierarchy`,\n`Rate-limit recovery`) — never a technical surface. `method` / `expected` stay\nfree prose; they render under the check next to the outcome.\n\n### What is not an acceptance check\n\nThe repo\'s own gates — tests, coverage, `type-check`, lint, format, a clean\nbuild, "CI passes" — are never `plan[]` / `cases[]` items, under any phrasing;\nthey are one line in `report.md` under **Verification**. Ingest drops matching\nitems (matched on title, category, AND `method`), warns, and recounts `summary`;\na gates-only round fails to publish. Full rule: SKILL.md.\n\n### Before/after comparison pairs\n\nThe page renders a complete pair under tinted bands (red `before`, green\n`after`). Both halves need the same string `id`; use `layout: "horizontal"` for\na left/right comparison and `layout: "vertical"` for a top/bottom comparison.\nWhen omitted, `layout` defaults to `horizontal`. Add a `label` stating the\nmeasured delta on each side:\n\n```json\n"evidence": [\n  { "path": "assets/before.png",\n    "description": "Topic row before the change, showing the original 11px text size.",\n    "comparison": { "id": "topic-row", "role": "before", "layout": "horizontal", "label": "before: 11px" } },\n  { "path": "assets/after.png",\n    "description": "The same topic row after the change, showing the updated 12px text size.",\n    "comparison": { "id": "topic-row", "role": "after", "layout": "horizontal", "label": "after: 12px" } }\n]\n```\n\nChoose the layout by comparison intent, not by the source image dimensions:\n\n- `horizontal` — before on the left, after on the right. Use it when the reader\n  should compare the same region across two versions at a glance. This is the\n  normal choice for full-page or full-window before/after screenshots.\n- `vertical` — before on top, after below. Use it when preserving each image\'s\n  full width matters more than simultaneous scanning, such as a very wide,\n  shallow toolbar or timeline strip.\n\nA comparison pair means the same view in two states — sequential steps of a\nflow are ordinary ordered evidence with captions, not a pair.\n\n## Rules\n\n- **No evidence, no claim** — every `pass`/`fail` in `cases[]` links at least\n  one asset.\n- **Non-visual behavioral claims need dual text evidence** — attach a concise\n  reviewer-facing reasoning document and a separate audit-facing execution\n  artifact containing the exact command/request and observed values. Neither\n  unsupported prose nor an unexplained log dump is sufficient.\n- **Report failures faithfully** — a failing case with clear evidence is a good\n  report; a vague green one is not.\n- If coverage was cut, say so in `report.md` — silent truncation reads as\n  "covered everything".\n'})),X,nt=e((()=>{X=`---
name: acceptance
version: 0.4.3
description: >
  End-to-end verification and self-evidence for a delivery in any repository,
  with or without a preconfigured verify plan. Discover an existing plan when
  one was handed to this run; otherwise author checks and publish a standalone
  acceptance. Pick the proving surface (CLI / web / desktop / iOS Simulator),
  drive the real product, capture visually confirmed evidence, and publish a
  round with the lh CLI. Triggers on 'verify the task', 'collect evidence',
  'prove it works', 'upload evidence', 'verify plan', 'requiredEvidence',
  'local test', 'manual test', 'test report', 'test with cli', 'test in
  electron', 'test desktop', or any local end-to-end verification task. Needs no
  ambient ids, and never depends on running inside a LobeHub conversation.
---

# Acceptance (Builder Self-Evidence)

You are the **builder** for a delivery. A separate review step judges it against
a **plan** — checks you author, or a verify plan handed to this run. A check that
declares \`requiredEvidence\` **cannot pass on your text alone**: a missing artifact
marks it \`uncertain\` and holds the delivery.

\`\`\`
author (or discover) the plan  →  pick the surface  →  capture evidence  →  publish the round  →  self-check coverage
\`\`\`

## Decide whether to execute before starting a round

Creating or updating a PR, marking it ready, or being asked to upload a report
must not by itself start another verification run. First inspect the requested
scope and the task's existing reports, evidence, and published acceptance links
(from the conversation, PR, or local \`.acceptances/\` directory).

| Delivery state                                                                                                                       | Action                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation/instruction-only change, or pure refactor/tooling change with no product behavior change                               | Skip product acceptance and briefly state why. Keep any applicable quality checks.                                                                                                                                                                                                                          |
| Gitlink-only sync                                                                                                                    | Do not launch a fresh acceptance. Link the upstream change and its existing acceptance when available; disclose missing upstream evidence without claiming it passed. Cloud changes accompanying the sync are assessed separately.                                                                          |
| Completed acceptance already published and still covers the delivery                                                                 | Reuse its URL and coverage. Do not create a round or rerun cases just for the PR.                                                                                                                                                                                                                           |
| Completed acceptance report and evidence exist locally and still cover the delivery                                                  | Inspect coverage and artifacts, then upload that report using [report.md](references/report.md). Preserve the original execution provenance; no product rerun, new plan, or repeated completed checker review is needed merely for upload.                                                                  |
| The delivery was already exercised on the real product earlier in this session (observations and raw artifacts exist, no report yet) | Do not rerun, re-plan, or open a checker stage. Write \`plan[]\` and \`cases[]\` from the observations already made, attach the original artifacts (logs, command output, captures) with their original provenance, disclose any required medium that was never captured instead of recapturing it, and ingest. |
| Product behavior lacks valid evidence, or relevant behavior changed after verification                                               | Execute only the missing or affected outcomes, retain unaffected evidence with its original provenance, and publish according to the round rules below.                                                                                                                                                     |

Evidence is reusable when its criteria cover the requested behavior, its artifacts
are available and support the observations, and subsequent code, dependency,
configuration, or environment changes do not invalidate those observations.
Compare the relevant changes; a different commit SHA, rebase, PR event, or report
publication status alone is not a reason to rerun. Failed/blocked checks and missing
required evidence are not passes: repair or supplement those specific gaps.
An explicit user request for fresh verification still takes precedence.

The execution, environment setup, plan/checker, and capture sections below apply
when executing acceptance. For reuse or upload only, inspect the existing report
and evidence and complete the necessary publication/coverage steps; do not boot
services or replay completed cases. Uploading does not change when or against
which implementation the evidence was captured.

## Independent acceptance review (first round only)

The primary checks the environment, writes the plan, executes cases, inspects
evidence, repairs failures, and publishes. Use one \`acceptance-checker\` agent at two points
in the first acceptance round: give at most two feedback responses on the plan and cases
before execution, then perform exactly one quick report/evidence check against
the agreed criteria before publishing. A second plan check is optional, only
to check the primary's revisions; there is no third plan-feedback response.
Count the two stages separately. After
either stage's limit, the primary owns remaining corrections and verification.
The acceptance-checker **is** the plan gate — never ask the user to approve a
plan; ask the user only for a user-owned prerequisite or a product decision
that changes the plan. In both stages, the primary supplies an explicit file
list and the relevant diff text or prepared diff artifact paths. The acceptance-checker
limits code reading to these materials; it must not run \`git diff\` or discover
its own scope. This does not restrict inspection of the plan, report, or evidence.
During evidence review, use it only to identify the updates and the agreed
cases whose evidence needs checking; the core task is checking the report
against the plan and artifacts. Do not reopen requirements, expand into code
review, or investigate implementation details. Return contradictions to the
primary for explanation or repair. Follow-up rounds have no acceptance-checker: the primary
re-runs, inspects, and publishes itself. Do not delegate execution or require
per-case approval.

Read [acceptance-checker.md](references/acceptance-checker.md) for the input/output
contract, review boundaries, and follow-up rules. Acceptance review supplements the
primary's own checks and any configured verifier; it does not replace either.
If delegation or required media inspection is unavailable, disclose the missing
review and unverified claims rather than claiming independent acceptance.

## Read the project layer first

Before touching an environment, check for \`.agents/acceptance/\`:

| File                     | What it owns                                                 |
| ------------------------ | ------------------------------------------------------------ |
| \`PROJECT.md\`             | Start/stop commands, ports, services, auth, surfaces, probes |
| \`PROCESS.md\`             | The run process: plan gate, execution rules, teardown        |
| \`common-mistakes.md\`     | Project living log — what earlier rounds got wrong here      |
| \`probe-mock-patterns.md\` | Project living log — how to force state on this product      |

The project layer owns _how this repository is run_; this skill owns _what a
valid round is_ (plan, evidence, report, immutable round, the hard rule). On
running, the project layer wins; on what may be published, this skill wins. Never
invent a start command, port, or auth flow \`PROJECT.md\` answers; fix a divergence
in the adapter during the run instead of working around it. No
\`.agents/acceptance/\` → bootstrap one first:
[project-adapter.md](references/project-adapter.md).

## Living logs — inject each by its own shape

Both layers (this skill's generic copies and the project's own) are loaded once
the target is known, silently:

- **[common-mistakes.md](references/common-mistakes.md)** — read its
  **Checklist** in full, now and again before marking any case \`pass\`. Pull an
  entry by id only when a checklist line applies to a case.
- **[probe-mock-patterns.md](references/probe-mock-patterns.md)** — read the
  heading index, then pull only the entries this round needs. Pick by meaning,
  not keyword; \`rg\` over the body is the fallback.

\`\`\`bash
rg -n '^#{2,4} ' <file>          # the index, with line numbers
sed -n '<start>,<end>p' <file>   # one entry, in full
\`\`\`

Record new project-specific learnings in the project layer only.

## Two paths — no id is required

Every evidence command targets a round. **The authored path is the default**; you
have an operation id only when the invocation names one. Never hunt the
environment for one, and never report this skill inapplicable — a round without
an operation is simply recorded as \`standalone\`.

| You have                        | Path                                                                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| No plan — you author the checks | Write \`result.json\` + \`assets/\`, publish with \`lh acceptance run ingest\` — [report.md](references/report.md)         |
| An operation id you were given  | \`lh verify plan state\`, then \`result submit --operation\` per criterion — [plan-format.md](references/plan-format.md) |

Pass \`--subject\` (\`task:<id>\` / \`topic:<id>\` / \`document:<id>\`) only when the
caller named one; otherwise ingest attaches the round itself when it can and
creates a standalone acceptance when it cannot. On the first ingest, always supply
\`--requirement "<one-sentence business goal>"\` — the durable goal of the whole
acceptance, not this round's scope; it is immutable once recorded.

Prerequisites: \`lh\` is authed (\`lh acceptance run list --json\` returns \`[]\` or
data; an auth error means stop and surface it), and only the UI driver the
selected surface needs is installed — probe before adding dependencies, and never
substitute a private agent plugin.

## Optional user-journey flows

Before authoring checks, identify the independently reviewable user tasks in the
requirement. Use those tasks as business groups, not the PR title or test surface.
For example, reassignment, scheduled continuation, and failure recovery can be
separate groups when the delivery covers all three; do not impose these groups
on unrelated work. Each check should have an outcome the user can accept or
reject independently. Keep shared entry/accessibility checks separate and avoid
repeating their expectations across business checks.

When acceptance depends on a sequence of user states, publish its graph during
planning, before implementation or verification begins. Keep the checklist paths
above for independent checks;
a graph is optional and does not replace evidence or human review.

For flow-based plans, **each flow's title is its checks' default checklist category**.
Publish independent user journeys as separate flows in the same acceptance/run;
use subflows for actual composed journeys. An umbrella flow containing checks
for several independent tasks collapses them into one checklist group. Edges
must describe real user transitions, not artificial links added to make unrelated
checks reachable. Start at the user entry and follow the journey through outcomes
and recovery; UUIDs identify nodes and must not encode business order. Read back
the published plan and inspect its groups and reading order before execution.

For an existing acceptance that only needs different checklist groups, use
\`lh acceptance regroup <acceptanceId> --file groups.json\`. Read the acceptance
bundle first; write \`{ expectedVersion, groups: [{ title, checkItemIds }] }\`,
using the exact union \`checks[].id\` values and
\`acceptance.metadata.checkGrouping.version\` (0 when absent). The groups replace
the current presentation grouping; an empty list restores plan categories.
Unassigned checks keep their plan category. This preserves check IDs, numbering,
evidence and review history without creating a round. It does not change flow
transitions or verification conditions. Do not move execution nodes or start a
new round just to reorganize the checklist; those operations have different
execution semantics.

1. Use the named acceptance (or create one with \`lh acceptance create --help\`).
   Write a JSON file with \`definition: { title, entryNodeId, nodes, edges }\`.
   Give nodes and edges stable UUIDs. Each node has \`id\` and exactly one of
   \`criterionId\` (existing check asset), \`check: { id, title, definition }\`
   (a check asset with steps, fixtures, preconditions and expected outcome), or
   \`subFlowId\` (another flow in this acceptance). Edges have \`id\`, \`sourceNodeId\`,
   \`targetNodeId\`, \`trigger\`, \`required\`, and optional \`condition\`. Every node must
   be reachable from the entry. Publish child flows before referencing them.
2. \`lh acceptance flow publish <acceptanceId> --file flow.json\` saves the
   definition and returns \`flowId\`. To edit it, include that \`flowId\` and the
   current \`expectedHash\` in the file. \`lh acceptance flow view <acceptanceId>\`
   reads definitions, snapshots and results. Publishing does not execute checks.
   Revise a graph in place rather than publishing a second one; a superseded
   graph left behind still renders as its own journey with its own unexecuted
   checks. \`lh acceptance flow delete <acceptanceId> --flow <flowId>\` removes
   one that never should have existed, and only while it has no verified
   history: it is refused once a settled round has run it, or while another
   flow invokes it as a subflow.
3. \`lh acceptance flow plan <acceptanceId> --flow <flowId>\` creates a draft round
   with the graph and its plan. While the round is only planned it follows the
   live graph: publishing an edit refreshes its snapshot and plan in place, and
   running \`flow plan\` again refreshes the same draft instead of opening another
   round. Add \`--run <verifyRunId>\` to attach another flow to the same draft. Read \`lh acceptance run get <verifyRunId> --json\` for
   the actual plan IDs: each branch and subflow invocation has its own
   \`checkItemId\`; never substitute the reusable asset ID.
4. Share the acceptance link so the user can inspect the proposed nodes, branches
   and expected outcomes before implementation. Read and address any actionable
   feedback. Preparing a plan neither executes checks nor approves delivery;
   there is no separate flow-confirmation action. Continue within the user's
   authorized scope, or pause if the user explicitly asked to review before work.
   For requested changes, publish the revised definition with its \`flowId\` and
   \`expectedHash\`; the draft round follows automatically. Never open another
   round or another flow just to revise a plan that has not executed.
5. Implement the work and exercise the real product, then use
   \`lh acceptance flow record <acceptanceId> --file result.json\`, containing
   \`verifyRunId\`, \`checkItemId\`, \`verdict\` (\`passed\`, \`failed\`, \`uncertain\`, or
   \`blocked\`) and \`observation\`. Record only what was observed. Use the returned
   result ID to attach required artifacts through \`lh acceptance run evidence\`
   (inspect its \`--help\`), following the same evidence rules as checklist checks.
6. After all required checks are recorded and passed, run
   \`lh acceptance flow complete <acceptanceId> --run <verifyRunId>\`. Completion
   settles verification; it does not accept the delivery on the user's behalf.
   Read back the round and verify evidence coverage before handing it over.

To rerun the exact old graph, prepare a plan with \`--from-run <sourceVerifyRunId>\` and
omit \`--run\` for a fresh round. This preserves the old definition and starts
without results. Each replay starts as an unexecuted draft. A round is frozen
by its first recorded result; only then does it keep its number. An
\`lh acceptance run ingest\` that reaches an acceptance whose latest round is
still a draft folds into that draft rather than opening a new round. Accepted or closed
acceptances must be explicitly reopened
before starting. Edges describe business transitions; they do not automatically
schedule execution. Continue to read \`lh acceptance feedback <acceptanceId> --actionable\` before repairs and publish new rounds into the same acceptance.

## HARD RULE — programmatic gates are NEVER acceptance checks

Every check MUST be an outcome a **person decides about the delivery**: what the
user sees, hears, reads, or receives. These MUST NOT appear as a check, under any
phrasing: unit / integration / regression / snapshot tests, coverage,
\`type-check\` / \`tsc\`, lint / \`eslint\`, format, "compiles", "build passes",
"CI is green". Run them, then report them as **one line of narrative**.

Enforced at ingest: every matching item (matched on title, category, AND
\`method\` — "run \`bun run test\`" under a product-sounding title still matches) is
**dropped** with a warning and \`summary\` recounted; a round of only such checks
**fails to publish**. The line is the _subject_ of the check, not who judged it:
a CLI behavior asserted by a command is a fine check (\`verifier: "program"\`);
"the suite is green" is not. Before writing any plan, ask of each draft check:
_would the user click accept/reject on this?_

## Rounds are immutable — repair means a NEW round

A published round is a permanent record. **Never re-submit into a round after
changing the code** — publish the re-verification as the next round and let the
acceptance page show the progression.

Before a repair round, read the aggregate with
\`lh acceptance view <acceptanceId | type:id> --json\`. Omit checks whose latest
\`userReview.action\` is \`accept\`; address non-stale rejects under their exact
stable ids; when a check semantically replaces another, declare
\`supersedes: ['old-id']\` and repeat the full lineage in every later round that
reuses the successor id. Pass \`--acceptance <acceptanceId>\` so the round joins
the same history.

## Rules you will be tempted to skip

Not judgment calls — the moves an agent under pressure makes and must not. Each
excuse below was made in a real round.

| Excuse                                                                                                 | Reality                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Injection is hard; happy-path plus unit tests covers it"                                              | The error state _was_ the goal. Walk the probe ladder ([probe-mock-patterns.md](references/probe-mock-patterns.md) A) before calling it blocked. (M2)                                                                           |
| "The branch name says what to verify" / "Loading the living logs first…"                               | The task lives in the user's words. Recover it, or confirm a labeled guess with one structured question — silently; never narrate setup. (M3, M21)                                                                              |
| "The black frame is probably display sleep / a permission"                                             | Measure first: pixel brightness, the permission bit, an A/B with one variable toggled. Publish "confirmed by X" or "suspected", never a guess. (M4)                                                                             |
| "Let me ask how they want it run" / "I'll click Sign in and you authorize" / "too small to screenshot" | Environment mechanics are yours: full isolated run, auth by direct injection (never an interactive login — it hijacks the user's browser), a screenshot for every user-facing change. Ask only about the product decision. (M8) |
| "One more config edit and the env will boot" / "I'll mock it" / "I'll drive the rest myself"           | Timebox. Inventory running instances, probe for the real capability before mocking (a mock that records nothing is not in the path), re-delegate a dead subagent's remaining steps, revert experiments and ask. (M17)           |
| "The fix is in and tests pass — verified"                                                              | Reproduce the failure's precondition first, then verify with it held. A run that cannot fail proves nothing; "reproduces sometimes" means an unnamed precondition. When the mocked seam is the suspect, drop the mock. (M31)    |

## Pick the surface by the user-visible outcome

Match the requirement to the cheapest surface that can prove the complete outcome,
not merely the layer containing the code change. A backend fix for missing cards,
stale lists, navigation, or another visible behavior still requires the consuming
UI, its actual data response, and inspected screenshots. Database assertions and
passing tests support that evidence; they do not replace it.

| What your task changed                                      | Surface                                               | Guide                                                  |
| ----------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Backend / CLI / library / data logic with no UI outcome     | **CLI** — stdout as \`text\`, zero UI flakiness         | [surfaces/cli.md](surfaces/cli.md)                     |
| Web app frontend / styles / interactions                    | **Web** (agent-browser → running web app)             | [surfaces/web.md](surfaces/web.md)                     |
| New/changed API **plus** the UI consuming it                | **Web**, full-stack (agent-browser + network capture) | [surfaces/web.md](surfaces/web.md#web-full-stack)      |
| Desktop-only behavior (native windows, IPC, packaged shell) | **Electron** (agent-browser \`--cdp\`)                  | [surfaces/electron.md](surfaces/electron.md)           |
| Native macOS app / OS chrome agent-browser can't reach      | **Native** (osascript + screencapture, local macOS)   | [surfaces/native.md](surfaces/native.md)               |
| Native iOS behavior, gestures, device-size layout           | **iOS Simulator** (AXe/native CLI + \`simctl\`)         | [surfaces/ios-simulator.md](surfaces/ios-simulator.md) |

- **Use CLI alone only when the required outcome has no UI surface.** If a visible
  outcome cannot be exercised, report that acceptance as incomplete instead of
  narrowing it to data checks. Use **Electron** only when the criterion depends on
  desktop-only code; iOS is driven by a Simulator HID/AX CLI, never host mouse —
  mark the case \`blocked\` if the CLI cannot express the gesture.
- **Structured data uses native visualizations** (\`cases[].datasets\` +
  \`cases[].visualizations\`; raw CSV/JSON stays as \`evidence\`), not a PNG —
  [report.md](references/report.md#structured-visualizations). **A deliverable
  the user hears needs \`audio\`** —
  [evidence.md](references/evidence.md#audio-deliverables).
- **Auth is a gate scoped to the surface**: authenticate that surface first or
  every capture lands on the sign-in page. Web:
  [auth-web.md](references/auth-web.md).
- **A UI round may price its interaction cost** by recording KLM operator counts
  into \`interaction-trace.jsonl\`; optional, never hand-written —
  [interaction-cost.md](references/interaction-cost.md).

**Every file submission MUST include a non-empty, reviewer-facing description**
(\`--desc\` for CLI submissions; \`description\` for tools and ingest entries).
Identify what the file contains and what it demonstrates for this criterion.
A filename, path, artifact id, or generic label such as "evidence" is not a
sufficient description. This also applies when a text file is stored inline.

Shared rules for every artifact — media types, provenance, file vs inline,
safety — are in [evidence.md](references/evidence.md).

## Keep checklist explanations brief

Write each check's \`observation\` and inline explanation in the user's language,
usually 1–3 short sentences: what was done, what happened, and any limitation
needed to judge that outcome. Do not paste the execution report into the check.
Omit repeated titles, verdict labels, SHA/port/ID headers, environment boilerplate,
and round-history explanations. Put shared setup and revision details once in
the round report; keep commands, traces, raw output, and detailed reasoning in
separate evidence attachments. Briefly disclose a limitation in the check when
it changes the verdict; concision must not hide missing verification.

Example: “转派后，新 Agent 收到原对话上下文并创建了独立话题。刷新后消息仍保留。”
For a failure, name the unmet outcome directly, without recounting the debugging
process. Keep required evidence complete; shorten its presentation, not the work.

## Final handoff (mandatory)

Before declaring the task done, prove coverage: for each check with
\`requiredEvidence\`, every declared \`type\` is present at least once. Report it
explicitly; a missing type holds the delivery at \`uncertain\` no matter how good
the work is.

The final response MUST include the published acceptance URL together with the
coverage result — never only a check-result id or a prose claim. Expose only the
**acceptance** (\`/acceptance/<acceptanceId>\`), the stable cross-round decision
surface; append \`?r=<roundIndex>\` for this round's fixed snapshot.
Put no images, local paths, local file links, or internal run-page paths in the
chat reply.

Write the link as a plain-text line, never inside a fenced or inline code block — the
chat client only linkifies plain text, and a code block makes it unclickable:

Acceptance: <https://app.lobehub.com/acceptance/ACCEPTANCE_ID> (the placeholder is the id ingest printed; it stays inside the URL)
Coverage: 2/2 criteria, all required evidence uploaded

## Portability rules

- **Engine-level capture over OS capture.** \`agent-browser screenshot\` / \`dom\` /
  \`eval\` run headless; \`screencapture\` / osascript are macOS-only. iOS: \`xcrun
simctl io\` over host-window capture. Rounds land under \`.acceptances/\`, which
  the CLI keeps out of git.
- **Upload as you go.** Evidence keyed to its check mid-run survives a crash near
  the end.
- **Don't invent evidence.** Capture only the types a check declares.

## Reference map

For both acceptance-checker handoffs and review output, read
[acceptance-checker.md](references/acceptance-checker.md).

| Need                                           | Reference                                                                                                                                                                               |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The project layer, bootstrapping an adapter    | [project-adapter.md](references/project-adapter.md)                                                                                                                                     |
| Mistakes checklist (read every round)          | [common-mistakes.md](references/common-mistakes.md)                                                                                                                                     |
| Forcing state, error injection, runtime probes | [probe-mock-patterns.md](references/probe-mock-patterns.md)                                                                                                                             |
| Authored rounds, \`result.json\`, ingest         | [report.md](references/report.md)                                                                                                                                                       |
| Plan-driven rounds: schema, submit, coverage   | [plan-format.md](references/plan-format.md)                                                                                                                                             |
| Evidence media, provenance, submission, safety | [evidence.md](references/evidence.md)                                                                                                                                                   |
| Interaction cost overlay                       | [interaction-cost.md](references/interaction-cost.md)                                                                                                                                   |
| Web/Electron Chromium CLI commands             | [agent-browser.md](references/agent-browser.md)                                                                                                                                         |
| Authenticated Web session                      | [auth-web.md](references/auth-web.md)                                                                                                                                                   |
| Native macOS / OS-owned step                   | [computer-use.md](references/computer-use.md)                                                                                                                                           |
| Temporal evidence: Web/Electron, iOS, native   | [recording-cdp.md](references/recording-cdp.md), [recording-ios-simulator.md](references/recording-ios-simulator.md), [recording-native-macos.md](references/recording-native-macos.md) |
`})),Z,rt=e((()=>{Z=`# CLI / backend surface

The default surface for backend, CLI, library, and data-logic changes. The proof
is the command's own output — text, not pixels. This is the cheapest and strongest
evidence: a passing assertion or a correct JSON result is harder to fake than a
screenshot, and it runs anywhere (no browser, no display).

Use this surface when your change is verifiable by running something and reading
what it prints. Return to the surface router only when the criterion is actually
about rendered UI.

## How to verify

1. Run the command, test, or query that exercises the change. Prefer a machine
   output mode (\`--json\`, a structured dump) so the proof is assertable, not prose.
2. Capture the output and upload it as \`text\` evidence — inline with \`--content\`
   for short output, or \`--file\` for a larger dump.

\`\`\`bash
# CHECK_ITEM_ID is the criterion's plan item id (from \`lh verify plan state\`).
# short result → inline
lh acceptance run result submit --operation "$OPERATION_ID" --item "$CHECK_ITEM_ID" --type text \\
  --content "$(your-cli command --json)" \\
  --by cli --desc "command reports the new field after the change"

# larger output (test log, full dump) → file
your-cli command --json > ./proof/result.json
lh acceptance run result submit --operation "$OPERATION_ID" --item "$CHECK_ITEM_ID" --type text \\
  --file ./proof/result.json --by cli --desc "full result set"

# a test run is itself proof
your-test-runner path/to/spec > ./proof/test.log 2>&1
lh acceptance run result submit --operation "$OPERATION_ID" --item "$CHECK_ITEM_ID" --type text \\
  --file ./proof/test.log --by program --desc "regression spec passes"
\`\`\`

Provenance: \`cli\` for command stdout, \`program\` for a script/test you ran. See
[../references/evidence.md](../references/evidence.md) for the evidence contract.

## Auth

The \`lh\` CLI you upload with is already authed. A _different_ product CLI under
test carries its own auth (API key or stored login) — configure it before
capturing its output, and verify the credential belongs to the intended test
environment.

## Boundaries

- **Don't open a browser for a backend change.** If the criterion is satisfied by
  output, a screenshot adds noise, not proof.
- **Make the assertion legible.** Upload the specific lines/fields that prove the
  criterion (or describe them in \`--desc\`), not a 10k-line log the reviewer must
  scan.
- **Never upload secrets.** Strip tokens/keys from output before uploading — see
  [../references/evidence.md](../references/evidence.md#artifact-safety).
`})),Q,it=e((()=>{Q=`# Desktop (Electron) surface

Use this surface for **desktop-only behavior** — native windows, IPC / main-process
code, tray/menu, auto-update, OS integration, or a packaged-only path. That code
doesn't exist in a plain web page. Drive the running app's renderer over CDP with \`agent-browser\`
([../references/agent-browser.md](../references/agent-browser.md)).

For a change that behaves identically in a browser, return to the router and use
the lighter, cloud-portable Web surface. Use Electron only when the criterion
calls out the desktop shell.

## Setup

1. Start the desktop app in dev/debug mode with a CDP port open (commonly 9222).
   How you start it is app-specific (its own dev command); the requirement is a
   reachable CDP endpoint.
2. Connect agent-browser to that port:

\`\`\`bash
agent-browser --cdp 9222 snapshot -i
agent-browser --cdp 9222 get url # sanity-check you attached to the app
agent-browser --cdp 9222 screenshot ./proof/desktop-state.png
\`\`\`

3. Auth: a desktop app usually keeps its own persistent login state in its
   user-data dir — log in once in the app and it survives restarts. Verify the
   signed-in state through the attached renderer before capturing evidence.

## Reading app state

If the app exposes a global state handle, eval it to assert behavior (discover the
actual global name from the app — don't assume one):

\`\`\`bash
agent-browser --cdp 9222 eval --stdin << 'EVALEOF'
(function () {
  // example shape — replace with the app's real global / selectors
  var s = window.__APP_STATE__ && window.__APP_STATE__();
  return JSON.stringify({ route: location.hash || location.pathname, ready: !!s });
})()
EVALEOF
\`\`\`

## Capturing console errors during a run

\`\`\`bash
# install an interceptor before exercising the feature
agent-browser --cdp 9222 eval --stdin << 'EVALEOF'
(function () {
  window.__ERRORS__ = [];
  var orig = console.error;
  console.error = function () {
    window.__ERRORS__.push(Array.from(arguments).map(String).join(' '));
    orig.apply(console, arguments);
  };
  return 'installed';
})()
EVALEOF
# ... drive the feature ...
agent-browser --cdp 9222 eval "JSON.stringify(window.__ERRORS__)" # → text evidence
\`\`\`

## Gotchas

- **Dev builds often auto-open DevTools, which hijacks the CDP target.** Symptom:
  \`get url\` returns a \`devtools://…\` URL instead of the app. Fix: close the
  DevTools target and reconnect:

  \`\`\`bash
  DT_ID=$(curl -s http://localhost:9222/json/list | python3 -c "import json,sys; ts=json.load(sys.stdin); print(next(t['id'] for t in ts if t['type']=='page' and t['url'].startswith('devtools://')))")
  curl -s "http://localhost:9222/json/close/$DT_ID" > /dev/null
  agent-browser close --all && agent-browser --cdp 9222 get url
  \`\`\`

- **Clean up all processes when done.** \`pkill -f "Electron"\` only kills the main
  process; helper processes (GPU, renderer, network) survive. Prefer the app's own
  stop command or kill by the project's electron binary path.

- **Don't resize the window after load** — many apps trigger a full reload on
  resize, invalidating refs and state.

## Time-based behavior & OS-level steps

- **Behavior over time** needs a clip — record CDP frames into MP4/GIF:
  [../references/recording-cdp.md](../references/recording-cdp.md).
- **Native chrome around the app** (file pickers, system dialogs, menu-bar/dock,
  permission prompts) lives outside the renderer — drive it with Computer Use:
  [../references/computer-use.md](../references/computer-use.md).

## Boundaries — headless / cloud

Tag renderer artifacts captured by \`agent-browser\` as \`--by agent-browser\`; use
\`--by cdp\` only for a direct CDP client capture.

Electron runs on Linux but has no true headless mode — it needs a display server.
In a headless/cloud environment, wrap the launch with \`xvfb-run\` (virtual
framebuffer). Everything CDP-based keeps working under Xvfb (connection, snapshots,
eval, \`agent-browser screenshot\` — captured from the renderer, not the OS screen).
What does NOT work: OS-window capture (\`screencapture\`), osascript, and native
screen recording — all macOS-only. Keep evidence CDP-based to stay cloud-portable
whenever the renderer owns the criterion.
`})),at,ot=e((()=>{at=`# iOS Simulator surface

Use this surface when a criterion depends on native iOS rendering, navigation,
gestures, lifecycle, system sheets, or device-size layout. It requires macOS,
Xcode, and an installed Simulator runtime; it is not cloud-portable.

The required workflow is shell-only: every input and capture step must be
executable by a general agent through a documented CLI. An agent-specific GUI
controller or private plugin is not a prerequisite.

## Contents

- [Proof contract](#proof-contract)
- [Probe and choose a CLI driver](#probe-and-choose-a-cli-driver)
- [Establish the tested build](#establish-the-tested-build)
- [Inspect and interact](#inspect-before-acting)
- [Capture and review evidence](#capture-device-evidence)
- [Decide the case status](#decide-the-case-status)

## Proof contract

Separate the plan into observable claims before testing:

1. **Build/install/launch** — the current source produced the app now running.
2. **Static UI state** — the expected controls, content, and layout are visible.
3. **Behavior over time** — an animation, transition, or multi-step flow occurred.
4. **Touch semantics** — the intended tap, long press, swipe, or pan was actually
   delivered before judging the product response.
5. **Hardware-only behavior** — haptics, thermal behavior, camera input, and
   real-device performance require a physical device; Simulator cannot prove them.

Record the repository, branch, commit, dirty state, build command, Xcode version,
Simulator model/runtime/UDID, bundle identifier, and tested time. A screenshot
from an old install is not evidence for the current source.

## Probe and choose a CLI driver

Prefer a CLI that talks to Simulator Accessibility and HID directly. Probe the
host rather than assuming one tool is installed:

\`\`\`bash
command -v axe
command -v idb
command -v idb_companion
command -v cliclick
command -v ffmpeg
command -v ffprobe
xcrun simctl help io
\`\`\`

| Tool                    | Responsibility in this workflow                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| AXe                     | Accessibility inspection; selector/coordinate tap; touch, swipe, drag, and preset gesture injection; screenshots |
| \`simctl\`                | Device discovery and lifecycle; app install/launch; logs; authoritative framebuffer screenshots and recording    |
| \`ffprobe\`               | Prove the recorded movie is readable and report its observed duration, dimensions, rate, and frame count         |
| \`ffmpeg\`                | Losslessly enumerate decoded frames, sample review frames, and generate contact sheets                           |
| \`idb\` + \`idb_companion\` | Optional alternative driver only when both halves are installed and working                                      |
| \`cliclick\`              | Last-resort host-window click for smoke testing; not proof of native touch semantics                             |

Driver priority:

1. **AXe** — preferred general-purpose agent driver. It resolves accessibility
   selectors, injects taps/touch/swipe/drag, describes UI, and captures
   screenshots. Treat its video recorder as a probe-only fallback to \`simctl\`.
2. **The repository's existing XCUITest or documented CLI driver** — use when AXe
   is absent or the project already owns stronger domain assertions.
3. **\`idb\` + \`idb_companion\` together** — use only when both client and companion
   are available. \`idb_companion\` alone is not an interaction CLI.
4. **\`cliclick\`** — host-window fallback for a simple click only. It depends on
   Simulator window geometry and does not independently prove native HID semantics.

If no available driver can express the planned gesture, mark the case \`blocked\`.
Do not switch to a private agent plugin or silently downgrade a long press to a
tap. If AXe must be installed, use its official distribution only after the task
scope allows installation; otherwise report the missing prerequisite.

\`\`\`bash
# Only when AXe is absent and dependency installation is explicitly in scope.
brew install cameroncooke/axe/axe
\`\`\`

The examples below target AXe. Run \`axe --version\`, \`axe --help\`, and
\`axe help <subcommand>\` first because capabilities may differ by installed
version.

## Establish the tested build

Resolve one explicit device and keep using its UDID. Avoid \`booted\` after device
selection when several Simulators may be running.

\`\`\`bash
axe list-simulators
xcrun simctl list devices booted --json > ./proof/simulator-devices.json
xcodebuild -version > ./proof/xcode-version.txt

# Build with the repository's canonical command first, then install its product.
xcrun simctl install "$UDID" "$APP_PATH"
xcrun simctl launch --terminate-running-process "$UDID" "$BUNDLE_ID"
\`\`\`

For a development client, also prove that its Metro/dev-server URL is reachable
and that the newly built native binary, rather than a stale installation, opened.
Save the build product path and modification time in the text evidence.

## Inspect before acting

Read the current Accessibility hierarchy before choosing selectors or coordinates:

\`\`\`bash
axe describe-ui --udid "$UDID" > ./proof/before-ui.txt
axe describe-ui --point 220,710 --udid "$UDID"
\`\`\`

Prefer \`--id\` (accessibility identifier), then \`--label\` plus \`--element-type\`.
Use coordinates only when the UI exposes no unambiguous selector. Stable
identifiers make the same flow reusable across device sizes and reduce accidental
actions on the wrong control. If selector resolution reports multiple matches or
an invalid/zero-size frame, inspect the intended control with \`--point\` and use
its device coordinates; do not force the ambiguous selector.

## Tap and run multi-step flows

\`\`\`bash
# Selector tap with polling and a settle delay.
axe tap --id photo-info-button --wait-timeout 5 --post-delay 0.5 --udid "$UDID"

# Disambiguated label tap.
axe tap --label 'Exposure & Metering' --element-type Button --udid "$UDID"

# Coordinate fallback using physical touch down/up.
axe tap -x 220 -y 710 --tap-style physical --udid "$UDID"
\`\`\`

Most AXe HID commands are fire-and-forget: successful dispatch does not prove the
app processed the event. Always re-read UI or capture the post-state.

Prefer \`axe batch\` for a fixed multi-step flow so one HID session executes all
steps. Use selector polling for transitions and refresh the AX cache when screens
change:

\`\`\`bash
axe batch --udid "$UDID" --wait-timeout 5 --ax-cache perStep \\
  --step "tap --id first-photo" \\
  --step "sleep 0.5" \\
  --step "tap --id photo-info-button"
\`\`\`

Use discrete commands instead when the next selector/coordinate depends on
runtime inspection of the previous state.

## Deliver long press, swipe, and drag precisely

AXe exposes the touch primitives that host-mouse automation often lacks:

\`\`\`bash
# Long press: explicit touch down, hold, and touch up.
axe touch -x 220 -y 710 --down --up --delay 0.6 --udid "$UDID"

# Horizontal page swipe with controlled duration.
axe swipe --start-x 330 --start-y 430 --end-x 70 --end-y 430 \\
  --duration 0.6 --post-delay 0.5 --udid "$UDID"

# Low-level drag with explicit move-event density.
axe drag --start-x 200 --start-y 350 --end-x 200 --end-y 760 \\
  --duration 0.8 --steps 80 --post-delay 0.5 --udid "$UDID"

# Device-relative common pattern; provide the actual screen dimensions.
axe gesture scroll-left --screen-width 402 --screen-height 874 \\
  --duration 0.6 --udid "$UDID"
\`\`\`

Derive coordinates from \`describe-ui\` and the selected device, not from a
screenshot displayed at an unknown host scale. A dispatched gesture is only the
input half of the proof; verify the expected page identity, count, disclosure,
or visual state afterward.

## Capture device evidence

Capture clean device pixels with AXe or \`simctl\`, not a cropped host-window
screenshot:

\`\`\`bash
axe screenshot --udid "$UDID" --output ./proof/after.png
xcrun simctl io "$UDID" screenshot --type=png ./proof/after-simctl.png
\`\`\`

For transitions and multi-step behavior, record the Simulator framebuffer and
derive every-frame or sampled contact sheets using
[../references/recording-ios-simulator.md](../references/recording-ios-simulator.md).
Keep the original MP4; a contact sheet is an index for review, not a replacement
for temporal evidence. Treat requested recording FPS as a target only: Simulator
movies may be variable-frame-rate, so verify actual duration, rate, and frame count
with \`ffprobe\`.

After each material action, preserve a fresh UI hierarchy as text evidence:

\`\`\`bash
axe describe-ui --udid "$UDID" > ./proof/after-ui.txt
\`\`\`

For diagnostics, capture a scoped log after the interaction:

\`\`\`bash
xcrun simctl spawn "$UDID" log show --style compact --last 5m \\
  --predicate 'process == "YourApp"' > ./proof/runtime.log
\`\`\`

Treat runtime warnings precisely: report relevant crashes/assertions, distinguish
environment noise, and never use the absence of a visible crash as proof that all
logs are harmless.

## Review UI evidence

- **Static layout:** inspect a full-resolution device screenshot; check clipping,
  overlap, hierarchy, safe areas, text, selected state, and target identity.
- **Animation/transition:** inspect the raw MP4 plus extracted start/event/end
  frames. Extract every encoded frame when timing, flicker, or a one-frame flash
  is the claim; otherwise use a declared sampling rate and retain the video.
- **Gesture:** pair the exact AXe command with the postcondition. A final
  screenshot alone cannot prove which gesture caused it.
- **Accessibility:** compare the visual state with \`describe-ui\` before/after.
  A visually correct control that cannot be identified or activated remains an
  accessibility concern rather than an unqualified pass.
- **Performance:** Simulator footage can reveal gross stalls but cannot establish
  physical-device FPS, thermal, energy, or haptic quality.

## Decide the case status

| Status    | Use when                                                                                              |
| --------- | ----------------------------------------------------------------------------------------------------- |
| \`pass\`    | The required input was delivered, the expected state was observed, and required evidence was captured |
| \`fail\`    | The required input was delivered and the product violated the expected behavior                       |
| \`blocked\` | The build/environment/driver could not execute or observe the required condition                      |

For a blocked case, attach the recording or screenshot, UI hierarchy before/after,
the attempted command, stderr/exit status, and the missing driver capability. A
fallback close button, ordinary tap, or static frame may be useful smoke evidence
but cannot satisfy a different planned gesture.

CLI interactions may mutate live data. Use a test fixture when possible. If an
exploratory command appends a reaction, message, or other irreversible record,
disclose the exact side effect in the report.

Publish the artifacts with the plan-driven submit flow or place them under the
structured report's \`assets/\` directory and ingest the whole round. Tag direct
AXe/\`simctl\` captures as \`--by cli\`, deterministic UI-test/media-transform output
as \`--by program\`, and preserve the device identity in every artifact description.
`})),st,ct=e((()=>{st=`# Native macOS app surface (Computer Use)

Use this surface when the thing under test is a **native macOS app** that \`agent-browser\`
can't drive — anything not Chromium-based: a native desktop app, a chat client you
verify against (Slack/WeChat/…), Finder/system UI, or any OS-level behavior. You
drive it with macOS Computer Use (osascript + screencapture) — the toolkit is in
[../references/computer-use.md](../references/computer-use.md).

Return to the router when Chromium automation or command output can reach the
target. Native is the **local-macOS escape hatch** — it is not cloud-portable
(needs a real display + Accessibility permission), so reach for it only when CDP
cannot.

## How to verify

1. Activate the app and navigate to the state under test (keystrokes / shortcuts /
   clicks — see the toolkit).
2. Drive the action that exercises your change.
3. Capture proof: a \`screencapture\` PNG, a screen recording for time-based
   behavior
   ([../references/recording-native-macos.md](../references/recording-native-macos.md)),
   or screen text via select-all-copy + \`pbpaste\`.

\`\`\`bash
APP="YourApp"
osascript -e "tell application \\"$APP\\" to activate"
sleep 1
# ... navigate + act via osascript (see computer-use.md) ...
sleep 2 # let the result settle
screencapture -l "$(osascript -e "tell application \\"System Events\\" to tell process \\"$APP\\" to get id of window 1")" ./proof/native-result.png
\`\`\`

Upload as evidence (provenance \`cli\`, since osascript/screencapture are
shell-driven):

\`\`\`bash
lh acceptance run result submit --operation "$OPERATION_ID" --item "$CHECK_ITEM_ID" --type screenshot \\
  --file ./proof/native-result.png --by cli \\
  --desc "Native app shows the expected state after the change"
\`\`\`

## Mid-flow use from another surface

You don't have to commit the whole run to this surface. A web or Electron flow can drop
into Computer Use for a single OS-level step it can't script — a native file picker,
a system permission prompt, a Save dialog — then hand control back to agent-browser.
Capture the proof on whichever surface owns the criterion.

## Boundaries

- **macOS + display only.** No headless/cloud — see
  [../references/computer-use.md](../references/computer-use.md#gotchas).
- **Accessibility permission is mandatory** or every \`System Events\` call silently
  no-ops. Grant it to the host once.
- **Prefer CDP when reachable.** A Chromium target driven over CDP is more robust
  and portable than coordinate clicks; use native only when there's no CDP path.
`})),lt,ut=e((()=>{lt=`# Web surface

Default surface for frontend and full-stack changes — the browser is the one place
network requests and rendered UI are observable together, so you can assert both
sides of a contract in one run. Driven by \`agent-browser\`
([../references/agent-browser.md](../references/agent-browser.md)).

Use web when the behavior is the same in a normal browser against the app's dev
server or a deployed URL. Return to the surface router if the criterion depends
on the desktop shell or is fully provable through backend/CLI output.

## Setup

1. Have the app reachable at a URL: a local dev server you started (e.g.
   \`http://localhost:<port>\`), or a deployed/preview URL the task targets.
2. If the state under test is behind login, authenticate the agent-browser
   session first — see
   [../references/auth-web.md](../references/auth-web.md). Use a named \`--session\`
   so cookies persist across commands.

\`\`\`bash
SESSION=app
agent-browser --session $SESSION open "http://localhost:3000/"
agent-browser --session $SESSION snapshot -i
# interact via refs, then capture
agent-browser --session $SESSION screenshot ./proof/state.png
\`\`\`

Use the authenticated session as the evidence source. Do **not** use a separate
ordinary-Chrome screenshot as proof — it doesn't prove the automated session
reached the state. Ordinary Chrome is only a cookie source for auth fallback.

## Full-stack — assert both layers {#web-full-stack}

When the criterion spans a new/changed API and the UI consuming it, capture both
the network exchange and the rendered result:

\`\`\`bash
SESSION=app
agent-browser --session $SESSION network har start
# ... drive the scenario that triggers the API ...
agent-browser --session $SESSION network requests --type xhr,fetch # inspect calls
agent-browser --session $SESSION network har stop ./proof/capture.har
agent-browser --session $SESSION screenshot ./proof/result.png
\`\`\`

Upload the screenshot (\`--type screenshot\`) and the network proof (the HAR as
\`--type text --file ./proof/capture.har\`, or a focused request/response as
\`--type text --content …\`). Asserting only one layer leaves the contract half-proven.

## Local frontend against a remote backend

If you can only run the frontend locally but the backend is remote, drive the
frontend URL the same way — just remember the backend is not your branch, so it
proves frontend behavior, not backend changes.

## Time-based behavior & OS-level steps

- **Behavior over time** (streaming, loading→loaded, animation) needs a clip, not a
  screenshot — record CDP frames:
  [../references/recording-cdp.md](../references/recording-cdp.md).
- **A native step the page can't script** (file picker, OS permission prompt, Save
  dialog) — drop to Computer Use for that step, then return:
  [../references/computer-use.md](../references/computer-use.md).

## Boundaries

- **Provenance:** tag artifacts captured by \`agent-browser\` as
  \`--by agent-browser\`; use \`--by cdp\` only for a direct CDP client capture.
- **Headless / cloud:** web is cloud-native — headless Chromium and CDP screenshots
  work without a display. Prefer CDP capture over OS-level capture.
- **HMR breaks refs.** After a hot reload during dev, re-snapshot before interacting.
`})),dt,ft=e((()=>{l(),He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),nt(),rt(),it(),ot(),ct(),ut(),dt=`acceptance`,o({"references/acceptance-checker.md":I,"references/agent-browser.md":L,"references/common-mistakes.md":z,"references/auth-web.md":R,"references/computer-use.md":B,"references/evidence.md":V,"references/interaction-cost.md":H,"references/plan-format.md":U,"references/probe-mock-patterns.md":W,"references/project-adapter.md":G,"references/recording-cdp.md":K,"references/recording-ios-simulator.md":q,"references/recording-native-macos.md":J,"references/report.md":Y,"surfaces/cli.md":Z,"surfaces/electron.md":Q,"surfaces/ios-simulator.md":at,"surfaces/native.md":st,"surfaces/web.md":lt}),c(X)})),pt=t({AcceptanceIdentifier:()=>dt,AgentBrowserIdentifier:()=>AgentBrowserIdentifier,ArtifactsIdentifier:()=>ArtifactsIdentifier,LobeHubIdentifier:()=>LobeHubIdentifier,REACT_ARTIFACT_APP_PATH:()=>REACT_ARTIFACT_APP_PATH,REACT_ARTIFACT_BOOTSTRAP_PATH:()=>REACT_ARTIFACT_BOOTSTRAP_PATH,REACT_ARTIFACT_ENTRY_PATH:()=>REACT_ARTIFACT_ENTRY_PATH,REACT_ARTIFACT_INDEX_HTML_PATH:()=>REACT_ARTIFACT_INDEX_HTML_PATH,REACT_ARTIFACT_PACKAGE_JSON_PATH:()=>REACT_ARTIFACT_PACKAGE_JSON_PATH,REACT_ARTIFACT_TAILWIND_CDN:()=>REACT_ARTIFACT_TAILWIND_CDN,REACT_ARTIFACT_VITE_CONFIG_PATH:()=>REACT_ARTIFACT_VITE_CONFIG_PATH,TaskIdentifier:()=>TaskIdentifier,builtinSkills:()=>$}),$,mt=e((()=>{ue(),fe(),Re(),Ve(),ft(),$=[le,i,M,F]}));export{mt as n,pt as r,$ as t};