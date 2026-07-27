<script lang="ts">
  import { base } from '$app/paths';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const siteOrigin = import.meta.env.VITE_SITE_ORIGIN ?? '';
  const sitePath = import.meta.env.VITE_SITE_PATH ?? '';
  const canonicalUrl = `${siteOrigin}${sitePath}/`;
  const socialImageUrl = `${siteOrigin}${sitePath}/og.png`;

  const services = [
    { id: 'strategy', number: '01', title: 'Стратегия и бренд', excerpt: 'Находим суть продукта и формируем систему, которую понимают люди и бизнес.', tags: ['Исследование', 'Позиционирование', 'Айдентика'] },
    { id: 'design', number: '02', title: 'Дизайн продуктов', excerpt: 'Проектируем цифровой опыт: от первых сценариев до цельного интерфейса.', tags: ['UX/UI', 'Прототипы', 'Дизайн-системы'] },
    { id: 'dev', number: '03', title: 'Разработка', excerpt: 'Собираем быстрые и надёжные решения, которые готовы к запуску и росту.', tags: ['Frontend', 'Backend', 'Интеграции'] }
  ];

  const featuredCases = [
    { title: 'Инвестиции становятся ближе', client: 'Северный капитал', industry: 'Fintech', year: 2024, service: 'Стратегия · Продукт', result: 'Новая платформа для частных инвесторов', code: 'СК', featured: true },
    { title: 'Новый ритм городского сервиса', client: 'Loop', industry: 'Urban tech', year: 2023, service: 'Бренд · Digital', result: 'Единый опыт в приложении и городе', code: 'LP', featured: false }
  ];
</script>

<svelte:head>
  <title>Codeam — стратегия, дизайн и разработка</title>
  <meta name="description" content="Создаём бренды и цифровые продукты: исследуем задачу, объединяем стратегию, дизайн и разработку, доводим решения до запуска." />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ru_RU" />
  <meta property="og:site_name" content="Codeam" />
  <meta property="og:title" content="Codeam — стратегия, дизайн и разработка" />
  <meta property="og:description" content="Разбираемся в бизнесе, продукте и контексте, чтобы создавать бренды и цифровые продукты, которые решают реальные задачи." />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={socialImageUrl} />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1433" />
  <meta property="og:image:height" content="830" />
  <meta property="og:image:alt" content="Codeam — чтобы найти решение, нужно нырнуть глубже" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Codeam — стратегия, дизайн и разработка" />
  <meta name="twitter:description" content="Разбираемся в бизнесе, продукте и контексте, чтобы создавать бренды и цифровые продукты, которые решают реальные задачи." />
  <meta name="twitter:image" content={socialImageUrl} />
  <meta name="twitter:image:alt" content="Codeam — чтобы найти решение, нужно нырнуть глубже" />
</svelte:head>

  <div class="page">
  <div class="grain"></div>
  <Header />

  <main>
    <!-- SECTION 01: SURFACE -->
    <section class="section section--surface">
      <div class="hero-bg"></div>
      <div class="shell hero-grid">
        <div class="hero-content">
          <h1>Чтобы найти решение,<br />нужно нырнуть глубже.</h1>
          <p class="lead">Разбираемся в бизнесе, продукте и контексте, чтобы создавать бренды и цифровые продукты, которые решают реальные задачи.</p>
          <div class="actions">
            <a href="{base}/contacts" class="button button-primary">Обсудить задачу</a>
            <a href="{base}/cases" class="button button-secondary">Смотреть работы</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 02: SHALLOW (Transition) -->
    <section class="section section--shallow">
      <div class="shell positioning">
        <div class="positioning-heading">
          <span class="eyebrow">01 · Погружение</span>
          <h2>Сначала находим <br />настоящую задачу.</h2>
        </div>
        <div class="positioning-body">
          <p class="positioning-lead">Запрос, с которого начинается проект, редко бывает его окончательной формулировкой.</p>
          <p class="positioning-copy">Изучаем цели бизнеса, потребности людей, технологии и ограничения — и определяем, что действительно нужно изменить. Затем превращаем это понимание в стратегию, дизайн и работающий продукт.</p>
        </div>
        <div id="process" class="process" aria-label="Этапы работы">
          <div class="process-intro">
            <span class="eyebrow">Как движемся к результату</span>
            <p>Три последовательных этапа — от неопределённости к работающему решению.</p>
          </div>
          <ol class="process-steps">
            <li class="process-step">
              <span class="process-number">01</span>
              <h3>Исследуем</h3>
              <p>Собираем контекст, разговариваем с людьми и проверяем исходные предположения. Формулируем задачу, которую действительно стоит решать.</p>
            </li>
            <li class="process-step">
              <span class="process-number">02</span>
              <h3>Собираем решение</h3>
              <p>Соединяем стратегию, дизайн и технологии. Проверяем гипотезы, используем ИИ там, где он повышает качество.</p>
            </li>
            <li class="process-step">
              <span class="process-number">03</span>
              <h3>Запускаем и улучшаем</h3>
              <p>Доводим до запуска, смотрим на результат и продолжаем улучшать то, что уже работает.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section id="agile" class="section section--agile">
      <div class="shell">
        <div class="agile-heading">
          <span class="eyebrow">02 · Наш способ работать</span>
          <h2>Agile — не ритуал.<br />Это уважение к задаче.</h2>
          <p>Следуем четырём ценностям манифеста Agile, чтобы сохранять фокус на людях, результате и реальности проекта.</p>
        </div>
        <div class="agile-grid">
          <article class="agile-card">
            <span>01</span>
            <h3>Люди и диалог</h3>
            <p>Работаем вместе с командой клиента, а не прячемся за бесконечными согласованиями.</p>
          </article>
          <article class="agile-card">
            <span>02</span>
            <h3>Результат раньше отчётов</h3>
            <p>Показываем работающие решения как можно раньше, чтобы обсуждать реальное, а не предположения.</p>
          </article>
          <article class="agile-card">
            <span>03</span>
            <h3>Сотрудничество, не формальности</h3>
            <p>Техническое задание помогает начать, но новые данные помогают сделать проект лучше.</p>
          </article>
          <article class="agile-card">
            <span>04</span>
            <h3>Готовность к изменениям</h3>
            <p>Не держимся за план, если реальность подсказывает более точное решение.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 03: WATER (Services) -->
    <section id="services" class="section section--water">
      <div class="shell">
        <div class="services-heading">
          <div>
            <span class="eyebrow">03 · Чем поможем</span>
            <h2>От смысла<br />до запуска.</h2>
          </div>
          <p>Подключаем отдельную компетенцию или собираем команду под задачу целиком.</p>
        </div>
        <div class="services-list">
          {#each services as service}
            <a href="{base}/services/{service.id}" class="service-card">
              <span class="service-number">{service.number}</span>
              <div class="service-main">
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
              </div>
              <ul class="service-tags" aria-label="Состав направления">
                {#each service.tags as tag}<li>{tag}</li>{/each}
              </ul>
              <span class="service-arrow" aria-hidden="true">↗</span>
            </a>
          {/each}
        </div>
        <div class="descent">
          <div class="descent-copy">
            <span>Следующий слой</span>
            <p>Ниже — не обещания.<br />Ниже — сделанное.</p>
          </div>
          <img
            class="descent-mascot"
            src="{base}/diving-sea-lion-transparent.png"
            alt=""
            aria-hidden="true"
            width="1536"
            height="1024"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- SECTION 04: DEEP (Cases) -->
    <section id="cases" class="section section--deep">
      <div class="shell">
        <div class="cases-heading">
          <span class="eyebrow">04 · Доказательства</span>
          <div class="header-split">
            <h2>Работы говорят<br />точнее слов.</h2>
            <a href="{base}/cases" class="text-link">Все кейсы <span>→</span></a>
          </div>
        </div>
        <div class="cases-grid">
          {#each featuredCases as item}
            <a href="{base}/cases" class:case-card--featured={item.featured} class="case-card">
              <div class="case-visual">
                <span class="case-code">{item.code}</span>
                <span class="case-service">{item.service}</span>
                <span class="case-index">0{featuredCases.indexOf(item) + 1}</span>
              </div>
              <div class="case-meta">
                <span class="meta">{item.client} · {item.industry} · {item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.result}</p>
                <span class="case-link">Смотреть кейс <b>↗</b></span>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <!-- SECTION 08: ABYSS (Final CTA) -->
    <section id="contact" class="section section--abyss">
      <div class="shell contact-block">
        <div class="contact-intro">
          <span class="eyebrow">05 · Начнём?</span>
          <h2>Давайте<br />обсудим задачу.</h2>
          <p>Расскажите, что хотите изменить или запустить. Ответим в течение одного рабочего дня и предложим следующий шаг.</p>
          <div class="contact-direct">
            <span>Можно сразу написать</span>
            <a href="mailto:hello@codeam.ru">hello@codeam.ru ↗</a>
          </div>
        </div>
        <div class="contact-panel">
          <img
            class="contact-mascot"
            src="{base}/mascots/seal-contact-original-pose.png"
            alt=""
            aria-hidden="true"
            width="1536"
            height="1024"
            loading="lazy"
          />
          <form class="simple-form">
            <div class="form-row">
              <label>
                <span>Ваше имя</span>
                <input type="text" name="name" autocomplete="name" placeholder="Как к вам обращаться" required />
              </label>
              <label>
                <span>Компания</span>
                <input type="text" name="company" autocomplete="organization" placeholder="Название или проект" />
              </label>
            </div>
            <label>
              <span>Email или телефон</span>
              <input type="text" name="contact" autocomplete="email" placeholder="Где удобно ответить" required />
            </label>
            <label>
              <span>О задаче</span>
              <textarea name="message" placeholder="Контекст, сроки и ожидаемый результат" required></textarea>
            </label>
            <label class="consent">
              <input type="checkbox" name="consent" required />
              <span>Соглашаюсь с <a href="{base}/personal-data">обработкой персональных данных</a></span>
            </label>
            <button type="submit" class="button button-primary">Отправить запрос <span>↗</span></button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>

<style>
  .page {
    position: relative;
    background: var(--color-abyss);
    isolation: isolate;
  }
  main { position: relative; overflow: hidden; }
  /* Стилизация секций по уровням глубины */
  .section--surface {
    background: var(--color-surface);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
  }
  .section--surface .eyebrow { color: var(--color-accent-berry); }

  .section--shallow {
    background:
      radial-gradient(ellipse at 12% 5%, rgba(255,255,255,.42), transparent 38%),
      linear-gradient(
        to bottom,
        #c8e9f4 0,
        #c4e5ef 150px,
        #b9dce8 36%,
        #acd1df 68%,
        #9fc5d6 100%
      );
    color: var(--text-primary);
    padding-bottom: 160px;
  }
  .section--shallow {
    overflow: hidden;
  }

  .section--water {
    background:
      radial-gradient(rgba(223,244,251,.2), transparent 23%),
      linear-gradient(to bottom, #7daabd 0%, #6f99ad 58%, #52778b 100%);
    color: var(--text-primary);
    padding-bottom: 200px; /* Увеличиваем для плавности следующего перехода */
  }

  .section--agile {
    background:
      radial-gradient(rgba(255,255,255,.3), transparent 30%),
      linear-gradient(to bottom, #9fc5d6 0%, #91bbcc 52%, #7daabd 100%);
    color: var(--text-primary);
    padding: 72px 0 136px;
  }

  .section--deep {
    background: linear-gradient(
      to bottom,
      #52778b 0%,
      #45697d 18%,
      var(--color-water-deep) 42%,
      #142c40 76%,
      #0b2132 100%
    );
    color: var(--text-on-dark);
    /*
     * Начинаем секцию после water, а не накладываем её поверх незавершённого
     * градиента. Уменьшенный padding сохраняет прежнее положение контента.
     */
    padding-top: 60px;
    margin-top: 0;
  }
  .section--deep .eyebrow { color: var(--color-water-light); }

  .section--abyss {
    background:
      radial-gradient(rgba(60, 117, 135, .18), transparent 23%),
      linear-gradient(to bottom, #0b2132 0%, #051722 26%, var(--color-abyss) 72%);
    color: var(--text-on-dark);
    padding: 200px 0;
  }
  .section--abyss .eyebrow { color: var(--color-water-light); }

  /* Hero Layout */
  .section--surface {
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: url('/hero_background.png');
    background-size: cover;
    background-position: center;
    opacity: 1; 
  }

  .hero-grid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 2;
  }

  .hero-content {
    position: relative;
    width: 700px;
  }
  h1 { 
    font-size: clamp(46px, 5.8vw, 80px); 
    margin-bottom: 32px; 
    line-height: 0.95; 
    color: var(--text-primary);
    letter-spacing: -0.06em;
  }
  .lead { 
    font-size: clamp(18px, 1.6vw, 22px); 
    max-width: 500px; 
    margin-bottom: 56px; 
    opacity: 0.85; 
    color: var(--text-secondary);
  }
  .actions { display: flex; gap: 20px; }

  .button-primary { background: var(--color-water-deep); color: var(--color-off-white); }

  .scroll-indicator { margin-top: auto; padding-top: 80px; opacity: 0.4; }

  /* Positioning */
  .positioning {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(300px, .75fr);
    gap: 72px 110px;
    padding-top: 48px;
  }
  .positioning-heading h2 {
    max-width: 760px;
    font-size: clamp(58px, 6.8vw, 96px);
    line-height: .86;
    letter-spacing: -.075em;
  }
  .positioning-body {
    align-self: end;
    padding-bottom: 8px;
    max-width: 520px;
  }
  .positioning-lead {
    margin: 0 0 28px;
    font-size: clamp(24px, 2.2vw, 34px);
    line-height: 1.12;
    letter-spacing: -.035em;
    color: var(--text-primary);
  }
  .positioning-copy {
    margin: 0;
    max-width: 480px;
    font-size: 17px;
    line-height: 1.6;
    color: var(--text-secondary);
  }
  .process {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: minmax(240px, .65fr) minmax(0, 1.35fr);
    gap: 80px;
    margin-top: 64px;
    padding-top: 56px;
    border-top: 1px solid rgba(26, 43, 51, .2);
  }
  .process-intro {
    align-self: start;
  }
  .process-intro .eyebrow { margin-bottom: 20px; }
  .process-intro p {
    max-width: 300px;
    margin: 0;
    font-size: 17px;
    line-height: 1.5;
    color: var(--text-secondary);
  }
  .process-steps {
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .process-steps::before {
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    width: 1px;
    background: rgba(26, 43, 51, .24);
  }
  .process-step {
    position: relative;
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    grid-template-rows: auto auto;
    min-height: 0;
    padding: 0 0 56px;
  }
  .process-step:last-child { padding-bottom: 0; }
  .process-number {
    position: relative;
    z-index: 2;
    grid-row: 1 / 3;
    display: grid;
    place-items: center;
    align-self: start;
    width: 41px;
    height: 41px;
    border: 1px solid rgba(26, 43, 51, .28);
    border-radius: 0;
    background: #b8d8e5;
    font: 500 11px/1.3 'DM Mono', monospace;
    letter-spacing: .08em;
    color: var(--text-secondary);
  }
  .process-step h3 {
    margin: 3px 0 12px;
    font-size: clamp(27px, 2.8vw, 40px);
    line-height: 1;
  }
  .process-step p {
    margin: 0;
    max-width: 560px;
    font-size: 16px;
    line-height: 1.55;
    color: var(--text-secondary);
  }

  .agile-heading {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(300px, .8fr);
    gap: 40px 80px;
    align-items: end;
    margin-bottom: 72px;
  }
  .agile-heading .eyebrow { grid-column: 1 / -1; margin-bottom: -8px; }
  .agile-heading h2 {
    font-size: clamp(48px, 5.6vw, 78px);
    line-height: .9;
    letter-spacing: -.07em;
  }
  .agile-heading p {
    max-width: 430px;
    margin: 0 0 5px;
    font-size: 18px;
    line-height: 1.6;
    color: var(--text-secondary);
  }
  .agile-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(26, 43, 51, .2);
  }
  .agile-card {
    min-height: 260px;
    padding: 28px 28px 24px 0;
    border-right: 1px solid rgba(26, 43, 51, .2);
  }
  .agile-card + .agile-card { padding-left: 28px; }
  .agile-card:last-child { border-right: 0; }
  .agile-card > span {
    display: block;
    margin-bottom: 56px;
    font: 500 11px/1.3 'DM Mono', monospace;
    letter-spacing: .08em;
    color: var(--text-secondary);
  }
  .agile-card h3 { margin-bottom: 14px; font-size: 23px; line-height: 1.05; }
  .agile-card p { margin: 0; font-size: 15px; line-height: 1.55; color: var(--text-secondary); }

  /* Services */
  .services-heading {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(280px, .65fr);
    gap: 80px;
    align-items: end;
    margin-bottom: 80px;
  }
  .services-heading h2 {
    font-size: clamp(54px, 6.3vw, 88px);
    line-height: .88;
    letter-spacing: -.075em;
  }
  .services-heading > p {
    max-width: 410px;
    margin: 0 0 8px;
    font-size: 19px;
    line-height: 1.55;
    color: var(--text-secondary);
  }
  .services-list {
    border-top: 1px solid rgba(26, 43, 51, .25);
  }
  .descent {
    display: grid;
    grid-template-columns: minmax(260px, .65fr) minmax(420px, 1.35fr);
    gap: 56px;
    align-items: center;
    max-width: 920px;
    margin: 112px 0 -112px auto;
    position: relative;
    z-index: 3;
  }
  .descent-copy {
    text-align: right;
  }
  .descent-copy span {
    display: block;
    margin-bottom: 12px;
    font: 500 10px/1.3 'DM Mono', monospace;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: rgba(26, 43, 51, .5);
  }
  .descent-copy p {
    margin: 0;
    font-size: 25px;
    line-height: 1.12;
    font-weight: 700;
    letter-spacing: -.04em;
  }
  .descent-mascot {
    display: block;
    width: 100%;
    max-width: 520px;
    height: auto;
    filter: drop-shadow(0 24px 30px rgba(20, 55, 75, .12));
  }

  .service-card {
    display: grid;
    grid-template-columns: 64px minmax(260px, 1.15fr) minmax(220px, .7fr) 48px;
    gap: 24px;
    align-items: start;
    padding: 38px 0 42px;
    border-bottom: 1px solid rgba(26, 43, 51, .25);
    position: relative;
    transition: padding 300ms var(--ease), background 300ms var(--ease);
  }
  .service-card:hover { 
    padding-left: 18px;
    padding-right: 18px;
    background: rgba(255, 255, 255, .18);
  }
  .service-number {
    padding-top: 8px;
    font: 500 11px/1.3 'DM Mono', monospace;
    color: var(--text-secondary);
  }
  .service-main h3 {
    margin-bottom: 18px;
    font-size: clamp(30px, 3vw, 46px);
    line-height: 1;
  }
  .service-main p {
    max-width: 500px;
    margin: 0;
    font-size: 16px;
    line-height: 1.55;
    color: var(--text-secondary);
  }
  .service-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 3px 0 0;
    padding: 0;
    list-style: none;
  }
  .service-tags li {
    padding: 7px 11px;
    border: 1px solid rgba(26, 43, 51, .22);
    border-radius: 0;
    font-size: 11px;
    font-weight: 600;
  }
  .service-arrow {
    justify-self: end;
    font-size: 28px;
    opacity: .45;
    transition: transform 300ms var(--ease), opacity 300ms var(--ease);
  }
  .service-card:hover .service-arrow {
    opacity: 1;
    transform: translate(4px, -4px);
  }

  /* Cases Grid */
  .cases-heading { margin-bottom: 72px; }
  .cases-heading h2 {
    font-size: clamp(52px, 6vw, 84px);
    line-height: .9;
    letter-spacing: -.07em;
  }
  .cases-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(300px, .65fr);
    gap: 32px;
    align-items: start;
  }

  .case-card {
    display: block;
    cursor: pointer;
  }
  .case-card:not(.case-card--featured) { margin-top: 160px; }
  .case-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 4/5;
    overflow: hidden;
    background:
      radial-gradient(rgba(155, 230, 210, .34), transparent 28%),
      linear-gradient(145deg, #174f60 0%, #092b3a 55%, #041c29 100%);
    border-radius: var(--radius-lg);
    margin-bottom: 28px;
    transition: all 500ms var(--ease);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .case-card--featured .case-visual { aspect-ratio: 16/10; }
  .case-card:not(.case-card--featured) .case-visual {
    background:
      radial-gradient(rgba(142, 188, 217, .25), transparent 32%),
      linear-gradient(160deg, #30485c 0%, #172d42 48%, #071c2d 100%);
  }
  .case-code {
    font-size: clamp(94px, 15vw, 230px);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -.1em;
    color: rgba(255, 255, 255, .1);
    transform: translateX(-.05em);
  }
  .case-service, .case-index {
    position: absolute;
    top: 24px;
    font: 500 10px/1.3 'DM Mono', monospace;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .72);
  }
  .case-service { left: 24px; }
  .case-index { right: 24px; }
  .case-card:hover .case-visual { 
    transform: translateY(-6px);
    border-color: var(--color-water-light); 
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
  }
  .meta { display: block; font: 500 11px/1 'DM Mono', monospace; text-transform: uppercase; margin-bottom: 16px; opacity: 0.5; letter-spacing: 0.1em; }
  .case-card h3 { max-width: 620px; font-size: clamp(30px, 3vw, 48px); line-height: 1.02; }
  .case-card:not(.case-card--featured) h3 { font-size: clamp(27px, 2.4vw, 36px); }
  .case-meta p {
    margin: 16px 0 24px;
    font-size: 15px;
    line-height: 1.5;
    color: rgba(240, 244, 245, .62);
  }
  .case-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 700;
  }
  .case-link b { font-size: 17px; transition: transform 250ms var(--ease); }
  .case-card:hover .case-link b { transform: translate(3px, -3px); }

  .header-split { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; }

  /* Final CTA */
  .contact-block {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, .85fr) minmax(460px, 1fr);
    gap: 80px 120px;
    align-items: start;
  }
  .contact-intro h2 {
    max-width: 680px;
    font-size: clamp(56px, 6.3vw, 88px);
    line-height: .88;
    letter-spacing: -.075em;
  }
  .contact-intro > p {
    max-width: 530px;
    margin: 40px 0 0;
    font-size: 18px;
    line-height: 1.6;
    color: rgba(240, 244, 245, .65);
  }
  .contact-direct {
    display: grid;
    gap: 8px;
    margin-top: 64px;
  }
  .contact-direct span {
    font: 500 11px/1.3 'DM Mono', monospace;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: rgba(240, 244, 245, .45);
  }
  .contact-direct a {
    width: fit-content;
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid rgba(240, 244, 245, .3);
  }
  .contact-panel {
    position: relative;
    z-index: 2;
    padding: 38px;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, .035);
  }
  .contact-mascot {
    position: absolute;
    z-index: 3;
    right: 2%;
    top: -171px;
    width: min(430px, 34vw);
    height: auto;
    opacity: 1;
    pointer-events: none;
    filter: drop-shadow(0 16px 24px rgba(0, 0, 0, .2));
    transform: rotate(-5deg);
  }

  .simple-form {
    display: grid;
    gap: 24px;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .simple-form label {
    display: grid;
    gap: 9px;
  }
  .simple-form label > span {
    font-size: 12px;
    font-weight: 600;
    color: rgba(240, 244, 245, .72);
  }

  .simple-form input, .simple-form textarea {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0;
    padding: 17px 18px;
    color: white;
    width: 100%;
    transition: all 300ms var(--ease);
    font-size: 16px;
  }
  .simple-form input:focus, .simple-form textarea:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--color-water-light);
  }

  .simple-form textarea { min-height: 150px; resize: vertical; }
  .simple-form button { margin-top: 4px; width: fit-content; }
  .simple-form .consent {
    display: flex;
    align-items: flex-start;
    grid-template-columns: none;
    gap: 10px;
  }
  .simple-form .consent input {
    flex: 0 0 auto;
    width: 18px;
    height: 18px;
    margin: 1px 0 0;
    padding: 0;
    accent-color: var(--color-water-light);
  }
  .simple-form .consent span {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(240, 244, 245, .55);
  }
  .simple-form .consent a { text-decoration: underline; }

  .section--abyss .button-primary { background: var(--color-water-light); color: var(--color-abyss); }

  @media (max-width: 1200px) {
    .contact-mascot {
      right: 2%;
      top: -145px;
      width: min(380px, 32vw);
    }
  }

  .text-link {
    font-weight: 700;
    color: var(--color-water-light);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    transition: 300ms;
  }
  .text-link:hover { color: var(--color-off-white); transform: translateX(8px); }

  @media (max-width: 1024px) {
    .hero-content { width: min(58vw, 600px); }
    .hero-grid { gap: 64px; }
    .service-card { grid-template-columns: 52px 1fr minmax(200px, .6fr) 40px; }
  }

  @media (max-width: 900px) {
    .contact-mascot {
      right: 3%;
      top: -128px;
      width: min(350px, 38vw);
    }
    .hero-grid { grid-template-columns: 1fr; gap: 56px; }
    .services-heading { grid-template-columns: 1fr; gap: 32px; }
    .cases-grid { grid-template-columns: 1fr; }
    .case-card:not(.case-card--featured) { margin-top: 24px; }
    .hero-content { width: min(62vw, 520px); }
    .header-split { flex-direction: column; align-items: flex-start; }
    .positioning { grid-template-columns: 1fr; gap: 40px; }
    .positioning-body { max-width: 620px; }
    .agile-heading { grid-template-columns: 1fr; gap: 24px; margin-bottom: 52px; }
    .agile-heading .eyebrow { grid-column: auto; margin-bottom: 0; }
    .agile-grid { grid-template-columns: repeat(2, 1fr); }
    .agile-card:nth-child(2n) { border-right: 0; }
    .section--shallow, .section--water { padding-bottom: 120px; }
    .section--deep { padding-top: 20px; }
    .section--abyss { padding: 140px 0; }
    .contact-block { grid-template-columns: 1fr; gap: 64px; }
    .contact-intro > p { max-width: 620px; }
  }

  @media (max-width: 650px) {
    .section--surface {
      min-height: max(740px, 100svh);
      justify-content: flex-start;
      padding: 104px 0 48px;
    }
    .section--shallow {
      background:
        radial-gradient(ellipse at 82% 4%, rgba(255,255,255,.2), transparent 36%),
        linear-gradient(
          to bottom,
          #55b6ea 0,
          #78c3e5 72px,
          #a9d5e6 160px,
          #c6e1e9 260px,
          #b8d8e5 62%,
          #9fc5d6 100%
        );
    }
    .hero-bg {
      background-image: url('/mobile_hero.png');
      background-position: center bottom;
    }
    .hero-content { width: 100%; }
    h1 {
      max-width: 440px;
      font-size: clamp(39px, 12vw, 58px);
      line-height: .98;
      margin-bottom: 22px;
      letter-spacing: -.065em;
    }
    .lead {
      max-width: min(92%, 430px);
      font-size: 16px;
      line-height: 1.45;
      margin-bottom: 28px;
    }
    .actions { gap: 10px; flex-wrap: wrap; }
    .actions .button { padding: 13px 19px; font-size: 12px; }
    .actions .button-secondary {
      border-color: rgba(26, 43, 51, .15);
      background: rgba(255, 255, 255, .28);
      backdrop-filter: blur(6px);
    }
    .positioning {
      gap: 34px;
      padding-top: 16px;
    }
    .positioning-heading h2 {
      font-size: clamp(54px, 17vw, 72px);
      line-height: .88;
    }
    .positioning-lead {
      margin-bottom: 20px;
      font-size: 25px;
    }
    .positioning-copy { font-size: 16px; }
    .process {
      display: block;
      margin-top: 40px;
      padding-top: 34px;
    }
    .process-intro { margin-bottom: 40px; }
    .process-intro .eyebrow { margin-bottom: 14px; }
    .process-intro p { font-size: 16px; }
    .process-steps::before {
      top: 20px;
      bottom: 20px;
      left: 18px;
    }
    .process-step { grid-template-columns: 60px 1fr; padding-bottom: 42px; }
    .process-number { width: 37px; height: 37px; }
    .process-step h3 { margin-top: 2px; font-size: 27px; }
    .section--agile { padding: 80px 0 96px; }
    .agile-heading h2 { font-size: clamp(44px, 13vw, 60px); }
    .agile-heading p { font-size: 16px; }
    .agile-grid { grid-template-columns: 1fr; }
    .agile-card, .agile-card + .agile-card {
      min-height: 0;
      padding: 24px 0 28px;
      border-right: 0;
      border-bottom: 1px solid rgba(26, 43, 51, .2);
    }
    .agile-card:last-child { border-bottom: 0; }
    .agile-card > span { margin-bottom: 28px; }
    .section-header { margin-bottom: 40px; }
    .section-header h2 { font-size: 34px; }
    .services-heading { margin-bottom: 48px; }
    .services-heading h2 { font-size: clamp(54px, 17vw, 72px); }
    .services-heading > p { font-size: 17px; }
    .service-card {
      grid-template-columns: 34px 1fr 32px;
      gap: 12px;
      padding: 28px 0 30px;
    }
    .service-card:hover { padding-left: 0; padding-right: 0; background: transparent; }
    .service-number { padding-top: 5px; }
    .service-main h3 { margin-bottom: 14px; font-size: 28px; }
    .service-main p { font-size: 15px; }
    .service-tags {
      grid-column: 2 / -1;
      margin-top: 8px;
    }
    .service-arrow { font-size: 23px; }
    .descent {
      grid-template-columns: 1fr;
      gap: 24px;
      margin: 72px 0 -76px;
    }
    .descent-copy {
      max-width: 280px;
      margin-left: auto;
      text-align: right;
    }
    .descent-copy p { font-size: 19px; }
    .descent-mascot {
      width: min(115%, 460px);
      max-width: none;
      margin-left: -8%;
    }

    .cases-heading { margin-bottom: 48px; }
    .cases-heading h2 { font-size: clamp(52px, 15vw, 68px); }
    .cases-grid { gap: 64px; }
    .case-card--featured .case-visual,
    .case-visual { aspect-ratio: 4/3; }
    .case-visual { margin-bottom: 22px; border-radius: 0; }
    .case-card h3 { font-size: 26px; }
    .case-card:not(.case-card--featured) h3 { font-size: 26px; }
    .case-code { font-size: 120px; }
    .section--shallow, .section--water { padding-bottom: 88px; }
    .section--deep { padding-top: 32px; margin-top: 0; }
    .section--abyss { padding: 104px 0 80px; }
    .contact-block { gap: 48px; }
    .contact-intro h2 { font-size: clamp(52px, 15vw, 68px); }
    .contact-intro > p { margin-top: 28px; font-size: 16px; }
    .contact-direct { margin-top: 36px; }
    .contact-panel { padding: 22px 16px; border-radius: 0; }
    .contact-mascot {
      position: absolute;
      z-index: 3;
      right: 3%;
      top: -137px;
      width: min(350px, 86vw);
      margin: 0;
      opacity: 1;
      transform: rotate(-5deg);
    }
    .form-row { grid-template-columns: 1fr; gap: 24px; }
    .simple-form input, .simple-form textarea { padding: 17px 18px; border-radius: 0; }
    .simple-form button { width: 100%; justify-content: center; }
  }

  @media (max-width: 480px) {
    .contact-mascot {
      right: 2%;
      top: -112px;
      width: min(300px, 82vw);
    }
    .actions {
      display: grid;
      grid-template-columns: 1fr;
      width: min(100%, 220px);
      gap: 8px;
    }
    .actions .button {
      width: 100%;
      min-height: 44px;
      justify-content: center;
      white-space: nowrap;
    }
    .actions .button-secondary {
      background: rgba(255, 255, 255, .68);
    }
  }

  @media (max-width: 380px) {
    .contact-mascot {
      top: -96px;
      width: min(270px, 80vw);
    }
  }

  @media (max-width: 390px) {
    h1 { font-size: 38px; }
    .lead { font-size: 15px; }
  }
</style>
