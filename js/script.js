// var API_Key = "AIzaSyD-VFqi0Hj-DgDq_3wKv5IQf_5GLF0PymY"
var API_Key = "AIzaSyDudGvaobS6cgm7QbjbIHwooT5FOeUfJ0E"
var query;
var videoTitle = "";
var content = document.getElementById("content")
var obj;
var videoImgSource;
var form_text = document.getElementById('form_text');
var search = document.getElementById('search');
var center = document.getElementById('center');
var btn = document.getElementById('btn');
var description = document.getElementById('description');
var populateBox = document.getElementById('populateBox');
var navbar = document.getElementById('navbar');
var format = "mp3";
var videoId;
var doc;
var parser;
var link;
var dl;
var dl_mp4;
var newval;
var ifrm;
var smallifrm;

var dibbu;
var toggleDownload = document.getElementsByClassName("toggleDownload");
var footer = document.getElementsByTagName("footer")[0];
var searchSong = document.getElementById("searchSong");
var brandname = document.getElementById("brandname");

btn.addEventListener("click", submit)
populateBox.innerHTML = '';





function submit() {

    newval = form_text.value;

    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    // var regExp = /^.*(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$)).*/;
    // var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11,11}).*/;
    var match = newval.match(regExp);
    if (match && match[2].length >= 11) {
        query = match[2];

        // let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;



        search.style.display = 'none';
        description.style.display = 'none';
        center.style.background = "white";
        content.style.zIndex = "1";
        navbar.style.zIndex = "2";
        footer.style.marginTop = "0px";
        btn.style.cssText = "height: 50px; line-height: 8px; width: 50%;";
        searchSong.style.display = "flex";
        brandname.style.margin = "0px";
        brandname.style.marginLeft = "auto";


        console.log()



        fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_Key}&part=snippet&id=${query}`)
            .then((response) => response.json())
            .then(data => obj = data)
            .then(() => {
                videoImgSource = obj.items[0].snippet.thumbnails.high.url;
                videoTitle = obj.items[0].snippet.title;






                var newElement = document.createElement('div');
                newElement.className = "contentBox";

                newElement.innerHTML = `
            
            <img src="${videoImgSource}" alt ="Thumbnail" width="300px" height="250px" style="border-radius:20px">
            `;
                newElement.style.cssText = "display: flex; align-items:center; justify-content: center; flex-direction: row-reverse; color: black; font-size: 20px;text-align: center;"
                populateBox.appendChild(newElement);





                ifrm = document.createElement("iframe");
                ifrm.setAttribute("src", `https://yt-download.org/api/widget?url=${newval}`)
                ifrm.style.width = "100%";
                ifrm.style.height = "550px";
                ifrm.style.border = "0px";
                populateBox.appendChild(ifrm);

            })








    }
    else {


        var alert = document.createElement("div");
        alert.id = "alert";
        alert.className = "alert alert-warning show";
        alert.innerText = "Enter Correct URL";
        alert.style.animation = "fadeOut 2.5s forwards";
        alert.style.animationDelay = "1s";
        alert.style.width = "50%";
        alert.style.background = "#dd9ba9";
        alert.style.textAlign = "center";
        alert.style.color = "black";
        search.appendChild(alert);
        search.removeChild(search.childNodes[2]);


    };

};




