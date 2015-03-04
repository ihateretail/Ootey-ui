/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

//products seed
var Product = require('../api/product/product.model');

Product.find({}).remove(function(){
   Product.create({
     sku: "SK10048",
     qty: "21",
     name: "ScottKay Diamond Ring",
     price: "299.00",
     vendor: "Gulianis Fine Jewelery",
     vendorId : "GFJ94555",
     description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>",
     brandName: "Scott Kay",
     category:{},
     url:"",
     //originFullUrl: "/GFJ/{id}/rings",
     images: [
       {
         "sizeName": "Small",
         "url": "media/product/thumbnail/sk10048.jpg"
       },
       {
         "sizeName": "Large",
         "url": "media/product/thumbnail/sk10048.jpg"
       }
     ],
     imagesAlt: [
       {
         "url": "media/product/thumbnail/sk10048_alt.jpg"
       }
     ]

   },
     {
       sku: "SK10049",
       qty: "21",
       name: "ScottKay Diamond Ring",
       price: "299.00",
       vendor: "Gulianis Fine Jewelery",
       vendorId : "GFJ94555",
       description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>",
       brandName: "Scott Kay",
       category:{},
       url:"",
       //originFullUrl: "/GFJ/{id}/rings",
       images: [
         {
           "sizeName": "Small",
           "url": "media/product/thumbnail/sk10049.jpg"
         },
         {
           "sizeName": "Large",
           "url": "media/product/thumbnail/sk10049.jpg"
         }
       ],
       imagesAlt: [
         {
           "url": "media/product/thumbnail/sk10049_alt.jpg"
         }
       ]

     },
     {
       sku: "SK10050",
       qty: "21",
       name: "ScottKay Diamond Ring",
       price: "299.00",
       vendor: "Gulianis Fine Jewelery",
       vendorId : "GFJ94555",
       description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>",
       brandName: "Scott Kay",
       category:{},
       url:"",
       //originFullUrl: "/GFJ/{id}/rings",
       images: [
         {
           "sizeName": "Small",
           "url": "media/product/thumbnail/sk10050.jpg"
         },
         {
           "sizeName": "Large",
           "url": "media/product/thumbnail/sk10050.jpg"
         }
       ],
       imagesAlt: [
         {
           "url": "media/product/thumbnail/sk10050_alt.jpg"
         }
       ]

     },
     {
       sku: "SK10051",
       qty: "21",
       name: "ScottKay Diamond Ring",
       price: "299.00",
       vendor: "Gulianis Fine Jewelery",
       vendorId : "GFJ94555",
       description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>",
       brandName: "Scott Kay",
       category:{},
       url:"",
       //originFullUrl: "/GFJ/{id}/rings",
       images: [
         {
           "sizeName": "Small",
           "url": "media/product/thumbnail/sk10051.jpg"
         },
         {
           "sizeName": "Large",
           "url": "media/product/thumbnail/sk10051.jpg"
         }
       ],
       imagesAlt: [
         {
           "url": "media/product/thumbnail/sk10051_alt.jpg"
         }
       ]

     }
   );
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
      role:'vendor'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
