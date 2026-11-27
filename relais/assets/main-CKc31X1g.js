import"./modulepreload-polyfill-P2Xu9kJm.js";import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./crm-D6aOXXtp.js";var l=`relais-crm-dashboard-espace`,u=10,d=matchMedia(`(prefers-reduced-motion: reduce)`).matches,f=(e=``)=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),p=e=>e===e.toUpperCase()||e===e.toLowerCase()?e.toLowerCase().replace(/(^|[\s-])\p{L}/gu,e=>e.toUpperCase()):e,m=e=>e.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(``),h=[`Janv`,`Févr`,`Mars`,`Avr`,`Mai`,`Juin`,`Juil`,`Août`,`Sept`,`Oct`,`Nov`,`Déc`],g={todo:`var(--muted)`,talk:`#8db4ff`,followup:`var(--accent)`,won:`var(--mint)`,lost:`#ff6a5e`},_=e=>Math.floor((Date.now()-new Date(e).getTime())/864e5);function v(e,n){let r=n===`all`?e:e.filter(e=>e.space===n),a=e=>r.filter(t=>t.stage===e).length,l=a(`won`),v=a(`lost`),y=r.filter(o),b=r.filter(e=>e.stage!==`won`&&e.stage!==`lost`),x=l+v?Math.round(l/(l+v)*100):0,S=new Date,C=Array.from({length:6},(e,t)=>new Date(S.getFullYear(),S.getMonth()-5+t,1)),w=C.map(e=>r.filter(t=>{let n=new Date(t.createdAt);return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()}).length),T=Math.max(1,...w),E=[...y.map(e=>({p:e,why:`Relance prévue le ${e.followUp.split(`-`).reverse().join(`/`)}`,hot:!0})),...r.filter(e=>e.stage===`todo`&&!o(e)).sort((e,t)=>e.createdAt.localeCompare(t.createdAt)).map(e=>({p:e,why:`À contacter · ajouté il y a ${_(e.createdAt)} j`,hot:_(e.createdAt)>3}))].slice(0,6),D=[...b].sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt)),O=Math.max(1,...i.map(e=>a(e.id))),k=(e,t,n,r=``,i=``)=>`<div class="kpi ${i}"><span class="kpi-label">${e}</span><b data-count="${t}" data-suffix="${r}">${d?t+r:`0`+r}</b><small>${n}</small></div>`,A=c.map(t=>{let n=e.filter(e=>e.space===t.id).length,r=e.filter(e=>e.space===t.id&&e.stage!==`won`&&e.stage!==`lost`).length;return`<div class="space-card${n?``:` empty-space`}">
        <div><b>${t.label}</b><small>${n?`${r} en cours sur ${n}`:`Aucun prospect pour l'instant`}</small></div>
        <span class="space-n" data-count="${n}">${d?n:0}</span>
        ${n?``:`<a class="btn" href="#prospects" data-add-space="${t.id}">+ Ajouter</a>`}
      </div>`}).join(``);return`
  <div class="dash">
    <div class="dash-bar">
      <div class="tabs" role="group" aria-label="Espace">
        ${[{id:`all`,label:`Tous`},...c].map(t=>`<button type="button" class="tab" data-filter="${t.id}" aria-pressed="${t.id===n}">${t.label}<span>${t.id===`all`?e.length:e.filter(e=>e.space===t.id).length}</span></button>`).join(``)}
      </div>
      <span class="dash-date">Mis à jour ${new Date().toLocaleString(`fr-FR`,{weekday:`long`,day:`numeric`,month:`long`,hour:`2-digit`,minute:`2-digit`})}</span>
    </div>

    <div class="kpis">
      ${k(`Prospects suivis`,r.length,`${b.length} en cours`)}
      ${k(`À contacter`,a(`todo`),`premier appel à passer`)}
      ${k(`En discussion`,a(`talk`),`échanges en cours`,``,`blue`)}
      ${k(`À relancer`,a(`followup`)+y.filter(e=>e.stage!==`followup`).length,y.length?`${y.length} relance(s) en retard`:`aucune en retard`,``,y.length?`warn`:``)}
      ${k(`Taux de signature`,x,`${l} gagné(s) · ${v} perdu(s)`,` %`,`mint`)}
    </div>

    <div class="grid">
      <section class="panel funnel">
        <header><h2>Pipeline</h2><small>par étape</small></header>
        <ul>
          ${i.map(e=>{let t=a(e.id);return`<li style="--c:${g[e.id]}">
                <span class="f-label">${e.label}</span>
                <span class="f-track"><i data-w="${t/O*100}" style="width:${d?t/O*100:0}%"></i></span>
                <b>${t}</b>
              </li>`}).join(``)}
        </ul>
      </section>

      <section class="panel goal">
        <header><h2>Objectif</h2><small>sites vendus</small></header>
        <div class="ring" style="--p:${d?Math.min(1,l/u):0}" data-p="${Math.min(1,l/u)}">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="52" class="ring-track" />
            <circle cx="60" cy="60" r="52" class="ring-fill" pathLength="1" />
          </svg>
          <div><b>${l}</b><small>/ ${u}</small></div>
        </div>
        <p class="goal-note">${l?`Plus que ${Math.max(0,u-l)} pour atteindre l'objectif.`:`Premier site à signer : tes prospects en discussion sont les plus proches.`}</p>
      </section>

      <section class="panel spaces">
        <header><h2>Espaces</h2><small>Commerces · Manufactures</small></header>
        ${A}
      </section>

      <section class="panel chart">
        <header><h2>Prospects ajoutés</h2><small>6 derniers mois</small></header>
        <div class="bars">
          ${w.map((e,t)=>`<div class="bar-col">
                <span class="bar-n">${e||``}</span>
                <span class="bar" data-h="${e/T*100}" style="height:${d?e/T*100:0}%"></span>
                <span class="bar-m">${h[C[t].getMonth()]}</span>
              </div>`).join(``)}
        </div>
      </section>

      <section class="panel todo">
        <header><h2>À faire</h2><small>${E.length?`${E.length} action(s)`:`rien d'urgent`}</small></header>
        ${E.length?`<ul>${E.map(({p:e,why:t,hot:n})=>`<li><a href="#prospects" data-open="${e.id}">
                    <span class="av">${f(m(p(e.company)))}</span>
                    <span><b>${f(p(e.company))}</b><small class="${n?`hot`:``}">${t}</small></span>
                  </a></li>`).join(``)}</ul>`:`<p class="none">Tout est à jour.</p>`}
      </section>

      <section class="panel active">
        <header><h2>Prospects actifs</h2><small>${D.length} en cours</small></header>
        ${D.length?`<table>
            <thead><tr><th>Entreprise</th><th>Étape</th><th>Espace</th><th>Modifié</th><th>Notes</th></tr></thead>
            <tbody>${D.map(e=>`<tr data-open="${e.id}" tabindex="0">
                  <td><span class="av">${f(m(p(e.company)))}</span>${f(p(e.company))}</td>
                  <td><span class="pill" style="--c:${g[e.stage]}">${t(e.stage)}</span></td>
                  <td>${c.find(t=>t.id===e.space)?.label??``}</td>
                  <td class="mono">${s(e.updatedAt)}</td>
                  <td class="notes-cell">${f(e.notes||`—`)}</td>
                </tr>`).join(``)}</tbody>
          </table>`:`<p class="none">Aucun prospect en cours dans cet espace.</p>`}
      </section>
    </div>
  </div>`}function y(e){if(d)return;requestAnimationFrame(()=>{e.querySelectorAll(`[data-w]`).forEach(e=>e.style.width=`${e.dataset.w}%`),e.querySelectorAll(`[data-h]`).forEach(e=>e.style.height=`${e.dataset.h}%`),e.querySelectorAll(`[data-p]`).forEach(e=>e.style.setProperty(`--p`,e.dataset.p))});let t=[...e.querySelectorAll(`[data-count]`)],n=performance.now(),r=e=>{let i=Math.min(1,(e-n)/900),a=1-(1-i)**3;for(let e of t)e.textContent=Math.round(Number(e.dataset.count)*a)+(e.dataset.suffix??``);i<1&&requestAnimationFrame(r)};requestAnimationFrame(r)}function b(e,t){let r=localStorage.getItem(l)||`all`;r!==`all`&&!c.some(e=>e.id===r)&&(r=`all`);let i=()=>{e.innerHTML=v(n(),r),y(e)},a=e=>{let n=e.target,a=n.closest(`[data-filter]`);if(a){r=a.dataset.filter,localStorage.setItem(l,r),i();return}let o=n.closest(`[data-add-space]`);if(o){e.preventDefault(),t(null,o.dataset.addSpace);return}let s=n.closest(`[data-open]`);s&&(e.preventDefault(),t(s.dataset.open))},o=e=>{let n=e.target.closest(`tr[data-open]`);n&&e.key===`Enter`&&t(n.dataset.open)};return e.addEventListener(`click`,a),e.addEventListener(`keydown`,o),i(),()=>{e.removeEventListener(`click`,a),e.removeEventListener(`keydown`,o)}}var x=`relais-crm-espace`,S=(e=``)=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function C(e){return e?/\s/.test(e)||!e.includes(`.`)?`<span>${S(e)}</span>`:`<a href="${S(/^https?:\/\//i.test(e)?e:`https://${e}`)}" target="_blank" rel="noopener">${S(e.replace(/^https?:\/\//i,``).replace(/\/$/,``))}</a>`:``}var w=`
<dialog class="dialog" data-dialog>
  <form method="dialog" class="form" data-form>
    <h2 data-form-title>Nouveau prospect</h2>
    <input type="hidden" name="id" />
    <label class="wide">Entreprise<input name="company" required autocomplete="off" /></label>
    <label>Contact<input name="contact" autocomplete="off" /></label>
    <label>Téléphone<input name="phone" type="tel" autocomplete="off" /></label>
    <label>E-mail<input name="email" type="email" autocomplete="off" /></label>
    <label>Site actuel<input name="website" autocomplete="off" /></label>
    <label>Étape<select name="stage">${i.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select></label>
    <label>Espace<select name="space">${c.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select></label>
    <label>Relancer le<input name="followUp" type="date" /></label>
    <label class="wide">Notes<textarea name="notes" rows="4"></textarea></label>
    <div class="form-actions wide">
      <button type="button" class="btn danger" data-delete hidden>Supprimer</button>
      <span></span>
      <button type="button" class="btn" data-cancel>Annuler</button>
      <button type="submit" class="btn primary">Enregistrer</button>
    </div>
  </form>
</dialog>`;function T(t,r={}){let l=n(),u=``,d=localStorage.getItem(x)||`commerces`;c.some(e=>e.id===d)||(d=`commerces`);let f=r.openId?l.find(e=>e.id===r.openId):void 0;f&&(d=f.space),r.newSpace&&(d=r.newSpace),t.innerHTML=`
    <div class="pipe">
      <div class="toolbar">
        <div class="tabs" data-tabs></div>
        <input class="search" type="search" placeholder="Rechercher un prospect…" data-search />
        <div class="tools">
          <button type="button" class="btn" data-export>Exporter</button>
          <label class="btn">Importer<input type="file" accept=".json,application/json" hidden data-import /></label>
          <button type="button" class="btn primary" data-new>+ Nouveau prospect</button>
        </div>
      </div>
      <div class="board" data-board></div>
    </div>
    ${w}`;let p=e=>t.querySelector(e),m=p(`[data-tabs]`),h=p(`[data-board]`),g=p(`[data-dialog]`),_=p(`[data-form]`),v=p(`[data-delete]`),y=()=>{a(l)||alert(`Impossible d'enregistrer dans ce navigateur. Pensez à exporter vos données.`)},b=e=>!u||[e.company,e.contact,e.email,e.phone,e.website,e.notes].join(` `).toLowerCase().includes(u);function T(){m.innerHTML=c.map(e=>{let t=l.filter(t=>t.space===e.id).length;return`<button type="button" class="tab" data-space="${e.id}" aria-pressed="${e.id===d}">${e.label}<span>${t}</span></button>`}).join(``),h.innerHTML=i.map(e=>{let t=l.filter(t=>t.space===d&&t.stage===e.id&&b(t)).sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt)),n=t.map(e=>{let t=[e.contact,e.phone].filter(Boolean).map(e=>S(e)).join(` · `),n=e.followUp&&e.stage!==`won`&&e.stage!==`lost`?`<div class="follow${o(e)?` due`:``}">${o(e)?`À relancer`:`Relancer le`} ${e.followUp.split(`-`).reverse().join(`/`)}</div>`:``;return`<article class="card" draggable="true" data-id="${e.id}" tabindex="0">
              <strong>${S(e.company)}</strong>
              ${t?`<div class="meta">${t}</div>`:``}
              ${e.email?`<div class="meta">${S(e.email)}</div>`:``}
              ${e.website?`<div class="meta">${C(e.website)}</div>`:``}
              ${e.notes?`<p class="note">${S(e.notes)}</p>`:``}
              ${n}
              <time>Modifié le ${s(e.updatedAt)}</time>
            </article>`}).join(``);return`<section class="col" data-stage="${e.id}">
          <header><h2>${e.label}</h2><span>${t.length}</span></header>
          <div class="cards">${n||`<div class="empty">Aucun prospect</div>`}</div>
        </section>`}).join(``)}function E(e){_.reset(),p(`[data-form-title]`).textContent=e?`Modifier le prospect`:`Nouveau prospect`,v.hidden=!e;let t=e??{stage:`todo`,space:d};for(let e of Array.from(_.elements))e.name&&e.name in t&&(e.value=String(t[e.name]??``));_.elements.namedItem(`id`).value=e?e.id:``,g.showModal()}let D=e=>{let t=e.target,n=t.closest(`[data-space]`);if(n){d=n.dataset.space,localStorage.setItem(x,d),T();return}if(t.closest(`[data-new]`))return E(null);if(t.closest(`[data-cancel]`))return g.close();if(t.closest(`[data-export]`)){let e=new Blob([JSON.stringify(l,null,2)],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`crm-sauvegarde-${new Date().toISOString().slice(0,10)}.json`,t.click(),URL.revokeObjectURL(t.href);return}if(t.closest(`[data-delete]`)){let e=_.elements.namedItem(`id`).value,t=l.find(t=>t.id===e);t&&confirm(`Supprimer « ${t.company} » ?`)&&(l=l.filter(t=>t.id!==e),y(),T(),g.close());return}let r=t.closest(`.card`);r&&t.tagName!==`A`&&E(l.find(e=>e.id===r.dataset.id)??null)},O=e=>{let t=e.target.closest(`.card`);t&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),E(l.find(e=>e.id===t.dataset.id)??null))},k=()=>{let t=Object.fromEntries(new FormData(_));for(let e in t)t[e]=t[e].trim();let n=new Date().toISOString(),r=l.find(e=>e.id===t.id);if(r)Object.assign(r,t,{updatedAt:n});else{let r=e({...t,id:crypto.randomUUID(),createdAt:n,updatedAt:n});r&&l.push(r)}y(),T()},A=e=>{u=e.target.value.trim().toLowerCase(),T()},j=async t=>{let n=t.target,r=n.files?.[0];if(r){try{let t=JSON.parse(await r.text());if(!Array.isArray(t))throw Error();let n=t.map(e).filter(e=>e!==null),i=e=>`${e.space}|${e.company.toLowerCase()}`;if(confirm(`AJOUTER ${n.length} prospect(s) à la liste actuelle ?\n(Les doublons sont ignorés.)\n\nOK = ajouter · Annuler = autres choix`)){let e=new Set(l.map(e=>e.id)),t=new Set(l.map(i)),r=n.filter(n=>!e.has(n.id)&&!t.has(i(n)));l.push(...r),y(),T(),alert(`${r.length} prospect(s) ajouté(s), ${n.length-r.length} doublon(s) ignoré(s).`)}else confirm(`REMPLACER toute la liste (${l.length} prospects) par ce fichier (${n.length}) ?`)&&(l=n,y(),T())}catch{alert(`Fichier invalide.`)}n.value=``}},M=``;return t.addEventListener(`click`,D),t.addEventListener(`keydown`,O),_.addEventListener(`submit`,k),p(`[data-search]`).addEventListener(`input`,A),p(`[data-import]`).addEventListener(`change`,j),h.addEventListener(`dragstart`,e=>{let t=e.target.closest(`.card`);t&&(M=t.dataset.id??``,e.dataTransfer?.setData(`text/plain`,M),t.classList.add(`dragging`))}),h.addEventListener(`dragover`,e=>{let t=e.target.closest(`.col`);t&&(e.preventDefault(),h.querySelectorAll(`.col.over`).forEach(e=>e!==t&&e.classList.remove(`over`)),t.classList.add(`over`))}),h.addEventListener(`drop`,e=>{let t=e.target.closest(`.col`);if(!t)return;e.preventDefault();let n=l.find(t=>t.id===(e.dataTransfer?.getData(`text/plain`)||M)),r=t.dataset.stage;n&&n.stage!==r&&(n.stage=r,n.updatedAt=new Date().toISOString(),y()),T()}),h.addEventListener(`dragend`,()=>{h.querySelectorAll(`.over, .dragging`).forEach(e=>e.classList.remove(`over`,`dragging`))}),T(),f?E(f):r.newSpace&&E(null),()=>{t.removeEventListener(`click`,D),t.removeEventListener(`keydown`,O)}}var E=[{id:`tableau`,label:`Tableau de bord`,module:``,title:`Tableau de bord`,sub:`Tes chiffres du moment, calculés à partir de tes prospects. Clique sur un prospect pour ouvrir sa fiche.`,icon:`<path d="M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z"/>`,notes:[]},{id:`prospects`,label:`Prospects`,module:``,title:`Prospects`,sub:`Ton pipeline de vente : glisse une carte pour changer d'étape, clique-la pour la modifier.`,icon:`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>`,notes:[]},{id:`leads`,label:`Attribution des leads`,module:`task-routing`,title:`Attribution des leads`,sub:`Chaque nouveau lead est analysé et confié au commercial le plus adapté, avec son score.`,icon:`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M21 12h-3M12 21v-3M3 12h3"/>`,notes:[`Balayage de l'équipe`,`Score par commercial`,`Vol vers le gagnant`,`Charge mise à jour`]},{id:`documents`,label:`Documents clients`,module:`foldwell`,title:`Documents clients`,sub:`Contrats, devis et visuels glissés dans des dossiers en verre qui s'ouvrent et s'illuminent.`,icon:`<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>`,notes:[`Glisser-déposer`,`Sélection multiple`,`Import depuis le bureau`,`Toast « Annuler »`]},{id:`budget`,label:`Budget commercial`,module:`budget-mixer`,title:`Budget commercial`,sub:`Le budget du mois en table de mixage : monter un poste baisse les autres, les vumètres montrent la dépense.`,icon:`<path d="M4 21V14M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>`,notes:[`Curseurs liés`,`Vumètres LED`,`Bouton des semaines`,`Alerte dépassement`]},{id:`creer`,label:`Créer`,module:`pour-menu`,title:`Créer`,sub:`Le bouton + verse un menu liquide : nouveau contact, nouvelle affaire, tâche ou devis.`,icon:`<path d="M12 5v14M5 12h14"/>`,notes:[`Menu liquide`,`Sous-menu des étapes`,`Survol qui glisse`,`Toast de création`]},{id:`acces`,label:`Accès rapide`,module:`glass-menu`,title:`Accès rapide`,sub:`Un menu burger en verre dépoli. Cliquez une entrée : la loupe glisse et vous emmène à la page.`,icon:`<path d="M4 7h16M4 12h16M4 17h16"/>`,notes:[`Menu en verre`,`Loupe liquide`,`Cliquable`,`Navigue dans le CRM`]}],D=e=>document.querySelector(e),O=D(`[data-nav]`),k=D(`[data-frame]`),A=D(`[data-crumb]`),j=D(`[data-title]`),M=D(`[data-sub]`),N=D(`[data-open]`),P=D(`[data-notes]`),F=e=>`./modules/${e.module}/index.html`;O.innerHTML=E.map(e=>`<a href="#${e.id}" data-page="${e.id}">
    <svg viewBox="0 0 24 24" aria-hidden="true">${e.icon}</svg><span>${e.label}</span>
  </a>`).join(``);var I=``,L,R={};function z(e,t){R=e?{openId:e}:{newSpace:t},location.hash===`#prospects`?(I=``,B()):location.hash=`prospects`}function B(){let e=location.hash.slice(1),t=E.find(t=>t.id===e)??E[0];if(t.id===I)return;I=t.id,O.querySelectorAll(`a`).forEach(e=>e.toggleAttribute(`aria-current`,e.dataset.page===t.id)),A.textContent=`Relais CRM / ${t.label}`,j.textContent=t.title,M.textContent=t.sub,N.hidden=!t.module,N.href=t.module?F(t):`#`;let n=r();if(P.innerHTML=(t.module||t.id===`tableau`?t.notes:[`${n.total} prospects`,`${n.todo} à contacter`,`${n.talk} en discussion`,`${n.followup} à relancer`,`${n.won} gagnés`]).map(e=>`<span>${e}</span>`).join(``),document.title=`${t.title} · Relais CRM`,L?.(),L=void 0,k.classList.toggle(`plain`,!t.module),t.id===`tableau`){L=b(k,z);return}if(!t.module){L=T(k,R),R={};return}let i=document.createElement(`iframe`);i.src=F(t),i.title=t.title,i.addEventListener(`load`,()=>i.classList.add(`ready`)),k.replaceChildren(i)}var V=[`tableau`,`leads`,`documents`,`budget`];addEventListener(`message`,e=>{if(e.origin!==location.origin)return;let t=e.data;t?.type===`crm-nav`&&typeof t.index==`number`&&V[t.index]&&(location.hash=V[t.index])}),addEventListener(`hashchange`,B),B();