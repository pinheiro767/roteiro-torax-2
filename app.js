const rawGroups = [
  {
    id: 'G1',
    title: 'G1 — ARTÉRIAS E NERVOS',
    subtitle: 'Artérias, feixes vasculonervosos e nervos do tórax',
    items: [
      ['','Aorta',0],
      ['a.','Parte torácica da aorta',1],
      ['','Artérias intercostais posteriores',0],
      ['a.','3ª–11ª artérias intercostais posteriores',1],
      ['b.','Ramo dorsal',1],
      ['c.','Ramo colateral',1],
      ['d.','Ramo cutâneo lateral',1],
      ['i.','Ramos mamários laterais',2],
      ['','Artéria subcostal',0],
      ['','Artéria axilar',0],
      ['a.','Artéria torácica superior',1],
      ['b.','Artéria torácica lateral',1],
      ['i.','Ramos mamários laterais',2],
      ['','Artéria subclávia',0],
      ['a.','Tronco costocervical',1],
      ['i.','Artéria intercostal suprema',2],
      ['1.','1ª artéria intercostal posterior',3],
      ['2.','2ª artéria intercostal posterior',3],
      ['b.','Artéria torácica interna',1],
      ['i.','Artérias intercostais anteriores — 1º ao 6º espaços intercostais',2],
      ['ii.','Ramos perfurantes',2],
      ['1.','Ramos mamários mediais',3],
      ['iii.','Ramos esternais',2],
      ['iv.','Artéria musculofrênica',2],
      ['1.','Artérias intercostais anteriores — 7º ao 9º espaços intercostais',3],
      ['v.','Artéria epigástrica superior',2],
      ['','Feixe vasculonervoso intercostal principal',0],
      ['a.','Veia',1],
      ['b.','Artéria',1],
      ['c.','Nervo',1],
      ['','Feixe vasculonervoso intercostal colateral',0],
      ['','Nervos espinais torácicos',0],
      ['a.','Ramo posterior',1],
      ['b.','Ramo anterior',1],
      ['i.','Nervos intercostais — T1 a T11',2],
      ['1.','Ramo colateral',3],
      ['2.','Ramo cutâneo lateral',3],
      ['a.','Ramo anterior',4],
      ['b.','Ramo posterior',4],
      ['3.','Ramo cutâneo anterior',3],
      ['a.','Ramo medial',4],
      ['b.','Ramo lateral',4],
      ['4.','Ramos musculares',3],
      ['c.','Ramo comunicante branco',1],
      ['d.','Ramo comunicante cinzento',1],
      ['','Nervo subcostal',0],
      ['a.','Ramo anterior de T12',1],
      ['','Nervo peitoral lateral',0],
      ['','Nervo peitoral medial',0],
      ['','Nervo torácico longo',0]
    ]
  },
  {
    id: 'G2',
    title: 'G2 — VEIAS',
    subtitle: 'Drenagem venosa, sistema ázigo e plexos vertebrais',
    items: [
      ['','1ª veia intercostal posterior',0],
      ['a.','Veia braquiocefálica correspondente',1],
      ['','2ª–4ª veias intercostais posteriores',0],
      ['a.','Veia intercostal superior',1],
      ['','Veia intercostal superior direita',0],
      ['a.','Veia ázigo',1],
      ['i.','Veia cava superior',2],
      ['','Veia intercostal superior esquerda',0],
      ['a.','Veia braquiocefálica esquerda',1],
      ['b.','Comunicação com a veia hemiázigo acessória',1],
      ['','Plexo venoso vertebral anterior externo',0],
      ['','Plexo venoso vertebral anterior interno',0],
      ['','Plexo venoso vertebral posterior externo',0],
      ['','Veia lombar ascendente esquerda',0],
      ['','Veia subcostal esquerda',0],
      ['','Veia hemiázigo',0],
      ['a.','Veia lombar ascendente esquerda',1],
      ['b.','Veia subcostal esquerda',1],
      ['c.','Veias intercostais posteriores inferiores esquerdas',1],
      ['d.','Veias esofágicas inferiores',1],
      ['e.','Veias mediastinais',1],
      ['f.','Veia ázigo',1],
      ['','Veias intercostais posteriores esquerdas — 4ª/5ª à 8ª',0],
      ['','Veia hemiázigo acessória',0],
      ['a.','Veias intercostais posteriores esquerdas — 4ª/5ª à 8ª',1],
      ['b.','Veias bronquiais esquerdas',1],
      ['c.','Veia ázigo',1],
      ['d.','Comunicação com a veia hemiázigo',1],
      ['e.','Comunicação com a veia intercostal superior esquerda',1],
      ['','Veia lombar ascendente direita',0],
      ['','Veia subcostal direita',0],
      ['','Veia ázigo',0],
      ['a.','Veia lombar ascendente direita',1],
      ['b.','Veia subcostal direita',1],
      ['c.','Veias intercostais posteriores direitas',1],
      ['d.','Veia intercostal superior direita',1],
      ['e.','Veia hemiázigo',1],
      ['f.','Veia hemiázigo acessória',1],
      ['g.','Veias mediastinais',1],
      ['h.','Veias esofágicas',1],
      ['i.','Veias bronquiais',1],
      ['j.','Veia cava superior',1],
      ['','Veias intercostais anteriores',0],
      ['a.','Veias torácicas internas',1],
      ['','Veias musculofrênicas',0],
      ['a.','Veias torácicas internas',1],
      ['','Veias epigástricas superiores',0],
      ['a.','Veias torácicas internas',1],
      ['','Veias torácicas internas',0],
      ['a.','Veias braquiocefálicas',1],
      ['','Veias mediastinais, esofágicas e bronquiais',0],
      ['a.','Sistema ázigo',1],
      ['','Veia braquiocefálica direita',0],
      ['','Veia braquiocefálica esquerda',0],
      ['','Veia cava superior',0]
    ]
  }
];

let seq = 1;
const groups = rawGroups.map(group => ({
  ...group,
  items: group.items.map(([prefix, name, level]) => ({
    id: `structure-${seq}`,
    imageNumber: seq++,
    prefix,
    name,
    level,
    group: group.id,
    defaultImage: `images/${seq - 1}.png`
  }))
}));

const allItems = groups.flatMap(g => g.items);
const state = {
  filterGroup: 'ALL',
  search: '',
  hidden: new Set(JSON.parse(localStorage.getItem('thorax-hidden-images') || '[]')),
  uploads: new Map(),
  zoom: 1,
  deferredPrompt: null
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const content = $('#content');
const emptyState = $('#emptyState');
const searchInput = $('#searchInput');
const includeHiddenInPdf = $('#includeHiddenInPdf');
const toast = $('#toast');

$('#structureCount').textContent = `${allItems.length} estruturas`;

function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}

function persistHidden() {
  localStorage.setItem('thorax-hidden-images', JSON.stringify([...state.hidden]));
}

function cardMatches(item) {
  const groupOk = state.filterGroup === 'ALL' || item.group === state.filterGroup;
  const query = normalizeText(state.search.trim());
  const searchOk = !query || normalizeText(`${item.prefix} ${item.name}`).includes(query);
  return groupOk && searchOk;
}

function escapeHTML(text) {
  return String(text).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}

function render() {
  const sections = [];
  let any = false;

  for (const group of groups) {
    if (state.filterGroup !== 'ALL' && state.filterGroup !== group.id) continue;
    const items = group.items.filter(cardMatches);
    if (!items.length) continue;
    any = true;

    sections.push(`
      <section class="group-section" data-group-section="${group.id}">
        <div class="group-heading">
          <div>
            <h2>${escapeHTML(group.title)}</h2>
            <p>${escapeHTML(group.subtitle)}</p>
          </div>
          <span class="group-count">${items.length} ${items.length === 1 ? 'item' : 'itens'}</span>
        </div>
        <div class="structure-list">
          ${items.map(renderCard).join('')}
        </div>
      </section>
    `);
  }

  content.innerHTML = sections.join('');
  emptyState.hidden = any;
  bindRenderedEvents();
  hydrateAllGalleries();
}

function renderCard(item) {
  const hidden = state.hidden.has(item.id);
  const prefix = item.prefix || '•';
  return `
    <article class="structure-card" data-item-id="${item.id}" style="--level:${item.level}">
      <div class="structure-header">
        <div class="hierarchy-badge" title="Hierarquia">${escapeHTML(prefix)}</div>
        <button class="structure-title structure-title-btn" type="button" data-toggle-images aria-label="Abrir ou ocultar imagens de ${escapeHTML(item.name)}">
          <h3>${escapeHTML(item.name)}</h3>
          <div class="structure-meta">
            <span>${item.group}</span>
            <span>imagem ${item.imageNumber}.png</span>
            <span data-upload-count>0 anexos</span>
          </div>
        </button>
        <button class="toggle-card" type="button" data-toggle-images aria-label="${hidden ? 'Mostrar' : 'Ocultar'} imagens" title="${hidden ? 'Mostrar' : 'Ocultar'} imagens">
          ${hidden ? '◉' : '◌'}
        </button>
      </div>
      <div class="image-panel" ${hidden ? 'hidden' : ''}>
        <div class="gallery" data-gallery></div>
        <div class="card-actions">
          <label class="soft-btn primary compact">
            Anexar imagens
            <input class="file-input" data-file-input type="file" accept="image/*" multiple />
          </label>
          <button class="soft-btn secondary compact" type="button" data-zoom-first>Zoom</button>
          <button class="soft-btn secondary compact" type="button" data-toggle-images>${hidden ? 'Mostrar imagem' : 'Ocultar imagem'}</button>
        </div>
      </div>
    </article>
  `;
}

function itemById(id) {
  return allItems.find(i => i.id === id);
}

function bindRenderedEvents() {
  $$('.structure-card').forEach(card => {
    const itemId = card.dataset.itemId;
    $$('[data-toggle-images]', card).forEach(btn => btn.addEventListener('click', () => toggleImages(itemId)));
    const input = $('[data-file-input]', card);
    input?.addEventListener('change', async e => {
      const files = [...e.target.files];
      if (!files.length) return;
      await addUploads(itemId, files);
      e.target.value = '';
    });
    $('[data-zoom-first]', card)?.addEventListener('click', () => openFirstZoom(itemId));
  });
}

function toggleImages(itemId) {
  if (state.hidden.has(itemId)) state.hidden.delete(itemId);
  else state.hidden.add(itemId);
  persistHidden();
  render();
}

async function hydrateAllGalleries() {
  const cards = $$('.structure-card');
  await Promise.all(cards.map(async card => {
    const item = itemById(card.dataset.itemId);
    if (!item) return;
    const uploads = await dbGetUploads(item.id);
    state.uploads.set(item.id, uploads);
    renderGallery(card, item, uploads);
  }));
}

function renderGallery(card, item, uploads) {
  const gallery = $('[data-gallery]', card);
  const count = $('[data-upload-count]', card);
  if (!gallery) return;
  count.textContent = `${uploads.length} ${uploads.length === 1 ? 'anexo' : 'anexos'}`;
  gallery.innerHTML = '';

  const defaultTile = document.createElement('div');
  defaultTile.className = 'image-tile';
  defaultTile.innerHTML = `
    <img src="${item.defaultImage}" alt="${escapeHTML(item.name)} — imagem ${item.imageNumber}.png" loading="lazy" data-source-kind="default" />
    <span class="image-tag">${item.imageNumber}.png</span>
  `;
  const defaultImg = $('img', defaultTile);
  defaultImg.addEventListener('click', () => openZoom(defaultImg.src, item.name, 1, 1 + uploads.length));
  defaultImg.addEventListener('error', () => {
    defaultTile.innerHTML = `
      <div class="missing-image">
        <div><strong>${item.imageNumber}.png</strong>Adicione este arquivo na pasta <code>images/</code>.</div>
      </div>
      <span class="image-tag">imagem padrão</span>
    `;
  }, {once:true});
  gallery.appendChild(defaultTile);

  uploads.forEach((upload, idx) => {
    const tile = document.createElement('div');
    tile.className = 'image-tile';
    tile.innerHTML = `
      <img src="${upload.dataUrl}" alt="Imagem anexada — ${escapeHTML(item.name)}" loading="lazy" data-source-kind="upload" />
      <span class="image-tag">anexo ${idx + 1}</span>
      <button class="image-delete" type="button" aria-label="Excluir imagem anexada" title="Excluir imagem">×</button>
    `;
    const img = $('img', tile);
    img.addEventListener('click', () => openZoom(img.src, item.name, idx + 2, 1 + uploads.length));
    $('.image-delete', tile).addEventListener('click', async ev => {
      ev.stopPropagation();
      await dbDeleteUpload(upload.key);
      showToast('Imagem anexada removida.');
      const refreshed = await dbGetUploads(item.id);
      state.uploads.set(item.id, refreshed);
      renderGallery(card, item, refreshed);
    });
    gallery.appendChild(tile);
  });
}

async function addUploads(itemId, files) {
  const valid = files.filter(f => f.type.startsWith('image/'));
  if (!valid.length) {
    showToast('Selecione arquivos de imagem.');
    return;
  }
  showToast(`Processando ${valid.length} ${valid.length === 1 ? 'imagem' : 'imagens'}…`);
  for (const file of valid) {
    const dataUrl = await compressImage(file, 1800, 0.84);
    await dbAddUpload({
      itemId,
      name: file.name,
      createdAt: Date.now(),
      dataUrl
    });
  }
  const uploads = await dbGetUploads(itemId);
  state.uploads.set(itemId, uploads);
  const card = $(`.structure-card[data-item-id="${itemId}"]`);
  if (card) renderGallery(card, itemById(itemId), uploads);
  showToast(`${valid.length} ${valid.length === 1 ? 'imagem anexada' : 'imagens anexadas'}.`);
}

function compressImage(file, maxDimension = 1800, quality = .84) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxDimension / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// -------------------- IndexedDB --------------------
const DB_NAME = 'thorax-practical-pwa';
const DB_VERSION = 1;
const STORE = 'uploads';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'key', autoIncrement: true });
        store.createIndex('itemId', 'itemId', { unique: false });
      }
    };
  });
}

async function dbAddUpload(record) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).add(record);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function dbGetUploads(itemId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const idx = tx.objectStore(STORE).index('itemId');
    const req = idx.getAll(IDBKeyRange.only(itemId));
    req.onsuccess = () => resolve(req.result.sort((a,b) => a.createdAt - b.createdAt));
    req.onerror = () => reject(req.error);
  });
}

async function dbDeleteUpload(key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(key);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

// -------------------- Zoom --------------------
const zoomModal = $('#zoomModal');
const zoomImage = $('#zoomImage');
const zoomRange = $('#zoomRange');
const zoomTitle = $('#zoomTitle');
const zoomCounter = $('#zoomCounter');

function openFirstZoom(itemId) {
  const card = $(`.structure-card[data-item-id="${itemId}"]`);
  const img = card?.querySelector('.gallery img');
  if (!img) {
    showToast('Nenhuma imagem disponível para ampliar.');
    return;
  }
  const item = itemById(itemId);
  const total = card.querySelectorAll('.gallery img').length;
  openZoom(img.src, item.name, 1, total);
}

function openZoom(src, title, index = 1, total = 1) {
  zoomImage.src = src;
  zoomTitle.textContent = title;
  zoomCounter.textContent = `Imagem ${index} de ${total}`;
  state.zoom = 1;
  zoomRange.value = 1;
  applyZoom();
  zoomModal.classList.add('open');
  zoomModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeZoom() {
  zoomModal.classList.remove('open');
  zoomModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function applyZoom() { zoomImage.style.transform = `scale(${state.zoom})`; }
function setZoom(value) {
  state.zoom = Math.min(4, Math.max(1, Number(value)));
  zoomRange.value = state.zoom;
  applyZoom();
}
$('#zoomClose').addEventListener('click', closeZoom);
$('#zoomIn').addEventListener('click', () => setZoom(state.zoom + .25));
$('#zoomOut').addEventListener('click', () => setZoom(state.zoom - .25));
$('#zoomReset').addEventListener('click', () => setZoom(1));
zoomRange.addEventListener('input', e => setZoom(e.target.value));
$('#zoomStage').addEventListener('wheel', e => {
  e.preventDefault();
  setZoom(state.zoom + (e.deltaY < 0 ? .18 : -.18));
}, { passive: false });
zoomImage.addEventListener('dblclick', () => setZoom(state.zoom === 1 ? 2 : 1));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && zoomModal.classList.contains('open')) closeZoom();
});

// -------------------- PDF --------------------
$('#pdfBtn').addEventListener('click', generatePdf);

async function generatePdf() {
  document.body.classList.add('pdf-busy');
  try {
    if (!window.jspdf?.jsPDF) {
      document.body.classList.remove('pdf-busy');
      showToast('Biblioteca de PDF indisponível. Abrindo impressão…');
      setTimeout(() => window.print(), 250);
      return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
    const pageW = 210, pageH = 297, margin = 13;
    const contentW = pageW - margin * 2;
    let y = 14;

    const addPageIfNeeded = (needed = 12) => {
      if (y + needed > pageH - 15) {
        pdf.addPage();
        y = 14;
      }
    };

    pdf.setTextColor(14, 38, 64);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(18);
    pdf.text('ROTEIRO PRÁTICO — ANATOMIA TOPOGRÁFICA DO TÓRAX', margin, y, { maxWidth: contentW });
    y += 14;
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(80, 95, 110);
    pdf.text(`Gerado em ${new Date().toLocaleString('pt-BR')}`, margin, y);
    y += 8;

    for (const group of groups) {
      const groupItems = group.items.filter(cardMatches);
      if (!groupItems.length) continue;
      addPageIfNeeded(14);
      pdf.setTextColor(12, 48, 78);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.text(group.title, margin, y);
      y += 7;

      for (const item of groupItems) {
        const includeImages = includeHiddenInPdf.checked || !state.hidden.has(item.id);
        const indent = item.level * 5;
        const prefix = item.prefix ? `${item.prefix} ` : '';
        const text = `${prefix}${item.name}`;
        pdf.setFont('helvetica', item.level === 0 ? 'bold' : 'normal');
        pdf.setFontSize(item.level === 0 ? 10.5 : 9.4);
        pdf.setTextColor(30, 42, 54);
        const lines = pdf.splitTextToSize(text, contentW - indent);
        addPageIfNeeded(lines.length * 5 + (includeImages ? 48 : 3));
        pdf.text(lines, margin + indent, y);
        y += lines.length * 5 + 1.5;

        if (includeImages) {
          const imageSources = [];
          const defaultData = await loadImageAsDataUrl(item.defaultImage).catch(() => null);
          if (defaultData) imageSources.push({ src: defaultData, label: `${item.imageNumber}.png` });
          const uploads = state.uploads.get(item.id) || await dbGetUploads(item.id);
          uploads.forEach((u, idx) => imageSources.push({ src: u.dataUrl, label: `anexo ${idx + 1}` }));

          if (imageSources.length) {
            for (const image of imageSources) {
              const dims = await fitImageForPdf(image.src, 84, 52).catch(() => null);
              if (!dims) continue;
              addPageIfNeeded(dims.h + 8);
              pdf.setFont('helvetica', 'normal');
              pdf.setFontSize(7.5);
              pdf.setTextColor(105, 115, 125);
              pdf.text(image.label, margin + indent, y + 2.5);
              y += 4;
              pdf.addImage(dims.dataUrl, 'JPEG', margin + indent, y, dims.w, dims.h, undefined, 'FAST');
              y += dims.h + 5;
            }
          }
        }
        y += 2;
      }
      y += 4;
    }

    const pages = pdf.getNumberOfPages();
    for (let p = 1; p <= pages; p++) {
      pdf.setPage(p);
      pdf.setFontSize(8);
      pdf.setTextColor(135, 145, 155);
      pdf.text(`Página ${p} de ${pages}`, pageW - margin, pageH - 7, { align: 'right' });
    }

    pdf.save('roteiro-pratico-anatomia-topografica-torax.pdf');
    showToast('PDF gerado com sucesso.');
  } catch (err) {
    console.error(err);
    showToast('Não foi possível gerar o PDF. Abrindo impressão como alternativa.');
    setTimeout(() => window.print(), 350);
  } finally {
    document.body.classList.remove('pdf-busy');
  }
}

function loadImageAsDataUrl(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const max = 1200;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        resolve(canvas.toDataURL('image/jpeg', .78));
      } catch (e) { reject(e); }
    };
    img.onerror = reject;
    img.src = src;
  });
}

function fitImageForPdf(dataUrl, maxW, maxH) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const ratio = Math.min(maxW / img.width, maxH / img.height);
      resolve({ dataUrl, w: img.width * ratio, h: img.height * ratio });
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

// -------------------- Filters & global controls --------------------
searchInput.addEventListener('input', e => {
  state.search = e.target.value;
  render();
});

$$('.group-tab').forEach(btn => btn.addEventListener('click', () => {
  state.filterGroup = btn.dataset.group;
  $$('.group-tab').forEach(b => b.classList.toggle('active', b === btn));
  render();
}));

$('#hideAllBtn').addEventListener('click', () => {
  allItems.forEach(item => state.hidden.add(item.id));
  persistHidden();
  render();
  showToast('Todas as imagens foram ocultadas.');
});

$('#showAllBtn').addEventListener('click', () => {
  state.hidden.clear();
  persistHidden();
  render();
  showToast('Todas as imagens foram exibidas.');
});

// -------------------- PWA install --------------------
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  state.deferredPrompt = e;
  $('#installBtn').hidden = false;
});

$('#installBtn').addEventListener('click', async () => {
  if (!state.deferredPrompt) return;
  state.deferredPrompt.prompt();
  await state.deferredPrompt.userChoice;
  state.deferredPrompt = null;
  $('#installBtn').hidden = true;
});

window.addEventListener('appinstalled', () => showToast('App instalado com sucesso.'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.warn('SW:', err));
  });
}

render();
