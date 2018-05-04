from flask import Flask, session
app = Flask(__name__)
app.secret_key = '+6\xd5\x99z\x94\x1a\xb2\x02\x0e\xf6\xa3\xc9N\x1eTV\xa8\xc5\x0c\xed\xb9\xbd\xd5'

@app.route('/')
def index():
	return "Root route for the session example"

@app.route('/session/write/<name>/')
def write(name=None):
	session['name'] = name
	return "Wrote %s into 'name' key of session" % name

@app.route('/session/read')
def read():
	try:
		if (session['name']):
			return str(session['name'])
	except KeyError:
		pass
	return "No session variable set for 'name' key"

@app.route('/session/remove/')
def remove():
	session.pop('name',None)
	return "Removed key 'name' from session"

if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True)
	