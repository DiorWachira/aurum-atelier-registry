const STORAGE_KEY = "aurum.registry.pieces";
const TARGET_KEY = "aurum.registry.annualTarget";

const form = document.getElementById("artwork-form");
const titleInput = document.getElementById("artwork-title");
const artistInput = document.getElementById("artwork-artist");
const mediumInput = document.getElementById("artwork-medium");
const statusInput = document.getElementById("artwork-status");
const valueInput = document.getElementById("artwork-value");
const dateInput = document.getElementById("artwork-date");
const formMessage = document.getElementById("form-message");

const artworkList = document.getElementById("artwork-list");
const emptyState = document.getElementById("empty-state");
const filterMedium = document.getElementById("filter-medium");

const totalPiecesEl = document.getElementById("total-pieces");
const portfolioValueEl = document.getElementById("portfolio-value");
const onDisplayCountEl = document.getElementById("on-display-count");
const targetStatusEl = document.getElementById("target-status");

const annualTargetInput = document.getElementById("annual-target");
const saveTargetButton = document.getElementById("save-target");
const targetProgressBar = document.getElementById("target-progress");

let pieces = loadPieces();
let annualTarget = loadTarget();

setDefaultDate();
annualTargetInput.value = annualTarget;
render();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const artist = artistInput.value.trim();
  const medium = mediumInput.value;
  const status = statusInput.value;
  const value = Number(valueInput.value);
  const date = dateInput.value;

  if (!title || !artist || !medium || !status || !value || !date) {
    formMessage.textContent = "Please complete all catalogue fields.";
    return;
  }

  const piece = {
    id: crypto.randomUUID(),
    title,
    artist,
    medium,
    status,
    value,
    date
  };

  pieces.push(piece);
  savePieces();
  form.reset();
  setDefaultDate();
  formMessage.textContent = "Artwork registered.";
  render();
});

saveTargetButton.addEventListener("click", () => {
  const value = Number(annualTargetInput.value);

  if (!Number.isInteger(value) || value < 1 || value > 100) {
    formMessage.textContent = "Annual target must be between 1 and 100.";
    return;
  }

  annualTarget = value;
  localStorage.setItem(TARGET_KEY, String(annualTarget));
  formMessage.textContent = "Annual target updated.";
  renderStats();
});

filterMedium.addEventListener("change", renderList);

artworkList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("button[data-id]");
  if (!deleteButton) {
    return;
  }

  const id = deleteButton.dataset.id;
  pieces = pieces.filter((piece) => piece.id !== id);
  savePieces();
  render();
});

function render() {
  renderList();
  renderStats();
}

function renderList() {
  const selectedMedium = filterMedium.value;
  const visiblePieces = selectedMedium === "All"
    ? pieces
    : pieces.filter((piece) => piece.medium === selectedMedium);

  artworkList.innerHTML = "";

  const sortedPieces = [...visiblePieces].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  sortedPieces.forEach((piece) => {
    const item = document.createElement("li");
    item.className = "collection-item";

    const details = document.createElement("div");
    details.innerHTML = `
      <strong>${escapeHtml(piece.title)}</strong>
      <p class="collection-meta">${escapeHtml(piece.artist)} | ${piece.medium} | ${piece.status}</p>
      <p class="collection-meta">$${formatCurrency(piece.value)} | Acquired ${piece.date}</p>
    `;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "delete-btn";
    removeButton.dataset.id = piece.id;
    removeButton.textContent = "Archive";

    item.append(details, removeButton);
    artworkList.append(item);
  });

  const hasEntries = visiblePieces.length > 0;
  emptyState.hidden = hasEntries;
}

function renderStats() {
  totalPiecesEl.textContent = String(pieces.length);

  const portfolioValue = pieces.reduce((sum, piece) => sum + piece.value, 0);
  portfolioValueEl.textContent = `$${formatCurrency(portfolioValue)}`;

  const onDisplayCount = pieces.filter((piece) => piece.status === "On Display").length;
  onDisplayCountEl.textContent = String(onDisplayCount);

  const currentYearCount = piecesInCurrentYear(pieces).length;
  targetStatusEl.textContent = `${currentYearCount} / ${annualTarget}`;

  const progress = Math.min(100, Math.round((currentYearCount / annualTarget) * 100));
  targetProgressBar.style.width = `${progress}%`;
}

function piecesInCurrentYear(allPieces) {
  const year = new Date().getFullYear();
  return allPieces.filter((piece) => {
    return new Date(piece.date).getFullYear() === year;
  });
}

function setDefaultDate() {
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
}

function loadPieces() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function savePieces() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pieces));
}

function loadTarget() {
  const raw = localStorage.getItem(TARGET_KEY);
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 12;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  }).format(value);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
