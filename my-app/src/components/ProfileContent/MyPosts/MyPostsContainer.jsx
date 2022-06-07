import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/reducers/profilePageReducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};

export const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts);
