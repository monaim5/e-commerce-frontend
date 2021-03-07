import DateTimeFormat = Intl.DateTimeFormat;

export interface AuthenticationResponse {
  authenticationToken: string;
  refreshToken: string;
  expiresAt: DateTimeFormat;
  username: string;
}
