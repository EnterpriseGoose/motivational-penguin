$(function() {
    console.log("Loaded");
	console.log(window.localStorage.getItem('colorsLeft'))
	let colors = Array.isArray(JSON.parse(window.localStorage.getItem('colorsLeft'))) ? JSON.parse(window.localStorage.getItem('colorsLeft')) : ["blue-400", "yellow-400", "green-500", "indigo-400", "purple-400"]
	let color = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
	$(".bg").removeClass("bg-blue-400").addClass(`bg-${color}`)
	let penguinIDs = Array.isArray(JSON.parse(window.localStorage.getItem('penguinIDsLeft'))) ? JSON.parse(window.localStorage.getItem('penguinIDsLeft')) : [0, 1, 2, 3, 4]
	let penguinID = penguinIDs.splice(Math.floor(Math.random() * penguinIDs.length), 1)[0];
	$.get(`penguins/${penguinID}.svg`, function(data) {
		console.log(data)
		let svgW, svgH;
		if(data.activeElement) {
			svgW = data.activeElement.attributes.width.value;
			svgH = data.activeElement.attributes.height.value;
		} else {
			svgW = data.getElementById("svg").getAttribute("width")
			svgH = data.getElementById("svg").getAttribute("height")
		}
		console.log({svgW, svgH})
		let imgW = 200
		let wW = window.screen.width * 4/5;
		let wH = window.screen.height * 3/5;
		let cW = wH * (svgW / svgH)
		let cH = wW * (svgH / svgW)
		if(cW > wW) {
			console.log('width restricted')
			console.log({ wW, wH, cW, cH})
		}
		else if(cH > wH) {
			let proportion = svgW / svgH;
			wW = wH * proportion
			console.log('height restricted')
			console.log({proportion, wW, wH, cW, cH})
		}
		imgW = wW

		$('.img-div').append('<img class="penguin"> </img>')
		$(".spinner").hide()
		let penguin = document.getElementsByClassName('penguin')[0]
		penguin.setAttribute('src', `/penguins/${penguinID}.svg`)
		penguin.setAttribute('width', imgW)
		
		if(penguinIDs.length === 0) penguinIDs = [0, 1, 2, 3, 4];
		if(colors.length === 0) colors = ["blue-400", "yellow-400", "green-500", "indigo-400", "purple-400"];
		window.localStorage.setItem('penguinIDsLeft', JSON.stringify(penguinIDs))
		window.localStorage.setItem('colorsLeft', JSON.stringify(colors))
	}, 'xml')
});