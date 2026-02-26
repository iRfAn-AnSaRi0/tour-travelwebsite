import ioredis from 'ioredis';

const redis = new ioredis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
    tls: {}
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


export { redis }