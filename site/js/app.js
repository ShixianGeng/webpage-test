// Create a root reference
var storageRef = firebase.storage().ref();
var name;

var nameinput = document.getElementById("nameinput");
nameinput.addEventListener('submit',updateName);

for (var i = 1; i <=22; i++) {
	var form = document.getElementById("form"+i);
	form.addEventListener('submit', uploadPhoto(i));
}

for (var k = 1; k <=8; k++) {
	var form = document.getElementById("form2_"+k);
	form.addEventListener('submit', uploadVideo(k));
}



function uploadPhoto(arg){
	return function curried_function(event){
		if(name === ""){
			alert("You must input a name!");
		}else{
			var file = document.getElementById("pic"+arg).files[0];
			var ref = storageRef.child(name+'/pic'+arg);
			ref.put(file).then((snapshot) =>{
			alert("submitted "+"photo #"+arg);
			});
			event.preventDefault();

		}


	}
}

function uploadVideo(arg){
	return function curried_function(event){
		if(name === ""){
			alert("You must input a name!");
		}else{
			var file = document.getElementById("vid"+arg).files[0];
			var ref = storageRef.child(name+'/video'+arg);
			ref.put(file).then((snapshot) =>{
			alert("submitted "+"video #"+arg);
			});
			event.preventDefault();

		}


	}
}

function updateName(event){
	name = document.getElementById("username").value;
	if(name === ""){
		alert("You must input a name!");
	}else{
		alert("Name updated!");
	}
	event.preventDefault();
}


