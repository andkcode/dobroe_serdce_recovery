import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

/* ─── SVG Geometry ─── */
const CX = 220, CY = 220;

function pol(deg: number, r: number) {
	const a = ((deg - 90) * Math.PI) / 180;
	return {
		x: +(CX + r * Math.cos(a)).toFixed(3),
		y: +(CY + r * Math.sin(a)).toFixed(3),
	};
}

function circ(r: number) {
	return +(2 * Math.PI * r).toFixed(3);
}

/* ─── 60 tick marks like a watch bezel ─── */
const TICKS = Array.from({ length: 60 }, (_, i) => {
	const major = i % 5 === 0;
	return {
		outer: pol(i * 6, 194),
		inner: pol(i * 6, major ? 184 : 188),
		major,
	};
});

/* ─── Three sub-dials at 120° intervals ─── */
const DIALS = [
	{
		angle: 0,
		dist: 90,
		r: 33,
		val: "11K+",
		pct: 0.94,
		lbl: "ПАЦИЕНТОВ",
		col: "#4ade80",
		delay: 0.7,
	},
	{
		angle: 120,
		dist: 90,
		r: 33,
		val: "50+",
		pct: 0.8,
		lbl: "ВРАЧЕЙ",
		col: "#82bef5",
		delay: 1.0,
	},
	{
		angle: 240,
		dist: 90,
		r: 33,
		val: "21",
		pct: 0.7,
		lbl: "ЛЕТ",
		col: "#f9bd15",
		delay: 1.3,
	},
];

/* ─── Main arc end-point (96% of 360°) ─── */
const ARC_END = pol(360 * 0.96, 168);

export default function About() {
	const { t } = useTranslation();
	const [on, setOn] = useState(false);
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		const el = svgRef.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setOn(true);
					obs.disconnect();
				}
			},
			{ threshold: 0.25 },
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	const features = [
		{ num: "01", title: t("about.feat1"), desc: t("about.feat1Desc") },
		{ num: "02", title: t("about.feat2"), desc: t("about.feat2Desc") },
		{ num: "03", title: t("about.feat3"), desc: t("about.feat3Desc") },
		{ num: "04", title: t("about.feat4"), desc: t("about.feat4Desc") },
		{ num: "05", title: t("about.feat5"), desc: t("about.feat5Desc") },
		{ num: "06", title: t("about.feat6"), desc: t("about.feat6Desc") },
	];

	const mainC = circ(168);

	return (
		<section id="about" className="section" style={{ background: "#fff" }}>
			{/* ── Keyframe animations ── */}
			<style>{`
				@keyframes ag_ring1 { to { transform: rotate(360deg); } }
				@keyframes ag_ring2 { to { transform: rotate(-360deg); } }
				@keyframes ag_sweep { to { transform: rotate(360deg); } }
				@keyframes ag_pulse { 0%,100% { opacity:.12; } 50% { opacity:.35; } }
				@keyframes ag_tipIn {
					0% { opacity:0; r:3; }
					60% { opacity:1; r:8; }
					100% { opacity:1; r:6; }
				}
				@keyframes ag_tipBlink {
					0%,100% { opacity:1; }
					50% { opacity:.2; }
				}
				.ag-ring1 {
					transform-origin: ${CX}px ${CY}px;
					animation: ag_ring1 22s linear infinite;
				}
				.ag-ring2 {
					transform-origin: ${CX}px ${CY}px;
					animation: ag_ring2 36s linear infinite;
				}
				.ag-sweep {
					transform-origin: ${CX}px ${CY}px;
					animation: ag_sweep 4s linear infinite;
				}
				.ag-pulse {
					animation: ag_pulse 3s ease-in-out infinite;
				}
				.ag-tip {
					animation: ag_tipIn .4s ease-out both,
					           ag_tipBlink 2s ease-in-out infinite 2.6s;
				}
			`}</style>

			<div className="container">
				<div className="about-grid">
					{/* ══════════════════════════════════════
					    LEFT — Precision Chronograph Visual
					══════════════════════════════════════ */}
					<div className="about-visual reveal-l">
						<div
							style={{
								borderRadius: "2rem",
								overflow: "hidden",
								background:
									"linear-gradient(155deg,#00112b 0%,#001e4a 45%,#001430 100%)",
								border: "1px solid rgba(249,189,21,0.15)",
								boxShadow:
									"0 40px 100px rgba(0,19,46,.6),inset 0 1px 0 rgba(249,189,21,.12)",
								position: "relative",
							}}
						>
							{/* Noise texture overlay */}
							<div
								style={{
									position: "absolute",
									inset: 0,
									pointerEvents: "none",
									zIndex: 1,
									backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.03'/%3E%3C/svg%3E")`,
								}}
							/>

							{/* ── Padding wrapper (keeps SVG from edge) ── */}
							<div style={{ padding: "1.5rem", position: "relative", zIndex: 2 }}>
								<svg
									ref={svgRef}
									viewBox="0 0 440 440"
									xmlns="http://www.w3.org/2000/svg"
									style={{ display: "block", width: "100%" }}
									aria-hidden="true"
								>
									<defs>
										{/* Gold gradient */}
										<linearGradient
											id="ag_gold"
											x1="0"
											y1="0"
											x2="1"
											y2="1"
										>
											<stop offset="0%" stopColor="#ffc915" />
											<stop offset="48%" stopColor="#ffe680" />
											<stop offset="100%" stopColor="#c08800" />
										</linearGradient>
										{/* Bg radial glow */}
										<radialGradient
											id="ag_bgGlow"
											cx="50%"
											cy="50%"
											r="50%"
										>
											<stop
												offset="0%"
												stopColor="rgba(0,99,181,.22)"
											/>
											<stop
												offset="100%"
												stopColor="transparent"
											/>
										</radialGradient>
										{/* Center glow */}
										<radialGradient
											id="ag_core"
											cx="50%"
											cy="50%"
											r="50%"
										>
											<stop
												offset="0%"
												stopColor="rgba(249,189,21,.28)"
											/>
											<stop
												offset="100%"
												stopColor="transparent"
											/>
										</radialGradient>
										{/* Soft glow filter */}
										<filter
											id="ag_glow"
											x="-50%"
											y="-50%"
											width="200%"
											height="200%"
										>
											<feGaussianBlur
												stdDeviation="3.5"
												result="b"
											/>
											<feMerge>
												<feMergeNode in="b" />
												<feMergeNode in="SourceGraphic" />
											</feMerge>
										</filter>
										{/* Stronger glow */}
										<filter
											id="ag_glow2"
											x="-80%"
											y="-80%"
											width="260%"
											height="260%"
										>
											<feGaussianBlur
												stdDeviation="7"
												result="b"
											/>
											<feMerge>
												<feMergeNode in="b" />
												<feMergeNode in="SourceGraphic" />
											</feMerge>
										</filter>
									</defs>

									{/* ── Background radial ── */}
									<circle
										cx={CX}
										cy={CY}
										r={215}
										fill="url(#ag_bgGlow)"
									/>

									{/* ── Outer orbital ring 1 (gold dashes, slow CW) ── */}
									<g className="ag-ring1" style={{ transformOrigin: `${CX}px ${CY}px` }}>
										<circle
											cx={CX}
											cy={CY}
											r={210}
											fill="none"
											stroke="rgba(249,189,21,.07)"
											strokeWidth="1"
											strokeDasharray="3 13"
										/>
										{/* 5 orbital dots */}
										{[0, 72, 144, 216, 288].map((deg, i) => {
											const pt = pol(deg, 210);
											return (
												<circle
													key={i}
													cx={pt.x}
													cy={pt.y}
													r={i === 0 ? 3.5 : 2}
													fill={
														i === 0
															? "#f9bd15"
															: "rgba(249,189,21,.35)"
													}
													filter={
														i === 0
															? "url(#ag_glow)"
															: undefined
													}
												/>
											);
										})}
									</g>

									{/* ── Outer orbital ring 2 (blue, slow CCW) ── */}
									<g className="ag-ring2" style={{ transformOrigin: `${CX}px ${CY}px` }}>
										<circle
											cx={CX}
											cy={CY}
											r={203}
											fill="none"
											stroke="rgba(130,190,245,.07)"
											strokeWidth=".75"
											strokeDasharray="2 18"
										/>
										{[45, 165, 285].map((deg, i) => {
											const pt = pol(deg, 203);
											return (
												<circle
													key={i}
													cx={pt.x}
													cy={pt.y}
													r={1.5}
													fill="rgba(130,190,245,.4)"
												/>
											);
										})}
									</g>

									{/* ── Tick marks (60 total, 12 major) ── */}
									{TICKS.map(({ outer, inner, major }, i) => (
										<line
											key={i}
											x1={outer.x}
											y1={outer.y}
											x2={inner.x}
											y2={inner.y}
											stroke={
												major
													? "rgba(249,189,21,.45)"
													: "rgba(255,255,255,.1)"
											}
											strokeWidth={major ? 2 : 0.75}
											strokeLinecap="round"
										/>
									))}

									{/* ── Cardinal labels 12 / 3 / 6 / 9 ── */}
									{[
										{ d: 0, l: "12" },
										{ d: 90, l: "3" },
										{ d: 180, l: "6" },
										{ d: 270, l: "9" },
									].map(({ d, l }) => {
										const pt = pol(d, 177);
										return (
											<text
												key={l}
												x={pt.x}
												y={pt.y}
												textAnchor="middle"
												dominantBaseline="central"
												fill="rgba(249,189,21,.32)"
												fontFamily="Jost,sans-serif"
												fontSize="9"
												fontWeight="400"
											>
												{l}
											</text>
										);
									})}

									{/* ── Main ring track ── */}
									<circle
										cx={CX}
										cy={CY}
										r={168}
										fill="none"
										stroke="rgba(255,255,255,.05)"
										strokeWidth="12"
									/>

									{/* ── Main progress arc (96% – animated on intersection) ── */}
									<circle
										cx={CX}
										cy={CY}
										r={168}
										fill="none"
										stroke="url(#ag_gold)"
										strokeWidth="12"
										strokeLinecap="round"
										strokeDasharray={mainC}
										strokeDashoffset={
											on ? mainC * 0.04 : mainC
										}
										transform={`rotate(-90 ${CX} ${CY})`}
										filter="url(#ag_glow)"
										style={{
											transition: on
												? "stroke-dashoffset 2.4s cubic-bezier(0.16,1,0.3,1) 0.2s"
												: "none",
										}}
									/>

									{/* ── Arc tip dot ── */}
									{on && (
										<circle
											cx={ARC_END.x}
											cy={ARC_END.y}
											r={6}
											fill="#f9bd15"
											filter="url(#ag_glow2)"
											className="ag-tip"
										/>
									)}

									{/* ── Inner decorative rings ── */}
									<circle
										cx={CX}
										cy={CY}
										r={156}
										fill="none"
										stroke="rgba(249,189,21,.07)"
										strokeWidth="1"
									/>
									<circle
										cx={CX}
										cy={CY}
										r={145}
										fill="none"
										stroke="rgba(255,255,255,.04)"
										strokeWidth=".5"
									/>

									{/* ══════════════════════════════════
									    SUB-DIALS
									══════════════════════════════════ */}
									{DIALS.map(
										({ angle, dist, r, val, pct, lbl, col, delay }) => {
											const a =
												((angle - 90) * Math.PI) / 180;
											const dcx = +(
												CX +
												dist * Math.cos(a)
											).toFixed(2);
											const dcy = +(
												CY +
												dist * Math.sin(a)
											).toFixed(2);
											const c = circ(r);
											const off = on ? c * (1 - pct) : c;

											return (
												<g key={angle}>
													{/* Outer glow halo */}
													<circle
														cx={dcx}
														cy={dcy}
														r={r + 6}
														fill="none"
														stroke={`${col}12`}
														strokeWidth="12"
													/>
													{/* Track */}
													<circle
														cx={dcx}
														cy={dcy}
														r={r}
														fill="rgba(0,15,38,.6)"
														stroke="rgba(255,255,255,.07)"
														strokeWidth="3"
													/>
													{/* Progress arc */}
													<circle
														cx={dcx}
														cy={dcy}
														r={r}
														fill="none"
														stroke={col}
														strokeWidth="3.5"
														strokeLinecap="round"
														strokeDasharray={c}
														strokeDashoffset={off}
														transform={`rotate(-90 ${dcx} ${dcy})`}
														style={{
															transition: `stroke-dashoffset 1.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
														}}
													/>
													{/* Inner ring */}
													<circle
														cx={dcx}
														cy={dcy}
														r={r - 8}
														fill="none"
														stroke={`${col}18`}
														strokeWidth="1"
													/>
													{/* Dial value */}
													<text
														x={dcx}
														y={dcy - 3}
														textAnchor="middle"
														dominantBaseline="auto"
														fill="#fff"
														fontFamily="'Playfair Display',serif"
														fontSize="13"
														fontWeight="700"
													>
														{val}
													</text>
													{/* Dial label */}
													<text
														x={dcx}
														y={dcy + 11}
														textAnchor="middle"
														fill={col}
														fontFamily="Jost,sans-serif"
														fontSize="6"
														letterSpacing=".08em"
													>
														{lbl}
													</text>
												</g>
											);
										},
									)}

									{/* ══════════════════════════════════
									    CENTER DISPLAY
									══════════════════════════════════ */}
									{/* Pulsing core glow */}
									<circle
										cx={CX}
										cy={CY}
										r={58}
										fill="url(#ag_core)"
										className="ag-pulse"
									/>

									{/* Center bezel */}
									<circle
										cx={CX}
										cy={CY}
										r={51}
										fill="rgba(0,11,32,.92)"
										stroke="rgba(249,189,21,.2)"
										strokeWidth="1.5"
									/>
									<circle
										cx={CX}
										cy={CY}
										r={45}
										fill="none"
										stroke="rgba(249,189,21,.06)"
										strokeWidth=".75"
									/>

									{/* Clinic name */}
									<text
										x={CX}
										y={CY - 22}
										textAnchor="middle"
										fill="rgba(249,189,21,.55)"
										fontFamily="Jost,sans-serif"
										fontSize="6"
										fontWeight="600"
										letterSpacing=".22em"
									>
										RECOVERY
									</text>

									{/* Main metric "96%" */}
									<text
										x={CX}
										y={CY + 3}
										textAnchor="middle"
										dominantBaseline="central"
										fill="url(#ag_gold)"
										fontFamily="'Playfair Display',serif"
										fontSize="27"
										fontWeight="700"
										filter="url(#ag_glow)"
									>
										96%
									</text>

									{/* Sub-label */}
									<text
										x={CX}
										y={CY + 23}
										textAnchor="middle"
										fill="rgba(255,255,255,.3)"
										fontFamily="Jost,sans-serif"
										fontSize="5.5"
										letterSpacing=".14em"
									>
										УСПЕШНОСТЬ
									</text>

									{/* Cross-hair decorations */}
									{(
										[
											[CX - 45, CY, CX - 57, CY],
											[CX + 45, CY, CX + 57, CY],
											[CX, CY - 45, CX, CY - 57],
											[CX, CY + 45, CX, CY + 57],
										] as [number, number, number, number][]
									).map(([x1, y1, x2, y2], i) => (
										<line
											key={i}
											x1={x1}
											y1={y1}
											x2={x2}
											y2={y2}
											stroke="rgba(249,189,21,.18)"
											strokeWidth=".75"
											strokeDasharray="2 2"
										/>
									))}

									{/* ══════════════════════════════════
									    SWEEP HAND
									══════════════════════════════════ */}
									<g
									className="ag-sweep"
									style={{ transformOrigin: `${CX}px ${CY}px` }}
									>
										{/* Counterbalance tail */}
										<line
											x1={CX}
											y1={CY + 18}
											x2={CX}
											y2={CY - 132}
											stroke="rgba(249,189,21,.22)"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										{/* Tip */}
										<circle
											cx={CX}
											cy={CY - 132}
											r={2.5}
											fill="rgba(249,189,21,.9)"
											filter="url(#ag_glow)"
										/>
										{/* Center pivot */}
										<circle
											cx={CX}
											cy={CY}
											r={5}
											fill="rgba(249,189,21,.5)"
										/>
										<circle
											cx={CX}
											cy={CY}
											r={3}
											fill="#f9bd15"
										/>
									</g>

									{/* ══════════════════════════════════
									    TOP 24/7 BADGE
									══════════════════════════════════ */}
									<rect
										x={CX - 23}
										y={20}
										width={46}
										height={18}
										rx={9}
										fill="rgba(0,99,181,.28)"
										stroke="rgba(130,190,245,.25)"
										strokeWidth="1"
									/>
									<text
										x={CX}
										y={29}
										textAnchor="middle"
										dominantBaseline="central"
										fill="#82bef5"
										fontFamily="Jost,sans-serif"
										fontSize="7.5"
										fontWeight="700"
										letterSpacing=".1em"
									>
										24 / 7
									</text>

									{/* ── Bottom clinic text ── */}
									<text
										x={CX}
										y={422}
										textAnchor="middle"
										fill="rgba(249,189,21,.3)"
										fontFamily="Jost,sans-serif"
										fontSize="6.5"
										letterSpacing=".24em"
									>
										МЕДИЦИНСКИЙ ЦЕНТР · АСТАНА
									</text>
								</svg>
							</div>

							{/* ── Bottom stats strip ── */}
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "1fr 1fr 1fr",
									borderTop: "1px solid rgba(249,189,21,.1)",
									position: "relative",
									zIndex: 2,
								}}
							>
								{[
									{
										icon: "🔒",
										label: "Анонимность",
										col: "#f9bd15",
									},
									{
										icon: "⚖️",
										label: "Лицензия МЗ",
										col: "#f9bd15",
									},
									{
										icon: "✅",
										label: "Сертификат",
										col: "#f9bd15",
									},
								].map(({ icon, label, col }, i) => (
									<div
										key={i}
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											gap: ".4rem",
											padding: "1rem .75rem",
											borderRight:
												i < 2
													? "1px solid rgba(249,189,21,.1)"
													: "none",
										}}
									>
										<span style={{ fontSize: "1.2rem" }}>
											{icon}
										</span>
										<span
											style={{
												fontSize: ".62rem",
												color: col,
												letterSpacing: ".08em",
												fontWeight: 600,
												textTransform: "uppercase" as const,
											}}
										>
											{label}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="about-accent" />
					</div>

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