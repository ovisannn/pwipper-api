import { createLogger, transports, format } from 'winston'

export const logger = createLogger({
    format: format.combine(
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
        format.printf(info=>`${info.timestamp}`)
    ),
    transports: [
        new transports.File({
            filename: './logs/all-logs.log',
            json: false,
            maxFiles: 5242880,
            maxFiles: 5
        }),
        new transports.Console()
    ]
})