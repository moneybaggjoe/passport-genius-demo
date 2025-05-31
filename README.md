# passport-genius-demo

Demo project for [passport-genius](https://github.com/moneybaggjoe/passport-genius)

# Overview

This web application exercises `passport-genius` to demonstrate its utility.

## Usage

```sh
# clone the repo
git clone https://github.com/moneybaggjoe/passport-genius-demo.git

# enter the project root
cd passport-genius-demo

# install dependencies
npm install
```

#### Set Environment Variables

Rename `.env.demo` to `.env` and edit.

```sh
CLIENT_ID=YOUR_CLIENT_ID
CLIENT_SECRET=YOUR_CLIENT_SECRET
PORT=8080
BASE_URL=http://0.0.0.0:8080
```

Use the following script to load all variables from `.env` into the current shell environment.

```sh
set -a; . ./.env; set +a
```

Alternatively, you may incorporate [dotenv](https://github.com/motdotla/dotenv) to load environment variables.

## Run the server

```sh
npm start
```

Visit the web page and click `Log In with Genius` to begin the authentication flow.