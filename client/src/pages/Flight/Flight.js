import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Flight extends Component {
    state = {
        origin: "",
        destination: "",
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
                destination: this.state.destination
            })
            .then(() => console.log("success"))
            .catch(err => console.log(err))
        }
    };

    render() {
        return (
            <form>
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.origin} 
                    name="origin" 
                    placeholder="Origin Airport (ex. DEN)" 
                />
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.destination} 
                    name="destination" 
                    placeholder="Destination Airport (ex. FLL)" 
                />
                <FormBtn
                    disabled={!(this.state.origin && this.state.destination)}
                    onClick={this.handleFormSubmit}
                >
                    Get Impact Model
                </FormBtn>
            </form>
        )
    }
}

export default Flight;
