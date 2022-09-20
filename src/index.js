const express = require('express')
const globalConstants = require('./const/globalConstants.js')
const routerConfig = require('./routes/index.routes.js')

let errorHandler = require('./middlewares/error')
let createError = require('http-errors')

const configuracionApi = (app) => { 
    app.use(express.json()) 
    app.use(express.urlencoded({ extended: true }))
  
  };

  const configuracionRouter = (app) => {
    app.use('/v1/', routerConfig.rutas_init())
    
    app.use(function(req, res, next){
      next(createError(404))
    })
    
    app.use(errorHandler)
  }; 

const init = () => {
    const app = express()
  
    configuracionApi(app)
    configuracionRouter(app)
  
    app.listen(globalConstants.PORT)
    console.log('La aplicacion se está ejecutando en el puerto:' + globalConstants.PORT)
  };

  init();