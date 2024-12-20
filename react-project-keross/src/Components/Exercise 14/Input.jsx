export default function Input({ richText, placeholder }) {
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements

  return (
    <>
      {!richText && <input placeholder={placeholder}></input>}
      {richText && <textarea placeholder={placeholder}></textarea>}
    </>
  );
}
