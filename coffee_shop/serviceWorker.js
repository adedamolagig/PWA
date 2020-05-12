const staticoffeeShop = "coffee-shop-site-v1"
const assets = [
	"/",
	"/index.html",
	"/css/style.css",
	"js/app.js",
	"/images/coffee1.jpg",
	"/images/coffee2.jpg",
	"/images/coffee3.jpg",
	"/images/coffee4.jpg",
	"/images/coffee5.jpg",
	"/images/coffee6.jpg",
	"/images/coffee7.jpg",
]


self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticoffeeShop).then(cache => {
			cache.addAll(assets)
		})
	)
})