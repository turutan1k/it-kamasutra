// let ADD_FRIEND = 'ADD-FRIEND';

let initialState = {
    friends: [
        {
            id: 1,
            name: 'Andrew',
            img: 'https://iconape.com/wp-content/png_logo_vector/avatar.png',
        },
        {
            id: 2,
            name: 'Svetlana',
            img: 'https://iconape.com/wp-content/png_logo_vector/avatar-11.png',
        },
        {
            id: 3,
            name: 'Timofei',
            img: 'https://iconape.com/wp-content/png_logo_vector/avatar-7.png',
        },
        {
            id: 4,
            name: 'Kristina',
            img: 'https://iconape.com/wp-content/png_logo_vector/avatar-3.png',
        },
    ],
};
const sideBarReducer = (state = initialState, action) => {
    // if (action.type === ADD_POST) {
    //     let newFriend = {
    //         id: 1,
    //         name: 'Andrew',
    //         img: 'https://iconape.com/wp-content/png_logo_vector/avatar.png',
    //     };
    //     state.friends.push(newFriend);
    // }
    return state;
};

export default sideBarReducer;
