import { useEffect, useState, useCallback, createContext } from "react";
import axios from "axios";

export const userContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async (token) => {
    try {
      const res = await axios.get("https://dummyjson.com/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.error(error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetchUser(token);
    } else {
      setIsLoading(false);
    }
  }, [fetchUser]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, fetchUser, isLoading, handleLogout }}>
      {children}
    </userContext.Provider>
  );
}
