import react, {Component} from "react";
import Login from "./components/Header/pages";
import "./App.css"

export default class App extends Component {
    render() {
        return(
            <div className="App">
                <Login/>
            </div>
        );
    }
}
