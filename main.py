from flask import Flask, render_template, Response,redirect,request
from camera import VideoCamera
from werkzeug.utils import secure_filename
import os
import time
import sys
from PIL import Image
sys.modules['Image'] = Image 
app = Flask(__name__)

APP_ROOT= os.path.dirname(os.path.abspath(__file__))
target = os.path.join(APP_ROOT,'static/')
app.config["DEBUG"] = True

picFolder = os.path.join('static/assets/images','User-Image')
#os.path.isfile('mydirectory/myfile.txt')  ---> to  check whether file existe or not
app.config["UPLOAD_FOLDER"] = picFolder

pic1 = os.path.join(app.config['UPLOAD_FOLDER'],'HERO.jpg')

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
st=""

CART=[]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/Home')
def Home():
    return render_template('Home.html')

@app.route('/upload',methods=["GET","POST"])
def upload():
    if request.method == "POST":
        file=request.files['uploadBills']
        #file.save(secure_filename(file.filename))
        #file.save(os.path.join("static/pics", file.filename))
        #some custom file name that you want
        if file and allowed_file(file.filename):
            st=allowed_file(file.filename)
            file.filename="8.png"
            file.save("static/assets/images/Frocks5/"+file.filename)
            time.sleep(1)
    return render_template('upload.html')

def allowed_file(filename):
    return filename.rsplit('.', 1)[1].lower()

@app.route('/tryon/<file_path>',methods = ['POST', 'GET'])
def tryon(file_path):
	file_path = file_path.replace(',','/')
	os.system('python tryOn.py ' + file_path)
	return redirect('http://127.0.0.1:5000/',code=302, Response=None)

@app.route('/tryall',methods = ['POST', 'GET'])
def tryall():
    if request.method == 'POST':
        cart = request.form['mydata'].replace(',', '/')
        os.system('python test.py ' + cart)
        render_template('checkout.html', message='')

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route("/cart/<file_path>",methods = ['POST', 'GET'])
def cart(file_path):
    global CART
    file_path = file_path.replace(',','/')
    print("ADDED", file_path)
    CART.append(file_path)
    return render_template("checkout.html")

@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run()
    
