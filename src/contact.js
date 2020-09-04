let contact = document.getElementById("contact").addEventListener("click", function() {
  let content = document.getElementById("content");

  // Color nav tab
  document.getElementById("contact").style.backgroundColor = "rgb(39, 39, 39)";
  document.getElementById("home").style.backgroundColor = "rgb(99, 53, 0)";
  document.getElementById("menu").style.backgroundColor = "rgb(99, 53, 0)";
  document.getElementById("about").style.backgroundColor = "rgb(99, 53, 0)";

  // Clear all child elements from content div
  content.innerHTML = "";

  // Add grid div
  let grid = document.createElement("div");

  grid.id = "grid-div";
  grid.className = "contact-grid"

  content.appendChild(grid);

  // Add Contact Div
  let contactDiv = document.createElement("div");

  contactDiv.className = "category-div";

  grid.appendChild(contactDiv);

  // Add About title
  let titleTag = document.createElement("h1");
  let titleText = document.createTextNode("Contact");

  titleTag.className = "menu-category";

  titleTag.appendChild(titleText);
  contactDiv.appendChild(titleTag);

  // Add phone number
  let number = document.createElement("h4");
  let numberTxt = document.createTextNode("Phone: (123)-456-7890");

  number.className = "menu-item";

  number.appendChild(numberTxt);
  contactDiv.appendChild(number);

  // Add Address
  let address = document.createElement("h4");
  let addressTxt = document.createTextNode("Address: 123 Null St, Faketown, FA");

  address.className = "menu-item";

  address.appendChild(addressTxt);
  contactDiv.appendChild(address);

  // Add email
  let email = document.createElement("h4");
  let emailTxt = document.createTextNode("Email: example@mail.com");

  email.className = "menu-item";

  email.appendChild(emailTxt);
  contactDiv.appendChild(email);

  // Add Hours Div
  let hoursDiv = document.createElement("div");

  hoursDiv.className = "category-div";

  grid.appendChild(hoursDiv);

  // Add hours title
  let hours = document.createElement("h1");
  let hoursText = document.createTextNode("Buisness Hours");

  hours.className = "menu-category";

  hours.appendChild(hoursText);
  hoursDiv.appendChild(hours);

  // Add monday through friday hours
  let mfHours = document.createElement("h4");
  let mfHoursTxt = document.createTextNode("Mon-Thu 10AM-10PM");

  mfHours.className = "menu-item";

  mfHours.appendChild(mfHoursTxt);
  hoursDiv.appendChild(mfHours);

  // Add weekend hours
  let weHours = document.createElement("h4");
  let weHoursTxt = document.createTextNode("Fri-Sun 7AM-11PM");

  weHours.className = "menu-item";

  weHours.appendChild(weHoursTxt);
  hoursDiv.appendChild(weHours);

  // Add closed info
  let ciHours = document.createElement("h4");
  let ciHoursTxt = document.createTextNode("Restaurant closed on holidays");

  ciHours.className = "menu-item";

  ciHours.appendChild(ciHoursTxt);
  hoursDiv.appendChild(ciHours);
});

export default contact;