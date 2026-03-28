import { useState, useEffect, useRef } from "react";

const TESTIS = [
	{
		text: "В клинике Рекавери научили проходить трудности без употребления. Я получила поддержку, которую не получала раньше. Здесь мне дали путёвку в новую жизнь, трезвую и счастливую. Спасибо вам за это.",
		name: "Ольга",
		city: "Киев",
		age: "28 лет",
		r: 5,
	},
	{
		text: "Употреблял более 10 лет опиумные наркотики. После реабилитации — 1,5 года в трезвости. Отличная семья, прекрасная дочь, хорошая работа. Успел получить образование. Спасибо всем, кто участвовал в моём выздоровлении!",
		name: "Владислав О.",
		city: "Белая Церковь",
		age: "32 года",
		r: 5,
	},
	{
		text: "Десять дней в клинике многому меня научили. Огромное спасибо всему коллективу за внимание и золотые руки. Особую благодарность — доктору Денису Николаевичу и психологам.",
		name: "Наталья",
		city: "Киев",
		age: "38 лет",
		r: 5,
	},
];


export default function Testimonials() {
	const [activeT, setActiveT] = useState<number>(0);

	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const resetTimer = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
		}

		timerRef.current = setInterval(() => {
			setActiveT((prev) => (prev + 1) % TESTIS.length);
		}, 5500);
	};

	useEffect(() => {
		resetTimer();

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, []);

	const handleSetTesti = (i: number) => {
		setActiveT(i);
		resetTimer();
	};

	return (
		<section id="testi" className="section">
			<div className="container">
				<div className="testi-grid">
					<div>
						<div className="reveal">
							<span className="eyebrow">Отзывы</span>
						</div>
						<h2
							className="section-title reveal d-1"
							style={{ textAlign: "left" }}
						>
							Истории
							<br />
							<em>выздоровления</em>
						</h2>
						<p
							style={{
								fontSize: "0.93rem",
								color: "var(--ink-500)",
								lineHeight: 1.82,
								marginTop: "1rem",
								marginBottom: "2rem",
								fontWeight: 300,
							}}
							className="reveal d-2"
						>
							Каждая история — это победа над зависимостью. Наши пациенты
							возвращаются к полноценной, счастливой жизни.
						</p>
						<div className="testi-dots reveal d-3">
							{TESTIS.map((_, i) => (
								<button
									key={i}
									className={`testi-dot${i === activeT ? " active" : ""}`}
									onClick={() => handleSetTesti(i)}
								/>
							))}
						</div>
					</div>

					<div className="testi-cards reveal-r d-2">
						{TESTIS.map((t, i) => (
							<div
								key={i}
								className={`testi-card${i === activeT ? " active" : ""}`}
								onClick={() => handleSetTesti(i)}
							>
								<div className="testi-stars">
									{Array.from({ length: t.r }).map((_, si) => (
										<span key={si} className="testi-star">
											★
										</span>
									))}
								</div>
								<p className="testi-text">{t.text}</p>
								<div className="testi-author">
									<div className="testi-avatar">👤</div>
									<div>
										<div className="testi-author-name">{t.name}</div>
										<div className="testi-author-meta">
											{t.city} · {t.age}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
