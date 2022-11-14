import Video from "./Video";

export function DisplayMediaData(data: any) {
  return data.mediaData.map((obj: any, key: any) => {
    if (obj.type === "video" || obj.type === "animated_gif") {
      return (
        <li
          key={key}
          className="animate-fadeinbottom ml-1 mr-1 w-[20.4rem] sm:w-[35.4rem] md:w-[47.4rem] rounded-lg p-4 mb-4 border-l-2 border-r-2 border-neutral-900 bg-cardcolor hover:border-secondary transition-all"
        >
          {obj.type === "video" ? (
            <div className="border-b-2 border-primary shadow-md m-2 mt-0 p-2 pl-0 text-lg">
              Video
            </div>
          ) : (
            <div className="border-b-2 border-primary shadow-md m-2 mt-0 p-2 pl-0 text-lg">
              GIF
            </div>
          )}
          <Video obj={obj} />
        </li>
      );
    }
  });
}
