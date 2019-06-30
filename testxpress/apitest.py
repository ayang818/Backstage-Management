import requests

params = {"title":"hello", "body":"api test", "tag": "browser"}
print("插入文档开始")
r = requests.post("http://localhost:3002/api/article", params = params)
print(r.text)
print("插入文档完成")
