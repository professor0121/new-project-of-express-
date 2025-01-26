## API Routes

### User Routes

#### POST /user/register
- Registers a new user.

### HTTP Mathod

'POST'

- Request body:
-

  ```json
  {
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "password": "password123"
  }
  ```
- Response:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    }
  }
  ```

#### POST /user/login
- Logs in an existing user.
- Request body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- Response:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    }
  }
  ```

#### GET /user/profile

- Retrieves the profile of the authenticated user.
- Headers:
  - `Authorization: Bearer jwt_token`
- Response:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
  ```
