// script.js
// ======================== DATA MODEL (Embedded dari file JSON yang diberikan) ========================
// Mengacu pada main.json, bab1_7.json, closing.json

const mainData = {
    "main": {
        "judul": "Belajar Investasi",
        "subjudul": "Rekonstruksi Paradigma Keuangan: Strategi Investasi, Manajemen Risiko, dan Akumulasi Kekayaan Berbasis Logika Intuitif",
        "deskripsi": "Pemahaman mengenai investasi sering kali terjebak dalam dikotomi antara spekulasi berisiko tinggi atau sekadar upaya mencari penghasilan tambahan. Namun, investasi sebenarnya adalah strategi pertahanan hidup yang paling krusial untuk melawan hukum alam dan degradasi nilai yang tak terelakkan.",
        "tombol_mulai": "Mulai Pelajari"
    },
    "pendahuluan": {
        "judul": "Fondasi Filosofis dan Biologis: Investasi sebagai Keharusan Eksistensial",
        "konten": [
            { "jenis": "paragraf", "teks": "Langkah awal dalam memahami investasi adalah menyadari bahwa ketergantungan semata-mata pada gaji atau upah tenaga kerja adalah sebuah taruhan yang pasti kalah dalam jangka panjang. Hal ini disebabkan oleh dua faktor utama: depresiasi biologis dan inflasi moneter." },
            { "jenis": "subjudul", "teks": "1.1. Manusia sebagai Aset yang Terdepresiasi" },
            { "jenis": "paragraf", "teks": "Dalam dunia akuntansi dan bisnis, aset fisik seperti mesin, kendaraan, atau perangkat komputer memiliki masa pakai yang terbatas dan nilainya akan dihapusbukukan secara bertahap melalui proses yang disebut depresiasi. Secara paralel, tenaga kerja manusia juga mengalami hal yang serupa. Energi dan kesehatan yang dimiliki seseorang pada usia 20 tahun tidak akan sama dengan kondisi fisiknya pada usia 60 tahun." },
            { "jenis": "paragraf", "teks": "Jika seseorang hanya mengandalkan pendapatan dari tenaga fisiknya, ia sedang mempertaruhkan masa depannya. Tanpa konversi dari tenaga kerja yang bersifat temporal menjadi aset modal yang abadi, seseorang akan menghadapi risiko kemiskinan di masa tua. Oleh karena itu, tujuan utama investasi bukanlah untuk memamerkan kekayaan, melainkan untuk 'membeli kembali waktu kita' di masa depan." },
            { "jenis": "subjudul", "teks": "1.2. Musuh Laten: Inflasi dan Kebocoran Nilai" },
            { "jenis": "paragraf", "teks": "Selain depresiasi internal pada tubuh, terdapat ancaman eksternal berupa inflasi. Uang kertas pada dasarnya adalah teknologi yang digunakan pemerintah untuk menyimpan nilai dari tenaga kerja kita. Namun, sistem ini memiliki kelemahan inheren di mana nilainya terus 'bocor' secara perlahan namun pasti." },
            { "jenis": "contoh", "teks": "Sebagai ilustrasi, harga semangkuk bakso di Indonesia: tahun 1990 hanya Rp200, tahun 2000 menjadi Rp2.000, dan tahun 2022 mencapai Rp20.000. Kenaikan ini bukan berarti baksonya lebih enak, melainkan nilai uang yang menyusut drastis." },
            { "jenis": "paragraf", "teks": "Ketidakmampuan memahami inflasi sering dianalogikan dengan katak dalam panci air yang dipanaskan perlahan. Demikian pula dengan mereka yang menyimpan seluruh kekayaannya dalam bentuk uang tunai di bawah kasur; mereka tidak merasa kehilangan uang hari ini, namun daya beli mereka sedang 'dimasak' oleh inflasi hingga tidak bersisa di masa depan." }
        ]
    }
};

const babData = {
    bab1: "## II. Manajemen Risiko: Membangun Benteng dan Parit Pertahanan\n\nSetelah memahami mengapa kita harus berinvestasi, langkah selanjutnya adalah memahami bagaimana mengelola sumber daya tersebut secara logis. Investasi bukan tentang menyerang secara membabi buta ke pasar keuangan, melainkan tentang alokasi sumber daya yang strategis.\n\n### 2.1. Analogi Komandan dan Prajurit\n\nBayangkan diri Anda sebagai seorang komandan militer yang memiliki 30 juta 'prajurit' (rupiah). Seorang komandan yang buruk akan mengirim seluruh pasukannya ke garis depan tanpa perlindungan, yang dalam dunia keuangan disebut sebagai spekulasi murni. Satu serangan balik dari musuh (penurunan pasar) akan memusnahkan seluruh pasukan tersebut, dan sang komandan tidak akan memiliki kesempatan untuk bangkit kembali.\n\nSebaliknya, komandan yang bijaksana akan membagi pasukannya ke dalam beberapa divisi fungsional:\n\n1. **Divisi Konstruksi Benteng (Dana Darurat):** Pasukan ini bertugas membangun parit dan tembok pertahanan agar jika terjadi serangan mendadak (sakit, kecelakaan, atau kehilangan pekerjaan), markas utama tetap aman.\n\n2. **Divisi Penjaga Gerbang (Asuransi):** Pasukan ini berfungsi sebagai perisai yang siap menghadang peluru biaya medis atau kerugian aset yang tidak terduga, sehingga tabungan utama tidak perlu dikorbankan.\n\n3. **Divisi Pengintai (Saham):** Pasukan yang bergerak agresif ke wilayah baru untuk membawa pulang keuntungan dari pertumbuhan bisnis dunia.\n\n4. **Divisi Penjaga Cadangan (Emas):** Pasukan elit yang tetap diam di tempat untuk memastikan stabilitas nilai saat terjadi kekacauan atau badai ekonomi.\n\n### 2.2. Dana Darurat sebagai Parit Pertahanan\n\nTanpa dana darurat, bangunan finansial seseorang berdiri di atas pasir yang tidak stabil. Dana darurat adalah instrumen likuid yang harus tersedia segera saat krisis terjadi. Di Indonesia, standar ideal dana darurat bervariasi tergantung status tanggungan individu:\n\n- **Belum Menikah:** Minimal 3 hingga 6 kali pengeluaran bulanan.\n- **Sudah Menikah:** Minimal 6 kali pengeluaran bulanan.\n- **Sudah Menikah dengan Anak:** Minimal 9 hingga 12 kali pengeluaran bulanan.\n\nLogika di balik besaran ini adalah untuk memberikan waktu bernapas bagi seseorang guna memulihkan kondisi ekonominya tanpa harus menjual aset investasinya di harga rendah atau terjerat utang berbunga tinggi.\n\n### 2.3. Asuransi: Mekanisme Transfer Risiko\n\nRisiko adalah ketidakpastian yang dapat berdampak negatif pada tujuan finansial. Manajemen risiko tidak bertujuan untuk menghilangkan risiko sama sekali, karena itu mustahil, melainkan untuk memilih risiko mana yang bisa kita tanggung dan mana yang harus kita transfer. Asuransi adalah alat untuk mentransfer risiko finansial yang besar (seperti biaya rumah sakit miliaran rupiah atau kematian pencari nafkah utama) kepada perusahaan asuransi dengan membayar premi yang relatif kecil.\n\nDalam piramida perencanaan keuangan Indonesia, proteksi melalui asuransi kesehatan berada di lapisan dasar bersama manajemen arus kas.\n\n#tab\nPerbandingan Strategi Risiko|Tanpa Proteksi|Dengan Proteksi\nDampak sakit kritis|Bangkrut total|Klaim asuransi, tabungan aman\nKehilangan pekerjaan|Jual aset rugi|Dana darurat 6 bulan",
    
    bab2: "## III. Alokasi Aset: Strategi Penyerangan dan Pertahanan Portofolio\n\nAlokasi aset adalah keputusan paling penting yang akan menentukan lebih dari 90% variasi imbal hasil portofolio jangka panjang. Ini adalah seni menempatkan prajurit finansial kita pada posisi yang tepat.\n\n### 3.1. Emas sebagai 'Prajurit Penjaga'\n\nEmas telah diakui selama ribuan tahun sebagai penyimpan nilai yang stabil. Secara historis, satu ons emas mampu membeli sekitar 400 potong roti sejak zaman kuno hingga sekarang, menunjukkan kemampuannya dalam menjaga daya beli melintasi milenium.\n\n### 3.2. Saham sebagai 'Prajurit Pengintai' dan Pertumbuhan\n\nJika emas adalah penjaga, maka saham adalah mesin pertumbuhan. Membeli saham berarti memiliki bagian dari sebuah bisnis produktif. Saham memungkinkan investor untuk menikmati hasil dari kemajuan teknologi, inovasi produk, dan efisiensi manajemen perusahaan-perusahaan terbaik di dunia.\n\n#tab\nPerbandingan Aset|Peran|Risiko|Return jangka panjang\nEmas|Lindung nilai|Rendah|~7-8% (historis)\nSaham|Pertumbuhan|Tinggi|~10%+",
    
    bab3: "## IV. Kekuatan Waktu: Keajaiban Dunia Kedelapan\n\nDalam matematika keuangan, variabel yang paling berpengaruh bukanlah jumlah modal yang dimasukkan, melainkan durasi atau waktu investasi. Hal ini tercermin dalam rumus bunga berbunga (*compound interest*). Karena waktu berada pada posisi pangkat (eksponen), peningkatan kecil pada waktu akan menghasilkan ledakan pertumbuhan yang masif di akhir periode.\n\n### 4.1. Analogi Bola Salju dan Satu Butir Beras\n\nProses pertumbuhan ini sering dianalogikan dengan bola salju yang menggelinding dari puncak bukit. Pada awalnya, bola tersebut tampak kecil dan tumbuh sangat lambat. Namun, semakin jauh bola itu menggelinding, semakin besar permukaannya untuk menangkap salju baru, hingga akhirnya ia tumbuh menjadi raksasa dengan kecepatan yang meningkat secara eksponensial tanpa membutuhkan dorongan tambahan.\n\n### 4.2. Perbandingan Realistis: Mulai Cepat vs. Mulai Lambat\n\nPentingnya waktu dapat dilihat dari perbandingan antara dua investor imajiner, Sally dan Mike:\n\n- **Sally (Mulai di usia 20):** Menginvestasikan Rp1.000.000 per bulan selama 10 tahun, lalu berhenti menabung tetapi membiarkan investasinya tetap tumbuh dengan asumsi imbal hasil 10% per tahun hingga usia 60 tahun.\n- **Mike (Mulai di usia 40):** Menginvestasikan Rp1.000.000 per bulan secara konsisten selama 20 tahun hingga usia 60 tahun dengan asumsi imbal hasil yang sama.\n\n#tab\nPerbandingan Sally vs Mike|Usia Mulai|Total Modal Setor|Kekayaan Usia 60\nSally|20 Tahun|Rp120.000.000|~Rp7.000.000.000\nMike|40 Tahun|Rp240.000.000|~Rp700.000.000\n\nKesimpulan logisnya sederhana: Memulai dengan jumlah kecil di usia muda jauh lebih kuat daripada memulai dengan jumlah besar di usia tua.",

    bab4: "## V. Psikologi Investor: Menaklukkan Musuh di Dalam Diri\n\nKesuksesan finansial sering kali lebih ditentukan oleh perilaku dan pengendalian emosi daripada kecerdasan intelektual atau gelar akademis. Banyak orang gagal bukan karena mereka tidak mengerti pasar, tetapi karena mereka tidak mampu mengelola psikologi mereka sendiri.\n\n### 5.1. Delayed Gratification: Tes Marshmallow Finansial\n\nKemampuan untuk menunda kenikmatan (*delayed gratification*) adalah prediktor utama kesuksesan finansial jangka panjang. Investor yang sukses melihat uang 30 juta sebagai 'bisa jadi berapa dalam 10 tahun ke depan?', sementara orang dengan pola pikir pendek melihatnya sebagai 'bisa beli motor apa sekarang?'.\n\n#tab\nNoise vs Signal|Karakteristik|Respon Investor Bijak\nNoise|Fluktuasi jangka pendek, dipicu emosi & berita kecil|Diabaikan; tidak mengubah rencana awal\nSignal|Tren jangka panjang, dipicu kinerja bisnis nyata|Evaluasi portofolio tahunan",

    bab5: "## VI. Kerangka Kerja Praktis: Piramida Keuangan Indonesia\n\nUntuk menerapkan seluruh konsep ini secara sistematis, kita dapat menggunakan model Piramida Perencanaan Keuangan yang diakui di Indonesia. Struktur ini memastikan bahwa setiap langkah pembangunan kekayaan memiliki fondasi yang kokoh sebelum melangkah ke tahap yang lebih berisiko.\n\n### 6.1. Lapisan 1: Keamanan Finansial (Fondasi)  \nArus kas positif, manajemen utang, dana darurat. \n### 6.2. Lapisan 2: Proteksi Kekayaan (Asuransi) \n### 6.3. Lapisan 3: Akumulasi Kekayaan (Investasi) \n### 6.4. Lapisan 4: Distribusi dan Pensiun \n\n#tab\nTingkatan Piramida|Prioritas Utama|Indikator Keberhasilan\nDasar Bawah|Cash Flow & Dana Darurat|Arus kas surplus + dana darurat penuh\nDasar Atas|Proteksi (Asuransi)|Premi terbayar & cakupan memadai\nTengah|Investasi Tujuan (Rumah, Sekolah)|Target tercapai tepat waktu\nAtas|Dana Pensiun & Passive Income|Aset menghasilkan arus kas > pengeluaran bulanan",

    bab6: "## VII. Implementasi Strategis: Langkah Menuju Kemandirian\n\n### 7.1. Prinsip 'Bayar Dirimu Sendiri Terlebih Dahulu'\nPendapatan - Tabungan/Investasi = Pengeluaran. Sisihkan minimal 10-20% begitu gaji diterima.\n### 7.2. Metode Budgeting 50/30/20\n50% kebutuhan, 30% keinginan, 20% tabungan & investasi.\n### 7.3. Konsistensi di Atas Intensitas\n\nKeberhasilan bukan tentang satu transaksi besar, melainkan memasukkan rutin setiap bulan. Waktu di dalam pasar lebih penting daripada timing pasar.",

    bab7: "## VIII. Kesimpulan: Menjadi AI bagi Hidup Sendiri\n\nInvestasi adalah cara kita menghargai diri kita di masa depan. Kebebasan sejati bukan tentang memiliki banyak uang untuk dibelanjakan, melainkan tentang memiliki banyak pilihan dalam hidup. Perjalanan menuju kebebasan finansial dimulai dengan satu langkah logis hari ini: berhenti memakan 'benih' dan mulailah menanam 'hutan' masa depan Anda.\n\n#tab\nIntisari|Pesan Utama\nFilosofi|Investasi = membeli kembali waktu\nRisiko|Benteng (dana darurat) + asuransi\nAlokasi|Emas (penjaga) + Saham (pertumbuhan)\nWaktu|Mulai muda, biarkan compounding bekerja"
};

const closingData = {
    judul: "Menjadi AI bagi Hidup Sendiri",
    konten: [
        "Sebagai manusia yang memiliki aspirasi besar, investasi adalah tiket pesawat menuju kebebasan. Kita harus belajar bekerja secara otonom, logis, disiplin, berdasarkan data, bukan emosi sesaat.",
        "Investasi adalah cara kita menghargai diri di masa depan. Kebebasan sejati memiliki banyak pilihan dalam hidup. Dengan membangun benteng risiko, mengalokasikan aset secara bijaksana, dan membiarkan waktu bekerja, kita sedang membangun bangunan hidup yang tak runtuh oleh badai ekonomi.",
        "Perjalanan menuju kebebasan finansial dimulai dengan satu langkah logis hari ini: berhenti memakan 'benih' dan mulailah menanam 'hutan' masa depan Anda."
    ]
};

// Konfigurasi bab
const chapters = [
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

// parser #tab: mengubah marker menjadi widget tab interaktif
function parseTabMarkup(htmlContent) {
    const regex = /#tab\s*\n([\s\S]*?)(?=\n\n|\n<\/div>|$)/g;
    return htmlContent.replace(regex, (match, tableBlock) => {
        const lines = tableBlock.trim().split('\n').filter(l => l.trim());
        if (lines.length < 2) return match;
        const headers = lines[0].split('|').map(h => h.trim());
        const rows = lines.slice(1).map(line => line.split('|').map(c => c.trim()));
        const tabId = 'tab_' + Math.random().toString(36).substr(2, 8);
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
        return `<div class="tab-widget" data-tab-id="${tabId}">${tabHeadersHtml}${panesHtml}</div>`;
    });
}

// Membangun halaman berdasarkan konten
function renderPage(pageId) {
    const pageDiv = document.getElementById(pageId);
    if (!pageDiv) return;

    let rawContent = "";
    if (pageId === "pendahuluan") {
        let introHtml = `<div class="content-card"><h1>${mainData.pendahuluan.judul}</h1>`;
        mainData.pendahuluan.konten.forEach(item => {
            if (item.jenis === "paragraf") introHtml += `<p>${item.teks}</p>`;
            else if (item.jenis === "subjudul") introHtml += `<h3>${item.teks}</h3>`;
            else if (item.jenis === "contoh") introHtml += `<p><em>${item.teks}</em></p>`;
        });
        introHtml += `</div>`;
        rawContent = introHtml;
    } 
    else if (pageId === "kesimpulan") {
        let concHtml = `<div class="content-card"><h1>✨ ${closingData.judul}</h1>`;
        closingData.konten.forEach(par => concHtml += `<p>${par}</p>`);
        concHtml += `<p style="margin-top:2rem; font-weight:500;">Terima kasih telah belajar. Mulailah investasi hari ini, sekecil apapun.</p></div>`;
        rawContent = concHtml;
    }
    else if (babData[pageId]) {
        let bodyText = babData[pageId];
        let processed = bodyText.replace(/## (.*?)\n/g, '<h2>$1</h2>').replace(/### (.*?)\n/g, '<h3>$1</h3>').replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
        let fullHtml = `<div class="content-card">${processed}</div>`;
        rawContent = fullHtml;
    } else {
        rawContent = `<div class="content-card"><p>Konten sedang disiapkan.</p></div>`;
    }
    const withTabs = parseTabMarkup(rawContent);
    pageDiv.innerHTML = withTabs;

    // pasang event listener untuk tab setelah render
    pageDiv.querySelectorAll('.tab-widget').forEach(widget => {
        const btns = widget.querySelectorAll('.tab-btn');
        const panes = widget.querySelectorAll('.tab-pane');
        btns.forEach(btn => {
            btn.removeEventListener('click', (e) => {});
            btn.addEventListener('click', () => {
                const idx = btn.getAttribute('data-tab-idx');
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                panes.forEach(pane => {
                    pane.classList.remove('active-pane');
                    if (pane.getAttribute('data-pane-idx') === idx) pane.classList.add('active-pane');
                });
            });
        });
    });
    attachNavigation(pageId);
}

function attachNavigation(currentId) {
    const pageDiv = document.getElementById(currentId);
    let existingNav = pageDiv.querySelector('.custom-nav-container');
    if (existingNav) existingNav.remove();
    const index = chapters.findIndex(ch => ch.id === currentId);
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

function navigateTo(pageId, pushState = true) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        if (!targetPage.innerHTML.trim() || targetPage.innerHTML.includes('Konten sedang disiapkan')) renderPage(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (pushState) history.pushState({ page: pageId }, '', `#${pageId}`);
    }
    closeSidebar();
    updateMenuVisibility(pageId !== 'homePage');
}

// menu visibility: sembunyikan tombol menu di homepage
function updateMenuVisibility(show) {
    const menuBtn = document.getElementById('menuToggleBtn');
    if (show) menuBtn.style.display = 'flex';
    else menuBtn.style.display = 'none';
}

let darkMode = localStorage.getItem('theme') === 'dark';
function applyTheme() {
    if (darkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    const themeIcon = document.getElementById('themeToggle');
    themeIcon.textContent = darkMode ? '☀️' : '🌙';
}
function toggleTheme() { darkMode = !darkMode; applyTheme(); }

function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('show');
    document.querySelector('.menu-btn').classList.add('morph-active');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
    document.querySelector('.menu-btn')?.classList.remove('morph-active');
}
// Sidebar list
function buildSidebar() {
    const ul = document.getElementById('chapterSidebarList');
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

// Canvas background moving bars
const canvas = document.getElementById('bgCanvas');
let ctx = canvas.getContext('2d');
let bars = [];
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initBars();
}
function initBars() {
    bars = [];
    let count = Math.max(20, Math.floor(canvas.width / 50));
    for (let i=0; i<count; i++) {
        bars.push({
            x: i * 48 + 20,
            height: Math.random() * canvas.height * 0.4 + 30,
            color: Math.random() > 0.6 ? '#4C9A6F' : '#D4AF37'
        });
    }
}
function drawBars() {
    if (!ctx) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);
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

// load semua konten awal
function initApp() {
    applyTheme();
    buildSidebar();
    chapters.forEach(ch => renderPage(ch.id));
    document.getElementById('startBtn').addEventListener('click', () => {
        document.getElementById('homePage').classList.remove('active');
        navigateTo('pendahuluan');
    });
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('menuToggleBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('open')) closeSidebar();
        else openSidebar();
    });
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
    window.addEventListener('popstate', (e) => {
        let hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            navigateTo(hash, false);
        } else {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById('homePage').classList.add('active');
            updateMenuVisibility(false);
        }
    });
    if(window.location.hash) {
        let hash = window.location.hash.slice(1);
        if(document.getElementById(hash)) {
            document.getElementById('homePage').classList.remove('active');
            navigateTo(hash, false);
        }
    }
    updateMenuVisibility(false);
    resizeCanvas();
    drawBars();
}
window.addEventListener('resize', () => { resizeCanvas(); });
initApp();
