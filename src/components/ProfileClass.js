import React from "react";

class ProfileClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.childName + "- Constructor");
    this.state = {
      count: 0,
      count1: 2,
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("  https://api.github.com/users/preeet1000");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(this.props.childName + "- componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.childName + "componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.childName + "componentWillUnmount");
  }
  render() {
    console.log(this.props.childName + "- render");
    return (
      <div>
        <h3>Profile Class Complonent</h3>
        <h4>{this.props.name}</h4>
        <h4>{this.state.count}</h4>
        <h4>{this.state.count1}</h4>
        <h4>{this.state.userInfo?.login}</h4>
        <h4>{this.state.userInfo?.id}</h4>
        <h4>{this.state.userInfo?.type}</h4>
        <button
          onClick={() =>
            this.setState({
              count: 50,
            })
          }
        >
          click
        </button>
      </div>
    );
  }
}

export default ProfileClassComponent;
