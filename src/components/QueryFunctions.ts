export async function GetMediaData(tweetUrl: string) {
  const mediaData = await fetch( import.meta.env.VITE_API_HOST + "/tweet?url=" + tweetUrl);
  return mediaData;  
}