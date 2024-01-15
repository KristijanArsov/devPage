import { createContext, useState } from "react";
import data, { DataType } from "../assets/list";


interface DataContextType {
  list: DataType[]
}

export const DataContext = createContext<DataContextType>({
 list:[]
})

interface Props {
    children: React.ReactNode
}



const DataContextConstructor:React.FC<Props> = ({children}) => {
let list: DataType [] | undefined = undefined
list = data

  return (
    <DataContext.Provider value={{list}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextConstructor
