export interface bodyRequest {
  username: String;
  password: String;
}

export interface bodyRequestByUpdate {
  username: String;
  password: String;
  newUsername: String;
  newPassword: string;
}
