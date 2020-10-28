class Stor {
	constructor( name, email, address, city, cname,ccnum,expmonth,expyear,cvv) {
		this.name = name;
		this.email = email;
		this.address = address;
		this.city = city;
		this.cname = cname;
		this.ccname = ccnum;
		this.expmonth = expmonth;
		this.expyear = expyear;
		this.cvv = cvv;
	
	}
}
 class UX {
	static shwoalart(message, Name) {
		const div = document.createElement('div');
		div.className = ` alert alert-${Name}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('#mesage');
		const epay = document.querySelector('.row');
		container.insertBefore(div, epay);
		setTimeout(() => document.querySelector('.alert').remove(),10000)
	    }
	
	
 }

document.querySelector('#Epay').addEventListener('submit', (e) =>{


	e.preventDefault();
	
	// get type, name, date, and amount
	const name = document.querySelector('#fname').value;
	const email = document.querySelector('#email').value;
	const address= document.querySelector('#adr').value;
	const city = document.querySelector('#city').value;
	const cname = document.querySelector('#cname').value;
	const ccnum = document.querySelector('#ccnum').value;
	const expmonth= document.querySelector('#expmonth').value;
	const expyear = document.querySelector('#expyear').value;
	const cvv = document.querySelector('#cvv').value;
	
	const Storage = new Stor(name, email, address, city,cname,ccnum,expmonth,expyear,cvv)
	 UserInfo = [];
	UserInfo.push(Storage)
	localStorage.setItem('UserInfo', JSON.stringify(UserInfo));
	UX. shwoalart(`Your order has been placed! 
	A confirmation email has been sent to email provided and expect
	Your order  shortly, thanks for patronage with us`,'success')
})
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// const liMaker = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// });

// data.forEach(item => {
//   liMaker(item);
// });

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
//   itemsArray = [];
// });




var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

var moda = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == moda) {
		moda.style.display = "none";
	}
};


