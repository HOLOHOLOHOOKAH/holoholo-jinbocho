"use client";

import { useEffect } from "react";

export function useMobileNavCloseOnLinkClick() {
	useEffect(() => {
		const handleNavLinkClick = (event: Event) => {
			const link = event.target as HTMLElement;
			if (link.closest("#navmenu")) {
				const toggleButton = document.querySelector(".mobile-nav-toggle") as HTMLElement | null;
				toggleButton?.click(); // Simulates a click to close the menu
			}
		};

		const navLinks = document.querySelectorAll("#navmenu a") as NodeListOf<HTMLAnchorElement>;
		navLinks.forEach((link) => link.addEventListener("click", handleNavLinkClick));

		return () => navLinks.forEach((link) => link.removeEventListener("click", handleNavLinkClick));
	}, []);
}
