export default function DetoxAccordion() {
	function toggleAcc(btn: HTMLElement) {
		const body = btn.nextElementSibling as HTMLElement;
		const ic = btn.querySelector(".acc-ic");
		const isOpen = body.classList.contains("open");
		const section = btn.closest("section");
		if (section) {
			section
				.querySelectorAll(".acc-body.open")
				.forEach((b) => b.classList.remove("open"));
			section
				.querySelectorAll(".acc-ic.open")
				.forEach((i) => i.classList.remove("open"));
		}
		if (!isOpen) {
			body.classList.add("open");
			ic?.classList.add("open");
		}
	}

	return (
		<section id="detox" className="section">
			<div className="container">
				<div className="detox-grid">
					<div className="detox-visual reveal-l">
						<div className="detox-vis-main">
							<div
								className="detox-vis-inner"
								style={{
									justifyContent: "flex-start",
									gap: "1.25rem",
									padding: "2.5rem",
								}}
							>
								{/* Header */}
								<div>
									<div
										style={{
											fontSize: ".58rem",
											letterSpacing: ".2em",
											textTransform: "uppercase",
											color: "rgba(249,189,21,.6)",
											marginBottom: ".35rem",
										}}
									>
										Протокол детоксикации
									</div>
									<div
										style={{
											fontFamily: "'Playfair Display', serif",
											fontSize: "1.4rem",
											fontWeight: 700,
											color: "#fff",
											lineHeight: 1.15,
										}}
									>
										Программа
										<br />
										<span
											style={{
												fontSize: ".95rem",
												fontWeight: 400,
												color: "rgba(255,255,255,.45)",
											}}
										>
											под медицинским контролем
										</span>
									</div>
								</div>

								{/* Phase progress */}
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: ".55rem",
									}}
								>
									{[
										{ label: "Диагностика", pct: 100, color: "#4ade80" },
										{
											label: "Детоксикация",
											pct: 78,
											color: "var(--brand-500)",
										},
										{ label: "Стабилизация", pct: 52, color: "var(--sap-400)" },
										{
											label: "Реабилитация",
											pct: 28,
											color: "rgba(255,255,255,.3)",
										},
									].map(({ label, pct, color }) => (
										<div key={label}>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													marginBottom: ".3rem",
												}}
											>
												<span
													style={{
														fontSize: ".67rem",
														color: "rgba(255,255,255,.5)",
														fontWeight: 300,
													}}
												>
													{label}
												</span>
												<span
													style={{
														fontSize: ".67rem",
														color: "rgba(255,255,255,.3)",
														fontWeight: 300,
													}}
												>
													{pct}%
												</span>
											</div>
											<div
												style={{
													height: "3px",
													borderRadius: "2px",
													background: "rgba(255,255,255,.07)",
													overflow: "hidden",
												}}
											>
												<div
													style={{
														height: "100%",
														width: `${pct}%`,
														background: color,
														borderRadius: "2px",
														transition: "width 1s ease",
													}}
												></div>
											</div>
										</div>
									))}
								</div>

								{/* Vitals grid */}
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "1fr 1fr",
										gap: ".6rem",
									}}
								>
									{[
										{ ico: "❤️", val: "72", unit: "bpm", lbl: "Пульс" },
										{ ico: "🌡️", val: "36.6", unit: "°C", lbl: "Температура" },
										{ ico: "💊", val: "3/3", unit: "", lbl: "Препараты" },
										{ ico: "🕐", val: "24/7", unit: "", lbl: "Мониторинг" },
									].map(({ ico, val, unit, lbl }) => (
										<div
											key={lbl}
											style={{
												background: "rgba(255,255,255,.05)",
												border: "1px solid rgba(249,189,21,.1)",
												borderRadius: ".85rem",
												padding: ".75rem",
											}}
										>
											<div
												style={{ fontSize: ".72rem", marginBottom: ".25rem" }}
											>
												{ico}
											</div>
											<div
												style={{
													fontFamily: "'Playfair Display', serif",
													fontSize: "1.1rem",
													fontWeight: 700,
													color: "var(--brand-400)",
													lineHeight: 1,
												}}
											>
												{val}
												<span
													style={{
														fontSize: ".65rem",
														color: "rgba(255,255,255,.3)",
														marginLeft: "2px",
													}}
												>
													{unit}
												</span>
											</div>
											<div
												style={{
													fontSize: ".58rem",
													color: "rgba(255,255,255,.32)",
													marginTop: "3px",
													letterSpacing: ".06em",
													textTransform: "uppercase",
												}}
											>
												{lbl}
											</div>
										</div>
									))}
								</div>

								{/* Live indicator */}
								<div
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
											background: "#4ade80",
											flexShrink: 0,
											boxShadow: "0 0 0 3px rgba(74,222,128,.18)",
										}}
									></div>
									<span
										style={{
											fontSize: ".68rem",
											color: "rgba(255,255,255,.38)",
											fontWeight: 300,
										}}
									>
										Пациент под наблюдением · Сейчас
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="reveal-r">
						<div>
							<span className="eyebrow">Детоксикация</span>
						</div>
						<h2
							className="section-title"
							style={{
								textAlign: "left",
								fontSize: "clamp(1.8rem,3vw,2.6rem)",
								marginTop: "1rem",
							}}
						>
							Процесс детоксикации включает несколько ключевых этапов
						</h2>
						<div style={{ marginTop: "2rem" }}>
							{[
								{
									q: "Оценка состояния пациента",
									a: "Пациент проходит обширную медицинскую и психологическую диагностику, включающую анализ физического состояния, анамнез употребления веществ, психологическую и социальную историю. Это позволяет составить индивидуальный план лечения.",
								},
								{
									q: "Медицинская поддержка",
									a: "Клиника обеспечивает медикаментозную поддержку широким спектром препаратов для полного снятия физических симптомов отмены. Круглосуточный мониторинг состояния пациента опытными специалистами.",
								},
								{
									q: "Психологическая поддержка",
									a: "Пациенты получают психологическую помощь для преодоления эмоциональных и психологических аспектов детоксикации. Работа с тревожностью, страхами и эмоциональной нестабильностью в период отмены.",
								},
								{
									q: "Мониторинг и корректировка",
									a: "Регулярные проверки, анализы и оценки помогают адаптировать лечение в соответствии с потребностями пациента. Гибкий подход позволяет оперативно реагировать на изменения в состоянии.",
								},
								{
									q: "Поддержка после детоксикации",
									a: "После завершения детоксикации пациент участвует в реабилитационных программах и групповой поддержке. Плавный переход к следующему этапу лечения — реабилитации и социальной адаптации.",
								},
								{
									q: "Знания и навыки для жизни",
									a: "Пациенты получают образовательные материалы и практические навыки для понимания процесса детоксикации, а также развивают стратегии управления соблазнами и предотвращения рецидива.",
								},
							].map((item) => (
								<div className="acc-item" key={item.q}>
									<button
										className="acc-btn"
										onClick={(e) => toggleAcc(e.currentTarget)}
									>
										<span className="acc-q">{item.q}</span>
										<span className="acc-ic">+</span>
									</button>
									<div className="acc-body">
										<p className="acc-p">{item.a}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
