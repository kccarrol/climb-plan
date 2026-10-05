const ROUTES = {
  friday:{n:"Friday Corral",mi:7.7,ft:920,c:"670 ft over 2.9 mi at 4.4%"},
  madonna:{n:"Exploring Madonna",mi:9.0,ft:1260,c:"1,030 ft over 3.5 mi at 5.6% (mi 1.5–4)"},
  irish:{n:"Irish Hills",mi:8.6,ft:1230,c:"Two 5–6% climbs to mi 4, 13% pitches"},
  march:{n:"March Connector",mi:11.1,ft:1550,c:"1,300 ft over 4.2 mi at 5.8% (mi 1.5–5)"},
  xmas:{n:"Xmas Valley",mi:8.7,ft:1570,c:"1,560 ft in the first 4.5 mi, two 6–7% ramps"},
  cold:{n:"Sunday Cold Creek",mi:15.9,ft:2080,c:"1,040 ft over 2.1 mi at 9.5% (mi 5–7)"},
  lttct:{n:"LTTC training",mi:15.1,ft:2930,c:"2,080 ft over 5.2 mi at 7.5% (mi 0–5)"},
  iron:{n:"Iron Butterfly-ish",mi:21.0,ft:2940,c:"1,300 ft at 5.9%, then 1,030 ft at 7.0%"},
  star:{n:"Star Lake",mi:22.8,ft:3200,c:"2,170 ft over 5.9 mi at 7.0%"},
  toads:{n:"Toads Corral",mi:28.6,ft:4110,c:"3,050 ft over 10 mi at 5.8%"},
  lttc:{n:"LTTC",mi:32.8,ft:4870,c:"1,670 ft at 6.9% and 1,290 ft at 6.3%"}
};
const DAYS=["mon","tue","wed","thu","fri","sat","sun"];
const DN={mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat",sun:"Sun"};
const STR="Then 15–20 min strength: squats, lunges, step-ups, single-leg deadlifts, planks.";
const easy=(m)=>({t:"Easy ride",d:m+" easy, conversational pace",opt:true});
const restSun={t:"Rest or easy spin",rest:true};
const W=[
 {p:"Base",days:{tue:{t:"Climbing intervals",d:"3 × 10 min Steady, 4 min easy between"},wed:easy("45 min"),
  thu:{t:"March Connector, benchmark",r:"march",d:"Ride the main climb (mi 1.5 to the summit near mi 5) at a Steady effort you could repeat. Log your climb time. "+STR,climb:true},
  sat:{t:"Irish Hills",r:"irish",d:"1.5 h. Steady on both climbs; stay seated through the 13% pitches if you can.",climb:true},sun:restSun}},
 {p:"Base",days:{tue:{t:"Climbing intervals",d:"3 × 10 min Steady, 4 min easy between"},wed:easy("45–60 min"),
  thu:{t:"Exploring Madonna",r:"madonna",d:"One unbroken Steady climb from mi 1.5 to the top near mi 4. Finish easy. "+STR,climb:true},
  sat:{t:"Xmas Valley",r:"xmas",d:"1.5 h. Pace the first 4.5 mi of climbing evenly; the second ramp is steeper, so save something.",climb:true},sun:restSun}},
 {p:"Base",days:{tue:{t:"Climbing intervals",d:"3 × 12 min Steady, 4 min easy between"},wed:easy("60 min"),
  thu:{t:"Friday Corral",r:"friday",d:"Full route. Steady on the climb (mi 1.5–4), easy elsewhere. "+STR,climb:true},
  sat:{t:"Sunday Cold Creek",r:"cold",d:"2.2 h. First look at the 9.5% wall (mi 5–7): go easy before it and spin a low gear up it.",climb:true},sun:restSun}},
 {p:"Build",days:{tue:{t:"Climbing intervals",d:"4 × 8 min Hard, 3 min easy between"},wed:easy("45–60 min"),
  thu:{t:"Irish Hills",r:"irish",d:"Both climbs Hard; stand for the steepest 20–30 s of each pitch. "+STR,climb:true},
  sat:{t:"LTTC training",r:"lttct",d:"2.7 h. Steady up the big climb (mi 0–5); push to Hard on the second climb (mi 8.5–10.5).",climb:true},sun:restSun}},
 {p:"Build",days:{tue:{t:"Climbing intervals",d:"4 × 8 min Hard, 3 min easy between"},wed:easy("60 min"),
  thu:{t:"LTTC training, main climb only",r:"lttct",d:"Mi 0–5, 2,080 ft. Steady for 2 mi, Hard for the last 3. Stop at the top. "+STR,climb:true},
  sat:{t:"Iron Butterfly-ish",r:"iron",d:"3.1 h. Steady on the first climb, Hard on the steeper 7% climb. Time cap 3.5 h.",climb:true},sun:restSun}},
 {p:"Build",days:{tue:{t:"Intervals with surges",d:"4 × 8 min Hard with 3–4 standing surges of 20 s inside each, 3 min easy between"},wed:easy("60 min"),
  thu:{t:"Xmas Valley",r:"xmas",d:"Hard on both ramps in the first 4.5 mi; stand wherever the grade tops 10%. "+STR,climb:true},
  sat:{t:"Star Lake",r:"star",d:"3.4 h. Steady up the 5.9 mi, 7% summit climb. Eat every 30–45 min. Time cap 4 h.",climb:true},sun:restSun}},
 {p:"Power",days:{tue:{t:"Power intervals",d:"6 × 3 min Near-max, 3 min easy between"},wed:easy("45 min, truly"),
  thu:{t:"Sunday Cold Creek, the wall",r:"cold",d:"Easy to mi 5, then the 9.5% wall (mi 5–7) Hard, alternating 1 min seated and 30 s standing. Stop at the top. Light strength.",climb:true},
  sat:{t:"Toads Corral",r:"toads",d:"4.2 h. LTTC dress rehearsal: Steady up the 10 mi climb, eat every 30 min, note what you ate. Time cap 4.5 h.",climb:true},sun:{t:"Rest",rest:true}}},
 {p:"Taper and capstone",days:{tue:{t:"Sharpening intervals",d:"3 × 3 min Near-max, 3 min easy between (35 min total)"},wed:{t:"Rest",rest:true},
  thu:{t:"March Connector, benchmark replay",r:"march",d:"Same climb, same resistance ladder, same Steady effort as week 1. No strength.",climb:true},
  sat:{t:"LTTC capstone",r:"lttc",d:"4.9 h. Pace both big climbs Steady, use your week 7 fueling, and enjoy it.",climb:true},sun:{t:"Rest",rest:true}}}
];
const BENCH=[
  {n:"March Connector climb",a:"1-thu",b:"8-thu",la:"Wk 1",lb:"Wk 8"},
  {n:"Xmas Valley climb",a:"2-sat",b:"6-thu",la:"Wk 2",lb:"Wk 6"},
  {n:"LTTC training main climb",a:"4-sat",b:"5-thu",la:"Wk 4",lb:"Wk 5"},
  {n:"Sunday Cold Creek wall",a:"3-sat",b:"7-thu",la:"Wk 3",lb:"Wk 7"}
];
const GRADES=["Downhill / 0–2%","2–4%","4–6%","6–8%","8–10%","10%+"];

let S={start:"2026-10-05",ladder:["","","","","",""],log:{}};
let week=1;
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const entry=k=>S.log[k]||(S.log[k]={});

function activeKeys(w){return DAYS.filter(d=>W[w-1].days[d]&&!W[w-1].days[d].rest).map(d=>w+"-"+d)}
function coreKeys(w){return DAYS.filter(d=>{const x=W[w-1].days[d];return x&&!x.rest&&!x.opt}).map(d=>w+"-"+d)}
function weekDone(w){return coreKeys(w).every(k=>S.log[k]?.done)}
function todayPos(){
  const s=new Date(S.start+"T00:00:00");const t=new Date();t.setHours(0,0,0,0);
  const n=Math.floor((t-s)/864e5); if(isNaN(n)||n<0||n>=56) return null;
  return {w:Math.floor(n/7)+1,d:DAYS[n%7]};
}
function parseT(v){if(!v)return null;const p=String(v).trim().split(":").map(Number);if(p.some(isNaN))return null;return p.reduce((a,x)=>a*60+x,0)}
function fmtT(s){const neg=s<0;s=Math.abs(s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (neg?"−":"+")+(h?h+":"+String(m).padStart(2,"0"):m)+":"+String(x).padStart(2,"0")}

function renderRidge(){
  const vals=W.map(w=>ROUTES[w.days.sat.r].ft), max=5000, X=i=>40+i*80, Y=v=>146-v/max*120;
  let pts=vals.map((v,i)=>[X(i),Y(v)]);
  const line=pts.map((p,i)=>(i?"L":"M")+p[0]+" "+p[1]).join(" ");
  const area=line+` L${X(7)} 156 L${X(0)} 156 Z`;
  let doneUpTo=0; for(let i=1;i<=8;i++){if(weekDone(i))doneUpTo=i;else break}
  const clipW=doneUpTo?X(doneUpTo-1)+(doneUpTo<8?40:40):0;
  const tp=todayPos(); const cur=tp?tp.w:week;
  let svg=`<defs><clipPath id="cp"><rect x="0" y="-20" width="${clipW}" height="200"/></clipPath></defs>
  <path d="${area}" fill="var(--pine-soft)"/>
  <path d="${area}" fill="var(--pine)" clip-path="url(#cp)" opacity=".9"/>
  <path d="${line}" fill="none" stroke="var(--pine)" stroke-width="2.5" stroke-linejoin="round"/>`;
  pts.forEach((p,i)=>{
    const sel=i+1===week;
    svg+=`<circle cx="${p[0]}" cy="${p[1]}" r="${sel?6:4}" fill="${sel?'var(--marker)':'var(--surface)'}" stroke="var(--pine)" stroke-width="2"/>`;
    svg+=`<text x="${p[0]}" y="168" text-anchor="middle" font-family="Barlow Condensed,sans-serif" font-size="20" fill="var(--muted)">W${i+1}</text>`;
    if(sel) svg+=`<text x="${Math.min(Math.max(p[0],48),592)}" y="${p[1]-(tp&&tp.w===i+1?44:16)}" text-anchor="middle" font-family="Barlow Condensed,sans-serif" font-weight="600" font-size="24" fill="var(--ink)">${vals[i].toLocaleString()} ft</text>`;
  });
  if(tp){const p=pts[cur-1];svg+=`<path d="M${p[0]} ${p[1]-4} v-26 l14 6 l-14 6" fill="var(--marker)" stroke="var(--ink)" stroke-width="1.5"/>`}
  $("#ridgeSvg").innerHTML=svg;
  $("#ridgeCap").innerHTML=`<b>${doneUpTo}</b> of 8 weeks complete`;
}

function renderWeeks(){
  $("#weeks").innerHTML=W.map((w,i)=>{
    const n=i+1,k=coreKeys(n),d=k.filter(x=>S.log[x]?.done).length;
    return `<button class="wk" aria-pressed="${n===week}" data-w="${n}">${n}<small>${d}/${k.length}</small></button>`}).join("");
}

function dayHTML(w,d,interactive){
  const x=W[w-1].days[d], k=w+"-"+d, e=S.log[k]||{}, tp=todayPos();
  const today=tp&&tp.w===w&&tp.d===d;
  if(!x) return `<div class="day rest${today?' today':''}"><div class="dname">${DN[d]}</div><div class="title">Rest</div></div>`;
  if(x.rest) return `<div class="day rest${today?' today':''}"><div class="dname">${DN[d]}</div><div class="title">${esc(x.t)}</div></div>`;
  const r=x.r?ROUTES[x.r]:null;
  let h=`<div class="day${e.done?' done':''}${today?' today':''}" data-k="${k}"><div class="dname">${DN[d]}${today?'<small>Today</small>':''}</div><div>
  <div class="top"><div class="title">${esc(x.t)}${x.opt?' <span class="opt">optional</span>':''}</div>`;
  if(interactive) h+=`<button class="check" role="checkbox" aria-checked="${!!e.done}" aria-label="Mark ${DN[d]} done" data-act="done"><svg viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="var(--surface)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
  h+=`</div><p class="detail">${esc(x.d)}</p>`;
  if(r) h+=`<span class="route">${esc(r.n)}: ${r.mi} mi, ${r.ft.toLocaleString()} ft</span>`;
  if(interactive){
    h+=`<div class="fields">`;
    if(x.climb) h+=`<label class="field">Main climb<input data-f="climb" inputmode="numeric" placeholder="m:ss" value="${esc(e.climb)}"></label><label class="field">Total time<input data-f="total" inputmode="numeric" placeholder="h:mm:ss" value="${esc(e.total)}"></label>`;
    h+=`<label class="field rpe">Effort 1–10<input data-f="rpe" inputmode="numeric" maxlength="2" value="${esc(e.rpe)}"></label>
    <label class="field note">Notes<input data-f="note" placeholder="${x.climb?'Legs, fueling, resistance':'How it felt'}" value="${esc(e.note)}"></label></div>`;
  } else if(e.climb||e.total||e.note){
    h+=`<p class="detail">${[e.climb&&"Climb "+esc(e.climb),e.total&&"Total "+esc(e.total),e.note&&esc(e.note)].filter(Boolean).join(", ")}</p>`;
  }
  return h+`</div></div>`;
}

function renderDays(){
  $("#phase").textContent=`Week ${week}: ${W[week-1].p}`;
  $("#days").innerHTML=DAYS.map(d=>dayHTML(week,d,true)).join("");
}
function renderPrint(){
  $("#printAll").innerHTML=W.map((w,i)=>`<div class="pweek"><h2>Week ${i+1}: ${w.p}</h2><div class="days">${DAYS.map(d=>dayHTML(i+1,d,false)).join("")}</div></div>`).join("");
}
function renderBench(){
  $("#bench tbody").innerHTML=BENCH.map(b=>{
    const A=S.log[b.a]?.climb||"",B=S.log[b.b]?.climb||"",ta=parseT(A),tb=parseT(B);
    let c="";if(ta!=null&&tb!=null){const df=tb-ta;c=`<span class="delta ${df<=0?'good':'bad'}">${fmtT(df)}</span>`}
    return `<tr><td>${b.n}</td><td>${A?esc(A):'<span class="sub">'+b.la+'</span>'}</td><td>${B?esc(B):'<span class="sub">'+b.lb+'</span>'}</td><td>${c}</td></tr>`}).join("");
}
function renderLadder(){
  $("#ladder").innerHTML=GRADES.map((g,i)=>`<tr><td>${g}</td><td><input data-l="${i}" inputmode="numeric" aria-label="Resistance for ${g}" value="${esc(S.ladder[i])}"></td></tr>`).join("");
}
function renderRoutes(){
  const used={};W.forEach((w,i)=>DAYS.forEach(d=>{const r=w.days[d]?.r;if(r)(used[r]=used[r]||new Set()).add(i+1)}));
  $("#routes").innerHTML=Object.entries(ROUTES).map(([k,r])=>`<tr><td>${r.n}</td><td>${r.mi}</td><td>${r.ft.toLocaleString()}</td><td>${r.c}</td><td>${[...(used[k]||[])].join(", ")}</td></tr>`).join("");
}
function renderSummary(){
  let t=0,d=0;for(let w=1;w<=8;w++){const k=coreKeys(w);t+=k.length;d+=k.filter(x=>S.log[x]?.done).length}
  const tp=todayPos();
  $("#summary").textContent=`${d} of ${t} key sessions done`+(tp?`. Today is week ${tp.w}, ${DN[tp.d]}.`:".");
}
function renderAll(){renderRidge();renderWeeks();renderDays();renderBench();renderLadder();renderRoutes();renderSummary();$("#start").value=S.start}

/* Saving: everything lives on this device (localStorage), saved on every change. */
const LS="climbPlan";
function status(t){$("#saveStatus").textContent=t}
function timeStr(ms){return new Date(ms).toLocaleTimeString([], {hour:"numeric",minute:"2-digit"})}
function saveLocal(){
  try{localStorage.setItem(LS,JSON.stringify(S));status("Saved at "+timeStr(Date.now()))}
  catch(e){status("Couldn't save. Your browser storage may be full or blocked.")}
}
function scheduleSave(){S.updated=Date.now();saveLocal();renderBackupNote()}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")saveLocal()});
window.addEventListener("pagehide",saveLocal);

/* Ask the browser not to clear this app's storage */
async function requestPersist(){
  if(!navigator.storage||!navigator.storage.persist)return;
  try{
    const already=await navigator.storage.persisted();
    S.persisted=already||await navigator.storage.persist();
  }catch(e){}
  renderBackupNote();
}

/* Backup */
function renderBackupNote(){
  const el=$("#backupStatus"); if(!el)return;
  const days=S.lastBackup?Math.floor((Date.now()-S.lastBackup)/864e5):null;
  const hasData=Object.keys(S.log).length>0;
  let t=days===null?(hasData?"No backup yet. Download one now and then, especially before changing phones.":""):
    "Last backup: "+(days===0?"today":days===1?"yesterday":days+" days ago")+".";
  if(S.persisted===false)t+=" Install the app to your home screen so Android keeps your data safe.";
  el.textContent=t;
}
$("#exportBtn").addEventListener("click",async()=>{
  S.lastBackup=Date.now(); saveLocal();
  const out=JSON.stringify({app:"climb-plan",version:1,exported:new Date().toISOString(),state:S},null,2);
  const name="climb-plan-backup-"+new Date().toISOString().slice(0,10)+".json";
  const file=new File([out],name,{type:"application/json"});
  try{
    if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:"Climb Plan backup"})}
    else{const a=document.createElement("a");a.href=URL.createObjectURL(file);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000)}
  }catch(e){if(e&&e.name==="AbortError"){S.lastBackup=null;saveLocal()}}
  renderBackupNote();
});
$("#importFile").addEventListener("change",async e=>{
  const f=e.target.files[0]; e.target.value=""; if(!f)return;
  try{
    const j=JSON.parse(await f.text()); const st=j.state||j;
    if(!st||typeof st.log!=="object")throw 0;
    if(!confirm("Replace everything in the app with the backup from "+(j.exported?j.exported.slice(0,10):"that file")+"?"))return;
    S=Object.assign({start:"2026-10-05",ladder:["","","","","",""],log:{}},st);
    const tp=todayPos();if(tp)week=tp.w;
    renderAll();renderPrint();scheduleSave();$("#backupStatus").textContent="Backup restored.";
  }catch(err){$("#backupStatus").textContent="That file isn't a Climb Plan backup."}
});

/* Events */
$("#weeks").addEventListener("click",e=>{const b=e.target.closest(".wk");if(!b)return;week=+b.dataset.w;renderWeeks();renderDays();renderRidge()});
$("#days").addEventListener("click",e=>{
  const b=e.target.closest('[data-act="done"]');if(!b)return;
  const k=b.closest(".day").dataset.k,en=entry(k);en.done=!en.done;
  b.setAttribute("aria-checked",en.done);b.closest(".day").classList.toggle("done",en.done);
  renderWeeks();renderRidge();renderSummary();scheduleSave();
});
$("#days").addEventListener("input",e=>{
  const f=e.target.dataset.f;if(!f)return;const k=e.target.closest(".day").dataset.k;
  entry(k)[f]=e.target.value;if(f==="climb")renderBench();scheduleSave();
});
$("#ladder").addEventListener("input",e=>{const i=e.target.dataset.l;if(i==null)return;S.ladder[+i]=e.target.value;scheduleSave()});
$("#start").addEventListener("change",e=>{if(!e.target.value)return;S.start=e.target.value;const tp=todayPos();if(tp)week=tp.w;renderAll();scheduleSave()});
$("#printBtn").addEventListener("click",()=>{renderPrint();window.print()});
$("#resetBtn").addEventListener("click",()=>{if(!confirm("Clear every logged session, time and note? Your resistance ladder and start date stay."))return;S.log={};renderAll();scheduleSave()});
window.addEventListener("beforeprint",renderPrint);

/* Init */
try{const ls=localStorage.getItem(LS);if(ls)S=Object.assign(S,JSON.parse(ls))}catch(e){}
{const tp=todayPos();if(tp)week=tp.w}
renderAll();renderPrint();status(S.updated?"Saved at "+timeStr(S.updated):"Entries save on this device automatically");
renderBackupNote();requestPersist();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))}
