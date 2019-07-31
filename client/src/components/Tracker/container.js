import React from "react";
import { retrieveTrackerById } from "Services/TrackerService";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tracker: ""
      };
    }

    componentDidMount() {
      retrieveTrackerById(this.props.id).then(response => {
        console.log(response);
        this.setState({
          tracker: response.data[0]
        });
      });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
