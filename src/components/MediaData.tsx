import { useEffect, useState } from "react";
import { useQuery } from "./QueryContext";
import { GetMediaData } from "./QueryFunctions";
import { DisplayMediaData } from "./MediaFunctions";
import Loading from "./Loading";
import ApiError from "./ApiError";
import QueryError from "./QueryError";
import EmptyData from "./EmptyData";

function MediaData() {
  const { query, setQuery } = useQuery();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    if (id) {
      //console.log("Query changed: ",query);
      setLoading(true);
      const FetchData = async (query: string) => {
        const fdata = await GetMediaData(query);
        setData(fdata);
        //console.log("Data: ", fdata);
      };

      FetchData(query).then(() => {
        setLoading(false), setId((id) => id + 1);
      });
    } else setId((id) => id + 1);
  }, [query]);

  return loading ? (
    <Loading />
  ) : data ? (
    data.tweetId === "url_not_found" ||
    data.tweetId === "invalid_url" ||
    !data.mediaData ? (
      <QueryError />
    ) : data.tweetId === "api_error" ? (
      <ApiError />
    ) : (
      <ul className="">{DisplayMediaData(data)}</ul>
    )
  ) : (
    <EmptyData />
  );
}

export default MediaData;
