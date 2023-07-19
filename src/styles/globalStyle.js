import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
 
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Ubuntu", "Mitr", "Athiti", "Cabin", "Noto Sans TC", "Noto Sans SC", "PingFang TC", "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", "Hiragino Sans GB", "Helvetica", "Roboto", "Arial", sans-serif;
}
`;

export default GlobalStyle;
