from flask import Flask, render_template, request, session, redirect, jsonify, flash
import data_handler as dh
import util

app = Flask(__name__)

app.secret_key = "TotTi1927"


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.method ==  'POST':
        email = request.form['emailInput']
        password = util.hash_password(request.form['passwordInput'])
        # isTaken = dh.check_if_taken(email)
        # if isTaken:
        #     flash('Username already exists, please choose another one!')
        #     return redirect('/registration')
        # print(isTaken)
        dh.add_new_user(email, password)        
        flash('Successful registration. Log in to continue.')
        return redirect('/login')
    return render_template('registration.html')


@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        print("vmi")      
        try:
            hashed_password = dh.get_hashed_password(email)['password']
        except:
            flash('Wrong username or password.')
            return redirect('/login') 
        print(hashed_password)
        if util.verify_password(request.form["password"], hashed_password):
            session['email'] = email
            return redirect('/')
    
    return render_template('login.html')


@app.route('/logout')
def logout():
    session.pop("email", None)
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)