import React, { PureComponent } from "react";
class Life extends PureComponent {
  //1 get default props
  //2 set default state
  state = { title: "Life Cycles" };

  //   //3 before render
  //   componentWillMount() {
  //     console.log("3 before render");
  //   }

  //   //run before update something
  //   componentWillUpdate() {
  //     console.log("before update");
  //   }

  //   //run after update something
  //   componentDidUpdate() {
  //     console.log("after update");
  //   }

  // shouldComponentUpdate(nextProps, nextState) {
  //   //console.log(this.state.title);
  //   //console.log(nextState.title);
  //   if (nextState.title === this.state.title) {
  //     return false;
  //   }
  //   return true;
  // }

  //   componentWillReceiveProps() {
  //     console.log("before receive props");
  //   }

  //   componentWillUnmount() {
  //     console.log("unmount");
  //   }
  //   //4 render jsx

  render() {
    console.log("render");
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={() => this.setState({ title: "something else" })}>
          Click to change
        </div>
      </div>
    );
  }
  //5 after render

  //   componentDidMount() {
  //     console.log("5 after render");
  //     document.querySelector("h3").style.color = "red";
  //   }
}

export default Life;
