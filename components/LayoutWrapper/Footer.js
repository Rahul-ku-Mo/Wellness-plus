import Router from "next/router";

const Footer = () => {
  return (
    <div className="flex justify-around h-[100px] bg-slate-100/80 p-4">
      <div 
      onClick={() => {
        Router.reload();
      }}
      className="text-2xl font-bold cursor-pointer ">
        Wellness<span className="text-3xl font-black">+</span>
      </div>
      <div className="font-semibold text-center items-baseline">
        Quick Links
        <div className="flex gap-4 pt-6">
          <div
            onClick={() => {
              Router.replace("/");
            }}
            className="cursor-pointer transition-all 250ms ease-in-out hover:text-slate-400 "
          >
            Home
          </div>
          <div
            onClick={() => {
              Router.replace("/about");
            }}
            className="cursor-pointer transition-all 250ms ease-in-out hover:text-slate-400 "
          >
            About
          </div>
          <div
            onClick={() => {
              Router.replace("/contact");
            }}
            className="cursor-pointer transition-all 250ms ease-in-out hover:text-slate-400 "
          >
            Contact
          </div>
        </div>
      </div>

      <div className="font-semibold text-slate-400">Powered by Genx </div>
    </div>
  );
};

export default Footer;
