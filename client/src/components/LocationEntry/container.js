import React from "react";
import { retrieveLocationById } from "Services/LocationService";
import { retrievePlantsByLocationId } from "Services/PlantService";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: "",
        plants: ""
      };
    }

    componentDidMount() {
      this.setState({
        location: retrieveLocationById(this.props.id - 1),
        plants: retrievePlantsByLocationId(this.props.id)
      });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
