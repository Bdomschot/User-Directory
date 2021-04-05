import axios from "axios";
const URL = "https://randomuser.me/api/";

const API = {
    getUsers: function () {
        return axios.get(URL +`?results=30`);
    }
};

export default API;