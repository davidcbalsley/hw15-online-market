import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchProducts: function() {
      console.log("BEST_BUY_API_KEY =" + process.env.BEST_BUY_API_KEY); // debug
      /*
    return axios
      // .get("https://bestbuyapis.github.io/bby-query-builder/#/productSearch")
      .get("https://api.bestbuy.com/v1/products?format=json&customerTopRates=true?apiKey=" + process.env.BEST_BUY_API_KEY)
      .then(res => {
          return res;
        // const users = res.data;
        // return users.map(user => {
        //   return {
        //     login: user.login,
        //     image: user.avatar_url,
        //     profileUrl: user.html_url
        //   };
        // });
      });
      */
  }
};