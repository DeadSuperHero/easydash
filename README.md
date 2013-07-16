Easydash is a simple Rails app that makes use of Mozilla Persona and Devise for authentication! It's literally just a simple user dashboard and a "Sign in With Persona" button.

The Devise integration was done using [devise_browserid_authenticatable](https://github.com/denschub/devise_browserid_authenticatable) by [Dennis Schubert](https://github.com/denschub)

## Database
This app by default makes use of Postgres, but it could just as easily support MySQL, SQLite, or other possible options. This means that, by default, you'll need to have Postgres set up on your machine!

## Usage

First, clone the repo:
```shell
git clone git@github.com:DeadSuperHero/easydash.git
```
Then, bundle the app and perform the migration

```shell
bundle install && rake db:create && rake db:migrate
```

Then, launch the app:
```
rails s
```