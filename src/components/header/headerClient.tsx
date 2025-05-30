"use client";

import { useMobileNavCloseOnLinkClick } from "@/hoooks/useMobileNavCloseOnLinkClick";
import { useMobileNavToggle } from "@/hoooks/useMobileNav";
import { useEffect, useState } from "react";

export default function HeaderClient() {
	const [isMounted, setIsMounted] = useState(false);
	const { isMobileNavActive } = useMobileNavToggle();
	useMobileNavCloseOnLinkClick();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return <i className="mobile-nav-toggle d-xl-none bi bi-list" />;
	}

	return (
		<i 
			className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
			aria-label="Toggle mobile navigation"
		/>
	);
}
