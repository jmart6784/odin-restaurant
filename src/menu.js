let menu = document.getElementById("menu").addEventListener("click", function() {
  let content = document.getElementById("content");

  // Color nav tab
  document.getElementById("menu").style.backgroundColor = "rgb(39, 39, 39)";
  document.getElementById("home").style.backgroundColor = "rgb(99, 53, 0)";
  document.getElementById("about").style.backgroundColor = "rgb(99, 53, 0)";
  document.getElementById("contact").style.backgroundColor = "rgb(99, 53, 0)";

  // Clear all child elements from content div
  content.innerHTML = "";

  // Add About title
  let titleTag = document.createElement("h1");
  let titleText = document.createTextNode("Menu");

  titleTag.className = "title";

  titleTag.appendChild(titleText);
  content.appendChild(titleTag);

  // Add a grid div
  let grid = document.createElement("div");

  grid.id = "grid-div";

  content.appendChild(grid);

  // Add a lunch div
  let lunchDivTag = document.createElement("div");

  lunchDivTag.className = "category-div";

  grid.appendChild(lunchDivTag);

  // Lunch title
  let lunchTag = document.createElement("h2");
  let lunchText = document.createTextNode("Lunch");

  lunchTag.className = "menu-category";

  lunchTag.appendChild(lunchText);
  lunchDivTag.appendChild(lunchTag);

  // Lunch menu item 1
  let menuTag1 = document.createElement("h2");
  let menuText1 = document.createTextNode("Gourmet Italian Pizza: $24.99");

  menuTag1.className = "menu-item";

  menuTag1.appendChild(menuText1);
  lunchDivTag.appendChild(menuTag1);

  // Lunch menu item 2
  let menuTag2 = document.createElement("h2");
  let menuText2 = document.createTextNode("Classic Cheese Burger: $4.99");

  menuTag2.className = "menu-item";

  menuTag2.appendChild(menuText2);
  lunchDivTag.appendChild(menuTag2);

  // Lunch menu item 3
  let menuTag3 = document.createElement("h2");
  let menuText3 = document.createTextNode("Chili Cheese hot dog: $3.99");

  menuTag3.className = "menu-item";

  menuTag3.appendChild(menuText3);
  lunchDivTag.appendChild(menuTag3);

  // Add a dinner div
  let dinnerDiv = document.createElement("div");

  dinnerDiv.className = "category-div";

  grid.appendChild(dinnerDiv);

  // Dinner title
  let dinnerTag = document.createElement("h2");
  let dinnerText = document.createTextNode("Dinner");

  dinnerTag.className = "menu-category";

  dinnerTag.appendChild(dinnerText);
  dinnerDiv.appendChild(dinnerTag);

  // Dinner menu item 1
  let dMenuTag1 = document.createElement("h2");
  let dMenuText1 = document.createTextNode("Steak and potatoes: $17.99");

  dMenuTag1.className = "menu-item";

  dMenuTag1.appendChild(dMenuText1);
  dinnerDiv.appendChild(dMenuTag1);

  // Dinner menu item 2
  let dMenuTag2 = document.createElement("h2");
  let dMenuText2 = document.createTextNode("Chicken pot pie: $9.99");

  dMenuTag2.className = "menu-item";

  dMenuTag2.appendChild(dMenuText2);
  dinnerDiv.appendChild(dMenuTag2);

  // Dinner menu item 2
  let dMenuTag3 = document.createElement("h2");
  let dMenuText3 = document.createTextNode("Lasagna: $7.99");

  dMenuTag3.className = "menu-item";

  dMenuTag3.appendChild(dMenuText3);
  dinnerDiv.appendChild(dMenuTag3);
});

export default menu;