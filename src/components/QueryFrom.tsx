import { useState } from 'react'

function QueryFrom() {
  const [query, setQuery] = useState<string>("");
  const [queryPlaceholder, setQueryPlaceholder] = useState<string>("Enter tweet url");
  function OnChangeInput(e: React.ChangeEvent<HTMLInputElement>){
    setQueryPlaceholder("Enter tweet url");
    setQuery(e.target.value);
  }

  function OnSubmit(e: React.SyntheticEvent){
    e.preventDefault();

    if(query === ""){
      setQueryPlaceholder("Please enter a url!");
      return false;
    }

    console.log("Query request recieved.", query);
    setQuery("");;
  }
  
  return (
    <form onSubmit={OnSubmit} className='flex'>
      <div>
        <input name='query-url' placeholder={queryPlaceholder} onChange={OnChangeInput}
        className='border border-blue-400 mr-2'></input>
      </div>
      <div>
        <button type='submit'
        className='border border-black mr-2'>Find</button>
      </div>
      <p>{query}</p>
    </form>
  );
}

export default QueryFrom;