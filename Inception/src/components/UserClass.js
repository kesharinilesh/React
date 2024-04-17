import React from 'react';
//import {component} from 'react';
//loading a classbase component on a page that means we are creating the new instance of the class.
// And when we create a new instance constructor is called so that's the best place to receive props and best place to create state variables as well.
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        // console.log("Child constructor");
        this.state = {
            count:1,
            count2:2,
            userInfo:{
                name:"Dummmy",
                location:"Default",
            }
        };
    }
    async componentDidMount() {
        // console.log(this.props.name+"Child mounted")
        const data = await fetch("https://api.github.com/users/kesharinilesh");
        const json = await data.json();
        console.log(json)
        
        this.setState({userInfo:json})
        console.log(json)
    }
    componentDidUpdate(){
        console.log("Component Updated")
    }
    componentWillUnmount(){
        console.log("Component Unmounted")
    }
    render() {
        // console.log("Child rendered")
        const{name}=this.props;
        const{count2}=this.state;
        return <div className="user-card">
        {/* <h3>S.No:{this.state.count}</h3> */}
        {/*Could be also destructured */}
        {/* <h3>S.No_2:{count2}</h3> */}
        {/* <button onClick={()=>{
            this.setState(
                {count2:this.state.count2+1});
        }}>Increase Counter</button> */}
        <h2>Name: {name}</h2>
        <h3>Role: Software Engineer</h3>
        <h3>Email: {this.props.email}</h3>
        {/* <h3>Count_Class: {Count}</h3> */}
    </div>
    }
}

export default UserClass;

/*

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

---Mounting  //Showing on to the UI unmounting means removing fromt the UI
-
Constuctor
Render
<HTML> DUmmy
Component did mount
<API Call>
<this.setState> -> State variable is updated

---Update
render (API data)
HTML (new API data)

Component did update
*/
