import { useState } from "react";
import { useQuery } from "./QueryContext";

function QueryForm() {
  const { query, setQuery } = useQuery();
  const [tempQuery, setTempQuery] = useState<string>("");

  function OnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTempQuery(e.target.value);
  }

  function OnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setQuery(tempQuery);
  }

  return (
    <div className="flex w-full flex-col items-center mb-10 animate-fadeinbottom mt-12">
      <form onSubmit={OnSubmit} className="flex">
        <div>
          <input
            name="query-url"
            placeholder={"Enter a tweet link"}
            onChange={OnChangeInput}
            className="border-4 rounded-tl-lg rounded-bl-lg mr-1 p-2 w-[18rem] sm:w-[32rem] md:w-[44rem] bg-text-input border-text-input hover:border-gray-500 text-white transition-all focus:bg-black !outline-none focus:border-primary"
          ></input>
        </div>
        <div>
          <button
            type="submit"
            className="border-8 rounded-tr-lg rounded-br-lg p-2 h-12 w-12 bg-text-input border-text-input hover:bg-gray-500 hover:border-gray-500 text-white bg-searchImage bg-contain bg-no-repeat bg-center"
          ></button>
        </div>
      </form>
      <div className="text-gray-500 p-2 underline break-words  w-[21rem] sm:w-[35rem] md:w-[47rem]">
        <a
          href="https://twitter.com/9GAG/status/1581345410026803204"
          target="_blank"
          rel="noopener"
        >
          Example: https://twitter.com/9GAG/status/1581345410026803204
        </a>
      </div>
    </div>
  );
}

export default QueryForm;
