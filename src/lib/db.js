// import { db } from "@vercel/postgres";

// export default async function handler(request, response) {
//   const client = await db.connect();

//   try {
//     await client.sql`
//      DO $$
//      BEGIN
//        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'availability_status') THEN
//          CREATE TYPE availability_status AS ENUM ('Available', 'Booked', 'Under Maintenance');
//        END IF;
//      END $$;

//     await client.sql`
//       CREATE TABLE IF NOT EXISTS Rooms (
//         id SERIAL PRIMARY KEY,
//         room_number INT UNIQUE NOT NULL,
//         room_type VARCHAR(50) NOT NULL,
//         description TEXT,
//         price_per_night NUMERIC(10, 2) NOT NULL,
//         max_occupancy INT NOT NULL,
//         availability_status availability_status DEFAULT 'Available',
//         created_at TIMESTAMP DEFAULT NOW(),
//         updated_at TIMESTAMP DEFAULT NOW();
//     )`;

//     return response.status(200).json({ message: "Table created successfully" });
//   } catch (error) {
//     return response.status(500).json({ error: error.message });
//   } finally {
//     client.release();
//   }
// }
