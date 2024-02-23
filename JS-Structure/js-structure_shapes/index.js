import { getRandomColor } from "./utils/randomColor.js";
import { circle } from "./lib/circle.js";
import { pentagon } from "./lib/pentagon.js";
import { square } from "./lib/square.js";

console.clear();

const root = document.getElementById("root");

root.append(circle, square, pentagon);
