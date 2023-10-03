import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Image } from "../components/Image";
import { useCallback } from "react";

// Imagens
import css from "../../assets/img/skills/css.svg";
import git from "../../assets/img/skills/git.svg";
import html from "../../assets/img/skills/hmtl.svg";
import js from "../../assets/img/skills/js.svg";
import mongo from "../../assets/img/skills/mongo.svg";
import mysql from "../../assets/img/skills/mysql.svg";
import node from "../../assets/img/skills/node.svg";
import post from "../../assets/img/skills/post.svg";
import react from "../../assets/img/skills/react.svg";
import sql from "../../assets/img/skills/sql.svg";
import vscode from "../../assets/img/skills/vscode.svg";

const Skills = () => {
  const renderImageUp = useCallback((element: number) => {
    switch (element) {
      case 0:
        return html;
      case 1:
        return css;
      case 2:
        return js;
      case 4:
        return react;
      case 5:
        return vscode;
      case 6:
        return node;
      default:
        return "";
    }
  }, []);
  const renderImageDown = useCallback((element: number) => {
    switch (element) {
      case 0:
        return sql;
      case 1:
        return mysql;
      case 2:
        return post;
      case 4:
        return mongo;
      case 5:
        return git;
      default:
        return "";
    }
  }, []);

  return (
    <section className="w-full h-screen bg-darkGray">
      {/* Tittle and sub-tittle */}

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-white text-center"
      >
        <h1 className="font-baimj text-8xl">Habilidades</h1>
        <h2 className="font-roboto text-base leading mt-4 ">
          Tecnologias que utilizo!
        </h2>
      </motion.div>

      <div>
        {/* {renderImageUp.map((index) => (
          <Image
            alt={"text"}
            className="w-[300px] p-5 "
            objectCover=""
            image={renderImageUp(index)}
          />
        ))} */}
      </div>
    </section>
  );
};

export default Skills;
