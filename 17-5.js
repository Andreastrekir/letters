
function onlyLetter(e){
	key = e.keyCode || e.which;

	keybord= String.fromCharCode(key).toLowerCase();
	//hay que poner una coma luego de la primer comilla para que me permita los espacios
	letter=" abcdefghijklmnopqrstuvwxyz";
	special ="8-37-38-46-164";

	key_special= false;
	for(var i in special){
		if(key == special[i]){
			key_special = true;break;
		}
	}
	if(letter.indexOf(keybord)==-1 && !key_special){
		return false;

	}
}

// IMPORTANTE PARA QUE NO COPIE Y PEGUE SE PUEDE PONER ONPASTE "RETURN FALSE"























