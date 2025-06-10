// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter1');


  const animate = () => {
     let speed = 10000000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 200;
    const stepTime = 1;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter2');


  const animate = () => {
     const speed = 10000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 2000;
    const stepTime = 50;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter3');


  const animate = () => {
     var speed = 2000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 2000;
    const stepTime = 50;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});

  function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
  }

  // Hide menu when a nav link is clicked (on mobile)
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#nav-links a');
    const navMenu = document.getElementById('nav-links');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 599) {
          navMenu.classList.remove('show');
        }
      });
    });
  });
  function sendMessage(){
    let phonenumber ="919884289591";
    let message="Hi I need some help";
    let encodeMessage = encodeURIComponent(message);
    let url ="https://wa.me/"+phonenumber+"?text="+encodeMessage;
    window.open(url,'blank');
}


