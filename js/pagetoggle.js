const pagebtn = document.querySelector(".pagebtn");
const pageLink = document.querySelector(".pageLink");
const hoverShowPages = document.querySelector(".hoverShowPages");

pagebtn.addEventListener("click", () => {
    if (hoverShowPages.style.display != "block") {
        hoverShowPages.style.display = "block";
    }
    else {
        hoverShowPages.style.display = "none";

    }
});