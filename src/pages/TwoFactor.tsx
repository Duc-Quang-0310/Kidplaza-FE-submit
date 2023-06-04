import PinInput from "react-pin-input";
import { Button } from "antd";
import { Link } from "react-router-dom";
import cl from "clsx";
import { ROUTE_PATH } from "../constants/Route.const";
import s from "./System.module.css";
import PhoneImg from "../Image/phone.png";

const TwoFactor = () => {
  return (
    <section className={s.AllTypeForm}>
      <div className={cl(s.phoneContainer, s.flexCenter)}>
        <img src={PhoneImg} alt="Phone" width={100} height={150} />
      </div>
      <h2
        style={{
          marginTop: "1.5rem",
        }}
      >
        Two-Factor Verification
      </h2>
      <h5
        style={{
          marginBottom: "1rem",
        }}
      >
        Enter the verification code we send to
      </h5>
      <h4>******7859</h4>
      <strong>Try your 6 digit security code</strong>
      <PinInput
        length={6}
        secret
        secretDelay={100}
        type="numeric"
        inputMode="number"
        inputStyle={{
          color: "rgba(0, 0, 0, 0.88)",
          border: "1px solid #d9d9d9",
          borderRadius: 8,
          width: 60,
          height: 60,
        }}
        inputFocusStyle={{ borderColor: "#4096ff" }}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
      <div className={cl(s.flexCenter, s.mt)}>
        <Button
          type="primary"
          style={{ width: 100 }}
          className={cl(s.actionButton)}
        >
          Submit
        </Button>
      </div>
      <p>
        Didn't get the code? <a href="">Resend</a> or <a href="">Call us</a>
      </p>
      <footer>
        <div>English</div>
        <ul>
          <li>
            <a href="http://localhost:5173/terms" target="_blank">
              Terms
            </a>
          </li>
          <li>
            <Link to={ROUTE_PATH.signUp}>Plans</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.signUp}>Contact Us</Link>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default TwoFactor;
