export default function Footer() {
	return (
		<footer id="footer">
			<div className="container">
				<div className="footer-grid">
					<div>
						<div className="footer-brand-name">
							<span className="text-gold">RE</span>COVERY
						</div>
						<div className="footer-brand-sub">Клиника восстановления</div>
						<p className="footer-brand-desc">
							Частная наркологическая клиника в Киеве. 21 год помогаем людям
							обрести свободную жизнь без зависимостей.
						</p>
					</div>
					<div>
						<div className="footer-col-title">О центре</div>
						<ul className="footer-links">
							<li>
								<a href="#about" className="footer-link">
									О нас
								</a>
							</li>
							<li>
								<a href="#team" className="footer-link">
									Наши специалисты
								</a>
							</li>
							<li>
								<a href="#contact" className="footer-link">
									Пациентам
								</a>
							</li>
							<li>
								<a href="#contact" className="footer-link">
									Родственникам
								</a>
							</li>
							<li>
								<a href="#faq" className="footer-link">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div>
						<div className="footer-col-title">Услуги</div>
						<ul className="footer-links">
							<li>
								<a href="#services" className="footer-link">
									Лечение алкоголизма
								</a>
							</li>
							<li>
								<a href="#services" className="footer-link">
									Лечение наркомании
								</a>
							</li>
							<li>
								<a href="#services" className="footer-link">
									Лечение игромании
								</a>
							</li>
							<li>
								<a href="#services" className="footer-link">
									ПТСР
								</a>
							</li>
							<li>
								<a href="#services" className="footer-link">
									Реабилитация
								</a>
							</li>
						</ul>
					</div>
					<div>
						<div className="footer-col-title">Контакты</div>
						<a href="tel:+380931707989" className="footer-phone">
							(093) 170 79 89
						</a>
						<a href="mailto:crmrenessans1@gmail.com" className="footer-email">
							crmrenessans1@gmail.com
						</a>
						<div className="footer-addr">ул. Казацкая 88, Киев</div>
						<div className="footer-lic">Лицензия МЗ Украины №1584/23/М</div>
					</div>
				</div>
				<div className="footer-bottom">
					<span className="footer-copy">
						© 2024 Recovery. Все права защищены.
					</span>
					<span className="footer-tag">Частная наркологическая клиника</span>
				</div>
			</div>
		</footer>
	);
}
