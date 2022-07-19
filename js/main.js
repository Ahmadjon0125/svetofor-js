let elBody = document.querySelector(".body")
let elRed = document.querySelector(".js-red")
let elYellow = document.querySelector(".js-yellow")
let elGreen = document.querySelector(".js-green")
let elTimeOutRed = document.querySelector(".timeoutred")
let elTimeOutYellow = document.querySelector(".timeoutyellow")
let elTimeOutGreen = document.querySelector(".timeoutgreen")
let elResult = document.querySelector(".result")

setTimeout(()=>{
	elRed.classList.add("opacity")
	elYellow.classList.remove("opacity")
	elGreen.classList.remove("opacity")
	elResult.textContent = "To'xtang!!!"
	elBody.style.backgroundColor = "chartreuse"
	elResult.style.color = "red"
	let intervalRed = setInterval(()=>{
		elTimeOutRed.textContent--
	},1000)
	setTimeout(()=>{
		clearInterval(intervalRed)
		elTimeOutRed.textContent = 10
	},11000)
},0)

setTimeout(()=>{
	elRed.classList.remove("opacity")
	elYellow.classList.add("opacity")
	elGreen.classList.remove("opacity")
	elResult.textContent = "Kutib turing!!!"
	elBody.style.backgroundColor = "darkcyan"
	elResult.style.color = "yellow"
	let intervalYellow = setInterval(()=>{
		elTimeOutYellow.textContent--
	},1000)
	setTimeout(()=>{
		clearInterval(intervalYellow)
		elTimeOutYellow.textContent = 3
	},4000)
},11000)

setTimeout(()=>{
	elRed.classList.remove("opacity")
	elYellow.classList.remove("opacity")
	elGreen.classList.add("opacity")
	elResult.textContent = "Yuring!!!"
	elBody.style.backgroundColor = "darkseagreen"
	elResult.style.color = "green"
	let intervalGreen = setInterval(()=>{
		elTimeOutGreen.textContent--
	},1000)
	setTimeout(()=>{
		clearInterval(intervalGreen)
		elTimeOutGreen.textContent = 10
	},11000)
},15000)

setInterval(()=>{
	
	setTimeout(()=>{
		elRed.classList.add("opacity")
		elYellow.classList.remove("opacity")
		elGreen.classList.remove("opacity")
		elResult.textContent = "To'xtang!!!"
		elBody.style.backgroundColor = "chartreuse"
		elResult.style.color = "red"
		let intervalRed = setInterval(()=>{
			elTimeOutRed.textContent--
		},1000)
		setTimeout(()=>{
			clearInterval(intervalRed)
			elTimeOutRed.textContent = 10
		},11000)
	},0)
	
	setTimeout(()=>{
		elRed.classList.remove("opacity")
		elYellow.classList.add("opacity")
		elGreen.classList.remove("opacity")
		elResult.textContent = "Kutib turing!!!"
		elBody.style.backgroundColor = "darkcyan"
		elResult.style.color = "yellow"
		let intervalYellow = setInterval(()=>{
			elTimeOutYellow.textContent--
		},1000)
		setTimeout(()=>{
			clearInterval(intervalYellow)
			elTimeOutYellow.textContent = 3
		},4000)
	},11000)
	
	setTimeout(()=>{
		elRed.classList.remove("opacity")
		elYellow.classList.remove("opacity")
		elGreen.classList.add("opacity")
		elResult.textContent = "Yuring!!!"
		elBody.style.backgroundColor = "darkseagreen"
		elResult.style.color = "green"
		let intervalGreen = setInterval(()=>{
			elTimeOutGreen.textContent--
		},1000)
		setTimeout(()=>{
			clearInterval(intervalGreen)
			elTimeOutGreen.textContent = 10
		},11000)
	},15000)
	
},26000)
