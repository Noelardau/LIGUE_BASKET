const {Sequelize, Model, DataTypes, DATEONLY, ENUM} = require('sequelize');


const sequelize = new Sequelize('LRBBHMStat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' ,
    define : {
        freezeTableName : true
    }
});


class Joueur extends Model {}
Joueur.init({
    IDJoueur : {
        type : DataTypes.INTEGER,
        autoIncrement : true, 
        primaryKey : true
    },
    NomJoueur : {
        type : DataTypes.STRING(100)
    }, 
    PrenomJoueur : {
        type : DataTypes.STRING(100)
    }, 
    NumJoueur : {
        type : DataTypes.INTEGER
    }, 
    CIN : {
        type : DataTypes.STRING(16), 
        unique : true
    } , 
    DAN : {
        type : DataTypes.DATEONLY
    }
}, {sequelize}); 


class JOUER extends Model {}
JOUER.init({
    TotalPointMarques : DataTypes.INTEGER, 
    TirRates : DataTypes.INTEGER , 
    TirReussis : DataTypes.INTEGER, 
    DuelsGagnes : DataTypes.INTEGER , 
    BlocksRealises : DataTypes.INTEGER , 
    PasseD : DataTypes.INTEGER , 
    PerteDeBalle : DataTypes.INTEGER, 
    TempsJoues : DataTypes.INTEGER , //en secondes 
}, {sequelize}); 

class RENCONTRE extends Model {}
RENCONTRE.init({
    idRencontre : {
        type : DataTypes.INTEGER, 
        primaryKey : true, 
        autoIncrement : true
    } , 
    LieuRencontre : DataTypes.STRING , 
    DateRencontre : DataTypes.DATEONLY, 
    HeureRencontre : DataTypes.TIME,
    // tsy awatsika ze resy sy mandresy
}, {sequelize});

RENCONTRE.belongsToMany(Joueur , { through : JOUER , uniqueKey : false}); 
Joueur.belongsToMany(RENCONTRE , { through : JOUER , uniqueKey : false});

class Categorie extends Model {} 
Categorie.init({
    idCategorie : {
        primaryKey : true , 
        type : DataTypes.INTEGER , 
        autoIncrement : true
    }, 
    label : {
        type : ENUM('U10','U12','U14','U16','U18','U20','U22','U24','N1B','N1A','VT','OPEN'),
        allowNull : false 
    }
}, {sequelize}); 

Categorie.hasMany(Joueur);
Joueur.belongsTo(Categorie);
Categorie.hasMany(RENCONTRE);
RENCONTRE.belongsTo(Categorie);


class EQUIPE extends Model {}
EQUIPE.init({
    RefEquipe : {
        type : DataTypes.INTEGER, 
        autoIncrement : true, 
        primaryKey : true
    },
    NomEquipe : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Contact : {
        type : DataTypes.STRING, 
        allowNull : false
    }, 
    Origine : {
        type : DataTypes.STRING, 
        allowNull : false
    }
    
}, {sequelize});


class EFFECTUER extends Model {}
EFFECTUER.init({}, {sequelize});


EQUIPE.hasMany(Joueur);
Joueur.belongsTo(EQUIPE);
RENCONTRE.belongsToMany(EQUIPE, {through : EFFECTUER, uniqueKey: false});
EQUIPE.belongsToMany(RENCONTRE, {through : EFFECTUER, uniqueKey: false});



class Tournoi extends Model {}
Tournoi.init({
    NomTournoi : {
        type : DataTypes.STRING, 
        allowNull : false
    }, 
    RefTournoi : {
        type : DataTypes.INTEGER, 
        primaryKey : true, 
        autoIncrement : true
    },
    DateDebutTournoi : {
        type : DataTypes.DATEONLY, 
        allowNull : false
    }, 
    DateFinTournoi: {
        type : DataTypes.DATEONLY ,
        allowNull : false
    }, 
    LieuTournoi : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {sequelize});



class APPARTENIR extends Model {}
APPARTENIR.init({}, {sequelize});

class PARTICIPER extends Model {}
PARTICIPER.init({}, {sequelize});


// Equipe to Tournoi
Tournoi.belongsToMany(EQUIPE,{through : PARTICIPER, uniqueKey : false});
EQUIPE.belongsToMany(Tournoi, {through : PARTICIPER, uniqueKey : false});
// Rencontre to tournoi
Tournoi.hasMany(RENCONTRE);
RENCONTRE.belongsTo(Tournoi);


class Coach extends Model {}
Coach.init({
    NomCoach : {
        type : DataTypes.STRING, 
        allowNull : false 
    }, 
    idCoach : {
        primaryKey : true, 
        type : DataTypes.INTEGER, 
        autoIncrement : true
    }, 
    ContactCoach : {
        type : DataTypes.STRING , 
        allowNull : false
    }, 
    CINCoach : {
        type : DataTypes.STRING , 
        allowNull : false , 
        unique : true
    }
}, {sequelize});


// Coach to Equipe

EQUIPE.hasMany(Coach);
Coach.belongsTo(EQUIPE);

sequelize.sync();

// Exports 
exports.Appartenir = APPARTENIR ;
exports.Categorie = Categorie; 
exports.Coach = Coach ; 
exports.Effectuer = EFFECTUER; 
exports.Equipe = EQUIPE; 
exports.Jouer = JOUER ; 
exports.Joueur = Joueur; 
exports.Participer = PARTICIPER ;
exports.Rencontre = RENCONTRE; 
exports.Tournoi = Tournoi ; 
exports.db = sequelize;





