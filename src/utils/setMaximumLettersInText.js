export default function setMaximumLettersInText(text, maximum_letters) {
  if (text.length < maximum_letters - 1) {
    return text;
  }

  const new_text = text.substring(0, maximum_letters);

  return `${new_text}...`;
}
