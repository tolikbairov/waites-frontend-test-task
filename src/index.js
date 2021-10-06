import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
// (
//   <Painting
//     src={data.avatar}
//     name={data.name}
//     tag={data.tag}
//     location={data.location}
//     followers={data.stats.followers}
//     views={data.stats.views}
//     likes={data.stats.likes}
//   />
// ),
ReactDOM.render(<App />, document.querySelector("#root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
