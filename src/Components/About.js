import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Shafee (Functional Component)"}/> */}
        <User />
        <UserContext.Consumer>
          {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
