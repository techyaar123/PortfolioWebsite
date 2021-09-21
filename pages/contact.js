import NavBar from "../components/navbar";
import React from "react";
export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "",
      email: "",
      message: "",
    };
  }

  handleInputChanged(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleButtonClicked() {
    const { name1, email, message } = this.state;
    let data = {
      name1,
      email,
      message,
    };
    alert("Thank you for providing as valuable information");
    fetch("/api/contactapi", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        this.setState({
          name1: "",
          email: "",
          message: "",
        });
      }
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <h1 className="headerAbout">Contact</h1>
        <div className="Contact">
          <div className="ContactContent">
            <label className="Label">Name</label>

            <input
              type="text"
              value={this.state.name1}
              onChange={this.handleInputChanged.bind(this)}
              name="name1"
              className="Name"
            />
            <label className="Label">Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInputChanged.bind(this)}
              name="email"
              className="Email"
            />
            <label className="Label">Message</label>
            <textarea
              value={this.state.message}
              onChange={this.handleInputChanged.bind(this)}
              name="message"
              className="Message"
              rows={5}
              cols={5}
            />
            <button
              onClick={this.handleButtonClicked.bind(this)}
              className="SubmitForm"
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}
