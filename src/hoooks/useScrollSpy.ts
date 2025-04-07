import { useEffect } from "react";

export function useScrollspy() {
	useEffect(() => {
		const handleScrollspy = () => {
			const navLinks = document.querySelectorAll(".navmenu a") as NodeListOf<HTMLAnchorElement>;

			navLinks.forEach((link) => {
				if (!link.hash) return;
				const section = document.querySelector(link.hash) as HTMLElement | null;
				if (!section) return;

				const position = window.scrollY + 200;
				if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
					document.querySelectorAll(".navmenu a.active").forEach((activeLink) => activeLink.classList.remove("active"));
					link.classList.add("active");
				} else {
					link.classList.remove("active");
				}
			});
		};

		window.addEventListener("scroll", handleScrollspy);
		window.addEventListener("load", handleScrollspy);

		return () => {
			window.removeEventListener("scroll", handleScrollspy);
			window.removeEventListener("load", handleScrollspy);
		};
	}, []);
}
