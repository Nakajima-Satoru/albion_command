module.exports={

    assets:{        
        "/assets":"assets",
    },

    release:{
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

    error:{
        "Error":"error@index",
    },
    
};