import React from "react";
import "./footer.css";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container footer-top pt-3 pb-2">
				<div className="social-links d-flex justify-content-center">
					<Link aria-label="Open Instagram page" className="m-0 mx-2" rel="noreferrer" target="_blank" href="https://www.instagram.com/holoholojinbocho/">
						<i className="bi bi-instagram" />
					</Link>
					<Link aria-label="Open X page" className="m-0 mx-2" rel="noreferrer" target="_blank" href="https://x.com/holojinbocho">
						<i className="bi bi-twitter-x" />
					</Link>
				</div>
			</div>

			<div className="container copyright text-center mt-1">
				<p style={{ fontSize: "16px" }} className="text-center">
					© <span>Copyright</span> <strong className="px-1 sitename">Holo Holo Jinbocho,</strong> <span>All Rights Reserved</span>
				</p>

				<div className="credits">
					Powered by <br /> ウェブサイ制作 <br />
					<Link aria-label="Open startanalytics.net page" target="_blank" style={{ color: "rgb(53, 134, 239)", fontWeight: "bold", fontSize: "16px" }} rel="noreferrer" href="https://startanalytics.net/">
						startanalytics.net
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
