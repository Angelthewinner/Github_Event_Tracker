from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import requests

app = FastAPI()

github_api = "https://api.github.com/users"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hello")
def hello(username: str):
    return {"message": f"Hello {username}"}

@app.get("/githubevents")
def get_github_info(username: str):
    url = f"{github_api}/{username}/events"
    response = requests.get(url)


    events = []

    if response.status_code == 200:
        github_info = response.json()
        for i in github_info:
            events.append(f"-User: {i['actor']['login']}")
            events.append("  "f"Event: {i['type']}")
            events.append("  "f"Repo: {i['repo']['name']}")
            events.append("  "f"Date: {i['created_at']}")
            events.append("  "f"Public: {i['public']}")
            events.append(" ")        

        return events
    elif response.status_code == 404:
        return "Doesnt exist"

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001)