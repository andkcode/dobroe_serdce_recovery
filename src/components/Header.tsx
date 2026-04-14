import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
	const { i18n, t } = useTranslation();

	useEffect(() => {
		const nav = document.getElementById("nav");
		const btt = document.getElementById("btt");

		const onScroll = () => {
			nav?.classList.toggle("scrolled", window.scrollY > 60);
			btt?.classList.toggle("show", window.scrollY > 400);
		};
		window.addEventListener("scroll", onScroll, { passive: true });

		const onBttClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
		btt?.addEventListener("click", onBttClick);

		return () => {
			window.removeEventListener("scroll", onScroll);
			btt?.removeEventListener("click", onBttClick);
		};
	}, []);

	function toggleMobile() {
		const m = document.getElementById("mobileMenu");
		const h = document.getElementById("hamburger");
		m?.classList.toggle("open");
		h?.classList.toggle("open");
		document.body.style.overflow = m?.classList.contains("open")
			? "hidden"
			: "";
	}

	function closeMobile() {
		document.getElementById("mobileMenu")?.classList.remove("open");
		document.getElementById("hamburger")?.classList.remove("open");
		document.body.style.overflow = "";
	}

	function toggleLanguage() {
		const newLang = i18n.language === 'ru' ? 'kz' : 'ru';
		i18n.changeLanguage(newLang);
		localStorage.setItem('language', newLang);
	}

	return (
		<>
			<button id="btt" aria-label={t('header.topButton')}>
				↑
			</button>
			<div className="mobile-menu" id="mobileMenu">
				<div className="mobile-menu-header">
					<a href="#hero" className="mobile-menu-logo" onClick={closeMobile}>
						<span className="mobile-menu-logo-text">
							<span className="text-gold">CZM </span>FREEDOM
						</span>
					</a>
					<button
						onClick={closeMobile}
						className="mobile-menu-close"
						aria-label="Close menu"
					>
						<span></span>
						<span></span>
					</button>
				</div>

				<nav className="mobile-menu-nav">
					<a href="#hero" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">🏠</span>
						<span className="menu-link-text">{t('header.home')}</span>
						<span className="link-arrow">→</span>
					</a>
					<a href="#services" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">⚕️</span>
						<span className="menu-link-text">{t('header.services')}</span>
						<span className="link-arrow">→</span>
					</a>
					<a href="#about" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">ℹ️</span>
						<span className="menu-link-text">{t('header.about')}</span>
						<span className="link-arrow">→</span>
					</a>
					<a href="#stages" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">📋</span>
						<span className="menu-link-text">{t('header.treatment')}</span>
						<span className="link-arrow">→</span>
					</a>
					<a href="#team" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">👥</span>
						<span className="menu-link-text">{t('header.team')}</span>
						<span className="link-arrow">→</span>
					</a>
					<a href="#testi" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">⭐</span>
						<span className="menu-link-text">{t('header.testimonials')}</span>
						<span className="link-arrow">→</span>
					</a>
					<a href="#faq" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">❓</span>
						<span className="menu-link-text">{t('header.faq')}</span>
						<span className="link-arrow">→</span>
					</a>
					<a href="#contact" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">📍</span>
						<span className="menu-link-text">{t('header.contacts')}</span>
						<span className="link-arrow">→</span>
					</a>
				</nav>

				<div className="mobile-menu-bottom">
					<a
						href="tel:+380931707989"
						className="mobile-menu-phone"
					>
						<svg className="phone-icon" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 509.45"><path fill="#fff" fillRule="nonzero" d="M141 209.38c17.22 31.02 37.04 60.82 62.81 88.02 25.83 27.33 57.94 52.21 99.56 73.45 3.08 1.51 6.01 1.51 8.61.47 3.97-1.51 7.99-4.78 11.97-8.75 3.07-3.07 6.9-7.99 10.92-13.38 15.99-21.05 35.81-47.16 63.76-34.1.61 1.28 1.09.61 1.7.89l93.27 53.64c.28.14.61.47.9.61 12.3 8.47 17.36 21.52 17.5 36.28 0 15.04-5.53 31.97-13.67 46.26-10.74 18.87-26.58 31.35-44.84 39.63-17.35 7.99-36.7 12.3-55.29 15.04-29.18 4.3-56.51 1.56-84.47-7.05-27.34-8.46-54.86-22.42-84.94-41l-2.23-1.42c-13.81-8.61-28.71-17.83-43.32-28.71-53.59-40.44-108.12-98.8-143.64-163.03C9.81 212.31-6.47 154.09 2.43 98.61 7.34 68.2 20.4 40.53 43.15 22.27 62.97 6.28 89.69-2.46 124.26.61c3.98.28 7.52 2.6 9.37 6.01l59.78 101.07c8.75 11.35 9.84 22.56 5.06 33.82-3.97 9.22-11.96 17.68-22.89 25.63-3.22 2.74-7.05 5.53-11.07 8.47-13.38 9.69-28.57 20.9-23.36 34.1l-.15-.33z"/></svg>
						<span className="phone-text">{t('header.phone')}</span>
					</a>
					<button
						onClick={toggleLanguage}
						className="mobile-menu-lang"
						aria-label="Переключить язык"
						title={i18n.language === 'ru' ? 'Қазақша' : 'Русский язык'}
					>
						<span className="lang-text">{i18n.language === 'ru' ? 'Қазақша' : 'Русский язык'}</span>
					</button>
				</div>
			</div>

			<nav id="nav">
				<div className="nav-inner">
					<a href="#hero" className="nav-logo">
						<span className="nav-logo-text">
							<span className="text-gold">CZM </span>FREEDOM
						</span>
						<span className="nav-logo-sub">{t('header.clinic')}</span>
					</a>
					<div className="nav-links">
						<a href="#services" className="nav-link">
							{t('header.services')}
						</a>
						<a href="#about" className="nav-link">
							{t('header.about')}
						</a>
						<a href="#stages" className="nav-link">
							{t('header.treatment')}
						</a>
						<a href="#team" className="nav-link">
							{t('header.team')}
						</a>
						<a href="#testi" className="nav-link">
							{t('header.testimonials')}
						</a>
						<a href="#faq" className="nav-link">
							{t('header.faq')}
						</a>
						<a href="#contact" className="nav-link">
							{t('header.contacts')}
						</a>
						<button
							onClick={toggleLanguage}
							className="lang-switcher"
							aria-label="Переключить язык"
							title={i18n.language === 'ru' ? 'Қазақша' : 'Русский'}
						>
							{i18n.language === 'ru' ? 'KZ' : 'RU'}
						</button>
					</div>
					<a href="tel:+380931707989" className="btn btn-gold btn-sm nav-cta">
						<svg
							width="13"
							height="13"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2.5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						{t('header.phone')}
					</a>
					<button
						className="hamburger"
						id="hamburger"
						onClick={toggleMobile}
						aria-label={t('header.menuLabel')}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
		</>
	);
}
