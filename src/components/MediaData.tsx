import { useEffect, useState }from 'react'
import { useQuery } from './QueryContext';
import { GetMediaData } from './MediaFunctions';
import Loading from './Loading';
import { DisplayMediaData } from './MediaFunctions';

function MediaData() {
  const { query, setQuery }  = useQuery();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [id , setId] = useState<number>(0);
  
  useEffect(() => {
    if(id){
      console.log("Query changed: ",query);
      setLoading(true);
      const FetchData = async (query: string) => {
        const fdata = await GetMediaData(query)
        setData(fdata);
        console.log("Data: ", fdata);
      }
  
      FetchData(query).then(() => { setLoading(false), setId(id => id+1) });
    }
    else setId(id => id+1);
  },[query])
  
  return loading ? 
  <Loading />
  : data ? 
  <ul>{DisplayMediaData(data)}</ul> 
  : <div>Empty</div>;

}

export default MediaData;