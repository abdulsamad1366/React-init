import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div
			className="error-page"
			style={{
				minHeight: "70vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "12px",
				padding: "24px",
				textAlign: "center",
			}}
		>
			<h1 style={{ fontSize: "48px", margin: 0 }}>404</h1>
			<p style={{ fontSize: "18px", margin: 0 }}>Page not found</p>
			<p style={{ margin: 0, maxWidth: "520px" }}>
				The route you tried to open does not exist. Use the button below to go
				back to the home page.
			</p>
			<Link
				to="/"
				style={{
					marginTop: "8px",
					padding: "10px 16px",
					borderRadius: "8px",
					backgroundColor: "#111827",
					color: "#ffffff",
					textDecoration: "none",
				}}
			>
				Go Home
			</Link>
		</div>
	);
};

export default Error;
