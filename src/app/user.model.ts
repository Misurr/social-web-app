export class User {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  repeatPassword: string;

  constructor(
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string,
    repeatPassword: string
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.repeatPassword = repeatPassword;
  }
}
