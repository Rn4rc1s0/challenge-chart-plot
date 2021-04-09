import React from "react";
import InputArea from "./components/InputArea";
import ChartArea from "./components/ChartArea";
import Button from "@material-ui/core/Button";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Narciso";

    this.state = {
      currentData: ""
    };
  }

  render() {
    return (
      <div className="App">
        <SplitterLayout
          vertical={true}
          percentage={true}
          primaryIndex={0}
          secondaryInitialSize={65}
          primaryMinSize={25}
          secondaryMinSize={50}>
          <div className="input">
            <div className="title">{this.name}'s Challenge</div>
            <InputArea
              value={this.state.data}
              onChange={(newValue) => this.setState({ data: newValue })}/>
          </div>
          <div className="chart">
            <ChartArea eventStream={this.state.currentData} />
          </div>
        </SplitterLayout>
        <div className="button">
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.setState({ currentData: this.state.data })}>
            Generate Chart
          </Button>
        </div>
      </div>
    );
  }
}
