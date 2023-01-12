// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: ''
//         }
//         this.updateState = this.updateState.bind(this);
//         this.clearInput = this.clearInput.bind(this);
//     };
//
//     updateState(e) {
//         this.setState({data: e.target.value});
//     }
//
//     clearInput() {
//         this.setState({data: ''});
//         ReactDOM.findDOMNode(this.refs.myInput).focus();
//         console.log(this.state);
//     }
//
//     render() {
//         return (
//             <div>
//                 <input value={this.state.data} onChange={this.updateState}
//                        ref="myInput"></input>
//                 <button onClick={this.clearInput}>CLEAR</button>
//                 <h4>{this.state.data}</h4>
//             </div>
//         );
//     }
// }
//
// export default App;


// keys

// import React from 'react';
//
// class App extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             data: [
//                 {
//                     component: 'First...',
//                     id: 1
//                 },
//                 {
//                     component: 'Second...',
//                     id: 2
//                 },
//                 {
//                     component: 'Third...',
//                     id: 3
//                 }
//             ]
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     {this.state.data.map((dynamicComponent, i) => <Content
//                         key={i} componentData={dynamicComponent}/>)}
//                 </div>
//             </div>
//         );
//     }
// }
//
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>{this.props.componentData.component}</div>
//                 <div>{this.props.componentData.id}</div>
//             </div>
//         );
//     }
// }
//
// export default App;

// router

import React from 'react';

// import {BrowserRouter, Link, Route} from 'react-router'
import {BrowserRouter, Route, Link, Routes, Outlet} from "react-router-dom";


class App extends React.Component {
    render() {
        return (


            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contract">Contact</Link>
                    </li>
                </ul>
                <Outlet/>

            </div>




            // {/*<Routes>*/}
            // {/*    <Route exact path = "home" element = {<Home />} />*/}
            // {/*    <Route path = "about" element = {<About/>} />*/}
            // {/*    <Route path = "contact" element = {<Contact />} />*/}
            // {/*</Routes>*/}

        )
    }
}

export default App;





