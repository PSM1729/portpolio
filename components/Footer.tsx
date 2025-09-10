import { blog, blogdetail, footer } from "../data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="blogs">
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold lg:max-w-[45vw] text-yellow-100">
                My <span className="text-purple">Blogs</span>
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
                {blogdetail}
            </p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
               <a href={blog} target="_blank">Medium Blog</a>
                </span>
            </button>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light text-zinc-50">
                {footer}
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;