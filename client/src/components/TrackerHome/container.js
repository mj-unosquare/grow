import React from "react";
import { retrieveTrackers } from "Services/TrackerService";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        trackers: ""
      };
    }

    componentDidMount() {
      retrieveTrackers().then(response => {
        this.setState({
          trackers: response.data
        });
      });
      this.setState({ plantid: this.props.plant });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
