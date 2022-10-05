import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongDetails } from "../../features/songDetailsSlice";
import style from "../../styles/page/songDetail.module.css";

const SongDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getSongDetails(router.query.details));
  }, []);
  //   const { data } = useSelector((state: any) => state.data);
  //   console.log(data);

  console.log(String(router.query.details));
  const { data, isLoading } = useSelector((state: any) => state.songDetails);
  console.log(data);

  return isLoading ? (
    "Loading"
  ) : (
    <section className={style.detail_sec}>
      <div className={style.detail_bg}>
        <img src={data?.images?.background} alt="" className={style.img} />
      </div>
      <p className={style.title}>{data?.title}</p>
      <div className={style.info}>
        <p className={style.date}> Release Date: {data?.releasedate}</p>
        {data?.artists.map((artist: { alias: string }, index: number) => {
          return (
            <p key={index} className={style.artists}>
              Artists: {artist?.alias}
            </p>
          );
        })}
      </div>
      {data?.sections[1]?.text?.map((item: string, index: number) => {
        return (
          <p key={index} className={style.lyrics}>
            {item}
          </p>
        );
      })}
      <div className={style.footer}>{data?.sections[1]?.footer}</div>
    </section>
  );
};

export default SongDetails;
