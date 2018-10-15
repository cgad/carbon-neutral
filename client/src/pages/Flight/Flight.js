import React, { Fragment, Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Table, TableHeader, TableRow, HeaderCell, DataCell, TableBody } from "../../components/Table";
// import { runInThisContext } from "vm";

class Flight extends Component {

    state = {
        origin: "",
        destination: "",
        airline: "",
        results: [],
        current: false
    }

    componentDidMount() {
        // load all searches from database
        // change code so that current is cleared with page load, so write separate function to set current state?
        
        this.loadAllSearches();
    };

    // to load all searches
    // also grab current search results from this.state.current
    loadAllSearches = () => {
        API.getAllFlights()
            .then(res => this.setState({ results: res.data, current: res.data[0], origin: "", destination: "", airline: "" }))
            .catch(err => console.log(err));
    };

    deleteSearch = id => {
        API.deleteFlight(id)
            .then(res => this.loadAllSearches())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        value = value.toUpperCase();
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        let airline = this.state.airline;
        if (!(airline === "ALLEGIANT" || airline === "DELTA" || airline === "JETBLUE" || airline === "UNITED")) {
            airline = "OTHER"
        }
        
        if (this.state.origin.length === 3 && this.state.destination.length === 3) {
            API.saveFlight({
                origin: this.state.origin,
                destination: this.state.destination,
                airline: airline
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
                    {console.log(this.state.current)}
                    {this.state.current ? (
                        <Container fluid>
                            <Row>
                                <Col size="12">
                                    <h6>Origin: <strong>{this.state.current.origin}</strong> | Destination: <strong>{this.state.current.destination}</strong> | Airline: <strong>{this.state.current.airline}</strong></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-8 sm-12">
                                    <br></br>
                                    <h5>Your contribution to the total greenhouse gas emission of your searched flight is equivalent to...</h5><br></br>
                                    <List key={this.state.current._id}>
                                        <ListItem>
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
                                <h2>The flight greenhouse gas emission is the anthropogenic greenhouse gas emissions attributed to a single passenger on this flight. It includes CO2 emissions from combustion of non-biogenic fuel and extra forcing effects of high-altitude fuel combustion.</h2>
                            </Col>
                            <Col size="md-2">
                            </Col>
                        </Row>
                    </Container> 
                </section>
                <section className="section static">
                    {this.state.results.length ? ( 
                        <Table>
                            <TableHeader>
                                <HeaderCell></HeaderCell>
                                <HeaderCell></HeaderCell>
                                <HeaderCell></HeaderCell>
                                <HeaderCell>
                                    Origin
                                </HeaderCell>
                                <HeaderCell>
                                    Destination
                                </HeaderCell>
                                <HeaderCell>
                                    Airline
                                </HeaderCell>
                            </TableHeader>
                            <TableBody>
                                {this.state.results.map(result => (
                                    <TableRow key={result._id}>
                                        <DataCell>
                                            <DeleteBtn data-toggle="tooltip" data-placement="left" title="Click to delete search record" onClick={() => this.deleteSearch(result._id)}/>
                                        </DataCell>
                                        <DataCell>
                                            <img className="viewIcon" data-toggle="tooltip" data-placement="bottom" title="Click to view search results" src="/images/eye.png" alt="Eye icon"/>
                                        </DataCell>
                                        <DataCell>
                                            <img className="favIcon" data-toggle="tooltip" data-placement="right" title="Click to save search in favorites" src="/images/heart.png" alt="Heart icon"/>
                                        </DataCell>
                                        <DataCell>{result.origin}</DataCell>
                                        <DataCell>{result.destination}</DataCell>
                                        <DataCell>{result.airline}</DataCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <h3>No Prior Searches to Display</h3>
                    )}
                </section>
            </main>
        );
    };
}

export default Flight;
