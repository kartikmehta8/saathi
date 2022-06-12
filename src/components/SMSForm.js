import React, { Component } from "react";
import "../styles/SMSForm.css";

class SMSForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                to: "",
                body: "",
            },
            submitting: false,
            error: false,
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onHandleChange(event) {
        const name = event.target.getAttribute("name");
        this.setState({
            message: { ...this.state.message, [name]: event.target.value },
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.message),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    this.setState({
                        error: false,
                        submitting: false,
                        message: {
                            to: "",
                            body: "",
                        },
                    });
                } else {
                    this.setState({
                        error: true,
                        submitting: false,
                    });
                }
            });
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className={this.state.error ? "error sms-form" : "sms-form"}
            >
                <div>
                    <input
                        placeholder="+91 XXXXXXXXXX"
                        className="text-black px-2 poppins text-base rounded-t-xl py-2"
                        type="tel"
                        name="to"
                        id="to"
                        value={this.state.message.to}
                        onChange={this.onHandleChange}
                    />
                </div>
                <div>
                    <textarea
                        name="body"
                        id="body"
                        value={this.state.message.body}
                        className="text-black text-base px-2 py-2"
                        placeholder="Shh! This will be anonymous."
                        onChange={this.onHandleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="poppins text-sm bg-purple-700 px-1 py-2 rounded-b-xl"
                >
                    Send message
                </button>
            </form>
        );
    }
}

export default SMSForm;
