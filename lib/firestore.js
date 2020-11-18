const admin = require('firebase-admin');
const { config } = require('../config/config');

class Firestore {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(config.googleApplicationCredentials),
    });

    this.db = admin.firestore();
  }

  get(collection, id) {
    return this.db
      .collection(collection)
      .doc(id)
      .get()
      .then((doc) => {
        let data = doc.data();

        return data;
      });
  }

  create(collection, id, data) {
    return this.db.collection(collection).doc(id).set(data);
  }

  update(collection, id, data) {
    return this.db
      .collection(collection)
      .doc(id)
      .update(data)
      .then(() => {
        return this.get(collection, id);
      });
  }

  delete(collection, id) {
    return this.db
      .collection(collection)
      .doc(id)
      .listCollections()
      .then((collections) => {
        collections.forEach((collection) => {
          collection.listDocuments().then((documents) => {
            documents.forEach((document) => {
              document.delete();
            });
          });
        });
      })
      .then(() => {
        this.db.collection(collection).doc(id).delete();
      })
      .catch(() => {
        this.db.collection(collection).doc(id).delete();
      });
  }

  getSubcollection(collection, subcollection, id) {
    return this.db
      .collection(collection)
      .doc(id)
      .collection(subcollection)
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });

        return data;
      });
  }

  createSubcollection(collection, subcollection, id, data) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        return this.db
          .collection(collection)
          .doc(id)
          .collection(subcollection)
          .add(item);
      });
    } else {
      return this.db
        .collection(collection)
        .doc(id)
        .collection(subcollection)
        .add(data);
    }
  }

  deleteSubcollection(collection, subcollection, id) {
    return this.db
      .collection(collection)
      .doc(id)
      .collection(subcollection)
      .listDocuments()
      .then((documents) => {
        documents.forEach((doc) => {
          doc.delete();
        });
      });
  }
}

module.exports = Firestore;
