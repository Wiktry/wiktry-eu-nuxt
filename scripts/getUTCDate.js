const getUTCDate = () => {
  const today = new Date();
  let tmp = String(today.getUTCFullYear());
  let date = tmp + "-";
  tmp = String(today.getUTCMonth() + 1)
  date += tmp.length === 1 ? "0" + tmp + "-" : tmp + "-";
  tmp = String(today.getUTCDate())
  date += tmp.length === 1 ? "0" + tmp : tmp;
  
  return date;
}

export default getUTCDate;