from bottle import Bottle, run, request

app = Bottle()

@app.route('/')
@app.route('/hello/<name>') # パスパラメータを<変数名>で定義できる
def hello(name):
    print(name)
    return "Hello World!"

@app.route('/input')
def input():
    return '''
        <form action="/login" method="POST">
            UserName: <input name="username" type="text" />
            Password: <input name="password" type="password" />
            <input value="login" type="submit" />
        </form>
    '''

@app.route("/login", method="POST") # methodでHTTPメソッドを指定
def login():
    userName = request.forms.get("username") # postパラメータを取得
    password = request.forms.get("password")
    print(userName,password)
    return "hello"

run(app,host='localhost', port=8080, debug=True, reloader=True)