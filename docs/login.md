# Login Page

## Requirements

* A user can log in to the site by entering their username and password.
* Authorization data (JWT token and username) lives in a dedicated store and survives page reloads.
* The chat page (`/`) is available only to a user who has a token.

## User Scenarios

### 1. Successful Login

* The user opens `/login`.
* The user enters their username and password.
* The user clicks **Log In**.
* A JSON request is sent to the backend.
* A response is received. The token and username are saved to the auth store.
* The user is redirected to the chat page (`/`).

### 2. Visiting the Chat Without a Token

* The user opens `/`.
* The app checks the auth store for a token.
* There is no token, so the user is redirected to `/login`.

### 3. Opening the Chat With a Saved Token

* The user has logged in earlier; the token is restored from `localStorage`.
* The user opens `/`.
* The chat page is shown.

### 4. Invalid Credentials

* The user submits a wrong username or password.
* The backend answers `401`.
* The user stays on `/login` and sees an error. No token is saved.

## API Contract

Endpoint: `POST /api/v1/login`

Request:

```json
{
  "username": "admin",
  "password": "admin"
}
```

Success response (`200`):

```json
{
  "token": "...",
  "username": "admin"
}
```

The token is used as a Bearer token in the `Authorization` header for subsequent API requests.

Default in-memory account: `admin` / `admin`. Data resets when the server restarts.

## Auth Store

Authorization state is a Zustand store with the `persist` middleware.

* State: `{ token, username }`.
* Actions: `setAuth({ token, username })`, `clearAuth()`.
* Storage: `localStorage`, key `auth`.
* On app start the store rehydrates from `localStorage`, so a page reload keeps the user logged in.

Persisted shape:

```json
{
  "state": {
    "token": "...",
    "username": "admin"
  },
  "version": 0
}
```

## Access Control

* `/` requires a token. Without one the user is redirected to `/login`.
* `/login` is the only page that does not require a token.
* A logged-in user who opens `/login` is redirected to `/`.

## UI

* Route: `/login`
* Fields: Username, Password
* Button: **Log In**
