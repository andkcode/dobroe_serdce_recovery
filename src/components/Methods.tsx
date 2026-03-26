export default function Methods() {
    const METHODS = [
  {
    ico:'💊',
    title:'Медикаментозная терапия',
    desc:'Наши специалисты проводят тщательную оценку каждого пациента и разрабатывают индивидуальные планы лечения. Медикаментозная терапия снижает симптомы отмены, контролирует влечение к веществу и облегчает процесс выздоровления.',
    tags:['Детоксикация','Антаблирование','Блокировка рецепторов','Налтрексон'],
  },
  {
    ico:'🧠',
    title:'Психотерапия',
    desc:'Психологи работают индивидуально с каждым пациентом, помогая разобраться в причинах зависимости. Групповая терапия создаёт поддерживающую обстановку, где пациенты делятся опытом и учатся друг у друга.',
    tags:['КПТ','Гештальт','Системная терапия','Мотивационное интервью'],
  },
  {
    ico:'🏃',
    title:'Физиотерапия',
    desc:'Физическая активность — тренировки, йога, прогулки — укрепляет физическое и психологическое благополучие. Регулярные занятия снимают стресс, повышают настроение и улучшают общее состояние.',
    tags:['Йога','Спортивный зал','Прогулки на воздухе','Дыхательные практики'],
  },
  {
    ico:'🎨',
    title:'Арт-терапия',
    desc:'Творческие методы помогают пациентам выразить свои переживания через искусство. Рисование, музыка и другие формы творчества способствуют эмоциональному исцелению и самопознанию.',
    tags:['Рисование','Музыкотерапия','Дневник','Тело-ориентированные практики'],
  },
];
 
function renderMethodPanel(idx) {
  const m = METHODS[idx];
  document.getElementById('methodPanel').innerHTML = `
    <div style="font-size:3.5rem;margin-bottom:1.5rem">${m.ico}</div>
    <div class="method-panel-title">${m.title}</div>
    <p class="method-panel-desc">${m.desc}</p>
    <div class="method-tags">${m.tags.map(t=>`<span class="method-tag">${t}</span>`).join('')}</div>
  `;
}
 
function switchMethod(idx) {
  document.querySelectorAll('.method-tab').forEach((t,i)=>t.classList.toggle('active',i===idx));
  renderMethodPanel(idx);
}
 
renderMethodPanel(0);
 
    return (
        <>
        <section id="methods" class="section">
        <div class="container">
            <div class="methods-grid">
            <div>
                <div class="reveal"><span class="eyebrow">Наши методы</span></div>
                <h2 class="section-title reveal d-1" style="text-align:left">Методы лечения<br><em>в нашем центре</em></h2>
                <p style="font-size:.93rem;color:var(--ink-500);line-height:1.82;margin-bottom:2.5rem;font-weight:300;margin-top:1rem" class="reveal d-2">
                Мы используем только научно обоснованные и клинически проверенные подходы, адаптируя их под нужды каждого пациента.
                </p>
                <div class="method-tabs reveal d-3" id="methodTabs">
                <button class="method-tab active" onclick="switchMethod(0)">
                    <span class="method-tab-ico">💊</span>
                    <span class="method-tab-txt">Медикаментозная терапия</span>
                </button>
                <button class="method-tab" onclick="switchMethod(1)">
                    <span class="method-tab-ico">🧠</span>
                    <span class="method-tab-txt">Психотерапия</span>
                </button>
                <button class="method-tab" onclick="switchMethod(2)">
                    <span class="method-tab-ico">🏃</span>
                    <span class="method-tab-txt">Физиотерапия</span>
                </button>
                <button class="method-tab" onclick="switchMethod(3)">
                    <span class="method-tab-ico">🎨</span>
                    <span class="method-tab-txt">Арт-терапия</span>
                </button>
                </div>
            </div>
            <div class="reveal-r d-2">
                <div class="method-panel" id="methodPanel">
                </div>
            </div>
            </div>
        </div>
        </section>
        </>
    );
}
