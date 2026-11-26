// Mon CRM — pipeline de vente simple, données stockées dans le navigateur (localStorage).

const STORAGE_KEY = "mon-crm-prospects";
const STAGES = [
  { id: "todo", label: "À contacter", color: "var(--s-todo)" },
  { id: "talk", label: "En discussion", color: "var(--s-talk)" },
  { id: "followup", label: "À relancer", color: "var(--s-followup)" },
  { id: "won", label: "Gagné", color: "var(--s-won)" },
  { id: "lost", label: "Perdu", color: "var(--s-lost)" },
];
const SPACES = [
  { id: "commerces", label: "Commerces" },
  { id: "manufactures", label: "Manufactures" },
];
const SPACE_KEY = "mon-crm-espace";

let prospects = load();
prospects.forEach((p) => { if (!SPACES.some((s) => s.id === p.space)) p.space = "commerces"; });
let query = "";
let currentSpace = SPACES.some((s) => s.id === localStorage.getItem(SPACE_KEY))
  ? localStorage.getItem(SPACE_KEY)
  : "commerces";

const board = document.getElementById("board");
const spacesNav = document.getElementById("spaces");
const dialog = document.getElementById("dialog");
const form = document.getElementById("form");
const stageSelect = form.elements.stage;
const spaceSelect = form.elements.space;

STAGES.forEach((s) => stageSelect.add(new Option(s.label, s.id)));
SPACES.forEach((s) => spaceSelect.add(new Option(s.label, s.id)));

// ---------- Stockage ----------
function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}
function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prospects));
  } catch {
    alert("Impossible d'enregistrer dans ce navigateur. Pensez à exporter vos données.");
  }
}

// ---------- Affichage ----------
function matches(p) {
  if (!query) return true;
  return [p.company, p.contact, p.email, p.phone, p.website, p.notes]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function renderSpaces() {
  spacesNav.innerHTML = "";
  for (const s of SPACES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "space-tab" + (s.id === currentSpace ? " active" : "");
    btn.setAttribute("aria-pressed", s.id === currentSpace);
    const n = prospects.filter((p) => p.space === s.id).length;
    btn.innerHTML = `${s.label} <span class="count">${n}</span>`;
    btn.addEventListener("click", () => {
      currentSpace = s.id;
      localStorage.setItem(SPACE_KEY, s.id);
      render();
    });
    spacesNav.appendChild(btn);
  }
}

function render() {
  renderSpaces();
  board.innerHTML = "";
  for (const stage of STAGES) {
    const items = prospects.filter((p) => p.space === currentSpace && p.stage === stage.id && matches(p));
    const col = document.createElement("section");
    col.className = "column";
    col.style.setProperty("--stage-color", stage.color);
    col.dataset.stage = stage.id;
    col.innerHTML = `<header><h2>${stage.label}</h2><span class="count">${items.length}</span></header>`;

    if (items.length === 0) {
      col.insertAdjacentHTML("beforeend", `<div class="empty">Aucun prospect</div>`);
    }
    for (const p of items) col.appendChild(cardFor(p));

    col.addEventListener("dragover", (e) => {
      e.preventDefault();
      col.classList.add("drag-over");
    });
    col.addEventListener("dragleave", () => col.classList.remove("drag-over"));
    col.addEventListener("drop", (e) => {
      e.preventDefault();
      col.classList.remove("drag-over");
      const p = prospects.find((x) => x.id === e.dataTransfer.getData("text/plain"));
      if (p && p.stage !== stage.id) {
        p.stage = stage.id;
        p.updatedAt = new Date().toISOString();
        save();
        render();
      }
    });
    board.appendChild(col);
  }
}

function escapeHtml(s = "") {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function siteLink(url) {
  if (!url) return "Pas de site";
  const href = /^https?:\/\//i.test(url) ? url : "https://" + url;
  return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(url)}</a>`;
}

function followUpLine(p) {
  if (!p.followUp || p.stage === "won" || p.stage === "lost") return "";
  const today = new Date().toISOString().slice(0, 10);
  const [y, m, d] = p.followUp.split("-");
  const late = p.followUp <= today;
  return `<div class="followup${late ? " due" : ""}">${late ? "⏰ À relancer" : "Relancer le"} ${d}/${m}/${y}</div>`;
}

function cardFor(p) {
  const card = document.createElement("article");
  card.className = "card";
  card.draggable = true;
  const contactLine = [p.contact, p.phone].filter(Boolean).map(escapeHtml).join(" · ");
  card.innerHTML = `
    <strong>${escapeHtml(p.company)}</strong>
    ${contactLine ? `<div class="meta">${contactLine}</div>` : ""}
    ${p.email ? `<div class="meta">${escapeHtml(p.email)}</div>` : ""}
    <div class="meta">${siteLink(p.website)}</div>
    ${followUpLine(p)}`;
  card.addEventListener("click", (e) => {
    if (e.target.tagName !== "A") openForm(p);
  });
  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", p.id);
    card.classList.add("dragging");
  });
  card.addEventListener("dragend", () => card.classList.remove("dragging"));
  return card;
}

// ---------- Formulaire ----------
function openForm(p) {
  form.reset();
  document.getElementById("form-title").textContent = p ? "Modifier le prospect" : "Nouveau prospect";
  document.getElementById("btn-delete").hidden = !p;
  const data = p || { stage: "todo", space: currentSpace };
  for (const el of form.elements) {
    if (el.name && el.name in data) el.value = data[el.name] ?? "";
  }
  form.elements.id.value = p ? p.id : "";
  dialog.showModal();
}

form.addEventListener("submit", () => {
  const data = Object.fromEntries(new FormData(form));
  for (const k in data) data[k] = data[k].trim();
  const now = new Date().toISOString();
  const existing = prospects.find((p) => p.id === data.id);
  if (existing) {
    Object.assign(existing, data, { updatedAt: now });
  } else {
    prospects.push({ ...data, id: crypto.randomUUID(), createdAt: now, updatedAt: now });
  }
  save();
  render();
});

document.getElementById("btn-new").addEventListener("click", () => openForm(null));
document.getElementById("btn-cancel").addEventListener("click", () => dialog.close());
document.getElementById("btn-delete").addEventListener("click", () => {
  const id = form.elements.id.value;
  const p = prospects.find((x) => x.id === id);
  if (p && confirm(`Supprimer « ${p.company} » ?`)) {
    prospects = prospects.filter((x) => x.id !== id);
    save();
    render();
    dialog.close();
  }
});

// ---------- Recherche ----------
document.getElementById("search").addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

// ---------- Export / Import ----------
document.getElementById("btn-export").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(prospects, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `crm-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
});

document.getElementById("file-import").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!Array.isArray(data)) throw new Error();
    if (confirm(`Importer ${data.length} prospect(s) ? Les données actuelles seront remplacées.`)) {
      prospects = data.filter((p) => p && p.id && p.company);
      prospects.forEach((p) => {
        if (!STAGES.some((s) => s.id === p.stage)) p.stage = "todo";
        if (!SPACES.some((s) => s.id === p.space)) p.space = "commerces";
      });
      save();
      render();
    }
  } catch {
    alert("Fichier invalide.");
  }
  e.target.value = "";
});

render();
