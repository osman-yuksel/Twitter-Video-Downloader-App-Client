import React, { createContext, useContext } from "react";

interface queryInterface {
  queryURL: string,
}
const QueryContext = createContext<queryInterface | undefined>({ queryURL: "DUMBASS"});

export function useQueryContext() {
  return useContext(QueryContext);
}