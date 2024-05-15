import colors from "colors";
import logger from "../Logger/Logger";
//import mongoose from "mongoose";

//export function LogDatabaseSuccessStatus<T extends typeof mongoose>(connection: T): void {
    export function LogDatabaseSuccessStatus(message: string): void {    
//logger.info(colors.green(`Database connected. Connection Host: ${(connection).connection.host}`));
logger.info(colors.green(`Database connected. ${message}`));

}

export function LogDatabaseErrorStatus<T extends any>(error: T): void {
    logger.error(colors.red(`[⚠️] An error occurred. Error message: ${(error as any).message}`));
}