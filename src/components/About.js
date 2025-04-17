import User from "./User"
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component {
    constructor(props){
        super(props);

        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("parent mounted");
      }
    render() {
        console.log("Parent Render")
        return (
           
            <div>
                <h1>About</h1>
                <h2>This is Namaste React.js</h2>
               {/* <User/> */}
    
                <UserClass name={"Aayush Parashar"} location={"Delhi"}/>
            </div>
        )
    }
}

export default About;