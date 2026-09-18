const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(btn&&nav){
  btn.setAttribute('aria-expanded','false');
  btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }
  });
}
const page=(location.pathname.split('/').pop()||'index.html').replace('.html','');
document.querySelectorAll('.nav a[data-page]').forEach(a=>{
  if(a.dataset.page===page){a.classList.add('active');a.setAttribute('aria-current','page');}
});
const form=document.querySelector('#joinForm');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const n=document.querySelector('.notice');
    if(n){n.style.display='block';n.setAttribute('role','status');n.scrollIntoView({behavior:'smooth',block:'nearest'});}
    form.reset();
  });
}
