import mongoose from "mongoose";
import { LogDatabaseErrorStatus, LogDatabaseSuccessStatus } from "../Utility/LogService/LogWithColors";

export class DataBase {
    async ConnectDatabase(): Promise<void> {
        try {
            await mongoose.connect(`${process.env.MONGO_DB_CONNECTION_STRING}`);
            const connectedDbName = mongoose.connection.name;
            LogDatabaseSuccessStatus(`Database connection successful. Database name is ${connectedDbName}`);
        } catch (error) {
            LogDatabaseErrorStatus(error);
        }
    }
}
