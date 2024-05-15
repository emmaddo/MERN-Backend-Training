import app from "./Index";
import { DataBase } from "./Config/database";

const { ConnectDatabase } = new DataBase();
const db: Promise<void> = ConnectDatabase();

db.then(() => {
    // Database connected, now start listening
    app.listen(3000, () => {
        console.log("Server is running on port 3000 YES");
    });
}).catch(error => {
    console.error("Failed to connect to database:", error);
});
