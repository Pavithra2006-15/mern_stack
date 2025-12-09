import axios from "axios";

//  async function fetchApi() {
//    const response = await fetch("https://jsonplaceholder.typicode.com/users");
//    const ans = await response.json();
//    console.log("The user:", ans);
//  }
//  fetchApi();

async function fetchApi() {
  const response = await axios("https://jsonplaceholder.typicode.com/users");
  console.log("The user:", response);
}
fetchApi();