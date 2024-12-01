const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');

// Get all users
//router.get('/', (req, res) => {
//  res.json({ usuarios: usuarioRepository.findAll() });
//});

router.get('/', async (req, res) => {
  try {
    const usuarios = await usuarioRepository.findAll();
    res.json( usuarios );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/login', async (req, res) => {
  try {
    const { email, senha } = req.query;

    //console.log('Parâmetros recebidos:', { email, senha }); // Verifica os parâmetros

    const user = await usuarioRepository.findOne({ email, senha });
    //console.log('Resultado da consulta:', user); // Loga o resultado da consulta

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (err) {
    console.error('Erro no login:', err); // Loga erros
    res.status(500).json({ error: err.message });
  }
});


// Retorna o usuario pelo id
router.get('/:id', async (req, res) => {
  try {
    const user = await usuarioRepository.findById(req.params.id);
    if (user) {
      res.json( user );
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






// Cria uma nova vaga
router.post('/', async (req, res) => {
  try {
    const user = await usuarioRepository.create(req.body);
    res.status(201).json( user );
  } catch (user) {
    res.status(500).json({ error: err.message });
  }
});

// Faz Update de uma vaga
router.put('/:id', async (req, res) => {
  try {
    const user = await usuarioRepository.update(req.params.id, req.body);
    if (user) {
      res.json( user );
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Deleta uma vaga
router.delete('/:id', async (req, res) => {
  try {
    const user = await usuarioRepository.remove(req.params.id);
    if (user) {
      res.json( user );
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;