/** Toggle a single project */
document.querySelectorAll<HTMLButtonElement>('.toggle-details').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const details = document.getElementById(btn.getAttribute('aria-controls')!)!;
    btn.setAttribute('aria-expanded', (!expanded).toString());
    details.hidden = expanded;
    btn.textContent = expanded ? '+' : '−';
  });
});

/** Expand / collapse all */
const expandAllBtn = document.getElementById('expandAllBtn') as HTMLButtonElement;
expandAllBtn.addEventListener('click', () => {
  const isExpanded = expandAllBtn.getAttribute('aria-expanded') === 'true';
  expandAllBtn.setAttribute('aria-expanded', (!isExpanded).toString());
  expandAllBtn.textContent = isExpanded ? 'Expand All' : 'Collapse All';

  document.querySelectorAll<HTMLElement>('.project-details').forEach(d => (d.hidden = isExpanded));
  document.querySelectorAll<HTMLButtonElement>('.toggle-details').forEach(b => {
    b.setAttribute('aria-expanded', (!isExpanded).toString());
    b.textContent = isExpanded ? '+' : '−';
  });
});

/** Avatar fade/scale on scroll (optional) */
document.addEventListener('scroll', () => {
  const avatar = document.querySelector<HTMLImageElement>('.avatar')!;
  const heroHeight = (document.querySelector('.hero') as HTMLElement).offsetHeight;
  const prog = Math.min(window.scrollY / heroHeight, 1);
  avatar.style.opacity = (1 - prog).toString();
  avatar.style.transform = `scale(${1 - prog * 0.5}) translateX(${prog * 80}vw)`;
});
