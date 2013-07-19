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

## Signing in / Signing Out

When running the app, be sure to keep in mind that there's no main page yet (will arrive in an update soon). To test the login, you'll want to point your browser at the login page to see it:

By default for Devise, this means:
```
http://0.0.0.0:3000/users/sign_in
```

You can check that you're logged in by re-visiting the sign_in URL, which will just simply redirect you to the non-existant index. You can sign out by pointing your browser at:

```
http://0.0.0.0:3000/users/sign_out
```