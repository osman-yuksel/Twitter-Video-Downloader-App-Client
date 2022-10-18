import Video from "./Video";

export function DisplayMediaData(data: any){
  return data.mediaData.map((obj: any, key:any) => {
    if(obj.type === "video" || obj.type === "animated_gif"){
      return <li key={key} className="text-white animate-fadeinbottom ml-10 mr-10 w-[24rem] sm:w-[32rem] md:w-[44rem] border-4 border-purple-700 rounded-lg p-4 mb-4">
        {obj.type} === {obj.media_key} <hr></hr><Video obj={obj} />
      </li>
    }
  });
}