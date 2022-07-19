import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [EmojiArray, setEmojiArray] = useState<string[]>(["👻", "🤠"])

  const handleHowdy = () => {
    shiftEmojiWith("🤠");
  };

  const handleLaugh = () => {
    shiftEmojiWith("😀");
  };

  const handleApple = () => {
    shiftEmojiWith("🍎");
  };

  const shiftEmojiWith = (emoji: string): void => {
    const currentEmojiArray = EmojiArray.length > 4 ? EmojiArray.slice(1) : EmojiArray
    setEmojiArray(() => [...currentEmojiArray, emoji]);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <button onClick={handleHowdy}>🤠</button>
      <button onClick={handleLaugh}>😀</button>
      <button onClick={handleApple}>🍎</button>
      {
        EmojiArray.map((emoji, index) => <p key={index}>Emoji {index + 1}: {emoji}</p>)
      }
      <hr />
    </>
  );
}
