// js/script.js
// ======================== LOAD DATA DARI JSON ========================

let mainData = null;
let babData = null;
let closingData = null;
let chapters = [];

async function loadAllData() {
    try {
        const [mainRes, babRes, closingRes] = await Promise.all([
            fetch('assets/teks/main.json'),
            fetch('assets/teks/bab1_7.json'),
            fetch('assets/teks/closing.json')
        ]);
        mainData = await mainRes.json();
        babData = await babRes.json();
        closingData = await closingRes.json();

        chapters = [
            { id: "pendahuluan", title: "📖 Pendahuluan" },
            { id: "bab1", title: "⚔️ Bab 1: Manajemen Risiko" },
            { id: "bab2", title: "📊 Bab 2: Alokasi Aset" },
            { id: "bab3", title: "⏳ Bab 3: Kekuatan Waktu" },
            { id: "bab4", title: "🧠 Bab 4: Psikologi Investor" },
            { id: "bab5", title: "🏛️ Bab 5: Piramida Keuangan" },
            { id: "bab6", title: "📐 Bab 6: Implementasi" },
            { id: "bab7", title: "🔥 Bab 7: Konsistensi & Kedisiplinan" },
            { id: "kesimpulan", title: "🎯 Kesimpulan" }
        ];

        initApp();  // Mulai aplikasi setelah data siap
    } catch (err) {
        console.error('Gagal memuat data JSON:', err);
        document.body.innerHTML = '<p style="padding:2rem; text-align:center;">Gagal memuat konten. Pastikan file JSON tersedia di folder assets/teks/</p>';
    }
}

// ======================== PARSER TAB DARI MARKDOWN TABEL ========================
function parseMarkdownTableToTabWidget(tableText) {
    const lines = tableText.trim().split('\n').filter(l => l.trim() !== '');
    if (lines.length < 2) return '';
    const headers = lines[0].split('|').map(h => h.trim()).filter(h => h !== '');
    const rows = lines.slice(1).map(line => line.split('|').map(c => c.trim()).filter(c => c !== ''));
    if (headers.length === 0) return '';

    let tabHeadersHtml = `<div class="tab-headers">`;
    let panesHtml = `<div class="tab-content">`;
    headers.forEach((header, idx) => {
        const activeClass = idx === 0 ? 'active' : '';
        tabHeadersHtml += `<button class="tab-btn ${activeClass}" data-tab-idx="${idx}">${header}</button>`;
        let paneContent = `<div class="tab-pane ${idx === 0 ? 'active-pane' : ''}" data-pane-idx="${idx}">`;
        rows.forEach(row => {
            const val = row[idx] || '-';
            paneContent += `<p>✨ ${val}</p>`;
        });
        paneContent += `</div>`;
        panesHtml += paneContent;
    });
    tabHeadersHtml += `</div>`;
    panesHtml += `</div>`;
    return `<div class="tab-widget">${tabHeadersHtml}${panesHtml}</div>`;
}

// Parser untuk #tab marker di dalam teks (format markdown tabel)
function replaceTabMarkers(htmlContent) {
    const regex = /#tab\s*\n([\s\S]*?)(?=\n\n|\n<\/div>|$)/g;
    return htmlContent.replace(regex, (match, tableBlock) => {
        return parseMarkdownTableToTabWidget(tableBlock);
    });
}

// ======================== RENDER HALAMAN ========================

function renderPendahuluan() {
    const data = mainData.pendahuluan;
    if (!data) return '<div class="content-card"><p>Konten tidak tersedia.</p></div>';
    let html = `<div class="content-card"><h1>${data.judul}</h1>`;
    for (const item of data.konten) {
        if (item.jenis === 'paragraf') {
            html += `<p>${item.teks}</p>`;
        } else if (item.jenis === 'subjudul') {
            html += `<h3>${item.teks}</h3>`;
        } else if (item.jenis === 'contoh') {
            html += `<p><em>${item.teks}</em></p>`;
        } else if (item.jenis === 'tabel') {
            // Buat widget tab dari tabel JSON
            const headers = item.header;
            const rows = item.baris;
            if (headers && rows) {
                let tabHeaders = `<div class="tab-headers">`;
                let panes = `<div class="tab-content">`;
                headers.forEach((h, idx) => {
                    const active = idx === 0 ? 'active' : '';
                    tabHeaders += `<button class="tab-btn ${active}" data-tab-idx="${idx}">${h}</button>`;
                    let paneContent = `<div class="tab-pane ${idx === 0 ? 'active-pane' : ''}" data-pane-idx="${idx}">`;
                    rows.forEach(row => {
                        const val = row[idx] || '-';
                        paneContent += `<p>✨ ${val}</p>`;
                    });
                    paneContent += `</div>`;
                    panes += paneContent;
                });
                tabHeaders += `</div>`;
                panes += `</div>`;
                html += `<div class="tab-widget">${tabHeaders}${panes}</div>`;
            } else {
                html += `<p><strong>${item.judul || 'Tabel'}</strong> tidak dapat ditampilkan.</p>`;
            }
        }
    }
    html += `</div>`;
    return html;
}

function renderBab(babId) {
    let text = babData[babId];
    if (!text) return '<div class="content-card"><p>Konten bab tidak tersedia.</p></div>';
    // Konversi markdown sederhana (##, ###, paragraf)
    let processed = text
        .replace(/## (.*?)\n/g, '<h2>$1</h2>')
        .replace(/### (.*?)\n/g, '<h3>$1</h3>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    let fullHtml = `<div class="content-card">${processed}</div>`;
    // Ganti marker #tab
    fullHtml = replaceTabMarkers(fullHtml);
    return fullHtml;
}

function renderKesimpulan() {
    const data = closingData.kesimpulan;
    if (!data) return '<div class="content-card"><p>Konten tidak tersedia.</p></div>';
    let html = `<div class="content-card"><h1>✨ ${data.judul}</h1>`;
    for (const item of data.konten) {
        if (item.jenis === 'paragraf') {
            html += `<p>${item.teks}</p>`;
        } else if (item.jenis === 'kutipan') {
            html += `<blockquote style="border-left:4px solid var(--accent); padding-left:1rem; margin:1rem 0;">${item.teks}</blockquote>`;
        }
    }
    if (data.pesan_penutup) {
        html += `<p style="margin-top:2rem; font-weight:500;">${data.pesan_penutup}</p>`;
    }
    html += `</div>`;
    return html;
}

function renderPage(pageId) {
    const pageDiv = document.getElementById(pageId);
    if (!pageDiv) return;
    let content = '';
    if (pageId === 'pendahuluan') {
        content = renderPendahuluan();
    } else if (pageId === 'kesimpulan') {
        content = renderKesimpulan();
    } else if (babData && babData[pageId]) {
        content = renderBab(pageId);
    } else {
        content = '<div class="content-card"><p>Konten sedang disiapkan.</p></div>';
    }
    pageDiv.innerHTML = content;
    // Re-attach event listener untuk tab di dalam halaman yang baru dirender
    attachTabEvents(pageDiv);
    attachNavigation(pageId);
}

function attachTabEvents(container) {
    container.querySelectorAll('.tab-widget').forEach(widget => {
        const btns = widget.querySelectorAll('.tab-btn');
        const panes = widget.querySelectorAll('.tab-pane');
        btns.forEach(btn => {
            btn.removeEventListener('click', handleTabClick);
            btn.addEventListener('click', handleTabClick);
        });
        function handleTabClick(e) {
            const btn = e.currentTarget;
            const idx = btn.getAttribute('data-tab-idx');
            const parentWidget = btn.closest('.tab-widget');
            parentWidget.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            parentWidget.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active-pane');
                if (pane.getAttribute('data-pane-idx') === idx) pane.classList.add('active-pane');
            });
        }
    });
}

function attachNavigation(currentId) {
    const pageDiv = document.getElementById(currentId);
    let existingNav = pageDiv.querySelector('.custom-nav-container');
    if (existingNav) existingNav.remove();
    const index = chapters.findIndex(ch => ch.id === currentId);
    if (index === -1) return;
    const navDiv = document.createElement('div');
    navDiv.className = 'next-section custom-nav-container';
    if (index > 0) {
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '← Sebelumnya';
        prevBtn.className = 'nav-btn';
        prevBtn.onclick = () => navigateTo(chapters[index-1].id);
        navDiv.appendChild(prevBtn);
    }
    if (index < chapters.length - 1) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = `Lanjut ke ${chapters[index+1].title} →`;
        nextBtn.className = 'nav-btn';
        nextBtn.onclick = () => navigateTo(chapters[index+1].id);
        navDiv.appendChild(nextBtn);
    }
    pageDiv.appendChild(navDiv);
}

// ======================== NAVIGASI & UI ========================

let currentPageId = 'homePage';

function navigateTo(pageId, pushState = true) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // Jika halaman belum terisi konten (kosong), render
        if (!targetPage.innerHTML.trim() || targetPage.innerHTML.includes('Konten sedang disiapkan')) {
            renderPage(pageId);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (pushState) history.pushState({ page: pageId }, '', `#${pageId === 'homePage' ? '' : pageId}`);
        currentPageId = pageId;
    }
    closeSidebar();
    updateMenuVisibility(pageId !== 'homePage');
}

function updateMenuVisibility(show) {
    const menuBtn = document.getElementById('menuToggleBtn');
    if (menuBtn) {
        menuBtn.style.display = show ? 'flex' : 'none';
    }
}

// Theme handling
let darkMode = localStorage.getItem('theme') === 'dark';
function applyTheme() {
    if (darkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    const themeIcon = document.getElementById('themeToggle');
    if (themeIcon) themeIcon.textContent = darkMode ? '☀️' : '🌙';
}
function toggleTheme() { darkMode = !darkMode; applyTheme(); }

// Sidebar
function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const menuBtn = document.querySelector('.menu-btn');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('show');
    if (menuBtn) menuBtn.classList.add('morph-active');
}
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const menuBtn = document.querySelector('.menu-btn');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    if (menuBtn) menuBtn.classList.remove('morph-active');
}
function buildSidebar() {
    const ul = document.getElementById('chapterSidebarList');
    if (!ul) return;
    ul.innerHTML = '';
    chapters.forEach(ch => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = ch.title;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(ch.id);
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
}

// Background canvas animation (sama seperti sebelumnya)
const canvas = document.getElementById('bgCanvas');
let ctx = canvas ? canvas.getContext('2d') : null;
let bars = [];
function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initBars();
}
function initBars() {
    if (!canvas) return;
    bars = [];
    let count = Math.max(20, Math.floor(canvas.width / 50));
    for (let i = 0; i < count; i++) {
        bars.push({
            x: i * 48 + 20,
            height: Math.random() * canvas.height * 0.4 + 30,
            color: Math.random() > 0.6 ? '#4C9A6F' : '#D4AF37'
        });
    }
}
function drawBars() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.28;
    bars.forEach(b => {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x, canvas.height - b.height, 18, b.height);
        b.height += (Math.random() - 0.5) * 2.2;
        if (b.height > canvas.height * 0.55) b.height = canvas.height * 0.18;
        if (b.height < 20) b.height = 28;
    });
    requestAnimationFrame(drawBars);
}

// Inisialisasi semua event dan render awal
function initApp() {
    applyTheme();
    buildSidebar();

    // Render semua halaman terlebih dahulu (agar konten siap saat navigasi)
    chapters.forEach(ch => renderPage(ch.id));
    renderPage('kesimpulan'); // sudah termasuk di chapters, tapi amankan

    // Pastikan homePage aktif di awal
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const homePage = document.getElementById('homePage');
    if (homePage) homePage.classList.add('active');
    currentPageId = 'homePage';
    updateMenuVisibility(false);

    // Event listeners
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => navigateTo('pendahuluan'));
    }
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

    const menuToggleBtn = document.getElementById('menuToggleBtn');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const sidebar = document.getElementById('sidebar');
            if (sidebar.classList.contains('open')) closeSidebar();
            else openSidebar();
        });
    }
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Handle popstate (back/forward)
    window.addEventListener('popstate', (e) => {
        let hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            navigateTo(hash, false);
        } else {
            // kembali ke home
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            const home = document.getElementById('homePage');
            if (home) home.classList.add('active');
            updateMenuVisibility(false);
            currentPageId = 'homePage';
        }
    });

    // Jika ada hash di awal
    if (window.location.hash) {
        let hash = window.location.hash.slice(1);
        if (document.getElementById(hash)) {
            navigateTo(hash, false);
        }
    }

    // Canvas
    resizeCanvas();
    drawBars();
    window.addEventListener('resize', () => { resizeCanvas(); });
}

// Jalankan load data
loadAllData();
