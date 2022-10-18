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
    <div className="flex w-full flex-col items-center mb-10 animate-fadeinbottom">
      <form onSubmit={OnSubmit} className='flex'>
      <div>
        <input name='query-url' placeholder={"Enter a tweet link"} onChange={OnChangeInput}
        className='border-4 rounded-tl-lg rounded-bl-lg mr-1 p-2 w-[24rem] sm:w-[32rem] md:w-[44rem] bg-text-input border-text-input hover:border-gray-500 text-white transition-all focus:bg-black !outline-none focus:border-purple-700'></input>
      </div>
      <div>
        <button type='submit'
        className='border-8 rounded-tr-lg rounded-br-lg p-2 h-12 w-12 bg-text-input border-text-input hover:bg-gray-500 hover:border-gray-500 text-white bg-searchimage bg-contain bg-no-repeat bg-center'></button>
      </div>
    </form>
    </div>
  );
}

export default QueryForm;

