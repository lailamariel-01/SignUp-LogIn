function signUp(){
    // alert("ok");
    const username=document.getElementById("txt_username").value;
    const password=document.getElementById("txt_password").value;

    // alert("Username is: " + username);
    // alert("Password is: " + password)

    if (username&& password!=""){
        const data = JSON.parse(localStorage.getItem('data'))|| [];
        data.push({
            username: username,
            password: password,
        });

        localStorage.setItem('data', JSON.stringify(data));
        console.log(username, password);

        alert("Username is: " + username + " and " + "Password is: " + password
        );
        
    } else{
        alert("Fill out the fields first!") 
    }
}

function logIn(){
    const username=document.getElementById("txt_user").value;
    const password=document.getElementById("txt_pass").value;

    const data = JSON.parse(localStorage.getItem('data'))|| [];
    const user = data.find(user=> user.username === username && user.password === password);
    if (user) {
        alert("Login successful");
        console.log("Logged in user:", user);
    } else{
        alert("Imvalid credentials! Sign up first.");
        console.log("No matching user found");
    }

} 