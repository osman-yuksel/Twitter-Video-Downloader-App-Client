import JsFileDownloader from "js-file-downloader";

function Video(props: any) {
  return (
    <div className="flex flex-col md:flex-row animate-fadeinbottom items-center mb-12">
      <div className="h-full w-60 sm:w-[32rem] m-4 flex grow-0 justify-center border border-gray-800 rounded-lg">
        <video className="rounded-lg" width="100%" height="auto" controls>
          <source
            src={
              props.obj.variants[0].content_type === "video/mp4"
                ? props.obj.variants[0].url
                : props.obj.variants[1].url
            }
          />
        </video>
      </div>
      <ul className="flex flex-col shadow-lg rounded-lg first:mt-0 md:self-start md:mt-4">
        {props.obj.variants.map((variant: any, i: any) => {
          if (variant.content_type === "video/mp4")
            return (
              <li className="even:mt-4 even:mb-4" key={i}>
                <div className="border-2 border-neutral-600 bg-buttonbackground-color p-2 rounded-lg hover:bg-black hover:border-primary animate-fadeinbottom w-60 text-center hover:scale-105 transition-all shadow-md shadow-secondary">
                  <button
                    type="button"
                    onClick={(e) => {
                      DownloadVideo(variant.url);
                    }}
                  >
                    Click to download {GetResolution(variant.url)}
                  </button>
                </div>
              </li>
            );
        })}
      </ul>
    </div>
  );
}

export default Video;

function GetResolution(url: string) {
  const f = url.split("vid/");
  if (f[1]) {
    return f[1].split("/")[0];
  }
  return "";
}

function DownloadVideo(url: string) {
  new JsFileDownloader({
    url: url,
  })
    .then(function () {
      //
    })
    .catch(function (error) {
      console.log(error);
    });
}
