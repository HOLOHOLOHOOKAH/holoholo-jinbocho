import { useEffect, useState } from "react";

export function useMobileNavToggle() {
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	useEffect(() => {
		const toggleButton = document.querySelector(".mobile-nav-toggle") as HTMLElement | null;
		if (!toggleButton) return;

		const toggleMobileNav = () => {
			setIsMobileNavActive((prev) => {
				const newState = !prev;
				document.body.classList.toggle("mobile-nav-active", newState);
				return newState;
			});
		};

		toggleButton.addEventListener("click", toggleMobileNav);

		return () => {
			toggleButton.removeEventListener("click", toggleMobileNav);
			document.body.classList.remove("mobile-nav-active");
		};
	}, []);

	return { isMobileNavActive };
}
