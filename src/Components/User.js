import { useEffect, useState } from "react";
const User = (props)=>{
  const {name} = props;
  const [count] = useState("0");

  useEffect(
    ()=>{
       const timer = setInterval(()=>{
        console.log("UseEffect SetInterval");
       },1000)

      return ()=>{
        clearInterval(timer);
      }
    },
    []
  );
  return(
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: 📍Puducherry</h3>
      <h4>Count: {count}</h4>
    </div>
  );
}
export default User;