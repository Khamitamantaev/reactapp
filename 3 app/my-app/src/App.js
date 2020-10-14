import React from "react";
import "./assets/output.css";
import Images from "./components/images";

// class App1 extends React.Component {
//   // constructor(props) {
//   //   console.log('App Constructor')
//   //   super(props);
//   //   this.state = { title: "Hello Khamit!", isShowing: false };
    
//   // }
  
//   componentDidMount() {
//     console.log('App Mounted')
//     // this.setState({title: "Hello LifeCycle!"})
//   }


//   componentDidUpdate() {
//     console.log(" App updated")
//   }

  

  

//   render() {

//     console.log('App Render')
//     return (
      
//     );

//     //     return(
//     //       <section>
//     //       <div class="flex justify-center bg-gray-200">
//     //   <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
//     //   <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
//     //   <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
//     // </div>
//     //       </section>

//     //     )
//   }
// }

function App() {
const [title, setTitle] = React.useState("Hello React")

const [isShowing, setIsShowing] = React.useState(false)

function handleClick() {
  setIsShowing(!isShowing);
}

  return (
    <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{title}</div>
            <button
              className="p-1 bg-blue-700 text-white mt-8 my-2"
              onClick={handleClick}
            >
              Toggle Image
            </button>
          </div>
          {isShowing ? (
            <Images/>
          ) : null}
        </div>
      </section>
  );
}

export default App;
