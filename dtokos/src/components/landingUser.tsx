"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Iuser {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  balance: number;
}

export default function LandingUserComponent() {
  const [user, setUser] = useState<Iuser[]>([]);
  console.log(user);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v19/dtokos/user/current-user",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const result: { msg: string; user: Iuser } = await response.data;
      console.log(result);
      setUser([result.user]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div className=" bg-slate-500 h-[75px] flex items-center justify-between pl-5">
      {user.map((item) => {
        return (
          <>
            <div className=" flex gap-5">
              <div className=" flex">
                <div className=" h-[40px] w-[40px] bg-black rounded-full"></div>
              </div>
              <h1>welcome {item.username}</h1>
            </div>
          </>
        );
      })}
    </div>
  );
}
