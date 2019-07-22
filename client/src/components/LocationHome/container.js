import React from "react";
import { retrieveLocations } from "Services/LocationService";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        locations: ""
      };
    }

    componentDidMount() {
      this.setState({
        locations: retrieveLocations()
      });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
