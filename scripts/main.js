document.querySelectorAll('#year').forEach(el => (el.textContent = new Date().getFullYear()));

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-list a[href^="#"]')];

function setActive() {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;
  for (const s of sections) if (y >= s.offsetTop) current = s.id;
  links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`));
}
setActive();
addEventListener('scroll', setActive, { passive: true });
addEventListener('resize', setActive);

// Mobile nav toggle
(function(){
  const burger = document.querySelector('.burger');
  const nav = document.getElementById('primary-nav');
  if (!burger || !nav) return;

  const close = () => {
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', close);
  });
})();

