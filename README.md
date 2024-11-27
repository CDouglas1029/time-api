
# Time API

A simple RESTful API that provides the current UTC time and calculates adjusted time based on a provided timezone offset. This project demonstrates creating a Node.js Express application with testing and CI/CD integration using GitHub Actions.

---

## Features

- Returns the current UTC time.
- Adjusts time based on the `timezone` query parameter (valid range: `-12` to `+14`).
- Handles input validation and errors.
- Includes unit tests using Jest and Supertest.
- Continuous Integration (CI) pipeline with GitHub Actions.

---

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (Node Package Manager)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/time-api.git
   cd time-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```
   The API will start on `http://localhost:3000`.

---

## API Endpoints

### **GET** `/time`

#### Query Parameters:
- **`timezone`** (optional): A string representing the timezone offset (e.g., `-5` or `2.5`).

#### Responses:

1. **Without `timezone`:**
   ```json
   {
       "currentTime": "2024-11-27T10:00:00Z"
   }
   ```

2. **With valid `timezone`:**
   ```json
   {
       "currentTime": "2024-11-27T10:00:00Z",
       "adjustedTime": "2024-11-27T12:00:00Z"
   }
   ```

3. **With invalid `timezone`:**
   ```json
   {
       "error": "Invalid timezone offset. Must be between -12 and +14."
   }
   ```

---

## Testing

Run the unit tests with:
```bash
npm test
```

The tests validate:
- The `currentTime` is returned in UTC format.
- The `adjustedTime` is correctly calculated for valid timezone offsets.
- Proper error handling for invalid inputs.

---

## CI/CD with GitHub Actions

A GitHub Actions workflow is included to automate testing on every push or pull request to the `main` branch. The workflow file is located at `.github/workflows/node.js.yml`.

---

## Project Structure

```plaintext
time-api/
├── .github/
│   └── workflows/
│       └── node.js.yml  # CI/CD workflow file
├── src/
│   ├── app.js           # Main application logic
│   └── routes/
│       └── time.js      # Time endpoint logic
├── test/
│   └── app.test.js      # Unit tests
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

Christopher Lim
