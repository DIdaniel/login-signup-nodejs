"use strict";
// MVC 중 c = controller section

const home = (req, res) => {
  res.render(`home/index`);
};

const login = (req, res) => {
  res.render(`home/login`);
};

module.exports = {
  home,
  login,
};
