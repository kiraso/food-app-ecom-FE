import { useContext, useEffect, useState } from 'react';
import LandingImg from '../images/Finn Food.png';
import { UserContext } from '../context/userContext';
const Profile = () => {
  const [user, setUser] = useState<any>([]);
  useEffect(() => {
    var newObject = window.localStorage.getItem('user');
    if (newObject) setUser(JSON.parse(newObject));
  }, [window.location]);

  return (
    <div>
      <div>
        <div className="bg-lime-400/30">
          <div className="flex justify-center items-center h-screen px-6">
            <div className="w-1/2 h-3/4 bg-white rounded-xl">
              <div>user email: {user['email'] || ''}</div>
              <div>first_name: {user['first_name'] || ''}</div>
              <div>last_name: {user['last_name'] || ''}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
