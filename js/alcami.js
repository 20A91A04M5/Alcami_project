
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function toggleSearch() {
  const searchBox = document.querySelector(".search-box");
  searchBox.style.display = (searchBox.style.display === "block") ? "none" : "block";
}


document.getElementById("cart").addEventListener("click",function(){
  alert("Item Added to cart ...")
})
// Carousel Logic
let index = 0;
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(n) {
    images.forEach(img => img.classList.remove('active'));
    images[n].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
});

nextBtn.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
});




function playVideo() {
  alert("This is a placeholder action for playing the video!");
}


document.getElementById("checked-items").addEventListener("click", function () {
  alert("Redirecting to the checkout page...");
});

function playVideo() {
  alert("Playing Founder Video...");
  
}



document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const toggle = item.querySelector(".faq-toggle");

      question.addEventListener("click", () => {
          
          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.querySelector(".faq-answer").style.display = "none";
                  otherItem.querySelector(".faq-toggle").textContent = "+";
              }
          });

          
          if (answer.style.display === "block") {
              answer.style.display = "none";
              toggle.textContent = "+";
          } else {
              answer.style.display = "block";
              toggle.textContent = "−";
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const subscribeBtn = document.getElementById("subscribeBtn");

  subscribeBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();

      if (email === "") {
          alert("Please enter a valid email address!");
          return;
      }

      alert(`Thank you for subscribing! A confirmation has been sent to ${email}`);
      emailInput.value = ""; 
  });
});


document.getElementById('subscribe-btn').addEventListener('click', function () {
  const emailInput = document.getElementById('emails').value;
  console.log(emailInput)
  
  if (emailInput === "") {
      alert("Please enter your email.");
  } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
      alert("Please enter a valid email address.");
  } else {
      alert("Thank you for subscribing!");
  }
});





document.addEventListener('DOMContentLoaded', function() {
 
  const testimonials = [
      {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
          name: "Sarah Johnson",
          position: "Marketing Director, TechCo"
      },
      {
          text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.",
          name: "Michael Chen",
          position: "CEO, Innovate Inc."
      },
      {
          text: "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta.",
          name: "Emma Rodriguez",
          position: "Product Manager, CreativeFlow"
      },
      {
          text: "Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta.",
          name: "James Wilson",
          position: "Lead Developer, CodeWorks"
      },
      {
          text: "Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Aenean eu leo quam.",
          name: "Olivia Thompson",
          position: "UX Designer, DesignHub"
      },
      {
          text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet.",
          name: "David Lee",
          position: "CTO, FutureTech"
      },
      {
          text: "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          name: "Sophia Martinez",
          position: "Operations Manager, GlobalServe"
      },
      {
          text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
          name: "Daniel Brown",
          position: "Finance Director, MoneyWise"
      },
      {
          text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus.",
          name: "Isabella Clark",
          position: "HR Manager, PeopleFirst"
      },
      {
          text: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
          name: "Ryan Garcia",
          position: "Sales Director, GrowthBoost"
      },
      {
          text: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",
          name: "Ava Wright",
          position: "Customer Success, ClientCare"
      },
      {
          text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo.",
          name: "Noah Taylor",
          position: "Strategy Consultant, AdviseWell"
      }
  ];

 
  const slide = document.getElementById('slide');
  const dots = document.getElementById('dots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  
  let cardsPerSlide = 4; 
  if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      cardsPerSlide = 3; 
  } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
      cardsPerSlide = 2; 
  } else if (window.innerWidth <= 768) {
      cardsPerSlide = 1; 
  }

  let slideCount = Math.ceil(testimonials.length / cardsPerSlide);
  let currentSlide = 0;

 
  function generateCards() {
      slide.innerHTML = '';
      
      
      testimonials.forEach((testimonial, index) => {
          const card = document.createElement('div');
          card.className = 'testimonial-card';
          card.style.animationDelay = `${index * 0.1}s`;
          
          card.innerHTML = `
              <div class="stars">
                  ${Array(5).fill('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>').join('')}
              </div>
              <p class="testimonial-text">"${testimonial.text}"</p>
              <div class="testimonial-author">
                  <div class="author-image">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-14a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 12a6 6 0 0 1-5.33-3.25 2 2 0 0 1 1.77-2.75h7.12a2 2 0 0 1 1.77 2.75A6 6 0 0 1 12 18z"/>
                      </svg>
                  </div>
                  <div class="author-info">
                      <span class="author-name">${testimonial.name}</span>
                      <span class="author-position">${testimonial.position}</span>
                  </div>
              </div>
          `;
          slide.appendChild(card);
      });
      
      updateCardVisibility();
  }

  
  function generateDots() {
      dots.innerHTML = '';
      for (let i = 0; i < slideCount; i++) {
          const dot = document.createElement('div');
          dot.className = `dot ${i === 0 ? 'active' : ''}`;
          dot.addEventListener('click', () => {
              goToSlide(i);
          });
          dots.appendChild(dot);
      }
  }

  
  function updateCardVisibility() {
      const cards = document.querySelectorAll('.testimonial-card');
      
      cards.forEach((card, index) => {
          const startIndex = currentSlide * cardsPerSlide;
          const endIndex = startIndex + cardsPerSlide - 1;
          
          if (index >= startIndex && index <= endIndex) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }

  
  function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      updateCardVisibility();
      updateDots();
      
      
      const visibleCards = document.querySelectorAll('.testimonial-card[style*="display: block"]');
      visibleCards.forEach((card, index) => {
          card.style.animation = 'none';
          card.offsetHeight; 
          card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
      });
  }

  
  function updateDots() {
      const allDots = document.querySelectorAll('.dot');
      allDots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
      });
  }

 
  prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
          goToSlide(currentSlide - 1);
      } else {
          goToSlide(slideCount - 1); 
      }
  });

  nextBtn.addEventListener('click', () => {
      if (currentSlide < slideCount - 1) {
          goToSlide(currentSlide + 1);
      } else {
          goToSlide(0); 
      }
  });

  
  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
          prevBtn.click();
      } else if (e.key === 'ArrowRight') {
          nextBtn.click();
      }
  });

  
  let autoAdvance;
  function startAutoAdvance() {
      autoAdvance = setInterval(() => {
          nextBtn.click();
      }, 5000); 
  }

  function stopAutoAdvance() {
      clearInterval(autoAdvance);
  }

  
  startAutoAdvance();
  document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoAdvance);
  document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoAdvance);

  
  window.addEventListener('resize', () => {
      
      let newCardsPerSlide = 4; 
      if (window.innerWidth <= 1200 && window.innerWidth > 992) {
          newCardsPerSlide = 3; 
      } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
          newCardsPerSlide = 2; 
      } else if (window.innerWidth <= 768) {
          newCardsPerSlide = 1; 
      }
      
      
      if (newCardsPerSlide !== cardsPerSlide) {
          cardsPerSlide = newCardsPerSlide;
          const newSlideCount = Math.ceil(testimonials.length / cardsPerSlide);
          
          
          if (currentSlide >= newSlideCount) {
              currentSlide = newSlideCount - 1;
          }
          
          slideCount = newSlideCount;
          generateDots();
          updateCardVisibility();
      }
  });
  generateCards();
  generateDots();
});
