import React, { useEffect } from "react";
import API from "../utils/API";

function Home() {

    // When the page loads, get a list of Best Buy top products
    useEffect(() => {
        loadProducts();
    }, []);

    function loadProducts() {
        API.fetchProducts();
        /*
            .then(products => {
                console.log(products); // debug
            // setUsers(users);
            // setUser(users[0]);
            })
            .catch(err => console.log(err));
      }*/
    }

    return (
        <h2>Working on returning values from home</h2>
    )
}

export default Home;