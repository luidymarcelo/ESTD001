/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed =  function(knex) {
  return knex("livros").del()
  .then(function () {
      return knex("livros").insert([
          {
              titulo: "Web Design para Desenvolvedores",
              autor: "Mauricio Samy",
              ano: 2014,
              preco: 73.00,
              foto: "https://s3.novatec.com.br/capas/9788575223925.jpg"
          },
          {
              titulo: "Proteção de Dados",
              autor: "Desconhecido",
              ano: 2000,
              preco: 50.00,
              foto: "https://s3.novatec.com.br/capas/9786586057843.jpg"
          },
          {
              titulo: "SQL em 5 minutos",
              autor: "Desconhecido",
              ano: 2000,
              preco: 50.00,
              foto: "https://s3.novatec.com.br/capas/9786586057447.jpg"
          },
          {
              titulo: "CSS em grid Layout",
              autor: "Desconhecido",
              ano: 2000,
              preco: 50.00,
              foto: "https://s3.novatec.com.br/capas/9788575226322.jpg"
          },
          {
              titulo: "Python para Análise de Dados",
              autor: "Desconhecido",
              ano: 2000,
              preco: 50.00,
              foto: "https://s3.novatec.com.br/capas/9788575226476.jpg"
          }
      ])
  })
};