document.getElementById('year').textContent=new Date().getFullYear();
const nav=document.querySelector('.nav'),menu=document.querySelector('.menu');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=`Hello SeanCore Solutions, I would like to request a quote.

Name: ${d.get('name')}
Phone: ${d.get('phone')}
Service: ${d.get('service')}
Location: ${d.get('location')||'Not specified'}

Request: ${d.get('message')}`;window.open('https://wa.me/254757720703?text='+encodeURIComponent(msg),'_blank','noopener');});