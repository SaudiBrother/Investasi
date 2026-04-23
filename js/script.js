// Investment Learning SPA JavaScript Engine

// Theme Switching Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Menu Button Morphing Animation
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
});

// Screen Navigation System
const navigateTo = (page) => {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';
};

// JSON Content Loading and Parsing
const loadJSON = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

// #tab Parser for Comparison Tables
const createTable = (data) => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    for (let header of Object.keys(data[0])) {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    for (let row of data) {
        const tr = document.createElement('tr');
        for (let cell of Object.values(row)) {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
};

// Canvas Stock Chart Animation on Home Page
const drawChart = (data) => {
    const canvas = document.getElementById('stock-chart');
    const ctx = canvas.getContext('2d');
    // Example animation logic
    let x = 0;
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Redraw the chart with updated data
        x += 1;
        if (x < canvas.width) {
            requestAnimationFrame(animate);
        }
    };
    animate();
};

// Menu Sidebar Management
const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
};

// Responsive Menu Control
const updateMenuForResolution = () => {
    if (window.innerWidth < 768) {
        // Apply mobile menu logic
    } else {
        // Apply desktop menu logic
    }
};

window.addEventListener('resize', updateMenuForResolution);