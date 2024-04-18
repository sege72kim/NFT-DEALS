import "./style.css";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <div className="left-header">
        <h1 className="header__title">
          <strong>Hamster Exchange</strong>
        </h1>
        <div className="header__text">
          <p>
            <FormattedMessage id="garant" />
          </p>
        </div>
      </div>
      <div className="right-header">
        <Link to="/history">
          <div className="rectangle-button">
            <FormattedMessage id="cmplttr" />
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Header;
