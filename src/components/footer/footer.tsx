"use client";

import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container footer-top pt-3 pb-2">
				<div className="social-links d-flex justify-content-center">
					<a className="m-0" rel="noreferrer" target="_blank" href="https://www.instagram.com/sls_shisha/">
						<i className="bi bi-instagram" />
					</a>
				</div>
			</div>

			<div className="container copyright text-center mt-1">
				<p style={{ fontSize: "18px" }} className="text-center">
					© <span>Copyright</span> <strong className="px-1 sitename">Holo Holo Jinbocho,</strong> <span>All Rights Reserved</span>
				</p>

				<div className="credits">
					Powered by <br /> ウェブサイ制作 <br />
					<a target="_blank" style={{ color: "rgb(53, 134, 239)", fontWeight: "bold", fontSize: "16px" }} rel="noreferrer" href="https://startanalytics.net/">
						startanalytics.net
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
