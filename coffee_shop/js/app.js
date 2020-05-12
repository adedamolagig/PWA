const container = document.querySelector(".container")
const coffees = [
	{name: "coffee1", image: "images/coffee1.jpg", link: "https://www.google.com/"},
	{name: "coffee2", image: "images/coffee2.jpg", link: "www.google.com"},
	{name: "coffee3", image: "images/coffee3.jpg", link: "www.google.com"},
	{name: "coffee4", image: "images/coffee4.jpg", link: "www.google.com"},
	{name: "coffee5", image: "images/coffee5.jpg", link: "www.google.com"},
	{name: "coffee6", image: "images/coffee6.jpg", link: "www.google.com"},
	{name: "coffee7", image: "images/coffee7.jpg", link: "www.google.com"},

]

const showcoffee = () => {
	let output = ""
	coffees.forEach(
		({name, image, link}) =>(output += `
		<div class="card">
			<img class="card-avatar" src=${image} />
			<h1 class="card--title">${name}</h1>
			<a class="card--link" href=${link}>Taste</a>
		</div>
	`)
	)
	container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showcoffee)

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function(){
		navigator.serviceWorker
				.register("/serviceWorker.js")
				.then(res => console.log("service worker registered"))
				.catch(err => console.log("service worker not registered", err))
	})
}