import { motion } from "motion/react";

export default function Yap() {
  return (
    <motion.p
      className="text-md my-5 justify-center self-center px-20 text-justify text-white"
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 100, y: 0, scale: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      porttitor nisl efficitur non. Nam et risus facilisis, cursus elit vitae,
      sagittis tellus. Ut quis consequat lorem. Sed eu pulvinar ligula. Nulla
      dolor risus, rutrum id mattis id, lacinia a nunc. Ut posuere libero a
      neque fringilla, et commodo dolor molestie. Vivamus varius magna eget
      pharetra feugiat. Proin viverra sapien lorem, vitae eleifend orci
      condimentum quis. Fusce iaculis sollicitudin pharetra. Duis sollicitudin
      ac nibh ut interdum. Nunc condimentum eros urna, et tempor ipsum imperdiet
      vitae. Quisque accumsan tortor ex. Proin scelerisque tortor nec sem mattis
      aliquet ut vitae leo. In rhoncus hendrerit semper. Duis venenatis quis
      dolor in egestas. Mauris sed lectus eget felis vehicula pharetra at ut ex.
      Mauris magna mauris, sagittis eget quam quis, dapibus dignissim orci.
      Aenean non porttitor dui. Nunc tristique diam purus, a rutrum purus
      aliquet in.
    </motion.p>
  );
}
