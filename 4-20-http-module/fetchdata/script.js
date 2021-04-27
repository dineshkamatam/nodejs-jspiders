let tem = document.querySelector("section");

async function fetchdata() {
  let response = await window.fetch("http://localhost:5000/");
  console.log(response);
}

fetchdata();
