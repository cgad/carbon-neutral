import axios from "axios";

export default {
  // add getCurrentSearch
  getAllFlights: function() {
    return axios.get("/api/flight");
  },
  getFlight: function(id) {
    return axios.get("/api/flight/" + id);
  },
  deleteFlight: function(id) {
    return axios.delete("api/flight/" + id);
  },
  // to "favorite" a search
  saveFlight: function(flightData) {
    return axios.post("/api/flight/", flightData);
  },
  viewFlight: function(id) {
    return axios.get("/api/flight/view/" + id);
  }
};
