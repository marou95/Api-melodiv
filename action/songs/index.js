module.exports = function(app){
    return {
        create: require('./create')(app),
        update: require('./update')(app),
        delete: require('./delete')(app),
        list: require('./list')(app),
        getById: require('./getById')(app),
        deleteAll: require('./deleteAll')(app),

    };
};