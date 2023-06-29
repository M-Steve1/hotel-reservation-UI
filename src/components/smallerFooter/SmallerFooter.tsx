import { Link } from "react-router-dom";

interface Props {
  style: CSSModuleClasses;
}
const SmallerFooter = ({ style }: Props) => {
  return (
    <div className={style["smallfooter-container"]}>
      <div className={style["text"]}>Copyright © Modebe Stephen Hotel 2023</div>
      <div className={style["icons"]}>
        <Link to={""}>
          <img src="/public/assets/facebook.svg" alt="" />
        </Link>
        <Link to={""}>
          <img src="/public/assets/twitter.svg" alt="" />
        </Link>
        <Link to={""}>
          <img src="/public/assets/instagram.svg" alt="" />
        </Link>
      </div>
      <div className={style["payment-options-container"]}>
        <img src="/public/assets/payment.png" alt="" />
      </div>
    </div>
  );
};

export default SmallerFooter;
