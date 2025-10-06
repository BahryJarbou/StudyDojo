import { useEffect, useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import axios from "axios";
import hostURL from "../server.js";

const Board = ({ courseID }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`${hostURL}/articles`, {
        headers: { course: courseID },
      })
      .then((res) => setArticles(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex h-full w-full gap-3 overflow-y-scroll">
      <Column
        courseID={courseID}
        title="Articles"
        column="articles"
        headingColor="text-neutral-500"
        articles={articles}
        setArticles={setArticles}
      />
      <BurnBarrel courseID={courseID} setArticles={setArticles} />
    </div>
  );
};

export default Board;
