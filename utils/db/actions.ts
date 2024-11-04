import { db } from './dbConfig'
import { eq, sql, desc } from 'drizzle-orm'
import { Users, Subscriptions, GeneratedContent } from './schema'

export async function createOrUpdateUser(
    clerkUserId: string,
    email: string,
    name: string
) {
    try {
        const [existingUser] = await db
            .select()
            .from(Users)
            .where(eq(Users.stripeCustomerId, clerkUserId))
            .limit(1)
            .execute();

        if(existingUser){
            // Update the user
            const [updatedUser] = await db
                .update(Users)
                .set({name, email})
                .where(eq(Users.stripeCustomerId, clerkUserId))
                .returning()
                .execute();
        }

        const [newUser] = await db
            .insert(Users)
            .values({
                email, name, stripeCustomerId:clerkUserId, points: 50
            })
            .returning()
            .execute();

        console.log("New user crated", newUser);

        // Sending Welcome email using mailtrap





    } catch (error) {
        console.log("error creating new user", error);
        return null;
    }
}