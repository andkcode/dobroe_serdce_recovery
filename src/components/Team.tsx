import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import employer1 from "../assets/team/employer1.jpeg";
import employer2 from "../assets/team/employer2.jpeg";
import employer3 from "../assets/team/employer3.jpeg";
import employer4 from "../assets/team/employer4.jpeg";
import employer5 from "../assets/team/employer5.jpeg";
import employer6 from "../assets/team/employer6.jpeg";
import employer7 from "../assets/team/employer7.jpeg";
import employer8 from "../assets/team/employer8.jpeg";

const images = [employer1, employer2, employer3, employer4, employer5, employer6, employer7, employer8];

function TeamCarouselCard({ startIndex, names }: { startIndex: number; names: string[] }) {
	const [current, setCurrent] = useState(startIndex);
	const [previous, setPrevious] = useState(startIndex);
	const [fading, setFading] = useState(false);

	const changeTo = useCallback((getNext: (prev: number) => number) => {
		setCurrent((prev) => {
			const next = getNext(prev);
			setPrevious(prev);
			setFading(true);
			setTimeout(() => setFading(false), 500);
			return next;
		});
	}, []);

	const next = useCallback(() => {
		changeTo((prev) => (prev + 1) % images.length);
	}, [changeTo]);

	const prev = useCallback(() => {
		changeTo((prev) => (prev - 1 + images.length) % images.length);
	}, [changeTo]);

	useEffect(() => {
		const interval = setInterval(next, 4000);
		return () => clearInterval(interval);
	}, [next]);

	return (
		<div className="team-card reveal d-1">
			<div className="team-avatar team-avatar-even" style={{ height: "100%" }}>
				<img src={images[previous]} alt={names[previous]} className="team-img-bg" />
				<img
					src={images[current]}
					alt={names[current]}
					className={`team-img-fg ${fading ? "team-img-fadein" : ""}`}
				/>
				<button className="team-arrow team-arrow-left" onClick={prev} aria-label="Previous">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
				</button>
				<button className="team-arrow team-arrow-right" onClick={next} aria-label="Next">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
				</button>
			</div>
		</div>
	);
}

export default function Team() {
	const { t } = useTranslation();

	const names = [
		t('team.spec1'), t('team.spec2'), t('team.spec3'), t('team.spec4'),
		t('team.spec5'), t('team.spec6'), t('team.spec7'), t('team.spec8'),
	];

	return (
		<section id="team" className="section">
			<div className="container">
				<div className="section-head">
					<div className="reveal">
						<span className="eyebrow">{t('team.eyebrow')}</span>
					</div>
					<h2 className="section-title reveal d-1">
						{t('team.title').split('\n').map((line, i) => (
							<span key={i}>{line}<br /></span>
						))}
					</h2>
					<p className="section-sub reveal d-2">
						{t('team.subtitle')}
					</p>
				</div>
				<div className="team-grid">
					<TeamCarouselCard startIndex={0} names={names} />
					<TeamCarouselCard startIndex={1} names={names} />
					<TeamCarouselCard startIndex={2} names={names} />
				</div>
				<div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
					<a href="#contact" className="btn btn-primary">
						{t('team.cta')}
					</a>
				</div>
			</div>
		</section>
	);
}
