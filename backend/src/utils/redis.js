import ioredis from 'ioredis';

const redis = new ioredis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

redis.on('connect', () => {
    console.log("Redis connect");

})

redis.on("ready", () => {
    console.log("🚀 Redis ready to use");
});

redis.on('error', (err) => {
    console.log('error : ', err);

})

// const test = async () => {
//   await redis.set("test_key", "hello");
//   const value = await redis.get("test_key");
//   console.log("Redis Value:", value);
//   process.exit();
// };

// test();


export { redis }