const hello = "module";

const a = "b";
const b = false;

export const a = "b";
export { b };

// 모듈 가져올때 import hi from './module'
export default function () {}

// exports.a = "b";
// exports.b = false;

// commonJS 모듈 가져올때 import * as hi from './module'
// module.exports = {
//   a: "b",
//   b: false,
// };
