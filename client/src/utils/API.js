import axios from "axios";

export default {
    getAllSearches: function() {
        return axios.get("/api/flight/calculate")
    },
    saveFlight: function(flightData) {
        return axios.post("/api/flight/calculate", flightData)
    }
};

// export default {
//     // save to Flight collection
//     saveSearch: function(searchTerms) {
//         return axios.post("api/flight/calculate", searchTerms);
//     },
//     getLatest: function() {
//         return axios.get("/api/flight/calculate");
//     },
//     // getAll: function() {
//     //     return axios.get("/api/flight/calculate")
//     // },
//     // save to Flight collection
//     saveResults: function(results) {
//         return axios.post("/api/flight/calculate", results);
//     }
// };
