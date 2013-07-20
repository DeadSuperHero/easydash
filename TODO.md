## TODO

There are a lot of things that I'd like to do with EasyDash. I think it has the potential to be a really great example app that can be used as an extendable building block for other Rails apps that want to leverage Devise and Persona.

A few I intend to tackle soon are down below:

1. Provide a better root page. The current one is just simple and boring, and only provides some basic links for logging in and out via Devise paths.

2. Provide user fields in a user setting page. First-time users will be directed here to put in their info before being introduced to the dashboard.

3. Implement an actual dashboard. I want to put something under http://0.0.0.0:3000/dashboard/ that only signed in users can get to. Basically, on signing in, users will be redirected to the dashboard rather than the root page.

4. Provide a Post model and views. What good is a dashboard without some example functionality? Maybe I could hook up a proper posting button, and the Dashboard could show them in a little stream. Not hard, but definitely useful as an example.

5. Admin functionality: The ability to delete any post, close user accounts, and set other users as admins comes to mind.

6. Pretty the whole thing up. Leaner and meaner code, subtle CSS3 transitions, responsive layout, you name it. Ideally, this should be a great-looking simple app when all is said and done.
