const $=(s,r=document)=>[...r.querySelectorAll(s)];
const bg=document.getElementById('bg'),dt=document.getElementById('dt'),pl=document.getElementById('pl'),pz=document.getElementById('pz'),nx=document.getElementById('nx'),pv=document.getElementById('pv');
const h=document.getElementById('h');onscroll=()=>{h.classList.toggle('s',scrollY>40);$('[data-px]').forEach(e=>{const r=e.parentNode.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)e.style.transform=`translateY(${(r.top-innerHeight/2)*e.dataset.px}px)`})};onscroll();
bg.onclick=()=>h.classList.toggle('open');$('#n a').forEach(a=>a.onclick=()=>h.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});$('.rv').forEach(e=>io.observe(e));
// carrossel
const vs=$('.stage video'),st=document.getElementById('st');let i=0,on=false;
vs.forEach((_,k)=>{const b=document.createElement('button');b.setAttribute('aria-label','Vídeo '+(k+1));b.onclick=()=>go(k,on);dt.appendChild(b)});
function go(k,play){vs[i].pause();vs[i].classList.remove('on');i=(k+vs.length)%vs.length;const v=vs[i];v.currentTime=0;v.playbackRate=+(v.dataset.rate||1);v.classList.add('on');$('#dt button').forEach((b,j)=>b.classList.toggle('on',j==i));if(play)v.play().catch(()=>{})}
vs.forEach(v=>v.onended=()=>go(i+1,true));go(0,false);
pl.onclick=()=>{on=true;st.classList.add('playing');pz.textContent='Pausar';vs[i].play()};
pz.onclick=()=>{if(vs[i].paused){vs[i].play();pz.textContent='Pausar'}else{vs[i].pause();pz.textContent='Continuar'}};
nx.onclick=()=>go(i+1,on);pv.onclick=()=>go(i-1,on);
