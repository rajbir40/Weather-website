const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '65ca83a404msh4027228bfe9e2f1p1dd46cjsn9ab9c8062f1b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML =  city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);

		cloud_pct.innerHTML = response.cloud_pct;
		temp.innerHTML = response.temp;
		temp2.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		humidity2.innerHTML = response.humidity;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		wind_speed.innerHTML = response.wind_speed;
		wind_speed2.innerHTML = response.wind_speed;
		wind_degrees.innerHTML = response.wind_degrees;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
	})
	.catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value);
});

getWeather("Delhi");
document.addEventListener('DOMContentLoaded', function() {
	let carouselItems = document.querySelectorAll('.carousel-item');
	let currentIndex = 0;

	function showNextItems() {
	  carouselItems[currentIndex].classList.remove('active');
	  currentIndex = (currentIndex + 1) % carouselItems.length;
	  carouselItems[currentIndex].classList.add('active');
	}

	let nextButton = document.querySelector('[data-bs-slide="next"]');
	nextButton.addEventListener('click', showNextItems);
  });

  const Shanghai_temp=(Shanghai)=>{

  }
  

  //
  function addClass(element, className) {
	if (element.classList) {
	  element.classList.add(className);
	} else {
	  element.className += ' ' + className;
	}
  }

  // Function to remove a class from an element
  function removeClass(element, className) {
	if (element.classList) {
	  element.classList.remove(className);
	} else {
	  var reg = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
	  element.className = element.className.replace(reg, ' ');
	}
  }

   function submitconfirmation() {
	let box=document.getElementById("message");
	let a= document.getElementById("submit-submit");
	

	box.style.visibility="hidden";
	a.style.visibility="hidden";
	

	let ele=document.getElementById("writeback");
	ele.innerHTML="We'll notify you!";
};

  // Function to check screen size and add or remove class accordingly
  function checkScreenSize() {
	var slider1 = document.getElementById('slider1');
	var slider2 = document.getElementById('slider2');
	var slider3 = document.getElementById('slider3');
	var slider4 = document.getElementById('slider4');
	var spacer = document.getElementById('spacer');
	
	if (window.innerWidth <= 768) { // Adjust the screen size threshold as needed
	  addClass(slider2, 'd-none');
	  addClass(slider4, 'd-none');
	  addClass(spacer, 'hei');

	  removeClass(slider1,'d-none');
	  removeClass(slider3,'d-none');
	  
	} else {
		addClass(slider1, 'd-none');
		addClass(slider3, 'd-none');
		removeClass(slider2,'d-none');
		removeClass(slider4,'d-none');
		removeClass(spacer,'hei');

	}
  }

  // Initial check when the page loads
  checkScreenSize();

  document.addEventListener('DOMContentLoaded', checkScreenSize);

// Add this event listener to trigger checkScreenSize when the window is resized
window.addEventListener('resize', checkScreenSize);