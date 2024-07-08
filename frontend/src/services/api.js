

export const fetchLogin = async (username, password) => {
    const response = await fetch('http://tu-backend-url/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
};

export const fetchActivities = async (page, size) => {
    const response = await fetch(`http://tu-backend-url/api/activities?page=${page}&size=${size}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch activities');
    }

    const data = await response.json();
    return data;
};

export const fetchPets = async (page, size) => {
    const response = await fetch(`http://tu-backend-url/api/inAdoption?page=${page}&size=${size}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch pets');
    }

    const data = await response.json();
    return data;
};
