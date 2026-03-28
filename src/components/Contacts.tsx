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
									<span className="contact-val">г. Киев, ул. Казацкая, 88</span>
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
					<div className="reveal-r d-2">
						<div className="form-box" id="formBox">
							<h3
								style={{
									fontFamily: "'Playfair Display',serif",
									fontSize: "1.5rem",
									fontWeight: 600,
									color: "var(--sap-800)",
									marginBottom: ".5rem",
								}}
							>
								Оставить заявку
							</h3>
							<p
								style={{
									fontSize: ".87rem",
									color: "var(--ink-500)",
									marginBottom: "2rem",
									lineHeight: "1.65",
									fontWeight: 300,
								}}
							>
								Мы перезвоним вам в течение 15 минут и ответим на все вопросы
							</p>
							<form id="contactForm" onSubmit={submitForm}>
								<div className="form-grid">
									<div>
										<label className="label">Ваше имя</label>
										<input
											className="input"
											type="text"
											value={form.name}
											onChange={(e) => setForm({ ...form, name: e.target.value })}
											placeholder="Как к вам обращаться?"
											required
										/>
									</div>
									<div>
										<label className="label">Телефон</label>
										<input
											className="input"
											type="tel"
											value={form.phone}
											onChange={(e) => setForm({ ...form, phone: e.target.value })}
											placeholder="+38 (0__) ___ __ __"
											required
										/>
									</div>
									<div className="form-row">
										<label className="label">Сообщение</label>
										<textarea
											className="input"
											rows={5}
											value={form.message}
											onChange={(e) => setForm({ ...form, message: e.target.value })}
											placeholder="Расскажите о вашей ситуации (необязательно)..."
										></textarea>
									</div>
									<div className="form-row">
										<button
											type="submit"
											className="btn btn-primary"
											style={{
												width: "100%",
												justifyContent: "center",
												padding: "1.1rem 2rem",
												fontSize: ".85rem",
											}}
										>
											Отправить заявку
											<svg
												width="16"
												height="16"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</svg>
										</button>
										{sent && <p style={{ color: "green" }}>Заявка отправлена ✅</p>}
									</div>
								</div>
							</form>
							<p className="form-note">
								🔒 Ваши данные строго конфиденциальны и никогда не передаются
								третьим лицам
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
