import React, { Component } from "react";

class Person extends Component {
   constructor(props) {
      super(props);
      this.props = props;

   }
   
    render() {
       return (
        <div>
           {/* <div>Name: Nasim Qureshi</div>
           <div>Age: 69 Years</div> */}

           <h1>
            <i>Dear {this.props.name}, {this.props.age} ,Welcome to my home</i>
           </h1>
        </div>
       );

    }
   }
export default Person;