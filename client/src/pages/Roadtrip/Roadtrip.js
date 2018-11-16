import React, { Component } from "react";
import API from "../../utils/APIroadtrip";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Table, TableHeader, TableRow, HeaderCell, DataCell, TableBody } from "../../components/Table";
import Nav from "../../components/Nav";
// import { runInThisContext } from "vm";

class Roadtrip extends Component {
    state = {
        year: "",
        make: "",
        model: "",
        origin: "",
        destination: "",
        results: [],
        current: false
    }

    componentDidMount() {
        // change code so that current is cleared with page load, so write separate function to set current state?
        this.loadAllSearches();
    };

    // to load all searches
    // also grab current search results from this.state.current
    loadAllSearches = () => {
        API.getAllTrips()
            .then(res => this.setState({ results: res.data, current: res.data[0], origin: "", destination: "", year: "", make: "", model: "" }))
            .catch(err => console.log(err));
    };

    deleteSearch = id => {
        // delete roadtrip function
        API.deleteTrip(id)
            .then(res => this.loadAllSearches())
            .catch(err => console.log(err));
    };

    viewSearch = id => {
        // view roadtrip function on click of view icon
        API.viewTrip(id)
            .then(async res => {
                await this.setState({ current: res.data });
                this.loadAllSearches();
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        value = value.toUpperCase();
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        // save roadtrip function if both origin and destination are valid
        // --> dropdown of all cities?
    };

    render() {
        return (
            <main className="wrapper">
                <Nav></Nav>
                <section className="section parallax bg1">
                    <form>
                        <label>Origin (City, State) (required)</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.origin} 
                            name="origin" 
                            placeholder="ex. Denver, CO" 
                        />
                        <label>Destination (City, State) (required)</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.destination} 
                            name="destination" 
                            placeholder="ex. Syracuse, NY" 
                        />
                        <p><strong>Car Details</strong> (optional)</p>
                        <label>Year</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.year} 
                            name="year" 
                            placeholder="ex. 2011" 
                        />
                        <label>Make</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.make} 
                            name="make" 
                            placeholder="ex. Honda" 
                        />
                        <label>Model</label>
                        <Input 
                            onChange={this.handleInputChange} 
                            value={this.state.model} 
                            name="model" 
                            placeholder="ex. CRV" 
                        />
                        <FormBtn 
                            // disabled when no origin and destination
                            disabled={!(this.state.origin && this.state.destination)}
                            onClick={this.handleFormSubmit}
                        >
                            Coming Soon!
                        </FormBtn>
                     </form>
                     {/* <a href="#jump">Jump to Results</a> */}
                 </section>
                 <section className="section static results">
                    {/* <a id="jump">Jump link destination</a> */}
                    {this.state.current ? (
                        <Container fluid>
                            <Row>
                                <Col size="md-2">
                                </Col>
                                <Col size="md-8">
                                    <h6 className="results">Origin: <strong>{this.state.current.origin}</strong> | Destination: <strong>{this.state.current.destination}</strong></h6>
                                    {/* also optional parameters if they've been submitted? */}
                                </Col>
                                <Col size="md-2">
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-2">
                                </Col>
                                <Col size="md-8">
                                    <br></br>
                                    <h4 className="results">Your contribution to the total greenhouse gas emission of your searched flight is equivalent to...</h4><br></br>
                                    <List key={this.state.current._id} className="results">
                                        <ListItem className="resultItem">
                                            <strong>{this.state.current.cars_off_road_for_day.$numberDecimal} </strong>cars off the road for a day
                                        </ListItem>
                                        <ListItem>
                                            <strong>{this.state.current.days_vegan.$numberDecimal} </strong>days of veganism
                                        </ListItem>
                                        <ListItem>
                                            <strong>{this.state.current.canisters_bbq_propane.$numberDecimal} </strong>canisters of BBQ propane
                                        </ListItem>
                                        <ListItem>
                                            <strong>{this.state.current.recycled_bags_trash.$numberDecimal} </strong>recycled bags of trash
                                        </ListItem>
                                    </List>
                                </Col>
                                <Col size="md-2">
                                </Col>
                            </Row>
                        </Container>
                    ) : (<h3>No Results to Display</h3>)} 
                </section>
                 <section className="section parallax bg2">
                    <Container fluid>
                        <Row>
                            <Col size="md-2">
                            </Col>
                            <Col size="md-8">
                                {/* <h2>Roadtrip scope</h2> */}
                            </Col>
                            <Col size="md-2">
                            </Col>
                        </Row>
                    </Container> 
                </section>
                <section className="section static results">
                    {this.state.results.length ? ( 
                        <Container fluid>
                            <Row>
                                <Col size="md-2">
                                </Col>
                                <Col size="md-8">
                                    <Table>
                                        <TableHeader>
                                            <HeaderCell></HeaderCell>
                                            <HeaderCell>
                                                Origin
                                            </HeaderCell>
                                            <HeaderCell>
                                                Destination
                                            </HeaderCell>
                                            <HeaderCell>
                                                Car Year
                                            </HeaderCell>
                                            <HeaderCell>
                                                Car Make
                                            </HeaderCell>
                                            <HeaderCell>
                                                Car Model
                                                {/* if no year, make, model, autofill with N/A */}
                                            </HeaderCell>
                                        </TableHeader>
                                        <TableBody>
                                            {this.state.results.map(result => (
                                                <TableRow key={result._id}>
                                                    <DataCell>
                                                        <DeleteBtn data-toggle="tooltip" data-placement="left" title="Click to delete search record" onClick={() => this.deleteSearch(result._id)}/>
                                                        <img className="viewIcon" data-toggle="tooltip" data-placement="bottom" title="Click to view search results" src="/images/eye.png" alt="Eye icon" onClick={() => this.viewSearch(result._id)}/>
                                                        <img className="favIcon" data-toggle="tooltip" data-placement="right" title="Click to save search in favorites" src="/images/heart.png" alt="Heart icon"/>
                                                    </DataCell>
                                                    <DataCell>{result.origin}</DataCell>
                                                    <DataCell>{result.destination}</DataCell>
                                                    <DataCell>{result.year}</DataCell>
                                                    <DataCell>{result.make}</DataCell>
                                                    <DataCell>{result.model}</DataCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Col>
                                <Col size="md-2">
                                </Col>
                            </Row>
                        </Container> 
                    ) : (
                        <h3>No Prior Searches to Display</h3>
                    )}
                </section>
            </main>
        );
    };
}

export default Roadtrip;
