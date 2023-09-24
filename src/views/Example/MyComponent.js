import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJob: [
      { id: "job1", title: "Developer", salary: '500' },
      { id: "job2", title: "Tester", salary: '1500' },
      { id: "job3", title: "CTO", salary: '2500' },
    ]
  };

  addNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job]
    })
  }

  deleteAJob = (job) => {
    let currentJob = this.state.arrJob;
    currentJob = currentJob.filter(item => item.id !== job.id)
    this.setState({
      arrJob: currentJob
    })
  }

  render() {
    return (
      <>
        <AddComponent
          addNewJob={this.addNewJob}
        />
        <ChildComponent
          arrJob={this.state.arrJob}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
