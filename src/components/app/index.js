import { h } from "preact";
import { css } from "emotion";
import Emoji from "../emoji";

const textAlignCenter = css`
  text-align: center;
`;

const App = () => (
  <div class={textAlignCenter}>
    <h1>Hello World!</h1>
    <p>
      I <Emoji symbol="❤️" label="love" /> you
    </p>
  </div>
);

export default App;
