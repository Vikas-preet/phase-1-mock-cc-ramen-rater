// write your code here
function getAllRamenObjects() {
  fetch("http://localhost:3000/ramens")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayRamenImages(data);
      displayInfo(data);
    });
}
getAllRamenObjects();

// task-1: display each ramen image
function displayRamenImages(ramenArray) {
  const ramenMenu = document.getElementById("ramen-menu");
  ramenArray.forEach((ramen) => {
    const image = document.createElement("img");
    image.src = ramen.image;
    ramenMenu.append(image);
  });
}

//Task-2: see details and inser comment and rating
document.getElementById("ramen-menu").addEventListener("click", displayInfo);

function displayInfo(event) {
  const ramenImageDetail = document.getElementsByClassName("detail-image");
}
