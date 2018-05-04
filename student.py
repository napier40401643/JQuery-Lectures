from flask import Flask, render_template, jsonify, request, flash, url_for
import sqlite3, json

app=Flask(__name__)

@app.route('/')
def indexPage():
	return render_template("student.html")

@app.route('/save', methods = ['Get', 'POST'])
def saveStudent():
	print("saving student" + request.method)
	error =''
	if request.method == 'POST':
		try:
			print(request.form)    		 
			name = request.form['Name']
			physics = int(request.form['Physics'])
			Chemistry = int(request.form['Chemistry'])
			Maths = int(request.form['Mathematics'])
		except ValueError:
			error = "data input error"
			return render_template("student.html", error=error)
		try:
			with sqlite3.connect("student.db") as con:
				cur = con.cursor()
				cur.execute("insert into student(Name, Physics, Chemistry, Maths)values(?,?,?,?)",(name,physics,Chemistry,Maths)) 
				con.commit()
				msg = "saving"
				print("Saving record")
				return redirect(url_for("flashMessage.html", msg=msg))
		except:
			con.rollback()
		finally:
			con.close()
			return render_template("student.html", error=error)
	return render_template("student.html", error=error)


@app.route('/allStudents')
def studentInformation():
	con = sqlite3.connect("C:/Users/X541UJ/JQueryLeacture/student.db")
	cur = con.cursor()
	cur.execute("select * from student")
	rows = cur.fetchall()
	print(rows)
	return json.dumps(rows)

if __name__ == '__main__':
	app.run(host="0.0.0.0", debug=True)













