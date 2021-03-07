// Create a root reference
var storageRef = firebase.storage().ref();
var name;

var nameinput = document.getElementById("nameinput");
nameinput.addEventListener('submit',updateName);

for (var i = 1; i <=22; i++) {
	var form = document.getElementById("form"+i);
	form.addEventListener('submit', uploadFile(i));
}


function uploadFile(arg){
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

function updateName(event){
	name = document.getElementById("username").value;
	if(name === ""){
		alert("You must input a name!");
	}else{
		alert("Name updated!");
	}
	event.preventDefault();
}


