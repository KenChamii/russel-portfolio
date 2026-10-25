/**
 * Arc dial for the About page.
 * Each item is rotated around a point off-screen by (index - selected) * step.
 * Items further than two steps away are hidden so they never overlap the intro text.
 */
const FADE = [1, 0.9, 0.5, 0, 0];

export function initDial(root: HTMLElement): void {
  const items = Array.from(root.querySelectorAll<HTMLButtonElement>('.d'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('.v'));
  const count = root.querySelector<HTMLElement>('[data-count]');
  const total = items.length;
  let selected = 0;

  const render = () => {
    items.forEach((el, i) => {
      const n = i - selected;
      const distance = Math.abs(n);
      el.style.setProperty('--n', String(n));
      el.style.opacity = String(FADE[Math.min(distance, FADE.length - 1)]);
      el.classList.toggle('sel', n === 0);
      el.classList.toggle('far', distance > 2);
      if (n === 0) el.setAttribute('aria-current', 'true');
      else el.removeAttribute('aria-current');
    });
    panels.forEach((p, i) => p.classList.toggle('on', i === selected));
    if (count) count.textContent = `${String(selected + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  };

  const go = (i: number) => {
    selected = (i + total) % total;
    render();
  };

  items.forEach((el, i) => el.addEventListener('click', () => go(i)));
  document.querySelector('[data-prev]')?.addEventListener('click', () => go(selected - 1));
  document.querySelector('[data-next]')?.addEventListener('click', () => go(selected + 1));

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') go(selected + 1);
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') go(selected - 1);
  });

  // Swipe up/down (or left/right) on touch screens to move through the items.
  let startX = 0;
  let startY = 0;
  root.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  root.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    const delta = Math.abs(dy) > Math.abs(dx) ? dy : dx;
    if (Math.abs(delta) < 48) return;
    go(selected + (delta < 0 ? 1 : -1));
  });

  count?.setAttribute('aria-live', 'polite');
  render();
}
