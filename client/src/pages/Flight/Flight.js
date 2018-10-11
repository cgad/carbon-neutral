import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Flight extends Component {
    state = {
        origin: "",
        destination: "",
        airline: ""
    }

    componentDidMount() {
        "flight"
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.origin && this.state.destination) {
            axios.post("/api/flight/calculate", {
                origin: this.state.origin,
                destination: this.state.destination, // this stuff is req.body so req.body.origin etc
                airline: this.state.airline
            })
            .then(() => console.log("success"))
            .catch(err => console.log(err))
        }
    };

    render() {
        return (
            <section class="section parallax bg2">
            <form>
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.origin} 
                    name="origin" 
                    placeholder="Origin Airport (ex. DEN). Required" 
                />
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.destination} 
                    name="destination" 
                    placeholder="Destination Airport (ex. FLL). Required" 
                />
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.airline} 
                    name="airline" 
                    placeholder="Airline (ex. Delta). Optional" 
                />
                <FormBtn
                    disabled={!(this.state.origin && this.state.destination)}
                    onClick={this.handleFormSubmit}
                >
                    Get Impact Model
                </FormBtn>
            </form>
            </section>
        )
    }
}

export default Flight;
