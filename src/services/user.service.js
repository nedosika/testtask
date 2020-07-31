const register = async (user) => {
    const {token} = await getToken();
    const formData = new FormData();
    for ( let key in user ) {
        formData.append(key, user[key]);
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Token': token},
        body: formData,
    };

    console.log(user);

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
                console.log("The token expired.");
            }

            if (response.status === 409){
                console.log("User with this phone or email already exist");
            }

            if (response.status === 422) {
                console.log("Error:", data.fails)
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