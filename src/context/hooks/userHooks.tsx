import { useState, useEffect } from "react";
import { getUser } from "../../services/User";
import { userProfile } from "../../@types/user";

export default function User() {
  const [user, setUser] = useState<userProfile |undefined >();
  const [idUser, setIdUser] = useState<string>("");

  async function getUserProfile() {
    try {
      const result = await getUser();
      setUser(result);
      setIdUser(result.id)
    } catch (error) {
      console.log(error)
    }
  }

  return { user, idUser, getUserProfile };
}
