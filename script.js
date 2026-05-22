// Theme Changer Core Engine
function switchTheme(themeName) {
    document.body.className = ''; 
    document.body.classList.add(themeName);
    localStorage.setItem('activeTheme', themeName);
}

// Persist Selected Theme on Reload
if(localStorage.getItem('activeTheme')) {
    switchTheme(localStorage.getItem('activeTheme'));
}

function toggleDropdown() {
    const menu = document.getElementById('info-dropdown');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Secret Trigger Counter for Admin View
let clickCount = 0;
function triggerAdminCounter() {
    clickCount++;
    if(clickCount >= 5) {
        clickCount = 0;
        let pass = prompt("ENTER SECRET ENCRYPTION PASS:");
        if(pass === "admin legend12345") {
            document.getElementById('admin-panel').style.display = 'block';
            document.getElementById('admin-panel').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("ACCESS DENIED.");
        }
    }
}

// Persistent Master Admin Changes Saved local
function saveGlobalNotice() {
    const val = document.getElementById('admin-desc').value.trim();
    if(val) {
        localStorage.setItem('sysNotice', val);
        loadGlobalNotice();
        alert("Broadcast notification saved successfully.");
    }
}

function loadGlobalNotice() {
    const notice = localStorage.getItem('sysNotice');
    if(notice) {
        const box = document.getElementById('dynamic-announcement');
        box.innerText = `[SYSTEM NOTICE]: ${notice}`;
        box.style.display = 'block';
    }
}

function deployNewProject() {
    const title = document.getElementById('proj-title').value.trim();
    const link = document.getElementById('proj-link').value.trim();
    if(!title || !link) return alert("Fill fields perfectly.");

    let projects = JSON.parse(localStorage.getItem('savedCards')) || [];
    projects.push({ title, link });
    localStorage.setItem('savedCards', JSON.stringify(projects));
    renderProjectCards();
}

function renderProjectCards() {
    let projects = JSON.parse(localStorage.getItem('savedCards')) || [];
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    projects.forEach(p => {
        container.innerHTML += `
            <div class="project-card">
                <h4 style="color:var(--glow-color); margin-bottom:8px;">${p.title}</h4>
                <a href="${p.link}" target="_blank" class="cyber-btn" style="padding:5px; font-size:0.8rem; text-align:center; display:block; text-decoration:none;">Open Project</a>
            </div>
        `;
    });
}

// Running Core Boot Setup
window.onload = function() {
    loadGlobalNotice();
    renderProjectCards();
};

// Exploit Sequence Generator with Exact 2 Minutes Logging Output Setup
function generateHackerLogs(num) {
    let list = [
        `[*] Initializing connection sequence to remote communication hubs...`,
        `[*] Routing via proxy arrays to preserve encryption standards...`,
        `[+] Secure Handshake completed with Meta core routing gateways.`
    ];
    for(let i = 1; i <= 150; i++) {
        list.push(`[~] [BATCH-METRIC #${i*3}] Sending overload script clusters to target: ${num}`);
        if(i % 10 === 0) list.push(`[!] Account Status validation loops running... Generating spam spikes...`);
        if(i % 25 === 0) list.push(`[WARNING] Adapting node token configuration maps to prevent tracking limits.`);
    }
    list.push(`[*] Bundling active report instances... Finalizing request blocks...`);
    list.push(`[+] Request delivered successfully to system verification modules.`);
    return list;
}

function executeCyberSequence() {
    const num = document.getElementById('wa-number').value.trim();
    if(!num) return alert("Target configuration number cannot be empty.");

    document.getElementById('setup-view').style.display = 'none';
    document.getElementById('p-box').style.display = 'block';
    document.getElementById('status-pct').style.display = 'block';
    document.getElementById('terminal-panel').style.display = 'block';

    const logs = generateHackerLogs(num);
    const stream = document.getElementById('log-stream');
    const fill = document.getElementById('p-fill');
    const pct = document.getElementById('status-pct');
    let idx = 0;

    // 155 log strings total, ~780ms delay intervals build a full exact 2 Minutes animation layer
    const intervalSpeed = 780; 

    function printHackerStream() {
        if(idx < logs.length) {
            let row = document.createElement('div');
            row.className = 'log-row';
            row.innerText = logs[idx];
            stream.appendChild(row);
            document.getElementById('terminal-panel').scrollTop = document.getElementById('terminal-panel').scrollHeight;

            let percentage = Math.floor(((idx + 1) / logs.length) * 100);
            fill.style.width = `${percentage}%`;
            pct.innerText = `OVERLOAD ATTACK IN PROGRESS: ${percentage}%`;

            idx++;
            setTimeout(printHackerStream, intervalSpeed);
        } else {
            document.getElementById('success-banner').style.display = 'block';
        }
    }
    printHackerStream();
}
