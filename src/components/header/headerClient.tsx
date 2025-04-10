"use client";

import { useScrollspy } from "@/hoooks/useScrollSpy";
import { useMobileNavCloseOnLinkClick } from "@/hoooks/useMobileNavCloseOnLinkClick";
import { useMobileNavToggle } from "@/hoooks/useMobileNav";

export default function HeaderClient() {
	useMobileNavToggle();
	useMobileNavCloseOnLinkClick();
	useScrollspy();

	return null; // just runs the hooks
}
