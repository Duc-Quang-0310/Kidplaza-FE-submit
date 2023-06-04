export const messages = {
  EMAIL_NOT_EMPTY: "Email should't be empty",
  PASSWORD_NOT_EMPTY: "Password shouldn't be empty",
  REPEAT_PW_NOT_EMPTY: "Password repeat shouldn't be empty",
  SHOULD_ACCEPT_TERM: "You must accept the terms to continue",
  WRONG_EMAIL_FORMAT: "Wrong email format, please try again",
  PASSWORD_NOT_MATCH: "Password repeat don't match, please try again",
};

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const EMAIL_REGEX_2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
