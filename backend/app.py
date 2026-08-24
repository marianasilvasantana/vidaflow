from fastapi import FastAPI

app = FastAPI(title="Vida Flow")

@app.get("/")
def inicio():
    return {"projeto": "Vida Flow", "status": "online"}