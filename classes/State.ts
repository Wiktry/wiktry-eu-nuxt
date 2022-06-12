class State {
  id: number;
  row: number;
  value: string;
  res: number;
  
  constructor(id = 0, row = 0, value = '', res = 0) {
    this.id = id;
    this.row = row;
    this.value = value;
    this.res = res;
  }
}

export default State;