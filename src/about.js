let about = document.getElementById("about").addEventListener("click", function() {
  let content = document.getElementById("content");

  // Color nav tab
  document.getElementById("about").style.backgroundColor = "rgb(39, 39, 39)";
  document.getElementById("home").style.backgroundColor = "rgb(99, 53, 0)";
  document.getElementById("menu").style.backgroundColor = "rgb(99, 53, 0)";
  document.getElementById("contact").style.backgroundColor = "rgb(99, 53, 0)";

  // Clear all child elements from content div
  content.innerHTML = "";

  // Add About title
  let titleTag = document.createElement("h1");
  let titleText = document.createTextNode("About");

  titleTag.className = "title";

  titleTag.appendChild(titleText);
  content.appendChild(titleTag);

  // Add Description
  let descTag = document.createElement("h4");
  let descText = document.createTextNode("Odin's Restaurant is the best place to eat out with friends. Make a reservation today.");

  descTag.className = "description";

  descTag.appendChild(descText);
  content.appendChild(descTag);
});

export default about;