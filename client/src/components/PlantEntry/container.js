import React from "react";
import { retrievePlantById } from "Services/PlantService";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plant: ""
      };
    }

    componentDidMount() {
      this.setState({
        plant: retrievePlantById(this.props.id - 1)
      });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
