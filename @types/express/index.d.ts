export {};
declare global {
  namespace Express {
    interface User {
      reader_id: string;
    }
  }
}