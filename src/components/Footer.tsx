import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer id="footer">
			<div class="container">
				<div class="footer-grid">
					<div>
						<div class="footer-brand-name">
							<span class="text-gold">RE</span>COVERY
						</div>
						<div class="footer-brand-sub">Клиника восстановления</div>
						<p class="footer-brand-desc">
							Частная наркологическая клиника в Киеве. 21 год помогаем людям
							обрести свободную жизнь без зависимостей.
						</p>
					</div>
					<div>
						<div class="footer-col-title">О центре</div>
						<ul class="footer-links">
							<li>
								<a href="#about" class="footer-link">
									О нас
								</a>
							</li>
							<li>
								<a href="#team" class="footer-link">
									Наши специалисты
								</a>
							</li>
							<li>
								<a href="#contact" class="footer-link">
									Пациентам
								</a>
							</li>
							<li>
								<a href="#contact" class="footer-link">
									Родственникам
								</a>
							</li>
							<li>
								<a href="#faq" class="footer-link">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div>
						<div class="footer-col-title">Услуги</div>
						<ul class="footer-links">
							<li>
								<a href="#services" class="footer-link">
									Лечение алкоголизма
								</a>
							</li>
							<li>
								<a href="#services" class="footer-link">
									Лечение наркомании
								</a>
							</li>
							<li>
								<a href="#services" class="footer-link">
									Лечение игромании
								</a>
							</li>
							<li>
								<a href="#services" class="footer-link">
									ПТСР
								</a>
							</li>
							<li>
								<a href="#services" class="footer-link">
									Реабилитация
								</a>
							</li>
						</ul>
					</div>
					<div>
						<div class="footer-col-title">Контакты</div>
						<a href="tel:+380931707989" class="footer-phone">
							(093) 170 79 89
						</a>
						<a href="mailto:crmrenessans1@gmail.com" class="footer-email">
							crmrenessans1@gmail.com
						</a>
						<div class="footer-addr">ул. Казацкая 88, Киев</div>
						<div class="footer-lic">Лицензия МЗ Украины №1584/23/М</div>
					</div>
				</div>
				<div class="footer-bottom">
					<span class="footer-copy">© 2024 Recovery. Все права защищены.</span>
					<span class="footer-tag">Частная наркологическая клиника</span>
				</div>
			</div>
		</footer>
	);
}
