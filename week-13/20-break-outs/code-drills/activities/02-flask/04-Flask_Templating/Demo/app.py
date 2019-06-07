# Flask has a built in template engine that is remarkably similar to handlebars
# To use its tempate engine, we simply import render_template from flask
from flask import Flask, render_template

app = Flask(__name__)

# The rest should look almost identical
# To render the html we simply call the render_template() method and pass it our html file

# IMPORTANT - like how all your handlebar files had to be contained within a view folder, all html templates need to be contained within a templates folder. Flask will know to look through this folder to find html files.

student = {
  "name": "Harry Potter",
  "House": "Gryffindor"
}

friends = ["ron weasley", "hermione granger", "neville longbottom"]

# Like in handlebars you can pass data to your templates, simply tell flask what data is being passed
@app.route("/")
def index():
    return render_template('index.html', student=student)

# Unlike handlebars however, you can pass either a list or a dictionary
@app.route("/about")
def about():
    return render_template('about.html', friends=friends)


if __name__ == "__main__":
    app.run(debug=True)