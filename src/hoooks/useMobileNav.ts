"use client";
import { useEffect, useState } from "react";

export function useMobileNavToggle() {
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	useEffect(() => {
		const toggleButton = document.querySelector(".mobile-nav-toggle") as HTMLElement | null;
		if (!toggleButton) return;

		const toggleMobileNav = () => {
			document.body.classList.toggle("mobile-nav-active");
			toggleButton.classList.toggle("bi-list");
			toggleButton.classList.toggle("bi-x");
			setIsMobileNavActive((prev) => !prev);
		};

		toggleButton.addEventListener("click", toggleMobileNav);

		return () => toggleButton.removeEventListener("click", toggleMobileNav);
	}, []);

	return { isMobileNavActive };
}
