import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "default",
        loaction: "default",
      },
    };
  }

  componentDidMount = async () => {
    this.timer = setInterval(() => {}, 1000);

    // const data = await fetch("https://api.github.com/users/sh4f3e");
    // const json = await data.json();

    // this.setState({
    //   userInfo: json,
    // })
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.loaction}</h3>
      </div>
    );
  }
}
export default UserClass;
