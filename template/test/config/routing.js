module.exports={

    assets:{        
        "/assets":"webroot",
    },

    pages:{

        release:{
            "/":"main@index",
            "/page":"page@index",
            "/page/{:arg1}/{:arg2?}":"page@argtest",
            "/page/no_render":"page@noRender",
            "/page/no_template":"page@no_template",
            "/404test":"page@errNotfound",
            "/500test":"page@errInternalServerError",
        },
    
        error:{
            "Error":"error@index",
        },
        
    },

    shell:{

        release:{
            "/":"main@index",
        },
    
        error:{
            "Error":"error@index",
        },
        
    },

};