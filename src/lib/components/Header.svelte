<script lang="ts">
  import { base } from '$app/paths';

  let menuOpen = false;
  const navigation = [
    { label: 'Услуги', href: `${base}/services` },
    { label: 'Кейсы', href: `${base}/cases` },
    { label: 'Блог', href: `${base}/blog` },
    { label: 'Команда', href: `${base}/team` },
    { label: 'О нас', href: `${base}/about` }
  ];
</script>

<header class="header"><div class="shell header__inner">
  <a href="{base}/" class="logo" aria-label="Codeam, на главную">codeam<span>°</span></a>
  <nav class:open={menuOpen} aria-label="Основная навигация">
    <a class="nav-cta" href="{base}/contacts#form" onclick={() => menuOpen = false}>Обсудить задачу <span>↗</span></a>
    {#each navigation as item}
      <a href={item.href} onclick={() => menuOpen = false}>{item.label}</a>
    {/each}
    <a href="{base}/contacts" onclick={() => menuOpen = false}>Контакты</a>
  </nav>
  <button class="menu-toggle" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onclick={() => menuOpen = !menuOpen}>
    <span></span><span></span>
  </button>
</div></header>

<style>
  .header { position:absolute; top:0; left:0; right:0; z-index:10; color:var(--text-primary); }
  .header__inner { min-height:88px; display:flex; align-items:center; justify-content:space-between; }
  .logo { font-size:27px; font-weight:800; letter-spacing:-.095em; }.logo span { color:var(--water-500); }
  nav { display:flex; align-items:center; gap:26px; font-size:12px; font-weight:700; }.nav-cta { display:none; }
  nav a { transition:color 160ms var(--ease); } nav a:hover { color:var(--water-500); }
  .menu-toggle { display:none; width:44px; height:44px; padding:11px 8px; border:0; background:none; }.menu-toggle span { display:block; width:25px; height:2px; margin:6px auto; background:currentColor; transition:transform 160ms var(--ease); }
  @media (max-width:760px) { .header__inner{min-height:68px}.menu-toggle{display:block;position:relative;z-index:2}nav{display:none;position:absolute;right:16px;top:58px;width:min(330px,calc(100vw - 32px));padding:24px;background:var(--surface);box-shadow:var(--shadow-soft);border-radius:0;flex-direction:column;align-items:stretch;gap:0}nav.open{display:flex}nav a{padding:13px 0;border-bottom:1px solid var(--water-100)}nav a:last-child{border:0}.nav-cta{display:block!important;order:-1;background:var(--deep);color:var(--surface);border-radius:0;padding:14px 16px!important;margin-bottom:12px;border:0!important}.nav-cta span{float:right}.open + .menu-toggle span:first-child{transform:translateY(4px) rotate(45deg)}.open + .menu-toggle span:last-child{transform:translateY(-4px) rotate(-45deg)}}
</style>
