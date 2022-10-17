export async function GetMediaData(tweetUrl: string) {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  if(true){
    await sleep(1000);
    return FakeData();
  }
  let controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);
  console.log("Fetching data: ", "/tweet?url=" + tweetUrl)
  const mediaData = await fetch(import.meta.env.VITE_API_HOST + "/tweet?url=" + tweetUrl, {
    signal: controller.signal,
  })
  .then(res => res.json())
  .catch((err) => console.log(err));
  return mediaData;  
}

//Development only
function FakeData(){
  return {
    "tweetId":"1581306673003524096",
    "mediaData":
    [
      {
        "media_key":"13_1581299590241755138",
        "type":"video",
        "variants":
        [
          {
            "bit_rate":832000,
            "content_type":"video/mp4",
            "url":"https://video.twimg.com/amplify_video/1581299590241755138/vid/640x360/okOVszYaiRtehdMU.mp4?tag=14"
          },
          {
            "bit_rate":2176000,
            "content_type":"video/mp4",
            "url":"https://video.twimg.com/amplify_video/1581299590241755138/vid/1280x720/GCmGiMCNaruCRhqi.mp4?tag=14"
          },
          {
            "content_type":"application/x-mpegURL",
            "url":"https://video.twimg.com/amplify_video/1581299590241755138/pl/XywZP-cGwxDef8Md.m3u8?tag=14&container=fmp4&v=b0e"
          },
          {
            "bit_rate":288000,
            "content_type":"video/mp4",
            "url":"https://video.twimg.com/amplify_video/1581299590241755138/vid/480x270/3zrJrzMFtq9vsYeU.mp4?tag=14"
          }
        ]
      },
      {
        "media_key":"3_1581010687777820676",
        "type":"photo",
        "url":"https://pbs.twimg.com/media/FfDg2A8X0AQFIad.jpg"
      },
      {
        "media_key":"16_1579477422214455296",
        "type":"animated_gif",
        "variants":
        [
          {
            "bit_rate":0,
            "content_type":"video/mp4",
            "url":"https://video.twimg.com/tweet_video/FetuWNnXoAAriRI.mp4"
          }
        ]
      }
    ]
  }
}

export function DisplayMediaData(data: any){
  return data.mediaData.map((obj: any, key:any) => {
    if(obj.type === "video" || obj.type === "animated_gif"){
      return <li key={key}>Video Object === {obj.media_key} <hr></hr><ul>{obj.variants.map((variant: any, i: any) => {
        if(variant.content_type === "video/mp4")
        return <li key={i}>
          <a className="text-white" href={variant.url} download>Click to download</a></li>
      })}</ul></li>
    }
    if(obj.type === "photo"){
      return <li key={key}>Photo Object === {obj.media_key}<hr></hr><div>{obj.url}</div></li>
    }
  })
}