import 'cookie-session';

declare module 'cookie-session' {
  interface CookieSessionObject {
    email?: string;
  }
}

declare module 'express-session' {}
