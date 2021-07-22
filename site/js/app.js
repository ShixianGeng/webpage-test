// Create a root reference
var nameinput = document.getElementById("nameinput");
nameinput.addEventListener('submit',updateName);

function updateName(event){
	name = document.getElementById("username").value;
	if(name === ""){
		alert("番号を入力してください.");
	}else{
		alert("番号が更新されました.");
		window.location.href = "./instructions.html?id="+name;
	}
	event.preventDefault();
}


