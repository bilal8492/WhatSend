fetch("https://restcountries.eu/rest/v2/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach((element) => {
      var option = document.createElement("option");
      option.text = "+" + element.callingCodes + " " + element.name;
      option.value = element.callingCodes;

      option.setAttribute("data-alpha3Code", element.alpha3Code);

      if (element.name === "India") {
        option.selected = true;
      }
      document.getElementById("countries").appendChild(option);
    });
  });

function changeFlag(option) {
  var imageUrl =
    "https://restcountries.eu/data/" +
    option.selectedOptions[0].dataset.alpha3code.toLowerCase() +
    ".svg";

  var imgTag = document.getElementById("flag");
  imgTag.src = imageUrl;
}
var button = document.getElementById("message");
button.addEventListener("click", function () {
  var countryCode = document.getElementById("countries");
  var number = document.getElementById("mobile-number");
  if (number.value != "") {
    var phoneNumber =
      countryCode.options[countryCode.selectedIndex].value + number.value;

    var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    window.open(whatsappUrl, "_blank");
  } else {
    alert("please enter valid number");
  }
});
