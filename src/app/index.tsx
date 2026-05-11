import { useEffect, useState } from 'react';
import AuthPage from '../components/authPage';
import { View } from 'react-native';
import { tokenStore } from '@/services/token.storage';
import Home from '@/components/home';
export default function Index() {

  const [isLoginedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  const checkAuth = async () => {
    const token = await tokenStore.getAccessKey();

    if (token) {
      setIsLoggedIn(true);
    } else {
      console.log("No user");
    }
  };

  checkAuth();
}, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoginedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <AuthPage setIsLoggedIn={setIsLoggedIn} />}
      
    </View>
  );
}
