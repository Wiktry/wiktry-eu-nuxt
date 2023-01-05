import WordList from '../assets/WordList.json';

const randomNumber = () => {
  const today = new Date();

  const date = (today.getUTCDate() + 1)
             * (today.getUTCMonth() + 1)
             * (today.getUTCFullYear() - today.getUTCDate());
  
  return date % WordList.length;
}

const defineWord = () => (
  WordList[randomNumber()].toLowerCase()
)

export default defineWord;