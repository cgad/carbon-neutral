import React, { Fragment, Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";

class Flight extends Component {
    state = {
        origin: "",
        destination: "",
        airline: "",
        results: [],
        searched: []
    }

    componentDidMount() {
        this.loadAll();
    };

    loadLatest = () => {
        // write a get route to the /api/flight/calculate route to the backend routing file, where i'll query the flight collection and return the latest object added from the .post route
        API.getLatest()
            .then(res => {
                // put back origin dest airline clear
                this.setState({ results: res.data[0] })
            })
            .catch(err => console.log(err))
    };

    // BUG! STATE.SEARCHED IS ONLY HOLDING ONE SEARCH
    loadAll = () => {
        API.getAll()
          .then(res => this.setState({ searched: res.data }))
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        value = value.toUpperCase();
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.origin.length === 3 && this.state.destination.length === 3) {
            // eventually write a function in API file for this instead
            axios.post("/api/flight/calculate", {
                origin: this.state.origin,
                destination: this.state.destination, // req.body
                airline: this.state.airline
            })
                .then(res => this.loadLatest())
                .catch(err => console.log(err));

            axios.get("/api/flight/all", {
                origin: this.state.origin,
                destination: this.state.destination,
                airline: this.state.airline
            })
                .then(res => this.loadAll())
                .then(res => this.setState({ origin: "", destination: "", airline: "" }))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <main className="wrapper">
                <section className="section parallax bg1">
                    <form id="flightForm">
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
                        <FormBtn id="flightBtn"
                            disabled={!(this.state.origin.length === 3 && this.state.destination.length === 3)}
                            onClick={this.handleFormSubmit}
                        >
                            Get Impact Model
                        </FormBtn>
                    </form>
                    {/* <a href="#jump">Jump to Results</a> */}
                </section>

                {/* ADD fields for rest of flight model */}
                <section className="section static">
                    {/* <a id="jump">Jump link destination</a> */}
                    {this.state.results.origin ? (
                        <Container fluid>
                            <Row>
                                <Col size="12">
                                    <h6>Origin: <strong>{this.state.results.origin}</strong> | Destination: <strong>{this.state.results.destination}</strong> | Airline: <strong>{this.state.results.airline}</strong></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-8 sm-12">
                                    <h5>Your contribution to the total greenhouse gas emission of your searched flight is equivalent to...</h5>
                                    <List key={this.state.results._id}>
                                        {/* <ListItem>
                                            <strong>cars off the road for a year: </strong>{this.state.results.cars_off_road_for_year.$numberDecimal}
                                        </ListItem> */}
                                        <ListItem>
                                            <strong>{this.state.results.cars_off_road_for_day.$numberDecimal} </strong>cars off the road for a day
                                        </ListItem>
                                        <ListItem>
                                            <strong>{this.state.results.days_vegan.$numberDecimal} </strong>days of veganism
                                        </ListItem>
                                        <ListItem>
                                            <strong>{this.state.results.canisters_bbq_propane.$numberDecimal} </strong>canisters of BBQ propane
                                        </ListItem>
                                        <ListItem>
                                            <strong>{this.state.results.recycled_bags_trash.$numberDecimal} </strong>recycled bags of trash
                                        </ListItem>
                                    </List>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </section>

                <section className="section parallax bg2">
                    <Container fluid>
                        <Row>
                            <Col size="md-2">
                            </Col>
                            <Col size="md-8">
                                <h3>The flight greenhouse gas emission is the anthropogenic greenhouse gas emissions attributed to a single passenger on this flight. It includes CO2 emissions from combustion of non-biogenic fuel and extra forcing effects of high-altitude fuel combustion.</h3>
                            </Col>
                            <Col size="md-2">
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section static">
                    {this.state.searched.length ? (
                        <Fragment>
                            {this.state.searched.map(search => (
                                <List key={this.state.results._id}>
                                    <ListItem>
                                        {search.origin}
                                    </ListItem>
                                    <ListItem>
                                        {search.destination}
                                    </ListItem>
                                    <ListItem>
                                        {search.airline}
                                    </ListItem>
                                </List>
                            ))}
                        </Fragment>
                    ) : (
                    <h3>No Previous Searches to Display</h3>
                    )}
                </section>
            </main>
        )
    }
}

export default Flight;
