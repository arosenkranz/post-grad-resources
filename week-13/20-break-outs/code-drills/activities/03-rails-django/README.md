# Rails

## Installation
#### For PC
- http://railsinstaller.org/en

#### For Mac
- `sudo gem install rails`


## Resources 
https://www.youtube.com/watch?v=pPy0GQJLZUM&t=801s
https://www.railstutorial.org/book 

## Instructions
1. Run `rails new app` (where `app` is the name of our app)
2. Run `bundle install` from `/app`
    - If you see this error `Your Ruby version is 2.6.0, but your Gemfile specified 2.3.7`, or something similar, navigate to your Gemfile, and change the version specified at the top to the one you have on your device.
3. Run `rails s` or `rails server`
    - If you see the following error `You must use Bundler 2 or greater with this lockfile.`, run `gem update --system`
4. Navigate to localhost:3000 to see if it worked. (You'll see a welcome page)
5. Lets generate a controller for our pages. Run `rails g controller Pages`. Check out the controllers folder, you'll see a new file there.
    - `rails g controller <name>`
6. In addition to creating the controller file, this will also create a new folder under views. Inside `views/pages` create `index.html.erb`.
7. Inside of `views/layouts` is a file called `application.html.erb`. Inside of the file is the following line of code: `<%= yield %>`. This is similar to `{{{body}}}` in Handlebars. All other views will build on this one. Therefore, we would only need to add CDNs to one spot.  




# Django

## About

Django is made up of separate `apps`. The idea is that one project brings many apps together. Therefore, you can reuse apps you've already made in other projects, making Django development very scalable.

## Resources
https://www.youtube.com/watch?v=D6esTdOLXh4

https://simpleisbetterthancomplex.com/series/beginners-guide/1.11/


## Installation 

https://www.anaconda.com/download/#macos


## Instructions 

1. `conda install virtualenv` (prepend with `sudo` if you get a permissions error)

2. `mkdir app`

3. `conda create -n venv` (where we can choose another word instead of `venv`)

4. `source activate venv` (to deactivate: `source deactivate`. to delete: `conda remove -n venv -all`)

5. `conda install -n venv <package>`

6. `conda install django`

7. `django-admin startproject app`

8. `conda install mysqlclient`

9. Django will come with a SQLite db by default.  

10. From app (at the same level as venv) `python manage.py runserver`

11. To create a super user: `python manage.py createsuperuser --username=<username> --email=<name@email.com>`

12. checkout `http://127.0.0.1:8000/admin`. Log in.

13. run `python manage.py startapp <name>`

14. add your app in apps in `settings.py`:

```python
INSTALLED_APPS = [
    "<name>",
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

```
