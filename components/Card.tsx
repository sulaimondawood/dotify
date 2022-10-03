import style from "../styles/components/card.module.css";
const Card = ({
  title,
  img,
  desc,
}: {
  img: string | undefined;
  title: string | undefined;
  desc: string;
}) => {
  return (
    <div className={style.card}>
      <img className={style.card_img} src={img} alt="image" />
      {/* <p>{title}</p> */}
      <p className={style.desc}>{desc}</p>
    </div>
  );
};

export default Card;
