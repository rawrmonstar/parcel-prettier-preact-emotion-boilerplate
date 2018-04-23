import { injectGlobal } from "emotion";
import { bodyFont } from "./font-stacks";

injectGlobal`
html {
	box-sizing: border-box;
  font-size: 16px;
  line-height: 1.4;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

body {
	margin: 0;
  font-family: ${bodyFont};
}
`;
