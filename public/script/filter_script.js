function GetValueAboutFilter(a = null) {

    str = {
        name_type: a
    }

    fetch('/api/getvalueaboutfilter', {
            method : 'POST',
            body: JSON.stringify(str),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            CreateFilter(data);
            if (window.location.hash.indexOf('?') > -1){
                CheckedFilter (TakeApartURL().filter);
            }
        })

}

function GetValueAboutFilterXit() {

    fetch('/api/getvalueaboutfilterxit')
        .then(res => res.json())
        .then(data => {
            CreateFilter(data);
            if (window.location.hash.indexOf('?') > -1){
                CheckedFilter (TakeApartURL().filter);
            }
        })

}

function GetValueAboutFilterDiscont() {

    fetch('/api/getvalueaboutfilterdiscont')
        .then(res => res.json())
        .then(data => {
            CreateFilter(data);
            if (window.location.hash.indexOf('?') > -1){
                CheckedFilter (TakeApartURL().filter);
            }
        })

}


function TakeApartURL (){

    var indexFilter;

                for (var i = 0; i < decodeURIComponent(window.location.hash.replace('#/catalog/', '')).length; i++){

                    if ( decodeURIComponent(window.location.hash.replace('#/catalog/', ''))[i] == '?'){
                        indexFilter = i;
                    }
                }


                var str = {
                    name_type: decodeURIComponent(window.location.hash.replace('#/catalog/', '')).substring(indexFilter, 0),
                    filter: []
                            };

                var strFilter = decodeURIComponent(window.location.hash.replace('#/catalog/', '')).substring(indexFilter + 1);

                var MasFilter = strFilter.split('&');

                for (var i = 0; i < MasFilter.length; i++){
                    var a = MasFilter[i].split('=');
                    str.filter.push(a);
                }

    return str;

}




function CreateFilter(mas) {

    var ContainerFilter = document.querySelector('.filter');

    for (var i = 0; i < mas.nameElement.length; i++){

        var ElementFilter = document.createElement('div');
        ElementFilter.setAttribute('class', 'element-filter');
        ContainerFilter.insertBefore(ElementFilter, ContainerFilter.querySelector('.container-but-filter'));

            var TitleElementFilter = document.createElement('div');
            TitleElementFilter.setAttribute('class', 'title-element-filter');
            TitleElementFilter.setAttribute('id', 'filter-element-'+(i + 1));
            ElementFilter.appendChild(TitleElementFilter);

                var NameElementFilter = document.createElement('div');
                NameElementFilter.innerHTML = mas.nameElement[i].name_type_filter;
                TitleElementFilter.appendChild(NameElementFilter);

                var arrow = document.createElement('i');
                arrow.setAttribute('class', 'fas fa-angle-down');
                TitleElementFilter.appendChild(arrow);

            var ElementFilterSubMenu = document.createElement('div');
            ElementFilterSubMenu.setAttribute('class', 'element-filter-submenu');
            ElementFilter.appendChild(ElementFilterSubMenu);

                for (var j = 0; j < mas.valuesElement.length; j++){
                    
                    if (mas.valuesElement[j].name_type_filter == mas.nameElement[i].name_type_filter){
                        
                        var ContainerCheckBox = document.createElement('div');
                        ContainerCheckBox.setAttribute('class', 'container-filter-checkbox');
                        ElementFilterSubMenu.appendChild(ContainerCheckBox);

                            var CheckBox = document.createElement('input');
                            CheckBox.type = 'checkbox';
                            CheckBox.name = mas.nameElement[i].name_type_filter;
                            CheckBox.setAttribute('class', 'radio-button-delivery-method');
                            CheckBox.value = mas.valuesElement[j].value;
                            ContainerCheckBox.appendChild(CheckBox);

                            var ValueCheckBox = document.createElement('div');
                            ValueCheckBox.setAttribute('class', 'value-checkbox');
                            ValueCheckBox.innerHTML = mas.valuesElement[j].value;
                            ContainerCheckBox.appendChild(ValueCheckBox);
                    }
                }

    }
}



function CheckedFilter (mas){

    for (var i = 0; i < mas.length; i++){


        if (mas[i][0] == 'MinSell' || mas[i][0] == 'MaxSell' || mas[i][0] == 'Sort'){

            if (mas[i][0] == 'MinSell'){
                document.querySelector('#min-sell').value = mas[i][1];
            }

            if (mas[i][0] == 'MaxSell'){
                document.querySelector('#max-sell').value = mas[i][1];
            }

            if (mas[i][0] == 'Sort'){
                document.querySelector('.select-sorting-for-catalog').value = mas[i][1];
            }
        
        } else {

            document.querySelector("input[type='checkbox'][name='"+ mas[i][0] +"'][value='"+ mas[i][1] +"']").checked = true;
        
        }

    }
}



$(document).ready(function() {




    function pageIndexFilter() {


        if (window.location.hash == '#/catalog' || window.location.hash.indexOf('#/catalog?') == 0){
            GetValueAboutFilter();
        }



        if (window.location.hash.indexOf('#/catalog/') == 0 && window.location.hash.indexOf('?') == -1){

            if (decodeURIComponent(window.location.hash.replace('#/catalog/', '')) == 'Товары со скидкой' || decodeURIComponent(window.location.hash.replace('#/catalog/', '')) == 'Популярные товары'){

                if (decodeURIComponent(window.location.hash.replace('#/catalog/', '')) == 'Товары со скидкой'){
                    GetValueAboutFilterDiscont();
                }

                if (decodeURIComponent(window.location.hash.replace('#/catalog/', '')) == 'Популярные товары'){
                    GetValueAboutFilterXit();
                }

            } else {
                GetValueAboutFilter(decodeURIComponent(window.location.hash.replace('#/catalog/', '')));
            }
        }




        if (window.location.hash.indexOf('#/catalog/') == 0 && window.location.hash.indexOf('?') > -1){

            var indexFilter;

                for (var i = 0; i < decodeURIComponent(window.location.hash.replace('#/catalog/', '')).length; i++){

                    if ( decodeURIComponent(window.location.hash.replace('#/catalog/', ''))[i] == '?'){
                        indexFilter = i;
                    }
                }

            if (decodeURIComponent(window.location.hash.replace('#/catalog/', '')).substring(indexFilter, 0) == 'Товары со скидкой' || decodeURIComponent(window.location.hash.replace('#/catalog/', '')).substring(indexFilter, 0) == 'Популярные товары'){

                if (decodeURIComponent(window.location.hash.replace('#/catalog/', '')).substring(indexFilter, 0) == 'Товары со скидкой'){
                    GetValueAboutFilterDiscont();
                }

                if (decodeURIComponent(window.location.hash.replace('#/catalog/', '')).substring(indexFilter, 0) == 'Популярные товары'){
                    GetValueAboutFilterXit();
                }

            } else {
                GetValueAboutFilter(decodeURIComponent(window.location.hash.replace('#/catalog/', '')).substring(indexFilter, 0));
            }

        }


    }




    window.addEventListener('hashchange', pageIndexFilter());



    var ContainerFilter = document.querySelector('.filter');



    ContainerFilter.addEventListener('click', (e) => {

        if (e.target.className == 'title-element-filter'){

            UpDownSabmenu(+e.target.id.replace('filter-element-', ''))
        }
    })



    var ButtonFilter = document.querySelector('#button-filter');

    ButtonFilter.addEventListener('click', () => {

        var CollectionCheckBox = document.querySelectorAll('.radio-button-delivery-method');

        var strForURL = '?';

        if (document.querySelector('#min-sell').value != ''){
            var a = {
                NameCheckBox: 'MinSell',
                Value: document.querySelector('#min-sell').value
            }

            strForURL += a.NameCheckBox + '=' + a.Value + '&';
        }

        if (document.querySelector('#max-sell').value != ''){
            var a = {
                NameCheckBox: 'MaxSell',
                Value: document.querySelector('#max-sell').value
            }

            strForURL += a.NameCheckBox + '=' + a.Value + '&';
        }



        for (var i = 0; i < CollectionCheckBox.length; i++){

            if(CollectionCheckBox[i].checked){

                var a = {
                    NameCheckBox: '',
                    Value: ''
                }

                a.NameCheckBox = CollectionCheckBox[i].name;
                a.Value = CollectionCheckBox[i].value;

                strForURL += a.NameCheckBox + '=' + a.Value + '&';
            }
        }

        if (document.querySelector('.select-sorting-for-catalog').value != 'not-sort'){
            var a = {
                NameCheckBox: 'Sort',
                Value: document.querySelector('.select-sorting-for-catalog').value
            }

            strForURL += a.NameCheckBox + '=' + a.Value + '&';
        }

        strForURL = strForURL.substring(0, strForURL.length - 1);


        var indexFilter = -1;

                for (var i = 0; i < decodeURIComponent(window.location.hash).length; i++){

                    if ( decodeURIComponent(window.location.hash)[i] == '?'){
                        indexFilter = i;
                    }
                }

        if (indexFilter == -1){
            window.location.hash += strForURL;
        } else {

            window.location.hash = decodeURIComponent(window.location.hash).substring(indexFilter, 0) + strForURL;
        }

    })
    

})











function UpDownSabmenu(i){

    if ($('.element-filter-submenu').eq(i).css('display') == "none"){
        $(".element-filter-submenu").eq(i).slideDown("fast");
    }else{
        $(".element-filter-submenu").eq(i).slideUp("fast");
    }
    changearrow(i);
}


function changearrow(i){

    var title_element = document.querySelectorAll('.title-element-filter')[i];
    var arrow = title_element.querySelector('i');


    if (title_element.querySelector('.fa-angle-up') === null )
    {
        arrow.remove();

        var arrow2 = document.createElement('i');
        arrow2.setAttribute('class','fas fa-angle-up');

        title_element.appendChild(arrow2);
    } else {
        arrow.remove();

        var arrow2 = document.createElement('i');
        arrow2.setAttribute('class','fas fa-angle-down');

        title_element.appendChild(arrow2);
    }

}
