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
            "/page/other_view":"page@otherView",
            "/page/time_lag":"page@time_lag",

            "/page/redirect":"page@redirect",
            "/page/redirected":"page@redirected",

            "/404test":"page@errNotfound",
            "/500test":"page@errInternalServerError",

            "/validate/1":"validate@index1",
            "/validate/2":"validate@index2",
            "/validate/3":"validate@index3",
            "/validate/4":"validate@index4",
            "/validate/5":"validate@index5",

            "/table":"table@index",
            "/table/regist":"table@edit",
            "/table/edit/{:id}":"table@edit",
            "/table/delete/{:id}":"table@delete",
            "/table/dustbox":"table@dustBox",
            "/table/revert/{:id}":"table@revert",
            "/table/physical_delete":"table@physicalDelete",
            
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