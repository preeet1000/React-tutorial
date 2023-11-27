import { Outlet } from "react-router-dom";
import ProfileComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";
import React from "react";
import UserContext from "../utility/helper/UserContext";

class AboutComponent extends React.Component {
  constructor() {
    super();
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //     console.log('setInterval');
    // }, 1000);
    console.log("Parent - componentDidMount");
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
    console.log("Parent - componentWillUnmount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About page</h1>
        <UserContext.Consumer>
          {({ user }) => <span className=" text-lg">{user.userName}</span>}
        </UserContext.Consumer>
        <Outlet />
        <ProfileComponent name="LP" />
        <ProfileClassComponent name="LP" childName="First Child" />
        {/* <ProfileClassComponent name= "LP singh"  childName="Second Child"/> */}
      </div>
    );
  }
}

export default AboutComponent;
