const replaceAt = (word, index, repl) => {
  return word.substring(0, index) + repl + word.substring(index + repl.length);
}

const compare = (word: string, key: string): Array<number> => {
  /*
  
  test hello with lorgh
  test h with lorgh gives 5 and lorg_
  test e with lorg_ gives _ and lorg_
  test l with lorg_ gives 1 and _org_
  test l with _org_ gives _ and _org_
  test o with _org_ gives 2 and __rg_

  if number matches its poisiton it's green
  if not it's yellow

  */

  let tmp_w = word;
  let tmp_v = key;
  let tmp_r = 0;
  let tmp = [];

  // First check only for correctly placed letters
  for (let i = 0; i < 5; i++) {
    if (tmp_v.charAt(i) === tmp_w.charAt(i)) {
      tmp.push(1);
      tmp_r += 1;

      tmp_v = replaceAt(tmp_v, i, " ");
      tmp_w = replaceAt(tmp_w, i, " ");
    }
    else {
      tmp.push(3);
      tmp_r += -1;
    }
  }
  
  // Then check for used but wrongly placed letters
  for (let i = 0; i < 5; i++) {
    if (tmp_w.charAt(i) !== " " && tmp_v.includes(tmp_w.charAt(i))) {
      tmp[i] = 2;
      tmp_r += -1;

      tmp_v = replaceAt(tmp_v, tmp_v.indexOf(tmp_w.charAt(i)), " ");
    }
    tmp_w = replaceAt(tmp_w, i, " ");
  }

  tmp.push(tmp_r);

  return tmp;
}

export default compare;