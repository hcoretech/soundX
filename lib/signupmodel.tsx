// // import Realm from "realm";

// export class  User extends Realm.Object<User>{
//     _id!:Realm.BSON.ObjectId
//     Fullname! :String
//     Email!:String
//     Password!:String

//     static login(Email:string,password:string){
//       // try {
//       //   if(Email.indexOf('@') == -1){
//       //     throw('email not valid check email and try again');
//       //  }

//        return{
//         _id :new Realm.BSON.ObjectId(),
//         Email,
//         password
     
//       }
      // } catch (error) {
      //   return error
      // }      
      
  //   }
  
  //   static schema: Realm.ObjectSchema = {
  //     name: "User",
  //     primaryKey: "_id",
  //     properties: {
  //       _id: "objectId",
  //       Fullname: "string",
  //       Email: "string",
  //       Password : "string"
  //     },
  //   };
    
  
  // }