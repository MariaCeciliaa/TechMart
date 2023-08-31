const initialState = {
    token: '',
    name: 'Visitante',
    phone : '',
    city: ''    
};

const UserReducer = (state = initialState, action) => {
// eslint-disable-next-line
    switch(action.type) {
        case 'SET_TOKEN':
            return { ...state, token:action.payload.token }
        case 'SET_NAME':
            return { ...state, name:action.payload.name }
        case 'SET_PHONE':
            return { ...state, phone:action.payload.phone }
        case 'SET_CITY':
            return { ...state, city:action.payload.city }
    }

    return state;
};

export default UserReducer;