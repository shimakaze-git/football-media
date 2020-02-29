const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");
const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");
// dotenv.load();

// 接続するFirebaseのデータベースURL
var config = {
  databaseURL: dotenv.config()["parsed"]["DATABASE_URL"]
};
firebase.initializeApp(config);
const database = firebase.database();

// configure algolia
const algolia = algoliasearch(
  //←Algoliaの「Application ID」
  dotenv.config()["parsed"]["APPLICATION_ID"],
  //←Algoliaの「Admin API Key」
  dotenv.config()["parsed"]["ADMIN_API_KEY"]
);
//接続するAlgoliaのindex名
const index = algolia.initIndex("sample");

// console.log("dotenv", dotenv.config());
// console.log("firebase", firebase);

//変更を反映する範囲を指定する今回は[msg]以下に変化があった場合に反映させている。
const contactsRef = database.ref("/msg");
contactsRef.on("child_added", addOrUpdateIndexRecord);
contactsRef.on("child_changed", addOrUpdateIndexRecord);
contactsRef.on("child_removed", deleteIndexRecord);

//　「contactsRef」の中で新しいデータが追加されたらAlgoliaのindexに反映する関数。
function addOrUpdateIndexRecord(contact) {
  const record = contact.val();
  record.objectID = contact.key;

  index
    .saveObject(record)
    .then(() => {
      console.log("Firebase object indexed in Algolia", record.objectID);
    })
    .catch(error => {
      console.error("Error when indexing contact into Algolia", error);
      process.exit(1);
    });
}

//　「contactsRef」の中でデータが削除されたらAlgoliaのindexに反映する関数。
function deleteIndexRecord(contact) {
  const objectID = contact.key;

  index
    .deleteObject(objectID)
    .then(() => {
      console.log("Firebase object deleted from Algolia", objectID);
    })
    .catch(error => {
      console.error("Error when deleting contact from Algolia", error);
      process.exit(1);
    });
}
