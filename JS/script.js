const searchIcon= () => {
    let x = document.getElementById("search-bar");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const hamburgerIcon= function () {
    document.getElementById("hamburger-menu").style.width = "90%";
  }
const closeIcon = function() {
    document.getElementById("hamburger-menu").style.width = "0%";
  }

  const hamburgerIcon2 = () =>{
    document.getElementById("connect-one").style.width = "100%"
  }
  const closeIcon2 = () =>{
    document.getElementById("connect-one").style.width = "0%"
  }