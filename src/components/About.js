import User from './User';
    
const About = () => {
    return (
        <div className="flex flex-col items-center gap-6 py-12 px-6 max-w-2xl mx-auto bg-white/40 backdrop-blur-xs border border-border-soft rounded-3xl mt-4 shadow-sm text-center">
            <h1 className="font-sora font-extrabold text-3xl text-text-main">About Our Journey</h1>
            <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-lg">
                Welcome to BiteDash! We build technologies that connect hungry foodies with their favorite local restaurants. Fresh, fast, and crafted with love.
            </p>
            <div className="w-full border-t border-slate-100 my-2" />
            <User name={"Abdul Samad"} location={"Mathura, UP"} />
        </div>
    )
}

export default About;   