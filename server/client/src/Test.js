import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./redux/actions";

const Test = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.user.fetchUsers)
    return (
        <div>
            <button onClick={() => dispatch(fetchUsers())}>fetch</button>
            {
                posts?.map(user => {
                    return(
                        <div>
                            <div>{user._id} {user.email}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};
// const mapStateToProps = () => {
//
// }
// const mapDispatchToProps = () => {
//
// }
export default Test;