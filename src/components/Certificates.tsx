import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import certImg from "../assets/certificate/certificate.png";

/* Import all 24 certificate images */
const certModules = import.meta.glob(
	"../assets/certificate/certificates/certificate*.{jpeg,png}",
	{ eager: true, import: "default" },
) as Record<string, string>;

/* Sort numerically by the number in the filename */
const certImages = Object.entries(certModules)
	.sort(([a], [b]) => {
		const numA = parseInt(a.match(/certificate(\d+)/)?.[1] ?? "0");
		const numB = parseInt(b.match(/certificate(\d+)/)?.[1] ?? "0");
		return numA - numB;
	})
	.map(([, src]) => src);

export default function Certificates() {
	const { t } = useTranslation();
	const [showModal, setShowModal] = useState(false);
	const [current, setCurrent] = useState(0);

	const prev = useCallback(
		() => setCurrent((i) => (i - 1 + certImages.length) % certImages.length),
		[],
	);
	const next = useCallback(
		() => setCurrent((i) => (i + 1) % certImages.length),
		[],
	);

	/* Keyboard navigation */
	useEffect(() => {
		if (!showModal) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") prev();
			else if (e.key === "ArrowRight") next();
			else if (e.key === "Escape") setShowModal(false);
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [showModal, prev, next]);

	const openGallery = () => {
		setCurrent(0);
		setShowModal(true);
	};

	return (
		<>
			<section className="section-sm" id="certificates">
				<div className="container">
					<div className="cert-card reveal">
						<div className="cert-left">
							<h2 className="cert-title font-display">
								{t("certificates.title")}
							</h2>
							<button
								className="btn btn-ghost cert-btn"
								onClick={openGallery}
							>
								{t("certificates.button")}
							</button>
							<div className="cert-phone-block">
								<a href="tel:+77788100900" className="cert-phone">
									{t("certificates.phone")}
								</a>
								<span className="cert-phone-sub">
									{t("certificates.phoneSub")}
								</span>
							</div>
						</div>
						<div className="cert-right">
							<img
								src={certImg}
								alt={t("certificates.title")}
								className="cert-img"
								onClick={openGallery}
							/>
						</div>
					</div>
				</div>
			</section>

			{showModal && (
				<div className="cert-modal-overlay" onClick={() => setShowModal(false)}>
					<div className="cert-modal" onClick={(e) => e.stopPropagation()}>
						<button
							className="cert-modal-close"
							onClick={() => setShowModal(false)}
						>
							✕
						</button>

						<button className="cert-arrow cert-arrow-left" onClick={prev}>
							‹
						</button>

						<img
							src={certImages[current]}
							alt={`Certificate ${current + 1}`}
							className="cert-modal-img"
						/>

						<button className="cert-arrow cert-arrow-right" onClick={next}>
							›
						</button>

						<div className="cert-counter">
							{current + 1} / {certImages.length}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
