import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  responseType: "json",
  headers: {
    Authorization: `Bearer sGFa0HtcPDPa6_kGGZuD1KDCFV9CCLexA9aSd0RyUGw7TuPCXIhhEz--RWxkGo2_ubhH3Ai_N6Xd0r6S6qLvz29UuDEzWFZCN48iMSJ2AxBj0nF62K-MIZqbV5zvY3Yx`,
  },
});
