export default function About() {
	return (
		<>
			<section id="about" className="section" style={{ background: "#fff" }}>
				<div className="container">
					<div className="about-grid">
						<div className="about-visual reveal-l">
							<div className="about-img-main">
								<div
									className="about-img-bg"
									style={{ justifyContent: "flex-start", gap: "1.5rem" }}
								>
									{/* Header */}
									<div>
										<div
											style={{
												fontSize: ".6rem",
												letterSpacing: ".2em",
												textTransform: "uppercase",
												color: "rgba(249,189,21,.6)",
												marginBottom: ".4rem",
											}}
										>
											Центр Recovery · Киев
										</div>
										<div
											style={{
												fontFamily: "'Playfair Display', serif",
												fontSize: "1.6rem",
												fontWeight: 700,
												color: "#fff",
												lineHeight: 1.1,
											}}
										>
											21 год
											<br />
											<span
												style={{
													fontSize: "1rem",
													fontWeight: 400,
													color: "rgba(255,255,255,.5)",
												}}
											>
												профессиональной помощи
											</span>
										</div>
									</div>

									{/* Stats row */}
									<div
										style={{
											display: "grid",
											gridTemplateColumns: "1fr 1fr 1fr",
											gap: ".75rem",
										}}
									>
										{[
											{ val: "11K+", lbl: "Пациентов" },
											{ val: "96%", lbl: "Успешность" },
											{ val: "24/7", lbl: "Поддержка" },
										].map(({ val, lbl }) => (
											<div
												key={lbl}
												style={{
													background: "rgba(255,255,255,.06)",
													border: "1px solid rgba(249,189,21,.12)",
													borderRadius: ".9rem",
													padding: ".85rem .6rem",
													textAlign: "center",
												}}
											>
												<div
													style={{
														fontFamily: "'Playfair Display', serif",
														fontSize: "1.3rem",
														fontWeight: 700,
														color: "var(--brand-400)",
														lineHeight: 1,
													}}
												>
													{val}
												</div>
												<div
													style={{
														fontSize: ".58rem",
														color: "rgba(255,255,255,.38)",
														marginTop: "4px",
														letterSpacing: ".08em",
														textTransform: "uppercase",
													}}
												>
													{lbl}
												</div>
											</div>
										))}
									</div>

									{/* Heartbeat SVG line */}
									<div style={{ padding: ".5rem 0" }}>
										<div
											style={{
												fontSize: ".58rem",
												color: "rgba(255,255,255,.3)",
												letterSpacing: ".12em",
												textTransform: "uppercase",
												marginBottom: ".5rem",
											}}
										>
											Мониторинг состояния
										</div>
										<svg
											viewBox="0 0 260 48"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											style={{ width: "100%" }}
										>
											<polyline
												points="0,24 30,24 40,8 50,38 60,18 70,28 80,24 120,24 130,4 140,42 150,14 160,32 170,24 260,24"
												stroke="rgba(249,189,21,0.7)"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
											/>
											<circle
												cx="170"
												cy="24"
												r="3"
												fill="var(--brand-500)"
												opacity=".9"
											>
												<animate
													attributeName="opacity"
													values="0.9;0.2;0.9"
													dur="1.8s"
													repeatCount="indefinite"
												/>
											</circle>
										</svg>
									</div>

									{/* Status pills */}
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											gap: ".6rem",
										}}
									>
										{[
											{ dot: "#4ade80", label: "Принимаем пациентов" },
											{
												dot: "var(--brand-500)",
												label: "Анонимность гарантирована",
											},
											{ dot: "var(--sap-400)", label: "Лицензия МЗ №1584" },
										].map(({ dot, label }) => (
											<div
												key={label}
												style={{
													display: "flex",
													alignItems: "center",
													gap: ".6rem",
												}}
											>
												<div
													style={{
														width: 7,
														height: 7,
														borderRadius: "50%",
														background: dot,
														flexShrink: 0,
													}}
												></div>
												<div
													style={{
														fontSize: ".75rem",
														color: "rgba(255,255,255,.52)",
														fontWeight: 300,
													}}
												>
													{label}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="about-accent"></div>
						</div>
						<div>
							<div className="reveal">
								<span className="eyebrow">О центре Recovery</span>
							</div>
							<h2
								className="section-title reveal d-1"
								style={{ textAlign: "left" }}
							>
								Ваш надёжный партнёр
								<br />
								<em>по борьбе с зависимостью</em>
							</h2>
							<p
								className="reveal d-2"
								style={{
									fontSize: ".95rem",
									color: "var(--ink-500)",
									lineHeight: "1.86",
									margin: "0 0 2.5rem",
									fontWeight: 300,
									marginTop: "1rem",
								}}
							>
								Реабилитационный центр Recovery — место, где вы найдёте не
								только лечение, но и надежду на новую, свободную жизнь. 21 год
								профессиональной работы, тысячи восстановленных судеб и команда
								настоящих специалистов.
							</p>
							<div className="about-features">
								<div className="feat-box reveal d-1">
									<div className="feat-num">01</div>
									<div className="feat-title">Индивидуальный подход</div>
									<div className="feat-desc">
										Персонализированные программы для каждого пациента
									</div>
								</div>
								<div className="feat-box reveal d-2">
									<div className="feat-num">02</div>
									<div className="feat-title">Передовые методы</div>
									<div className="feat-desc">
										Медикаментозная, психологическая и социальная реабилитация
									</div>
								</div>
								<div className="feat-box reveal d-3">
									<div className="feat-num">03</div>
									<div className="feat-title">Комфорт и безопасность</div>
									<div className="feat-desc">
										Уютная атмосфера, способствующая выздоровлению
									</div>
								</div>
								<div className="feat-box reveal d-4">
									<div className="feat-num">04</div>
									<div className="feat-title">Полная анонимность</div>
									<div className="feat-desc">
										Строгая конфиденциальность и защита данных
									</div>
								</div>
								<div className="feat-box reveal d-5">
									<div className="feat-num">05</div>
									<div className="feat-title">Постреабилитация</div>
									<div className="feat-desc">
										Поддержка после выписки для закрепления результатов
									</div>
								</div>
								<div className="feat-box reveal d-6">
									<div className="feat-num">06</div>
									<div className="feat-title">Высокий уровень помощи</div>
									<div className="feat-desc">
										Команда с глубокими знаниями в наркологии
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
