export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIPE_SECRET: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
