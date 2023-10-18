var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://salma-s-hw.github.io/F28WP-lab/cities1.json');
    ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
cityContainer.insertAdjacentHTML('beforeend', 'testing 123' );


}
