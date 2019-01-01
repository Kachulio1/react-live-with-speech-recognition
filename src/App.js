import React, { Component } from "react";
import Praise from "react-praise";

const myPhrases = {
  'joseph': phrase => "HI " + phrase,
  "*": phrase => "You said " + phrase,
  
};

const MyAppWithVoice = props => (
  <Praise phrases={myPhrases}>{output => <h2>{output}</h2>}</Praise>
);

export default class extends Component {
  render() {
    return (
      <div>
        <MyAppWithVoice />
      </div>
    );
  }
}
