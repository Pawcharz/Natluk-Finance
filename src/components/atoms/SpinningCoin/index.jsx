// SCSS
import "./SpinningCoin.scss";

import slowSrc from "./logo-NC-spinning-slow.gif";
import fastSrc from "./logo-NC-spinning-fast.gif";

const SpinningCoin = ({ isFast = false, floating = false }) => {
    return <img className={"spinning-coin" + " " + (floating && "spinning-coin--floating")} src={isFast ? fastSrc : slowSrc} />;
};

export default SpinningCoin;
