let input1 = document.getElementById("input");
let intervalContainer = document.getElementById("interval_container");

function button(){
	let val = input1.value;
	let opt = new Promise((resolve,reject)=>{
		if(val=="head"){
			resolve("Success")
		}
		else if(val == "tail"){
			reject("fail")
		}
		else{
			reject("invaild option")
		}
	})
	opt.then((msg)=>{
		intervalContainer.innerHTML = msg;
		intervalContainer.style.display="block";
	}).catch((err)=>{
		intervalContainer.innerHTML = err;
		intervalContainer.style.display="block";
	})
	
	input1.value = "";
}