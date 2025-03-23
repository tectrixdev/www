import fs from "fs";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");
const Human = fs
  .readdirSync(contentDirectory)
  .map((file) => path.parse(file).name);
const Posts = Human.map((slug) => ({ slug }));
export default Posts;
