import Link from "next/link";
import style from "../styles/components/card.module.css";
const Card = ({
  title,
  img,
  desc,
  key,
}: {
  img: string | undefined;
  title: string | undefined;
  desc: string;
  key: any;
  // url: string;
}) => {
  return (
    <Link href={"/song/" + "615447735"}>
      <div className={style.card}>
        <img className={style.card_img} src={img} alt="image" />
        <p className={style.desc}>{desc}</p>
      </div>
    </Link>
  );
};

export default Card;
