const fs = require('fs');
const path = require('path');

const root = process.cwd();
const md1Path = path.join(root, 'corso_parte1.md');
const md2Path = path.join(root, 'corso_parte2.md');
const outPath = path.join(root, 'corso_claude_design_expert.html');

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function inlineFormat(str) {
  let s = escapeHtml(str);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  s = s.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return s;
}

function parseTable(lines, start) {
  const tableLines = [];
  let i = start;
  while (i < lines.length && /^\|.*\|\s*$/.test(lines[i].trim())) {
    tableLines.push(lines[i].trim());
    i += 1;
  }

  if (tableLines.length < 2 || !/^\|\s*[-:| ]+\s*\|$/.test(tableLines[1])) {
    return { html: `<p>${inlineFormat(lines[start])}</p>`, next: start + 1 };
  }

  const headers = tableLines[0].split('|').slice(1, -1).map((c) => c.trim());
  const rows = tableLines.slice(2).map((line) => line.split('|').slice(1, -1).map((c) => c.trim()));

  let html = '<div class="table-wrap"><table><thead><tr>';
  headers.forEach((h) => {
    html += `<th>${inlineFormat(h)}</th>`;
  });
  html += '</tr></thead><tbody>';
  rows.forEach((r) => {
    html += '<tr>';
    headers.forEach((_, idx) => {
      html += `<td>${inlineFormat(r[idx] || '')}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  return { html, next: i };
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  let i = 0;
  let html = '';
  let inCode = false;
  let codeLang = '';
  let paragraph = [];
  let listType = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(' ').trim();
    if (text) html += `<p>${inlineFormat(text)}</p>`;
    paragraph = [];
  };

  const closeList = () => {
    if (!listType) return;
    html += listType === 'ol' ? '</ol>' : '</ul>';
    listType = null;
  };

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trimEnd();

    if (inCode) {
      if (line.startsWith('```')) {
        html += '</code></pre>';
        inCode = false;
        codeLang = '';
      } else {
        html += `${escapeHtml(raw)}\n`;
      }
      i += 1;
      continue;
    }

    if (line.startsWith('```')) {
      flushParagraph();
      closeList();
      codeLang = line.slice(3).trim();
      const cls = codeLang ? ` class="language-${escapeHtml(codeLang)}"` : '';
      html += `<pre><code${cls}>`;
      inCode = true;
      i += 1;
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      closeList();
      i += 1;
      continue;
    }

    if (/^\|.*\|\s*$/.test(line)) {
      flushParagraph();
      closeList();
      const table = parseTable(lines, i);
      html += table.html;
      i = table.next;
      continue;
    }

    if (/^#{1,6}\s+/.test(line)) {
      flushParagraph();
      closeList();
      const level = line.match(/^#+/)[0].length;
      const text = line.replace(/^#{1,6}\s+/, '');
      const slug = text
        .toLowerCase()
        .replace(/[^a-z0-9àèéìíîòóùúçñ\s-]/gi, '')
        .trim()
        .replace(/\s+/g, '-');
      html += `<h${level} id="${slug}">${inlineFormat(text)}</h${level}>`;
      i += 1;
      continue;
    }

    if (/^---+$/.test(line.replace(/\s/g, ''))) {
      flushParagraph();
      closeList();
      html += '<hr>';
      i += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      flushParagraph();
      closeList();
      html += `<blockquote>${inlineFormat(line.replace(/^>\s?/, ''))}</blockquote>`;
      i += 1;
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.+)/);
    const unorderedMatch = line.match(/^[-*]\s+(.+)/);

    if (orderedMatch || unorderedMatch) {
      flushParagraph();
      const targetType = orderedMatch ? 'ol' : 'ul';
      if (listType && listType !== targetType) closeList();
      if (!listType) {
        listType = targetType;
        html += targetType === 'ol' ? '<ol>' : '<ul>';
      }
      const itemText = orderedMatch ? orderedMatch[1] : unorderedMatch[1];
      html += `<li>${inlineFormat(itemText)}</li>`;
      i += 1;
      continue;
    }

    paragraph.push(line.trim());
    i += 1;
  }

  flushParagraph();
  closeList();

  if (inCode) html += '</code></pre>';

  return html;
}

const md1 = fs.readFileSync(md1Path, 'utf8');
const md2 = fs.readFileSync(md2Path, 'utf8');

const html1 = markdownToHtml(md1);
const html2 = markdownToHtml(md2);

const finalHtml = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Claude Design - Corso Completo Definitivo (Base -> Expert)</title>
  <style>
    :root {
      --bg: #0b0f14;
      --surface: #111924;
      --surface-2: #172334;
      --text: #f5f8ff;
      --muted: #c8d5ef;
      --accent: #ffd166;
      --accent-2: #8bd3ff;
      --border: #2a3b55;
      --ok: #98e49e;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
      background: linear-gradient(180deg, #0b0f14 0%, #0f1825 100%);
      color: var(--text);
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }

    .wrap {
      max-width: 1080px;
      margin: 0 auto;
      padding: 28px 18px 64px;
    }

    .hero {
      background: linear-gradient(135deg, #1e2e44 0%, #162233 55%, #15202f 100%);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 26px;
      box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35);
      margin-bottom: 24px;
    }

    .hero h1 {
      margin: 0 0 10px;
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
      line-height: 1.2;
      letter-spacing: 0.01em;
    }

    .hero p { margin: 8px 0; color: var(--muted); }

    .badge {
      display: inline-block;
      margin-right: 8px;
      margin-top: 8px;
      background: #24344d;
      border: 1px solid #3f5473;
      color: #eff5ff;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: .82rem;
      font-weight: 600;
    }

    .actions {
      margin-top: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .btn {
      background: var(--accent);
      color: #1d1400;
      border: none;
      border-radius: 10px;
      padding: 10px 14px;
      cursor: pointer;
      font-weight: 700;
      text-decoration: none;
      display: inline-block;
    }

    .btn.secondary {
      background: #263a54;
      color: #eef6ff;
      border: 1px solid #415a7e;
    }

    .panel {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 18px;
      margin-bottom: 16px;
    }

    h1, h2, h3, h4 {
      line-height: 1.25;
      margin: 1.05em 0 0.55em;
    }

    h1 { font-size: 1.9rem; }
    h2 {
      font-size: 1.45rem;
      border-bottom: 1px solid #2a3b55;
      padding-bottom: 8px;
      color: #fff4d0;
    }
    h3 { font-size: 1.2rem; color: #dbe9ff; }

    p, li { color: #e9f0ff; }
    ul, ol { margin: 0.4em 0 1.1em 1.3em; padding: 0; }
    li { margin: 0.32em 0; }

    blockquote {
      margin: 1em 0;
      padding: 10px 14px;
      border-left: 4px solid var(--accent-2);
      background: #132437;
      border-radius: 6px;
      color: #eaf6ff;
    }

    hr {
      border: 0;
      border-top: 1px solid #2a3b55;
      margin: 24px 0;
    }

    code {
      background: #0d141f;
      border: 1px solid #2a3b55;
      color: #ffe5a8;
      padding: 2px 6px;
      border-radius: 6px;
      font-family: "Consolas", "SFMono-Regular", Menlo, Monaco, monospace;
      font-size: 0.93em;
    }

    pre {
      overflow: auto;
      background: #07101a;
      border: 1px solid #2b3f5d;
      border-radius: 10px;
      padding: 12px;
      color: #f3f8ff;
    }

    pre code { border: none; background: transparent; padding: 0; color: inherit; }

    .table-wrap { overflow-x: auto; margin: 12px 0 16px; }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 560px;
      background: #101a28;
      border-radius: 10px;
      overflow: hidden;
    }

    th, td {
      border: 1px solid #2a3b55;
      padding: 10px;
      text-align: left;
      vertical-align: top;
    }

    th { background: #1a2a40; color: #fff0be; }

    a { color: #a4d9ff; }

    .sources li { margin-bottom: .55em; }
    .muted { color: var(--muted); }
    .ok { color: var(--ok); font-weight: 700; }

    @media print {
      @page { size: A4; margin: 12mm; }
      body { background: white !important; color: #111 !important; }
      .hero, .panel { background: white !important; border-color: #bbb !important; box-shadow: none !important; }
      .actions, .screen-only { display: none !important; }
      h2 { color: #1a1a1a; border-bottom-color: #ccc; }
      p, li, blockquote { color: #111 !important; }
      blockquote { background: #f6f8fb !important; border-left-color: #1f5a96; }
      code, pre { background: #f5f7fa !important; border-color: #c9d2df !important; color: #111 !important; }
      table, th, td { border-color: #bbb !important; color: #111 !important; }
      th { background: #eceff4 !important; }
      a { color: #0b4a88 !important; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header class="hero">
      <h1>Claude Design: Corso Definitivo dal Livello Base all'Expert</h1>
      <p>Versione completa consolidata dai file <code>corso_parte1.md</code> e <code>corso_parte2.md>, arricchita con verifica online su fonti ufficiali + community/dev.</p>
      <div>
        <span class="badge">Aggiornato: 23 Aprile 2026</span>
        <span class="badge">Ricerca ufficiale + non ufficiale</span>
        <span class="badge">Formato ottimizzato per PDF</span>
      </div>
      <div class="actions screen-only">
        <button class="btn" onclick="window.print()">Scarica/Stampa in PDF</button>
        <a class="btn secondary" href="#fonti">Vai alle fonti</a>
        <a class="btn secondary" href="#contenuto">Vai al corso</a>
      </div>
    </header>

    <section class="panel" id="metodo-verifica">
      <h2>Metodo di Verifica (Trasparenza Fonti)</h2>
      <p class="muted">Per questo corso, i contenuti sono organizzati così:</p>
      <ul>
        <li><span class="ok">Confermato ufficialmente:</span> solo dati presenti in annunci Anthropic/Canva o Help Center Claude.</li>
        <li><span class="ok">Community e dev:</span> insight operativi da Reddit/GitHub/tech media, sempre trattati come evidenza empirica non vincolante.</li>
        <li><span class="ok">Speculazioni non verificabili:</span> mantenute come ipotesi, non come fatti certi.</li>
      </ul>
      <p class="muted">Questo approccio riduce il rischio di includere numeri o feature non confermati nei workflow reali.</p>
    </section>

    <section class="panel" id="contenuto">
      <h2>Corso Completo - Parte 1</h2>
      ${html1}
    </section>

    <section class="panel">
      <h2>Corso Completo - Parte 2</h2>
      ${html2}
    </section>

    <section class="panel" id="research-addendum">
      <h2>Addendum 2026: Stato Reale del Prodotto (Ufficiale + Community)</h2>
      <h3>1) Punti confermati ufficialmente (Anthropic/Canva/Help Center)</h3>
      <ul>
        <li>Claude Design è stato annunciato il <strong>17 aprile 2026</strong> come prodotto Anthropic Labs, in <em>research preview</em>, disponibile per piani <strong>Pro, Max, Team, Enterprise</strong>.</li>
        <li>L'abilitazione Enterprise è <strong>off di default</strong> e richiede intervento admin nelle impostazioni organizzazione.</li>
        <li>I flussi ufficiali includono: chat + canvas, commenti inline, edit diretto testo, export in <strong>PDF, PPTX, HTML standalone, Canva</strong>, e handoff verso Claude Code.</li>
        <li>Canva conferma l'integrazione diretta con Claude Design e la trasformazione in output editabili/collaborativi nel proprio editor.</li>
        <li>Nella documentazione help sono indicate anche limitazioni note (es. scomparsa commenti inline in alcuni casi, errori in compact view, problemi con repo molto grandi).</li>
      </ul>

      <h3>2) Insight community/dev (da usare come best practice, non come policy ufficiale)</h3>
      <ul>
        <li>Molti utenti Reddit riportano che output generici si riducono molto imponendo vincoli forti su design system e anti-pattern.</li>
        <li>Diversi power-user raccomandano di curare molto il primo prompt/brief e poi fare iterazioni brevi e mirate sui singoli componenti.</li>
        <li>Repository community come <code>awesome-claude-design</code> mostrano workflow basati su file <code>DESIGN.md</code> per creare linee visuali più consistenti.</li>
      </ul>

      <h3>3) Raccomandazione pratica per questo corso</h3>
      <p>Usa i capitoli core come programma principale; usa questo addendum come livello di controllo qualità continuo: quando trovi una novità nel prodotto, verifica prima su fonti ufficiali, poi valida con pratica reale/community.</p>
    </section>

    <section class="panel sources" id="fonti">
      <h2>Fonti Verificate</h2>
      <ol>
        <li><a href="https://www.anthropic.com/news/claude-design-anthropic-labs?cam=claude" target="_blank" rel="noopener noreferrer">Anthropic - Introducing Claude Design by Anthropic Labs (17 Apr 2026)</a></li>
        <li><a href="https://www.anthropic.com/news/claude-opus-4-7" target="_blank" rel="noopener noreferrer">Anthropic - Introducing Claude Opus 4.7 (16 Apr 2026)</a></li>
        <li><a href="https://www.anthropic.com/news/model-context-protocol?curius=1051" target="_blank" rel="noopener noreferrer">Anthropic - Introducing the Model Context Protocol (25 Nov 2024)</a></li>
        <li><a href="https://support.claude.com/fr/articles/14604416-commencer-avec-claude-design" target="_blank" rel="noopener noreferrer">Claude Help Center - Get started with Claude Design (pagina localizzata)</a></li>
        <li><a href="https://support.claude.com/fr/articles/14604397-configurez-votre-systeme-de-design-dans-claude-design" target="_blank" rel="noopener noreferrer">Claude Help Center - Set up your design system in Claude Design</a></li>
        <li><a href="https://support.claude.com/fr/articles/14604406-guide-d-administration-claude-design-pour-les-plans-team-et-enterprise" target="_blank" rel="noopener noreferrer">Claude Help Center - Admin guide for Team/Enterprise</a></li>
        <li><a href="https://support.claude.com/fr/articles/14667344-utilisation-et-tarification-de-l-abonnement-claude-design" target="_blank" rel="noopener noreferrer">Claude Help Center - Claude Design subscription usage and pricing</a></li>
        <li><a href="https://www.canva.com/newsroom/news/canva-claude-design/" target="_blank" rel="noopener noreferrer">Canva Newsroom - Introducing Canva in Claude Design (17 Apr 2026)</a></li>
        <li><a href="https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/" target="_blank" rel="noopener noreferrer">TechCrunch - Anthropic launches Claude Design (17 Apr 2026)</a></li>
        <li><a href="https://www.reddit.com/r/ClaudeAI/comments/1soqutr/10_hours_of_claude_design_my_thoughts/" target="_blank" rel="noopener noreferrer">Reddit r/ClaudeAI - 10 Hours of Claude Design</a></li>
        <li><a href="https://www.reddit.com/r/ClaudeAI/comments/1spxi2f/claude_design_is_incredible/" target="_blank" rel="noopener noreferrer">Reddit r/ClaudeAI - Claude Design is Incredible</a></li>
        <li><a href="https://www.reddit.com/r/ClaudeAI/comments/1sq27bs/my_designers_thoughts_on_claude_design/" target="_blank" rel="noopener noreferrer">Reddit r/ClaudeAI - Designer perspective</a></li>
        <li><a href="https://github.com/VoltAgent/awesome-claude-design" target="_blank" rel="noopener noreferrer">GitHub - VoltAgent/awesome-claude-design</a></li>
      </ol>
      <p class="muted">Nota: le fonti community sono utili per tattiche operative e problemi reali d'uso, ma non sostituiscono documentazione e policy ufficiali.</p>
    </section>
  </div>
</body>
</html>`;

fs.writeFileSync(outPath, finalHtml, 'utf8');
console.log('Generated:', outPath);
