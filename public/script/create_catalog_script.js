function GetCatalogElement(){

    fetch('http://localhost:3333/api/getcatalogelement')
        .then(res => res.json())
        .then(data => {
            data.push({name_type: "Популярные товары", name_sub_type_detail: null}, {name_type: "Товары со скидкой", name_sub_type_detail: null});
            CreateCatalog(data);
            Mas = data;





            var ContainerCatalog = document.querySelector('.menu-nav-column');


            ContainerCatalog.addEventListener('click', (e) => {

                if (e.target.id.indexOf('element-menu-where-sub-menu') == 0 && $('body').width() <= 930){

                    UpDownSabmenu(+e.target.id.replace('element-menu-where-sub-menu', ''))
                }
            })


            function UpDownSabmenu(i){

                if ($('.submenu-nav-column').eq(i).css('display') == "none"){
                    $(".submenu-nav-column").eq(i).slideDown("fast");
                }else{
                    $(".submenu-nav-column").eq(i).slideUp("fast");
                }
                changearrow(i);
            }
        })

}








function CreateCatalog(mas){

    var CatalogPanel = document.querySelector('.menu-nav-column');
    var UnicMas = [];
    var FlagUnicMas = true;
    var CountElementMenu = 0;



    for (var i = 0; i < mas.length; i++){


        for (var j = 0; j < UnicMas.length; j++){
            if (UnicMas[j] == mas[i].name_type){
                FlagUnicMas = false;
                break;
            }
        }



        if (FlagUnicMas){

            var ElementMenu = document.createElement('div');


            if (mas[i].name_sub_type_detail !== null){
                
                ElementMenu.setAttribute('class', 'element-menu-nav-column there-is-submenu');

                var NameElementMenu = document.createElement('div');
                NameElementMenu.setAttribute('class', 'name-basik-menu');
                NameElementMenu.setAttribute('id', 'element-menu-where-sub-menu'+ CountElementMenu)
                NameElementMenu.innerHTML = mas[i].name_type;
                ElementMenu.appendChild(NameElementMenu);

                if ($('body').width() <= 930){

                    var ArrowElementMenu = document.createElement('i');
                    ArrowElementMenu.setAttribute('class', 'fas fa-angle-down');
                    ElementMenu.appendChild(ArrowElementMenu);
                } else {

                    var ArrowElementMenu = document.createElement('i');
                    ArrowElementMenu.setAttribute('class', 'fas fa-angle-right');
                    ElementMenu.appendChild(ArrowElementMenu);
                }


                var PanelSubMenu = document.createElement('div');
                PanelSubMenu.setAttribute('class', 'submenu-nav-column');
                ElementMenu.appendChild(PanelSubMenu);

                for (var z = 0; z < mas.length; z++){

                    if (mas[i].name_type == mas[z].name_type){

                        var LinkElementSubMenu = document.createElement('a');
                        LinkElementSubMenu.setAttribute('href','#/catalog/'+mas[z].name_sub_type_detail);
                        PanelSubMenu.appendChild(LinkElementSubMenu);


                        var ElementSubMenu = document.createElement('div');
                        ElementSubMenu.setAttribute('class', 'element-submenu-nav-column');
                        ElementSubMenu.innerHTML = mas[z].name_sub_type_detail;
                        LinkElementSubMenu.appendChild(ElementSubMenu);
                    }
                }

                CountElementMenu++;

            } else {

                ElementMenu.setAttribute('class', 'element-menu-nav-column');
                ElementMenu.innerHTML = mas[i].name_type;
            }

            var LinkElementMenu = document.createElement('a');

            if ($('body').width() <= 930){

                if (mas[i].name_sub_type_detail == null){
                    LinkElementMenu.setAttribute('href','#/catalog/'+mas[i].name_type);
                }
                
            } else {

                LinkElementMenu.setAttribute('href','#/catalog/'+mas[i].name_type);
            }
            
            LinkElementMenu.setAttribute('class', 'link-element-menu')
            CatalogPanel.appendChild(LinkElementMenu);

            LinkElementMenu.appendChild(ElementMenu);
            UnicMas.push(mas[i].name_type);
        }

        FlagUnicMas = true;


    }

}






var Mas = [];



function pageIndex(){

    if (window.location.hash.indexOf('#/catalog') == 0 || window.location.hash == '#/catalog' || window.location.hash == '#/main'|| window.location.hash.indexOf('#/detail/') == 0 || window.location.hash == '#/exchange-and-return' || window.location.hash == '#/payment' || window.location.hash == '#/delivery' || window.location.hash == '#/contacts' || window.location.hash == '#/about-company' || window.location.hash == '#/main'){

            if (Mas.length == 0){
                
                GetCatalogElement();
            } else {
                
                CreateCatalog(Mas);

                var ContainerCatalog = document.querySelector('.menu-nav-column');


                ContainerCatalog.addEventListener('click', (e) => {

                    if (e.target.id.indexOf('element-menu-where-sub-menu') == 0 && $('body').width() <= 930){

                        UpDownSabmenu(+e.target.id.replace('element-menu-where-sub-menu', ''))
                    }
                })


                function UpDownSabmenu(i){

                    if ($('.submenu-nav-column').eq(i).css('display') == "none"){
                        $(".submenu-nav-column").eq(i).slideDown("fast");
                    }else{
                        $(".submenu-nav-column").eq(i).slideUp("fast");
                    }
                    changearrow(i);
                }
            }
    }

}

$(document).ready(function(){

    pageIndex();

    window.addEventListener('hashchange', pageIndex);



    window.onresize = function() {

        var colectionElementMenu = document.querySelectorAll('.there-is-submenu');
        var colectionlink = document.querySelectorAll('.link-element-menu');

        if ($('body').width() <= 930){

            for (var i = 0; i < colectionElementMenu.length; i++){

                var a = colectionElementMenu[i].querySelector('.fa-angle-right');

                if (a != null){
                    a.classList.remove('fa-angle-right');
                    a.classList.add('fa-angle-down');
                }
    
            }

            for (var i = 0; i < colectionlink.length; i++){

                if (colectionlink[i].querySelector('.submenu-nav-column') != null){
                    colectionlink[i].removeAttribute("href");
                }
            }

        } else {

            for (var i = 0; i < colectionElementMenu.length; i++){
                var a = colectionElementMenu[i].querySelector('.fa-angle-down');

                if (a != null){
                    a.classList.add('fa-angle-right');
                    a.classList.remove('fa-angle-down');
                }
            
            }


            for (var i = 0; i < colectionlink.length; i++){

                if (colectionlink[i].querySelector('.submenu-nav-column') != null){


                    colectionlink[i].setAttribute("href", '#/catalog/' + colectionlink[i].querySelector('.name-basik-menu').innerHTML);
                }
            }
        }
    }


})