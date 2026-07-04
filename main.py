from fastapi import FastAPI

app = FastAPI()


recursos = {
    "sala": {"tipo": "dinheiro", "necessario": 1000, "recebido": 0, "unidade": "R$"},
    "equipe": {"tipo": "dinheiro", "necessario": 2000, "recebido": 0, "unidade": "R$"},
    "equipamento": {"tipo": "dinheiro", "necessario": 1200, "recebido": 0, "unidade": "R$"},
    "sangue": {"tipo": "sangue", "necessario": 5, "recebido": 0, "unidade": "bolsas"},
    "soro": {"tipo": "soro", "necessario": 3, "recebido": 0, "unidade": "litros"},
    "orgao": {"tipo": "orgao", "necessario": 1, "recebido": 0, "unidade": "unidade"},               
} 


@app.get("/recursos")
def ver_recursos():
    return recursos


@app.put("/recursos/{   nome}/{quantidade}")
def atualizar_recurso(nome: str, quantidade: float):
    recursos[nome]["recebido"] += quantidade
    return recursos[nome]

@app.post("/resetar")
def resetar():
    for dados in recursos.values():
        dados["recebido"] = 0
    return recursos


@app.get("/verificar")
def verificar_cirurgia():
    faltando = []

    for nome, dados in recursos.items():
        if dados["recebido"] < dados["necessario"]:
            faltando.append(nome)

    if len(faltando) == 0:
        return {"cirurgia_possivel": True}
    else:
        return {"cirurgia_possivel": False, "faltando": faltando}