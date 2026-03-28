import { useState } from "react";

export default function Сontacts() {
	const [form, setForm] = useState({ name: "", phone: "", message: "" });
	const [sent, setSent] = useState(false);

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSent(true);
	};

	return (
		<section id="contact" className="section">
			<div className="container">
				<div className="contact-grid">
					<div>
						<div className="reveal">
							<span className="eyebrow">Связаться с нами</span>
						</div>
						<h2
							className="section-title reveal d-1"
							style={{ textAlign: "left" }}
						>
							Сделайте первый шаг
							<br />
							<em>к новой жизни</em>
						</h2>
						<div className="contact-items reveal d-2">
							<div className="contact-item">
								<div className="contact-ico-wrap">📍</div>
								<div>
									<div className="contact-lbl">Адрес</div>
									<span className="contact-val">г. Астана, ул. Казацкая, 88</span>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">📞</div>
								<div>
									<div className="contact-lbl">Телефон</div>
									<a href="tel:+380931707989" className="contact-val">
										(093) 170 79 89
									</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">✉️</div>
								<div>
									<div className="contact-lbl">Email</div>
									<a
										href="mailto:crmrenessans1@gmail.com"
										className="contact-val"
									>
										crmrenessans1@gmail.com
									</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">🕐</div>
								<div>
									<div className="contact-lbl">Режим работы</div>
									<span className="contact-val">Ежедневно, круглосуточно</span>
								</div>
							</div>
						</div>
						<div className="social-pills reveal d-3">
							<a
								href="https://t.me/+380671915373"
								className="social-pill"
								style={{
									background: "rgba(109,169,214,.12)",
									border: "1px solid rgba(109,169,214,.3)",
									color: "#6DA9D6",
								}}
							>
								✈ Telegram
							</a>
							<a
								href="viber://chat?number=%2B380671915373"
								className="social-pill"
								style={{
									background: "rgba(145,105,175,.12)",
									border: "1px solid rgba(145,105,175,.3)",
									color: "#9169AF",
								}}
							>
								📱 Viber
							</a>
							<a
								href="https://wa.me/380671915373"
								className="social-pill"
								style={{
									background: "rgba(46,184,65,.12)",
									border: "1px solid rgba(46,184,65,.3)",
									color: "#2EB841",
								}}
							>
								💬 WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
