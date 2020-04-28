const router = require('express').Router();

const { Product, Category, Tag, ProductTag } = require('../../models');

// get all products
router.get('/', (req, res) => {
  Product.findAll({
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag
      }
    ]
  })
    .then(products => res.json(products))
    .catch(err => res.status(400).json(err));
});

// get one product
router.get('/:id', (req, res) => {
  Product.findByPk(req.params.id, {
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag
      }
    ]
  })
    .then(products => res.json(products))
    .catch(err => res.status(400).json(err));
});

// creat new product
router.post('/', (req, res) => {
  
  const tagIds = req.body.tagIds.split(',');

  Product.create(req.body)
    .then(product => {
      if (tagIds.length) {
        const productTagIdArr = tagIds.map(TagId => ({ ProductId: product.id, TagId }));
        console.log(productTagIdArr);
        return ProductTag.bulkCreate(productTagIdArr);
      }
      res.status(200).json(product);
    })
    .then(productTagIds => res.status(200).json(productTagIds))
    .catch(err => {
      console.log(err);
      res.status(400).json(err)
    });
});

// update product
router.put('/:id', (req, res) => {
  const tagIds = req.body.tagIds.split(',');
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(product => {
      // find all associated tags from producttag
      return ProductTag.findAll({ where: { ProductId: req.params.id }, raw: true });
    })
    .then(productTags => {
      console.log(productTags);
      console.log(`tag id ${req.body.tagIds}`)
      const [{ProductId, TagId}] = productTags.filter(({ TagId }) => {
        console.log(TagId);
        return tagIds.includes(TagId.toString()) === false;
      });
      
      return ProductTag.destroy({ where: { ProductId, TagId } });
    })
    .then(destroyedId => res.status(200).json(destroyedId))
    .catch(err => {
      console.log(err);
      res.status(404).json(err)
    });
});

router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(products => {
      console.log(products);
      res.json(products);
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
