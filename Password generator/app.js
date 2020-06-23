// selectors
const pass = document.getElementById('pass');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');


// function to generate password
generateBtn.addEventListener('click', () => {
	const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]";
	let password = '';
	for(let i=0; i<16; i++)
	{
		random = Math.floor(Math.random() * chars.length);
		password += chars[random]; 
	}

	pass.value = password;
	copyBtn.innerText = "Copy";
});


// function to copy generated password
copyBtn.addEventListener('click', () => {
	if(pass.value.length != 0)
	{
		pass.select();
		document.execCommand('Copy');
		copyBtn.innerText = "Copied!";
	}
	else
		alert("Password not yet Generated");
});
