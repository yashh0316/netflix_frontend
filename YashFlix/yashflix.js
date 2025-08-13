
//  adding cards in html 
let video = [

  { link : "https://www.youtube.com/shorts/TIqyEiCRbZA", thumbnail : "content/thumbnail1.jpg"},
  { link : "https://www.youtube.com/shorts/ytFhm34fw8w", thumbnail : "content/thumbnail2.jpg"},
  { link : "https://www.youtube.com/shorts/FQotWPfhOUU", thumbnail : "content/thumbnail3.jpg"},
  { link : "https://www.youtube.com/shorts/Y2T4ZP-3Bk0", thumbnail : "content/thumbnail4.jpg"},
  { link : "https://www.youtube.com/shorts/FcvfNFJa_7M", thumbnail : "content/thumbnail5.jpg"},
  { link : "https://www.youtube.com/shorts/R-GVw_BT9YA", thumbnail : "content/thumbnail6.jpg"},
  { link : "https://www.youtube.com/shorts/18pOMm_s6JY", thumbnail : "content/thumbnail7.jpg"},
  { link : "https://www.youtube.com/shorts/Puh5l3m5oXk", thumbnail : "content/thumbnail8.jpg"},
  { link : "https://www.youtube.com/shorts/vvtSz-ndaGc", thumbnail : "content/thumbnail9.jpg"},
  { link : "https://www.youtube.com/shorts/zJ6PY2Vn3-I", thumbnail : "content/thumbnail10.jpg"},
  { link : "https://www.youtube.com/shorts/tjv_Y6I6pog", thumbnail : "content/thumbnail11.jpg"},
  { link : "https://www.youtube.com/shorts/mdAofzwQJDc", thumbnail : "content/thumbnail12.jpg"},
  { link : "https://www.youtube.com/shorts/bn4IAJGyv4k", thumbnail : "content/thumbnail13.jpg"},
  { link : "https://www.youtube.com/shorts/xtIMZOTjdm4", thumbnail : "content/thumbnail14.jpg"},
  { link : "https://www.youtube.com/shorts/jbx3DH6NZN0", thumbnail : "content/thumbnail15.jpg"},
  { link : "https://www.youtube.com/shorts/eEuWIVLBRpw", thumbnail : "content/thumbnail16.jpg"},
  { link : "https://www.youtube.com/shorts/aizroPq_UWg", thumbnail : "content/thumbnail17.jpg"},
  { link : "https://www.youtube.com/shorts/B62TZiUuU58", thumbnail : "content/thumbnail18.jpg"},
  { link : "https://www.youtube.com/shorts/OucetW8mQMU", thumbnail : "content/thumbnail19.jpg"},
  { link : "https://www.youtube.com/shorts/HfIrh9cENp0", thumbnail : "content/thumbnail20.jpg"},
  { link : "https://www.youtube.com/shorts/SSVDET1FbPI", thumbnail : "content/thumbnail21.jpg"},
  { link : "https://www.youtube.com/shorts/VGLWLBzYpGE", thumbnail : "content/thumbnail22.jpg"},
  { link : "https://www.youtube.com/shorts/ywkQWIjjMWI", thumbnail : "content/thumbnail23.jpg"},
  { link : "https://www.youtube.com/shorts/E7tqv-Rboqk", thumbnail : "content/thumbnail24.jpg"},

]

    
function createCard(videoLink, videoThumbnail) {
    let html =
        `
        
        <a href= "${videoLink}">
            <div class="videocard " style="background-image: url(${videoThumbnail}); background-size: cover; background-position: -50px;"></div>
        </a> 
    
        `

    document.querySelector(".section1").innerHTML = document.querySelector(".section1").innerHTML + html
}



video.forEach(videofunc => {
    createCard(videofunc.link,videofunc.thumbnail)
})


// Dynamically load the intro 

// Load the intro.html file dynamically
fetch("YashFlixIntro/intro.html")
    .then((response) => response.text())
    .then((data) => {
        // Insert intro.html into the intro-container
        document.getElementById('intro-container').innerHTML = data;

        // Set a timer to hide the intro and show the main content
        setTimeout(() => {
            document.getElementById('intro-container').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 4000); // Adjust the timeout to match your intro length
    })
    .catch((error) => console.error('Error loading intro:', error));

