import os, requests
from flask import Flask, request, jsonify

app = Flask(__name__)

addr = os.getenv("HELLO_NODE_ADDR", "http://localhost:3000")

html = """ 
<br>History of programming languages: 
<br>
<form method='POST' action='/'>
    <select name="lang">
        <option value="assembly">Assembly</option>
        <option value="lisp">LISP</option>
        <option value="python">Python</option>
        <option value="js">JavaScript</option>
        <option value="go">Go</option>
    </select>
    <input type='submit'>
</form>
"""


@app.route('/', methods=['GET', 'POST'])
def index():
    history = ""
    if request.method == 'POST':
        value = request.form.get("lang")
        app.logger.info(value)
        history = send(value)
    return html + "<br>" + history


@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"})


def send(value):
    json = {"lang": value}
    try:
        resp = requests.post(addr, json=json)
        resp.raise_for_status()
    except requests.exceptions.HTTPError as err:
        raise err
    app.logger.info("Request sent to %s: %s", addr, json)
    return resp.json().get("history")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
