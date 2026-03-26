export default function FAQ() {
	return (
		<>
			<section id="faq" class="section" style="background:#fff">
				<div class="container">
					<div class="section-head">
						<div class="reveal">
							<span class="eyebrow">FAQ</span>
						</div>
						<h2 class="section-title reveal d-1">Вопросы и ответы</h2>
						<p class="section-sub reveal d-2">
							Ответы на наиболее часто задаваемые вопросы о лечении зависимостей
						</p>
					</div>
					<div class="faq-wrap">
						<div class="acc-item reveal">
							<button class="acc-btn" onclick="toggleAcc(this)">
								<span class="acc-q">Какова продолжительность лечения?</span>
								<span class="acc-ic">+</span>
							</button>
							<div class="acc-body">
								<p class="acc-p">
									Курс реабилитации может длиться до 3 месяцев и включает
									несколько этапов: детоксикация, психологическая коррекция и
									социальная адаптация. Продолжительность определяется общим
									стажем употребления, степенью тяжести состояния и динамикой
									психоэмоционального состояния пациента.
								</p>
							</div>
						</div>
						<div class="acc-item reveal d-1">
							<button class="acc-btn" onclick="toggleAcc(this)">
								<span class="acc-q">
									Гарантируете ли вы анонимность лечения?
								</span>
								<span class="acc-ic">+</span>
							</button>
							<div class="acc-body">
								<p class="acc-p">
									Да, абсолютно. Частная клиника Recovery строго соблюдает
									этические и правовые нормы, гарантирующие неразглашение личной
									информации. Ваши данные и история лечения остаются строго
									конфиденциальными.
								</p>
							</div>
						</div>
						<div class="acc-item reveal d-2">
							<button class="acc-btn" onclick="toggleAcc(this)">
								<span class="acc-q">
									Чем семья может помочь зависимому человеку?
								</span>
								<span class="acc-ic">+</span>
							</button>
							<div class="acc-body">
								<p class="acc-p">
									Если вы обратились за профессиональной помощью — вы уже
									сделали важное дело. Мы рекомендуем посещать группы для
									созависимых, индивидуальные консультации с психологами и
									семейные сессии. Это помогает наладить диалог внутри семьи и
									разобраться в отношениях.
								</p>
							</div>
						</div>
						<div class="acc-item reveal d-3">
							<button class="acc-btn" onclick="toggleAcc(this)">
								<span class="acc-q">
									Можно ли избавиться от зависимости самостоятельно?
								</span>
								<span class="acc-ic">+</span>
							</button>
							<div class="acc-body">
								<p class="acc-p">
									Статистика показывает, что профессиональная помощь значительно
									повышает шансы на выздоровление. Самостоятельные попытки
									нередко опасны для здоровья из-за синдрома отмены. Мы
									рекомендуем взаимодействовать с профессионалами — это
									значительно эффективнее и безопаснее.
								</p>
							</div>
						</div>
						<div class="acc-item reveal d-4">
							<button class="acc-btn" onclick="toggleAcc(this)">
								<span class="acc-q">
									Необратимы ли изменения, вызванные зависимостью?
								</span>
								<span class="acc-ic">+</span>
							</button>
							<div class="acc-body">
								<p class="acc-p">
									В этом мире нет ничего необратимого — всё меняется. Главное —
									установить правильный вектор и получить профессиональную
									поддержку. Наши пациенты восстанавливаются, возвращаются к
									семье, работе и полноценной жизни.
								</p>
							</div>
						</div>
						<div class="acc-item reveal d-5">
							<button class="acc-btn" onclick="toggleAcc(this)">
								<span class="acc-q">
									Есть ли у вас программы для родственников?
								</span>
								<span class="acc-ic">+</span>
							</button>
							<div class="acc-body">
								<p class="acc-p">
									Да. Мы проводим группы для созависимых, консультации с
									психологами и семейные сессии. Зависимость — это семейное
									заболевание, и помощь близким является важной частью нашего
									подхода к лечению.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
