import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 p-6 text-center max-w-md mx-auto">
			<h1 className="font-sora font-extrabold text-7xl text-brand animate-bounce">404</h1>
			<p className="font-sora font-bold text-xl text-text-main">Oops! Page Not Found</p>
			<p className="text-xs md:text-sm text-text-muted leading-relaxed">
				The route you tried to open does not exist. Use the button below to head back to safety.
			</p>
			<Link
				to="/"
				className="mt-2 px-5 py-2.5 text-xs md:text-sm font-sora font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md"
			>
				Go Home
			</Link>
		</div>
	);
};

export default Error;
