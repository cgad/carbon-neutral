import axios from "axios";

export default {
    // getSearched: function() {
    //     return axios.get("/api/searched");
    // },
    // saveSearch: function(searchTerms) {
    //     return axios.post("/api/searched", searchTerms);
    // }
    saveSearch: function(searchTerms) {
        return axios.post("api/flight/calculate", searchTerms);
    },
    getResults: function() {
        return axios.get("/api/flight/calculate");
    },
    saveResults: function(results) {
        return axios.post("/api/flight/calculate", results);
    }
};
