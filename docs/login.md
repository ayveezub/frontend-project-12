# Login Page

## Requirements

* A user can log in to the site by entering their username and password.

## User Scenarios

### 1. Successful Login

* The user opens `/login`.
* The user enters their username and password.
* The user clicks **Log In**.
* A JSON request is sent to the backend.
* A response is received, and the user is redirected to the chat page (`/`).

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

## UI

* Route: `/login`
* Fields: Username, Password
* Button: **Log In**
