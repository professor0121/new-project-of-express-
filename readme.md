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
## POST /captain/register

**Description**: Register a new captain.

**Request Body**:
- `email` (string): Captain's email address. Must be a valid email.
- `fullname.firstname` (string): Captain's first name. Must be at least 3 characters long.
- `fullname.lastname` (string): Captain's last name. Must be at least 3 characters long.
- `password` (string): Captain's password. Must be at least 6 characters long.
- `vehicle.color` (string): Vehicle color. Must be at least 3 characters long.
- `vehicle.plate` (string): Vehicle plate number. Must be at least 3 characters long.
- `vehicle.capacity` (number): Vehicle capacity. Must be at least 1.
- `vehicle.vehicleType` (string): Vehicle type. Must be one of `car`, `motorcycle`, or `auto`.

**Response**:
- `201 Created`: Returns the created captain and a JWT token.
- `400 Bad Request`: Returns validation errors if the input is invalid.

**Example**:
```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}

```

Response Example:
```json
{
  "token": "jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```