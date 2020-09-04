let home = () => {
  let content = document.getElementById("content");

  // Color nav tab
  document.getElementById("home").style.backgroundColor = "rgb(39, 39, 39)";
  document.getElementById("about").style.backgroundColor = "rgb(99, 53, 0)";
  document.getElementById("menu").style.backgroundColor = "rgb(99, 53, 0)";
  document.getElementById("contact").style.backgroundColor = "rgb(99, 53, 0)";


  // Clear all child elements from content div
  content.innerHTML = "";

  // Add title
  let titleTag = document.createElement("h1");
  let titleText = document.createTextNode("Odin Restaurant");

  titleTag.className = "title";

  titleTag.appendChild(titleText);
  content.appendChild(titleTag);

  // Add Image
  let imgTag = document.createElement("img");
  imgTag.src = "images/img1.jpg";
  imgTag.id = "img1";

  content.appendChild(imgTag);

  // Add Description
  let descTag = document.createElement("h4");
  let descText = document.createTextNode("Come eat at Odin's, it's the best fake Restaurant on the internet!");

  descTag.className = "description";

  descTag.appendChild(descText);
  content.appendChild(descTag);
};

let homeClick = document.getElementById("home").addEventListener("click", home);

export default home;