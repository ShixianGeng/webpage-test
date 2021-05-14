// Create a root reference
var storageRef = firebase.storage().ref();

var form = document.getElementById("form");
form.addEventListener('submit', uploadVideo());
var id_indicator = document.getElementById("id_indicator");
id_indicator.innerText = name;

function uploadVideo(){
	return function curried_function(event){
		if(name === ""){
			alert("あなたの番号を入力してください.");
		}else{
			var file = document.getElementById("vid").files[0];
			var ref = storageRef.child(name+'/'+Date.now()+'/');
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



