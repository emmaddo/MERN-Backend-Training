import pino from "pino";

export = pino({
    transport: {
        target: "pino-pretty",
        options: {
            translateTime: "UTC:yyyy-mm-dd HH:MM:ss.l o",
            colorize: true,
            singleLine: true,
            messageFormat: true,
            crlf: true
        }
    }
});