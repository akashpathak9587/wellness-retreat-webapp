Here's a structured GitHub README for your project:

---

# Wellness Retreats

## Overview

Wellness Retreats is a platform for managing and booking wellness retreats. It features a React frontend and a Django backend, utilizing PostgreSQL for the database. The frontend is deployed on Vercel, while the backend is hosted on Render and uses a cloud-based PostgreSQL instance on Neon.

## Tech Stack

- **Frontend**: React, Axios
- **Backend**: Django, Django Rest Framework, PostgreSQL
- **Database**: PostgreSQL (Neon)
- **Deployment**:
  - Frontend: Vercel
  - Backend: Render
  - Database: Neon

## Demo

- **Frontend URL**: [https://wellness-retreat-webapp.vercel.app/](https://wellness-retreat-webapp.vercel.app/)
- **Backend URL**: [https://wellness-retreat-webapp-api.onrender.com/api/retreats/](https://wellness-retreat-webapp-api.onrender.com/api/retreats/)

## Features

- RESTful API for retreat data and booking management
- PostgreSQL database interactions
- Ensures retreats cannot be double-booked for the same user

## API Endpoints

### Fetch Retreats
- **Endpoint**: `GET /retreats`
- **Description**: Fetch a list of all available retreats.

### Create Booking
- **Endpoint**: `POST /book`
- **Description**: Create a new booking.

### Filter, Search, and Pagination
- **Filter**: `GET /retreats?filter={type}`
- **Location-based**: `GET /retreats?location={location}`
- **Pagination**: `GET /retreats?page={page}&limit={limit}`
- **Search**: `GET /retreats?search={title}`

## Setup Instructions

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/akashpathak9587/wellness-retreat-webapp.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/akashpathak9587/wellness-retreat-webapp.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd wellness_retreat_api
    ```
3. Build the Docker image:
    ```bash
    docker build -t wellness-retreats-backend .
    ```
4. Run the Docker container:
    ```bash
    docker run -p 8000:8000 wellness-retreats-backend
    ```
5. Set up a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```
6. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
7. Run the development server:
    ```bash
    python manage.py runserver
    ```

## Testing the APIs

You can test the APIs using Postman or any other API testing tool.

### Fetch Retreats
- **Method**: `GET`
- **URL**: `https://wellness-retreat-webapp-api.onrender.com/api/retreats/`

### Create Booking
- **Method**: `POST`
- **URL**: `https://wellness-retreat-webapp-api.onrender.com/api`
- **Body**:
    ```json
    {
        "user_id": 1,
        "user_name": "John Doe",
        "user_email": "john.doe@example.com",
        "user_phone": "1234567890",
        "retreat_id": 1,
        "payment_details": {
            "method": "credit_card",
            "amount": 200,
            "transaction_id": "txn_123456789"
        },
        "booking_date": "2024-07-29T10:00:00Z"
    }
    ```

## Frontend to Backend Integration

```javascript
const App = () => {
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchEvents = async () => {
        const response = await axios.get(import.meta.env.VITE_DJANGO_API_URL);
        if(response.status === 200) {
            setFilteredEvents(response.data);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <>
            {isLoading && <p className="loading">Loading...</p>}
            <Header />
            <Filter setFilteredEvents={setFilteredEvents} />
            <RetreatDisplay filteredEvents={filteredEvents} />
        </>
    );
};
export default App;
```