var links = document.querySelectorAll('.topbar a');
var sections = document.querySelectorAll('section');

function toggleTopbar(){
  	document.getElementById('topbar').classList.toggle('active');
}

// event for all links in topbar
for (var i = 0; i < links.length; i++) {
  	links[i].addEventListener('click', function() {

    // remove class active from all sections
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
    }
});

toggle.addEventListener("click", function(){
  	toggleTopbar();
});
}
