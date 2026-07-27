<script lang="ts">
  import { base } from '$app/paths';
</script>

<footer class="footer"><div class="shell footer__inner">
  <a href="{base}/" class="logo" aria-label="Codeam, на главную">codeam<span>°</span></a>
  <div class="footer__links"><a href="{base}/services">Услуги</a><a href="{base}/cases">Кейсы</a><a href="{base}/blog">Блог</a><a href="{base}/contacts">Контакты</a></div>
  <p>© 2026 Codeam. Стратегия, дизайн и разработка.</p>
</div></footer>

<style>
  .footer{background:var(--abyss);color:var(--water-100);padding:30px 0}.footer__inner{display:flex;align-items:center;justify-content:space-between;gap:24px;font-size:11px}.logo{color:var(--surface);font-size:25px;font-weight:800;letter-spacing:-.095em}.logo span{color:var(--glow)}.footer__links{display:flex;gap:18px}.footer a:hover{color:var(--glow)}.footer p{margin:0;color:#88a2a8}@media(max-width:650px){.footer__inner{align-items:flex-start;flex-wrap:wrap}.footer__links{order:3;width:100%;flex-wrap:wrap}.footer p{margin-left:auto}}
</style>
