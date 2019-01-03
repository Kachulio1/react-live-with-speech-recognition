import React, { Component } from "react";
import Praise from "react-praise";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const myPhrases = {
  joseph: phrase => "HI " + phrase,
  "*": phrase => "You said " + phrase
};

const MyAppWithVoice = props => (
  <Praise phrases={myPhrases}>{output => <h2>{output}</h2>}</Praise>
);

export default class extends Component {
  render() {
    return (
      <div>
        <LiveProvider
          code="const Wrapper = ({ children }) => (
  <div style={{
    background: 'papayawhip',
    width: '100%',
    padding: '2rem'
  }}>
    {children}
  </div>
)
;
const Title = () => (
  <h3 style={{ color: 'palevioletred' }}>
    Hello World!
  </h3>
);

render(
  <Wrapper>
    <Title />
  </Wrapper>
)"
          noInline
        >
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
}
