const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({include:[Product]}).then(tags => res.status(201).json(tags)).catch(err => res.status(400).json(err));
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, {include:[Product]}).then(tag => res.status(201).json(tag)).catch(err => res.status(400).json(err));
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(tag => res.status(201).json(tag)).catch(err => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.params.id).then(tag => res.status(201).json(tag)).catch(err => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(req.params.id).then(tag => res.status(201).json(tag)).catch(err => res.status(400).json(err));
});

module.exports = router;
