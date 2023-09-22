import React from "react";

class MyComponent extends React.Component {
  render() {
    let name = "loc";

    return (
      <>
        <div>
          {console.log(name)}
          Hello component, hello {name}
        </div>
        <div>Hello again</div>
      </>
    );
  }
}

export default MyComponent;
