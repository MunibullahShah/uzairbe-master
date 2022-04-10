module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Test1ng!'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl:false
        // ssl: {
          // rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
        // },
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});