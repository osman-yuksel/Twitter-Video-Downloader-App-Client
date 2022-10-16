import { useState } from 'react'
import { useQuery } from './QueryContext';

function QueryForm() {
  const { query, setQuery }  = useQuery();
  const [tempQuery, setTempQuery] = useState<string>("");

  function OnChangeInput(e: React.ChangeEvent<HTMLInputElement>){
    setTempQuery(e.target.value)
  }

  function OnSubmit(e: React.SyntheticEvent){
    e.preventDefault();
    setQuery(tempQuery);
  }
  
  return (
    <form onSubmit={OnSubmit} className='flex'>
      <div>
        <input name='query-url' placeholder={""} onChange={OnChangeInput}
        className='border border-blue-400 mr-2'></input>
      </div>
      <div>
        <button type='submit'
        className='border border-black mr-2'>Find</button>
      </div>
      <div>{tempQuery}</div>
    </form>
  );
}

export default QueryForm;