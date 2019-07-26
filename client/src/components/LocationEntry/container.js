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
      retrieveLocationById(this.props.id).then(response => {
        this.setState({
          location: response.data[0]
        });
      });
      retrievePlantsByLocationId(this.props.id).then(response => {
        this.setState({
          plants: response.data
        });
      });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
