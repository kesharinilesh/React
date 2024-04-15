import React from 'react';
//loading a classbase component on a page that means we are creating the new instance of the class.
// And when we create a new instance constructor is called so that's the best place to receive props and best place to create state variables as well.
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            count:1,
            count2:2,
        };
    }
    render() {
        const{name}=this.props;
        const{count2}=this.state;
        return <div className="user-card">
        <h3>S.No:{this.state.count}</h3>
        {/*Could be also destructured */}
        <h3>S.No_2:{count2}</h3>
        <button onClick={()=>{
            this.setState(
                {count2:this.state.count2+1});
        }}>Increase Counter</button>
        <h2>Name: {name}</h2>
        <h3>Role: Software Engineer</h3>
        <h3>Email: {this.props.email}</h3>
        {/* <h3>Count_Class: {Count}</h3> */}
    </div>
    }
}

export default UserClass;