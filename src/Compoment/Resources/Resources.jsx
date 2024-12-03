import { ResourcesData } from "../../util/content/Resources";

const Resources = () => {
    const {title, para, note ,title1,para2,type} = ResourcesData;
  return (
    <div className="bg-black text-white flex justify-center items-center">
    <div className=" py-20 w-[600px] h-[600px]">
            <h1>{title}</h1>
            <p>{para}</p>
            <div  className="flex">
            <ul>
                <li><a href="https://api-back-end-two.vercel.app/post">/posts</a></li>
                <li><a href="https://api-back-end-two.vercel.app/comment">/comments</a></li>
                <li><a href="https://api-back-end-two.vercel.app/album">/albums</a></li>
                <li><a href="">/photos</a></li>
                <li><a href="">/todos</a></li>
                <li><a href="">/users</a></li>
            </ul>
            <ul>
                <li>100 posts</li>
                <li>500 comments</li>
                <li>100 albums</li>
                <li>5000 photos</li>
                <li>200 todos</li>
                <li>10 users</li>
            </ul>
            </div>
            <p>{note}</p>
            <h1 className="py-3">{title1}</h1>
            <p>{para2}</p>
            <p>{type}</p>
    </div>
    </div>
  );
}

export default Resources;
