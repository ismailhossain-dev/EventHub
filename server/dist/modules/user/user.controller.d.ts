import { type Request, type Response } from "express";
declare const createUser: (req: Request, res: Response) => Promise<void>;
declare const deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const getUserByEmail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const userController: {
    createUser: typeof createUser;
    deleteUser: typeof deleteUser;
    getUserByEmail: typeof getUserByEmail;
};
export {};
//# sourceMappingURL=user.controller.d.ts.map