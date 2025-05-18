"use client";

import { useMobileNavCloseOnLinkClick } from "@/hoooks/useMobileNavCloseOnLinkClick";
import { useMobileNavToggle } from "@/hoooks/useMobileNav";

export default function HeaderClient() {
	useMobileNavToggle();
	useMobileNavCloseOnLinkClick();

	return null; // just runs the hooks
}
