import logger from "../Logger/Logger";

export type FunctionLogAppService<N> = {
    port: N,
    callback_function: () => void
};

function LogAppService(port: number): FunctionLogAppService<number> {
    let message: string = `App is running on http://localhost:${port}`;

    return {
        port: port,
        callback_function: function () {
            logger.info(message);
        }
    };
}

export {
    LogAppService
};