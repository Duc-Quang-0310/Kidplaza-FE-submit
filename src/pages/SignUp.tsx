import { Button, Form, Input, Checkbox, Spin, message, Upload } from "antd";
import { FormEvent, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import s from "./System.module.css";
import { ROUTE_PATH } from "../constants/Route.const";
import { EMAIL_REGEX, messages } from "../constants/message.const";
import { useImageUpload } from "../hooks/useImageUpload";

interface SignUpError {
  email: string | null;
  password: string | null;
  repeatPassword: string | null;
  acceptTerm: string | null;
}

interface SignUpForm {
  email: string;
  password: string;
  repeatPassword: string;
  acceptTerm: boolean;
}

const DEFAULT_ERROR: SignUpError = {
  email: null,
  password: null,
  repeatPassword: null,
  acceptTerm: null,
};

const SignUp = () => {
  const { beforeUpload, handleChangeImage, imgLoading, imgUrl } =
    useImageUpload();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<SignUpError>(DEFAULT_ERROR);
  const [signUpForm, setSignUpForm] = useState<SignUpForm>({
    acceptTerm: true,
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChangeFormValue = (
    value: string | boolean,
    name: keyof SignUpForm
  ) => {
    if (typeof value === "boolean") {
      setSignUpForm((prev) => ({ ...prev, acceptTerm: value }));
    } else {
      setSignUpForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    let errOccur = false;
    let defaultError = { ...error };
    const { acceptTerm, email, password, repeatPassword } = signUpForm;

    if (!email || !password || !repeatPassword || !acceptTerm) {
      errOccur = true;

      defaultError = {
        email: !email ? messages.EMAIL_NOT_EMPTY : null,
        password: !password ? messages.PASSWORD_NOT_EMPTY : null,
        repeatPassword: !repeatPassword ? messages.REPEAT_PW_NOT_EMPTY : null,
        acceptTerm: !acceptTerm ? messages.SHOULD_ACCEPT_TERM : null,
      };
    }

    const emailMatchTemplate = email?.toLowerCase()?.match(EMAIL_REGEX);

    if (!emailMatchTemplate) {
      errOccur = true;
      defaultError.email = messages.WRONG_EMAIL_FORMAT;
    }

    if (
      password?.trim()?.toLowerCase() !== repeatPassword?.trim()?.toLowerCase()
    ) {
      errOccur = true;
      defaultError.repeatPassword = messages.PASSWORD_NOT_MATCH;
    }

    setError(defaultError);
    setLoading(false);

    if (!errOccur) {
      setError(DEFAULT_ERROR);
      // HANDLE SUCCESS
      navigate(ROUTE_PATH.twoFactor);
      return null;
    }
  };

  const canUserSubmit = useMemo(() => {
    const { email, password, repeatPassword } = signUpForm;
    return (
      email.length === 0 ||
      password.length === 0 ||
      repeatPassword.length === 0 ||
      imgUrl.length === 0
    );
  }, [imgUrl.length, signUpForm]);

  return (
    <div className={s.AllTypeForm}>
      <section className={s.AllTypeForm}>
        <h2>Sign Up</h2>
        <h5>Your Social Campaigns</h5>
        <div className={s.btnGroup}>
          <Button>Sign in with Google</Button>
          <Button>Sign in with Apple</Button>
        </div>
        <div className={s.seperateLine} />
        <Form onSubmitCapture={handleSubmit}>
          <div>
            <Input
              status={error.email ? "error" : ""}
              placeholder="Email"
              max={190}
              maxLength={190}
              disabled={loading}
              value={signUpForm.email}
              onChange={(e) => handleChangeFormValue(e.target.value, "email")}
            />
            {error.email ? (
              <div className={s.ErrMessage}>{error.email}</div>
            ) : null}
          </div>
          <div>
            <Input
              status={error.password ? "error" : ""}
              placeholder="Password"
              type="password"
              value={signUpForm.password}
              onChange={(e) =>
                handleChangeFormValue(e.target.value, "password")
              }
              max={190}
              maxLength={190}
              disabled={loading}
            />
            {error.password ? (
              <div className={s.ErrMessage}>{error.password}</div>
            ) : null}
          </div>
          <div>
            <Input
              status={error.repeatPassword ? "error" : ""}
              placeholder="Repeat password"
              value={signUpForm.repeatPassword}
              onChange={(e) =>
                handleChangeFormValue(e.target.value, "repeatPassword")
              }
              type="password"
              max={190}
              maxLength={190}
              disabled={loading}
            />
            {error.repeatPassword ? (
              <div className={s.ErrMessage}>{error.repeatPassword}</div>
            ) : null}
          </div>
          <div>
            <Upload
              name="avatar"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChangeImage}
              style={{
                width: "100%",
              }}
              disabled={loading || imgLoading}
            >
              {imgUrl ? (
                <img
                  src={imgUrl}
                  alt="Image upload"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div>
                  {imgLoading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </div>
          <div>
            <Checkbox
              disabled={loading}
              onChange={(e) =>
                handleChangeFormValue(e.target.checked, "acceptTerm")
              }
              checked={signUpForm.acceptTerm}
            >
              I Accept the
              <a
                href="http://localhost:5173/terms"
                target="_blank"
                style={{
                  marginLeft: 5,
                }}
              >
                Terms
              </a>
            </Checkbox>
            {error.acceptTerm ? (
              <div className={s.ErrMessage}>{error.acceptTerm}</div>
            ) : null}
          </div>
          <Button
            disabled={loading || canUserSubmit}
            type="primary"
            className={s.actionButton}
            htmlType="submit"
          >
            {loading ? <Spin /> : "Sign In"}
          </Button>
        </Form>
        <p>
          Already have an Account <Link to={ROUTE_PATH.signIn}>Sign in</Link>
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
    </div>
  );
};

export default SignUp;
