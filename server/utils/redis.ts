import Redis from "ioredis";
require("dotenv").config();

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log("redis connected");
    const URL = `rediss://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`;
    return URL;
  } else {
    throw new Error("Redis connection failed");
  }
};

export const redis = new Redis(redisClient());
