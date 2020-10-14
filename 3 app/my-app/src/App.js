import React from "react";
import "./assets/style.css"

// class App extends React.Component {
// constructor(props) {

//   super(props);
//   this.state = {title: 'Hello Khamit!'}

// }

// render() {
//   return(
//     <div>{this.state.title}</div>
//   )
// }
// }

function App({ title }) {
  return (
    <div>
      <div className="bg-gray-600 text-white p-5 border">{title}</div>
    </div>
  );
}

export default App;