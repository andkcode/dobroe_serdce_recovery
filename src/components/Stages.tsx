export default function Stages() {
	return (
		<>
			<section id="stages" className="section">
				<div className="container" style={{ position: "relative" }}>
					<div className="section-head">
						<div className="reveal">
							<span
								className="eyebrow"
								style={{ color: "rgba(249,189,21,.8)" }}
							>
								Как мы работаем
							</span>
						</div>
						<h2 className="section-title on-dark reveal d-1">
							Этапы лечения зависимостей
						</h2>
						<p className="section-sub on-dark reveal d-2">
							Каждый этап выстроен так, чтобы обеспечить максимально мягкое и
							эффективное выздоровление
						</p>
					</div>
					<div className="stages-grid" style={{ position: "relative" }}>
						<div className="stages-line"></div>
						<div className="stage-card reveal d-1">
							<div className="stage-orb">🧪</div>
							<div className="stage-num">1</div>
							<div className="stage-title">Детоксикация</div>
							<p className="stage-desc">
								Очищение организма от вредных веществ под контролем специалистов
								с медикаментозной поддержкой для снятия симптомов отмены
							</p>
							<span className="stage-dur">5–14 дней</span>
						</div>
						<div className="stage-card reveal d-2">
							<div className="stage-orb">🧬</div>
							<div className="stage-num">2</div>
							<div className="stage-title">Реабилитация</div>
							<p className="stage-desc">
								Комплексный подход с индивидуальными и групповыми
								терапевтическими сессиями. Работа с психологами и наркологами
							</p>
							<span className="stage-dur">1–3 месяца</span>
						</div>
						<div className="stage-card reveal d-3">
							<div className="stage-orb">🌱</div>
							<div className="stage-num">3</div>
							<div className="stage-title">Социальная адаптация</div>
							<p className="stage-desc">
								Развитие жизненных навыков, построение здоровых отношений и
								подготовка к самостоятельной трезвой жизни
							</p>
							<span className="stage-dur">3–6 месяцев</span>
						</div>
						<div className="stage-card reveal d-4">
							<div className="stage-orb">♾️</div>
							<div className="stage-num">4</div>
							<div className="stage-title">Постреабилитация</div>
							<p className="stage-desc">
								Регулярные встречи с терапевтом, группы поддержки и программы
								для предотвращения рецидива на долгосрочной основе
							</p>
							<span className="stage-dur">Постоянно</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
