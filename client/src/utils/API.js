import axios from "axios";

export default {
    // save to Flight collection
    saveSearch: function(searchTerms) {
        return axios.post("api/flight/calculate", searchTerms);
    },
    getLatest: function() {
        return axios.get("/api/flight/calculate");
    },
    // save to Flight collection
    saveResults: function(results) {
        return axios.post("/api/flight/calculate", results);
    }
};
