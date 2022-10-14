import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface queryInterface {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const QueryContext = createContext<queryInterface>({} as queryInterface);

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("empty");
  const values = { query, setQuery };
  useEffect(() => {
    console.log("Query changed: ", query);
  }, [query]);
  return (<QueryContext.Provider value={values}>{children}</QueryContext.Provider>);
}

export const useQuery = () => useContext(QueryContext);