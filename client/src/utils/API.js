import axios from "axios";

export default {
    // add getCurrentSearch
    getAllFlights: function() {
        return axios.get("/api/flight/calculate")
    },
    getFlight: function(id) {
        return axios.get("/api/flight/calculate" + id);
    },
    deleteFlight: function(id) {
        return axios.delete("api/flight/calculate/" + id);
    },
    // to "favorite" a search
    saveFlight: function(flightData) {
        return axios.post("/api/flight/calculate/", flightData)
    },
    viewFlight: function(id) {
        return axios.get("/api/flight/view/" + id)
    }
};
