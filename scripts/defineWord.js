import WordList from '../assets/WordList.json';

const randomNumber = () => {
  const today = new Date();

  const date = today.getUTCDate()
             * today.getUTCMonth()
             * (today.getUTCFullYear() - today.getUTCDate());
  
  return date % WordList.length;
}

const defineWord = () => (
  WordList[randomNumber()].toLowerCase()
)

export default defineWord;