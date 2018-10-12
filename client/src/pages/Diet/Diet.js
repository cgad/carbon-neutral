import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Diet extends Component {
    state = {

    }

    componentDidMount() {
        // write loadSearched function to grab all previously searched from db and display on mount
        "diet"
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

            })
            .then(() => console.log("success"))
            .catch(err => console.log(err))
        }

        this.setState({  });
    };

    render() {
        return (
            <form>
                <Input 
                    onChange={this.handleInputChange} 
                    value=""
                    name="" 
                    placeholder="" 
                />
                <Input 
                    onChange={this.handleInputChange} 
                    value="" 
                    name="" 
                    placeholder=""
                />
                <Input 
                    onChange={this.handleInputChange} 
                    value=""
                    name=""
                    placeholder=""
                />
                <FormBtn
                    disabled=""
                    onClick={this.handleFormSubmit}
                >
                    Get Impact Model
                </FormBtn>
            </form>
        )
    }
}

export default Diet;
