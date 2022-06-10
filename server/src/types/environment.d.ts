export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIPE_SECRET: string;
      PORT: string;
      WEB_URL:string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
