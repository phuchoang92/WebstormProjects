
require('dotenv').config()
import config from 'config';
import "reflect-metadata"
import { DataSource } from "typeorm"

const postgresConfig = config.get<{
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}>('postgresConfig');

export const AppDataSource = new DataSource({
    ...postgresConfig,
    type: "postgres",
    synchronize: false,
    logging: false,
    entities: ['src/entities/**/*.entities{.ts,.js}'],
    migrations: ['src/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscribers/**/*{.ts,.js}'],
})
