import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [EmojiOneFromCurrentRender, queueRerenderWithNewEmojiOne] =
    useState("👻");
  const [EmojiTwoFromCurrentRender, queueRerenderWithNewEmojiTwo] =
    useState("🤠");

  const handleHowdy = () => {
    shiftEmojiWith("🤠")
  }

  const handleLaugh = () => {
    shiftEmojiWith("😀")
  }

  const handleApple = () => {
    shiftEmojiWith("🍎")
  }

  const shiftEmojiWith = (emoji: string): void => {
    queueRerenderWithNewEmojiOne(EmojiTwoFromCurrentRender)
    queueRerenderWithNewEmojiTwo(emoji)
  }

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Emoji 1: {EmojiOneFromCurrentRender}</p>
      <p>Emoji 2: {EmojiTwoFromCurrentRender}</p>
      <button onClick={handleHowdy}>🤠</button>
      <button onClick={handleLaugh}>😀</button>
      <button onClick={handleApple}>🍎</button>
      <hr />
    </>
  );
}
