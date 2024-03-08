import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cors and cookie-parser are configure after making app

// cors config
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// accept json and configure it
app.use(
  express.json({
    limit: "16kb",
  })
);

// configuration when data come from url
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

//configuration to store files, image, folder at public assets
app.use(express.static("public"));

// configuration for cookie to access and set
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
// http://localhost:8000/api/v1/users/register

export { app };