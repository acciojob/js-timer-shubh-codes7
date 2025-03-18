// write js code here if required
let p = document.querySelector("#timer")
setInterval(
	function(){
		p.textContent = new Date().toLocaleString()
	}, 1000
)