import FriendList from './FriendList';
import Profile from './Profile';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory';

import users from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
    return (
      <div>
        {users.map(el => (
          <Profile
            key={el.tag}
            avatar={el.avatar}
            username={el.username}
            tag={el.tag}
            location={el.location}
            stats={el.stats}
          />
        ))}
  
        <Statistics key="Statistics" title="Upload stats" stats={data} />
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