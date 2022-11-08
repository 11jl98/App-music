import { useState, useEffect } from "react";

import { filterType } from "../../@types/filter";

import filter from "../../commons";
import { favorites } from "../../services/favorites";

export default function Playlists() {
  const [active, setActive] = useState<Array<filterType>>(filter);
  const [data, setData] = useState<Array<any>>([]);

  function setActiveMood(item: filterType) {
    const isActives = active.filter((e) => e.active === true);
    isActives.map((e) => (e.active = false));

    const index = active.findIndex((e) => e.type === item.type);
    active[index].active = !active[index].active;
    setActive([...active]);
  }

  async function getFavorites(item: filterType) {
    setActiveMood(item);

    const { endpoint } = item;
    console.log(endpoint);
    const result = await favorites(endpoint);
    setData(result.items);
  }

  return { active, getFavorites, data };
}
