const getFullName = (name, surname) => {
  return name + " " + surname;
};

const getSurname = (name, surname) => {
  return surname;
};
module.exports = { getFullName, getSurname };
