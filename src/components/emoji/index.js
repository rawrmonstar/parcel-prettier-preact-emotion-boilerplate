import { h } from "preact";
import { css } from "emotion";

const emojiClassName = css`
  display: inline-block;
  width: 1em;
  text-align: center;
`;

const Emoji = ({ symbol, label }) => (
  <span class={emojiClassName} role="img" aria-label={label}>
    {symbol}
  </span>
);

export default Emoji;
