import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import heroVideo from "../assets/12212769_1080_1920_30fps.mp4";

const PARTICLES = [
	{
		left: "8%",
		top: "20%",
		width: "3px",
		height: "3px",
		background: "var(--brand-500)",
		animation: "float 8s ease-in-out infinite",
	},
	{
		left: "22%",
		top: "65%",
		width: "2px",
		height: "2px",
		background: "rgba(255,255,255,.5)",
		animation: "drift 10s ease-in-out infinite 1s",
	},
	{
		left: "35%",
		top: "30%",
		width: "4px",
		height: "4px",
		background: "var(--brand-400)",
		opacity: 0.5,
		animation: "float 9s ease-in-out infinite 2s",
	},
	{
		left: "60%",
		top: "75%",
		width: "2px",
		height: "2px",
		background: "rgba(255,255,255,.4)",
		animation: "drift 7s ease-in-out infinite .5s",
	},
	{
		left: "78%",
		top: "18%",
		width: "3px",
		height: "3px",
		background: "var(--brand-300)",
		animation: "float 11s ease-in-out infinite 1.5s",
	},
	{
		left: "88%",
		top: "55%",
		width: "2px",
		height: "2px",
		background: "rgba(255,255,255,.3)",
		animation: "drift 8s ease-in-out infinite 3s",
	},
];

const CROSSES = [
	{
		top: "22%",
		right: "24%",
		size: 18,
		opacity: 0.18,
		color: "var(--brand-500)",
		animation: "float 9s ease-in-out infinite 1s",
	},
	{
		top: "70%",
		right: "40%",
		size: 12,
		opacity: 0.12,
		color: "var(--brand-300)",
		animation: "drift 11s ease-in-out infinite 2s",
	},
];

export default function Hero() {
	const { t } = useTranslation();
	const statsRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const els = statsRef.current?.querySelectorAll<HTMLElement>("[data-target]");
		if (!els?.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					const el = entry.target as HTMLElement;
					const target = Number(el.dataset.target);
					const suffix = el.dataset.suffix ?? "";
					const duration = 2200;
					let start: number | null = null;

					function step(ts:number) {
						if (!start) start = ts;
						const progress = Math.min((ts - start) / duration, 1);
						const eased = 1 - (1 - progress) ** 3;
						el.textContent =
							Math.round(eased * target).toLocaleString() + suffix;
						if (progress < 1) requestAnimationFrame(step);
					}

					requestAnimationFrame(step);
					observer.unobserve(el);
				});
			},
			{ threshold: 0.3 },
		);

		els.forEach((el: HTMLElement) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<section id="hero">
			<video
				className="hero-video-bg"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
			>
				<source src={heroVideo} type="video/mp4" />
			</video>
			<div className="hero-bg"></div>
			<div className="hero-blob-1"></div>
			<div className="hero-blob-2"></div>
			<div className="hero-ring-1"></div>
			<div className="hero-ring-2"></div>
			<div className="hero-ring-3"></div>

			{PARTICLES.map((style, i) => (
				<div key={i} className="hero-particle" style={style}></div>
			))}

			{CROSSES.map((c, i) => (
				<div
					key={i}
					style={{
						position: "absolute",
						top: c.top,
						right: c.right,
						width: c.size,
						height: c.size,
						opacity: c.opacity,
						animation: c.animation,
						pointerEvents: "none",
					}}
				>
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: 0,
							width: "100%",
							height: "1.5px",
							background: c.color,
							transform: "translateY(-50%)",
						}}
					></div>
					<div
						style={{
							position: "absolute",
							left: "50%",
							top: 0,
							width: "1.5px",
							height: "100%",
							background: c.color,
							transform: "translateX(-50%)",
						}}
					></div>
				</div>
			))}

			<div className="container">
				<div className="hero-grid">
					<div>
						<div className="hero-badge">
							<span className="hero-dot"></span>
							{t('hero.badge')}
						</div>

						<h1 className="hero-title font-display">
							{t('hero.title').split('\n').map((line, i) => (
								<span key={i}>{line}<br className="hero-title-break" /></span>
							))}
						</h1>

						<p className="hero-sub font-body">
							{t('hero.subtitle')}
						</p>

						<div className="hero-ctas">
							<a href="#contact" className="btn btn-gold">
								{t('hero.cta1')}
								<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a href="tel:+380931707989" className="btn btn-ghost">
								<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								{t('hero.cta2')}
							</a>
						</div>

						<div className="hero-trust">
							<div className="hero-trust-item"><span className="ico">🔒</span>{t('hero.trust1')}</div>
							<div className="hero-trust-item"><span className="ico">⚡</span>{t('hero.trust2')}</div>
						</div>
					</div>

					<div className="hero-right">
						<div className="hero-card-main glass-dark">
							<div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 600, color: "#fff", marginBottom: ".4rem" }}>
								{t('hero.program')}
							</div>
							<p style={{ fontSize: ".84rem", color: "rgba(255, 255, 255, 0.7)", fontWeight: 300, lineHeight: 1.6, marginBottom: 0 }}>
								{t('hero.programDesc')}
							</p>

							<div className="hero-stats-grid" ref={statsRef}>
								{[
									{ target: 21, suffix: "", key: 'stat1' },
									{ target: 11, suffix: "K+", key: 'stat2' },
									{ target: 21, suffix: "", key: 'stat3' }
								].map(({ target, suffix, key }, i) => (
									<div key={i} className="hero-stat-box">
										<div className="hero-stat-val" data-target={target} data-suffix={suffix}>0</div>
										<div className="hero-stat-lbl">{t(`hero.${key}`)}</div>
									</div>
								))}
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<div className="scroll-ind">
				<div className="scroll-mouse"><div className="scroll-wheel"></div></div>
				<span className="scroll-lbl">{t('hero.scroll')}</span>
			</div>
		</section>
	);
}
