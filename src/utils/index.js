import { surpriseMePropmt } from "../constants";

const getRandomPrompt = () => {
  const randomIndex = Math.floor(Math.random() * surpriseMePropmt.length);
  const randomPrompt = surpriseMePropmt[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);
};

export default getRandomPrompt;
