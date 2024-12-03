import { Place } from "../../util/content/PlaceHold";

const PlaceHolder = () => {
    const{title,para,linker,serving} = Place;
  return (
    <div className="bg-black text-white flex justify-center items-center">
    <div className=" py-20 w-[600px] h-[300px]">
        <h1 className="text-5xl">{title}</h1>
        <p>{para}</p>
        <h3 className="text-3xl">{linker}</h3>
        <h6>{serving}</h6>
    </div>
    </div>
    
  );
}

export default PlaceHolder;
