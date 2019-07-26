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
      retrieveLocations().then(response => {
        this.setState({
          locations: response.data
        });
      });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
