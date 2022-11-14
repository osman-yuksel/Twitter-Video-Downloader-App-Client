export async function GetMediaData(tweetUrl: string) {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  let controller = new AbortController();
  setTimeout(() => controller.abort(), 10000);
  //console.log("Fetching data: ", "/tweet?url=" + tweetUrl)
  const mediaData = await fetch(import.meta.env.VITE_API_HOST + "/tweet?url=" + tweetUrl, {
    signal: controller.signal,
  })
    .then(res => res.json())
    .catch((err) => console.log(err));
  return mediaData;
}