import React,{ReactNode ,createContext, useState} from 'react'


export const MainContext = createContext("");

interface Props {
    children?: ReactNode
    // any props that come into the component
}
export const MainProvider =({ children }: Props) =>{


const [posts,setPosts] = useState([])


return(
    <MainContext.Provider
      value={{posts,setPosts}}> {children}</MainContext.Provider>
)}