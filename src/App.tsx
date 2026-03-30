import { useEffect } from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Methods from "./components/Methods";
import Services from "./components/Services";
import Stages from "./components/Stages";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import DetoxAccordion from "./components/DetoxAccordion";
import Location from "./components/Location";
import "./index.css";

export default function App() {
	useEffect(() => {
		// Scroll reveal
		const revealEls = document.querySelectorAll(
			".reveal,.reveal-l,.reveal-r,.reveal-s",
		);
		const ro = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("show");
						ro.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.12 },
		);
		revealEls.forEach((el) => ro.observe(el));

		// Smooth scroll
		const anchors = document.querySelectorAll('a[href^="#"]');
		const handleClick = (e: Event) => {
			const a = e.currentTarget as HTMLAnchorElement;
			const id = a.getAttribute("href")!.slice(1);
			if (!id) return;
			const el = document.getElementById(id);
			if (el) {
				e.preventDefault();
				el.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		};
		anchors.forEach((a) => a.addEventListener("click", handleClick));

		// Card tilt
		const cards = document.querySelectorAll<HTMLElement>(".srv-card");
		const onMove = (e: MouseEvent) => {
			const card = e.currentTarget as HTMLElement;
			const r = card.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - 0.5;
			const y = (e.clientY - r.top) / r.height - 0.5;
			card.style.transform = `translateY(-14px) scale(1.02) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
		};
		const onLeave = (e: MouseEvent) => {
			(e.currentTarget as HTMLElement).style.transform = "";
		};
		cards.forEach((card) => {
			card.addEventListener("mousemove", onMove);
			card.addEventListener("mouseleave", onLeave);
		});

		// Cleanup
		return () => {
			ro.disconnect();
			anchors.forEach((a) => a.removeEventListener("click", handleClick));
			cards.forEach((card) => {
				card.removeEventListener("mousemove", onMove);
				card.removeEventListener("mouseleave", onLeave);
			});
		};
	}, []);

	return (
		<div className="app">
			<Header />
			<main>
				<Hero />
				<Services />
				<About />
				<Stages />
				<Methods />
				<DetoxAccordion />
				<Team />
				<Testimonials />
				<FAQ />
				<Location />
				<CTA />
				<Contacts />
			</main>
			<Footer />
		</div>
	);
}
