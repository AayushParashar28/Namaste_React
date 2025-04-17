import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "John",
        location: "hciahc",
      },
    };
    console.log("Child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AayushParashar28");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did updated");
  }

  componentWillUnmount () {
    console.log("Component Will Unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:- {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact :- @Aayush62</h4>
      </div>
    );
  }
}

export default UserClass;
