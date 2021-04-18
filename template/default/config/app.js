module.exports={

    /**
     * debug mode
     */
    debugMode:true,

    /**
     * default port number
     */
    port:12345,
    
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
        "Model",
        "Validator",
        "Table",
        "TableView",
        "Pack",
        "UI",
    ],

    /**
     * log
     */
    log:{
        access:{
            file:"access.log",
            format:"[datetime] [method][ [requestUrl] [responseCode] [remoteIp]",
        },
        error:{
            file:"access.log",
            format:"[datetime] [method] [requestUrl] [errorName] [errorMessage]",
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