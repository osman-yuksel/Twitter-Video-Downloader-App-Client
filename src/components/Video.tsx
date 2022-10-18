function Video(props: any) {
  return (
    <div className="flex flex-col md:flex-row animate-fadeinbottom items-center mb-12 mr-10 ml-10">
      <video width="100%" height="auto" controls>
        <source src={props.obj.variants[0].url}/>
      </video>
      <ul>{props.obj.variants.map((variant: any, i: any) => {
        if(variant.content_type === "video/mp4")
          return <li key={i}>
            <div className="border-2 border-purple-800 bg-gray-500 p-2 m-2 rounded-lg hover:bg-black animate-fadeinbottom">
              <a href={variant.url} download>Click to download { GetResolution(variant.url) }</a>
            </div>
          </li>
      })}</ul>
    </div>
  )
}

export default Video;

function GetResolution(url: string){
  const f = url.split("vid/");
  if(f[1]){
    return f[1].split("/")[0];
  }
 return "";
}

// https://video.twimg.com/amplify_video/1581299590241755138/vid/640x360/okOVszYaiRtehdMU.mp4?tag=14