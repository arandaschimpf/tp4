import express from 'express';
const router = express.Router();
import Contador from '../models/Contador';

// Ruta para obtener el contador
router.get('/', async (req, res) => {
  try {
    let counter = await Contador.findOne();
    if (!counter) {
      counter = new Contador();
      await counter.save();
    }
    console.log('Valor del contador obtenido:', counter.value);
    res.json(counter);
  } catch (err) {
    console.error('Error al obtener el contador:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Ruta para incrementar el contador
router.post('/increment', async (req, res) => {
  try {
    let counter = await Contador.findOne();
    if (!counter) {
      counter = new Contador();
      await counter.save();
    }
    counter.value += 1;
    await counter.save();
    console.log('Valor del contador incrementado:', counter.value);
    res.json(counter);
  } catch (err) {
    console.error('Error al incrementar el contador:', err.message);
    res.status(500).json({ message: err.message });
  }
});

export default router;