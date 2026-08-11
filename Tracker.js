let username;

const searchbutton = document.getElementById("search").onclick = async function(){
    username = document.getElementById("username-input").value;
    try {
        const response = await fetch(`http://127.0.0.1:8001/githubevents?username=${username}`);
        const data = await response.json();
        const result = document.getElementById('box');
        let htmlstring = '';
        for(const i in data){
            htmlstring += data[i] + "<br>"
        }
        result.innerHTML = htmlstring;
    } catch (error) {
        console.error('Error:', error);
    }
};


const buttondown = document.addEventListener("keydown", async event => {
    username = document.getElementById("username-input").value;
     if(event.key.startsWith("Enter")){
        try {
            const response = await fetch(`http://127.0.0.1:8001/githubevents?username=${username}`);
            const data = await response.json();
            const result = document.getElementById('box');
            let htmlstring = '';
            for(const i in data){
                htmlstring += data[i] + "<br>"
            }
        result.innerHTML = htmlstring
    } catch (error) {
        console.error('Error:', error);
    }
    };
});



