<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>Страница не найдена — Codeam</title>
</svelte:head>

<main class="error-page">
  <a href="/" class="logo">codeam<span>°</span></a>
  <p>Ошибка {page.status}</p>
  <h1>Похоже, эта волна<br />ушла в другую сторону.</h1>
  <a class="button" href="/">Вернуться на берег <span>←</span></a>
</main>

<style>
  .error-page { min-height:100vh; background:#06363b; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:30px; }.logo{position:absolute;top:30px;left:4%;font-size:26px;font-weight:800;letter-spacing:-.09em}.logo span{color:#d6ff63}.error-page p{color:#9fe5d8;font:11px 'DM Mono';text-transform:uppercase;letter-spacing:.15em}.error-page h1{font-size:clamp(38px,6vw,80px);letter-spacing:-.07em;line-height:.96;margin:14px 0 35px}.button{background:#d6ff63;color:#07383c;padding:15px 20px;border-radius:99px;font-size:14px;font-weight:800}.button span{margin-left:9px}
</style>
