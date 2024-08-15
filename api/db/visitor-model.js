import  mongoose  from "mongoose";

const Visitors = mongoose.model("visitors",
    mongoose.Schema(
        {
            name: String,
            visitorcount: Number
        },
        {
            versionKey: false
        }
    )
);

export default Visitors;