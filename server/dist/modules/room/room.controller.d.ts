import type { Request, Response } from "express";
declare const getAllRooms: (req: Request, res: Response) => Promise<void>;
declare const getHomeRooms: (req: Request, res: Response) => Promise<void>;
declare const getDetailsRoom: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const roomController: {
    getAllRooms: typeof getAllRooms;
    getHomeRooms: typeof getHomeRooms;
    getDetailsRoom: typeof getDetailsRoom;
};
export {};
//# sourceMappingURL=room.controller.d.ts.map