import { useTranslation } from "react-i18next";

export default function DetoxAccordion() {
	const { t } = useTranslation();

	function toggleAcc(btn: HTMLElement) {
		const body = btn.nextElementSibling as HTMLElement;
		const ic = btn.querySelector(".acc-ic");
		const isOpen = body.classList.contains("open");
		const section = btn.closest("section");
		if (section) {
			section.querySelectorAll(".acc-body.open").forEach((b) => b.classList.remove("open"));
			section.querySelectorAll(".acc-ic.open").forEach((i) => i.classList.remove("open"));
		}
		if (!isOpen) {
			body.classList.add("open");
			ic?.classList.add("open");
		}
	}

	const detoxItems = [
		{ q: t('detox.q1'), a: t('detox.a1') },
		{ q: t('detox.q2'), a: t('detox.a2') },
		{ q: t('detox.q3'), a: t('detox.a3') },
		{ q: t('detox.q4'), a: t('detox.a4') },
		{ q: t('detox.q5'), a: t('detox.a5') },
		{ q: t('detox.q6'), a: t('detox.a6') },
	];

	return (
		<section id="detox" className="section">
			<div className="container">
				<div className="detox-grid">
					<div className="detox-visual reveal-l">
						<div className="detox-vis-main">
							<div style={{ justifyContent: "flex-start", gap: "1.25rem", padding: "2.5rem" }} className="detox-vis-inner">
								<div>
									<div style={{ fontSize: ".7rem", letterSpacing: ".2em", fontWeight: 700, textTransform: "uppercase", color: "rgb(255, 197, 36)", marginBottom: ".35rem" }}>
										{t('detox.protocol')}
									</div>
									<div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
										{t('detox.title')}
									</div>
								</div>

								<div style={{ display: "flex", flexDirection: "column", gap: ".55rem" }}>
									{[
										{ label: t('detox.phase1'), pct: 100, color: "#4ade80" },
										{ label: t('detox.phase2'), pct: 78, color: "var(--brand-500)" },
										{ label: t('detox.phase3'), pct: 52, color: "var(--sap-400)" },
										{ label: t('detox.phase4'), pct: 28, color: "rgba(255,255,255,.3)" },
									].map(({ label, pct, color }) => (
										<div key={label}>
											<div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".3rem" }}>
												<span style={{ fontSize: "1rem", color: "rgba(255,255,255,.8)", fontWeight: 300 }}>{label}</span>
												<span style={{ fontSize: "1rem", color: "rgba(255,255,255,.8)", fontWeight: 300 }}>{pct}%</span>
											</div>
											<div style={{ height: "3px", borderRadius: "2px", background: "rgba(255,255,255,.07)", overflow: "hidden" }}>
												<div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: "2px", transition: "width 1s ease" }}></div>
											</div>
										</div>
									))}
								</div>

								<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".6rem" }}>
									{[
										{ ico: "❤️", val: "72", unit: "bpm", lbl: t('detox.vitals') },
										{ ico: "🌡️", val: "36.6", unit: "°C", lbl: t('detox.temp') },
										{ ico: "💊", val: "3/3", unit: "", lbl: t('detox.meds') },
										{ ico: "🕐", val: "24/7", unit: "", lbl: t('detox.monitoring') },
									].map(({ val, unit, lbl }) => (
										<div key={lbl} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(249,189,21,.1)", borderRadius: ".85rem", padding: ".75rem" }}>
											<div style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fff", lineHeight: 1 }}>
												{val}
												<span style={{ fontSize: ".65rem", color: "rgba(255,255,255,.8)", marginLeft: "2px" }}>{unit}</span>
											</div>
											<div style={{ fontSize: ".58rem", color: "rgba(255,255,255,1)", marginTop: "3px", letterSpacing: ".06em", textTransform: "uppercase" }}>
												{lbl}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="reveal-r">
						<div>
							<span className="eyebrow">{t('detox.eyebrow')}</span>
						</div>
						<h2 className="section-title" style={{ textAlign: "left", fontSize: "clamp(1.8rem,3vw,2.6rem)", marginTop: "1rem" }}>
							{t('detox.title')}
						</h2>
						<div style={{ marginTop: "2rem" }}>
							{detoxItems.map((item) => (
								<div className="acc-item" key={item.q}>
									<button className="acc-btn" onClick={(e) => toggleAcc(e.currentTarget)}>
										<span className="acc-q">{item.q}</span>
										<span className="acc-ic">+</span>
									</button>
									<div className="acc-body">
										<p className="acc-p">{item.a}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
