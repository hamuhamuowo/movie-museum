import "./styled-system/styles.css";
import { css } from "./styled-system/css";

function App() {
  return (
    <div
      className={css({
        color: "rose.400",
        fontSize: "4xl",
        fontWeight: "bold",
      })}
    >
      <h1>hello world!</h1>
    </div>
  );
}

export default App;
