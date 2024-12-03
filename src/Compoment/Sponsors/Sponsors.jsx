import { SponsorsData } from "../../util/content/Sponsors";

const Sponsors = () => {
    const{title,para,image1,image2} =SponsorsData;
  return (
    <div className="bg-black text-white flex justify-center items-center">
    <div className=" py-20 w-[600px] h-[400px]">
        <h1>{title}</h1>
        <p>{para}</p>
        <img src={image2} alt="" />
        <img src={image1} alt="" />
    </div>
    </div>
  );
}

export default Sponsors;
