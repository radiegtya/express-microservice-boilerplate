
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 1, name: 'Dicky Indra', address: 'Purwokerto'},
        {id: 2, name: 'Indra Asmara', address: 'Karangpucung'}
      ]);
    });
};
