const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({include:[Product]}).then(categories => res.status(200).json(categories)).catch(err => res.status(400).json(err))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {include:[Product]}).then(category => {
    if(!category){
      return res.status(404).json('There is no category associated with that id')
    }
    res.status(200).json(category)}).catch(err => res.status(400).json(err))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(category => res.status(201).json(category)).catch(err => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.params.id).then(category => res.status(201).json(category)).catch(err => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.params.id).then(category => res.status(201).json(category)).catch(err => res.status(400).json(err));
});

module.exports = router;
