import { useTranslation } from "react-i18next";

import employer from "../assets/team/employer.png";
import employer1 from "../assets/team/employer1.png";
import employer2 from "../assets/team/employer2.png";
export default function Team() {
	const { t } = useTranslation();

	const specialists = [
		{ name: t('Шляпа Усатая'), role: t('team.spec1Role'), src: employer },
		{ name: t('Кал Калыч'), role: t('team.spec2Role'), src: employer1 },
		{ name: t('Конь Шляпы'), role: t('team.spec3Role'), src: employer2 },
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
					{specialists.map((spec, i) => (
						<div key={i} className={`team-card reveal d-${(i % 5) + 1}`}>
							<div className={`team-avatar ${i % 2 === 0 ? 'team-avatar-even' : 'team-avatar-odd'}`}>
								<img src={spec.src} alt={spec.name} />
								<div className="team-hover-overlay">
									<span className="team-overlay-txt">
										{t('team.consultation')}
									</span>
									<div className="team-overlay-line"></div>
								</div>
							</div>
							<div className="team-info">
								<div className="team-name">{spec.name}</div>
								<div className="team-role">{spec.role}</div>
							</div>
						</div>
					))}
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
