const getHello = (req, res) => {
  if(req.query.name) res.send(`Hello ${req.query.name}`);
  else res.send(`Hello World from 'GET'`);
};

const postHello = (req, res) => {
  res.send(`Hello World from 'POST'`);
};

const helloName = (req, res) => {
  res.send(`Hello ${req.params.name}`);
};

module.exports = {
  getHello,
  postHello,
  helloName,
};
