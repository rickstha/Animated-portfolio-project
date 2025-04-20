

const SectionHeader = ({
    title,
    eyebrow,
    desc,
}:{
    title: string;
    eyebrow: string;
    desc: string;
}) => {
  return (
    <div>
        <div className=" flex justify-center">
        <p className=" uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
        </div>
        <h2 className=" font-serif text-3xl text-center mt-6 md:text-4xl">
         {title}
        </h2>
        <p className=" text-center text-white/60 mt-4 ">
          {desc}
        </p>
        
    </div>
  )
}

export default SectionHeader