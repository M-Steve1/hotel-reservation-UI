import Header from "../header/Header";

interface Props {
  style: CSSModuleClasses;
  children: string;
  url: string;
}

const RoomsHeader = ({ style, children, url }: Props) => {
  return (
    <div className={style["rooms-header"]}>
      <div className={style["overlay"]}></div>
      <img src={url} alt="" />
      <div className={style["header"]}>
        <Header />
        <h2>{children}</h2>
      </div>
    </div>
  );
};

export default RoomsHeader;
