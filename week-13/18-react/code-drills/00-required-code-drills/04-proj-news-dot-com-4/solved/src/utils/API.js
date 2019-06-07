import axios from "axios";

const key = "1c27cea41dad4cb08daf7cd072463324"

export default {
  getNews: function(query) {
    return axios.get(`https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=${key}`);
  }
};
