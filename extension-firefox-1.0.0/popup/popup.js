import { r } from '../chunks/browser-polyfill-7db03db5.js';

const e=document.getElementById("rss");e.addEventListener("input",(()=>{r.storage.sync.set({rss:e.value});})),r.storage.sync.get("rss").then((s=>{s.rss&&(e.value=s.rss);})),r.storage.onChanged.addListener((s=>{s.rss&&(e.value=s.rss.newValue);}));
