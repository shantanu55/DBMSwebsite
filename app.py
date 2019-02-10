from flask import Flask , render_template ,url_for

app = Flask(__name__)
user={"signed_in":True,"user_name":"shantanu"}
@app.route('/')
def home():
    return render_template("index.html",user=user)

@app.route('/sign_in')
def sign_in():
    return render_template("sign_in.html")
app.run(debug=True)