import React, { Component } from "react";
import axios from "axios";
import { Input, FormBtn } from "../../components/Form";

class Pet extends Component {
    state = {
        species: "",
        breed: "",
        gender: "",
        weight: ""
    }

    componentDidMount() {
        // write loadSearched function to grab all previously searched from db and display on mount
        "pet"
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
                species: this.state.species,
                breed: this.state.breed,
                gender: this.state.gender,
                weight: this.state.weight
            })
            .then(() => console.log("success"))
            .catch(err => console.log(err));
        };
    };

    render() {
        return (
            <form>
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.species} 
                    name="species" 
                    placeholder="Species (ex. Dog). Required" 
                />
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.breed} 
                    name="breed" 
                    placeholder="Breed (ex. Boxer). Required" 
                />
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.gender} 
                    name="gender" 
                    placeholder="Gender (ex. Male). Optional" 
                />
                <Input 
                    onChange={this.handleInputChange} 
                    value={this.state.weight} 
                    name="weight" 
                    placeholder="Weight in kg (ex. Dog). Optional" 
                />
                <FormBtn
                    disabled={!(this.state.species && this.state.breed)}
                    onClick={this.handleFormSubmit}
                >
                    Get Impact Model
                </FormBtn>
            </form>
        )
    }
}

export default Pet;
