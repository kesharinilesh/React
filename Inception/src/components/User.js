import {useState} from 'react';
import { useEffect } from 'react';
// const User=(props)=>{
const User=({name})=>{//destructure on the fly
    const [Count] = useState(0);
    const [Count2] = useState(0);

    useEffect(()=>{
        p();
    },[])
    const p=async () => {
    const data = await fetch("https://api.github.com/users/kesharinilesh");
    json = await data.json();
    console.log(json)
    }

    return <div className="user-card">
        {/* <h3>S.No: {Count}</h3>
        <h3>S.No_2: {Count2}</h3> */}
        <h2>Name: {name}</h2>
        <h3>Role: Software Engineer</h3>
        <h3>Email: kesharinilesh13@gmail.com</h3>
    </div>
}
export default User;