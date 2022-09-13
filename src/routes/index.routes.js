const { Router } = require("express")
const healthRoutes = require("./health.routes")
const citizensRoutes = require("./citizens.routes")

const rutas_init = () => { 
    const router = Router() 
  
    router.use("/health", healthRoutes)
    router.use("/citizens", citizensRoutes) 

    return router 
  };
  
  module.exports = { rutas_init }