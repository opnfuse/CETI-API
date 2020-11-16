const express = require('express');
const CetiService = require('../services/ceti');
const scrapper = require('../utils/scrapper/app');

const cetiApi = (app) => {
  const router = express.Router();
  app.use('/api', router);

  const cetiService = new CetiService();

  router.get('/:idToken', async (req, res, next) => {
    const { idToken } = req.params;

    try {
      const user = await cetiService.getUser({ idToken });

      res.status(200).json({
        data: user,
        message: 'User retrieved successfully',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/:idToken', async (req, res, next) => {
    const { idToken } = req.params;
    const { body: user } = req;

    try {
      await cetiService.createUser(user, { idToken });

      res.status(201).json({
        id: idToken,
        message: 'User created successfully',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:idToken', async (req, res, next) => {
    const { idToken } = req.params;
    const { body: user } = req;

    try {
      const updatedUser = await cetiService.updateUser(user, { idToken });

      res.status(200).json({
        data: updatedUser,
        message: 'User updated successfully',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:idToken', async (req, res, next) => {
    const { idToken } = req.params;

    try {
      await cetiService.deleteUser({ idToken });

      res.status(200).json({
        message: 'User deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:idToken/all', async (req, res, next) => {
    const { idToken } = req.params;

    try {
      const data = await cetiService.getAll({ idToken });

      res.status(200).json({
        data: data,
        message: 'All data successfully retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:idToken/:subcollection', async (req, res, next) => {
    const { idToken } = req.params;
    const { subcollection } = req.params;

    try {
      const data = await cetiService.getCollection(subcollection, { idToken });

      res.status(200).json({
        data: data,
        message: 'Subcollection retrieved successfully',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/:idToken/all', async (req, res, next) => {
    const { idToken } = req.params;
    const user = await cetiService.getUser({ idToken });
    const subcollection = await scrapper(user.ceti_user, user.ceti_pass);

    if (subcollection !== false) {
      try {
        await cetiService.createSubcollection('info', subcollection[0], {
          idToken,
        });

        await cetiService.createSubcollection(
          'calificaciones',
          subcollection[1],
          { idToken }
        );

        await cetiService.createSubcollection('horario', subcollection[2], {
          idToken,
        });

        res.status(201).json({
          message: 'Subcollections created successfully',
        });
      } catch (error) {
        next(error);
      }
    } else {
      res.status(400).json({
        message: 'Datos del ceti incorrectos',
      });
    }
  });

  router.put('/:idToken/all', async (req, res, next) => {
    const { idToken } = req.params;
    const user = await cetiService.getUser({ idToken });
    const subcollection = await scrapper(user.ceti_user, user.ceti_pass);

    if (subcollection !== false) {
      try {
        await cetiService.deleteSubcollection('inicio', { idToken });
        await cetiService.deleteSubcollection('calificaciones', { idToken });
        await cetiService.deleteSubcollection('horario', { idToken });

        await cetiService.createSubcollection('inicio', subcollection[0], {
          idToken,
        });

        await cetiService.createSubcollection(
          'calificaciones',
          subcollection[1],
          { idToken }
        );

        await cetiService.createSubcollection('horario', subcollection[2], {
          idToken,
        });

        res.status(200).json({
          data: subcollection,
          message: 'Subcollections updated successfully',
        });
      } catch (error) {
        next(error);
      }
    } else {
      res.status(400).json({
        message: 'Datos del ceti incorrectos',
      });
    }
  });

  // router.delete('/:idToken/:subcollection', async (req, res, next) => {
  //   const { idToken } = req.params;
  //   const { subcollection } = req.params;

  //   try {
  //     await cetiService.deleteSubcollection({ subcollection }, { idToken });

  //     res.status(200).json({
  //       message: 'Subcollection deleted successfully',
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // });
};

module.exports = cetiApi;
