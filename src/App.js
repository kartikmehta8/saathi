import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import SMSForm from "./components/SMSForm";
import alanBtn from "@alan-ai/alan-sdk-web";
import Main from "./components/Main";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            greeting: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.alanBtnInstance = alanBtn({
            key: "ALAN_API_KEY_HERE",
            onCommand: (commandData) => {
                if (commandData.command === "go:back") {
                }
            },
        });
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
            .then((response) => response.json())
            .then((state) => this.setState(state));
    }

    render() {
        return (
            <div>
                <div className="flex bg-gray-100 justify-center items-center">
                    <img src={logo} className="App-logo h-20 w-20" alt="logo" />{" "}
                    &nbsp;{" "}
                    <span
                        className="text-3xl font-bold poppins"
                        style={{ color: "#61DBFB" }}
                    >
                        Saathi
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <header className="App-header">
                        <img
                            src="https://c.tenor.com/D3gLwTlR1wsAAAAd/mental-health-matters-mental-health-action-day.gif"
                            alt="OLD"
                            className="h-60 w-60 rounded-xl"
                        />
                        <SMSForm />
                    </header>
                    <div>
                        <Main />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
