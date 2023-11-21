import React from "react";

class ProfileClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.childName + '- Constructor');
    this.state = {
      count: 0,
      count1: 2,
    };
  }

  componentDidMount() {
    console.log(this.props.childName + '- componentDidMount');
    console.log('componentDidMount executed !!');
  }
  render() {
    console.log(this.props.childName + '- render');
    return (
      <div>
        <h3>Profile Class Complonent</h3>
        <h4>{this.props.name}</h4>
        <h4>{this.state.count}</h4>
        <h4>{this.state.count1}</h4>
        <button onClick={()=> this.setState({
            count:50
        })} >click</button>
      </div>
    );
  }
}

export default ProfileClassComponent;
