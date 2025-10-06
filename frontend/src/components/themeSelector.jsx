import { FiChevronDown } from "react-icons/fi";
import { IoMdColorPalette } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

const ThemeSelector = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center z-50">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center btn rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl transition-colors"
        >
          <span className="font-medium">Theme</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%]"
        >
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="light" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="dark" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="cupcake" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="bumblebee" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="emerald" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="corporate" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="synthwave" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="retro" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="cyberpunk" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="valantine" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="halloween" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="garden" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="forest" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="aqua" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="lofi" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="pastel" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="fantasy" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="wireframe" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="black" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="luxury" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="darcula" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="cmyk" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="autumn" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="business" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="acid" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="lemonade" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="night" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="coffee" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="winter" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="dim" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="nord" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="sunset" />
          <Option
            setOpen={setOpen}
            Icon={IoMdColorPalette}
            text="caramellatte"
          />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="abyss" />
          <Option setOpen={setOpen} Icon={IoMdColorPalette} text="silk" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={(e) => {
        setOpen(false);
        localStorage.setItem("theme", e.target.value);
        document.getElementById("studyDojo").setAttribute("data-theme", text);
      }}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-accent text-info hover:text-secondary transition-colors cursor-pointer theme-controller"
      value={`${text}`}
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default ThemeSelector;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.02,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.02,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
