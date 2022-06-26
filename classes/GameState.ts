import { reactive } from 'vue';
import { getLocalStorage, putLocalStorage } from '../scripts/localStorage';
import getUTCDate from '../scripts/getUTCDate';
import WordList from '../assets/WordList.json';
import compare from '../scripts/compare';
import State from './State';
import KeyboardState from './KeyboardState';

interface IOptions {
  state: Array<State>;
  index: number;
  currentWord: string;
  currentLength: number;
  firstTime: boolean;
  firstRun: boolean;
  isRunning: boolean;
  date: string;
}

class GameState {
  state: Array<State>;
  index: number;
  currentWord: string;
  currentLength: number;
  firstTime: boolean;
  firstRun: boolean;
  isRunning: boolean;
  date: string;

  constructor({ state, index, currentWord, currentLength, firstTime, firstRun, isRunning, date }: IOptions = { state: [], index: 0, currentWord: '', currentLength: 0, firstTime: true, firstRun: true, isRunning: true, date: getUTCDate() }) {
    this.state = reactive(state);
    this.index = index;
    
    this.currentWord = currentWord;
    this.currentLength = currentLength;

    this.firstTime = firstTime;
    this.firstRun = firstRun;
    this.isRunning = isRunning;
    this.date = date;

    this.#createState();
  }

  #createState() {
    if (this.state.length !== 0)
      return;

    for (let i = 0; i < 35; i++) {
      this.state.push(new State(this.currentLength, this.index, ''));
      if (this.currentLength < 4) {
        this.currentLength++;
      } else {
        this.currentLength = 0;
        this.index++;
      }
    }
    this.currentLength = 0;
    this.index = 0;
  }

  // Create a new class object from a json string
  static from( options: IOptions) {
    if (options) {
      return new GameState(options);
    } else {
      return null;
    }
  }

  // Add a new letter through a new State
  addLetter(letter: string) {
    if (this.currentLength < 5) {
      this.state[this.currentLength + (this.index * 5)].value = letter;
      this.currentWord += letter;
      this.currentLength++;
      return 1;
    }
    return 0;
  }

  // Remove the last added letter i.e. backspace
  removeLetter() {
    if (this.currentLength > 0) {
      this.state[(this.currentLength - 1) + (this.index * 5)].value = '';
      this.currentWord = this.currentWord.slice(0, -1);
      this.currentLength--;
      return 1;
    }
    return 0;
  }

  getRow(row: number) {
    const tmp = {id: row, value: []};
    this.state.forEach(element => {
      if (element.row === row) {
        tmp.value.push(element);
      } else if (element.row > row) {
        return tmp;
      }
    });
    return tmp;
  }

  /**
   * Compare the given word with the wordlist and the correct word
   * 
   * Return codes:
   * 0 = Word too short
   * 1 = Word found
   * 2 = Word not found
   * 
   * Result codes:
   * 0 = Base
   * 1 = Match
   * 2 = Wrong place
   * 3 = No match
   */
  compareWords(key: string, store: any) {
    if (this.currentLength === 5) {
      if (WordList.find(element => element.toLocaleLowerCase() === this.currentWord)) {
        const result = compare(this.currentWord, key);

        // Set the res to the appropriate result
        for (let i = 0; i < 5; i++) {
          const index = i + (this.index * 5);
          this.state[index].res = result[i];
        }

        this.currentWord = "";
        this.currentLength = 0;
        this.index++;

        this.firstRun = false;
        this.firstTime = false;

        if (result[result.length-1] === 5) {
          this.isRunning = false;
          store.isRunning = false;
          this.saveResult();
          store.getStats();
        }

        this.saveState();
        store.setRowResult(this.index - 1, 1);
        return 1;
      }
      store.setRowResult(this.index, 2);
      return 2;
    }
    return 0;
  }

  // Takes a keyboardState class
  compareResults(keyState: KeyboardState) {
    for (let i = (this.index-1) * 5; i < (this.index * 5); i++) {
      keyState.setResult(this.state[i].value, this.state[i].res);
    }
  }

  reSetResults(keyState: KeyboardState) {
    for (let i = 0; i < (this.index) * 5; i++) {
      keyState.setResult(this.state[i].value, this.state[i].res);
    } 
  }


  getState() {
    return {
      state: this.state,
      index: this.index,
      currentWord: this.currentWord,
      currentLength: this.currentLength,
      firstTime: this.firstTime,
      firstRun: this.firstRun,
      isRunning: this.isRunning,
      date: this.date
    }
  }

  saveState() {
    const tmp = this.getState();
    putLocalStorage('gameState', tmp);
  }

  saveResult() {
    let results: Map<string, number> = getLocalStorage('statistics');
    if (!results) {
      results = new Map();
    }

    // Ensure today doesn't already exist
    // To stop people from removing the saved gamestate and getting a better result
    // They could just modify the stats, but eh
    if (results.size && results.get(getUTCDate()) !== undefined) {
      return;
    }

    console.log(results);
    results.set(this.date, this.index);
    putLocalStorage('statistics', results);
  }
}

const defineGameState = (keyState: KeyboardState, store: any) => {
  const gameState = GameState.from(getLocalStorage('gameState'));
  if (gameState && gameState.date === getUTCDate()) {
    gameState.firstRun = true;
    store.isRunning = gameState.isRunning;
    gameState.reSetResults(keyState);
    console.log(gameState);
    console.log(keyState);
    return gameState;
  } else {
    store.isRunning = true;
    return new GameState();
  }
}

export default defineGameState;