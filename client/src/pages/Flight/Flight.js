import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Flight extends Component {
    state = {
        origin: "",
        destination: "",
        airline: "",
        results: []
    }

    componentDidMount() {
        // write loadSearched function to grab all previously searched from db and display on mount
        "flight"
    }

    // ???????????????????????????????
    loadResults = () => {
        API.getResults()
        .then(res => this.setState({ results: res.data.carbon, origin: "", destination: "", airline: "" }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.origin && this.state.destination) {
            // ???????????????????????????????
            API.saveSearch({
                origin: this.state.origin,
                destination: this.state.destination,
                airline: this.state.airline
            })
            .then(res => this.loadResults())
            .catch(err => console.log(err));

            axios.post("/api/flight/calculate", {
                origin: this.state.origin,
                destination: this.state.destination, // req.body
                airline: this.state.airline
            })
            .then(() => console.log("success"))
            .catch(err => console.log(err))
        }

        this.setState({ origin: "", destination: "", airline: "" });
    };

    render() {
        return (
            <main className="wrapper">
                <section className="section parallax bg1">
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
                    {/* <a href="#jump">Jump to Results</a> */}
                </section>

                <section className="section static">
                    {/* <a id="jump">Jump link destination</a> */}
                    <h1>Boring</h1>
                </section>

                <section className="section parallax bg2">
                    <h1>SO FWUFFY AWWW</h1>
                </section>
            </main>
        )
    }
}

export default Flight;
