import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const fullSizedEditor = {
  width: "100%",
  height: "100%",
  fontFamily: "'Source Code Pro', sans-serif",
  position: "relative"
};

export default class InputArea extends React.Component {
  render() {
    return (
      <div className="InputArea">
        <AceEditor
          style={fullSizedEditor}
          mode="javascript"
          theme="monokai"
          fontSize={12}
          showPrintMargin={false}
          showGutter={true}
          highlightActiveLine={true}
          onChange={this.props.onChange}
          value={this.props.value}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
      </div>
    );
  }
}
