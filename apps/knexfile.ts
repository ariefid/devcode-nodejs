import * as dotenv from 'dotenv';
import type { Knex } from 'knex';

// Update with your config settings.
dotenv.config();
const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.MYSQL_HOST || '127.0.0.1',
            port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DBNAME || 'todo',
        },
        pool: {
            min: 0,
            max: 150,
            destroyTimeoutMillis: 100,
            idleTimeoutMillis: 100,
            reapIntervalMillis: 100,
            createRetryIntervalMillis: 400,
            acquireTimeoutMillis: 10000,
            createTimeoutMillis: 10000,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    staging: {
        client: 'mysql2',
        connection: {
            host: process.env.MYSQL_HOST || '127.0.0.1',
            port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DBNAME || 'todo',
        },
        pool: {
            min: 0,
            max: 150,
            destroyTimeoutMillis: 100,
            idleTimeoutMillis: 100,
            reapIntervalMillis: 100,
            createRetryIntervalMillis: 400,
            acquireTimeoutMillis: 10000,
            createTimeoutMillis: 10000,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    production: {
        client: 'mysql2',
        connection: {
            host: process.env.MYSQL_HOST || '127.0.0.1',
            port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DBNAME || 'todo',
        },
        pool: {
            min: 0,
            max: 150,
            destroyTimeoutMillis: 100,
            idleTimeoutMillis: 100,
            reapIntervalMillis: 100,
            createRetryIntervalMillis: 400,
            acquireTimeoutMillis: 10000,
            createTimeoutMillis: 10000,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};

module.exports = config;
