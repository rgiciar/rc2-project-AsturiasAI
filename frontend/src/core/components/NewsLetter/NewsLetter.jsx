import "/src/core/components/NewsLetter/NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h2 className="tittle-newsletter">Subscribete a nuestro NewsLetter</h2>
      <iframe
        src="https://asturiasai.substack.com/embed"
        width="400"
        height="150"
      ></iframe>
    </div>
  );
};
