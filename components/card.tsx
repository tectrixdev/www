import { motion } from "motion/react";

interface Props {
  title: string;
  content: string;
  transparency: number;
  color: string;
}

const Card: React.FC<Props> = ({ title, content, transparency, color }) => {
  return (
    <motion.div
      id={`Card.${title}`}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 100, y: 0, scale: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      className="h-48 w-full rounded-lg border-2 border-slate-300 bg-black/50 backdrop-blur-md md:h-96 md:w-64"
    ></motion.div>
  );
};

export default Card;
