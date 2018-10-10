import axios from "axios";

export default {
    getSearched: function() {
        return axios.get("/api/searched");
    },
    saveSearch: function(searchTerms) {
        return axios.post("/api/searched", searchTerms);
    }
};
