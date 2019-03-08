function toggleTopbar(){
  document.getElementById('topbar').classList.toggle('active');
}

toggle.addEventListener("click", function(){
  toggleTopbar();
});

// obsluga topbar
var links = document.querySelectorAll('.topbar a');
var sections = document.querySelectorAll('section');

// nadanie eventu na wszystkich linkach z topbara
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {

    // usuwanie klasy active ze wszystkich section
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
    }

    // nadawanie klasy active kliknietej z topbar sekcji
    document.querySelector(this.hash).classList.add('active');
  });
}