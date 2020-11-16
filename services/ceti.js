const Firestore = require('../lib/firestore');
// const admin = require('firebase-admin');

class CetiService {
  constructor() {
    this.collection = 'users';
    this.firestore = new Firestore();
  }

  async getUser({ idToken }) {
    // const uid = admin.auth().verifyIdToken(idToken).then((decodedToken) => {ç
    //   return decodedToken.uid
    // })

    const uid = idToken;
    const user = await this.firestore.get(this.collection, uid);
    return user || {};
  }

  async createUser(user, { idToken }) {
    const uid = idToken;
    const createdUserId = await this.firestore.create(
      this.collection,
      uid,
      user
    );
    return createdUserId || '';
  }

  async updateUser(user, { idToken }) {
    const uid = idToken;
    const updatedUser = await this.firestore.update(this.collection, uid, user);

    return updatedUser || {};
  }

  async deleteUser({ idToken }) {
    const uid = idToken;
    await this.firestore.delete(this.collection, uid);
  }

  async getAll({ idToken }) {
    const uid = idToken;
    const collections = {};

    collections['info'] = await this.firestore.getSubcollection(
      this.collection,
      'info',
      uid
    );

    collections['horario'] = await this.firestore.getSubcollection(
      this.collection,
      'horario',
      uid
    );

    collections['calificaciones'] = await this.firestore.getSubcollection(
      this.collection,
      'calificaciones',
      uid
    );

    return collections || [];
  }

  async getCollection(subcollection, { idToken }) {
    const uid = idToken;
    const collection = await this.firestore.getSubcollection(
      this.collection,
      subcollection,
      uid
    );

    return collection || {};
  }

  async createSubcollection(subcollection, data, { idToken }) {
    const uid = idToken;
    const Subcollection = await this.firestore.createSubcollection(
      this.collection,
      subcollection,
      uid,
      data
    );

    return Subcollection || [];
  }

  async deleteSubcollection(subcollection, { idToken }) {
    const uid = idToken;
    await this.firestore.deleteSubcollection(
      this.collection,
      subcollection,
      uid
    );
  }
}

module.exports = CetiService;
