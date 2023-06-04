import { Button, Form, Input } from "antd";
import s from "./System.module.css";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../constants/Route.const";

const SignIn = () => {
  return (
    <section className={s.AllTypeForm}>
      <h2>Sign In</h2>
      <h5>Your Social Campaigns</h5>
      <div className={s.btnGroup}>
        <Button>Sign in with Google</Button>
        <Button>Sign in with Apple</Button>
      </div>
      <div className={s.seperateLine} />
      <Form>
        <div>
          <Input placeholder="Email" />
        </div>
        <div>
          <Input placeholder="Password" />
        </div>
      </Form>
      <div className={s.RedirectText}>
        <Link to={ROUTE_PATH.signUp}>Forgot password?</Link>
      </div>
      <Button type="primary" className={s.actionButton}>
        Sign In
      </Button>
      <p>
        Not a member yet? <Link to={ROUTE_PATH.signUp}>Sign up</Link>
      </p>
      <footer>
        <div>English</div>
        <ul>
          <li>
            <Link to={ROUTE_PATH.signUp}>Terms</Link>
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

export default SignIn;
