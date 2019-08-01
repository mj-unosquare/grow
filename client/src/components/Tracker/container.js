import React from "react";
import { retrieveTrackerById } from "Services/TrackerService";
import {
  retrieveRecordByDate,
  createRecord,
  updateRecord
} from "Services/RecordService";

export default Wrapped =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tracker: "",
        record: {
          plant_id: this.props.plant,
          tracker_id: this.props.id,
          record_date: new Date(),
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
        });
      } else {
        updateRecord(this.state.record);
      }
    };

    handleRecordChange = event => {
      const target = event.target;
      const value = target.value;
      this.state.record.record_value = value;
    };

    render() {
      return (
        <Wrapped
          {...this.state}
          onChange={this.handleRecordChange}
          save={this.saveRecord}
        />
      );
    }
  };
