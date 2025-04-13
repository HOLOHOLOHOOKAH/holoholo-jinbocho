// app/app/okachimachi/layout.tsx
import { ReactNode } from "react";
import "./okachimachi.css";

export default function OkachimachiLayout({ children }: { children: ReactNode }) {
	return <span className="dark-background"> {children}</span>;
}
