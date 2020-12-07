from flask import Flask, render_template, request,make_response,jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin

app = Flask(__name__)
# CORS(app, support_credentials=True)
# cors=CORS(app,resources={
#     r"/*":{
#         "origins":"*"
#     }
# })
# app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/uploader', methods = ['GET', 'POST'])
@cross_origin(origin='*')
def uploader_file():
    if request.method == 'POST':
        f = request.files['file']
        print(f.filename)
        f.save(secure_filename(f.filename))
        response = make_response(jsonify({"message": 'file uploaded'}))
        return  response 

		
if __name__ == '__main__':
   app.run(debug = True)