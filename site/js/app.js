// Create a root reference
var name = window.name;

var nameinput = document.getElementById("nameinput");
nameinput.addEventListener('submit',updateName);


function updateName(event){
	name = document.getElementById("username").value;
	window.name = name;
	if(name === ""){
		alert("あなたの番号を入力してください.");
	}else{
		alert("番号が更新されました.");
		window.location.href = "instructions.html";
	}
	event.preventDefault();
}


