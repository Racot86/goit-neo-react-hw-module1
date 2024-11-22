import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem.jsx";


const FriendList = ({friends}) => {

    return (
        <ul className={styles.friendList}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendList