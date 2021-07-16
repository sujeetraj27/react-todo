import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {


  
    const [users, setUsers] = useState([
    { id: 1, title: "Salman", desc: "Front End Dev", creatOn: "sujeet" },
    { id: 2, title: "Shuvo", desc: "Data Scientist", creatOn: "raj" },
    { id: 3, title: "Mahadi", desc: "Full Stack Dev", creatOn: "sumeet" },
  ]);

  useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(users))
  }, [users])

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
