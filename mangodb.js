// const { MongoClient, ObjectId } = require("mongodb");

// const connectionURL = "mongodb://localhost:27017";
// const databaseName = "task-manager";

// // const id = new ObjectId();
// // console.log(id.id.length);
// // console.log(id.toHexString().length);

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (error, client) => {
//     if (error) {
//       return console.log("unable to connect to database");
//     }
//     const db = client.db(databaseName);
//     // db.collection("users").deleteMany({
//     //   age: 23,
//     // }).then((res) => {
//     //   console.log(res);

//     // }).catch((err) => {
//     //   console.log(err);
//     // });
//     db.collection("tasks")
//       .deleteOne({
//         description: "clean house",
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     // db.collection("users")
//     // .updateOne(
//     //   {
//     //     _id: new ObjectId("5f2f155b47f00b1090e56094"),
//     //   },
//     //   {
//     //     // $set: {
//     //     //   name: "Mike",
//     //     // },
//     //     $inc: {
//     //       age: 1,
//     //     },
//     //   }
//     // )
//     // .then((res) => {
//     //   console.log(res);
//     // })
//     // .catch((err) => {
//     //   console.log(err);
//     // });

//     // db.collection("tasks")
//     //   .updateMany(
//     //     {
//     //       completed: false,
//     //     },
//     //     {
//     //       $set: {
//     //         completed: true,
//     //       },
//     //     }
//     //   )
//     //   .then((res) => {
//     //     console.log(res);
//     //   })
//     //   .catch(() => {
//     //     console.log(err);
//     //   });

//     // db.collection("users").findOne(
//     //   { _id: new ObjectId("5f2f155b47f00b1090e56094") },
//     //   (error, user) => {
//     //     if (error) {
//     //       return console.log("unable to fetch");
//     //     }

//     //     console.log(user);
//     //   }
//     // );

//     // db.collection("users")
//     //   .find({ age: 22 })
//     //   .toArray((error, users) => {
//     //     console.log(users);
//     //   });

//     // db.collection("tasks").findOne(
//     //   { _id: new ObjectId("5f2f9b722ed50f0c90dbb36c") },
//     //   (error, user) => {
//     //     if (error) {
//     //       return console.log("unable to fetch");
//     //     }

//     //     console.log(user);
//     //   }
//     // );

//     // db.collection("tasks")
//     //   .find({ completed: false })
//     //   .toArray((error, users) => {
//     //     console.log(users);
//     //   });

//     // db.collection("tasks")
//     //   .find({ completed: false })
//     //   .count((error, count) => {
//     //     console.log(count);
//     //   });

//     // db.collection("users").insertOne(
//     //   {
//     //     _id: id,
//     //     name: "moanh",
//     //     age: 55,
//     //     time: id.getTimestamp(),
//     //   },
//     //   (err, res) => {
//     //     if (err) {
//     //       return console.log("unable to connect to database");
//     //     }
//     //     console.log(res.ops[0]);
//     //   }
//     // );

//     // db.collection("users").insertMany(
//     //   [
//     //     {
//     //       name: "othman",
//     //       age: 22,
//     //     },
//     //     {
//     //       name: "ahmed",
//     //       age: 22,
//     //     },
//     //     {
//     //       name: "mohamed",
//     //       age: 22,
//     //     },
//     //   ],
//     //   (err, res) => {
//     //     if (err) {
//     //       return console.log("unable to connect to database");
//     //     }
//     //     console.log(res.ops[0]._id);

//     //     console.log(res.ops[0]);
//     //   }
//     // );

//     // db.collection("tasks").insertMany(
//     //   [
//     //     {
//     //       description: "clean house",
//     //       completed: false,
//     //     },
//     //     {
//     //       description: "clean living room",
//     //       completed: false,
//     //     },
//     //     {
//     //       description: "clean bed",
//     //       completed: true,
//     //     },
//     //   ],
//     //   (err, res) => {
//     //     if (err) {
//     //       return console.log("unable to connect to database");
//     //     }
//     //     console.log(res.ops[0]._id);

//     //     console.log(res.ops[0]);
//     //   }
//     // );
//   }
// );
