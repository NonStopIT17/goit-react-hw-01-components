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
        key={userProfile.tag}
        avatar={userProfile.avatar}
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        stats={userProfile.stats}
      />
  
        <Statistics title="Upload stats" stats={data} />
        
        <ul key="FriendList" className="friend-list">
          {friends.map(el => (
            <FriendList
              key={el.id}
              avatar={el.avatar}
              name={el.name}
              isOnline={el.isOnline}
            />
          ))}
        </ul>
  
        <TransactionHistory key="TransactionHistory" items={transactions} />
      </div>
    );
  }