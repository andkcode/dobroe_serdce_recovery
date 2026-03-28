import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contacts() {
	const { t } = useTranslation();
	const [form, setForm] = useState({ name: "", phone: "", message: "" });
	const [sent, setSent] = useState(false);

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSent(true);
	};

	return (
		<section id="contact" className="section">
			<div className="container">
				<div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
					<div>
						<div className="reveal">
							<span className="eyebrow">{t('contacts.eyebrow')}</span>
						</div>
						<h2 className="section-title reveal d-1" style={{ textAlign: "left" }}>
							{t('contacts.title').split('\n').map((line, i) => (
								<span key={i}>{line}<br /></span>
							))}
						</h2>
						<div className="contact-items reveal d-2">
							<div className="contact-item">
								<div className="contact-ico-wrap">📍</div>
								<div>
									<div className="contact-lbl">{t('contacts.address')}</div>
									<span className="contact-val">{t('contacts.addressVal')}</span>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">📞</div>
								<div>
									<div className="contact-lbl">{t('contacts.phone')}</div>
									<a href="tel:+380931707989" className="contact-val">
										{t('contacts.phoneVal')}
									</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">✉️</div>
								<div>
									<div className="contact-lbl">{t('contacts.email')}</div>
									<a href="mailto:crmrenessans1@gmail.com" className="contact-val">
										{t('contacts.emailVal')}
									</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">🕐</div>
								<div>
									<div className="contact-lbl">{t('contacts.hours')}</div>
									<span className="contact-val">{t('contacts.hoursVal')}</span>
								</div>
							</div>
						</div>
						<div className="social-pills reveal d-3">
							<a href="https://t.me/+380671915373" className="social-pill" style={{ background: "rgba(109,169,214,.12)", border: "1px solid rgba(109,169,214,.3)", color: "#6DA9D6" }}>
								{t('contacts.telegram')}
							</a>
							<a href="viber://chat?number=%2B380671915373" className="social-pill" style={{ background: "rgba(145,105,175,.12)", border: "1px solid rgba(145,105,175,.3)", color: "#9169AF" }}>
								{t('contacts.viber')}
							</a>
							<a href="https://wa.me/380671915373" className="social-pill" style={{ background: "rgba(46,184,65,.12)", border: "1px solid rgba(46,184,65,.3)", color: "#2EB841" }}>
								{t('contacts.whatsapp')}
							</a>
						</div>
					</div>
					<iframe
						width="100%"
						height="100%"
						style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", border: "none" }}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.3961842450986!2d71.4491!3d51.1694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38848a9e9e9e9e9d%3A0x1234567890!2s%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8%2034%2C%20Astana!5e0!3m2!1sru!2skz!4v1234567890"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</section>
	);
}
