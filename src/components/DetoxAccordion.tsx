export default function DetoxAccordion() {
	function toggleAcc(btn) {
		const body = btn.nextElementSibling;
		const ic = btn.querySelector(".acc-ic");
		const isOpen = body.classList.contains("open");
		// Close all in same section
		const section = btn.closest("section,#detox,#faq");
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
			ic.classList.add("open");
		}
	}
	return (
		<>
			<section id="detox" class="section">
				<div class="container">
					<div class="detox-grid">
						<div class="detox-visual reveal-l">
							<div class="detox-vis-main">
								<div class="detox-vis-inner">
									<div
										class="detox-bar"
										style="width:100%;animation-delay:.1s"
									></div>
									<div
										class="detox-bar"
										style="width:85%;animation-delay:.2s"
									></div>
									<div
										class="detox-bar"
										style="width:92%;animation-delay:.3s"
									></div>
									<div
										class="detox-bar"
										style="width:68%;animation-delay:.4s"
									></div>
									<div
										class="detox-bar"
										style="width:80%;animation-delay:.5s"
									></div>
									<div
										class="detox-bar"
										style="width:74%;animation-delay:.6s"
									></div>
								</div>
							</div>
							<div
								class="detox-badge glass"
								style="box-shadow:0 16px 48px rgba(0,36,85,.18)"
							>
								<div style="font-size:.85rem;font-weight:600;color:var(--sap-800);margin-bottom:.3rem">
									Процесс детоксикации
								</div>
								<div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.6rem">
									<span style="padding:.25rem .7rem;background:var(--sage-100);color:var(--sage-700);border-radius:9999px;font-size:.67rem;font-weight:600">
										Безопасно
									</span>
									<span style="padding:.25rem .7rem;background:var(--sap-100);color:var(--sap-700);border-radius:9999px;font-size:.67rem;font-weight:600">
										Под наблюдением
									</span>
								</div>
							</div>
						</div>
						<div class="reveal-r">
							<div>
								<span class="eyebrow">Детоксикация</span>
							</div>
							<h2
								class="section-title"
								style="text-align:left;font-size:clamp(1.8rem,3vw,2.6rem);margin-top:1rem"
							>
								Процесс детоксикации включает несколько ключевых этапов
							</h2>
							<div style="margin-top:2rem">
								<div class="acc-item">
									<button class="acc-btn" onclick="toggleAcc(this)">
										<span class="acc-q">Оценка состояния пациента</span>
										<span class="acc-ic">+</span>
									</button>
									<div class="acc-body">
										<p class="acc-p">
											Пациент проходит обширную медицинскую и психологическую
											диагностику, включающую анализ физического состояния,
											анамнез употребления веществ, психологическую и социальную
											историю. Это позволяет составить индивидуальный план
											лечения.
										</p>
									</div>
								</div>
								<div class="acc-item">
									<button class="acc-btn" onclick="toggleAcc(this)">
										<span class="acc-q">Медицинская поддержка</span>
										<span class="acc-ic">+</span>
									</button>
									<div class="acc-body">
										<p class="acc-p">
											Клиника обеспечивает медикаментозную поддержку широким
											спектром препаратов для полного снятия физических
											симптомов отмены. Круглосуточный мониторинг состояния
											пациента опытными специалистами.
										</p>
									</div>
								</div>
								<div class="acc-item">
									<button class="acc-btn" onclick="toggleAcc(this)">
										<span class="acc-q">Психологическая поддержка</span>
										<span class="acc-ic">+</span>
									</button>
									<div class="acc-body">
										<p class="acc-p">
											Пациенты получают психологическую помощь для преодоления
											эмоциональных и психологических аспектов детоксикации.
											Работа с тревожностью, страхами и эмоциональной
											нестабильностью в период отмены.
										</p>
									</div>
								</div>
								<div class="acc-item">
									<button class="acc-btn" onclick="toggleAcc(this)">
										<span class="acc-q">Мониторинг и корректировка</span>
										<span class="acc-ic">+</span>
									</button>
									<div class="acc-body">
										<p class="acc-p">
											Регулярные проверки, анализы и оценки помогают
											адаптировать лечение в соответствии с потребностями
											пациента. Гибкий подход позволяет оперативно реагировать
											на изменения в состоянии.
										</p>
									</div>
								</div>
								<div class="acc-item">
									<button class="acc-btn" onclick="toggleAcc(this)">
										<span class="acc-q">Поддержка после детоксикации</span>
										<span class="acc-ic">+</span>
									</button>
									<div class="acc-body">
										<p class="acc-p">
											После завершения детоксикации пациент участвует в
											реабилитационных программах и групповой поддержке. Плавный
											переход к следующему этапу лечения — реабилитации и
											социальной адаптации.
										</p>
									</div>
								</div>
								<div class="acc-item">
									<button class="acc-btn" onclick="toggleAcc(this)">
										<span class="acc-q">Знания и навыки для жизни</span>
										<span class="acc-ic">+</span>
									</button>
									<div class="acc-body">
										<p class="acc-p">
											Пациенты получают образовательные материалы и практические
											навыки для понимания процесса детоксикации, а также
											развивают стратегии управления соблазнами и предотвращения
											рецидива.
										</p>
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
