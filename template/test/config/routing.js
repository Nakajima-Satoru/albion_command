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

            "/validate/1":"validate@index1",
            "/validate/2":"validate@index2",
            "/validate/3":"validate@index3",
            
            "/table":"table@index",
            "/table/regist":"table@edit",
            "/table/edit/{:id}":"table@edit",
            
            "/ui/form":"ui@form",
            
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