const permute = function (nums) {
  const res = [];

  const walk = (temp, rest) => {
    console.log('inside walk' + temp);
    if (rest.length == 0) {
      res.push(temp);
      console.log(res);
      console.log('Inside final' + rest);
    }

    for (let i = 0; i < rest.length; i++) {
      const newRest = rest.slice(0);
      console.log(newRest);
      newRest.splice(i, 1);
      console.log(newRest);
      walk(temp.concat(rest[i]), newRest);
    }
  };

  walk([], nums);
  return res;
};

permute([1, 2, 3]);
