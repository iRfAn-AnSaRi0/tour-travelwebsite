import mongoose from "mongoose"

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Db connected");

    } catch (error) {
        console.log("error : ", error);

    }
}

export { dbConnection };