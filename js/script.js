document.documentElement.className+=" js"

/* ----------------------------------------- */

document.querySelectorAll('.bt').forEach(function(b){b.innerHTML=b.innerHTML.repeat(4)});
(function(){
var w=document.getElementById('hxs'),box=document.getElementById('hxw');
if(!w){return}
var ps=[].slice.call(w.querySelectorAll('.hx-p')),gs=[].slice.call(w.querySelectorAll('.hx-gw')),sg=[].slice.call(box.querySelectorAll('.hx-seg')),
cap=box.querySelector('.hx-cap'),cat=box.querySelector('.hx-cat'),nm=box.querySelector('.hx-nm'),ct=box.querySelector('.hx-ct'),pp=box.querySelector('.hx-pp'),
n=ps.length,i=0,old=-1,t,D=5200,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,play=!rm,hov=false,inside=false,vis=true,tx=0,ty=0,cx=0,cy=0;
function z(x){return('0'+x).slice(-2)}
function lay(first){
ps.forEach(function(p,k){p.className='hx-p '+p.getAttribute('data-s')+(k===i?' on':(k===old?' gone':''));p.setAttribute('aria-hidden',k===i?'false':'true')});
gs.forEach(function(g,k){g.className='hx-gw'+(k===i?' on':'')});
sg.forEach(function(b,k){b.className='hx-seg'+(k===i?' on':(k<i?' done':''));if(k===i){b.setAttribute('aria-current','true')}else{b.removeAttribute('aria-current')}});
ct.textContent=z(i+1)+' / '+z(n);
var p=ps[i],c=p.getAttribute('data-cat'),m=p.getAttribute('data-nm');
function sw(){cat.innerHTML=c;nm.innerHTML=m;cap.classList.remove('sw')}
if(first){sw()}else{cap.classList.add('sw');setTimeout(sw,220)}
}
function restart(){var b=sg[i];b.className='hx-seg';void b.offsetWidth;b.className='hx-seg on'}
function run(){
clearTimeout(t);
if(play){if(!hov){box.classList.remove('hold');t=setTimeout(function(){go(i+1,1)},D)}}
else{box.classList.add('hold')}
}
function go(k,dir){
var nk=(k+n)%n;
if(nk===i){return}
w.style.setProperty('--dx',dir<0?-1:1);
w.className=w.className.replace(' intro','');
old=i;i=nk;lay(false);run();
}
function setp(){
pp.innerHTML=play?'&#10074;&#10074;':'&#9654;';
pp.setAttribute('aria-label',play?'Pause slideshow':'Play slideshow');
if(play){box.classList.remove('np')}else{box.classList.add('np')}
}
ps.forEach(function(p,k){p.addEventListener('click',function(){if(k!==i){go(k,k>i?1:-1)}})});
sg.forEach(function(b,k){b.onclick=function(){go(k,k>i?1:-1)}});
box.querySelector('.hx-nx').onclick=function(){go(i+1,1)};
box.querySelector('.hx-pv').onclick=function(){go(i-1,-1)};
pp.onclick=function(){play=!play;setp();if(play){restart()}run()};
box.addEventListener('mouseenter',function(){hov=true;clearTimeout(t);box.classList.add('hold')});
box.addEventListener('mouseleave',function(){hov=false;inside=false;if(play){restart()}run()});
w.addEventListener('mousemove',function(e){var r=w.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*2;ty=((e.clientY-r.top)/r.height-.5)*2;inside=true});
box.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){go(i+1,1)}if(e.key==='ArrowLeft'){go(i-1,-1)}});
var x0=null;
box.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
box.addEventListener('touchend',function(e){if(x0===null){return}var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40){go(i+(d<0?1:-1),d<0?1:-1)}x0=null});
if('IntersectionObserver' in window){new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(w)}
function tick(now){
if(vis){
var ax=inside?tx:Math.sin(now/2800)*.4,ay=inside?ty:Math.cos(now/3400)*.18;
cx+=(ax-cx)*.06;cy+=(ay-cy)*.06;
w.style.setProperty('--mx',cx.toFixed(3));w.style.setProperty('--my',cy.toFixed(3));
}
requestAnimationFrame(tick);
}
if(!rm){requestAnimationFrame(tick)}
setTimeout(function(){w.className=w.className.replace(' intro','')},3200);
lay(true);setp();run();
})();
function wa(id,ti){var f=document.getElementById(id);f.addEventListener('submit',function(e){e.preventDefault();var l=[].map.call(f.elements,function(x){return x.name&&x.value?x.name+': '+x.value.replace(/^(\d{4}-\d\d-\d\d)T/,'$1 at '):''}).filter(Boolean);location.href='https://wa.me/923006123200?text='+encodeURIComponent(ti+'\n\n'+l.join('\n'))})}
wa('lead','New founder session request (from the Amelia Impex website)');wa('news','New newsletter subscription request (from the Amelia Impex website)');
(function(){if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches){document.documentElement.className=document.documentElement.className.replace(' js','');return}var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.08});[].forEach.call(document.querySelectorAll('main>section:not(.hero)>.w,main>.st>.w'),function(el){el.classList.add('rev');o.observe(el)})})();
(function(){var vs=[].slice.call(document.querySelectorAll('.bv video'));if(!vs.length)return;var rd=matchMedia('(prefers-reduced-motion:reduce)').matches;vs.forEach(function(v){v.muted=true;if(rd)v.removeAttribute('autoplay')});if(!('IntersectionObserver' in window)||rd)return;var o=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var r=v.play();if(r&&r.catch)r.catch(function(){})}else v.pause()})},{threshold:.25});vs.forEach(function(v){o.observe(v)})})();
(function(){[].forEach.call(document.querySelectorAll('video[data-b64]'),function(v){var b=v.getAttribute('data-b64');function d(){v.onerror=null;v.src='data:video/mp4;base64,'+b}try{var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);v.onerror=d;v.src=URL.createObjectURL(new Blob([a],{type:'video/mp4'}))}catch(e){d()}})})();

/* ----------------------------------------- */

(function(){document.documentElement.classList.add('js2');var m=document.getElementById('moreb'),l=document.getElementById('more');if(m)m.onclick=function(){var o=l.classList.toggle('open'),n=l.children.length;m.setAttribute('aria-expanded',o);m.firstChild.textContent=o?'Show fewer questions':'Show '+n+' more questions'};
var c=document.getElementById('pcar');if(c){var sl=[].slice.call(c.querySelectorAll('.pcl')),i=0,a=document.getElementById('pcc'),b=document.getElementById('pcn'),t=document.getElementById('pct');function go(k){i=(k+sl.length)%sl.length;sl.forEach(function(e,j){e.classList.toggle('on',j===i)});a.textContent=sl[i].dataset.k;b.textContent=sl[i].dataset.n;t.textContent=('0'+(i+1)).slice(-2)+' / '+('0'+sl.length).slice(-2)}
document.getElementById('pcp').onclick=function(){go(i-1)};document.getElementById('pcnx').onclick=function(){go(i+1)};c.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(i+1);if(e.key==='ArrowLeft')go(i-1)});var x=null;c.addEventListener('touchstart',function(e){x=e.touches[0].clientX},{passive:true});c.addEventListener('touchend',function(e){if(x===null)return;var d=e.changedTouches[0].clientX-x;if(Math.abs(d)>40)go(i+(d<0?1:-1));x=null})}})();

/* ----------------------------------------- */

(function(){var u=document.getElementById('up');if(!u)return;function f(){u.classList.toggle('show',(window.pageYOffset||document.documentElement.scrollTop)>500)}window.addEventListener('scroll',f,{passive:true});f();u.onclick=function(){var r=matchMedia('(prefers-reduced-motion:reduce)').matches;window.scrollTo({top:0,behavior:r?'auto':'smooth'});var m=document.getElementById('top');if(m){m.setAttribute('tabindex','-1');m.focus({preventScroll:true})}}})();
