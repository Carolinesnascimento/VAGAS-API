const Vaga = require('../models/vaga');

async function findAll() {
  try {
    return await Vaga.findAll();
  } catch (error) {
    throw new Error('Error fetching all jobs: ' + error.message);
  }
}

async function findById(id) {
  try {
    return await Vaga.findByPk(id);
  } catch (error) {
    throw new Error('Error fetching job by id: ' + error.message);
  }
}

async function create({ titulo, descricao, dataCadastro, telefone, status, empresa }) {
  try {
    return await Vaga.create({ titulo, descricao, dataCadastro, telefone, status, empresa });
  } catch (error) {
    throw new Error('Error creating job: ' + error.message);
  }
}




async function update(id, { titulo, descricao, dataCadastro, telefone, status, empresa }) {
  //try {
    const vaga = await vaga.findByPk(id);
    if (vaga) {
      vaga.titulo = titulo;
      vaga.descricao = descricao;
      vaga.dataCadastro = dataCadastro;
      vaga.telefone = telefone;
      vaga.status = status;
      vaga.empresa = empresa;
      await vaga.save();
      return vaga;
    }
    return null;
 // } catch (error) {
 //   throw new Error('Error updating job: ' + error.message);
 // }
}

async function remove(id) {
  try {
    const job = await Vaga.findByPk(id);
    if (job) {
      await job.destroy();
      return job;
    }
    return null;
  } catch (error) {
    throw new Error('Error deleting job: ' + error.message);
  }
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};

/*
let vagas = [];

function create({descricao, titulo, dataCadastro,telefone, empresa}) {  
    const vaga = {
        id: uuidv4(),
        descricao,
        titulo,
        dataCadastro,
        telefone,
        empresa
    };
    vagas.push(vaga);
    return vaga;
}

function update(id, {descricao, titulo, dataCadastro,telefone, empresa}) {
    const index = vagas.findIndex(vaga => vaga.id === id);
    if (index === -1) {
        return null;
    }
    vagas[index] = {
        id,
        descricao,
        titulo,
        dataCadastro,
        telefone,
        empresa
    };
    return vagas[index];
}

function remove(id) {
    const index = vagas.findIndex(vaga => vaga.id === id);
    if (index === -1) {
        return false;
    }
    vagas.splice(index, 1);
    return true;
}

function findAll() {
    return vagas;
}

module.exports = {
    create,
    update,
    remove,
    findAll
}*/