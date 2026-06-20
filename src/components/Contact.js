import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-10 px-6 max-w-md mx-auto bg-white/40 backdrop-blur-xs border border-border-soft rounded-3xl mt-4 shadow-sm w-full">
      <h1 className="font-sora font-extrabold text-2xl md:text-3xl text-text-main text-center">Get in Touch</h1>
      <p className="text-text-muted text-xs md:text-sm text-center leading-relaxed">
        Have comments, questions, or partnerships in mind? Drop us a message below!
      </p>
      <form className="w-full flex flex-col gap-3.5 mt-2" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-1.5">
          <label className="font-sora font-bold text-[10px] text-text-main uppercase tracking-wider">Name</label>
          <input type="text" placeholder="Your name" className="px-4 py-2.5 text-sm rounded-xl border border-slate-150 bg-white focus:border-brand/40 focus:ring-3 focus:ring-brand/10 transition-all outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sora font-bold text-[10px] text-text-main uppercase tracking-wider">Email</label>
          <input type="email" placeholder="you@example.com" className="px-4 py-2.5 text-sm rounded-xl border border-slate-150 bg-white focus:border-brand/40 focus:ring-3 focus:ring-brand/10 transition-all outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sora font-bold text-[10px] text-text-main uppercase tracking-wider">Message</label>
          <textarea rows="3" placeholder="How can we help you?" className="px-4 py-2.5 text-sm rounded-xl border border-slate-150 bg-white focus:border-brand/40 focus:ring-3 focus:ring-brand/10 transition-all outline-none resize-none" />
        </div>
        <button type="submit" className="mt-2 w-full py-2.5 text-xs md:text-sm font-sora font-bold text-white bg-gradient-to-r from-brand to-[#ff8d47] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact