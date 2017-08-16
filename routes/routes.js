var chgpass = require('config/chgpass');
var register = require('config/register');
var login = require('config/login');
var liste = require('config/liste');
var recherche = require('config/recherche');
var ajout = require('config/ajout');

module.exports = function(app) {
	app.get('/', function(req, res) {

		res.end(""); 
	});


	app.get('/login',function(req,res){
		var email = req.body.email;
        	var password = req.body.password;

		login.login(email,password,function (found) {
			console.log(found);
			res.json(found);
	});
	});


	app.post('/register',function(req,res){
			var email = req.body.email;
        	var password = req.body.password;
	});
	

	app.post('/api/chgpass', function(req, res) {
		var id = req.body.id;
                var opass = req.body.oldpass;
		var npass = req.body.newpass;

		chgpass.cpass(id,opass,npass,function(found){
			console.log(found);
			res.json(found);
	});	
	});


	app.post('/api/resetpass', function(req, res) {
	
		var email = req.body.email;
		
		chgpass.respass_init(email,function(found){
			console.log(found);
			res.json(found);
	});		
	});
	

	app.post('/api/resetpass/chg', function(req, res) {
	
		var email = req.body.email;
		var code = req.body.code;
		var npass = req.body.newpass;
		
		chgpass.respass_chg(email,code,npass,function(found){			
			console.log(found);
			res.json(found);
	});		
	});

app.get('/voitures', function(req, res) {
		liste.listevoitures(function (found) {
			res.json(found);
		});
	});

app.get('/voituresdisponibles', function(req, res) {
	liste.listevoituresdisponibles(function (found) {
		res.json(found);
	});
});

app.get('/voituresenmission', function(req, res) {
	liste.listevoituresdisponibles(function (found) {
		res.json(found);
	});
});

app.get('/employes', function(req, res) {
	liste.listeemployes(function (found) {
		res.json(found);
	});
});
app.get('/departements', function(req, res) {
	liste.listedepartements(function (found) {
		res.json(found);
	});
});
app.get('/typeutilisateurs', function(req, res) {
	liste.listetypeutilisateurs(function (found) {
		res.json(found);
	});
});
app.get('/typeentretiens', function(req, res) {
	liste.listetypeentretiens(function (found) {
		res.json(found);
	});
});
app.get('/typevoitures', function(req, res) {
	liste.listetypevoitures(function (found) {
		res.json(found);
	});
});
app.get('/parametre', function(req, res) {
	liste.parametre(function (found) {
		res.json(found);
	});
});
app.get('/lieu', function(req, res) {
	liste.lieu(function (found) {
		res.json(found);
	});
});
app.get('/listedemandesnonrepondus', function(req, res) {
	liste.listedemandesnonrepondus(function (found) {
		res.json(found);
	});
});
	

	app.get('/recherchehistoriqueparvoitures', function(req, res) {
		recherche.recherchehistoriqueparvoitures(function (found) {
			res.json(found);
		});
	});


	app.get('/recherchevoiture', function(req, res) {
		recherche.recherchehistoriqueparvoitures(function (found) {
			res.json(found);
		});
	});

	app.get('/recherchehistoriquepardate', function(req, res) {
		recherche.recherchehistoriquepardate(function (found) {
			res.json(found);
		});		
	});

	app.get('/rechercheemp', function(req, res) {
		console.log(req.body);
		recherche.rechercheemployes(req.body.nom,function (found) {
			res.json(found);
		});
	});
	app.get('/recherchechauffeursdisponible', function(req, res) {
		recherche.recherchechauffeursdisponible(function (found) {
			res.json(found);
		});
	});
	app.get('/ajoutentretien', function(req, res) {
		ajout.ajoutentretien(objet,function (found) {
			
		});
	});
	app.get('/ajoutmission', function(req, res) {
 		ajout.ajoutmission(objet,function (found) {
			
		});
	});
	

	
};


