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
      retrievePlantById(this.props.id).then(response => {
        this.setState({
          plant: response.data[0]
        });
      });
    }

    render() {
      return <Wrapped {...this.state} />;
    }
  };
