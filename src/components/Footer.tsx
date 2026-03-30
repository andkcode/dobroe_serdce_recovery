import { useTranslation } from "react-i18next";

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer id="footer">
			<div className="container">
				<div className="footer-grid">
					<div>
						<div className="footer-brand-name">
							<span className="text-gold">RE</span>COVERY
						</div>
						<div className="footer-brand-sub">{t('footer.brandSub')}</div>
						<p className="footer-brand-desc">{t('footer.brandDesc')}</p>
					</div>
					<div>
						<div className="footer-col-title">{t('footer.aboutTitle')}</div>
						<ul className="footer-links">
							<li><a href="#about" className="footer-link">{t('footer.link1')}</a></li>
							<li><a href="#team" className="footer-link">{t('footer.link2')}</a></li>
							<li><a href="#contact" className="footer-link">{t('footer.link3')}</a></li>
							<li><a href="#contact" className="footer-link">{t('footer.link4')}</a></li>
							<li><a href="#faq" className="footer-link">{t('footer.link5')}</a></li>
						</ul>
					</div>
					<div>
						<div className="footer-col-title">{t('footer.servicesTitle')}</div>
						<ul className="footer-links">
							<li><a href="#services" className="footer-link">{t('footer.link6')}</a></li>
							<li><a href="#services" className="footer-link">{t('footer.link7')}</a></li>
							<li><a href="#services" className="footer-link">{t('footer.link8')}</a></li>
							<li><a href="#services" className="footer-link">{t('footer.link9')}</a></li>
							<li><a href="#services" className="footer-link">{t('footer.link10')}</a></li>
						</ul>
					</div>
					<div>
						<div className="footer-col-title">{t('footer.contactsTitle')}</div>
						<a href="tel:+380931707989" className="footer-phone">(093) 170 79 89</a>
						<a href="mailto:crmrenessans1@gmail.com" className="footer-email">crmrenessans1@gmail.com</a>
						<div className="footer-addr"> г. Астана, просп. Республики 34</div>
					</div>
				</div>
				<div className="footer-bottom">
					<span className="footer-copy">{t('footer.copy')}</span>
					<span className="footer-tag">{t('footer.tag')}</span>
				</div>
			</div>
		</footer>
	);
}
