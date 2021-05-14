// Create a root reference
var storageRef = firebase.storage().ref();
var name;

var nameinput = document.getElementById("nameinput");
nameinput.addEventListener('submit',updateName);

var form = document.getElementById("form");
form.addEventListener('submit', uploadVideo());



function uploadVideo(){
	return function curried_function(event){
		if(name === ""){
			alert("あなたの番号を入力してください.");
		}else{
			var file = document.getElementById("vid").files[0];
			var ref = storageRef.child(name+'/');
			var upload = document.getElementById("upload");
			upload.innerText = "アップロード中です...少々お待ちください"
			ref.put(file).then((snapshot) =>{
			alert("アップロード完了.ありがとうございました.");
			upload.innerText = "アップロード完了"
			});
			event.preventDefault();

		}


	}
}

function updateName(event){
	name = document.getElementById("username").value;
	if(name === ""){
		alert("あなたの番号を入力してください.");
	}else{
		alert("番号が更新されました.");
	}
	event.preventDefault();
}


