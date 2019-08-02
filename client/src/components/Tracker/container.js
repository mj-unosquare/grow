import React from "react";
import { navigate } from "@reach/router";
import { retrieveTrackerById } from "Services/TrackerService";
import {
  retrieveRecordByDate,
  createRecord,
  updateRecord
} from "Services/RecordService";
import { Routes } from "Constants";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tracker: "",
        record: {
          plant_id: this.props.plant,
          tracker_id: this.props.id,
          record_date: this.props.date,
          record_value: ""
        },
        create: true
      };
    }

    componentDidMount() {
      retrieveTrackerById(this.props.id).then(response => {
        this.setState({
          tracker: response.data[0]
        });
      });

      retrieveRecordByDate(
        this.props.plant,
        this.props.id,
        this.props.date
      ).then(response => {
        if (response.data && response.data.length) {
          this.setState({
            record: response.data[0],
            create: false
          });
        }
      });
    }

    saveRecord = () => {
      if (this.state.create) {
        createRecord(this.state.record).then(response => {
          this.setState({
            record: response.data,
            create: false
          });
          this.props.navigate("../../");
        });
      } else {
        updateRecord(this.state.record).then(response => {
          this.props.navigate("../../");
        });
      }
    };

    handleRecordChange = event => {
      const target = event.target;
      const value = target.value;
      this.state.record.record_value = value;
    };

    currentDate = () => {
      let date = new Date(this.state.record.record_date);
      var d = date.getDate();
      var m = date.getMonth() + 1; //Month from 0 to 11
      var y = date.getFullYear();
      return d + "/" + m + "/" + y;
    };

    render() {
      return (
        <Wrapped
          {...this.state}
          onChange={this.handleRecordChange}
          save={this.saveRecord}
          currentDate={this.currentDate()}
        />
      );
    }
  };
