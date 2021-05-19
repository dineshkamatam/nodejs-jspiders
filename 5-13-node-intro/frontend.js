let {nodejsframeworks} = require("./backend");

module.exports = {
  JsFrameworks: ["Angular", "vuejs"],
  cssFrameworks: ["bootstrap", "symanticui", "bluma", "tailwind"],
  libraries: ["react", "jquery"],
  backendframework: nodejsframeworks("nodejs", "expressjs"),
};
