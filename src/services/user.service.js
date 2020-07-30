const register = async (user) => {
    const {token} = await getToken();

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Token': token},
        body: JSON.stringify(user),
    };

    return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, requestOptions)
        .then(handleResponse)
}

const getUsers = (count) => {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=${count}`, requestOptions)
        .then(handleResponse)
}

const getToken = () =>{
    const requestOptions = {
        method: 'GET',
    };

    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token', requestOptions)
        .then(handleResponse)
}

const getPositions = () => {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions', requestOptions)
        .then(handleResponse)
        .then((data) => data.positions)
}

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (data.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                //location.reload(true);
            }

            if (response.status === 422) {
                // auto logout if 401 response returned from api
                //logout();
                //location.reload(true);
            }

            const error = data || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

const userService = {
    register,
    getUsers,
    getPositions
}

export default userService;