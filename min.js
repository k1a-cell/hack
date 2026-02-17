var intervalid = window.setInterval(updateScreen, 200)
var console = document.getElementById("console")

var txt = [
    "[SYSTEM]: INITIALIZING SECURE UPLINK...",
    "[STATUS]: ESTABLISHING TUNNEL VIA 127.0.0.1:8080",
    "[DEBUG]: BRIDGING ENCRYPTED PACKETS... DONE.",
    "[INPUT]: CREDENTIALS RECEIVED.",
    "[TRACE]: MD5_HASH: 7e7f603a89098c437996a60e0a5c0b0a",
    "[ACTION]: DECRYPTING RSA-4096 BITSTREAM...",
    "Phase 2: System Infiltration",
    "> BYPASSING KERNEL FIREWALL... [SUCCESS]",
    "> OVERRIDING PERMISSION GATEWAY... [GRANTED]",
    "> MOUNTING VIRTUAL DRIVE /DEV/SDA1/USER_DATA",
    "--------------------------------------------------",
    "IDENTIFIED: USER_%USERNAME%",
    "ACCESS_LEVEL: LEVEL 4 (ADMINISTRATOR)",
    "SESSION_TOKEN: 0x88F_BATT_99",
    "--------------------------------------------------",
    "Phase 3: Post-Login Environment Load",
    "[NETWORK]: SCANNING FOR ACTIVE NODES...",
    "[NODE 1]: 192.168.1.45 - ONLINE",
    "[NODE 2]: 10.0.0.122 - ENCRYPTED",
    "LOADED MODULES:",
    "* Stealth_Protocol.v2.1",
    "* Deep_Packet_Inspection_Kit",
    "* Neural_Net_Bypass_v4",
    "[WARNING]: SYSTEM DETECTED SHADOW LOGINS. CLEANSING AUDIT LOGS...",
    "[CLEANUP]: LOGS WIPED. NO TRACE REMAINING.",
    "WELCOME BACK, OPERATIVE.",
    "AWAITING COMMAND_",
    "SECURE_UPLINK: ENCRYPT://NODE_22.98.05.118",
    "AUTH_HANDSHAKE: ********** [SALTED_HASH_SHA256] PRIORITY 0",
    "RETRY: RSA_KEY_BYPASS_v4.2",
    "SUDO:> /SYS/BIN/INIT_SHELL/ --INTERACTIVE --ROOT",
    "================================================",
    "Priority 0 // remote / intercepting...",
    "tunneling via proxy_chain...",
    "HANDSHAKE CAPTURED (01:AF:3E:99:11:BC)",
    "EXTRACTING TOKEN (session_id=882930411)",
    "INJECTING PAYLOAD (root_kit_stealth.so)",
    "..",
    "..",
    "EXPLOIT.EXE -v -f --no-logs",
    "...escalating privileges...",
    "...root access confirmed...",
    "TERMINAL/> DEPLOY BACKDOOR_LISTENER",
    "SCAN: __ 0100.0000.0880.0443 [HTTPS]",
    "SCAN: __ 0020.0000.0221.0022 [SSH]",
    "SCAN: __ 0001.0000.0445.0445 [SMB]",
    "SCAN: __ 0012.0000.0330.3306 [SQL]",
    "SCAN: __ 0100.0000.0880.0080 [HTTP]",
    "SCAN: __ 0020.0000.0543.5432 [POSTGRES]"
]

var docfrag = document.createDocumentFragment()

function updateScreen() {
    txt.push(txt.shift())
    txt.forEach(function(e) {
        var p = document.createElement("p")
        p.textContent = e
        docfrag.appendChild(p)
    })
    while (console.firstChild) {
        console.removeChild(console.firstChild)
    }
    console.appendChild(docfrag)
}
