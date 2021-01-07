const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'avtomir'
});

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());


connection.connect();




app.get('/api/getcatalogelement', function(req,res) {

  connection.query('select name_type, name_sub_type_detail from type_detail, sub_type_detail where sub_type_detail.id_type_detail = type_detail.id_type_detail;', function(error, result, fields){
    res.json(result);
    res.end();
  });

});







app.get('/api/getcatalog', function(req,res) {

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }
    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img from detail, type_detail, sub_type_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail;', function(error, result, fields){
    resulquery.queryDetai = result;
    });

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label;', function(error, result, fields){
    resulquery.queryLabel = result;
    res.json(resulquery);
    });

});










app.get('/api/getqueyrdescontdetail', function(req,res) {

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }
    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label Like \'Скидка%\';', function(error, result, fields){
    resulquery.queryDetai = result;
    });

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label Like \'Скидка%\';', function(error, result, fields){
    resulquery.queryLabel = result;
    res.json(resulquery);
    });

});






app.get('/api/getqueyrxitdetail', function(req,res) {

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }
    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label = \'Хит\';', function(error, result, fields){
    resulquery.queryDetai = result;
    });

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label;', function(error, result, fields){
    resulquery.queryLabel = result;
    res.json(resulquery);
    });

});











app.post('/api/search', function(req,res){

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }
    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img from detail, type_detail, sub_type_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and LOCATE(\'' + req.body.word_search + '\', detail.name_detail) > 0;', function(error, result, fields){
    resulquery.queryDetai = result;
    });

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and LOCATE(\'' + req.body.word_search + '\', detail.name_detail) > 0;', function(error, result, fields){
    resulquery.queryLabel = result;
    res.json(resulquery);
    });

})














app.post('/api/postcatalog', function(req,res){

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }
    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img from detail, type_detail, sub_type_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and ( type_detail.name_type = \''+ req.body.name_type +'\' or sub_type_detail.name_sub_type_detail = \''+ req.body.name_type +'\' );', function(error, result, fields){
    resulquery.queryDetai = result;
    });

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and ( type_detail.name_type = \''+ req.body.name_type +'\' or sub_type_detail.name_sub_type_detail = \''+ req.body.name_type +'\' );', function(error, result, fields){
    resulquery.queryLabel = result;
    res.json(resulquery);
    });

})









function CreateFilterquery(req){

  var str = '';
  var UnicMas = [];
  var FlagUnic = true;
  var idElementSort = null;


  for (var i = 0; i < req.body.filter.length; i++){

    if (req.body.filter[i][0] != 'MinSell' && req.body.filter[i][0] != 'MaxSell' && req.body.filter[i][0] != 'Sort'){


    for (var j = 0; j < UnicMas.length; j++){

        if (UnicMas[j].NameTypeFilter == req.body.filter[i][0]){
          UnicMas[j].ValueTypeFilter += ', \'' + req.body.filter[i][1] + '\'';
          FlagUnic = false;
        }
      }
  
      if (FlagUnic){
        var a = {
          NameTypeFilter: req.body.filter[i][0],
          ValueTypeFilter: '\'' + req.body.filter[i][1] + '\''
        }
        UnicMas.push(a);
      }
      FlagUnic = true;
    
    }
  }

  for (var i = 0; i < req.body.filter.length; i++){

      if (req.body.filter[i][0] == 'MinSell'){
        str += ' and detail.price >= ' + req.body.filter[i][1];
      }

      if (req.body.filter[i][0] == 'MaxSell'){
        str += ' and detail.price <= ' + req.body.filter[i][1];
      }
      
      if (req.body.filter[i][0] == 'Sort'){
        idElementSort = i;
      }
  }


    for (var i = 0; i < UnicMas.length; i++){

      if (i == 0){

        str += ' and ((type_filter.name_type_filter = \''+ UnicMas[i].NameTypeFilter +'\' and value_type_filter.value in ( ' + UnicMas[i].ValueTypeFilter + ' ) )';
      } else {

        str += ' or (type_filter.name_type_filter = \''+ UnicMas[i].NameTypeFilter +'\' and value_type_filter.value in ( ' + UnicMas[i].ValueTypeFilter + ' ) )';
      }
     
    }

    if (UnicMas.length > 0){
      str += ')';
    }

    if (idElementSort != null){
      
      if (req.body.filter[idElementSort][1] == 'price-asc'){
        str += ' ORDER BY price ASC'
      }

      if (req.body.filter[idElementSort][1] == 'price-desc'){
        str += ' ORDER BY price DESC'
      }

      if (req.body.filter[idElementSort][1] == 'name-asc'){
        str += ' ORDER BY name_detail ASC'
      }
    }


  return(str);
}



function selectDetailFilter(result, mas){

  var UnikMas1 = [];
  var FlagUnickMas1 = true;
  var CountFilter = 0;


  for (var i = 0; i < mas.length; i++){

    if (mas[i][0] != 'Sort' && mas[i][0] != 'MaxSell' && mas[i][0] != 'MinSell'){
      for (var j = 0; j < UnikMas1.length; j++){

        if (mas[i][0] == UnikMas1[j]){
          FlagUnickMas1 = false;
          break;
        }
      }
  
      if (FlagUnickMas1){
        CountFilter++;
        UnikMas1.push(mas[i][0]);
      }
  
      FlagUnickMas1 = true;
    }
    
  }



  var LastMas = [];
  var UnikMas2 = [];
  var FlagUnickMas2 = true;

  for (var i = 0; i < result.length; i++){

    for (var j = 0; j < UnikMas2.length; j++){
      if(result[i].artikle == UnikMas2[j].artikle){
        FlagUnickMas2 = false;
        break;
      }
    }

    if (FlagUnickMas2){
      UnikMas2.push(result[i]);
    }

    FlagUnickMas2 = true;
  }


  if (CountFilter > 0){

    for (var i = 0; i < UnikMas2.length; i++){

      var countThisdetail = 0;
  
      for (var j = 0; j < result.length; j++){
        if (UnikMas2[i].artikle == result[j].artikle){
          countThisdetail++;
        }
      }
  
      if (countThisdetail == CountFilter){
        LastMas.push(UnikMas2[i]);
      }
    }
  } else {

    LastMas = UnikMas2;
  }
  

  return LastMas;
}



app.post('/api/postcatalogfilter', function(req,res){

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }


  var str = CreateFilterquery(req);

    connection.query('SELECT DISTINCT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail, type_filter, value_type_filter, filter where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and ( type_detail.name_type = \''+ req.body.name_type +'\' or sub_type_detail.name_sub_type_detail = \''+ req.body.name_type +'\' )' + str + ';', function(error, result, fields){
      resulquery.queryLabel = result;
    });

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img from detail, type_detail, sub_type_detail, type_filter, value_type_filter, filter where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and ( type_detail.name_type = \''+ req.body.name_type +'\' or sub_type_detail.name_sub_type_detail = \''+ req.body.name_type +'\' )' + str + ';', function(error, result, fields){
      resulquery.queryDetai = selectDetailFilter(result, req.body.filter);
      res.json(resulquery);
    });

})




app.post('/api/postcatalogalldetailfilter', function(req,res){

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }


  var str = CreateFilterquery(req);

    connection.query('SELECT DISTINCT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, label, lable_detail, type_filter, value_type_filter, filter where lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter ' + str + ';', function(error, result, fields){
      resulquery.queryLabel = result;
    });

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, type_filter.name_type_filter, value_type_filter.value  from detail, type_filter, value_type_filter, filter where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter ' + str + ';', function(error, result, fields){
      resulquery.queryDetai = selectDetailFilter(result, req.body.filter);
      res.json(resulquery);
    });

})









app.post('/api/getqueyrdescontdetailfilter', function(req,res) {

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }

  var str = CreateFilterquery(req);

    connection.query('SELECT DISTINCT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail, type_filter, value_type_filter, filter where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label Like \'Скидка%\'' + str + ';', function(error, result, fields){
    resulquery.queryLabel = result;
    });


    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img from detail, type_detail, sub_type_detail, type_filter, value_type_filter, filter, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label Like \'Скидка%\'' + str + ';', function(error, result, fields){
      resulquery.queryDetai = selectDetailFilter(result, req.body.filter);
      res.json(resulquery);
    });

});






app.post('/api/getqueyrxitdetailfilter', function(req,res) {

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }

  var str = CreateFilterquery(req);

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label = \'Хит\'' + str + ';', function(error, result, fields){
    resulquery.queryLabel = result;
    });

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label = \'Хит\'' + str + ';', function(error, result, fields){
      resulquery.queryDetai = selectDetailFilter(result, req.body.filter);
      res.json(resulquery);
    });

});












app.post('/api/postquerydetailpage', function(req,res){

  var resulquery = {
    queryDetai: '',
    queryLabel: '',
    queryFilter: '',
    queryBasket: ''
  }

    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, detail.count, detail.description, brand.name_brand from detail, brand where detail.id_brand = brand.id_brand and detail.artikle = \''+ req.body.artikle +'\';', function(error, result, fields){
    resulquery.queryDetai = result;
    });

    connection.query('SELECT type_filter.name_type_filter, value_type_filter.value from detail, type_filter, value_type_filter, filter where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and detail.artikle = \''+ req.body.artikle +'\' ORDER BY type_filter.name_type_filter;', function(error, result, fields){
    resulquery.queryFilter = result;
    });

    connection.query('SELECT label.name_label from detail, label, lable_detail where  lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and detail.artikle = \''+ req.body.artikle +'\';', function(error, result, fields){
    resulquery.queryLabel = result;
    });

    connection.query('select id_detail from detail where detail.artikle = \'' + req.body.artikle + '\';', function(error, result, fields){

      var idDetail = result[0].id_detail;

      connection.query('select count_buy from basket_and_order where id_detail = '+ idDetail + ' and id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
        resulquery.queryBasket = result;
        res.json(resulquery);
      });
  
    });

})











app.post('/api/getvalueaboutfilter', function(req,res){

  var resulquery = {
    nameElement: '',
    valuesElement: ''
  }

  if (req.body.name_type === null){


    connection.query('SELECT type_filter.name_type_filter from type_filter;', function(error, result, fields){
    resulquery.nameElement = result;
    });

    connection.query('SELECT type_filter.name_type_filter, value_type_filter.value from type_filter, value_type_filter where value_type_filter.id_type_filter = type_filter.id_type_filter;', function(error, result, fields){
    resulquery.valuesElement = result;
    res.json(resulquery);
    });

  } else {
    connection.query('SELECT DISTINCT type_filter.name_type_filter from detail, filter, type_filter, value_type_filter, sub_type_detail, type_detail where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and (type_detail.name_type = \''+ req.body.name_type +'\' or sub_type_detail.name_sub_type_detail = \''+ req.body.name_type +'\');', function(error, result, fields){
    resulquery.nameElement = result;
    });

    connection.query('SELECT DISTINCT value_type_filter.value, type_filter.name_type_filter from detail, filter, type_filter, value_type_filter, sub_type_detail, type_detail where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and (type_detail.name_type = \''+ req.body.name_type + '\' or sub_type_detail.name_sub_type_detail = \'' + req.body.name_type + '\');', function(error, result, fields){
    resulquery.valuesElement = result;
    res.json(resulquery);
    });

  }

})


app.get('/api/getvalueaboutfilterxit', function(req,res) {

  var resulquery = {
    nameElement: '',
    valuesElement: ''
  }

    connection.query('SELECT DISTINCT type_filter.name_type_filter from detail, filter, type_filter, value_type_filter, sub_type_detail, type_detail, label, lable_detail where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label = \'Хит\';', function(error, result, fields){
    resulquery.nameElement = result;
    });

    connection.query('SELECT DISTINCT value_type_filter.value, type_filter.name_type_filter from detail, filter, type_filter, value_type_filter, sub_type_detail, type_detail, label, lable_detail where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label = \'Хит\';', function(error, result, fields){
    resulquery.valuesElement = result;
    res.json(resulquery);
    });

});




app.get('/api/getvalueaboutfilterdiscont', function(req,res) {

  var resulquery = {
    nameElement: '',
    valuesElement: ''
  }

    connection.query('SELECT DISTINCT type_filter.name_type_filter from detail, filter, type_filter, value_type_filter, sub_type_detail, type_detail, label, lable_detail where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label Like \'Скидка%\';', function(error, result, fields){
    resulquery.nameElement = result;
    });

    connection.query('SELECT DISTINCT value_type_filter.value, type_filter.name_type_filter from detail, filter, type_filter, value_type_filter, sub_type_detail, type_detail, label, lable_detail where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter and detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and label.name_label Like \'Скидка%\';', function(error, result, fields){
    resulquery.valuesElement = result;
    res.json(resulquery);
    });

});












app.post('/api/postquerysimilardetail', function(req,res){

  var resulquery = {
    queryDetai: '',
    queryLabel: ''
  }

  var TypeOrSubType;

      

        connection.query('SELECT type_detail.name_type, sub_type_detail.name_sub_type_detail from detail, type_detail, sub_type_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and detail.artikle = \''+ req.body.artikle +'\';', function(error, result, fields){
        TypeOrSubType = result;


        if (TypeOrSubType[0].name_sub_type_detail == null){

          connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img from detail, type_detail, sub_type_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and detail.artikle <> \''+ req.body.artikle +'\' and type_detail.name_type = \'' + TypeOrSubType[0].name_type +'\';', function(error, result, fields){
          resulquery.queryDetai = result;
          });

          connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and detail.artikle <> \''+ req.body.artikle +'\' and type_detail.name_type = \''+ TypeOrSubType[0].name_type +'\';', function(error, result, fields){
          resulquery.queryLabel = result;
          res.json(resulquery);
          });

        } else {

          connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img from detail, type_detail, sub_type_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and detail.artikle <> \''+ req.body.artikle +'\' and sub_type_detail.name_sub_type_detail = \'' + TypeOrSubType[0].name_sub_type_detail +'\';', function(error, result, fields){
          resulquery.queryDetai = result;
          });

          connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, label.name_label from detail, type_detail, sub_type_detail, label, lable_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail and sub_type_detail.id_type_detail = type_detail.id_type_detail and lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label and detail.artikle <> \''+ req.body.artikle +'\' and sub_type_detail.name_sub_type_detail = \''+ TypeOrSubType[0].name_sub_type_detail +'\';', function(error, result, fields){
          resulquery.queryLabel = result;
          res.json(resulquery);
          });
        }


        });


})






app.post('/api/unicklogin', function(req,res){

  var resulquery = {
    queryUnickLogin: false
  }
    connection.query('SELECT user.login from user where user.login = \'' + req.body.login + '\' ;', function(error, result, fields){
    if (result.length == 0){
      resulquery.queryUnickLogin = true;
    }
    res.json(resulquery);
    });

})


app.post('/api/unicktelefon', function(req,res){

  var resulquery = {
    queryUnickTelefon: false
  }
    connection.query('SELECT user.telefon from user where user.telefon = \'' + req.body.telefon + '\' ;', function(error, result, fields){
    if (result.length == 0){
      resulquery.queryUnickTelefon = true;
    }
    res.json(resulquery);
    });

})

app.post('/api/truepassword', function(req,res){

  var resulquery = {
    queryUnickLogin: true
  }
    connection.query('SELECT user.login from user where user.password = ' + req.body.password + ' and id_user = ' + req.body.UserId + ';', function(error, result, fields){
    if (result.length == 0){
      resulquery.queryUnickLogin = false;
    }
    res.json(resulquery);
    });

})






app.post('/api/addnewuser', function(req,res){

  if (req.body.Mail == ''){
    connection.query('insert into user(s_name, name, patronemic, telefon, mail, password, login) values (\'' + req.body.SName + '\', \'' + req.body.Name + '\', \'' + req.body.Patronemic + '\', \'' + req.body.Telefon + '\', NULL, \'' + req.body.Password + '\', \'' + req.body.Login + '\');', function(error, result, fields){
    });
  } else {
    connection.query('insert into user(s_name, name, patronemic, telefon, mail, password, login) values (\'' + req.body.SName + '\', \'' + req.body.Name + '\', \'' + req.body.Patronemic + '\', \'' + req.body.Telefon + '\', \'' + req.body.Mail + '\', \'' + req.body.Password + '\', \'' + req.body.Login + '\');', function(error, result, fields){
    });
  }

})




app.post('/api/signin', function(req,res){

    var ressignin = {
      result: ''
    }

    connection.query('SELECT user.s_name, user.name, user.image_user, type_user.name_type, user.id_user from user, type_user where user.id_type_user = type_user.id_type_user and user.login = \'' + req.body.login + '\' and user.password = \'' + req.body.password + '\';', function(error, result, fields){
      ressignin.result = result;
      res.json(ressignin);
    });

})




app.post('/api/addreview', function(req,res){

  var D = new Date();
  var dateNow = D.getFullYear() + '-' + (D.getMonth() + 1) + '-' + D.getDate() + ' '+ D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();

  if (req.body.mark != ''){

    connection.query('insert into review(id_user, text_review, mark, data_add) values (' + req.body.IdUser + ', \'' + req.body.TextReview + '\', \'' + req.body.mark + '\', \'' + dateNow + '\');', function(error, result, fields){
    });
  } else {

    connection.query('insert into review(id_user, text_review, data_add) values (' + req.body.IdUser + ', \'' + req.body.TextReview + '\', \'' + dateNow + '\');', function(error, result, fields){
    });
  }

})


app.get('/api/getfourlastreview', function(req,res) {

  connection.query('select user.name, user.image_user, text_review, mark from review, user where review.id_user = user.id_user order by data_add desc limit 4;', function(error, result, fields){
    res.json(result);
    res.end();
  });

});


app.get('/api/getallreview', function(req,res) {

  connection.query('select user.name, user.image_user, text_review, mark from review, user where review.id_user = user.id_user order by data_add desc;', function(error, result, fields){
    res.json(result);
    res.end();
  });

});





app.post('/api/queryinfoforuserpage', function(req,res){
  
  connection.query('SELECT DISTINCT user.s_name, user.name, user.patronemic, user.telefon, user.mail, user.image_user, user.date_born, gender.name_gender, user.country from user, gender where user.id_gender = gender.id_gender and user.id_user = ' + req.body.id + ';', function(error, result, fields){
    res.json(result);
  });

})



app.post('/api/changepassworduser', function(req,res){
  
  connection.query('update user set password = ' + req.body.password + ' where id_user = ' + req.body.UserId + ';', function(error, result, fields){
    res.json(result);
  });

})



app.post('/api/updatemaininfoaboutuser', function(req,res){
  
  connection.query('select id_gender from gender where name_gender = \'' + req.body.UserGender + '\';', function(error, result, fields){

    req.body.UserGender = result[0].id_gender;
    connection.query('update user set s_name = \'' + req.body.UserSName + '\', name = \'' + req.body.UserName + '\', patronemic = \'' + req.body.UserPatronemic + '\', telefon = \'' + req.body.UserTelefon + '\', mail = ' + req.body.UserMail + ', date_born = ' + req.body.UserDateBorn + ', id_gender = ' + req.body.UserGender + ', country = ' + req.body.UserCountry + ' where id_user = ' + req.body.UserId + ';', function(error, result, fields){
    });

  });

})









app.get('/api/getthreeblogs', function(req,res) {

  connection.query('select  img_blog, title_blog, date_add from blog order by date_add desc limit 3;', function(error, result, fields){
    res.json(result);
    res.end();
  });

});


app.post('/api/gattitleblogs', function(req,res){
  
  connection.query('select title_blog from blog order by title_blog;', function(error, result, fields){
    res.json(result);
  });

})


app.get('/api/gatallblogs', function(req,res) {

  connection.query('select  img_blog, title_blog, date_add, CONVERT(text_blog USING utf8) from blog order by date_add desc;', function(error, result, fields){
    res.json(result);
    res.end();
  });

});


app.post('/api/gatingoaboutpageblog', function(req,res){
  
  connection.query('select img_blog, title_blog, CONVERT(text_blog USING utf8) from blog where title_blog = \'' + req.body.title + '\';', function(error, result, fields){
    res.json(result);
  });

})






app.post('/api/adddetailinbasket', function(req,res){

  connection.query('select id_detail from detail where detail.artikle = \'' + req.body.artikle_detail + '\';', function(error, result, fields){

    var idDetail = result[0].id_detail;

    connection.query('select * from basket_and_order where id_detail = '+ idDetail + ' and id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
      

      if (result.length == 0){

        connection.query('insert into basket_and_order(id_detail, id_user, count_buy) values ('+idDetail+' ,'+req.body.idUser+' ,'+req.body.count+');', function(error, result, fields){
          res.json(['200']);
        });
      } else {

        connection.query('update basket_and_order set count_buy = '+ (+result[0].count_buy + +req.body.count) +' where id_detail = '+ idDetail + ' and id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
          res.json(['200']);
        });
      }


    });

  });

})


app.post('/api/infoaboutdetailinbasket', function(req,res){
  
  var resulquery = {
    queryDetai: ''
  }
    connection.query('SELECT detail.name_detail, detail.artikle, detail.price, detail.img, detail.count, detail.description, brand.name_brand from detail, brand where detail.id_brand = brand.id_brand and detail.artikle in (' + req.body.artikle + ');', function(error, result, fields){
    resulquery.queryDetai = result;
    res.json(resulquery);
    });

})


app.post('/api/changebasketinfo', function(req,res){
  
  var strArtikle = '\'' + req.body.artikle.join('\', \'') + '\'';
  var ArtikleAndId;


    connection.query('select detail.id_detail, detail.artikle, detail.count from detail where detail.artikle in (' + strArtikle + ');', function(error, result, fields){
      ArtikleAndId = result;


      for (var i = 0; i < ArtikleAndId.length; i++){
        
        var IndexElement = i;
        connection.query('select * from basket_and_order where id_detail = '+ ArtikleAndId[IndexElement].id_detail + ' and id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
      

          if (result.length == 0){

            for (var j = 0; j < req.body.artikle.length; j++){

              if (req.body.artikle[j] == ArtikleAndId[IndexElement].artikle){
                connection.query('insert into basket_and_order(id_detail, id_user, count_buy) values ('+ ArtikleAndId[IndexElement].id_detail +' ,'+req.body.idUser+' ,'+req.body.count[j]+');', function(error, result, fields){
                });
                break;
              }
            }

          } else {
            
            for (var j = 0; j < req.body.artikle.length; j++){

              
              if (req.body.artikle[j] == ArtikleAndId[IndexElement].artikle){

                if (ArtikleAndId[IndexElement].count > (+result[0].count_buy + +req.body.count[j])){
                  connection.query('update basket_and_order set count_buy = '+ (+result[0].count_buy + +req.body.count[j]) +' where id_detail = '+ ArtikleAndId[IndexElement].id_detail + ' and id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
                  });
                } else {
                  connection.query('update basket_and_order set count_buy = '+ (+ArtikleAndId[IndexElement].count) +' where id_detail = '+ ArtikleAndId[IndexElement].id_detail + ' and id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
                  });
                }

                break;
              }
            }

          }
    
    
        });
      }
      res.json(['200']);
    });

})



app.post('/api/getbutbasketvalue', function(req,res){
  
  var resulquery = []

  var masIdAndCount;

  function CreateObject(id_detai, price_detail, count){

    var infoAboutdetail = {
      id: id_detai,
      price: price_detail,
      count_by: count
    }

    return infoAboutdetail;
  }


    connection.query('select id_detail, count_buy from basket_and_order where id_user = '+ req.body.id + ' and id_statys_basket_and_order = 1;', function(error, result, fields){

      masIdAndCount = result;

      if (masIdAndCount.length > 0){

        var masIdDetail = [];
        for (var i = 0; i < masIdAndCount.length; i++){
          
          masIdDetail.push(masIdAndCount[i].id_detail); 
        }

        connection.query('select id_detail, price from detail where id_detail in (' + masIdDetail.join(', ') + ');', function(error, result, fields){
      
          for (var i = 0; i < result.length; i++){
            for (var j = 0; j < masIdAndCount.length; j++){

              if (result[i].id_detail == masIdAndCount[j].id_detail){
                resulquery.push(CreateObject(masIdAndCount[j].id_detail, result[i].price, masIdAndCount[j].count_buy));
              }
            }
          }

          res.json(resulquery);
        });

      } else {

        res.json(resulquery);
      }
      
    });
    

})


app.post('/api/basketwhensignin', function(req,res){
  
  var resulquery = {
    queryDetai: []
  }

  var masIdAndCount;
  function CreateObject(id_detai, name, artikle, img, price_detail, maxCount, count){

    var infoAboutdetail = {
      id: id_detai,
      name_detail: name,
      artikle: artikle,
      img: img,
      price: price_detail,
      max_count: maxCount,
      count_buy: count
    }

    return infoAboutdetail;
  }

    connection.query('select id_detail, count_buy from basket_and_order where id_user = '+ req.body.id + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
      
      masIdAndCount = result;

      if (masIdAndCount.length > 0){

        var masIdDetail = [];
        for (var i = 0; i < masIdAndCount.length; i++){
          
          masIdDetail.push(masIdAndCount[i].id_detail); 
        }

        connection.query('select id_detail, price, artikle, name_detail, img, count from detail where id_detail in (' + masIdDetail.join(', ') + ');', function(error, result, fields){
      
          for (var i = 0; i < result.length; i++){
            for (var j = 0; j < masIdAndCount.length; j++){

              if (result[i].id_detail == masIdAndCount[j].id_detail){
                resulquery.queryDetai.push(CreateObject(masIdAndCount[j].id_detail, result[i].name_detail, result[i].artikle, result[i].img, result[i].price, result[i].count, masIdAndCount[j].count_buy));
              }
            }
          }

          res.json(resulquery);
        });
      } else {

        res.json(resulquery);
      }

    });

})






app.post('/api/changecountdetailbasket', function(req,res){

  connection.query('select id_detail from detail where detail.artikle = \'' + req.body.artikle + '\';', function(error, result, fields){

    var idDetail = result[0].id_detail;

    connection.query('update basket_and_order set count_buy = '+ req.body.count+' where id_detail = '+ idDetail + ' and id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
      res.json(['200']);
    });

  });

})



app.post('/api/deletedetailinbasket', function(req,res){

  connection.query('select id_detail from detail where detail.artikle = \'' + req.body.artikle + '\';', function(error, result, fields){

    var idDetail = result[0].id_detail;

    connection.query('delete from basket_and_order where id_detail = '+ idDetail + ' and id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
      res.json(['200']);
    });

  });

})








app.post('/api/infofromorderperiodical', function(req,res){
  
  var resulquery = {
    queryDetai: []
  }

  var masIdAndCount;
  function CreateObject(id_detai, name, artikle, img, price_detail, count){

    var infoAboutdetail = {
      id: id_detai,
      name_detail: name,
      artikle: artikle,
      img: img,
      price: price_detail,
      count_buy: count
    }

    return infoAboutdetail;
  }


    connection.query('select id_detail, count_buy from basket_and_order where id_user = '+ req.body.id + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
      
      masIdAndCount = result;

      if (masIdAndCount != undefined && masIdAndCount.length > 0){

        var masIdDetail = [];
        for (var i = 0; i < masIdAndCount.length; i++){
          
          masIdDetail.push(masIdAndCount[i].id_detail); 
        }

        connection.query('select id_detail, price, artikle, name_detail, img from detail where id_detail in (' + masIdDetail.join(', ') + ');', function(error, result, fields){
      
          for (var i = 0; i < result.length; i++){
            for (var j = 0; j < masIdAndCount.length; j++){

              if (result[i].id_detail == masIdAndCount[j].id_detail){
                resulquery.queryDetai.push(CreateObject(masIdAndCount[j].id_detail, result[i].name_detail, result[i].artikle, result[i].img, result[i].price, masIdAndCount[j].count_buy));
              }
            }
          }

          res.json(resulquery);
        });
      } else {

        res.json(resulquery);
      }

    });

})






app.post('/api/complitorder', function(req,res){
  
  var D = new Date();
  var dateNow = D.getFullYear() + '-' + (D.getMonth() + 1) + '-' + D.getDate();

  var ListDetailBuy;

  function omg(len){
    var out = []
    while(out.length < len){
      var digit = Math.floor(Math.random() * 10)
      if (out.indexOf(digit) < 0){
        if (digit || out.length){
          out.push(digit)
        }
      }
    }
    return out.join('')
  }

  var ArtikleOrder = omg(5);

  connection.query('select id_detail, count_buy from basket_and_order where id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
    ListDetailBuy = result;


    connection.query('update basket_and_order set artikle_order = \''+ ArtikleOrder +'\', date_buy = \'' + dateNow + '\', address = ' + req.body.address + ', locality = \'' + req.body.locality + '\', id_delivery_method = ' + req.body.deliveryMethod + ', id_payment_method = ' + req.body.paymentMethod + ', wishes = ' + req.body.wishes + ', id_statys_basket_and_order = 2 where id_user = '+ req.body.idUser + ' and id_statys_basket_and_order = 1;', function(error, result, fields){
    });

    connection.query('select id_detail, count from detail;', function(error, result, fields){

      for (var i = 0; i < result.length; i++){
        for (var j = 0; j < ListDetailBuy.length; j++){

          if (ListDetailBuy[j].id_detail == result[i].id_detail){
            connection.query('update detail set count = ' + (+result[i].count - +ListDetailBuy[j].count_buy) + ' where id_detail = ' + ListDetailBuy[j].id_detail + ';', function(error, result, fields){
            });
          }
          
        }
      }
      res.json(['200']);
    });

  });

})










//Adminca

app.get('/api/getnametabledb', function(req,res) {

  connection.query('show tables;', function(error, result, fields){
    res.json(result);
    res.end();
  });

});


app.post('/api/getvaluetabledb', function(req,res) {

  var resultQuery = {
    masTh: [],
    masTd: []
  }

  switch(req.body.name){

    case ('blog'):

      connection.query('desc ' + req.body.name + ';', function(error, result, fields){
        resultQuery.masTh = result;
      });
    
      connection.query('select id_blog, img_blog, title_blog, CONVERT(text_blog USING utf8), date_add from ' + req.body.name + ';', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });

    break;



    case ('basket_and_order'):

      connection.query('desc ' + req.body.name + ';', function(error, result, fields){
        result[0].Field = 'name_detail';
        result[1].Field = 'login';
        result[2].Field = 'name_statys';
        result[7].Field = 'name_delivery_method';
        result[8].Field = 'name_method';

        resultQuery.masTh = result;
      });
    
      connection.query('select detail.name_detail, user.login, statys_basket_and_order.name_statys, artikle_order, date_buy, count_buy, locality, delivery_method.name_delivery_method, payment_method.name_method, address, wishes from basket_and_order, detail, user, statys_basket_and_order, delivery_method, payment_method where basket_and_order.id_detail = detail.id_detail and basket_and_order.id_user = user.id_user and basket_and_order.id_statys_basket_and_order = statys_basket_and_order.id_statys_basket_and_order and basket_and_order.id_delivery_method = delivery_method.id_delivery_method and basket_and_order.id_payment_method = payment_method.id_payment_method;', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });

    break;




    case ('delivery_method'):
    case ('brand'):
    case ('gender'):
    case ('label'):
    case ('payment_method'):
    case ('statys_basket_and_order'):
    case ('type_detail'):
    case ('type_filter'):
    case ('type_user'):

      connection.query('desc ' + req.body.name + ';', function(error, result, fields){
        resultQuery.masTh = result;
      });
    
      connection.query('select * from ' + req.body.name + ';', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });

    break;




    case ('detail'):
      var masforcreate = [];

      connection.query('desc ' + req.body.name + ';', function(error, result, fields){
        result[7].Field = 'name_brand';
        result[8].Field = 'name_sub_type_detail';
        resultQuery.masTh = result;
      });
    
      connection.query('select id_detail, name_detail, artikle, price, count, img, description, brand.name_brand, sub_type_detail.name_sub_type_detail from detail, sub_type_detail, brand where detail.id_brand = brand.id_brand and detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail;', function(error, result, fields){
        resultQuery.masTd = result;

        connection.query('select id_detail, detail.id_sub_type_detail, sub_type_detail.name_sub_type_detail from detail, sub_type_detail where detail.id_sub_type_detail = sub_type_detail.id_sub_type_detail;', function(error, result, fields){
          
          masforcreate = result;

          connection.query('select sub_type_detail.id_sub_type_detail, sub_type_detail.name_sub_type_detail, type_detail.name_type from type_detail, sub_type_detail where sub_type_detail.id_type_detail = type_detail.id_type_detail;', function(error, result, fields){

            for (var i = 0; i < masforcreate.length; i++){
              if (masforcreate[i].name_sub_type_detail == null){
                for (var j = 0; j < result.length; j++){
                  if (result[j].id_sub_type_detail == masforcreate[i].id_sub_type_detail){
                    resultQuery.masTd[i].name_sub_type_detail = result[j].name_type;
                    break;
                  }
                }
              }
            }
            res.json(resultQuery);
          });
        })
  
      });

    break;



    case ('filter'):


      resultQuery.masTh = [
        {Field: 'name_detail', Type: 'text'},
        {Field: 'name_type_filter', Type: 'text'},
        {Field: 'value', Type: 'text'}
      ]
    
      connection.query('select detail.name_detail, name_type_filter, value from detail, filter, value_type_filter, type_filter where filter.id_detail = detail.id_detail and filter.id_value_type_filter = value_type_filter.id_value_type_filter and value_type_filter.id_type_filter = type_filter.id_type_filter;', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });
    break;




    case ('lable_detail'):


      resultQuery.masTh = [
        {Field: 'name_detail', Type: 'text'},
        {Field: 'name_label', Type: 'text'}
      ]
    
      connection.query('select detail.name_detail, label.name_label from lable_detail, label, detail where lable_detail.id_detail = detail.id_detail and lable_detail.id_label = label.id_label;', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });
    break;



    case ('review'):


      connection.query('desc ' + req.body.name + ';', function(error, result, fields){
        result[1].Field = 'login';
        resultQuery.masTh = result;
      });
    
      connection.query('select id_review, user.login, text_review, mark, data_add from review, user where review.id_user = user.id_user;', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });
    break;



    case ('sub_type_detail'):


      connection.query('desc ' + req.body.name + ';', function(error, result, fields){
        result[2].Field = 'name_type';
        resultQuery.masTh = result;
      });
    
      connection.query('select id_sub_type_detail, name_sub_type_detail, type_detail.name_type from sub_type_detail, type_detail where sub_type_detail.id_type_detail = type_detail.id_type_detail;', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });
    break;



    case ('user'):


      connection.query('desc ' + req.body.name + ';', function(error, result, fields){
        result[1].Field = 'name_type';
        result[11].Field = 'name_gender';
        resultQuery.masTh = result;
      });
    
      connection.query('select id_user, type_user.name_type, s_name, name, patronemic, telefon, mail, password, image_user, login, date_born, gender.name_gender, country from user, type_user, gender where user.id_type_user = type_user.id_type_user and user.id_gender = gender.id_gender;', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });
    break;


    case ('value_type_filter'):

      connection.query('desc ' + req.body.name + ';', function(error, result, fields){
        result[1].Field = 'name_type_filter';
        resultQuery.masTh = result;
      });
    
      connection.query('select id_value_type_filter, type_filter.name_type_filter, value from value_type_filter, type_filter where value_type_filter.id_type_filter = type_filter.id_type_filter;', function(error, result, fields){
        resultQuery.masTd = result;
        res.json(resultQuery);
      });

    break;

  }


});




//basket_and_order
app.get('/api/getvalueforeignkeybasketandorder', function(req,res) {

  resulquery = {
    IdDetail: [],
    IdUser: [],
    IdStatys: [],
    IdDelivery: [],
    IdPayment: []
  }

  connection.query('select id_detail, name_detail from detail;', function(error, result, fields){
    resulquery.IdDetail = result;
  });

  connection.query('select id_user, login from user;', function(error, result, fields){
    resulquery.IdUser = result;
  });

  connection.query('select id_statys_basket_and_order, name_statys from statys_basket_and_order;', function(error, result, fields){
    resulquery.IdStatys = result;
  });

  connection.query('select id_delivery_method, name_delivery_method from delivery_method;', function(error, result, fields){
    resulquery.IdDelivery = result;
  });

  connection.query('select id_payment_method, name_method from payment_method;', function(error, result, fields){
    resulquery.IdPayment = result;
    res.json(resulquery);
  });

});


app.post('/api/inserttablebasketandorder', function(req,res) {


  if (req.body.dateBuy == 'null'){

    connection.query('insert into basket_and_order(id_detail, id_user, id_statys_basket_and_order, artikle_order, count_buy, locality, id_delivery_method, id_payment_method, address, wishes) values (' + req.body.idDetail + ', ' + req.body.idUser + ', ' + req.body.idStatys + ', ' + req.body.artikleOrder + ', ' + req.body.countBuy + ', ' + req.body.locality + ', ' + req.body.deliveryMethod + ', ' + req.body.paymentMethod + ', ' + req.body.address + ', ' + req.body.wishes + ');', function(error, result, fields){
      
      if (!error){
        res.json(['200']);
      } else {
        res.json(['000']);
      }
    });
  } else {

    connection.query('insert into basket_and_order(id_detail, id_user, id_statys_basket_and_order, artikle_order, date_buy, count_buy, locality, id_delivery_method, id_payment_method, address, wishes) values (' + req.body.idDetail + ', ' + req.body.idUser + ', ' + req.body.idStatys + ', ' + req.body.artikleOrder + ', ' + req.body.dateBuy + ', ' + req.body.countBuy + ', ' + req.body.locality + ', ' + req.body.deliveryMethod + ', ' + req.body.paymentMethod + ', ' + req.body.address + ', ' + req.body.wishes + ');', function(error, result, fields){
      
      if (!error){
        res.json(['200']);
      } else {
        res.json(['000']);
      }
    });
  }
  

});

app.post('/api/updatetablebasketandorder', function(req,res) {


  if (req.body.newValue.dateBuy == 'NULL'){

    connection.query('update basket_and_order set id_detail = ' + req.body.newValue.idDetail + ', id_user = ' + req.body.newValue.idUser + ', id_statys_basket_and_order = ' + req.body.newValue.idStatys + ', artikle_order = ' + req.body.newValue.artikleOrder + ', count_buy = ' + req.body.newValue.countBuy + ', locality = ' + req.body.newValue.locality + ', id_delivery_method = ' + req.body.newValue.deliveryMethod + ', id_payment_method = ' + req.body.newValue.paymentMethod + ', address = ' + req.body.newValue.address + ', wishes = ' + req.body.newValue.wishes + ' where id_detail = ' + req.body.oldValue.idDetail + ' and id_user = ' + req.body.oldValue.idUser + ' and id_statys_basket_and_order = ' + req.body.oldValue.idStatys + ' and artikle_order ' + req.body.oldValue.artikleOrder + ' and date_buy '+ req.body.oldValue.dateBuy + ' and count_buy ' + req.body.oldValue.countBuy + ' and locality ' + req.body.oldValue.locality + ' and id_delivery_method = ' + req.body.oldValue.deliveryMethod + ' and id_payment_method = ' + req.body.oldValue.paymentMethod + ' and address ' + req.body.oldValue.address + ' and wishes ' + req.body.oldValue.wishes + ';', function(error, result, fields){
      
      if (!error){
        res.json(['200']);
      } else {
        res.json(['000']);
      }
    });
  } else {

    connection.query('update basket_and_order set id_detail = ' + req.body.newValue.idDetail + ', id_user = ' + req.body.newValue.idUser + ', id_statys_basket_and_order = ' + req.body.newValue.idStatys + ', artikle_order = ' + req.body.newValue.artikleOrder + ', date_buy = ' + req.body.newValue.dateBuy + ', count_buy = ' + req.body.newValue.countBuy + ', locality = ' + req.body.newValue.locality + ', id_delivery_method = ' + req.body.newValue.deliveryMethod + ', id_payment_method = ' + req.body.newValue.paymentMethod + ', address = ' + req.body.newValue.address + ', wishes = ' + req.body.newValue.wishes + ' where id_detail = ' + req.body.oldValue.idDetail + ' and id_user = ' + req.body.oldValue.idUser + ' and id_statys_basket_and_order = ' + req.body.oldValue.idStatys + ' and artikle_order ' + req.body.oldValue.artikleOrder + ' and date_buy ' + req.body.oldValue.dateBuy + ' and count_buy ' + req.body.oldValue.countBuy + ' and locality ' + req.body.oldValue.locality + ' and id_delivery_method = ' + req.body.oldValue.deliveryMethod + ' and id_payment_method = ' + req.body.oldValue.paymentMethod + ' and address ' + req.body.oldValue.address + ' and wishes ' + req.body.oldValue.wishes + ';', function(error, result, fields){
      
      if (!error){
        res.json(['200']);
      } else {
        res.json(['000']);
      }
    });
  }
  

});
//



//Delete carteg
app.post('/api/deletecarteg', function(req,res) {


  switch(req.body.nameTable){


    case ('basket_and_order'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from basket_and_order where id_detail = ' + req.body.valueForDelete[i].name_detail + ' and id_user = ' + req.body.valueForDelete[i].login + ' and id_statys_basket_and_order = ' + req.body.valueForDelete[i].name_statys + ' and artikle_order ' + req.body.valueForDelete[i].artikle_order + ' and date_buy ' + req.body.valueForDelete[i].date_buy + ' and count_buy ' + req.body.valueForDelete[i].count_buy + ' and locality ' + req.body.valueForDelete[i].locality + ' and id_delivery_method = ' + req.body.valueForDelete[i].name_delivery_method + ' and id_payment_method = ' + req.body.valueForDelete[i].name_method + ' and address ' + req.body.valueForDelete[i].address + ' and wishes ' + req.body.valueForDelete[i].wishes + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;



    case ('blog'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from blog where id_blog = ' + req.body.valueForDelete[i].id_blog + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('brand'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from brand where id_brand = ' + req.body.valueForDelete[i].id_brand + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('delivery_method'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from delivery_method where id_delivery_method = ' + req.body.valueForDelete[i].id_delivery_method + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('payment_method'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from payment_method where id_payment_method = ' + req.body.valueForDelete[i].id_payment_method + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('detail'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from detail where id_detail = ' + req.body.valueForDelete[i].id_detail + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('gender'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from gender where id_gender = ' + req.body.valueForDelete[i].id_gender + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('label'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from label where id_label = ' + req.body.valueForDelete[i].id_label + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;

    case ('filter'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from filter where id_detail = ' + req.body.valueForDelete[i].id_detail + ' and id_value_type_filter = ' + req.body.valueForDelete[i].id_value_type_filter + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;

    case ('value_type_filter'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from value_type_filter where id_value_type_filter = ' + req.body.valueForDelete[i].id_value_type_filter + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;

    case ('lable_detail'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from lable_detail where id_detail = ' + req.body.valueForDelete[i].id_detail + ' and id_label = ' + req.body.valueForDelete[i].id_label + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;

    case ('review'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from review where id_review = ' + req.body.valueForDelete[i].id_review + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('statys_basket_and_order'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from statys_basket_and_order where id_statys_basket_and_order = ' + req.body.valueForDelete[i].id_statys_basket_and_order + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('type_detail'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from type_detail where id_type_detail = ' + req.body.valueForDelete[i].id_type_detail + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('type_filter'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from type_filter where id_type_filter = ' + req.body.valueForDelete[i].id_type_filter + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('type_user'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from type_user where id_type_user = ' + req.body.valueForDelete[i].id_type_user + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;

    case ('sub_type_detail'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from sub_type_detail where id_sub_type_detail = ' + req.body.valueForDelete[i].id_sub_type_detail + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;


    case ('user'):
    
      for (var i = 0; i < req.body.valueForDelete.length; i++){
        connection.query('delete from user where id_user = ' + req.body.valueForDelete[i].id_user + ';', function(error, result, fields){
        });
      }
      res.json(['200']);
    break;

  }
  

});




//insert table
app.post('/api/inserttable', function(req,res) {



  switch(req.body.nameTable){


    case ('blog'):
      connection.query('insert into blog(img_blog, title_blog, text_blog, date_add) values (' + req.body.img_blog + ', ' + req.body.title_blog + ', ' + req.body.text_blog + ', ' + req.body.date_add + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('brand'):
      connection.query('insert into brand(name_brand) values (' + req.body.name_brand + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('delivery_method'):
      connection.query('insert into delivery_method(name_delivery_method) values (' + req.body.name_delivery_method + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('payment_method'):
      connection.query('insert into payment_method(name_method) values (' + req.body.name_method + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('detail'):
      connection.query('insert into detail(name_detail, artikle, price, count, img, description, id_brand, id_sub_type_detail) values (' + req.body.name_detail + ', ' + req.body.artikle + ', ' + req.body.price + ', ' + req.body.count + ', ' + req.body.img + ', ' + req.body.description + ', ' + req.body.id_brand + ', ' + req.body.id_sub_type_detail + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('gender'):
      connection.query('insert into gender(name_gender) values (' + req.body.name_gender + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('label'):
      connection.query('insert into label(name_label) values (' + req.body.name_label + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;

    case ('filter'):
      connection.query('insert into filter(id_detail, id_value_type_filter) values (' + req.body.id_detail + ', ' + req.body.id_value_type_filter + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;

    case ('value_type_filter'):
      connection.query('insert into value_type_filter(id_type_filter, value) values (' + req.body.id_type_filter + ', ' + req.body.value + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('lable_detail'):
      connection.query('insert into lable_detail(id_detail, id_label) values (' + req.body.id_detail + ', ' + req.body.id_label + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('review'):
      connection.query('insert into review(id_user, text_review, mark, data_add) values (' + req.body.id_user + ', ' + req.body.text_review + ', ' + req.body.mark + ', ' + req.body.date_add + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('statys_basket_and_order'):
      connection.query('insert into statys_basket_and_order(name_statys) values (' + req.body.name_statys + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('type_detail'):
      connection.query('insert into type_detail(name_type) values (' + req.body.name_type + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('type_filter'):
      connection.query('insert into type_filter(name_type_filter) values (' + req.body.name_type_filter + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('type_user'):
      connection.query('insert into type_user(name_type) values (' + req.body.name_type + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('sub_type_detail'):
      connection.query('insert into sub_type_detail(name_sub_type_detail, id_type_detail) values (' + req.body.name_sub_type_detail + ', ' + req.body.id_type_detail + ');', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('user'):

      if (req.body.date_born != 'NULL'){
        connection.query('insert into user(id_type_user, s_name, name, patronemic, telefon, mail, password, image_user, login, date_born, id_gender, country) values (' + req.body.id_type_user + ', ' + req.body.s_name + ', ' + req.body.name + ', ' + req.body.patronemic + ', ' + req.body.telefon + ', ' + req.body.mail + ', ' + req.body.password + ', ' + req.body.image_user + ', ' + req.body.login + ', ' + req.body.date_born + ', ' + req.body.id_gender + ', ' + req.body.country + ');', function(error, result, fields){
          
          if (!error){
            res.json(['200']);
          } else {
            res.json(['000']);
          }
        });

      } else {

        connection.query('insert into user(id_type_user, s_name, name, patronemic, telefon, mail, password, image_user, login, id_gender, country) values (' + req.body.id_type_user + ', ' + req.body.s_name + ', ' + req.body.name + ', ' + req.body.patronemic + ', ' + req.body.telefon + ', ' + req.body.mail + ', ' + req.body.password + ', ' + req.body.image_user + ', ' + req.body.login + ', ' + req.body.id_gender + ', ' + req.body.country + ');', function(error, result, fields){
          
          if (!error){
            res.json(['200']);
          } else {
            res.json(['000']);
          }
        });
      }
    
    break;

  }

  

});





//update table
app.post('/api/updatetable', function(req,res) {



  switch(req.body.nameTable){

    case ('blog'):

      connection.query('update blog set img_blog = ' + req.body.newValue.img_blog + ', title_blog = ' + req.body.newValue.title_blog + ', text_blog = ' + req.body.newValue.text_blog + ', date_add = ' + req.body.newValue.date_add + ' where id_blog = ' + req.body.oldValue.id_blog + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('brand'):

      connection.query('update brand set name_brand = ' + req.body.newValue.name_brand + ' where id_brand = ' + req.body.oldValue.id_brand + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('delivery_method'):

      connection.query('update delivery_method set name_delivery_method = ' + req.body.newValue.name_delivery_method + ' where id_delivery_method = ' + req.body.oldValue.id_delivery_method + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('payment_method'):

      connection.query('update payment_method set name_method = ' + req.body.newValue.name_method + ' where id_payment_method = ' + req.body.oldValue.id_payment_method + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('detail'):
      connection.query('update detail set name_detail = ' + req.body.newValue.name_detail + ', artikle = ' + req.body.newValue.artikle + ', price = ' + req.body.newValue.price + ', count = ' + req.body.newValue.count + ', img = ' + req.body.newValue.img + ', description = ' + req.body.newValue.description + ', id_brand = ' + req.body.newValue.id_brand + ', id_sub_type_detail = ' + req.body.newValue.id_sub_type_detail +' where id_detail = ' + req.body.oldValue.id_detail + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('gender'):

      connection.query('update gender set name_gender = ' + req.body.newValue.name_gender + ' where id_gender = ' + req.body.oldValue.id_gender + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('label'):
      connection.query('update label set name_label = ' + req.body.newValue.name_label + ' where id_label = ' + req.body.oldValue.id_label + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('filter'):
      connection.query('update filter set id_detail = ' + req.body.newValue.id_detail + ', id_value_type_filter = ' + req.body.newValue.id_value_type_filter + ' where id_detail = ' + req.body.oldValue.id_detail + ' and id_value_type_filter = ' + req.body.oldValue.id_value_type_filter + ';', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('value_type_filter'):
      connection.query('update value_type_filter set id_type_filter = ' + req.body.newValue.id_type_filter + ', value = ' + req.body.newValue.value + ' where id_value_type_filter = ' + req.body.oldValue.id_value_type_filter + ';', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;

    case ('lable_detail'):
      connection.query('update lable_detail set id_detail = ' + req.body.newValue.id_detail + ', id_label = ' + req.body.newValue.id_label + ' where id_detail = ' + req.body.oldValue.id_detail + ' and id_label = ' + req.body.oldValue.id_label + ';', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('review'):
      connection.query('update review set id_user = ' + req.body.newValue.id_user + ', text_review = ' + req.body.newValue.text_review + ', mark = ' + req.body.newValue.mark + ', data_add = ' + req.body.newValue.date_add + ' where id_review = ' + req.body.oldValue.id_review + ';', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('statys_basket_and_order'):
      connection.query('update statys_basket_and_order set name_statys = ' + req.body.newValue.name_statys + ' where id_statys_basket_and_order = ' + req.body.oldValue.id_statys_basket_and_order + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('type_detail'):
      connection.query('update type_detail set name_type = ' + req.body.newValue.name_type + ' where id_type_detail = ' + req.body.oldValue.id_type_detail + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('type_filter'):
      connection.query('update type_filter set name_type_filter = ' + req.body.newValue.name_type_filter + ' where id_type_filter = ' + req.body.oldValue.id_type_filter + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('type_user'):
      connection.query('update type_user set name_type = ' + req.body.newValue.name_type + ' where id_type_user = ' + req.body.oldValue.id_type_user + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('sub_type_detail'):
      connection.query('update sub_type_detail set name_sub_type_detail = ' + req.body.newValue.name_sub_type_detail + ', id_type_detail = ' + req.body.newValue.id_type_detail + ' where id_sub_type_detail = ' + req.body.oldValue.id_sub_type_detail + ' ;', function(error, result, fields){
        
        if (!error){
          res.json(['200']);
        } else {
          res.json(['000']);
        }
      });
    break;


    case ('user'):

      if (req.body.date_born != 'NULL'){
        connection.query('update user set id_type_user = ' + req.body.newValue.id_type_user+ ', s_name = ' + req.body.newValue.s_name + ', name = ' + req.body.newValue.name + ', patronemic = ' + req.body.newValue.patronemic + ', telefon = ' + req.body.newValue.telefon + ', mail = ' + req.body.newValue.mail + ', password = ' + req.body.newValue.password + ', image_user = ' + req.body.newValue.image_user + ', login = ' + req.body.newValue.login + ', date_born = ' + req.body.newValue.date_born + ', id_gender = ' + req.body.newValue.id_gender + ', country = ' + req.body.newValue.country + ' where id_user = ' + req.body.oldValue.id_user + ' ;', function(error, result, fields){
        
          if (!error){
            res.json(['200']);
          } else {
            res.json(['000']);
          }
        });
      } else {

        connection.query('update user set id_type_user = ' + req.body.newValue.id_type_user+ ', s_name = ' + req.body.newValue.s_name + ', name = ' + req.body.newValue.name + ', patronemic = ' + req.body.newValue.patronemic + ', telefon = ' + req.body.newValue.telefon + ', mail = ' + req.body.newValue.mail + ', password = ' + req.body.newValue.password + ', image_user = ' + req.body.newValue.image_user + ', login = ' + req.body.newValue.login + ', id_gender = ' + req.body.newValue.id_gender + ', country = ' + req.body.newValue.country + ' where id_user = ' + req.body.oldValue.id_user + ' ;', function(error, result, fields){
        
          if (!error){
            res.json(['200']);
          } else {
            res.json(['000']);
          }
        });
      }
      
    break;

  }

  

});




//Foreign key Detail
app.get('/api/getvalueforeignkeydetail', function(req,res) {

  var resulquery = {
    IdBrand: [],
    IdSybTypeDetail: [],
    IdTypeDetail: []
  }



  connection.query('select id_brand, name_brand from brand;', function(error, result, fields){
    resulquery.IdBrand = result;
  });

  connection.query('select id_type_detail, name_type from type_detail;', function(error, result, fields){
    resulquery.IdTypeDetail = result;
  });

  connection.query('select id_sub_type_detail, name_sub_type_detail, id_type_detail from sub_type_detail;', function(error, result, fields){
    resulquery.IdSybTypeDetail = result;
    res.json(resulquery);
  });

});


//Foreign key Filter
app.get('/api/getvalueforeignkeyfilter', function(req,res) {

  var resulquery = {
    IdDetail: [],
    IdValueTypeFilter: []
  }



  connection.query('select id_detail, name_detail from detail;', function(error, result, fields){
    resulquery.IdDetail = result;
  });

  connection.query('select value_type_filter.id_value_type_filter, value_type_filter.value, type_filter.name_type_filter from value_type_filter, type_filter where value_type_filter.id_type_filter = type_filter.id_type_filter;', function(error, result, fields){
    resulquery.IdValueTypeFilter = result;
    res.json(resulquery);
  });

});

//Foreign key value_type_filter
app.get('/api/getvalueforeignkeyvaluetypefilter', function(req,res) {

  var resulquery = {
    IdTypeFilter: []
  }


  connection.query('select id_type_filter, name_type_filter from type_filter;', function(error, result, fields){
    resulquery.IdTypeFilter = result;
    res.json(resulquery);
  });

});

//Foreign key lable_detail
app.get('/api/getvalueforeignkeylabledetail', function(req,res) {

  var resulquery = {
    IdDetail: [],
    IdLabel: []
  }


  connection.query('select id_detail, name_detail from detail;', function(error, result, fields){
    resulquery.IdDetail = result;
  });

  connection.query('select id_label, name_label from label;', function(error, result, fields){
    resulquery.IdLabel = result;
    res.json(resulquery);
  });

});

//Review
app.get('/api/getvalueforeignkeyreview', function(req,res) {

  var resulquery = {
    IdUser: []
  }


  connection.query('select id_user, login from user;', function(error, result, fields){
    resulquery.IdUser = result;
    res.json(resulquery);
  });

});

//Sub Type Detail
app.get('/api/getvalueforeignkeysubtypedetail', function(req,res) {

  var resulquery = {
    IdTypeDetail: []
  }


  connection.query('select id_type_detail, name_type from type_detail;', function(error, result, fields){
    resulquery.IdTypeDetail = result;
    res.json(resulquery);
  });

});

//User
app.get('/api/getvalueforeignkeyuser', function(req,res) {

  var resulquery = {
    IdGender: [],
    IdTypeUser: []
  }


  connection.query('select id_gender, name_gender from gender;', function(error, result, fields){
    resulquery.IdGender = result;
  });

  connection.query('select id_type_user, name_type from type_user;', function(error, result, fields){
    resulquery.IdTypeUser = result;
    res.json(resulquery);
  });

});

const hostname = '127.0.0.1';
const port = process.env.PORT || 3333;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});