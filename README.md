# XessOne Status

Halaman status real-time untuk platform XessOne — monitoring uptime 9 node global dan layanan utama.

🌐 **[status.xessone.com](https://status.xessone.com)**

---

## Fitur

- ✅ Status uptime per node (SGP, LAX, FRA, NRT, SYD, EWR, ORD, + 2)
- 📡 Monitoring layanan: Dashboard, SSO, AI Gateway, Mail, DNS
- 🕒 Histori incident
- 🔔 Publik — tidak perlu login

## Tech Stack

- **Runtime:** Bun
- **Framework:** Next.js 16
- **Deploy:** sgp1, port 3003

## Setup Lokal

```bash
git clone https://github.com/xessone/xessone-status.git
cd xessone-status
bun install
bun run dev  # http://localhost:3003
```

## Deploy

```bash
ssh root@45.77.37.1 "cd /opt/xessone/status && git pull && bun install && bun run build && systemctl restart xessone-status"
```

Server: `root@45.77.37.1` | Path: `/opt/xessone/status` | Service: `xessone-status` | Port: `3003`

## Lisensi

Proprietary — © [XessOne](https://xessone.com). All rights reserved.
