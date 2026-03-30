import { useTranslation } from "react-i18next";

export default function About() {
	const { t } = useTranslation();

	const features = [
		{ num: "01", title: t("about.feat1"), desc: t("about.feat1Desc") },
		{ num: "02", title: t("about.feat2"), desc: t("about.feat2Desc") },
		{ num: "03", title: t("about.feat3"), desc: t("about.feat3Desc") },
		{ num: "04", title: t("about.feat4"), desc: t("about.feat4Desc") },
		{ num: "05", title: t("about.feat5"), desc: t("about.feat5Desc") },
		{ num: "06", title: t("about.feat6"), desc: t("about.feat6Desc") },
	];

	return (
		<section id="about" className="section" style={{ background: "#fff" }}>
			<div className="container">
				<div className="about-grid" style={{ gridTemplateColumns: "1fr", gap: "0" }}>
					{/* Clock visual section is intentionally disabled */}

					{/* ══════════════════════════════════════
					    RIGHT — Text content
					══════════════════════════════════════ */}
					<div>
						<div className="reveal">
							<span className="eyebrow">{t("about.eyebrow")}</span>
						</div>
						<h2
							className="section-title reveal d-1"
							style={{ textAlign: "left" }}
						>
							{t("about.title")
								.split("\n")
								.map((line, i) => (
									<span key={i}>
										{line}
										<br />
									</span>
								))}
						</h2>
						<p
							className="reveal d-2"
							style={{
								fontSize: ".95rem",
								color: "var(--ink-500)",
								lineHeight: "1.86",
								margin: "1rem 0 2.5rem",
								fontWeight: 300,
							}}
						>
							{t("about.subtitle")}
						</p>
						<div className="about-features">
							{features.map((feat, i) => (
								<div
									key={i}
									className={`feat-box reveal d-${i + 1}`}
								>
									<div className="feat-num">{feat.num}</div>
									<div className="feat-title">{feat.title}</div>
									<div className="feat-desc">{feat.desc}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}