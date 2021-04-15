from flask import Flask, render_template, request, flash
import json
import util

app = Flask(__name__)

@app.route('/')
@app.route('/page/<page>')
def index(page=None):
    planets = util.get_api(page)
    planets['previous'] = planets['previous'].split("=")[1] if planets['previous'] else None
    planets['next'] = planets['next'].split("=")[1] if planets['next'] else None
    return render_template('index.html', planets=planets)


if __name__ == '__main__':
    app.run(debug=True)