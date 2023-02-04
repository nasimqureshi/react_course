import React, { Component } from "react";

class Person extends Component {
   constructor(props) {
      super(props);
      this.props = props;
      this.state = {
         name: "Nasim",
         age: 69,
      };
      
   }
   
    render() {
       return (
        <div>
           {/* <div>Name: Nasim Qureshi</div>
           <div>Age: 69 Years</div> */}

           <h1>
            {/* <i>Dear {this.props.name}, {this.props.age} ,Welcome to my home</i> */}
            <i>Dear {this.state.name}, {this.state.age} ,Welcome to my website</i>
           </h1>
        </div>
       );

    }
   }
export default Person;