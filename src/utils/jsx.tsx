export const replaceLineBreakers = (text: string) => {
  return text && text.split('\n').map(t => (
    <>
      { t }
      <br />
    </>
  ));
};
