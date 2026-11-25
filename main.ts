import { mkdirSync, writeFileSync } from 'node:fs';
// the entry is the account's own make.fun handle, one word
const HANDLE = 'om-senpai';
const ENTRY = HANDLE;
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${ENTRY}\n`);
