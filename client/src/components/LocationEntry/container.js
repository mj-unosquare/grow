import React from "react";
import { retrieveLocationById } from "Services/LocationService";
import { retrievePlantsByLocationId } from "Services/PlantService";
import axios from "axios";

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
      axios
        .all([
          retrieveLocationById(this.props.id),
          retrievePlantsByLocationId(this.props.id)
        ])
        .then(
          axios.spread((location, plants) => {
            this.setState({
              location: location.data[0],
              plants: plants.data
            });
          })
        );
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
