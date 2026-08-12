let username;

const searchbutton = document.getElementById("search").onclick = async function(){
    username = document.getElementById("username-input").value;
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        const data = await response.json();
        const result = document.getElementById('box');
        const events = [];
        for(const i in data){
            events.push(
                "-User: " + data[i].actor.login,
                "Event: " + data[i].type,
                "Repo: " + data[i].repo.name,
                "Date: " + data[i].created_at,
                "Public: " + data[i].public,
                ""
            )
            }
        let htmlstring = '';
            for(const i in events){
                htmlstring += events[i] + "<br>"
            }
    console.log(events)
    result.innerHTML = htmlstring;
    } catch (error) {
        console.error('Error:', error);
    }
};


const buttondown = document.addEventListener("keydown", async event => {
    username = document.getElementById("username-input").value;
     if(event.key.startsWith("Enter")){
        try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        const data = await response.json();
        const result = document.getElementById('box');
        const events = [];
        for(const i in data){
            events.push(
                "-User: " + data[i].actor.login,
                "Event: " + data[i].type,
                "Repo: " + data[i].repo.name,
                "Date: " + data[i].created_at,
                "Public: " + data[i].public,
                ""
            )
            }
        let htmlstring = '';
            for(const i in events){
                htmlstring += events[i] + "<br>"
            }
    console.log(events)
    result.innerHTML = htmlstring;
    } catch (error) {
        console.error('Error:', error);
    }
    };
});
