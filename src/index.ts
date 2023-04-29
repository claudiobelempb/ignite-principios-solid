import express from "express";
import swaggerUI from "swagger-ui-express";

import swaggerDocument from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/users", usersRoutes);

export { app };
