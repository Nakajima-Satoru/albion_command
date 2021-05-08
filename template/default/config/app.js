module.exports={

    /**
     * debug mode
     */
    debugMode:true,

    /**
     * require module cache
     */
    requireCache:false,

    /**
     * require module check
     */
    requireCheck:true,

    /**
     * garbage Collection Interval (second)
     */
    // garbageCollectionInterval:60,

    /**
     * default port number
     */
    port:1234,
    
    /**
     * host name
     */
    host:"localhost",

    /**
     * default response header
     */
    responseHeader:{
        "Content-Type":"text/html ;charset=UTF-8",
    },

    /**
     * assets mime type
     */
    assetsMimeType:{
        "jpg":"image/jpg",
        "png":"image/png",
        "gif":"image/gif",
        "css":"text/css",
    },

    /**
     * assets Control Cache
     */
    assetsControlCache:"max-age=3600",

    /**
     * useClass
     */
    useClass:[
        "Controller",
        "Model",
        "Validator",
        "Table",
        "TableView",
        "Pack",
        "Ui",
        "Render",
        "Shell",
    ],

    /**
     * log
     */
    log:{
        access:{
            file:"access.log",
            format:"[[datetime]] [method] [requestUrl] [responseCode] [remoteIp]",
        },
        error:{
            file:"error.log",
            format:"[[datetime]] [method] [requestUrl] [responseCode] [remoteIp] [content]",
        },
    },

    /**
     * database connection
     */
    database:require(__dirname+"/database.js"),

    /**
     * routing
     */
    routing:require(__dirname+"/routing.js"),

};