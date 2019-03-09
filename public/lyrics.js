var chosenword = "helloo"

var hiddenwords = ["me", "wondering", "everything", "hear", "dreaming", "younger", "young", "forgotten", "difference", "and", "thousand", "everything"
,"outside", "you", "anymore","typical", "happened", "secret" , "running"]
console.log(hiddenwords)

// “me”, “wondering”, “everything”, “supposed”, “hear”, “California”, “young”, “forgotten”, “difference”,”and”, “thousand”, “everything”,
// “outside”, “you”, anymore,anymore

function search(ele) {
    if(event.key === 'Enter') {
    	chosenword = ele.value
        if (hiddenwords.includes(chosenword)){
        	document.getElementById("myImage").src = 'https://www.w3schools.com/js/pic_bulbon.gif'
        	var audio = new Audio('https://www.soundjay.com/appliances/sounds/microwave-oven-bell-1.mp3');
		audio.play();
          
        } else {
        	var audio2 = new Audio('http://www.disasterdoug.com/S-SV_files/alt_stand_training/Module1/Resources/Sounds/glass.wav');
        	audio2.play();
        }     
    }
}

function myFunction(){
	document.getElementById("myImage").src = 'https://www.w3schools.com/js/pic_bulboff.gif' 
}

