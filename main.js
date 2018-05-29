
var rolly = require('rollypolly')


function doTheRoll(rollString) {
	rolly.graph(rollString, '#results', 100)
}

window.doTheRoll = doTheRoll 

var theButton = document.querySelector('#trigger-button')

theButton.onclick = function() { 
	doTheRoll('1d6') 
}

// function doit(rollString) {
// 	test.graph(rollString, '#results', 100)
// }

// function showMessage(msg) {
// 	alert(msg)
// }

// function innerSecretStuff() { 
// 	console.log('secret stuff')
// }


// var toolkit = {
// 	doit: doit,
// 	showMessage: showMessage
// }

// window.appTools_2018_12_12 = toolkit

// if (window.appTools) {
// 	console.log("there's already something called appTools, installing as 'window.appTools_2018_12_12_specialBackupName'.")
// } else {
// 	window.appTools = toolkit

// }


// var arrayResults = test.parseRollString('2d6')
// console.log(arrayResults)

// var allPossibleRollResults = test.possibleRolls(arrayResults[0], arrayResults[1])
// console.log(allPossibleRollResults)

// var compactResults = test.compactResults(allPossibleRollResults)
// console.log(compactResults)


// test.graph('5d5', '#results', 100)