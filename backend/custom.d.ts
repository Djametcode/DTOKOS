export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      MONGO_URL: string;
      JWT_TIMES: string;
      API_KEY: string;
      API_SECRET: string;
      CLOUD_NAME: string;
    }
  }
  namespace Express {
    interface Request {
      user: {
        userId: string;
        email: string;
      }
    }
  }
}
