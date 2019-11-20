import React, { Component } from "react";

class Forms extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    
     const url = "https://nodemain-jbbv5r8c5.now.sh/api/form";
    const { name, email, message, subject } = this.state;
    const data = { name, email, message, subject };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      console.log("SUCCESS:", JSON.stringify(json));
    } catch (error) {
      console.error("Error", error);
    }
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Subject</label>
            <input
              value={this.state.subject}
              type="text"
              name="subject"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="subject"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <textarea
              value={this.state.message}
              className="form-control"
              name="message"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <button
            onClick={this.onSubmit}
            type="submit"
            className="btn btn-primary mb-2"
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
