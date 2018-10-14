import React, { Fragment, Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { runInThisContext } from "vm";

class Flight extends Component {

    state = {
        origin: "",
        destination: "",
        airline: "",
        results: []
    }

    componentDidMount() {
        // load all searches from database
    };

    loadAllSearches = () => {
        API.getAllSearches()
            .then(res => this.setState({ results: res.data, origin: "", destination: "", airline: "" }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        value = value.toUpperCase();
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.origin.length === 3 && this.state.destination.length === 3) {
            API.saveFlight({
                origin: this.state.origin,
                destination: this.state.destination,
                airline: this.state.airline
            })
                .then(res => this.loadAllSearches())
                .catch(err => console.log(err));
        };
    };

    render() {
        return (
            <main className="wrapper">
                <section className="section parallax bg1">
                    <form>
                        <label>Origin Airport (required)</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.origin} 
                            name="origin" 
                            placeholder="ex. DEN" 
                        />
                        <label>Destination Airport (required)</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.destination} 
                            name="destination" 
                            placeholder="ex. FLL" 
                        />
                        <label>Airline (optional)</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.airline} 
                            name="airline" 
                            placeholder="ex. Delta" 
                        />
                        <FormBtn 
                            disabled={!(this.state.origin.length === 3 && this.state.destination.length === 3)}
                            onClick={this.handleFormSubmit}
                        >
                            Get Impact Model
                        </FormBtn>
                     </form>
                     {/* <a href="#jump">Jump to Results</a> */}
                 </section>
                 <section className="section static">
                    {/* <a id="jump">Jump link destination</a> */}
                    {this.state.results.length ? ( 
                        <List>
                            {this.state.results.map(result => (
                                <ListItem key={result._id}>
                                    <strong>{result.origin}</strong>
                                </ListItem>
                            ))}
                        </List>
                        // <Container fluid>
                        //     <Row>
                        //         <Col size="md-4">
                        //             <List key={this.state.results._id}>
                        //                 <ListItem>
                        //                     <strong>Origin: </strong>{this.state.results.origin}
                        //                 </ListItem>
                        //                 <ListItem>
                        //                     <strong>Destination: </strong>{this.state.results.destination}
                        //                 </ListItem>
                        //                 <ListItem>
                        //                     <strong>Airline: </strong>{this.state.results.airline}
                        //                 </ListItem>
                        //             </List>
                        //         </Col>
                        //         <Col size="md-8 sm-12">
                        //             <List key={this.state.results._id}>
                        //                 <ListItem>
                        //                     <strong>Carbon: </strong>{this.state.results.carbon}
                        //                 </ListItem>
                        //             </List>
                        //         </Col>
                        //     </Row>
                        // </Container>     
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </section>
                 <section className="section parallax bg2">
                    <h1>prior searches in bootstrap cards</h1>
                </section>
            </main>
        );
    };

}

export default Flight;
