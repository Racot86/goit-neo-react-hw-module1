import 'modern-normalize';
import './index.css';
import Profile from "./components/Profile/Profile.jsx";
import userData from "./data/userData.json";
import friendsData from "./data/friends.json";
import FriendList from "./components/Friends/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./data/transactions.json";

function App() {


    return (
        <>
            <Profile
                image={userData[0].avatar}
                name={userData[0].username}
                tag={userData[0].tag}
                location={userData[0].location}
                stats={userData[0].stats}
            />
            <FriendList friends={friendsData}/>
            <TransactionHistory transactions={transactions}/>
        </>
    )
}

export default App
