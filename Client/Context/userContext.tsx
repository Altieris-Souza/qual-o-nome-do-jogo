import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [players, setPlayers] = useState({});
  const [matches, setMatches] = useState(0);

  const namePlayers = (player1: String, player2: String) => {
    if (player1 != "" && player2 != "") {
      setPlayers({
        player1: player1,
        player2: player2,
      });
    }
  };

  const numberMatches = (matches: any) => {
    setMatches(matches);
  };

  return (
    <UserContext.Provider
      value={{ numberMatches, matches, namePlayers, players }}
    >
      {children}
    </UserContext.Provider>
  );
};
