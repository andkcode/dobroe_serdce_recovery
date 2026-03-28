import { useState } from "react";

const METHODS = [
	{
		ico: "💊",
		title: "Медикаментозная терапия",
		desc: "Наши специалисты проводят тщательную оценку каждого пациента и разрабатывают индивидуальные планы лечения. Медикаментозная терапия снижает симптомы отмены, контролирует влечение к веществу и облегчает процесс выздоровления.",
		tags: [
			"Детоксикация",
			"Антаблирование",
			"Блокировка рецепторов",
			"Налтрексон",
		],
	},
	{
		ico: "🧠",
		title: "Психотерапия",
		desc: "Психологи работают индивидуально с каждым пациентом, помогая разобраться в причинах зависимости. Групповая терапия создаёт поддерживающую обстановку, где пациенты делятся опытом и учатся друг у друга.",
		tags: ["КПТ", "Гештальт", "Системная терапия", "Мотивационное интервью"],
	},
	{
		ico: "🏃",
		title: "Физиотерапия",
		desc: "Физическая активность — тренировки, йога, прогулки — укрепляет физическое и психологическое благополучие. Регулярные занятия снимают стресс, повышают настроение и улучшают общее состояние.",
		tags: [
			"Йога",
			"Спортивный зал",
			"Прогулки на воздухе",
			"Дыхательные практики",
		],
	},
	{
		ico: "🎨",
		title: "Арт-терапия",
		desc: "Творческие методы помогают пациентам выразить свои переживания через искусство. Рисование, музыка и другие формы творчества способствуют эмоциональному исцелению и самопознанию.",
		tags: [
			"Рисование",
			"Музыкотерапия",
			"Дневник",
			"Тело-ориентированные практики",
		],
	},
];

export default function Methods() {
	const [activeIdx, setActiveIdx] = useState(0);
	const m = METHODS[activeIdx];

	return (
		<section id="methods" className="section">
			<div className="container">
				<div className="methods-grid">
					<div>
						<div className="reveal">
							<span className="eyebrow">Наши методы</span>
						</div>
						<h2
							className="section-title reveal d-1"
							style={{ textAlign: "start" }}
						>
							Методы лечения
							<br />
							<em>в нашем центре</em>
						</h2>
						<p
							style={{
								fontSize: "0.93rem",
								color: "var(--ink-500)",
								lineHeight: 1.82,
								marginBottom: "2.5rem",
								fontWeight: 300,
								marginTop: "1rem",
							}}
							className="reveal d-2"
						>
							Мы используем только научно обоснованные и клинически проверенные
							подходы, адаптируя их под нужды каждого пациента.
						</p>
						<div className="method-tabs reveal d-3">
							{METHODS.map((method, i) => (
								<button
									key={i}
									className={`method-tab${i === activeIdx ? " active" : ""}`}
									onClick={() => setActiveIdx(i)}
								>
									<span className="method-tab-ico">{method.ico}</span>
									<span className="method-tab-txt">{method.title}</span>
								</button>
							))}
						</div>
					</div>

					<div className="reveal-r d-2">
						<div className="method-panel">
							<div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
								{m.ico}
							</div>
							<div className="method-panel-title">{m.title}</div>
							<p className="method-panel-desc">{m.desc}</p>
							<div className="method-tags">
								{m.tags.map((tag, i) => (
									<span key={i} className="method-tag">
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
