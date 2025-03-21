import { env } from '@/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './rds/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  },
});
