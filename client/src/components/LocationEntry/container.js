import React from "react";
import { retrieveLocationById } from "Services/LocationService";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: ""
      };
    }

    componentDidMount() {
      this.setState({
        location: retrieveLocationById(this.props.id - 1)
      });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
