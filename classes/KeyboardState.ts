import { reactive } from "vue";
import State from "./State";

class KeyboardState {
  index: number;
  row: number;
  rows: Array<string>;
  state: Array<State>;

  constructor() {
    this.index = 0;
    this.row = 0;
    this.rows = ["qwertyuiopå", "asdfghjklöä", "!zxcvbnm?"];
    this.state = reactive([]);

    for (let i of this.rows) {
      for (let key of i) {
        this.state.push(new State(this.index, this.row, key));
        this.index++;
      }
      this.row++;
    }
  }

  getRow(row) {
    const tmp = [];
    for (let element of this.state) {
      if (element.row === row) {
        tmp.push(element);
      }
    }
    return tmp;
  }

  setResult(key, res) {
    this.state.forEach(element => {
      if (element.value === key) {
        if (element.res > res || element.res === 0) {
          element.res = res;
        }
      }
    });
  }

  exists(key) {
    for (let i = 0; i < this.state.length; i++) {
      if (this.state[i].value === key) {
        return true;
      }
    }
    return false;
  }
}

export default KeyboardState;