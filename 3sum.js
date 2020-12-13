const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const anagram = (strs = []) => {
  const map = new Map();
  for (let str of strs) {
    const count = Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      count[str.charCodeAt(i) - 97] += 1;
    }
    const sorted = count.join('');
    if (map.has(sorted)) map.get(sorted).push(str);
    else map.set(sorted, [str]);
  }

  return Array.from(map.values());
};

console.log(anagram(strs));
