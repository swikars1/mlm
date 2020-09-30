const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const isArray = a => Array.isArray(a);

const isObject = o => o === Object(o) && !isArray(o) && typeof o !== 'function';

const snakeToCamel = o => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        n[toCamel(k)] = snakeToCamel(o[k]);
      });

    return n;
  } else if (isArray(o)) {
    return o.map((i) => {
      return snakeToCamel(i);
    });
  }

  return o;
};

export default snakeToCamel
