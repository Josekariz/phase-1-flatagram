// write your code here
document.addEventListener("DOMContentLoaded", () => {
  //call my functions from here
  getData();
  postComment();
  
});

function getData() {
  fetch("http://localhost:3000/images/1")
    .then((response) => response.json())
    .then((data) => placeData(data));
}
//grab elements
const cardTitle = document.getElementById("card-title");
const cardImage = document.getElementById("card-image");
const likeCount = document.getElementById("like-count");
const commentList = document.getElementById("comments-list");

// place data in browser
function placeData(data) {
  cardTitle.textContent = data.title;
  cardImage.src = data.image;
  likeCount.textContent = data.likes;
  // grab like btn
  const likeBtn = document.getElementById("like-button");
  likeBtn.addEventListener("click", () => {
    // console.log(likeCount);
    likeCount.textContent = `${(data.likes += 1)} likes`;
    // const likes = (likeCount.textContent = 200);
  });

  coms = data.comments;
  //console.log(coms);
  commentList.innerHTML = "";
  for (const comment of coms) {
    const li = document.createElement("li");
    li.textContent = comment.content;
    commentList.appendChild(li);
  }

}
function postComment() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
  });
}
var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("new-com").appendChild(li);
 
});