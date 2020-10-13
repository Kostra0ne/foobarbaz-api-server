const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  mongoose.connection.on("connected", () =>
    console.log("yay mongodb connected :)")
  );

  mongoose.connection.on("error", () =>
    console.log("nay db connection error :(")
  );
} catch (dbErr) {
  console.eeror(dbErr);
}
