// import mongoose from 'mongoose'

// export default defineNitroPlugin(async (nitroApp) => {
//     // mongoose.connect(useRuntimeConfig().MONGODB_URI)
//     // // mongoose.connect(process.env.MONGODB_URI)
//     // console.log("Successfully connected to MongoDB!")
//     try {
//         mongoose.connect(useRuntimeConfig().MONGODB_URI)
//         // mongoose.connect(process.env.MONGODB_URI)
//         console.log("Successfully connected to MongoDB!")
//     } catch (e) {
//         console.error("Failed to connect to MongoDB:", e);
//         // Важно, чтобы приложение не продолжало работать без подключения к БД
//         process.exit(1);
//     }
// })

// import { MongoClient, Db } from "mongodb";

// let mongoClient: MongoClient | null = null;
// let db: Db | null = null;

// export default defineNitroPlugin(async (nitroApp) => {
//     // Выполняем подключение только один раз
//     if (!mongoClient) {
//         const uri = process.env.MONGODB_URI;
//         if (!uri) {
//             throw new Error(
//                 "MONGODB_URI is not defined in environment variables."
//             );
//         }

//         try {
//             mongoClient = new MongoClient(uri);
//             await mongoClient.connect();
//             db = mongoClient.db();
//             console.log("Successfully connected to MongoDB!");

//             // Добавляем обработчик для graceful shutdown
//             nitroApp.hooks.hook("close", async () => {
//                 if (mongoClient) {
//                     await mongoClient.close();
//                     console.log("MongoDB connection closed.");
//                 }
//             });
//         } catch (e) {
//             console.error("Failed to connect to MongoDB:", e);
//             // Важно, чтобы приложение не продолжало работать без подключения к БД
//             process.exit(1);
//         }
//     }

//     // Добавляем MongoDB-клиент и объект базы данных в контекст запроса
//     nitroApp.hooks.hook("request", (event) => {
//         if (db && mongoClient) {
//             event.context.mongoClient = mongoClient;
//             event.context.db = db;
//         }
//     });
// });

// mongodb+srv://neoweb24_db_user:OOpsZlY5WX7mv3lR@cluster0.yh3pumq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://neoweb24_db_user:OOpsZlY5WX7mv3lR@cluster0.yh3pumq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
