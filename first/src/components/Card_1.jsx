import "./card_1.css";

export default function Card_1({ cardProp }) {
  const { img1, text1, bold, symbol, text2, img2, text3 } = cardProp;
  return (
    <div className="card-1">
      <img className="img1" src={img1} alt="" />
      <p className="text1">{text1}</p>
      <p className="bold">{bold}</p>
      <p className="p2">
        <span className="text2">{symbol}</span>
        <span className="text2">{text2}</span>
        <img className="img2" src={img2} alt="img" />
        <span className="text3">{text3}</span>
      </p>
    </div>
  );
}
