export default function Team() {
	return (
		<>
			<section id="team" className="section">
				<div className="container">
					<div className="section-head">
						<div className="reveal">
							<span className="eyebrow">Наши специалисты</span>
						</div>
						<h2 className="section-title reveal d-1">
							Команда профессионалов,
							<br />
							<em>которым вы можете доверять</em>
						</h2>
						<p className="section-sub reveal d-2">
							Наши врачи и психологи обладают глубокими знаниями и многолетним
							опытом работы с зависимостями
						</p>
					</div>
					<div className="team-grid">
						<div className="team-card reveal d-1">
							<div className="team-avatar team-avatar-even">
								👨‍⚕️
								<div className="team-hover-overlay">
									<span className="team-overlay-txt">
										Записаться
										<br />
										на консультацию
									</span>
									<div className="team-overlay-line"></div>
								</div>
							</div>
							<div className="team-info">
								<div className="team-name">Трегуб Виталий Николаевич</div>
								<div className="team-role">
									Заведующий отделением, клинический психолог, психотерапевт и
									нарколог
								</div>
							</div>
						</div>
						<div className="team-card reveal d-2">
							<div className="team-avatar team-avatar-odd">
								👩‍⚕️
								<div className="team-hover-overlay">
									<span className="team-overlay-txt">
										Записаться
										<br />
										на консультацию
									</span>
									<div className="team-overlay-line"></div>
								</div>
							</div>
							<div className="team-info">
								<div className="team-name">Веневцева Наталья Юрьевна</div>
								<div className="team-role">
									Кандидат медицинских наук, врач-психиатр I категории,
									медицинский психолог
								</div>
							</div>
						</div>
						<div className="team-card reveal d-3">
							<div className="team-avatar team-avatar-even">
								👨‍⚕️
								<div className="team-hover-overlay">
									<span className="team-overlay-txt">
										Записаться
										<br />
										на консультацию
									</span>
									<div className="team-overlay-line"></div>
								</div>
							</div>
							<div className="team-info">
								<div className="team-name">Фещук Павел Петрович</div>
								<div className="team-role">
									Психиатр, нарколог высшей профессиональной категории
								</div>
							</div>
						</div>
						<div className="team-card reveal d-4">
							<div className="team-avatar team-avatar-odd">
								👩‍⚕️
								<div className="team-hover-overlay">
									<span className="team-overlay-txt">
										Записаться
										<br />
										на консультацию
									</span>
									<div className="team-overlay-line"></div>
								</div>
							</div>
							<div className="team-info">
								<div className="team-name">Присяжнюк Юлия Михайловна</div>
								<div className="team-role">
									Психолог, гештальт-терапевт, арт-терапевт, семейный системный
									терапевт
								</div>
							</div>
						</div>
						<div className="team-card reveal d-5">
							<div className="team-avatar team-avatar-even">
								👨‍⚕️
								<div className="team-hover-overlay">
									<span className="team-overlay-txt">
										Записаться
										<br />
										на консультацию
									</span>
									<div className="team-overlay-line"></div>
								</div>
							</div>
							<div className="team-info">
								<div className="team-name">Сербин Дмитрий Валерьевич</div>
								<div className="team-role">
									Практический психолог, магистр психологии и педагогики
								</div>
							</div>
						</div>
					</div>
					<div
						style={{ textAlign: "center", marginTop: "3rem" }}
						className="reveal"
					>
						<a href="#contact" className="btn btn-primary">
							Записаться к специалисту
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
