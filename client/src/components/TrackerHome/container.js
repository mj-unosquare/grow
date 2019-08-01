import React from "react";
import { retrieveTrackers } from "Services/TrackerService";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.handleDayClick = this.handleDayClick.bind(this);
      this.formatDate = this.formatDate.bind(this);
      this.state = {
        trackers: "",
        selectedDay: new Date()
      };
    }

    handleDayClick(day) {
      this.setState({ selectedDay: day });
    }

    formatDate(date) {
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
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
      return (
        <Wrapped
          {...this.state}
          selectDay={this.handleDayClick}
          formatDate={this.formatDate}
        />
      );
    }
  };
