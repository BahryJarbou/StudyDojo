import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";

import { use, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthProvider";
import hostURL from "../server";
import { NavLink } from "react-router";

const Profile = () => {
  const [coursesCount, setCourseCount] = useState(0);
  const [toDosCount, setToDosCount] = useState(0);
  const [toDosFinishedCount, setToDosFinishedCount] = useState(0);
  const [notesCount, setNotesCount] = useState(0);
  const [flashcardsCount, setFlashcardsCount] = useState(0);
  const [articlesCount, setArticlesCount] = useState(0);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("token")}`;

    axios
      .get(`${hostURL}/courses/stats`, { headers: { Authorization: token } })
      .then((res) => setCourseCount(res.data))
      .catch(console.error)
      .finally(() => {});
    console.log(coursesCount);
    axios
      .get(`${hostURL}/todos/stats`, { headers: { Authorization: token } })
      .then((res) => {
        setToDosCount(res.data.toDosCount);
        setToDosFinishedCount(res.data.toDosFinishedCount);
      })
      .catch(console.error);
    axios
      .get(`${hostURL}/notes/stats`, { headers: { Authorization: token } })
      .then((res) => setNotesCount(res.data))
      .catch(console.error);
    axios
      .get(`${hostURL}/flashcards/stats`, { headers: { Authorization: token } })
      .then((res) => setFlashcardsCount(res.data))
      .catch(console.error);
    axios
      .get(`${hostURL}/articles/stats`, { headers: { Authorization: token } })
      .then((res) => setArticlesCount(res.data))
      .catch(console.error);
  }, []);
  return (
    <div className="min-h-screen rounded-2xl bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock
          coursesCount={coursesCount}
          articlesCount={articlesCount}
          notesCount={notesCount}
          flashcardsCount={flashcardsCount}
        />
        <AboutBlock
          toDosCount={toDosCount}
          toDosFinishedCount={toDosFinishedCount}
        />

        <SetUsernameBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  const { user } = use(AuthContext);
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
        alt="avatar"
        className="mb-4 size-14 rounded-full"
      />
      <h2 className="mb-12 text-xs font-medium leading-tight">
        Hi, {user.username}.{" "}
        <span className="text-zinc-400">
          Here is some stats on your cool learning journey! ☺️
        </span>
      </h2>
      <NavLink
        to="/courses"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        get back to learning <FiArrowRight />
      </NavLink>
    </Block>
  );
};

const SocialsBlock = ({
  coursesCount,
  notesCount,
  flashcardsCount,
  articlesCount,
}) => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3 text-xs md:text-md lg:text-lg"
    >
      <div className="grid h-full place-content-center text-xs md:text-md lg:text-lg text-white hover:cursor-default">
        Courses: {coursesCount}
      </div>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <div className="grid h-full place-content-center text-xs md:text-md lg:text-lg text-white hover:cursor-default">
        Notes: {notesCount}
      </div>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-purple-500 md:col-span-3"
    >
      <div className="grid h-full place-content-center text-xs md:text-md lg:text-lg text-white hover:cursor-default">
        Articles: {articlesCount}
      </div>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <div className="grid h-full place-content-center text-xs md:text-md lg:text-lg text-white hover:cursor-default">
        Flashcards: {flashcardsCount}
      </div>
    </Block>
  </>
);

const AboutBlock = ({ toDosCount, toDosFinishedCount }) => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      You also managed to finish {toDosFinishedCount} out of {toDosCount}{" "}
      targets you set for yourself.{" "}
      <span className="text-zinc-400">
        {toDosFinishedCount === 0
          ? "Get your first target done and feel your engine starting!"
          : "That is impressive! but what is important is to keep going and enjoy your journey!"}
      </span>
    </p>
  </Block>
);

// const LocationBlock = () => (
//   <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
//     <FiMapPin className="text-3xl" />
//     <p className="text-center text-lg text-zinc-400">Cyberspace</p>
//   </Block>
// );

const SetUsernameBlock = () => {
  const { user, logout } = use(AuthContext);
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handlechange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = `Bearer ${localStorage.getItem("token")}`;
    axios
      .put(
        `${hostURL}/users/${user._id}`,
        { username },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        setSubmitted(true);
        setTimeout(() => {
          logout();
        }, 5000);
      })
      .catch(console.error);
  };
  return (
    <Block className="col-span-12 flex flex-col gap-2 md:col-span-12">
      <p className="mb-3 text-lg">
        Set your username so we can say hi to you 🫡
      </p>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          onChange={handlechange}
          placeholder="Enter a username"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
        >
          Set User Name
        </button>
      </form>
      {submitted && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>your username is now updated!</span>
        </div>
      )}
    </Block>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Keep going! you got what it takes
      </p>
    </footer>
  );
};

export default Profile;
