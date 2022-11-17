import mongoose from "mongoose";
const connect = () => {
    mongoose.connect("mongodb+srv://admin:root123@cluster0.vdwwv0j.mongodb.net/?retryWrites=true&w=majority")
    const db = mongoose.connection
    db.on('error', (error) => console.log(error))
    db.once('open', () => console.log("Connected to your Database"))
}
export default connect;
