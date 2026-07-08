document.addEventListener('DOMContentLoaded',()=>{

/* ==========================================================
   TRANSLATIONS (UZ / EN / RU)
   ========================================================== */
const T={
  uz:{
    location:"🟢 Toshkent, O'zbekiston",
    nav_projects:"Loyihalar",nav_stack:"Texnologiyalar",nav_contact:"Bog'lanish",
    hero_badge:"Full-Stack Developer",hero_title:"METINOV SHOXJAXON",
    hero_desc:"Backend'dan frontend'gacha, g'oyadan productiongacha — Python/Flask, Docker va Telegram avtomatlashtirish orqali biznes muammolarini hal qilaman.",
    stat1_val:"15+",stat1_key:"loyiha",stat2_val:"3+",stat2_key:"yil tajriba",stat3_val:"100%",stat3_key:"mijoz mamnunligi",
    cta_projects:"Loyihalarni ko'rish",cta_contact:"Bog'lanish",cta_resume:"Resume (PDF)",
    process_title:"Ish Jarayonim",
    step1_name:"Suhbat",step1_desc:"Loyiha maqsadi, muddatlari va texnik talablarni batafsil muhokama qilamiz.",
    step2_name:"Tahlil va Rejalashtirish",step2_desc:"Texnik arxitektura, ma'lumotlar bazasi va API tuzilmasini loyihalashtiraman.",
    step3_name:"Ishlab Chiqish",step3_desc:"Toza va kengayuvchan kod yozish, har bosqichda natijani mijozga ko'rsatish.",
    step4_name:"Topshirish va Qo'llab-quvvatlash",step4_desc:"Serverga joylashtirish, test, hujjatlashtirish va keyingi texnik yordam.",
    stack_title:"Texnologiyalar",stack_backend:"Backend",stack_devops:"DevOps",stack_auto:"Avtomatlashtirish",stack_frontend:"Frontend",
    projects_title:"Loyihalar",projects_sub:"Dasturlash sohasidagi so'nggi ishlarim va amaliy yechimlar.",project_view:"Loyihani ko'rish",
    test_title:"Mijozlar Fikri",
    contact_title:"Keyingi loyihangizni muhokama qilaylik",contact_desc:"Telegram yoki Instagram orqali darhol bog'laning. G'oyangizni amalga oshirishga tayyorman.",
    tg_dm_name:"Telegram (Shaxsiy)",tg_dm_text:"To'g'ridan-to'g'ri shaxsiy yozishmada loyihani muhokama qilish.",
    insta_name:"Instagram",insta_text:"Shaxsiy blog va ish faoliyatim.",
    chan_name:"Telegram Kanal",chan_text:"Portfolio, yangiliklar va dasturlash postlari.",
    github_text:"Ochiq manba kodlarim va loyihalarim.",
    footer_rights:"Barcha huquqlar himoyalangan.",footer_channel:"Kanal"
  },
  en:{
    location:"🟢 Tashkent, Uzbekistan",
    nav_projects:"Projects",nav_stack:"Stack",nav_contact:"Contact",
    hero_badge:"Full-Stack Developer",hero_title:"METINOV SHOXJAXON",
    hero_desc:"From backend to frontend, from idea to production — solving business problems through Python/Flask, Docker and Telegram automation.",
    stat1_val:"15+",stat1_key:"projects",stat2_val:"3+",stat2_key:"years exp.",stat3_val:"100%",stat3_key:"client satisfaction",
    cta_projects:"View Projects",cta_contact:"Contact",cta_resume:"Resume (PDF)",
    process_title:"My Process",
    step1_name:"Discovery",step1_desc:"We discuss project goals, timelines and technical requirements in detail.",
    step2_name:"Planning & Architecture",step2_desc:"I design the technical architecture, database and API structure.",
    step3_name:"Development",step3_desc:"Writing clean, scalable code with regular progress demos.",
    step4_name:"Delivery & Support",step4_desc:"Server deployment, testing, documentation and ongoing technical support.",
    stack_title:"Stack",stack_backend:"Backend",stack_devops:"DevOps",stack_auto:"Automation",stack_frontend:"Frontend",
    projects_title:"Projects",projects_sub:"Recent work and practical solutions in software development.",project_view:"View Project",
    test_title:"Client Feedback",
    contact_title:"Let's discuss your next project",contact_desc:"Reach out via Telegram or Instagram. Ready to bring your ideas to life.",
    tg_dm_name:"Telegram (DM)",tg_dm_text:"Direct message to discuss your project.",
    insta_name:"Instagram",insta_text:"Personal blog and workflow.",
    chan_name:"Telegram Channel",chan_text:"Portfolio, updates and dev posts.",
    github_text:"Open source code and projects.",
    footer_rights:"All rights reserved.",footer_channel:"Channel"
  },
  ru:{
    location:"🟢 Ташкент, Узбекистан",
    nav_projects:"Проекты",nav_stack:"Технологии",nav_contact:"Контакты",
    hero_badge:"Full-Stack разработчик",hero_title:"МЕТИНОВ ШОХЖАХОН",
    hero_desc:"От бэкенда до фронтенда, от идеи до продакшена — решаю бизнес-задачи через Python/Flask, Docker и автоматизацию Telegram.",
    stat1_val:"15+",stat1_key:"проектов",stat2_val:"3+",stat2_key:"года опыта",stat3_val:"100%",stat3_key:"довольных клиентов",
    cta_projects:"Смотреть проекты",cta_contact:"Связаться",cta_resume:"Резюме (PDF)",
    process_title:"Мой Процесс",
    step1_name:"Обсуждение",step1_desc:"Детально обсуждаем цели проекта, сроки и технические требования.",
    step2_name:"Анализ и Планирование",step2_desc:"Проектирую техническую архитектуру, базу данных и структуру API.",
    step3_name:"Разработка",step3_desc:"Чистый и масштабируемый код с регулярными демо-показами прогресса.",
    step4_name:"Сдача и Поддержка",step4_desc:"Развёртывание на сервере, тестирование, документация и техническая поддержка.",
    stack_title:"Технологии",stack_backend:"Бэкенд",stack_devops:"DevOps",stack_auto:"Автоматизация",stack_frontend:"Фронтенд",
    projects_title:"Проекты",projects_sub:"Последние работы и практические решения в разработке.",project_view:"Смотреть проект",
    test_title:"Отзывы Клиентов",
    contact_title:"Обсудим ваш следующий проект",contact_desc:"Свяжитесь через Telegram или Instagram. Готов воплотить ваши идеи.",
    tg_dm_name:"Telegram (ЛС)",tg_dm_text:"Личное сообщение для обсуждения проекта.",
    insta_name:"Instagram",insta_text:"Личный блог и рабочий процесс.",
    chan_name:"Telegram Канал",chan_text:"Портфолио, новости и посты о разработке.",
    github_text:"Открытый код и проекты.",
    footer_rights:"Все права защищены.",footer_channel:"Канал"
  }
};

/* ==========================================================
   PROJECTS
   ========================================================== */
const projects=[
  {num:"01",
   name:{uz:"Shifo Dent — Stomatologiya Sahifasi",en:"Shifo Dent — Dental Clinic Landing",ru:"Shifo Dent — Стоматологический лендинг"},
   story:{uz:"Stomatologiya klinikasi uchun xizmatlar, shifokorlar jamoasi va mijozlar fikrlari bo'limiga ega bo'lgan moslashuvchan landing sahifasi.",en:"A responsive landing page built for a dental clinic featuring services, doctor profiles, and client feedback.",ru:"Адаптивный лендинг для стоматологической клиники с разделами услуг, списком врачей и отзывами пациентов."},
   tags:["HTML5","CSS3","JavaScript","Responsive"],image:"assets/dental_clinic.png",link:"https://shoxa-devv.github.io/denatl_clinic/"},
  {num:"02",
   name:{uz:"Aura Gold — Premium Barber Shop Sahifasi",en:"Aura Gold — Premium Barber Shop Landing",ru:"Aura Gold — Лендинг барбершопа премиум-класса"},
   story:{uz:"Eksklyuziv premium erkaklar saloni uchun yaratilgan hashamatli dizayn va bron qilish imkoniyatiga ega bo'lgan landing sahifasi.",en:"A luxurious landing page built for an exclusive premium men's salon, featuring booking integrations and services display.",ru:"Премиальный лендинг для эксклюзивного мужского салона с интеграцией бронирования и галереей услуг."},
   tags:["HTML5","CSS3","JavaScript","Responsive"],image:"assets/barber_shop.png",link:"https://shoxa-devv.github.io/barber_shop/"},
  {num:"03",
   name:{uz:"Iron Forge — Fitness Klub Sahifasi",en:"Iron Forge — Fitness Club Landing",ru:"Iron Forge — Лендинг фитнес-клуба"},
   story:{uz:"Professional trenerlar, mashg'ulot dasturlari va a'zolik rejalari bilan tanishtiruvchi dinamik va sport ruhidagi fitness klub sahifasi.",en:"A dynamic and athletic landing page built for a fitness club, showcasing trainers, training programs, and membership plans.",ru:"Динамичный спортивный лендинг для фитнес-клуба с презентацией тренеров, программ тренировок и тарифных планов."},
   tags:["HTML5","CSS3","JavaScript","Responsive"],image:"assets/fitness.png",link:"https://shoxa-devv.github.io/fitness-landing/"},
  {num:"04",
   name:{uz:"Savor & Soul — Restoran Sahifasi",en:"Savor & Soul — Restaurant Landing",ru:"Savor & Soul — Лендинг ресторана"},
   story:{uz:"Premium restoran uchun yaratilgan, menyu taqdimoti, stol band qilish (bron qilish) va shinam muhitni ko'rsatuvchi hashamatli veb-sayt.",en:"A premium restaurant landing page featuring menu showcase, table booking functionality, and atmospheric details.",ru:"Лендинг премиального ресторана с демонстрацией меню, функцией бронирования столов и описанием атмосферы заведения."},
   tags:["HTML5","CSS3","JavaScript","Responsive"],image:"assets/restaurant.png",link:"https://shoxa-devv.github.io/restoran/"},
  {num:"05",
   name:{uz:"CS2Skins — Steam Skin Savdosi",en:"CS2Skins — Steam Skin Trading Platform",ru:"CS2Skins — Платформа для торговли скинами Steam"},
   story:{uz:"CS2 o'yini skinlarini Steam API orqali tez va xavfsiz sotish hamda sotib olish platformasi. Tizim Dota 2, Rust kabi boshqa o'yinlar uchun ham oson moslashtirilishi mumkin.",en:"A secure skin trading website for CS2 powered by Steam API. Built to be easily adaptable for other games like Dota 2, Rust, or TF2.",ru:"Безопасная платформа для торговли скинами CS2 через Steam API. Система может быть легко адаптирована под другие игры, такие как Dota 2, Rust и TF2."},
   tags:["HTML5","CSS3","JavaScript","Steam API","Responsive"],image:"assets/cs2skins.png",link:"https://shoxa-devv.github.io/cs2skins/"},
  {num:"06",
   name:{uz:"Apex Academy — O'quv Markazi Sahifasi",en:"Apex Academy — Education Center Landing",ru:"Apex Academy — Лендинг учебного центра"},
   story:{uz:"Zamonaviy til o'rgatish metodikalari, mavjud kurslar, o'qituvchilar jamoasi va bitiruvchilar natijalarini taqdim etuvchi o'quv markazi landing sahifasi.",en:"An interactive landing page built for an education center, highlighting modern teaching methods, courses, teachers, and alumni results.",ru:"Интерактивный лендинг для учебного центра с презентацией методик обучения, курсов, преподавателей и результатов выпускников."},
   tags:["HTML5","CSS3","JavaScript","Responsive"],image:"assets/oquvmarkaz.png",link:"https://shoxa-devv.github.io/oquvmarkaz/"}
];

/* ==========================================================
   TESTIMONIALS
   ========================================================== */
const testimonials=[
  {quote:{uz:"Shoxjaxon bilan ishlash juda qulay — har doim muddatda topshiradi va texnik masalalarni aniq tushuntiradi. Telegram botimiz savdolarni 3 barobar oshirdi.",en:"Working with Shoxjaxon is seamless — always delivers on time and explains technical details clearly. Our Telegram bot tripled our sales.",ru:"Работать с Шохжахоном очень удобно — всегда сдаёт вовремя и понятно объясняет технические моменты. Наш Telegram-бот утроил продажи."},
   name:"Jasur Karimov",role:{uz:"Online do'kon egasi",en:"Online store owner",ru:"Владелец интернет-магазина"}},
  {quote:{uz:"Professional yondashuv va toza kod. Landing sahifamiz Google'da birinchi sahifaga chiqdi. Keyingi loyihamizda ham albatta Shoxjaxon bilan ishlaymiz.",en:"Professional approach and clean code. Our landing page reached Google's first page. We'll definitely work with Shoxjaxon on our next project.",ru:"Профессиональный подход и чистый код. Наш лендинг вышел на первую страницу Google. Обязательно обратимся снова."},
   name:"Dilnoza Rahimova",role:{uz:"Marketing menejeri",en:"Marketing manager",ru:"Менеджер по маркетингу"}}
];

/* ==========================================================
   LANGUAGE SYSTEM
   ========================================================== */
let lang=localStorage.getItem('lang')||'uz';

function setLang(l){
  lang=l;localStorage.setItem('lang',l);
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
  const els=document.querySelectorAll('[data-i18n]');
  els.forEach(e=>e.classList.add('i18n-fade'));
  setTimeout(()=>{
    els.forEach(e=>{const k=e.dataset.i18n;if(T[l]&&T[l][k])e.textContent=T[l][k]});
    renderProjects();renderTestimonials();
    els.forEach(e=>e.classList.remove('i18n-fade'));
  },150);
}

document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));

/* ==========================================================
   RENDER PROJECTS
   ========================================================== */
const arrowSVG='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>';

function renderProjects(){
  const c=document.getElementById('projects-list');if(!c)return;
  const vt=T[lang]?.project_view||'Ko\'rish';
  c.innerHTML=projects.map((p,i)=>{
    const img=p.image?`<img src="${p.image}" alt="${p.name[lang]}" loading="lazy">`:`<span class="p-thumb-placeholder">${p.name[lang]}</span>`;
    const d=i>0?' reveal-d'+Math.min(i,2):'';
    return`<div class="p-row reveal${d}" data-href="${p.link}">
      <div class="p-num">${p.num}</div>
      <div class="p-info">
        <h3 class="p-name">${p.name[lang]}</h3>
        <p class="p-story">${p.story[lang]}</p>
        <div class="p-tags">${p.tags.map(t=>`<span class="p-tag">${t}</span>`).join('')}</div>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="p-link">${vt} ${arrowSVG}</a>
      </div>
      <div class="p-thumb">${img}</div>
    </div>`;
  }).join('');

  // make entire row clickable
  c.querySelectorAll('.p-row[data-href]').forEach(row=>{
    row.addEventListener('click',e=>{
      if(e.target.closest('a'))return;
      const href=row.dataset.href;
      if(href&&href!=='#')window.open(href,'_blank','noopener,noreferrer');
    });
  });

  observe();
}

/* ==========================================================
   RENDER TESTIMONIALS
   ========================================================== */
function renderTestimonials(){
  const c=document.getElementById('testimonials-list');if(!c)return;
  c.innerHTML=testimonials.map((t,i)=>{
    const d=i>0?' reveal-d'+Math.min(i,2):'';
    return`<div class="test-card reveal${d}">
      <p class="test-quote">"${t.quote[lang]}"</p>
      <div class="test-author">
        <span class="test-name">${t.name}</span>
        <span class="test-role">${t.role[lang]}</span>
      </div>
    </div>`;
  }).join('');
  observe();
}

/* ==========================================================
   CLOCK (Asia/Tashkent)
   ========================================================== */
const clockEl=document.getElementById('clock');
function tick(){if(!clockEl)return;clockEl.textContent=new Date().toLocaleTimeString('uz-UZ',{timeZone:'Asia/Tashkent',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false})}
tick();setInterval(tick,1000);

/* ==========================================================
   HEADER SCROLL
   ========================================================== */
const header=document.getElementById('header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40),{passive:true});

/* ==========================================================
   BACK TO TOP
   ========================================================== */
const btt=document.getElementById('back-top');
window.addEventListener('scroll',()=>{btt.classList.toggle('visible',scrollY>600)},{passive:true});
btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ==========================================================
   MOBILE NAV
   ========================================================== */
const burger=document.getElementById('burger');
const nav=document.getElementById('nav');
function closeMenu(){burger.classList.remove('active');nav.classList.remove('active');burger.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}
burger.addEventListener('click',()=>{const o=burger.classList.toggle('active');nav.classList.toggle('active');burger.setAttribute('aria-expanded',o);document.body.classList.toggle('menu-open',o)});
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',e=>{if(document.body.classList.contains('menu-open')&&!nav.contains(e.target)&&!burger.contains(e.target))closeMenu()});

/* ==========================================================
   ACTIVE NAV ON SCROLL
   ========================================================== */
const secs=document.querySelectorAll('section');
const links=document.querySelectorAll('.nav-link');
window.addEventListener('scroll',()=>{let cur='';secs.forEach(s=>{if(scrollY>=s.offsetTop-120)cur=s.id});links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+cur))},{passive:true});

/* ==========================================================
   SCROLL REVEAL
   ========================================================== */
function observe(){
  const els=document.querySelectorAll('.reveal:not(.revealed)');
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');obs.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
  els.forEach(e=>obs.observe(e));
}

/* ==========================================================
   INIT
   ========================================================== */
setLang(lang);observe();

});
