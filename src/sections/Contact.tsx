import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return <div className="py-8">
    <div className="container">
      <div className=" text-gray-900 overflow-hidden z-0 bg-gradient-to-r from-emerald-300 to-sky-400 py-8 px-10 rounded-3xl text-center relative md:text-left">
    <div className=" absolute inset-0 opacity-5 -z-10" style={{
      backgroundImage: `url(${grainImage.src})`
    }}></div>
    <div className=" flex flex-col md:flex-row items-center gap-8">
      <div>
    <h2 className=" font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
    <p className=" text-sm mt-2 md:text-base">
      Ready to bring your ideas to life? Let's connect and discuss how we can work together to create something amazing. Whether you have a project in mind or just want to chat, I'm here to help.
    </p>
    </div>
    <div>
    <button className=" text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max">
     <span className=" font-semibold"> Contact Me </span>
      <ArrowUpIcon className="size-4"/>
    </button>
    </div>
  </div>
  </div>
  </div>
  </div>
};
