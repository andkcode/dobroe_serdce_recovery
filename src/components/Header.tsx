import { useEffect } from "react";

export default function Header() {
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

	return (
		<>
			<button id="btt" aria-label="Наверх">
				↑
			</button>
			<div className="mobile-menu" id="mobileMenu">
				<a href="#hero" onClick={closeMobile}>
					Главная
				</a>
				<a href="#services" onClick={closeMobile}>
					Услуги
				</a>
				<a href="#about" onClick={closeMobile}>
					О нас
				</a>
				<a href="#team" onClick={closeMobile}>
					Специалисты
				</a>
				<a href="#testi" onClick={closeMobile}>
					Отзывы
				</a>
				<a href="#contact" onClick={closeMobile}>
					Контакты
				</a>
				<a
					href="tel:+380931707989"
					className="btn btn-gold btn-sm"
					style={{ marginTop: "1rem" }}
				>
					093 170 79 89
				</a>
			</div>
			<nav id="nav">
				<div className="nav-inner">
					<a href="#hero" className="nav-logo">
						<span className="nav-logo-text">
							<span className="text-gold">RE</span>COVERY
						</span>
						<span className="nav-logo-sub">Клиника восстановления</span>
					</a>
					<div className="nav-links">
						<a href="#services" className="nav-link">
							Услуги
						</a>
						<a href="#about" className="nav-link">
							О нас
						</a>
						<a href="#stages" className="nav-link">
							Лечение
						</a>
						<a href="#team" className="nav-link">
							Специалисты
						</a>
						<a href="#testi" className="nav-link">
							Отзывы
						</a>
						<a href="#faq" className="nav-link">
							FAQ
						</a>
						<a href="#contact" className="nav-link">
							Контакты
						</a>
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
						093 170 79 89
					</a>
					<button
						className="hamburger"
						id="hamburger"
						onClick={toggleMobile}
						aria-label="Меню"
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
