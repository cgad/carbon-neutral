import React, { Component } from "react";
import axios from "axios";
import { Input, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";

class Pet extends Component {
  state = {
    species: "",
    breed: "",
    gender: "",
    weight: ""
  };

  componentDidMount() {
    // write loadSearched function to grab all previously searched from db and display on mount
    "pet";
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
      axios
        .post("/api/flight/calculate", {
          species: this.state.species,
          breed: this.state.breed,
          gender: this.state.gender,
          weight: this.state.weight
        })
        .then(() => console.log("success"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <main className="wrapper">
        <Nav />
        <section className="section parallax bg1">
          <form>
            <label>Species (required)</label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.species}
              name="species"
              placeholder="ex. Dog. Required"
            />
            <label>Breed (required)</label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.breed}
              name="breed"
              placeholder="ex. Boxer. Required"
            />
            <label>Gender (optional)</label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.gender}
              name="gender"
              placeholder="ex. Male. Optional"
            />
            <label>Weight (kg) (optional)</label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.weight}
              name="weight"
              placeholder="ex. 27. Optional"
            />
            <FormBtn
              // disabled when no species and breed
              disabled={!(this.state.species && this.state.breed)}
              onClick={this.handleFormSubmit}
            >
              Coming Soon!
            </FormBtn>
          </form>
        </section>
      </main>
    );
  }
}

export default Pet;
