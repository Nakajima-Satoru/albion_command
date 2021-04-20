module.exports={

    /**
     * static contents rouintg
     */
    assets:{        
        "/assets":"webroot",
    },

    /**
     * release page scope
     */
     releaseScope:true,

    /**
     * release page routing
     */
     release:{
        "/":{
            "/":"main@index",
            "/aaa":"main@aaa",
            "/bbb":"main@bbb",
            "/ccc":"main@ccc",
            "/ccc/{:id}":"main@ccc_in",
            "/ddd/eee":"main@ddee",
            "/eee/{:id?}":"main@eee",
            "/fff/{:id}/{:id2}":"page@fff",
            "/form":"form@index",
            "/validate":"validate@index",
            "/table":"table@index",    
        },
        "/test":{
            "/aaa":"test/main@index",
            "/method":function(ro,syncs){
                
                syncs.wait();

                setTimeout(function(){

                    ro.echo("callback method test!");
                    syncs.next();

                },3000);

            },
        },
    },

    /**
     * error page scope
     */
     errorScope:true,

    /**
     * error page routing
     */
     error:{
        "/":{
            "Error":"error@index",
        },
        "/test":{
            "Error":"test/error@index",
        },
    },
  
    /**
     * shell routing
     */
    shell:{
        "/":"main@index",
        "/aaa":"main@aaa",    
        "/aaa":"test/main@aaa",
    },

    /**
     * shell Error routing
     */
    shellError:{
        "Error":"error@index",
    },

};