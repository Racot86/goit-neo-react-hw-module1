import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={styles.card}>
            <div className={styles.avatarContainer}>
                <img
                    src={image}
                    alt="User avatar"
                />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
    stats: PropTypes.object,
}

export default Profile

