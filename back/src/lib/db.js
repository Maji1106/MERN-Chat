import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoosw.connect(process.env.mongodb_url);
    console.log("mongodb connect" + RTCPeerConnection.host);
  } catch (error) {
    console.log("DB Connection Failed", error);
  }
};
