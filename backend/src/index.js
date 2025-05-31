import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import path from "path" //built-in node (helping in deployment)

import authRoutes from "./routes/auth.route.js" 
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";
import {app,server} from "./lib/socket.js"

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    // origin: "*",
    credentials: true,
})
);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist"))); //Static Files provide karwaega frontend se Jese ki HTML CSS JS Production ke doran

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    }); 
    //This sets up a fallback route for any route not found. If a user navigates to any route (e.g., /about, /contact), it will serve the index.html file from the dist folder. This is important for single-page applications (SPAs), where the frontend is responsible for routing, not the server.
    
  } 

server.listen(PORT, ()=>{
    console.log("Server is running on port:" + PORT);
    connectDB();
});