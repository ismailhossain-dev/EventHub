interface Iuser {
    name: string;
    email: string;
    password: string;
}
declare const createUser: (payload: Iuser) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    role: import("../../generated/prisma/enums.js").Role;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteUser: (email: string) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    role: import("../../generated/prisma/enums.js").Role;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getUserByEmail: (email: string) => Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
    role: import("../../generated/prisma/enums.js").Role;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const userService: {
    createUser: typeof createUser;
    deleteUser: typeof deleteUser;
    getUserByEmail: typeof getUserByEmail;
};
export {};
//# sourceMappingURL=user.service.d.ts.map