import { useTranslation } from "react-i18next";
import phoneImg from "../assets/contact/phone.jpeg";

export default function CTA() {
	const { t } = useTranslation();

	return (
		<section id="cta">
			<div className="cta-card">
				<div className="cta-left">
					<h2 className="cta-title font-display">
						{t('cta.title').split('\n').map((line, i) => (
							<span key={i}>{line}<br /></span>
						))}
					</h2>
					<p className="cta-sub">{t('cta.subtitle')}</p>
					<div className="cta-actions">
						<a href="#contact" className="cta-btn-consult">
							{t('cta.cta2')}
						</a>
						<div className="cta-phone-block">
							<a href="tel:+77788100900" className="cta-phone-number">{t('cta.phone')}</a>
							<span className="cta-phone-hint">{t('cta.phoneHint')}</span>
						</div>
					</div>
				</div>
				<div className="cta-right">
					<div className="cta-phone-img-wrap">
					<img src={phoneImg} alt="Phone" className="cta-phone-img" />
				</div>
				</div>
			</div>
		</section>
	);
}
