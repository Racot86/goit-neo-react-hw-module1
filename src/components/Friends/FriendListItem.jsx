import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={styles.friendCard}>
            <img src={avatar} alt='avatar' width="48"/>
            <p>{name}</p>
            <p className={clsx(styles.online, {[styles.offline]: !isOnline})}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendListItem;