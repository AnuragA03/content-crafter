// This file is needed during the initialization of the database, now we can delete it to prevent exposing

export default {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out: './drizzle',

    dbCredentials: {
        url: "postgresql://contentcraftai_owner:jPbWxE0Zst8Y@ep-lively-silence-a5iq1nse.us-east-2.aws.neon.tech/contentcraftai?sslmode=require",
        connectionString: "postgresql://contentcraftai_owner:jPbWxE0Zst8Y@ep-lively-silence-a5iq1nse.us-east-2.aws.neon.tech/contentcraftai?sslmode=require",
    },
}