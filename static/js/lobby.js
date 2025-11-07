 <script>
    /* Data */
    const games=[
      {id:'dragons-fight',title:'Dragons Fight',provider:'SkyForge',jack:12860,cat:['all','slots','new'],hot:true,thumb:'./media/thumb/300x300/dragons-fight.jpeg'},
      {id:'fish-battle',title:'Fish Battle 5',provider:'DeepBlue Labs',jack:8640,cat:['all','fish'],hot:false,thumb:'./media/thumb/300x300/fish-battle-5.jpeg'},
      {id:'fish-eagle',title:'Fish Eagle Fight',provider:'DeepBlue Labs',jack:14250,cat:['all','fish','new'],hot:true,thumb:'./media/thumb/300x300/fish-eagle-fight.jpeg'},
      {id:'galaxy-shooter',title:'Galaxy Shooter',provider:'Nova Interactive',jack:19680,cat:['all','arcade'],hot:false,thumb:'./media/thumb/300x300/galaxy-shooter.jpeg'},
      {id:'kracky-king',title:'Kracky King 2',provider:'Arcadia',jack:10840,cat:['all','arcade'],hot:false,thumb:'./media/thumb/300x300/kracky-king-2.jpeg'},
      {id:'seven-crabs',title:'7 Crabs Party',provider:'Reef Studios',jack:9480,cat:['all','slots'],hot:false,thumb:'./media/thumb/300x300/7-crabs-party.jpeg'},
      {id:'reef-rush',title:'Fishing Dragnet',provider:'DeepBlue Labs',jack:11620,cat:['all','fish'],hot:true,thumb:'./media/thumb/300x300/fishing-dragnet.jpeg'},
      {id:'pilot',title:'Pilot',provider:'Arcadia',jack:15240,cat:['all','crash'],hot:true,thumb:'./media/thumb/300x300/pilot.jpeg'},
      {id:'frog-shot',title:'Frog Shot 2',provider:'Playtime Originals',jack:6120,cat:['all','slots'],hot:false,thumb:'./media/thumb/300x300/frog2shot.jpeg'},
      {id:'ocean-ib',title:'Ocean Boost',provider:'Nova Interactive',jack:7420,cat:['all','slots'],hot:false,thumb:'./media/thumb/300x300/ib_hfw.jpeg'}
    ];

    /* Marquee clone */
    (function(){const c=document.getElementById('ptuMarqueeContent'),k=document.getElementById('ptuMarqueeClone');if(c&&k)k.innerHTML=c.innerHTML})();

    /* Grid */
    const gridEl=document.getElementById('game-grid');
    const catBar=document.getElementById('category-bar');
    const searchEl=document.getElementById('search');
    const sortEl=document.getElementById('sort');
    const state={cat:'all',search:'',sort:'popular'};
    const fmt=n=>Intl.NumberFormat('en-US').format(n);

    function cardTemplate(g){
      return `<article class="card" data-id="${g.id}" data-cats="${g.cat.join(',')}">
        <div class="thumb">
          ${g.hot?'<div class="badge hot">HOT</div>':''}
          <div class="jack-micro"><svg width="14" height="14"><use href="#icon-chip"/></svg><span class="val">${fmt(g.jack)}</span></div>
          <img loading="lazy" src="${g.thumb}" alt="${g.title} thumbnail"/>
        </div>
        <div class="actions" aria-hidden="true">
          <button class="btn" data-action="play" data-id="${g.id}">Play</button>
          <button class="btn secondary" data-action="info" data-id="${g.id}">Info</button>
        </div>
        <div class="meta"><div class="title">${g.title}</div><div class="sub">${g.provider}</div></div>
      </article>`;
    }
    function applyFilters(list){
      const t=state.search.trim().toLowerCase();
      let f=list.filter(g=>state.cat==='all'||g.cat.includes(state.cat));
      if(t) f=f.filter(g=>(g.title+g.provider).toLowerCase().includes(t));
      switch(state.sort){
        case 'new': f.sort((a,b)=>Number(b.cat.includes('new'))-Number(a.cat.includes('new')));break;
        case 'az': f.sort((a,b)=>a.title.localeCompare(b.title));break;
        default: f.sort((a,b)=>Number(b.hot)-Number(a.hot)||b.jack-a.jack);
      }
      return f;
    }
    function renderGrid(){gridEl.setAttribute('aria-busy','true');gridEl.innerHTML=applyFilters(games).map(cardTemplate).join('');gridEl.setAttribute('aria-busy','false')}
    catBar.addEventListener('click',e=>{const c=e.target.closest('.chip');if(!c)return;catBar.querySelectorAll('.chip').forEach(b=>b.classList.remove('active'));c.classList.add('active');state.cat=c.dataset.cat;renderGrid()});
    searchEl.addEventListener('input',()=>{state.search=searchEl.value;renderGrid()});
    sortEl.addEventListener('change',()=>{state.sort=sortEl.value;renderGrid()});
    gridEl.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const {id,action}=b.dataset;if(action==='play'){console.log('Launch game:',id)}else{alert('Game info coming soon for '+id+'.')}});

    /* Ticker */
    const tIds=['bronze','silver','gold','plat'];const tDelta={bronze:4,silver:8,gold:16,plat:28};
    setInterval(()=>{tIds.forEach(k=>{const el=document.getElementById('ticker-'+k);if(!el)return;const base=parseInt(el.textContent.replace(/,/g,''),10);const next=base+Math.floor(Math.random()*tDelta[k]);el.textContent=fmt(next)})},1400);

    /* User + API */
    const user={id:null,name:'Player',email:'player@example.com',funBalance:100.00,bonusBalance:20,bonusActivated:false,extraBonusRedeemed:false,refCode:'ABC123'};
    const LS_KEY='ptu:user';
    function saveLocal(){localStorage.setItem(LS_KEY,JSON.stringify(user))}
    function loadLocal(){const s=localStorage.getItem(LS_KEY);if(s)Object.assign(user,JSON.parse(s))}
    async function api(path,options){
      try{
        const res=await fetch(path,{credentials:'include',...options});
        if(!res.ok) throw new Error(await res.text().catch(()=>res.statusText));
        const ct=res.headers.get('content-type')||'';return ct.includes('application/json')?res.json():res.text();
      }catch(err){return {__error:true,message:String(err.message||err)}}
    }
    async function bootstrapUser(){
      loadLocal();
      const me=await api('/api/me');
      if(!me?.__error&&me){Object.assign(user,me);saveLocal()}
      renderUser();
      renderRefBits();
      loadBonusHistory();
      syncBonusUI();
    }
    function renderUser(){
      document.getElementById('player-name').firstElementChild.textContent=user.name||'Player';
      document.getElementById('player-email').firstElementChild.textContent=user.email||'—';
      document.getElementById('player-fun').textContent=(Number(user.funBalance||0)).toFixed(2);
      document.getElementById('player-bonus').textContent=fmt(Number(user.bonusBalance||0));
      document.getElementById('fun-balance').textContent=(Number(user.funBalance||0)).toFixed(2);
      const bb=document.getElementById('bonus-balance');if(bb)bb.textContent=fmt(Number(user.bonusBalance||0));
    }

    /* Generic modal helpers */
    function openModal(el){el.classList.add('is-open');el.setAttribute('aria-hidden','false')}
    function closeModal(el){el.classList.remove('is-open');el.setAttribute('aria-hidden','true')}

    /* Profile modal */
    const modal=document.getElementById('profile-modal');const tabProfile=document.getElementById('tab-profile');const btnClose=document.getElementById('profile-close');

    /* Bonus modals */
    const bonusModal = document.getElementById('bonus-modal');
    const bonusClose = document.getElementById('bonus-close');
    const bonusAvail = document.getElementById('bonus-available');
    const bonusMsg   = document.getElementById('bonus-msg');
    const bonusActivateBtn = document.getElementById('bonus-activate-btn');
    const bonusOpenExtra   = document.getElementById('bonus-open-extra');

    const bonusCodeModal = document.getElementById('bonus-code-modal');
    const bonusCodeClose = document.getElementById('bonus-code-close');
    const extraForm      = document.getElementById('extra-code-form');
    const extraInput     = document.getElementById('extra-code-input');
    const extraCancel    = document.getElementById('extra-cancel');
    const bonusCodeMsg   = document.getElementById('bonus-code-msg');

    /* Set active tab helper */
    const allTabs=[...document.querySelectorAll('.tabbar .tab')];
    function setActiveTab(el){
      allTabs.forEach(t=>{t.classList.remove('active');t.setAttribute('aria-pressed','false')});
      el.classList.add('active');el.setAttribute('aria-pressed','true');
    }

    tabProfile.addEventListener('click',()=>{setActiveTab(tabProfile);openModal(modal)});
    btnClose.addEventListener('click',()=>closeModal(modal));
    modal.addEventListener('click',e=>{if(e.target===modal)closeModal(modal)});

    /* In-modal nav */
    const navBtns=[...document.querySelectorAll('.pill-link')];
    const views={home:document.getElementById('view-home'),email:document.getElementById('view-email'),password:document.getElementById('view-password'),ref:document.getElementById('view-ref')};
    function goto(view){Object.values(views).forEach(v=>v.classList.remove('is-active'));views[view].classList.add('is-active');navBtns.forEach(b=>b.setAttribute('aria-current',b.dataset.view===view?'page':'false'));if(view==='ref')loadBonusHistory()}
    navBtns.forEach(b=>b.addEventListener('click',()=>goto(b.dataset.view)));
    document.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>goto(b.dataset.goto)));
    document.querySelectorAll('[data-back]').forEach(b=>b.addEventListener('click',()=>goto(b.dataset.back)));

    /* Email */
    const emailForm=document.getElementById('form-email');const emailMsg=document.getElementById('email-msg');
    emailForm.addEventListener('submit',async e=>{
      e.preventDefault();emailMsg.textContent='';emailMsg.className='notice';
      const email=e.target.email.value.trim();if(!email){emailMsg.textContent='Enter an email.';emailMsg.classList.add('warn');return}
      const res=await api('/api/email',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})});
      if(res.__error){user.email=email;saveLocal();renderUser();emailMsg.textContent='Updated locally (offline).';emailMsg.classList.add('ok')}
      else{user.email=res.email||email;saveLocal();renderUser();emailMsg.textContent='Email updated.';emailMsg.classList.add('ok')}
    });

    /* Password */
    const passForm=document.getElementById('form-password');const passMsg=document.getElementById('pass-msg');
    passForm.addEventListener('submit',async e=>{
      e.preventDefault();passMsg.textContent='';passMsg.className='notice';
      const cur=e.target.current.value.trim(),next=e.target.next.value.trim(),conf=e.target.confirm.value.trim();
      if(!/^\d{6}$/.test(next)||!/^\d{6}$/.test(cur)){passMsg.textContent='Passwords must be 6 digits.';passMsg.classList.add('warn');return}
      if(next!==conf){passMsg.textContent='New passwords do not match.';passMsg.classList.add('warn');return}
      const res=await api('/api/password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({current:cur,next})});
      if(res.__error){passMsg.textContent='Password updated locally (offline).';passMsg.classList.add('ok')}
      else{passMsg.textContent='Password updated.';passMsg.classList.add('ok')}
      e.target.reset();
    });

    /* Ref System */
    const refMsg=document.getElementById('ref-msg');const promoMsg=document.getElementById('promo-msg');
    function refLink(){return `${location.origin}/?ref=${encodeURIComponent(user.refCode||'')}`}
    function renderRefBits(){
      document.getElementById('ref-code').textContent=user.refCode||'—';
      document.getElementById('ref-link-hint').textContent=user.refCode?`Share: ${refLink()}`:'';
    }
    document.getElementById('ref-copy').addEventListener('click',async ()=>{
      try{await navigator.clipboard.writeText(user.refCode||'');refMsg.textContent='Code copied.';refMsg.className='notice ok'}catch{refMsg.textContent='Copy failed.';refMsg.className='notice err'}
    });
    document.getElementById('ref-refresh').addEventListener('click',async ()=>{
      refMsg.textContent='';refMsg.className='notice';
      const res=await api('/api/referral/regenerate',{method:'POST'});
      if(res.__error){user.refCode=Math.random().toString(36).slice(2,8).toUpperCase();saveLocal();renderRefBits();refMsg.textContent='New code (offline).';refMsg.classList.add('ok')}
      else{user.refCode=res.refCode||res.code||user.refCode;saveLocal();renderRefBits();refMsg.textContent='New code generated.';refMsg.classList.add('ok')}
    });
    document.getElementById('ref-share').addEventListener('click',async ()=>{
      const url=refLink();
      if(navigator.share){try{await navigator.share({title:'Join me on Play-Time USA',text:'Use my code:',url});refMsg.textContent='Shared.';refMsg.className='notice ok'}catch{}}
      else{try{await navigator.clipboard.writeText(url);refMsg.textContent='Link copied.';refMsg.className='notice ok'}catch{refMsg.textContent='Share unavailable.';refMsg.className='notice warn'}}
    });
    document.getElementById('promo-activate').addEventListener('click',async ()=>{
      promoMsg.textContent='';promoMsg.className='notice';
      const code=document.getElementById('promo-input').value.trim();if(!code){promoMsg.textContent='Enter promo code.';promoMsg.classList.add('warn');return}
      const res=await api('/api/bonus/activate-code',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code})});
      if(res.__error){promoMsg.textContent='Activation failed (offline).';promoMsg.classList.add('err')}
      else{promoMsg.textContent='Promo activated.';promoMsg.classList.add('ok');document.getElementById('promo-input').value='';loadBonusHistory()}
    });
    document.getElementById('invite-btn').addEventListener('click',()=>document.getElementById('ref-share').click());
    document.getElementById('rules-toggle').addEventListener('click',()=>{const box=document.getElementById('rules-box');box.style.display=box.style.display==='none'?'block':'none'});

    async function loadBonusHistory(){
      const tbody=document.querySelector('#bonus-history tbody');tbody.innerHTML='';
      const res=await api('/api/bonuses/history');
      const rows = res?.__error ? [
        {receivedAt:'—',activatedAt:'—',wageredAt:'—',title:'Final bonus',value:'1.00 USD',info:'—',status:'Closed'}
      ] : (Array.isArray(res)?res:[]);
      rows.forEach(r=>{
        const tr=document.createElement('tr');
        const when=`Received: ${r.receivedAt||'—'}<br>Activated: ${r.activatedAt||'—'}<br>Wagered: ${r.wageredAt||'—'}`;
        tr.innerHTML=`<td>${when}</td><td>${r.title||'—'}</td><td>${r.value||'—'}</td><td>${r.info||'—'}</td><td>${r.status||'—'}</td>`;
        tbody.appendChild(tr);
      });
    }

    /* Bonus popups */
    function syncBonusUI(){
      document.getElementById('bonus-available').textContent = (Number(user.bonusBalance||0)).toFixed(2);
      document.getElementById('bonus-activate-btn').disabled = user.bonusActivated || Number(user.bonusBalance||0) <= 0;
      document.getElementById('bonus-msg').textContent = user.bonusActivated ? 'Already used.' : 'This bonus can be applied once.';
      document.getElementById('player-bonus').textContent = fmt(Number(user.bonusBalance||0));
      const bb=document.getElementById('bonus-balance'); if(bb) bb.textContent = fmt(Number(user.bonusBalance||0));
    }
    const tabBonus   = document.getElementById('tab-bonus');
    tabBonus.addEventListener('click',()=>{setActiveTab(tabBonus);syncBonusUI();openModal(bonusModal);});
    bonusClose.addEventListener('click',()=>closeModal(bonusModal));
    bonusModal.addEventListener('click',e=>{if(e.target===bonusModal)closeModal(bonusModal)});

    document.getElementById('bonus-open-extra').addEventListener('click',()=>{
      document.getElementById('bonus-code-msg').textContent='';
      document.getElementById('extra-code-input').value='';
      openModal(bonusCodeModal);
    });
    bonusCodeClose.addEventListener('click',()=>closeModal(bonusCodeModal));
    extraCancel.addEventListener('click',()=>closeModal(bonusCodeModal));
    bonusCodeModal.addEventListener('click',e=>{if(e.target===bonusCodeModal)closeModal(bonusCodeModal)});

    document.getElementById('bonus-activate-btn').addEventListener('click', async ()=>{
      bonusMsg.textContent=''; bonusMsg.className='notice';
      if(user.bonusActivated){bonusMsg.textContent='Already used.';bonusMsg.classList.add('warn');return}
      const amt = Number(user.bonusBalance||0);
      if(amt<=0){bonusMsg.textContent='No bonus available.';bonusMsg.classList.add('warn');return}
      const res = await api('/api/bonus/activate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({amount:amt})});
      if(res.__error){
        user.funBalance = Number(user.funBalance||0) + amt;
        user.bonusBalance = 0;
        user.bonusActivated = true;
        saveLocal(); renderUser(); syncBonusUI();
        bonusMsg.textContent='Applied locally (offline).'; bonusMsg.classList.add('ok');
      }else{
        const added = Number(res.amount||amt);
        user.funBalance = Number(user.funBalance||0) + added;
        user.bonusBalance = Number(res.remaining||0);
        user.bonusActivated = true;
        saveLocal(); renderUser(); syncBonusUI();
        bonusMsg.textContent='Bonus applied.'; bonusMsg.classList.add('ok');
      }
    });

    document.getElementById('extra-code-form').addEventListener('submit', async (e)=>{
      e.preventDefault(); bonusCodeMsg.textContent=''; bonusCodeMsg.className='notice';
      if(user.extraBonusRedeemed){bonusCodeMsg.textContent='Extra code already used.';bonusCodeMsg.classList.add('warn');return}
      const code = extraInput.value.trim().toUpperCase();
      if(!code){bonusCodeMsg.textContent='Enter a code.';bonusCodeMsg.classList.add('warn');return}
      const res = await api('/api/bonus/extra',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code})});

      let add = 0, message = 'Extra bonus applied.';
      if(res.__error){
        const map = {SPIN5:5, SPIN10:10, SPIN20:20, SPIN50:50};
        add = map[code]||0;
        if(add<=0){bonusCodeMsg.textContent='Invalid code.';bonusCodeMsg.classList.add('err');return}
      }else{
        add = Number(res.amount||0);
        message = res.message || message;
        if(add<=0){bonusCodeMsg.textContent=res.error||'Invalid code.';bonusCodeMsg.classList.add('err');return}
      }
      user.funBalance = Number(user.funBalance||0) + add;
      user.extraBonusRedeemed = true;
      saveLocal(); renderUser();
      bonusCodeMsg.textContent = `${message} +${add.toFixed(2)}`; bonusCodeMsg.classList.add('ok');
    });

    /* Bottom quick links */
    const tabRefill=document.getElementById('tab-refill');if(tabRefill)tabRefill.addEventListener('click',()=>{setActiveTab(tabRefill);alert('Recharge flow placeholder — connect to cashier system.')});
    const tabHome=document.getElementById('tab-home');if(tabHome)tabHome.addEventListener('click',()=>{setActiveTab(tabHome);alert('Logout placeholder.')});

    /* Init */
    function init(){renderGrid();bootstrapUser()}
    init();
  </script>
</body>
</html>
