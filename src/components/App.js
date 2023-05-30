import FriendList from './FriendList';
import Profile from './Profile';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory';

import users from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  const userProfile = users[0];
  return (
    <div>
      <Profile
          username={userProfile.username}
          tag={userProfile.tag}
          location={userProfile.location}
          avatar={userProfile.avatar}
          stats={userProfile.stats}
      />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    );
  }