// write your code here
function getAllRamenObjects() {
  fetch("http://localhost:3000/ramens")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayRamenImages(data);
      renderDetails(data[1]);
    });
}
getAllRamenObjects();

// task-1: display each ramen image
const ramenMenu = document.getElementById("ramen-menu");

function displayRamenImages(ramenArray) {
  ramenArray.forEach((ramen) => {
    const image = document.createElement("img");
    image.addEventListener("click", () => renderDetails(ramen));
    image.src = ramen.image;
    ramenMenu.append(image);
  });
}
//display new-ramen image

function displayNewRamenImage(newRamen) {
  const image = document.createElement("img");
  image.addEventListener("click", () => renderDetails(newRamen));

  image.src = newRamen.image;
  ramenMenu.append(image);
}
//display each image and its information on centre of page
function renderDetails(ramen) {
  const ramenDetail = document.querySelector("#ramen-detail");
  const insertName = ramenDetail.querySelector(".name");
  insertName.textContent = ramen.name;

  const insertRestaurant = ramenDetail.querySelector(".restaurant");
  insertRestaurant.textContent = ramen.restaurant;

  const insertImage = ramenDetail.querySelector(".detail-image");
  insertImage.src = ramen.image;

  const insertRating = document.getElementById("rating-display");
  insertRating.textContent = ramen.rating;

  const insertComment = document.getElementById("comment-display");
  insertComment.textContent = ramen.comment;
}

//new-ramen form
const newRamenForm = document.getElementById("new-ramen");
newRamenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newName = document.getElementById("new-name").value;
  //another way to capture the value of name field
  // const newName = event.target[0].value;
  const newRestaurant = document.getElementById("new-restaurant").value;
  const newImage = document.getElementById("new-image").value;
  const newRating = document.getElementById("new-rating").value;
  const newComment = document.getElementById("new-comment").value;

  const newRamen = {
    name: newName,
    restaurant: newRestaurant,
    image: newImage,
    rating: newRating,
    comment: newComment,
  };
  console.log(newRamen);
  displayNewRamenImage(newRamen);
});
