export {};
declare global {
  namespace Express {
    interface User {
      readerId: string;
    }
  }
}