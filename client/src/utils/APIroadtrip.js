import axios from "axios";

export default {
  // add getCurrentSearch
  getAllTrips: function() {
    return axios.get("/api/roadtrip");
  },
  getTrip: function(id) {
    return axios.get("/api/roadtrip/" + id);
  },
  deleteTrip: function(id) {
    return axios.delete("api/roadtrip/" + id);
  },
  // to "favorite" a search
  saveTrip: function(flightData) {
    return axios.post("/api/roadtrip", flightData);
  },
  viewTrip: function(id) {
    return axios.get("/api/roadtrip/view/" + id);
  }
};
