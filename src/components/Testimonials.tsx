export default function Testimonials() {
    const TESTIS = [
  {text:'В клинике Рекавери научили проходить трудности без употребления. Я получила поддержку, которую не получала раньше. Здесь мне дали путёвку в новую жизнь, трезвую и счастливую. Спасибо вам за это.',name:'Ольга',city:'Киев',age:'28 лет',r:5},
  {text:'Употреблял более 10 лет опиумные наркотики. После реабилитации — 1,5 года в трезвости. Отличная семья, прекрасная дочь, хорошая работа. Успел получить образование. Спасибо всем, кто участвовал в моём выздоровлении!',name:'Владислав О.',city:'Белая Церковь',age:'32 года',r:5},
  {text:'Десять дней в клинике многому меня научили. Огромное спасибо всему коллективу за внимание и золотые руки. Особую благодарность — доктору Денису Николаевичу и психологам.',name:'Наталья',city:'Киев',age:'38 лет',r:5},
];
 
let activeT = 0;
let testiTimer;
 
function renderTestis(active) {
  const cards = document.getElementById('testiCards');
  const dots = document.getElementById('testiDots');
  cards.innerHTML = TESTIS.map((t,i)=>`
    <div class="testi-card ${i===active?'active':''}" onclick="setTesti(${i})">
      <div class="testi-stars">${'<span class="testi-star">★</span>'.repeat(t.r)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar">👤</div>
        <div>
          <div class="testi-author-name">${t.name}</div>
          <div class="testi-author-meta">${t.city} · ${t.age}</div>
        </div>
      </div>
    </div>
  `).join('');
  dots.innerHTML = TESTIS.map((_,i)=>`<button class="testi-dot ${i===active?'active':''}" onclick="setTesti(${i})"></button>`).join('');
}
 
function setTesti(i) {
  activeT = i;
  renderTestis(i);
  resetTestiTimer();
}
 
function resetTestiTimer() {
  clearInterval(testiTimer);
  testiTimer = setInterval(()=>{ activeT=(activeT+1)%TESTIS.length; renderTestis(activeT); },5500);
}
 
renderTestis(0);
resetTestiTimer();
    return (
        <>
    <section id="testi" class="section">
        <div class="container">
            <div class="testi-grid">
            <div>
                <div class="reveal"><span class="eyebrow">Отзывы</span></div>
                <h2 class="section-title reveal d-1" style="text-align:left">Истории<br><em>выздоровления</em></h2>
                <p style="font-size:.93rem;color:var(--ink-500);line-height:1.82;margin-top:1rem;margin-bottom:2rem;font-weight:300" class="reveal d-2">
                Каждая история — это победа над зависимостью. Наши пациенты возвращаются к полноценной, счастливой жизни.
                </p>
                <div class="testi-dots reveal d-3" id="testiDots"></div>
            </div>
            <div class="testi-cards reveal-r d-2" id="testiCards"></div>
            </div>
        </div>
        </section>
        </>
    )
}
