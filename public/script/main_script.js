
//UserData
var user = {
    img: '',
    sname: '',
    name: '',
    type: '',
    id: ''
}
var FlagUserSignIn = false;


function CreateDetailForList (mas, parent, data){

    var Panel = document.querySelector(parent);

    var ElementPanel = document.createElement('div');
    ElementPanel.setAttribute('class', 'element-catalog-content');
    Panel.appendChild(ElementPanel);


        var ContainerImgAndLabels = document.createElement('div');
        ContainerImgAndLabels.setAttribute('class', 'image-and-labels');
        ElementPanel.appendChild(ContainerImgAndLabels);

            var LinkDetailPage1 = document.createElement('a');
            LinkDetailPage1.href = '/#/detail/' + mas.artikle;
            ContainerImgAndLabels.appendChild(LinkDetailPage1);

                var Image = document.createElement('img');
                Image.setAttribute('class', 'img-detail-for-slider-detail');
                Image.src = mas.img;
                LinkDetailPage1.appendChild(Image);

            var LabelList = document.createElement('div');
            LabelList.setAttribute('class', 'labels-list');
            ContainerImgAndLabels.appendChild(LabelList);

                for (var t = 0; t < data.length; t++){
                    
                    if (mas.artikle == data[t].artikle){
                        var span = document.createElement('span');
                        

                        if (data[t].name_label == 'Новинка'){
                            span.setAttribute('class', 'label-is-new element-lable-list');
                            span.innerHTML = 'Новинка';
                        }

                        if (data[t].name_label == 'Хит'){
                            span.setAttribute('class', 'lable-is-hit element-lable-list');
                            span.innerHTML = 'Хит';
                        }

                        if (data[t].name_label.indexOf('Скидка') == 0){
                            span.setAttribute('class', 'lable-discount element-lable-list');
                            span.innerHTML = data[t].name_label.replace('Скидка ', '');
                        }


                        LabelList.appendChild(span);
                    }
                }


        var ContainerPriceDetail = document.createElement('div');
        ContainerPriceDetail.setAttribute('class', 'cost-for-detail');
        ElementPanel.appendChild(ContainerPriceDetail);

            var PriceDetail = document.createElement('div');
            PriceDetail.setAttribute('class', 'cost-detail-for-slider');
            PriceDetail.innerHTML = mas.price.toFixed(2) + ' руб';
            ContainerPriceDetail.appendChild(PriceDetail);

            var LinkDetailPage2 = document.createElement('a');
            LinkDetailPage2.href = '/#/detail/' + mas.artikle;
            ContainerPriceDetail.appendChild(LinkDetailPage2);

                var ContainerButMoveToPageDetail = document.createElement('div');
                ContainerButMoveToPageDetail.setAttribute('class', 'move-to-detail-page');
                LinkDetailPage2.appendChild(ContainerButMoveToPageDetail);
                
                    var ButMoveToPageDetail = document.createElement('i');
                    ButMoveToPageDetail.setAttribute('class', 'far fa-arrow-alt-circle-right');
                    ContainerButMoveToPageDetail.appendChild(ButMoveToPageDetail);


        var LinkDetailPage3 = document.createElement('a');
        LinkDetailPage3.href = '/#/detail/' + mas.artikle;
        ElementPanel.appendChild(LinkDetailPage3);

            var NameDetail = document.createElement('div');
            NameDetail.setAttribute('class', 'name-detail-for-slider');
            NameDetail.innerHTML = mas.name_detail;
            LinkDetailPage3.appendChild(NameDetail);

}

function VNalichii (a){

    var ContainerAvailabilityDetail = document.querySelector('.availability-detail');

    if (a == 0){
        var i = document.createElement('i');
        i.setAttribute('class', 'fas fa-times');
        ContainerAvailabilityDetail.appendChild(i);

        ContainerAvailabilityDetail.innerHTML += ' Нет в наличии';

        ContainerAvailabilityDetail.style.color = '#ff0404';
    }

    if (a > 0){
        var i = document.createElement('i');
        i.setAttribute('class', 'fas fa-check');
        ContainerAvailabilityDetail.appendChild(i);

        ContainerAvailabilityDetail.innerHTML += ' В наличии';

        ContainerAvailabilityDetail.style.color = '#40da03';
    }
}

function CreateGridFilter (mas){

    var ContainerForGrid = document.querySelector('.content-description-or-characteristic-basic-detail');

    var table = document.createElement('table');
    table.setAttribute('class', 'grid-filter-page-detail');
    ContainerForGrid.appendChild(table);

    for (var i = 0; i < mas.length; i++){

        var tr = document.createElement('tr');
        if ((i + 1) % 2 != 0){
            tr.style.backgroundColor = '#eeeeee';
        }
        table.appendChild(tr);

        var td = document.createElement('td');
        td.innerHTML = mas[i].name_type_filter;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.style.textAlign = 'right';
        td.innerHTML = mas[i].value;
        tr.appendChild(td);

    }
}

function CreateLabelDetail (data){

    var ContainerForLabel = document.querySelector('.labels-list-from-page-detail');

    for (var t = 0; t < data.length; t++){
                    
            var span = document.createElement('span');
            

            if (data[t].name_label == 'Новинка'){
                span.setAttribute('class', 'label-is-new element-lable-list');
                span.innerHTML = 'Новинка';
            }

            if (data[t].name_label == 'Хит'){
                span.setAttribute('class', 'lable-is-hit element-lable-list');
                span.innerHTML = 'Хит';
            }

            if (data[t].name_label.indexOf('Скидка') == 0){
                span.setAttribute('class', 'lable-discount element-lable-list');
                span.innerHTML = data[t].name_label.replace('Скидка ', '');
            }


            ContainerForLabel.appendChild(span);
    }
}

function CreatePanelUserAndSignOut (user){
    
    var ContainerRegAndSignIn = document.querySelector('.singinandregistor').querySelector('.container');
    ContainerRegAndSignIn.innerHTML = '';

                                var LinkPageUser = document.createElement('a');
                                LinkPageUser.setAttribute('href', '#/personal-area');
                                ContainerRegAndSignIn.appendChild(LinkPageUser);

                                    var DivPageUser = document.createElement('div');
                                    DivPageUser.setAttribute('class', 'singin singin-and-reg-elements');
                                    LinkPageUser.appendChild(DivPageUser);

                                        var ImageUser = document.createElement('img');
                                        ImageUser.setAttribute('src', user.img);
                                        ImageUser.setAttribute('class', 'img-from-singinandregistor');
                                        DivPageUser.appendChild(ImageUser);

                                        var NameUser = document.createElement('div');
                                        NameUser.innerHTML = user.name + ' ' + user.sname;
                                        DivPageUser.appendChild(NameUser);


                                var LinkExit = document.createElement('a');
                                LinkExit.setAttribute('id', 'sign-out-but');
                                ContainerRegAndSignIn.appendChild(LinkExit);

                                    var DivExit = document.createElement('div');
                                    DivExit.setAttribute('class', 'registor singin-and-reg-elements');
                                    DivExit.setAttribute('onclick', 'SignOut()');
                                    LinkExit.appendChild(DivExit);

                                        var IconExit = document.createElement('i');
                                        IconExit.setAttribute('class', 'fas fa-sign-out-alt icon');
                                        DivExit.appendChild(IconExit);

                                        var Exit = document.createElement('div');
                                        Exit.innerHTML = 'Выйти';
                                        DivExit.appendChild(Exit);
}

function CreatePanelSignInAndReg () {

    var ContainerRegAndSignIn = document.querySelector('.singinandregistor').querySelector('.container');
    ContainerRegAndSignIn.innerHTML = '';


    var LinkSignIn = document.createElement('a');
    LinkSignIn.setAttribute('href', '#/signin');
    LinkSignIn.setAttribute('id', 'link-sign-in');
    ContainerRegAndSignIn.appendChild(LinkSignIn);

        var DivSignIn = document.createElement('div');
        DivSignIn.setAttribute('class', 'singin singin-and-reg-elements');
        LinkSignIn.appendChild(DivSignIn);

            var IconSignIn = document.createElement('i');
            IconSignIn.setAttribute('class', 'fas fa-sign-in-alt icon');
            DivSignIn.appendChild(IconSignIn);

                var SignIn = document.createElement('div');
                SignIn.innerHTML = 'Вход';
                DivSignIn.appendChild(SignIn);


    var LinkReg = document.createElement('a');
    LinkReg.setAttribute('href', '#/userplus');
    ContainerRegAndSignIn.appendChild(LinkReg);

        var DivReg = document.createElement('div');
        DivReg.setAttribute('class', 'registor singin-and-reg-elements');
        LinkReg.appendChild(DivReg);

            var IconReg = document.createElement('i');
            IconReg.setAttribute('class', 'fas fa-user-plus icon');
            DivReg.appendChild(IconReg);

                var Reg = document.createElement('div');
                Reg.innerHTML = 'Регистрация';
                DivReg.appendChild(Reg);
}

//FunctionSignOut
function SignOut(){
    
    FlagUserSignIn = false;
    CreatePanelSignInAndReg ();
    deleteCookie('login');
    deleteCookie('password');

    user = {
        img: '',
        sname: '',
        name: '',
        type: '',
        id: ''
    }



    if (window.location.hash == '#/personal-area' || window.location.hash == '#/order-periodical'){
        window.location.hash = '#/signin';
    } else {
        location.reload();
    }

}


//Cookie
function setCookie(name, value, options) {
    options = options || {};
  
    var expires = options.expires;
  
    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
  
    value = encodeURIComponent(value);
  
    var updatedCookie = name + "=" + value;
  
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
  
    document.cookie = updatedCookie;
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
      expires: -1
    })
}


//ShowFourReview
function showFourReview (){

    fetch('/api/getfourlastreview')
    .then(res => res.json())
    .then(data => {

        document.querySelector('.panel-all-reviews').innerHTML = '';

        for (var i = 0; i < data.length; i++){
            createReview (data[i]);
        }

    })
}

function showAllReview (){

    fetch('/api/getallreview')
    .then(res => res.json())
    .then(data => {
        
        for (var i = 4; i < data.length; i++){
            createReview (data[i]);
        }

    })
}

function createReview (data, ContainerForAllReview) {

    var ContainerForAllReview = document.querySelector('.panel-all-reviews');

    var ElementAllReview = document.createElement('div');
    ElementAllReview.setAttribute('class', 'element-panel-all-reviews');
    ContainerForAllReview.appendChild(ElementAllReview);

        var PanelImage = document.createElement('div');
        PanelImage.setAttribute('class', 'panel-image-for-all-review');
        ElementAllReview.appendChild(PanelImage);

            var ContainerUserImg = document.createElement('div');
            ContainerUserImg.setAttribute('class', 'image-user-for-all-review');
            PanelImage.appendChild(ContainerUserImg);

                var ImageUser = document.createElement('img');
                ImageUser.src = data.image_user;
                ContainerUserImg.appendChild(ImageUser);

        var PanelTextAndMark = document.createElement('div');
        PanelTextAndMark.setAttribute('class', 'text-reviews-for-panel-all-review');
        ElementAllReview.appendChild(PanelTextAndMark);

            var PanelNmaeAndMark = document.createElement('div');
            PanelNmaeAndMark.setAttribute('class', 'name-and-thumb-user-for-all-review');
            PanelTextAndMark.appendChild(PanelNmaeAndMark);

                var NameUser = document.createElement('div');
                NameUser.setAttribute('class', 'name-user-for-all-review');
                NameUser.innerHTML = data.name;
                PanelNmaeAndMark.appendChild(NameUser);

                    if (data.mark != null){
                        var Mark = document.createElement('i');
                        if (data.mark == 'like'){
                            Mark.setAttribute('class', 'far fa-thumbs-up thumd-up-in-all-review');
                        }
                        if (data.mark == 'dislike'){
                            Mark.setAttribute('class', 'far fa-thumbs-down thumd-down-in-all-review');
                        }
                        PanelNmaeAndMark.appendChild(Mark);
                    }
            
            var TextUser = document.createElement('div');
            TextUser.setAttribute('class', 'text-user-for-all-review');
            TextUser.innerHTML = data.text_review;
            PanelTextAndMark.appendChild(TextUser);
}



//CreateBlogs
function CreateListBlogTitle(mas) {

    var ContainerListBlogTitle = document.querySelector('.blog-menu-hide');

    for (var i = 0; i < mas.length; i++){
        
        var LinkTitle = document.createElement('a');
        LinkTitle.href = '#/all-blogs/blog=' + mas[i].title_blog;
        ContainerListBlogTitle.appendChild(LinkTitle);

            var ElementMenuTitle = document.createElement('div');
            ElementMenuTitle.setAttribute('class','element-menu-nav-column');
            ElementMenuTitle.innerHTML = mas[i].title_blog;
            LinkTitle.appendChild(ElementMenuTitle);
    }
}

function CreateAllBlogs(mas) {

    var Container = document.querySelector('.list-blog-messages');

    for (var i = 0; i < mas.length; i++){

            var ElementList = document.createElement('a');
            ElementList.setAttribute('class','element-list-blog-messages');
            ElementList.href = '#/all-blogs/blog=' + mas[i].title_blog;
            Container.appendChild(ElementList);

                var ContainerImg = document.createElement('div');
                ContainerImg.setAttribute('class', 'container-image-for-list-blog');
                ElementList.appendChild(ContainerImg);

                    var Img = document.createElement('img');
                    Img.setAttribute('class', 'image-for-list-blog');
                    Img.src = mas[i].img_blog;
                    ContainerImg.appendChild(Img);

                var Content = document.createElement('div');
                Content.setAttribute('class', 'content-for-list-blog');
                ElementList.appendChild(Content);

                    var Title = document.createElement('div');
                    Title.setAttribute('class', 'title-for-list-blog');
                    Title.innerHTML = mas[i].title_blog;
                    Content.appendChild(Title);

                    var TextBlog = document.createElement('div');
                    TextBlog.setAttribute('class','text-for-list-blog');
                    Content.appendChild(TextBlog);

                    for (var key in mas[i]){

                        if (key == 'CONVERT(text_blog USING utf8)'){
                            TextBlog.innerHTML =  mas[i][key].replace('§',' ').substring(0, 251);
                        }
                    }

                    var DateAdd = document.createElement('div');
                    DateAdd.setAttribute('class', 'data-for-list-blog');
                    Content.appendChild(DateAdd);

                        var IconColendar = document.createElement('i');
                        IconColendar.setAttribute('class', 'far fa-calendar-alt');
                        DateAdd.appendChild(IconColendar);

                    var createDate = new Date(mas[i].date_add);
                    DateAdd.innerHTML += createDate.getDate() + '.' + createDate.getMonth() + '.' + createDate.getFullYear();


    }
}



//Basket
function ButtonBasketValue(user) {

    var ContainerCount = document.querySelector('.count-detail-in-bat-basket');
    var ContainerPrice = document.querySelector('.summabasket');
    
    if (user.id != ''){
        //But if user sign-in

        fetch('/api/getbutbasketvalue', {
            method : 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            
            var AllCount = 0;
            var AllPrice = 0;

            for (var i = 0; i < data.length; i++){

                AllCount += +data[i].count_by;
                AllPrice += +data[i].count_by * (+data[i].price);
            }

            ContainerCount.innerHTML = AllCount;
            ContainerPrice.innerHTML = AllPrice.toFixed(2) + ' руб';
        })
    } else {
        
        if (getCookie('artikle_detail') != undefined && getCookie('count_detail') != undefined && getCookie('price_detail') != undefined){
            //But if user not sign-in
            var strPrice = getCookie('price_detail');
            var strCount = getCookie('count_detail');

            var masPrice = strPrice.split('&');
            var masCount = strCount.split('&');

            var Price = 0;
            var AllCount = 0;

            for (var i = 0; i < masPrice.length; i++){

                AllCount += +masCount[i];
                Price += (+masPrice[i]*+masCount[i]);
            }
            

            ContainerCount.innerHTML = AllCount;
            ContainerPrice.innerHTML = Price.toFixed(2) + ' руб';
        } else {
            //But if basket don't have detail
            ContainerCount.innerHTML = 0;
            ContainerPrice.innerHTML = '0.00 руб';
        }

    }
}

function CreateBasketListCookie(data, masArtikle, masCount) {
                            
                            var AllPrice = 0;

                            var СontainerBasketPage = document.querySelector('.basket-page');

                            var ContainerListBasket = document.createElement('div');
                            ContainerListBasket.setAttribute('class', 'list-basket');
                            СontainerBasketPage.insertBefore(ContainerListBasket, СontainerBasketPage.children[1]);

                            for (var i = 0; i < data.queryDetai.length; i++){

                                var ElementListBasket = document.createElement('div');
                                ElementListBasket.setAttribute('class', 'element-list-basket');
                                ElementListBasket.setAttribute('id', 'ElementListBasket' + data.queryDetai[i].artikle);
                                ContainerListBasket.appendChild(ElementListBasket);

                                    var ContainerImg = document.createElement('a');
                                    ContainerImg.setAttribute('class', 'conteiner-image-in-list-basket');
                                    ContainerImg.href = '#/detail/' + data.queryDetai[i].artikle;
                                    ElementListBasket.appendChild(ContainerImg);

                                        var Img = document.createElement('img');
                                        Img.setAttribute('class', 'image-in-list-basket');
                                        Img.src = data.queryDetai[i].img;
                                        ContainerImg.appendChild(Img);

                                    var NameDetail = document.createElement('a');
                                    NameDetail.setAttribute('class', 'name-detail-in-list-basket');
                                    NameDetail.href = '#/detail/' + data.queryDetai[i].artikle;
                                    NameDetail.innerHTML = data.queryDetai[i].name_detail;
                                    ElementListBasket.appendChild(NameDetail);

                                    var PriceDetail = document.createElement('div');
                                    PriceDetail.setAttribute('class', 'price-detail-in-list-basket');
                                    PriceDetail.innerHTML = data.queryDetai[i].price.toFixed(2) + ' руб';
                                    ElementListBasket.appendChild(PriceDetail);

                                    var CounterDetail = document.createElement('div');
                                    CounterDetail.setAttribute('class', 'counter-detail-in-list-basket');
                                    ElementListBasket.appendChild(CounterDetail);

                                        var ElementsCounterPanel = document.createElement('div');
                                        ElementsCounterPanel.setAttribute('class', 'counter-detail-in-basic-detail-page');
                                        CounterDetail.appendChild(ElementsCounterPanel);

                                            var ButMinus = document.createElement('button');
                                            ButMinus.setAttribute('class', 'button-change-counter-detail');
                                            ButMinus.setAttribute('id', 'ButMinus' + data.queryDetai[i].artikle);
                                            ButMinus.innerHTML = '-';
                                            ElementsCounterPanel.appendChild(ButMinus);

                                            var InputCount = document.createElement('input');
                                            InputCount.setAttribute('class', 'counter-detail');
                                            InputCount.setAttribute('id', 'InputCount' + data.queryDetai[i].artikle);
                                            InputCount.type = 'text';
                                            var countThisdetail = 1;
                                            for (var j = 0; j < masArtikle.length; j++){

                                                if (masArtikle[j] == data.queryDetai[i].artikle){
                                                    InputCount.value = masCount[j];
                                                    countThisdetail = masCount[j];
                                                    break;
                                                }
                                            }
                                            ElementsCounterPanel.appendChild(InputCount);

                                            var ButPlus = document.createElement('button');
                                            ButPlus.setAttribute('class', 'button-change-counter-detail');
                                            ButPlus.setAttribute('id', 'ButPlus' + data.queryDetai[i].artikle);
                                            ButPlus.innerHTML = '+';
                                            ElementsCounterPanel.appendChild(ButPlus);

                                    var AllCountThisDetail = document.createElement('div');
                                    AllCountThisDetail.setAttribute('class', 'price-this-details-in-list-basket');
                                    AllCountThisDetail.setAttribute('id', 'all-price-this-detail' + data.queryDetai[i].artikle);
                                    AllCountThisDetail.innerHTML = (data.queryDetai[i].price * countThisdetail).toFixed(2) + ' руб';
                                    AllPrice += +(data.queryDetai[i].price * countThisdetail).toFixed(2);
                                    ElementListBasket.appendChild(AllCountThisDetail);

                                    var ContainerCros = document.createElement('div');
                                    ContainerCros.setAttribute('class', 'delet-detail-in-list-basket');
                                    ElementListBasket.appendChild(ContainerCros);

                                        var Cros = document.createElement('i');
                                        Cros.setAttribute('class', 'fas fa-times');
                                        Cros.setAttribute('id', 'cros-this-detail' + data.queryDetai[i].artikle);
                                        ContainerCros.appendChild(Cros);
                            }
                            
                            document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';
                            return AllPrice;

}

function NotDetailInBasket() {

                        var СontainerBasketPage = document.querySelector('.basket-page');

                        var div = document.createElement('div');
                        div.setAttribute('class', 'container-resalt-search');
                        СontainerBasketPage.insertBefore(div, СontainerBasketPage.children[1]);

                        var i = document.createElement('i');
                        i.setAttribute('class', 'fas fa-info-circle');
                        div.appendChild(i);

                        var word = document.createElement('div');
                        word.setAttribute('class', 'result-serch-word');
                        word.innerHTML = 'Корзина пуста';
                        div.appendChild(word);
                        
                        var ButOrder = document.querySelector('#but-new-order');
                        ButOrder.disabled = true;
                        ButOrder.classList.remove('stylebutton');
                        ButOrder.classList.add('stylebutton2');
}

function CreateBasketListDataUser(data) {
                            
    var AllPrice = 0;

    var СontainerBasketPage = document.querySelector('.basket-page');

    var ContainerListBasket = document.createElement('div');
    ContainerListBasket.setAttribute('class', 'list-basket');
    СontainerBasketPage.insertBefore(ContainerListBasket, СontainerBasketPage.children[1]);

    for (var i = 0; i < data.queryDetai.length; i++){

        var ElementListBasket = document.createElement('div');
        ElementListBasket.setAttribute('class', 'element-list-basket');
        ElementListBasket.setAttribute('id', 'ElementListBasket' + data.queryDetai[i].artikle);
        ContainerListBasket.appendChild(ElementListBasket);

            var ContainerImg = document.createElement('a');
            ContainerImg.setAttribute('class', 'conteiner-image-in-list-basket');
            ContainerImg.href = '#/detail/' + data.queryDetai[i].artikle;
            ElementListBasket.appendChild(ContainerImg);

                var Img = document.createElement('img');
                Img.setAttribute('class', 'image-in-list-basket');
                Img.src = data.queryDetai[i].img;
                ContainerImg.appendChild(Img);

            var NameDetail = document.createElement('a');
            NameDetail.setAttribute('class', 'name-detail-in-list-basket');
            NameDetail.href = '#/detail/' + data.queryDetai[i].artikle;
            NameDetail.innerHTML = data.queryDetai[i].name_detail;
            ElementListBasket.appendChild(NameDetail);

            var PriceDetail = document.createElement('div');
            PriceDetail.setAttribute('class', 'price-detail-in-list-basket');
            PriceDetail.innerHTML = data.queryDetai[i].price.toFixed(2) + ' руб';
            ElementListBasket.appendChild(PriceDetail);

            var CounterDetail = document.createElement('div');
            CounterDetail.setAttribute('class', 'counter-detail-in-list-basket');
            ElementListBasket.appendChild(CounterDetail);

                var ElementsCounterPanel = document.createElement('div');
                ElementsCounterPanel.setAttribute('class', 'counter-detail-in-basic-detail-page');
                CounterDetail.appendChild(ElementsCounterPanel);

                    var ButMinus = document.createElement('button');
                    ButMinus.setAttribute('class', 'button-change-counter-detail');
                    ButMinus.setAttribute('id', 'ButMinus' + data.queryDetai[i].artikle);
                    ButMinus.innerHTML = '-';
                    ElementsCounterPanel.appendChild(ButMinus);

                    var InputCount = document.createElement('input');
                    InputCount.setAttribute('class', 'counter-detail');
                    InputCount.setAttribute('id', 'InputCount' + data.queryDetai[i].artikle);
                    InputCount.type = 'text';
                    InputCount.value = data.queryDetai[i].count_buy;
                    ElementsCounterPanel.appendChild(InputCount);

                    var ButPlus = document.createElement('button');
                    ButPlus.setAttribute('class', 'button-change-counter-detail');
                    ButPlus.setAttribute('id', 'ButPlus' + data.queryDetai[i].artikle);
                    ButPlus.innerHTML = '+';
                    ElementsCounterPanel.appendChild(ButPlus);

            var AllCountThisDetail = document.createElement('div');
            AllCountThisDetail.setAttribute('class', 'price-this-details-in-list-basket');
            AllCountThisDetail.setAttribute('id', 'all-price-this-detail' + data.queryDetai[i].artikle);
            AllCountThisDetail.innerHTML = (data.queryDetai[i].price * data.queryDetai[i].count_buy).toFixed(2) + ' руб';
            AllPrice += +(data.queryDetai[i].price * data.queryDetai[i].count_buy).toFixed(2);
            ElementListBasket.appendChild(AllCountThisDetail);

            var ContainerCros = document.createElement('div');
            ContainerCros.setAttribute('class', 'delet-detail-in-list-basket');
            ElementListBasket.appendChild(ContainerCros);

                var Cros = document.createElement('i');
                Cros.setAttribute('class', 'fas fa-times');
                Cros.setAttribute('id', 'cros-this-detail' + data.queryDetai[i].artikle);
                ContainerCros.appendChild(Cros);
    }
    
    document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';
    return AllPrice;

}




//Order

function CreateListDeatilOrder(data){

    var ContainerContent = document.querySelector('.list-what-in-basket');
    var AllPrice = 0;

    for (var i =0; i < data.length; i++){

        var ElementList = document.createElement('div');
        ElementList.setAttribute('class', 'element-list-what-in-basket');
        ContainerContent.appendChild(ElementList);

            var ContainerImg = document.createElement('a');
            ContainerImg.setAttribute('class', 'container-image-element-list-what-in-basket');
            ContainerImg.href = '#/detail/' + data[i].artikle;
            ElementList.appendChild(ContainerImg)

                var Img = document.createElement('img');
                Img.setAttribute('class', 'image-element-list-what-in-basket');
                Img.src = data[i].img;
                ContainerImg.appendChild(Img);

            var NameElement = document.createElement('a');
            NameElement.setAttribute('class', 'name-detail-element-list-what-in-basket');
            NameElement.innerHTML = data[i].name_detail;
            NameElement.href = '#/detail/' + data[i].artikle;
            ElementList.appendChild(NameElement);

            var ContainerPrice = document.createElement('div');
            ContainerPrice.setAttribute('class', 'counter-price-element-list-what-in-basket');
            ContainerPrice.innerHTML = data[i].count_buy + ' x ';
            ElementList.appendChild(ContainerPrice);

                var Price = document.createElement('span');
                Price.setAttribute('class', 'sup-price');
                Price.innerHTML = data[i].price.toFixed(2) + ' руб';
                ContainerPrice.appendChild(Price);

        AllPrice += +data[i].count_buy * +data[i].price;
    }

    document.querySelector('#price-all-details').innerHTML = AllPrice.toFixed(2) + ' руб';
    document.querySelector('#all-price-order').innerHTML = AllPrice.toFixed(2) + ' руб';
    return AllPrice;
}






$(document).ready(function() {

    //User
        // var user = {
        //     img: '',
        //     sname: '',
        //     name: '',
        //     type: '',
        //     id: ''
        // }
    // var FlagUserSignIn = false;



    var basket = {
        artikle: '',
        price: 0.00,
        count: 0
    }



    //Cookie
    if (getCookie('login') != undefined && getCookie('password') != undefined){

        var SignInValue = {
            login: getCookie('login'),
            password: getCookie('password')
        }

        fetch('/api/signin', {
            method : 'POST',
            body: JSON.stringify(SignInValue),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {

            if (data.result != undefined){
                
                FlagUserSignIn = true;
                user.img = data.result[0].image_user;
                user.sname = data.result[0].s_name;
                user.name = data.result[0].name;
                user.type = data.result[0].name_type;
                user.id = data.result[0].id_user;
                
                CreatePanelUserAndSignOut(user);
                ButtonBasketValue(user);

                if (window.location.hash == '#/main'){
                    document.querySelector('.panel-my-reviews').style.display = 'flex';
                    document.querySelector('#image-user-my-review').src = user.img;
                    document.querySelector('#name-for-my-review').innerHTML = user.name;
                }

                if (user.type == 'Администратор'){

                    var ContainerMenu = document.querySelector('.menu-nav-row');

                    var Link = document.createElement('a');
                    Link.href = '#/adminca';
                    Link.setAttribute('id', 'element-adminki');
                    ContainerMenu.appendChild(Link);

                        var ElementRowMenu = document.createElement('div');
                        ElementRowMenu.setAttribute('class', 'element-menu-nav-row');
                        ElementRowMenu.innerHTML = 'Админка';
                        Link.appendChild(ElementRowMenu);
                }
                
            }
        })
    }


    //BasketBut
    ButtonBasketValue(user);


    //Search
    var ButtonSearch = document.querySelector('.button-search');
    var InputSearch = document.querySelector('.input-search');

    ButtonSearch.addEventListener('click', () => {

        if (InputSearch.value.replace(/\s+/g,' ').trim().length > 0){
            window.location.hash = '#/catalog/search?=' + InputSearch.value;
            InputSearch.value = '';
        }
        
    })




    //Hide Menu
    var ButMenu = document.querySelector('.hide-but-menu');
    var HideMenu = document.querySelector('.hide-menu');
    var FlagClickBut = false;

    ButMenu.addEventListener('click', () => {

      if (FlagClickBut == false){

        HideMenu.style.display = 'flex';
        ButMenu.style.backgroundColor = '#f9c823';
        ButMenu.style.borrderColor = '#c9c9c9';
        FlagClickBut = true;
      } else {

        HideMenu.style.display = 'none';
        ButMenu.style.backgroundColor = 'transparent';
        ButMenu.style.borrderColor = 'transparent';
        FlagClickBut = false;
      }
    })




    //ListTitleBlogs
    var ListTitleBlogs;
    var MasBlogs;



    //HashPages
    var Content = document.querySelector('.container-content');

    var fromBasket = document.querySelector('.content');

    pageIndex();

    function AddScriptForPage(url){
        var script = document.createElement('script');
        script.src = url;
        script.charset = 'UTF-8';
        Content.appendChild(script);
    }


    function pageIndex(){

        if (FlagClickBut == true){

            HideMenu.style.display = 'none';
            ButMenu.style.backgroundColor = 'transparent';
            ButMenu.style.borrderColor = 'transparent';
            FlagClickBut = false;
        }

        if (fromBasket.classList.contains('container-for-basket-page')){
            fromBasket.classList.remove('container-for-basket-page');
        }

        if (user.id == '' && getCookie('login') == undefined && getCookie('password') == undefined && window.location.hash.indexOf('#/signin') == -1 && window.location.hash != '#/userplus' && document.querySelector('#link-sign-in') != null){

            document.querySelector('#link-sign-in').href = '#/signin?'+window.location.hash;
        }

        Content.innerHTML = "";
        switch (window.location.hash){


            case '#/main':
                Content.innerHTML = 
                `<div class="content-column1 column-for-hide">
                    <div class="menu-nav-column">
                        
                        <div class="name-menu-nav-column">Каталог</div>

                    </div>

                    <div class="blog">
                        <div class="title-blog">Блог</div>
                        
                    </div>
                </div>

                <div class="content-column2">

                    <div class="slidercontainer">
                        <div class="carousel-hider">
                            <div class="slider-nav slider-nav-left"><i class="fas fa-arrow-alt-circle-left"></i></div>
                            <ul class="carousel-list">
                                <li class="carousel-element"><img src="static/image/slider/car4.jpg"></li>
                                <li class="carousel-element"><img src="static/image/slider/car5.jpg"></li>
                                <li class="carousel-element"><img src="static/image/slider/car6.jpg"></li>
                            </ul>
                            <div class="slider-nav slider-nav-right"><i class="fas fa-arrow-alt-circle-right"></i></div>
                        </div>
                    </div>
                    <div class='container-slider-2'>
                    <div class="menu-nav-topsell">
                        <div id="xitd-detail-slider" class="element-menu-nav-topsell">ПОПУЛЯРНЫЕ ТОВАРЫ</div>
                        <div id="discont-detail-slider" class="element-menu-nav-topsell">ТОВАРЫ СО СКИДКОЙ</div>
                    </div>
                    
                    <div class="slider-list-detail-for-hom-page">
                        <div class="slider-list-detail-for-hom-page-nav slider-list-detail-for-hom-page-nav-left"><i class="fas fa-arrow-alt-circle-left"></i></div>
                        <ul class="slider-list-detail-for-hom-page-carousel-list">

                            
                            
                        </ul>
                        <div class="slider-list-detail-for-hom-page-nav slider-list-detail-for-hom-page-nav-right"><i class="fas fa-arrow-alt-circle-right"></i></div>

                    </div>
                    </div>

                    <div class="benefits">

                        <div class="element-benefits">
                            <div class="image-element-benefits"><img src="static/image/speedometr.png"></div>
                            <div class="name-element-benefits">Быстрая доставка до двери</div>
                        </div>

                        <div class="element-benefits">
                            <div class="image-element-benefits"><img src="static/image/image_descounter.png"></div>
                            <div class="name-element-benefits">Выгодные акции и бонусы</div>
                        </div>

                        <div class="element-benefits">
                            <div class="image-element-benefits"><img src="static/image/image_star.png"></div>
                            <div class="name-element-benefits">Гарантии качества продукции</div>
                        </div>

                    </div>

                    <div class="info-about-shop-for-home-page">
                        <div class="info-about-shop-title">Интернет-магазин «АвтоМир» – лучшие товары по низким ценам!</div>

                        <div class="info-about-shop-content">Мы рады предложить вам недорогие, но качественные товары с подробными описаниями, характеристиками и фотографиями. У нас Вы можете купить замечательные товары: технику, электронику, одежду, обувь, игрушки, книги и многое другое в вашем регионе по ценам производителей и без наценки.</div>
                        <div class="info-about-shop-content">Продажа большого ассортимента разнообразных товаров – основная специализация нашего интернет-магазина. Мы доставим ваш заказ бесплатно в любой уголок мира, осуществим подробную консультацию по товарам и поможем с выбором.</div>
                        <div class="info-about-shop-content">Магазин «АвтоМир» предлагает Вам купить качественную и доступную технику, электронику, одежду, обувь, игрушки, книги и многое другое с доставкой! Все виды современных товаров от эконом класса до более дорогих представлены в нашем каталоге.</div>
                        <div class="info-about-shop-content">Вы можете купить любые товары в вашем городе: технику, электронику, одежду, обувь, игрушки, книги и многое другое.</div>

                        <div class="info-about-shop-title">Наши главные преимущества:</div>

                        <ul class="info-about-shop-list-content">
                            <li>Низкие цены от производителей</li>
                            <li>Доставка по городу в день заказа</li>
                            <li>Только оригинальная и сертифицированная продукция</li>
                            <li>Гарантия на все товары – 5 лет!</li>
                            <li>Не понравился товар? Вернем или обменяем в течение 14-ти дней без оформления лишних бумаг!</li>

                        </ul>
                    </div>

                    <div class="panel-reviews">
                        <div class="title-panel-review">Отзывы</div>

                        <div class="panel-my-reviews">
                            <div class="panel-image-and-name-for-review">
                                <div class="image-user-for-review"><img id='image-user-my-review' src=""></div>
                                <div id='name-for-my-review' class="name-user-for-review"></div>
                                <div class="thumbs-up-and-down">
                                    <i class="far fa-thumbs-up"></i>
                                    <i class="far fa-thumbs-down"></i>
                                </div>
                            </div>

                            <div class="panel-textarea-and-buttons-for-review">
                                <textarea  id='area-my-review' class="textarea-for-review" placeholder="Написать отзыв..."></textarea>

                                <div class="button-panel-for-user-review">
                                    <button id='send-my-review' class="stylebutton">Отправить</button>
                                    <button id='clear-my-review' class="stylebutton">Отмена</button>
                                </div>

                            </div>

                        </div>


                        <div class="all-reviews">

                            <div class="panel-all-reviews">
                            

                            </div>

                            <div class="button-show-all-reviews"><button id='but-show-all-review' class="stylebutton">Показать все</button></div>

                        </div>

                    </div>

                </div>`

                AddScriptForPage('script/script_slider.js');

                if (FlagUserSignIn){
                    document.querySelector('.panel-my-reviews').style.display = 'flex';
                    document.querySelector('#image-user-my-review').src = user.img;
                    document.querySelector('#name-for-my-review').innerHTML = user.name;
                }
                



                //Review
                var MyReview = {
                    IdUser: '',
                    TextReview: '',
                    mark: ''
                }

                var ButSendReview = document.querySelector('#send-my-review');
                var ButClearReview = document.querySelector('#clear-my-review');

                ButClearReview.addEventListener('click', () => {

                    document.querySelector('#area-my-review').value = '';
                })

                var ContainerLikeAndDislike = document.querySelector('.thumbs-up-and-down');

                ContainerLikeAndDislike.addEventListener('click', (e) => {

                    //Like
                    if (e.target.className == 'far fa-thumbs-up'){
                        if (MyReview.mark == ''){
                            document.querySelector('.fa-thumbs-up').setAttribute('id', 'mark-like');
                            MyReview.mark = 'like';
                        } else {

                            if (MyReview.mark == 'dislike'){
                                document.querySelector('.fa-thumbs-down').removeAttribute('id', 'mark-dislike');
                                document.querySelector('.fa-thumbs-up').setAttribute('id', 'mark-like');
                                MyReview.mark = 'like';
                            } else {
                                document.querySelector('.fa-thumbs-up').removeAttribute('id', 'mark-like');
                                MyReview.mark = '';
                            }
                        }
                    }
                    //Dislike
                    if (e.target.className == 'far fa-thumbs-down'){
                        if (MyReview.mark == ''){
                            document.querySelector('.fa-thumbs-down').setAttribute('id', 'mark-dislike');
                            MyReview.mark = 'dislike';
                        } else {

                            if (MyReview.mark == 'like'){
                                document.querySelector('.fa-thumbs-up').removeAttribute('id', 'mark-like');
                                document.querySelector('.fa-thumbs-down').setAttribute('id', 'mark-dislike');
                                MyReview.mark = 'dislike';
                            } else {
                                document.querySelector('.fa-thumbs-down').removeAttribute('id', 'mark-like');
                                MyReview.mark = '';
                            }
                        }
                    }
                })

                ButSendReview.addEventListener('click', () => {

                    if (document.querySelector('#area-my-review').value != ''){

                        if (document.querySelector('#area-my-review').value.replace(/\s+/g,' ').trim().length > 10){
                            
                            MyReview.TextReview = document.querySelector('#area-my-review').value.replace(/\s+/g,' ').trim();
                            MyReview.IdUser = user.id;
                            
                            fetch('/api/addreview', {
                                method : 'POST',
                                body: JSON.stringify(MyReview),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })

                            showFourReview ();

                            document.querySelector('#area-my-review').value = '';

                            if (MyReview.mark == 'like'){
                                document.querySelector('.fa-thumbs-up').removeAttribute('id', 'mark-like');
                            }

                            if (MyReview.mark == 'dislike'){
                                document.querySelector('.fa-thumbs-down').removeAttribute('id', 'mark-dislike');
                            }

                            MyReview.IdUser = '';
                            MyReview.mark = '';
                            MyReview.TextReview = '';
                        }
                    }
                })

                var ButtonShowAllReview = document.querySelector('#but-show-all-review');
                var flagButShowAllReview = false;

                ButtonShowAllReview.addEventListener('click', () => {
                    
                    if (flagButShowAllReview == false){

                        showAllReview();
                        flagButShowAllReview = true;
                        ButtonShowAllReview.innerHTML = "Скрыть"
                    } else {
                        
                        var CollectionAllreview = document.querySelectorAll('.element-panel-all-reviews');
                        var parentNodeAllreview = document.querySelector('.panel-all-reviews');

                        for (var i = CollectionAllreview.length - 1; i > 3; i--){
                            parentNodeAllreview.removeChild(CollectionAllreview[i]);
                        }

                        flagButShowAllReview = false;
                        ButtonShowAllReview.innerHTML = "Показать все";
                    }
                })

                showFourReview();



                var ContainerBlogs = document.querySelector('.blog');

                fetch('/api/getthreeblogs')
                .then(res => res.json())
                .then(data => {

                    for (var i = 0; i < data.length; i++){

                        var LinkBlog = document.createElement('a');
                        LinkBlog.href = '#/all-blogs/blog=' + data[0].title_blog;
                        ContainerBlogs.appendChild(LinkBlog);

                            var ElementBlog = document.createElement('div');
                            ElementBlog.setAttribute('class', 'element-blog');
                            LinkBlog.appendChild(ElementBlog);

                                var ImgBlog = document.createElement('img');
                                ImgBlog.setAttribute('class', 'image-for-element-blog');
                                ImgBlog.src = data[0].img_blog;
                                ElementBlog.appendChild(ImgBlog);

                                var TitleBlog = document.createElement('div');
                                TitleBlog.setAttribute('class', 'title-element-blog');
                                TitleBlog.innerHTML = data[0].title_blog;
                                ElementBlog.appendChild(TitleBlog);

                                var DateAdd = document.createElement('div');
                                DateAdd.setAttribute('class', 'day-element-blog');
                                ElementBlog.appendChild(DateAdd);

                                    var IconColendar = document.createElement('i');
                                    IconColendar.setAttribute('class', 'far fa-calendar-alt');
                                    DateAdd.appendChild(IconColendar);

                                    var dateValudate = new Date(data[0].date_add);
                                    DateAdd.innerHTML += ' '+ dateValudate.getDate() + '.' + dateValudate.getMonth() + '.' + dateValudate.getFullYear();
                    }
                })



            break;


            case '#/userplus':

                Content.innerHTML = 
                `<div class="signin">

                    <div class="title-page">Регистрация</div>

                    <div class="list-signin">


                        <div class="element-list-signin">
                            <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Логин</div></div>

                            <div class="container-input-element-singin">
                                <input id='login-reg' class="input-style" type="text">
                            </div>

                            <div id="hint-login-reg" class="hint-reg"></div>
                        </div>


                        <div class="element-list-signin">
                            <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Фамилия</div></div>

                            <div class="container-input-element-singin">
                                <input id='s-name-reg' class="input-style" type="text">
                            </div>

                            <div id="hint-s-name-reg" class="hint-reg"></div>
                        </div>

                        <div class="element-list-signin">
                            <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Имя</div></div>

                            <div class="container-input-element-singin">
                                <input id='name-reg' class="input-style" type="text">
                            </div>

                            <div id="hint-name-reg" class="hint-reg"></div>
                        </div>

                        <div class="element-list-signin">
                            <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Отчество</div></div>

                            <div class="container-input-element-singin">
                                <input id='patronemic-reg' class="input-style" type="text">
                            </div>

                            <div id="hint-patronemic-reg" class="hint-reg"></div>
                        </div>

                        <div class="element-list-signin">
                            <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Контактный телефон</div></div>

                            <div class="container-input-element-singin">
                                <input id='telefon-reg' class="input-style" type="text">
                            </div>

                            <div id="hint-telefon-reg" class="hint-reg"></div>
                        </div>

                        <div class="element-list-signin">
                            <div class="container-title-element-signin"><div class="title-element-signin">E-mail</div></div>

                            <div class="container-input-element-singin">
                                <input id='mail-reg' class="input-style" type="text">
                            </div>

                            <div id="hint-mail-reg" class="hint-reg"></div>
                        </div>

                        <div class="element-list-signin">
                                <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Пароль</div></div>

                            <div class="container-input-element-singin">
                                <input id='password-reg' class="input-style" type="password">
                            </div>

                            <div id="hint-password-reg" class="hint-reg"></div>
                        </div>

                        <div class="element-list-signin">
                                <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Повторите пароль</div></div>

                            <div class="container-input-element-singin">
                                <input id='repit-password-reg' class="input-style" type="password">
                            </div>

                            <div id="hint-repit-password-reg" class="hint-reg"></div>
                        </div>

                        <div class="list-button-signin">
                            <div id='signin-page-reg' class="button-signin"><button id='button-reg' class="stylebutton button-register">ЗАРЕГИСТРИРОВАТЬСЯ</button></div>
                            <a id='link-signin-reg' class="a-style-signin" href="${document.querySelector('#link-sign-in').href}">У меня уже есть аккаунт</a>
                        </div>

                    </div>

                </div>`


                var InputLogin = document.querySelector('#login-reg');
                var InputSNAme = document.querySelector('#s-name-reg');
                var InputName = document.querySelector('#name-reg');
                var InputPatronemic = document.querySelector('#patronemic-reg');
                var InputTelefon = document.querySelector('#telefon-reg');
                var InputMail = document.querySelector('#mail-reg');
                var InputPassword = document.querySelector('#password-reg');
                var InputRepitPassword = document.querySelector('#repit-password-reg');

                var FlagsVolidation = {
                    FlagLogin: false,
                    FlagSName: false,
                    FlagName: false,
                    FlagPatronemic: false,
                    FlagTelefon: false,
                    FlagMail: false,
                    FlagPassword: false,
                    FlagRepitPassword: false
                }


                InputLogin.addEventListener('focus', () => {
                    InputLogin.style.borderColor = '#f9c823';
                    document.querySelector('#hint-login-reg').innerHTML = '';
                })

                InputLogin.addEventListener('blur', () => {

                    var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-_0-9']+[a-zA-Zа-яА-Я_0-9']?$");

                    if (RegForName.test(InputLogin.value)){

                        var a = {
                            login: InputLogin.value
                        }
                        fetch('/api/unicklogin', {
                            method : 'POST',
                            body: JSON.stringify(a),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.queryUnickLogin){

                                FlagsVolidation.FlagLogin = true;
                                InputLogin.style.borderColor = '#40da03';

                            } else {

                                FlagsVolidation.FlagLogin = false;
                                document.querySelector('#hint-login-reg').innerHTML = 'Этот логин уже занят';
                                InputLogin.style.borderColor = '#ff0404';

                            }
                        })

                    } else {
                        
                        if (InputLogin.value != ''){
                            InputLogin.style.borderColor = '#ff0404';
                            document.querySelector('#hint-login-reg').innerHTML = 'Некорректные данные';
                        } else {
                            InputLogin.style.borderColor = '#c9c9c9';
                        }

                        FlagsVolidation.FlagLogin = false;

                    }
                })



                InputSNAme.addEventListener('focus', () => {
                    InputSNAme.style.borderColor = '#f9c823';
                    document.querySelector('#hint-s-name-reg').innerHTML = '';
                })

                InputSNAme.addEventListener('blur', () => {

                    var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$");

                    if (RegForName.test(InputSNAme.value)){

                        FlagsVolidation.FlagSName = true;
                        InputSNAme.style.borderColor = '#40da03';

                    } else {

                        if (InputSNAme.value != ''){
                            document.querySelector('#hint-s-name-reg').innerHTML = 'Некорректные данные';
                            InputSNAme.style.borderColor = '#ff0404';
                        } else {
                            InputSNAme.style.borderColor = '#c9c9c9';
                        }

                        FlagsVolidation.FlagSName = false;

                    }
                })




                InputName.addEventListener('focus', () => {
                    InputName.style.borderColor = '#f9c823';
                    document.querySelector('#hint-name-reg').innerHTML = '';
                })

                InputName.addEventListener('blur', () => {

                    var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$");

                    if (RegForName.test(InputName.value)){

                        FlagsVolidation.FlagName = true;
                        InputName.style.borderColor = '#40da03';

                    } else {

                        if (InputName.value != ''){
                            document.querySelector('#hint-name-reg').innerHTML = 'Некорректные данные';
                            InputName.style.borderColor = '#ff0404';
                        } else {
                            InputName.style.borderColor = '#c9c9c9';
                        }

                        FlagsVolidation.FlagName = false;

                    }
                })


                

                InputPatronemic.addEventListener('focus', () => {
                    InputPatronemic.style.borderColor = '#f9c823';
                    document.querySelector('#hint-patronemic-reg').innerHTML = '';
                })

                InputPatronemic.addEventListener('blur', () => {

                    var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$");

                    if (RegForName.test(InputPatronemic.value)){

                        FlagsVolidation.FlagPatronemic = true;
                        InputPatronemic.style.borderColor = '#40da03';

                    } else {

                        if (InputPatronemic.value != ""){
                            document.querySelector('#hint-patronemic-reg').innerHTML = 'Некорректные данные';
                            InputPatronemic.style.borderColor = '#ff0404';
                        } else {
                            InputPatronemic.style.borderColor = '#c9c9c9';
                        }

                        FlagsVolidation.FlagPatronemic = false;

                    }
                })






                jQuery (function ($) {  
                    $(function() {

                        function maskPhone() {
                            $("#telefon-reg").mask("8 (999) 999-99-99");
                        }

                        maskPhone();

                    });
                  });
        

                InputTelefon.addEventListener('focus', () => {
                    InputTelefon.style.borderColor = '#f9c823';
                    document.querySelector('#hint-telefon-reg').innerHTML = '';
                })

                InputTelefon.addEventListener('blur', () => {

                    var RegForName = new RegExp("_");

                    if (!RegForName.test(InputTelefon.value)){

                        var a = {
                            telefon: InputTelefon.value
                        }
                        fetch('/api/unicktelefon', {
                            method : 'POST',
                            body: JSON.stringify(a),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.queryUnickTelefon){

                                FlagsVolidation.FlagTelefon = true;
                                InputTelefon.style.borderColor = '#40da03';

                            } else {
                                document.querySelector('#hint-telefon-reg').innerHTML = 'Пользователь с таким телефоном уже существует';
                                FlagsVolidation.FlagTelefon = false;
                                InputTelefon.style.borderColor = '#ff0404';

                            }
                        })

                    } else {

                        if (InputTelefon.value != ''){
                            document.querySelector('#hint-telefon-reg').innerHTML = 'Некорректные данные';
                            InputTelefon.style.borderColor = '#ff0404';
                        } else {
                            InputTelefon.style.borderColor = '#c9c9c9';
                        }

                        FlagsVolidation.FlagTelefon = false;

                    }
                })




                InputMail.addEventListener('focus', () => {
                    InputMail.style.borderColor = '#f9c823';
                    document.querySelector('#hint-mail-reg').innerHTML = '';
                })

                InputMail.addEventListener('blur', () => {

                    var RegForName = new RegExp("^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$");

                    if (RegForName.test(InputMail.value)){

                        FlagsVolidation.FlagMail = true;
                        InputMail.style.borderColor = '#40da03';

                    } else {

                        if (InputMail.value != ''){
                            document.querySelector('#hint-mail-reg').innerHTML = 'Некорректные данные';
                            InputMail.style.borderColor = '#ff0404';
                        } else {
                            InputMail.style.borderColor = '#c9c9c9';
                        }

                        FlagsVolidation.FlagMail = false;

                    }
                })






                InputPassword.addEventListener('focus', () => {
                    InputPassword.style.borderColor = '#f9c823';
                    document.querySelector('#hint-password-reg').innerHTML = '';
                })

                InputPassword.addEventListener('blur', () => {

                    var RegForName = new RegExp("^[a-zA-Z0-9_-]{6,18}$");

                    if (RegForName.test(InputPassword.value)){

                        FlagsVolidation.FlagPassword = true;
                        InputPassword.style.borderColor = '#40da03';

                    } else {

                        if (InputPassword.value != ''){
                            document.querySelector('#hint-password-reg').innerHTML = 'Некорректные данные';
                            InputPassword.style.borderColor = '#ff0404';
                        } else {
                            InputPassword.style.borderColor = '#c9c9c9';
                        }

                        FlagsVolidation.FlagPassword = false;
                    }
                })




                InputRepitPassword.addEventListener('focus', () => {
                    InputRepitPassword.style.borderColor = '#f9c823';
                    document.querySelector('#hint-repit-password-reg').innerHTML = '';
                })

                InputRepitPassword.addEventListener('blur', () => {

                    var RegForName = new RegExp("^[a-zA-Z0-9_-]{6,18}$");

                    if (RegForName.test(InputRepitPassword.value) && InputRepitPassword.value == InputPassword.value){

                        FlagsVolidation.FlagRepitPassword = true;
                        InputRepitPassword.style.borderColor = '#40da03';

                    } else {

                        if (InputRepitPassword.value != ''){
                            document.querySelector('#hint-repit-password-reg').innerHTML = 'Повторный пароль не совпадает';
                            InputRepitPassword.style.borderColor = '#ff0404';
                        } else {
                            InputRepitPassword.style.borderColor = '#c9c9c9';
                        }

                        FlagsVolidation.FlagRepitPassword = false;

                    }
                })




                var ButtonRegister = document.querySelector('#button-reg');


                ButtonRegister.addEventListener('click', () => {
                    if (FlagsVolidation.FlagLogin == true && FlagsVolidation.FlagSName == true && FlagsVolidation.FlagName == true && FlagsVolidation.FlagPatronemic == true && FlagsVolidation.FlagTelefon == true && FlagsVolidation.FlagPassword == true && FlagsVolidation.FlagRepitPassword == true){
                        
                        var InputValues = {
                            Login: InputLogin.value,
                            SName: InputSNAme.value,
                            Name: InputName.value,
                            Patronemic: InputPatronemic.value,
                            Telefon: InputTelefon.value,
                            Mail: '',
                            Password: InputPassword.value
                        }

                        if (FlagsVolidation.FlagMail == true){
                            InputValues.Mail = InputMail.value;
                        }

                        fetch('/api/addnewuser', {
                            method : 'POST',
                            body: JSON.stringify(InputValues),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })

                        window.location.hash = '#/signin';
                    } else {

                        if (FlagsVolidation.FlagLogin == false){
                            if (document.querySelector('#hint-login-reg').innerHTML == ''){
                                InputLogin.style.borderColor = '#ff0404';
                                document.querySelector('#hint-login-reg').innerHTML = 'Поле обязательное к заполнению';
                            }
                        }

                        if (FlagsVolidation.FlagSName == false){
                            if (document.querySelector('#hint-s-name-reg').innerHTML == ''){
                                InputSNAme.style.borderColor = '#ff0404';
                                document.querySelector('#hint-s-name-reg').innerHTML = 'Поле обязательное к заполнению';
                            }
                        }

                        if (FlagsVolidation.FlagName == false){
                            if (document.querySelector('#hint-name-reg').innerHTML == ''){
                                InputName.style.borderColor = '#ff0404';
                                document.querySelector('#hint-name-reg').innerHTML = 'Поле обязательное к заполнению';
                            }
                        }

                        if (FlagsVolidation.FlagPatronemic == false){
                            if (document.querySelector('#hint-patronemic-reg').innerHTML == ''){
                                InputPatronemic.style.borderColor = '#ff0404';
                                document.querySelector('#hint-patronemic-reg').innerHTML = 'Поле обязательное к заполнению';
                            }
                        }

                        if (FlagsVolidation.FlagTelefon == false){
                            if (document.querySelector('#hint-telefon-reg').innerHTML == ''){
                                InputTelefon.style.borderColor = '#ff0404';
                                document.querySelector('#hint-telefon-reg').innerHTML = 'Поле обязательное к заполнению';
                            }
                        }

                        if (FlagsVolidation.FlagPassword == false){
                            if (document.querySelector('#hint-password-reg').innerHTML == ''){
                                InputPassword.style.borderColor = '#ff0404';
                                document.querySelector('#hint-password-reg').innerHTML = 'Поле обязательное к заполнению';
                            }
                        }

                        if (FlagsVolidation.FlagRepitPassword == false){
                            if (document.querySelector('#hint-repit-password-reg').innerHTML == ''){
                                InputRepitPassword.style.borderColor = '#ff0404';
                                document.querySelector('#hint-repit-password-reg').innerHTML = 'Поле обязательное к заполнению';
                            }
                        }

                        window.scrollTo(0, 0);
                    }
                })


            break;


            case '#/basket':
                fromBasket.classList.add('container-for-basket-page');
                var MasInfoDetailSignIn;
                var MasInfoDetail;
                Content.innerHTML = 
                `<div class="basket-page container-text-compani">
                    <div class="title-work-basket">Корзина</div>

                    <!--<div class="list-basket">

                        
                        
                    </div>-->

                    <div class="panel-all-price-and-but-order">
                        <div class="border-for-price-and-but-order">
                            <div id='price-all-detail' class="price-all-basket">0.00 руб</div>
                            <div class="button-checkout"><button id='but-new-order' class="stylebutton">ОФОРМИТЬ ЗАКАЗ</button></div>
                        </div>
                    </div>

                </div>`

                //Create content page basket
                if (user.id != '' || (getCookie('login') != undefined && getCookie('password') != undefined)){

                    // Basket if user sign-in
                    
                    var intervalSignin = setInterval( function() {

                        if (user.id != ''){
                            ButtonBasketValue(user);
                            fetch('/api/basketwhensignin', {
                                method : 'POST',
                                body: JSON.stringify(user),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })
                            .then(res => res.json())
                            .then(data => {
                                
                                MasInfoDetailSignIn = data;

                                if (MasInfoDetailSignIn.queryDetai.length > 0){

                                    var AllPrice = CreateBasketListDataUser(MasInfoDetailSignIn);

                                    //Touch processing
                                    var ContainerListBasket = document.querySelector('.list-basket');

                                    ContainerListBasket.addEventListener('click', (e) => {
                                
                                        if (e.target.id.indexOf('ButMinus') == 0){
                                            
                                            var ThisArtikle = e.target.id.replace('ButMinus','');
                                            var input = document.querySelector('#InputCount' + ThisArtikle);

                                            if (input.value > 1){


                                                input.value -= 1;
                                                
                                                var artikleAndCount = {
                                                    idUser: user.id,
                                                    artikle: ThisArtikle,
                                                    count: input.value
                                                }

                                                fetch('/api/changecountdetailbasket', {
                                                    method : 'POST',
                                                    body: JSON.stringify(artikleAndCount),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {
                                                    ButtonBasketValue(user);
                                                })
                                                
                                                for (var i = 0; i < MasInfoDetailSignIn.queryDetai.length; i++){

                                                    if (MasInfoDetailSignIn.queryDetai[i].artikle == ThisArtikle){
                                                        var AllPriceThisDetail = document.querySelector('#all-price-this-detail' + ThisArtikle);
                                                        AllPriceThisDetail.innerHTML = (+AllPriceThisDetail.innerHTML.replace(' руб', '') - MasInfoDetailSignIn.queryDetai[i].price).toFixed(2) + ' руб';

                                                        AllPrice -= MasInfoDetailSignIn.queryDetai[i].price;
                                                        document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';
                                                        MasInfoDetailSignIn.queryDetai[i].count_buy = input.value;
                                                        break;
                                                    }
                                                }
                                            }
                                        }



                                        if (e.target.id.indexOf('ButPlus') == 0){
                                            
                                            var ThisArtikle = e.target.id.replace('ButPlus','');
                                            var input = document.querySelector('#InputCount' + ThisArtikle);
                                            var indexThisdetail;

                                            for (var i = 0; i < MasInfoDetailSignIn.queryDetai.length; i++){
                                                
                                                if (MasInfoDetailSignIn.queryDetai[i].artikle == ThisArtikle){
                                                    indexThisdetail = i;
                                                }
                                            }
                                            
                                            if (input.value < MasInfoDetailSignIn.queryDetai[indexThisdetail].max_count){


                                                input.value = +input.value + 1;

                                                var artikleAndCount = {
                                                    idUser: user.id,
                                                    artikle: ThisArtikle,
                                                    count: input.value
                                                }

                                                fetch('/api/changecountdetailbasket', {
                                                    method : 'POST',
                                                    body: JSON.stringify(artikleAndCount),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    ButtonBasketValue(user);
                                                })


                                                var AllPriceThisDetail = document.querySelector('#all-price-this-detail' + ThisArtikle);
                                                AllPriceThisDetail.innerHTML = (+AllPriceThisDetail.innerHTML.replace(' руб', '') + MasInfoDetailSignIn.queryDetai[indexThisdetail].price).toFixed(2) + ' руб';

                                                AllPrice += MasInfoDetailSignIn.queryDetai[indexThisdetail].price;
                                                document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';
                                                MasInfoDetailSignIn.queryDetai[indexThisdetail].count_buy = input.value;
                                            }
                                        }



                                        if (e.target.id.indexOf('cros-this-detail') == 0){

                                            var ThisArtikle = e.target.id.replace('cros-this-detail','');

                                            var indexThisdetail;


                                            for (var i = 0; i < MasInfoDetailSignIn.queryDetai.length; i++){
                                                
                                                if (MasInfoDetailSignIn.queryDetai[i].artikle == ThisArtikle){
                                                    indexThisdetail = i;
                                                }
                                            }

                                            var artikleAndCount = {
                                                idUser: user.id,
                                                artikle: ThisArtikle
                                            }


                                            fetch('/api/deletedetailinbasket', {
                                                method : 'POST',
                                                body: JSON.stringify(artikleAndCount),
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                }
                                            })
                                            .then(res => res.json())
                                            .then(data => {

                                                AllPrice -= MasInfoDetailSignIn.queryDetai[indexThisdetail].price * (+document.querySelector('#InputCount' + ThisArtikle).value);
                                                document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';

                                                ContainerListBasket.removeChild(ContainerListBasket.querySelector('#ElementListBasket' + ThisArtikle));

                                                MasInfoDetailSignIn.queryDetai.splice(indexThisdetail, 1);
                                                ButtonBasketValue(user);

                                                if (MasInfoDetailSignIn.queryDetai.length == 0){
                                                    NotDetailInBasket();
                                                }

                                            })

                                        }
                                        
                                    })


                                    ContainerListBasket.addEventListener('change', (e) => {

                                        if (e.target.id.indexOf('InputCount') == 0){
                                            
                                            var ThisArtikle = e.target.id.replace('InputCount','');
                                            var input = document.querySelector('#InputCount' + ThisArtikle);
                                            var indexThisdetail;

                                            for (var i = 0; i < MasInfoDetailSignIn.queryDetai.length; i++){
                                                
                                                if (MasInfoDetailSignIn.queryDetai[i].artikle == ThisArtikle){
                                                    indexThisdetail = i;
                                                }
                                            }
                                            

                                            var value= +input.value.replace(/\D/g,'')||0;
                                            var valueThisInput = Math.min(MasInfoDetailSignIn.queryDetai[indexThisdetail].max_count, Math.max(1, value));

                                            input.value = valueThisInput;


                                            var artikleAndCount = {
                                                idUser: user.id,
                                                artikle: ThisArtikle,
                                                count: valueThisInput
                                            }

                                            fetch('/api/changecountdetailbasket', {
                                                method : 'POST',
                                                body: JSON.stringify(artikleAndCount),
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                }
                                            })
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                ButtonBasketValue(user);
                                            })


                                            var AllPriceThisDetail = document.querySelector('#all-price-this-detail' + ThisArtikle);
                                            AllPriceThisDetail.innerHTML = (+AllPriceThisDetail.innerHTML.replace(' руб', '') + MasInfoDetailSignIn.queryDetai[indexThisdetail].price * (+valueThisInput - MasInfoDetailSignIn.queryDetai[indexThisdetail].count_buy)).toFixed(2) + ' руб';

                                            AllPrice += MasInfoDetailSignIn.queryDetai[indexThisdetail].price * (+valueThisInput - MasInfoDetailSignIn.queryDetai[indexThisdetail].count_buy);
                                            document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';
                                            MasInfoDetailSignIn.queryDetai[indexThisdetail].count_buy = +valueThisInput;
                                        }
                                    })
                                } else {

                                    //Page if basket dasen't have detail
                                    NotDetailInBasket();
                                }
                                
                            })
                            clearInterval(intervalSignin);
                        }
                    },0);

                } else {
                    //Basket if user not sign-in
                    if (getCookie('artikle_detail') != undefined){


                        var strArtikle = getCookie('artikle_detail');
    
                        var ListArtikle = {
                            artikle: '\'' + strArtikle.split('&').join('\', \'') + '\''
                        }
                        
                        var masArtikle = getCookie('artikle_detail').split('&');
                        var masCount = getCookie('count_detail').split('&');
                        var masPrice = getCookie('price_detail').split('&');

                        fetch('/api/infoaboutdetailinbasket', {
                            method : 'POST',
                            body: JSON.stringify(ListArtikle),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                        .then(res => res.json())
                        .then(data => {

                            MasInfoDetail = data;
                            var AllPrice = CreateBasketListCookie(MasInfoDetail, masArtikle, masCount);

                            //Touch processing
                            var ContainerListBasket = document.querySelector('.list-basket');

                            ContainerListBasket.addEventListener('click', (e) => {
                        
                                if (e.target.id.indexOf('ButMinus') == 0){
                                    
                                    var ThisArtikle = e.target.id.replace('ButMinus','');
                                    var input = document.querySelector('#InputCount' + ThisArtikle);

                                    if (input.value > 1){


                                        input.value -= 1;

                                        for (var i = 0; i < masArtikle.length; i++){

                                            if (ThisArtikle == masArtikle[i]){
                                                masCount[i] = +masCount[i] - 1;
                                                setCookie('count_detail',  masCount.join('&'), {expires: 0, path: 'path=/'});
                                                ButtonBasketValue(user);
                                                break;
                                            }
                                        }

                                        for (var i = 0; i < MasInfoDetail.queryDetai.length; i++){

                                            if (MasInfoDetail.queryDetai[i].artikle == ThisArtikle){
                                                var AllPriceThisDetail = document.querySelector('#all-price-this-detail' + ThisArtikle);
                                                AllPriceThisDetail.innerHTML = (+AllPriceThisDetail.innerHTML.replace(' руб', '') - MasInfoDetail.queryDetai[i].price).toFixed(2) + ' руб';

                                                AllPrice -= MasInfoDetail.queryDetai[i].price;
                                                document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';
                                                break;
                                            }
                                        }
                                    }
                                }



                                if (e.target.id.indexOf('ButPlus') == 0){
                                    
                                    var ThisArtikle = e.target.id.replace('ButPlus','');
                                    var input = document.querySelector('#InputCount' + ThisArtikle);
                                    var indexThisdetail;

                                    for (var i = 0; i < MasInfoDetail.queryDetai.length; i++){
                                        
                                        if (MasInfoDetail.queryDetai[i].artikle == ThisArtikle){
                                            indexThisdetail = i;
                                        }
                                    }
                                    
                                    if (input.value < MasInfoDetail.queryDetai[indexThisdetail].count){


                                        input.value = +input.value + 1;

                                        for (var i = 0; i < masArtikle.length; i++){

                                            if (ThisArtikle == masArtikle[i]){
                                                masCount[i] = +masCount[i] + 1;
                                                setCookie('count_detail',  masCount.join('&'), {expires: 0, path: 'path=/'});
                                                ButtonBasketValue(user);
                                                break;
                                            }
                                        }


                                        var AllPriceThisDetail = document.querySelector('#all-price-this-detail' + ThisArtikle);
                                        AllPriceThisDetail.innerHTML = (+AllPriceThisDetail.innerHTML.replace(' руб', '') + MasInfoDetail.queryDetai[indexThisdetail].price).toFixed(2) + ' руб';

                                        AllPrice += MasInfoDetail.queryDetai[indexThisdetail].price;
                                        document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';
                                    }
                                }



                                if (e.target.id.indexOf('cros-this-detail') == 0){

                                    var ThisArtikle = e.target.id.replace('cros-this-detail','');

                                    var indexThisdetail;

                                    for (var i = 0; i < MasInfoDetail.queryDetai.length; i++){
                                        
                                        if (MasInfoDetail.queryDetai[i].artikle == ThisArtikle){
                                            indexThisdetail = i;
                                        }
                                    }

                                    if(masArtikle.length > 1){

                                        for (var i = 0; i < masArtikle.length; i++){

                                            if (ThisArtikle == masArtikle[i]){

                                                AllPrice -= MasInfoDetail.queryDetai[indexThisdetail].price * (+masCount[i]);
                                                document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';

                                                ContainerListBasket.removeChild(ContainerListBasket.querySelector('#ElementListBasket' + ThisArtikle));
                                                
                                                masArtikle.splice(i, 1);
                                                masCount.splice(i, 1);
                                                masPrice.splice(i, 1);
                                                setCookie('artikle_detail',  masArtikle.join('&'), {expires: 0, path: 'path=/'});
                                                setCookie('count_detail',  masCount.join('&'), {expires: 0, path: 'path=/'});
                                                setCookie('price_detail',  masPrice.join('&'), {expires: 0, path: 'path=/'});
                                                ButtonBasketValue(user);
                                                break;
                                            }
                                        }

                                    } else {

                                        AllPrice -= MasInfoDetail.queryDetai[indexThisdetail].price * (+masCount[0]);
                                        document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';

                                        ContainerListBasket.removeChild(ContainerListBasket.querySelector('#ElementListBasket' + ThisArtikle));

                                        deleteCookie('artikle_detail');
                                        deleteCookie('count_detail');
                                        deleteCookie('price_detail');
                                        ButtonBasketValue(user);
                                        NotDetailInBasket();
                                    }
                                }
                                
                            })


                            ContainerListBasket.addEventListener('change', (e) => {

                                if (e.target.id.indexOf('InputCount') == 0){
                                    
                                    var ThisArtikle = e.target.id.replace('InputCount','');
                                    var input = document.querySelector('#InputCount' + ThisArtikle);
                                    var indexThisdetail;

                                    for (var i = 0; i < MasInfoDetail.queryDetai.length; i++){
                                        
                                        if (MasInfoDetail.queryDetai[i].artikle == ThisArtikle){
                                            indexThisdetail = i;
                                        }
                                    }
                                    

                                    var value= +input.value.replace(/\D/g,'')||0;
                                    var valueThisInput = Math.min(MasInfoDetail.queryDetai[indexThisdetail].count, Math.max(1, value));
                                    input.value = valueThisInput;

                                    var ThisCount;

                                    for (var i = 0; i < masArtikle.length; i++){

                                        if (ThisArtikle == masArtikle[i]){
                                            ThisCount = masCount[i];
                                            masCount[i] = valueThisInput;
                                            setCookie('count_detail',  masCount.join('&'), {expires: 0, path: 'path=/'});
                                            ButtonBasketValue(user);
                                            break;
                                        }
                                    }

                                    var AllPriceThisDetail = document.querySelector('#all-price-this-detail' + ThisArtikle);
                                    AllPriceThisDetail.innerHTML = (+AllPriceThisDetail.innerHTML.replace(' руб', '') + MasInfoDetail.queryDetai[indexThisdetail].price * (valueThisInput - ThisCount)).toFixed(2) + ' руб';

                                    AllPrice += MasInfoDetail.queryDetai[indexThisdetail].price * (valueThisInput - ThisCount);
                                    document.querySelector('#price-all-detail').innerHTML = AllPrice.toFixed(2) + ' руб';
                                }
                            })

                        })

                    } else {
                        //Page if basket dasen't have detail
                        NotDetailInBasket();
                    }

                }


                var ButNewOrder = document.querySelector('#but-new-order');

                ButNewOrder.addEventListener('click', () => {

                    if (user.id == ''){
                        window.location.hash = '#/signin?'+window.location.hash;
                    } else {
                        window.location.hash = '#/order-periodical';
                    }
                })


            break;


            case '#/catalog':

                fetch('/api/getcatalog')
                .then(res => res.json())
                .then(data => {
                    
                    for ( var i = 0; i < data.queryDetai.length; i++){
                        CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                    }
                })


                Content.innerHTML = 
                `<div class="content-column1 column-catalog-and-filter">

                    <div class='hide-container-catalog'>
                        <i id='hide-but-catalog' class="fas fa-ellipsis-v icon-hide-catalog-and-filter"></i>

                        <div class="menu-nav-column">
                            
                            <div class="name-menu-nav-column">Каталог</div>

                        </div>
                    </div>


                    <div class='hide-container-filter'>
                        <i id='hide-but-filter' class="fas fa-filter icon-hide-catalog-and-filter"></i>

                        <div class="filter">

                            <div class="title-filter">Фильтры</div>

                            <div class="element-filter">
                                <div id="filter-element-0" class="title-element-filter">
                                    <div>Цена</div>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                                
                                <div class="element-filter-submenu">
                                    <div class='element-filter-sell'>
                                        <div class="div-for-input">
                                            <input type="number" id='min-sell' class='input-style' placeholder="От">
                                        </div>
                                        <div>~</div>
                                        <div class="div-for-input">
                                            <input type="number" id='max-sell' class="input-style" placeholder="До">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            <div class="container-but-filter">
                                <button id='button-filter' class="stylebutton">Применить</button>
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div class="content-column2 container-text-compani">

                    <div class="title-catalog">
                        <div class="title-catalog-word">Каталог</div>
                        <div class="sorting-for-catalog">
                            <select class="select-sorting-for-catalog">
                                <option>Сортировка</option>
                                <option value='price-asc'>по возрастанию цены</option>
                                <option value='price-desc'>по убыванию цены</option>
                                <option value='name-asc'>по названию</option>
                            </select>
                        </div>
                    </div>


                    <div class="catalog-content">


                    </div>

                    <!--<div class="catalog-list-pages">
                        <div><i class="fas fa-angle-left catalog-list-pages-nav left"></i></div>
                        <div class="namber-pages-for-catalog">
                            <div class="element-namber-pages-for-catalog" id="cheackpagecatalog">1</div>
                            <div class="element-namber-pages-for-catalog">2</div>
                            <div class="element-namber-pages-for-catalog">3</div>
                        </div>
                        <div><i class="fas fa-angle-right catalog-list-pages-nav right"></i></div>
                    </div>-->

                </div>`

                AddScriptForPage('script/filter_script.js');

                var ButHideCatalog = document.querySelector('#hide-but-catalog');
                var ButHideFilter = document.querySelector('#hide-but-filter');

                var ContainerHideCatalog = document.querySelector('.menu-nav-column');
                var ContainerHideFilter = document.querySelector('.filter');

                var FlagHideCatalog = false;
                var FlagHideFilter = false;


                ButHideCatalog.addEventListener('click', () => {

                    if (FlagHideFilter == true){

                        ContainerHideFilter.style.display = 'none';
                        ButHideFilter.style.backgroundColor = 'transparent';
                        ButHideFilter.style.borrderColor = 'transparent';
                        FlagHideFilter = false;
                    }

                    if (FlagHideCatalog == false){

                        ContainerHideCatalog.style.display = 'block';
                        ButHideCatalog.style.backgroundColor = '#f9c823';
                        ButHideCatalog.style.borrderColor = '#c9c9c9';
                        FlagHideCatalog = true;
                      } else {
                
                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                      }

                })


                ButHideFilter.addEventListener('click', () => {

                    if (FlagHideCatalog == true){

                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                    }

                    if (FlagHideFilter == false){

                        ContainerHideFilter.style.display = 'block';
                        ButHideFilter.style.backgroundColor = '#f9c823';
                        ButHideFilter.style.borrderColor = '#c9c9c9';
                        FlagHideFilter = true;
                      } else {
                
                        ContainerHideFilter.style.display = 'none';
                        ButHideFilter.style.backgroundColor = 'transparent';
                        ButHideFilter.style.borrderColor = 'transparent';
                        FlagHideFilter = false;
                      }

                })


                var SelectSort = document.querySelector('.select-sorting-for-catalog');

                SelectSort.addEventListener('change', () => {
                    
                    window.location.hash += '?Sort='+SelectSort.value;
                })
                
            break;


            case '#/about-company':
                Content.innerHTML = 
                `<div class="content-column1 column-for-hide">
                    <div class="menu-nav-column">
                        
                        <div class="name-menu-nav-column">Каталог</div>

                    </div>

                </div>

                <div class="content-column2">
                <div class='container-text-compani'>
                    <div class="title-page">О компании</div>
                    <div class="info-about-shop-for-home-page">
                        <div class="info-about-shop-title">Интернет-магазин «АвтоМир» – лучшие товары по низким ценам!</div>

                        <div class="info-about-shop-content">Мы рады предложить вам недорогие, но качественные товары с подробными описаниями, характеристиками и фотографиями. У нас Вы можете купить замечательные товары: технику, электронику, одежду, обувь, игрушки, книги и многое другое в вашем регионе по ценам производителей и без наценки.</div>
                        <div class="info-about-shop-content">Продажа большого ассортимента разнообразных товаров – основная специализация нашего интернет-магазина. Мы доставим ваш заказ бесплатно в любой уголок мира, осуществим подробную консультацию по товарам и поможем с выбором.</div>
                        <div class="info-about-shop-content">Магазин «АвтоМир» предлагает Вам купить качественную и доступную технику, электронику, одежду, обувь, игрушки, книги и многое другое с доставкой! Все виды современных товаров от эконом класса до более дорогих представлены в нашем каталоге.</div>
                        <div class="info-about-shop-content">Вы можете купить любые товары в вашем городе: технику, электронику, одежду, обувь, игрушки, книги и многое другое.</div>

                        <div class="info-about-shop-title">Наши главные преимущества:</div>

                        <ul class="info-about-shop-list-content">
                            <li>Низкие цены от производителей</li>
                            <li>Доставка по городу в день заказа</li>
                            <li>Только оригинальная и сертифицированная продукция</li>
                            <li>Гарантия на все товары – 5 лет!</li>
                            <li>Не понравился товар? Вернем или обменяем в течение 14-ти дней без оформления лишних бумаг!</li>

                        </ul>
                    </div>
                </div>
                </div>`
                
            break;


            case '#/contacts':
                Content.innerHTML = 
                `<div class="content-column1 column-for-hide">
                    <div class="menu-nav-column">
                        
                        <div class="name-menu-nav-column">Каталог</div>

                    </div>

                </div>

                <div class="content-column2">
                <div class='container-text-compani'>
                    <div class="title-page">Контакты</div>
                    <div class="info-about-shop-for-home-page">
                        <div class="info-about-shop-title">Нас можно найти:</div>

                        <div class="info-about-shop-content">Магазин «АвтоМир», г. Минск, Могилевская, 42</div>
                        <div class="info-about-shop-content">VELCOM +375 (44) 776-88-89</div>
                        <div class="info-about-shop-content">МТС +375 (29) 714-07-70</div>

                        <div class="info-about-shop-title">Наши реквизиты:</div>

                        <div class="info-about-shop-content">211388, г.Минск, ул.Марата, 107А</div>
                        <div class="info-about-shop-content">УНП 391420876, ОКПО 297560032000</div>
                        <div class="info-about-shop-content">р/с BY30OLMP30125000202370000933 ЦБУ №202 ОАО «Белгазпромбанк» в г.Минск</div>
                        <div class="info-about-shop-title">Электронная почта: amr.by@mail.ru</div>
                        
                    </div>
                </div>
                </div>`
                
            break;


            case '#/delivery':
                Content.innerHTML = 
                `<div class="content-column1 column-for-hide">
                    <div class="menu-nav-column">
                        
                        <div class="name-menu-nav-column">Каталог</div>

                    </div>

                </div>

                <div class="content-column2">
                <div class='container-text-compani'>
                    <div class="title-page">Доставка</div>
                    <div class="info-about-shop-for-home-page">

                        <div class="info-about-shop-title">Наш интернет-магазин осуществляет доставку по Москве и регионам России:</div>

                        <ul class="info-about-shop-list-content">
                            <li>Курьерская доставка по Минску — 30 руб.</li>
                            <li>Самовывоз из нашего пункта выдачи или розничного магазина – бесплатно!</li>
                        </ul>
                        <br />
                        <div class="info-about-shop-title">Сроки доставки:</div>

                        <ul class="info-about-shop-list-content">
                            <li>Курьерская доставка по Минску – в день заказа</li>
                            <li>Самовывоз – на следующий день</li>
                        </ul>
                        <br />
                        <div class="info-about-shop-title">Пункт самовывоза:</div>

                        <div class="info-about-shop-content">г. Минск, ул. Могилевская, 42</div>

                        <br />
                        <div class="info-about-shop-title">Доставка осуществляется бесплатно при сумме заказа более 7000 рублей.</div>
                        
                    </div>
                </div.
                </div>`
                
            break;


            case '#/all-blogs':

                Content.innerHTML = 
                    `<div class="content-column1 column-for-hide">
                        <div class="menu-nav-column">
                            
                            <div class="name-menu-nav-column">Блог</div>
                            <div class="blog-menu-hide">
                                
                            </div>

                        </div>

                    </div>

                    <div class="content-column2">
                    <div class='container-text-compani'>
                        <div class="title-page">Блог</div>
                        <div class="list-blog-messages">
                        

                        </div>
                    </div>
                    </div>`

                if (MasBlogs == undefined){

                    fetch('/api/gatallblogs')
                    .then(res => res.json())
                    .then(data => {

                        MasBlogs = data;
                        CreateAllBlogs(MasBlogs);
                    })
                } else {

                    CreateAllBlogs(MasBlogs);
                }



                if (ListTitleBlogs == undefined){

                    fetch('/api/gattitleblogs', {
                        method : 'POST',
                        body: JSON.stringify(title_blog),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    .then(res => res.json())
                    .then(data => {

                        ListTitleBlogs = data;
                        CreateListBlogTitle(ListTitleBlogs);
                    })
                } else {

                    CreateListBlogTitle(ListTitleBlogs);
                }


            break;


            case '#/payment':
                Content.innerHTML = 
                `<div class="content-column1 column-for-hide">
                    <div class="menu-nav-column">
                        
                        <div class="name-menu-nav-column">Каталог</div>

                    </div>

                </div>

                <div class="content-column2">
                <div class='container-text-compani'>
                    <div class="title-page">Доставка</div>
                    <div class="info-about-shop-for-home-page">

                        <div class="info-about-shop-title">Вы можете оплатить заказ:</div>

                        <ul class="info-about-shop-list-content">
                            <li>Наличными курьеру или в пункте выдачи при получении заказа</li>
                            <li>Банковской картой Visa, Mastercard или БЕЛКАРТ курьеру или в пункте выдачи при получении заказа</li>
                        </ul>
                    </div>
                </div>
                </div>`
                
            break;


            case '#/exchange-and-return':
                Content.innerHTML = 
                `<div class="content-column1 column-for-hide">
                    <div class="menu-nav-column">
                        
                        <div class="name-menu-nav-column">Каталог</div>

                    </div>

                </div>

                <div class="content-column2">
                <div class='container-text-compani'>
                    <div class="title-page">Условия обмена и возврата</div>
                    <div class="info-about-shop-for-home-page">
                        <div class="info-about-shop-content">Наш интернет-магазин работает в строгом соответствии с Законом «О защите прав потребителей».

                                Согласно ст. 25 Закона «О защите прав потребителей», вы можете вернуть или обменять товар надлежащего качества, приобретённый в розничном магазине, в течение 14 дней, не считая дня покупки.</div>
                        <div class="info-about-shop-content">Согласно ст. 26.1 Закона «О защите прав потребителей», вы вправе вернуть любой товар, приобретённый в интернет-магазине, в течение семи дней после получения товара без указания причин возврата.</div>
                        <div class="info-about-shop-content">Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара. Отсутствие у потребителя документа, подтверждающего факт и условия покупки товара, не лишает его возможности ссылаться на другие доказательства приобретения товара у данного продавца.</div>

                        <div class="info-about-shop-content">Потребитель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем (прим.: если товар изготовлен на заказ).</div>
                        <div class="info-about-shop-content">При отказе потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную потребителем по договору, за исключением расходов продавца на доставку от потребителя возвращенного товара, не позднее чем через десять дней со дня предъявления потребителем соответствующего требования.</div>
                        
                    </div>
                </div>
                </div>`
                
            break;



            case '#/personal-area':

                if (user.id == '' && (getCookie('login') == undefined && getCookie('password') == undefined)){
                    window.location.hash = '#/signin';
                    break;
                }

                Content.innerHTML = 
                    `<div class="user-page">

                        <div class="title-work-user-page">Личный кабинет</div>

                        <div class="content-user-page">

                            <div class="conteiner-image-user-in-user-page">
                                <div class="hide-menu-for-user-page">
                                    <div id='main-data' class="element-menu-user-page">Основные данные</div>
                                    <div id='security' class="element-menu-user-page">Безопасность</div>
                                </div>
                                <div class='image-and-add-imaage'>
                                    <img class="user-image-in-user-page" src=''>
                                    <div class="change-user-image"><input type='file'></div>
                                </div>
                            </div>


                            <div class="conteiner-user-info-in-user-page-and-but">
                               
                            </div>

                            <div class="menu-for-user-page">
                                <div id='main-data' class="element-menu-user-page">Основные данные</div>
                                <div id='security' class="element-menu-user-page">Безопасность</div>
                            </div>

                        </div>
                    </div>`


                var ContentforUserInfo = document.querySelector('.conteiner-user-info-in-user-page-and-but');


                var MainData = document.querySelector('#main-data');
                var Security = document.querySelector('#security');


                MainData.addEventListener('click', () => {
                    
                    ContentforUserInfo.innerHTML = 
                    `<div class="conteiner-user-info-in-user-page">
                                    
                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">Фамилия:</div>
                            <div class="value-element-list-user-info"><input type="text" id='sname-user-personal-area' class="input-value-user-info" value="" disabled></div>
                        </div>

                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">Имя:</div>
                            <div class="value-element-list-user-info"><input type="text" id='name-user-personal-area' class="input-value-user-info" value="" disabled></div>
                        </div>

                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">Отчество:</div>
                            <div class="value-element-list-user-info"><input type="text" id='patronemic-user-personal-area' class="input-value-user-info" value="" disabled></div>
                        </div>

                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">Пол:</div>
                            <div class="value-element-list-user-info">
                                <div class="conteiner-select conteiner-select-disabled">
                                    <select id='gender-user-personal-area' class="select-style select-pol-user" disabled>
                                        <option value='Не указан'>Не выбрано</option>
                                        <option value='Мужской'>Мужской</option>
                                        <option value='Женский'>Женский</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div id='element-list-user-page-value-born' class="element-list-uset-info">
                            <div class="title-element-list-user-info title-born-element">День рождения:</div>
                            <div class="value-element-list-user-info element-birth-day">
                                <div class="conteiner-select conteiner-select-disabled">
                                    <select id='day-born-user-personal-area' class="select-style select-day-birth-user" disabled>
                                        <option value='NULL'>Не выбрано</option>

                                    </select>
                                </div>
                                <div class="conteiner-select conteiner-select-disabled">
                                    <select id='month-born-user-personal-area' class="select-style select-mounth-birth-user" disabled>
                                        <option value='NULL'>Не выбрано</option>

                                    </select>
                                </div>
                                <div class="conteiner-select conteiner-select-disabled">
                                    <select id='year-born-user-personal-area' class="select-style select-year-birth-user" disabled>
                                        <option value='NULL'>Не выбрано</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">Контактный телефон:</div>
                            <div class="value-element-list-user-info"><input type="text" id='telefon-user-personal-area' class="input-value-user-info" value="" disabled></div>
                        </div>

                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">E-mail:</div>
                            <div class="value-element-list-user-info"><input type="text" id='mail-user-personal-area' class="input-value-user-info" value="" disabled></div>
                        </div>

                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">Страна:</div>
                            <div class="value-element-list-user-info"><input type="text" id='country-user-personal-area' class="input-value-user-info" value="" disabled></div>
                        </div>

                    </div>
                    
                    <div class="button-change-value-user-info">
                        <button id='but-close-change-value' class="stylebutton">Отменить</button>
                        <button id='but-change-value' class="stylebutton">Редактировать</button>
                    </div>`


                    var UserInfoFromPersonalArea = [];
                    var ImageUserUserPage = document.querySelector('.user-image-in-user-page');
                    var InputNameUserPage = document.querySelector('#name-user-personal-area');
                    var InputSNameUserPage = document.querySelector('#sname-user-personal-area');
                    var InputPatronemicUserPage = document.querySelector('#patronemic-user-personal-area');
                    var InputTelefonUserPage = document.querySelector('#telefon-user-personal-area');
                    var InputMailUserPage = document.querySelector('#mail-user-personal-area');
                    var InputCountryUserpage = document.querySelector('#country-user-personal-area');

                    var SelectGenderUserPage = document.querySelector('#gender-user-personal-area');
                    var SelectDayBornUserPage = document.querySelector('#day-born-user-personal-area');
                    var SelectMonthBornUserPage = document.querySelector('#month-born-user-personal-area');
                    var SelectYearBornUserPage = document.querySelector('#year-born-user-personal-area');

                    var ButChangeValue = document.querySelector('#but-change-value');
                    var ButCloseChangeValue = document.querySelector('#but-close-change-value');
                    var FlagButChangeValue = false;

                    
                    for (var i = 1; i < 32; i++){
                        var Option = document.createElement('option');
                        Option.value = (i);
                        Option.innerHTML = (i);
                        SelectDayBornUserPage.appendChild(Option);
                    }

                    var NameMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

                    for (var i = 0; i < NameMonth.length; i++){
                        var Option = document.createElement('option');
                        Option.value = (i+1);
                        Option.innerHTML = NameMonth[i];
                        SelectMonthBornUserPage.appendChild(Option);
                    }

                    var DateNow = new Date().getFullYear() - 15;
                    for (var i = DateNow; i > 1930; i--){
                        var Option = document.createElement('option');
                        Option.value = i;
                        Option.innerHTML = i;
                        SelectYearBornUserPage.appendChild(Option);
                    }

                    
                    var timerGetCookieUser = setInterval( function() {

                        if (user.id != ''){

                            fetch('/api/queryinfoforuserpage', {
                                method : 'POST',
                                body: JSON.stringify(user),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })
                            .then(res => res.json())
                            .then(data => {
                                
                                UserInfoFromPersonalArea = data;

                                ImageUserUserPage.src = UserInfoFromPersonalArea[0].image_user;
                                InputNameUserPage.value = UserInfoFromPersonalArea[0].name;
                                InputSNameUserPage.value = UserInfoFromPersonalArea[0].s_name;
                                SelectGenderUserPage.value = UserInfoFromPersonalArea[0].name_gender;
                                InputPatronemicUserPage.value = UserInfoFromPersonalArea[0].patronemic;
                                InputTelefonUserPage.value = UserInfoFromPersonalArea[0].telefon;

                                if (UserInfoFromPersonalArea[0].mail != null){
                                    InputMailUserPage.value = UserInfoFromPersonalArea[0].mail;
                                } else {
                                    InputMailUserPage.value = 'Не указано';
                                }


                                if (UserInfoFromPersonalArea[0].country != null){
                                    InputCountryUserpage.value = UserInfoFromPersonalArea[0].country;
                                } else {
                                    InputCountryUserpage.value = 'Не указано';
                                }
                                

                                if (UserInfoFromPersonalArea[0].date_born != null){
                                    var MasDateBorn = new Date(UserInfoFromPersonalArea[0].date_born);

                                    SelectDayBornUserPage.value = MasDateBorn.getDate();
                                    SelectMonthBornUserPage.value = MasDateBorn.getMonth() + 1;
                                    SelectYearBornUserPage.value = MasDateBorn.getFullYear();
                                }
                            })

                            clearInterval(timerGetCookieUser);
                        }
                    },0)




                    var FlagsVolidationUserDetail = {
                        FlagSName: false,
                        FlagName: false,
                        FlagPatronemic: false,
                        FlagTelefon: false,
                        FlagMail: false,
                        FlagCountry: false
                    }




                    InputNameUserPage.addEventListener('focus', () => {
                        InputNameUserPage.style.borderColor = '#f9c823';
                    })
    
                    InputNameUserPage.addEventListener('blur', () => {
    
                        var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$");
    
                        if (RegForName.test(InputNameUserPage.value)){
    
                            InputNameUserPage.style.borderColor = '#c9c9c9';
                            FlagsVolidationUserDetail.FlagName = true;
    
                        } else {
    
                            if (InputNameUserPage.value != ''){
                                InputNameUserPage.style.borderColor = '#ff0404';
                            } else {
                                InputNameUserPage.style.borderColor = '#c9c9c9';
                            }
                            FlagsVolidationUserDetail.FlagName = false;
                        }
                    })




                    InputSNameUserPage.addEventListener('focus', () => {
                        InputSNameUserPage.style.borderColor = '#f9c823';
                    })
    
                    InputSNameUserPage.addEventListener('blur', () => {
    
                        var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$");
    
                        if (RegForName.test(InputSNameUserPage.value)){
    
                            InputSNameUserPage.style.borderColor = '#c9c9c9';
                            FlagsVolidationUserDetail.FlagSName = true;

                        } else {
    
                            if (InputSNameUserPage.value != ''){
                                InputSNameUserPage.style.borderColor = '#ff0404';
                            } else {
                                InputSNameUserPage.style.borderColor = '#c9c9c9';
                            }
                            FlagsVolidationUserDetail.FlagSName = false;
                        }
                    })




                    InputPatronemicUserPage.addEventListener('focus', () => {
                        InputPatronemicUserPage.style.borderColor = '#f9c823';
                    })
    
                    InputPatronemicUserPage.addEventListener('blur', () => {
    
                        var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$");
    
                        if (RegForName.test(InputPatronemicUserPage.value)){
    
                            InputPatronemicUserPage.style.borderColor = '#c9c9c9';
                            FlagsVolidationUserDetail.FlagPatronemic = true;
    
                        } else {
    
                            if (InputPatronemicUserPage.value != ''){
                                InputPatronemicUserPage.style.borderColor = '#ff0404';
                            } else {
                                InputPatronemicUserPage.style.borderColor = '#c9c9c9';
                            }
                            FlagsVolidationUserDetail.FlagPatronemic = false;
                        }
                    })



                    //MaskForInputTelefon
                    jQuery (function ($) {  
                        $(function() {
    
                            function maskPhone() {
                                $("#telefon-user-personal-area").mask("8 (999) 999-99-99");
                            }
    
                            maskPhone();
    
                        });
                    });
                    InputTelefonUserPage.addEventListener('focus', () => {
                        InputTelefonUserPage.style.borderColor = '#f9c823';
                    })
    
                    InputTelefonUserPage.addEventListener('blur', () => {
    
                        var RegForName = new RegExp("_");
    
                        if (!RegForName.test(InputTelefonUserPage.value)){
    
                            var a = {
                                telefon: InputTelefonUserPage.value
                            }
                            fetch('/api/unicktelefon', {
                                method : 'POST',
                                body: JSON.stringify(a),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })
                            .then(res => res.json())
                            .then(data => {
                                if (!data.queryUnickTelefon){
    
                                    InputTelefonUserPage.style.borderColor = '#ff0404';
                                    FlagsVolidationUserDetail.FlagTelefon = false;
                                } else {

                                    FlagsVolidationUserDetail.FlagTelefon = true;
                                }
                            })
    
                        } else {
    
                            InputTelefonUserPage.style.borderColor = '#c9c9c9';
                            FlagsVolidationUserDetail.FlagTelefon = false;
    
                        }
                    })



                    InputMailUserPage.addEventListener('focus', () => {
                        InputMailUserPage.style.borderColor = '#f9c823';
                    })
    
                    InputMailUserPage.addEventListener('blur', () => {
    
                        var RegForName = new RegExp("^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$");
    
                        if (RegForName.test(InputMailUserPage.value)){
    
                            InputMailUserPage.style.borderColor = '#c9c9c9';
                            FlagsVolidationUserDetail.FlagMail = true;
    
                        } else {
    
                            if (InputMailUserPage.value != ''){

                                InputMailUserPage.style.borderColor = '#ff0404';
                            } else {
                                InputMailUserPage.style.borderColor = '#c9c9c9';
                            }
                            FlagsVolidationUserDetail.FlagMail = false;
    
                        }
                    })




                    InputCountryUserpage.addEventListener('focus', () => {
                        InputCountryUserpage.style.borderColor = '#f9c823';
                    })
    
                    InputCountryUserpage.addEventListener('blur', () => {
    
                        var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$");
    
                        if (RegForName.test(InputCountryUserpage.value)){
    
                            InputCountryUserpage.style.borderColor = '#c9c9c9';
                            FlagsVolidationUserDetail.FlagCountry = true;
    
                        } else {
    
                            if (InputCountryUserpage.value != ''){
                                InputCountryUserpage.style.borderColor = '#ff0404';
                            } else {
                                InputCountryUserpage.style.borderColor = '#c9c9c9';
                            }
                            FlagsVolidationUserDetail.FlagCountry = false;
                        }
                    })





                    var CollectionAllInputPageUser = document.querySelectorAll('.input-value-user-info');
                    var CollectionAllSelectPageUser = document.querySelectorAll('.select-style');
                    var ContainerForSelects = document.querySelectorAll('.conteiner-select');

                    ButChangeValue.addEventListener('click', () => {
                        
                        if (FlagButChangeValue == false){

                            for (var i = 0; i < CollectionAllInputPageUser.length; i++){
                                CollectionAllInputPageUser[i].removeAttribute('disabled');
                                CollectionAllInputPageUser[i].style.borderColor = '#c9c9c9';
                                if (CollectionAllInputPageUser[i].value == 'Не указано'){
                                    CollectionAllInputPageUser[i].value = '';
                                }
                            }
    
                            for (var i = 0; i < CollectionAllSelectPageUser.length; i++){
                                CollectionAllSelectPageUser[i].removeAttribute('disabled');
                                ContainerForSelects[i].classList.remove('conteiner-select-disabled');
                                ContainerForSelects[i].classList.add('conteiner-select-no-disabled');
                                CollectionAllSelectPageUser[i].style.borderColor = '#c9c9c9';
                            }
    
                            ButCloseChangeValue.style.display = 'inline-block';
                            ButChangeValue.innerHTML = 'Сохранить';
                            FlagButChangeValue = true;

                        } else {

                            var ChangensValue = {
                                UserId: user.id,
                                UserName: '',
                                UserSName: '',
                                UserPatronemic: '',
                                UserGender: SelectGenderUserPage.value,
                                UserDateBorn: 'NULL',
                                UserTelefon: '',
                                UserMail: 'NULL',
                                UserCountry: 'NULL'
                            }




                            if (FlagsVolidationUserDetail.FlagName == false){
                                ChangensValue.UserName = UserInfoFromPersonalArea[0].name;
                                InputNameUserPage.value = UserInfoFromPersonalArea[0].name;
                            } else {
                                ChangensValue.UserName = InputNameUserPage.value;
                            }

                            if (FlagsVolidationUserDetail.FlagSName == false){
                                ChangensValue.UserSName = UserInfoFromPersonalArea[0].s_name;
                                InputSNameUserPage.value = UserInfoFromPersonalArea[0].s_name;
                            } else {
                                ChangensValue.UserSName = InputSNameUserPage.value;
                            }

                            if (FlagsVolidationUserDetail.FlagPatronemic == false){
                                ChangensValue.UserPatronemic = UserInfoFromPersonalArea[0].patronemic;
                                InputPatronemicUserPage.value = UserInfoFromPersonalArea[0].patronemic;
                            } else {
                                ChangensValue.UserPatronemic = InputPatronemicUserPage.value;
                            }

                            if (FlagsVolidationUserDetail.FlagTelefon == false){
                                ChangensValue.UserTelefon = UserInfoFromPersonalArea[0].telefon;
                                InputTelefonUserPage.value = UserInfoFromPersonalArea[0].telefon;
                            } else {
                                ChangensValue.UserTelefon = InputTelefonUserPage.value;
                            }

                            if (FlagsVolidationUserDetail.FlagMail == true || InputMailUserPage.value != ''){
                                ChangensValue.UserMail = "\'" + InputMailUserPage.value + "\'";
                            } else {
                                InputMailUserPage.value = 'Не указано';
                            }

                            if (FlagsVolidationUserDetail.FlagCountry == true || InputCountryUserpage.value != ''){
                                ChangensValue.UserCountry = "\'" + InputCountryUserpage.value + "\'";
                            } else {
                                InputCountryUserpage.value = 'Не указано'
                            }

                            if (SelectDayBornUserPage.value != 'NULL' && SelectMonthBornUserPage.value != 'NULL' && SelectYearBornUserPage != 'NULL'){
                                ChangensValue.UserDateBorn = "\'" + SelectYearBornUserPage.value + '-' + SelectMonthBornUserPage.value + '-' + SelectDayBornUserPage.value + "\'";
                            } else {
                                SelectDayBornUserPage.value = 'NULL';
                                SelectMonthBornUserPage.value = 'NULL';
                                SelectYearBornUserPage.value = 'NULL';
                            }


                            for (var i = 0; i < CollectionAllInputPageUser.length; i++){
                                CollectionAllInputPageUser[i].setAttribute('disabled', 'true');
                                CollectionAllInputPageUser[i].style.borderColor = 'transparent';
                            }
                            for (var i = 0; i < CollectionAllSelectPageUser.length; i++){
                                CollectionAllSelectPageUser[i].setAttribute('disabled', 'true');
                                ContainerForSelects[i].classList.remove('conteiner-select-no-disabled');
                                ContainerForSelects[i].classList.add('conteiner-select-disabled');
                                CollectionAllSelectPageUser[i].style.borderColor = 'transparent';
                            }
                            ButCloseChangeValue.style.display = 'none';
                            ButChangeValue.innerHTML = 'Редактировать';
                            FlagButChangeValue = false;

                            fetch('/api/updatemaininfoaboutuser', {
                                method : 'POST',
                                body: JSON.stringify(ChangensValue),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })
                        }

                    })

                    ButCloseChangeValue.addEventListener('click', () => {
                    
                        for (var i = 0; i < CollectionAllInputPageUser.length; i++){
                            CollectionAllInputPageUser[i].setAttribute('disabled', 'true');
                            CollectionAllInputPageUser[i].style.borderColor = 'transparent';
                        }
                        for (var i = 0; i < CollectionAllSelectPageUser.length; i++){
                            CollectionAllSelectPageUser[i].setAttribute('disabled', 'true');
                            ContainerForSelects[i].classList.remove('conteiner-select-no-disabled');
                            ContainerForSelects[i].classList.add('conteiner-select-disabled');
                            CollectionAllSelectPageUser[i].style.borderColor = 'transparent';
                        }
                        ButCloseChangeValue.style.display = 'none';
                        ButChangeValue.innerHTML = 'Редактировать';
                        FlagButChangeValue = false;


                        ImageUserUserPage.src = UserInfoFromPersonalArea[0].image_user;
                        InputNameUserPage.value = UserInfoFromPersonalArea[0].name;
                        InputSNameUserPage.value = UserInfoFromPersonalArea[0].s_name;
                        SelectGenderUserPage.value = UserInfoFromPersonalArea[0].name_gender;
                        InputPatronemicUserPage.value = UserInfoFromPersonalArea[0].patronemic;
                        InputTelefonUserPage.value = UserInfoFromPersonalArea[0].telefon;

                        if (UserInfoFromPersonalArea[0].mail != null){
                            InputMailUserPage.value = UserInfoFromPersonalArea[0].mail;
                        } else {
                            InputMailUserPage.value = 'Не указано';
                        }

                        if (UserInfoFromPersonalArea[0].country != null){
                            InputCountryUserpage.value = UserInfoFromPersonalArea[0].country;
                        } else {
                            InputCountryUserpage.value = 'Не указано';
                        }

                        if (UserInfoFromPersonalArea[0].date_born != null){
                            var MasDateBorn = new Date(UserInfoFromPersonalArea[0].date_born);

                            SelectDayBornUserPage.value = MasDateBorn.getDate();
                            SelectMonthBornUserPage.value = MasDateBorn.getMonth() + 1;
                            SelectYearBornUserPage.value = MasDateBorn.getFullYear();
            
                        } else {

                            SelectDayBornUserPage.value = 'NULL';
                            SelectMonthBornUserPage.value = 'NULL';
                            SelectYearBornUserPage.value = 'NULL';
                        }
                    })
                })

                MainData.click();

                Security.addEventListener('click', () => {

                    ContentforUserInfo.innerHTML = 
                    `<div class="conteiner-user-info-in-user-page">
                                        
                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">Старый пароль:</div>
                            <div class="value-element-list-user-info"><input type="password" id='password-user-personal-area' class="security-input-value-user-info" value=""></div>
                        </div>

                        <div class="element-list-uset-info">
                            <div class="title-element-list-user-info">Новый пароль:</div>
                            <div class="value-element-list-user-info"><input type="password" id='new-password-user-personal-area' class="security-input-value-user-info" value=""></div>
                        </div>

                    </div>
                    
                    <div class="button-change-value-user-info">
                        <button id='but-change-password' class="stylebutton">Изменить пароль</button>
                    </div>`


                    var InputPasswordUserPage = document.querySelector('#password-user-personal-area');
                    var InputNewPasswordUserPage = document.querySelector('#new-password-user-personal-area');
                    var FlagChangePassword = {
                        Password: false,
                        NewPassword: false
                    }



                    InputPasswordUserPage.addEventListener('focus', () => {
                        InputPasswordUserPage.style.borderColor = '#f9c823';
                    })
    
                    InputPasswordUserPage.addEventListener('blur', () => {
    
                        var RegForName = new RegExp("^[a-zA-Z0-9_-]{6,18}$");
    
                        if (RegForName.test(InputPasswordUserPage.value)){

                            var str = {
                                password: "\'" + InputPasswordUserPage.value + "\'",
                                UserId: user.id
                            }

                            fetch('/api/truepassword', {
                                method : 'POST',
                                body: JSON.stringify(str),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })
                            .then(res => res.json())
                            .then(data => {

                                if (data.queryUnickLogin){
                                    InputPasswordUserPage.style.borderColor = '#c9c9c9';
                                    FlagChangePassword.Password = true;
                                } else {
                                    InputPasswordUserPage.style.borderColor = '#ff0404';
                                    FlagChangePassword.Password = false;
                                }
                            })
    
                        } else {
    
                            if (InputPasswordUserPage.value != ''){
                                InputPasswordUserPage.style.borderColor = '#ff0404';
                            } else {
                                InputPasswordUserPage.style.borderColor = '#c9c9c9';
                            }

                            FlagChangePassword.Password = false;

                        }
                    })




                    InputNewPasswordUserPage.addEventListener('focus', () => {
                        InputNewPasswordUserPage.style.borderColor = '#f9c823';
                    })
    
                    InputNewPasswordUserPage.addEventListener('blur', () => {
    
                        var RegForName = new RegExp("^[a-zA-Z0-9_-]{6,18}$");
    
                        if (RegForName.test(InputNewPasswordUserPage.value)){

                            InputNewPasswordUserPage.style.borderColor = '#c9c9c9';
                            FlagChangePassword.NewPassword = true;
    
                        } else {
    
                            if (InputNewPasswordUserPage.value != ''){
                                InputNewPasswordUserPage.style.borderColor = '#ff0404';
                            } else {
                                InputNewPasswordUserPage.style.borderColor = '#c9c9c9';
                            }

                            FlagChangePassword.NewPassword = false;
                        }
                    })
    
                    


                    var ButChangePassword = document.querySelector('#but-change-password');

                    ButChangePassword.addEventListener('click', () => {

                        if (FlagChangePassword.Password == true && FlagChangePassword.NewPassword == true){

                            var str = {
                                password: "\'" + InputNewPasswordUserPage.value + "\'",
                                UserId: user.id
                            }

                            fetch('/api/changepassworduser', {
                                method : 'POST',
                                body: JSON.stringify(str),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })

                            deleteCookie('password');
                            setCookie('password', InputNewPasswordUserPage.value, {expires: 3600, path: 'path=/'});
                            InputPasswordUserPage.value = '';
                            InputNewPasswordUserPage.value = '';


                        } else {

                            window.scrollTo(0, 0);

                            if (FlagChangePassword.Password == false){
                                InputPasswordUserPage.style.borderColor = '#ff0404';
                            }
                            if (FlagChangePassword.NewPassword == false){
                                InputNewPasswordUserPage.style.borderColor = '#ff0404';
                            }
                        }
                    })
    
                })


            break;


            case '#/order-periodical':

                var InfoPageOrder;

                if (user.id == '' && (getCookie('login') == undefined && getCookie('password') == undefined)){
                    window.location.hash = '#/signin?#/order-periodical';
                    break;
                } else {

                    var intervalSigninOrderPage = setInterval( function() {


                        if (user.id != ''){

                            clearInterval(intervalSigninOrderPage);

                            fetch('/api/infofromorderperiodical', {
                                method : 'POST',
                                body: JSON.stringify(user),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })
                            .then(res => res.json())
                            .then(data => {
                            
                                if (data.queryDetai.length == 0){

                                    window.location.hash = '#/basket';

                                } else {

                                    InfoPageOrder = data;
                                    console.log(data)

                                    Content.innerHTML = 
                                        `<div class="new-order container-text-compani">
                                            <duv class="title-page">Оформление заказа</duv>
                
                                            <div class="contaoner-order-content">
                                                <div class="info-user-order-page">
                
                                                    <div class="element-order-info">
                                                        <div class="container-title-element-order"><div class="title-grup-order">Населенный пункт</div></div>
                
                                                        <div class="container-title-element-order"><div class="title-element-order compulsory-pole">Населенный пункт</div></div>
                                                        <div class="container-input-order"><input id='locality' class="style-input-order" type="text"></div>
                                                        <div id="hint-locality" class="hint-reg"></div>
                                                    </div>
                



                                                    <div id='container-all-method-delivery' class="element-order-info">
                                                        <div class="container-title-element-order"><div class="title-grup-order compulsory-pole">Способ доставки</div></div>
                                                        <div id='list-elem-delivery-method' class='list-elem-method'>
                                                        <div class="element-delivery-method">
                                                            <div  class="container-radio-button-delivery-method"><input class="radio-button-delivery-method" type="radio" name="radio-delivery-method" value="2"></div>
                                                            <div class="container-text-delivery-method">
                                                                <div class="title-element-delivery-method">Курьером</div>
                                                                <div class="text-element-delivery-method">Доставка курьером</div>
                                                            </div>
                                                            <div id='price-courier' class="price-element-delivery-method">+ 30.00 руб</div>


                                                            <div id='value-this-method-2' class='none-visibel-blok'></div>
                                                        </div>
                
                                                        <div class="element-delivery-method">
                                                            <div class="container-radio-button-delivery-method"><input class="radio-button-delivery-method" type="radio" name="radio-delivery-method" value="3"></div>
                                                            <div class="container-text-delivery-method">
                                                                <div class="title-element-delivery-method">Самовывоз</div>
                                                                <div class="text-element-delivery-method">На пункте выдачи</div>
                                                            </div>
                                                            <div class="price-element-delivery-method">+ 0.00 руб</div>


                                                            <div id='value-this-method-3' class='none-visibel-blok'></div>
                                                        </div>
                                                        </div>
                                                        <div id="hint-delivery-method" class="hint-reg"></div>
                                                    </div>
                                                    



                
                                                    <div class="element-order-info">

                                                        <div class='container-panel-address'>
                                                            <div class="container-title-element-order"><div class="title-grup-order">Адрес доставки</div></div>
                                                
                                                            <div class="container-title-element-order"><div class="title-element-order compulsory-pole">Адрес</div></div>
                                                            <div class="container-input-order"><textarea id='address' class="textarea-order-page"></textarea></div>
                                                            <div id="hint-address" class="hint-reg"></div>
                                                        </div>
                
                                                        <div class="container-title-element-order"><div class="title-element-order">Комментарии к заказу</div></div>
                                                        <div class="container-input-order"><textarea id='wishes' class="textarea-order-page"></textarea></div>
    
                
                                                    </div>
                
                                                    <div id='container-all-payment-method' class="element-order-info">
                                                        <div class="container-title-element-order"><div class="title-grup-order compulsory-pole">Способ оплаты</div></div>
                                                        <div id='list-elem-payment-method' class='list-elem-method'>
                                                        <div class="element-delivery-method">
                                                            <div class="container-radio-button-delivery-method"><input class="radio-button-delivery-method" type="radio" name="radio-payment-method" value="2"></div>
                                                            <div class="container-text-delivery-method">
                                                                <div class="title-element-delivery-method">Наличными</div>
                                                                <div class="text-element-delivery-method">Наличными курьеру</div>
                                                            </div>

                                                            <div id='value-this-payment-method-2' class='none-visibel-blok2'></div>
                                                        </div>

                                                        <div class="element-delivery-method">
                                                            <div class="container-radio-button-delivery-method"><input class="radio-button-delivery-method" type="radio" name="radio-payment-method" value="3"></div>
                                                            <div class="container-text-delivery-method">
                                                                <div class="title-element-delivery-method">Банковской картой</div>
                                                                <div class="text-element-delivery-method">Visa, Mastercard, БЕЛКАРТ</div>
                                                            </div>

                                                            <div id='value-this-payment-method-3' class='none-visibel-blok2'></div>
                                                        </div>
                                                        </div>
                                                        <div id="hint-payment-method" class="hint-reg"></div>
                
                                                    </div>
                
                                                </div>
                
                
                
                
                                                <div class="what-in-basket">
                                                    
                                                    <div class="list-what-in-basket">
                
                                                        
                
                                                    </div>
                
                                                    <div class="price-producs-and-delivery">
                                                        <div class="elemnt-price-producs-and-delivery">
                                                            <div class="title-elemnt-price-producs-and-delivery">Сумма по товарам</div>
                                                            <div id='price-all-details' class="sup-price">0.00 руб</div>
                                                        </div>
                                                        <div class="elemnt-price-producs-and-delivery">
                                                            <div class="title-elemnt-price-producs-and-delivery">Стоимость доставки</div>
                                                            <div id='price-method-delivery' class="sup-price">0.00 руб</div>
                                                        </div>
                                                    </div>
                
                                                    <div class="all-price-new-order">
                                                        <div class="title-all-price-new-order">Итого:</div>
                                                        <div id='all-price-order' class="sup-price">0.00 руб</div>
                                                    </div>
                                                </div>
                
                
                
                                            </div>
                
                                            <div class="button-valide-order"><button id='issue-this-order' class="stylebutton">ПОДТВЕРДИТЬ ЗАКАЗ</button></div>
                                        </div>`
                                }

                                var PriceAllDetail;
                                var PriceCourier = 30;
                                PriceAllDetail = CreateListDeatilOrder(InfoPageOrder.queryDetai);

                                var PriceMethodDelivery = document.querySelector('#price-method-delivery');
                                var AllPriceThisOrder = document.querySelector('#all-price-order');

                                if (PriceAllDetail >= 700){
                                    PriceCourier = 0;
                                    document.querySelector('#price-courier').innerHTML = '+ 0.00 руб';
                                }


                                var InputLocality = document.querySelector('#locality');
                                var TextAreaAddress = document.querySelector('#address');
                                var InputWishes = document.querySelector('#wishes');


                                var FlagsVolidation = {
                                    FlagLocality: false,
                                    FlagAddress: false,
                                    FlagWishes: false
                                }


                                InputLocality.addEventListener('focus', () => {
                                    InputLocality.style.borderColor = '#f9c823';
                                    document.querySelector('#hint-locality').innerHTML = '';
                                })
                
                                InputLocality.addEventListener('blur', () => {
                                    InputLocality.value = InputLocality.value.replace(/\s+/g,' ').trim();
                                    var RegForName = new RegExp("^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я- ']+[a-zA-Zа-яА-Я']?$");
                
                                    if (RegForName.test(InputLocality.value)){
                
                                        FlagsVolidation.FlagLocality = true;
                                        InputLocality.style.borderColor = '#c9c9c9';
                
                                    } else {
                
                                        if (InputLocality.value != ""){
                                            document.querySelector('#hint-locality').innerHTML = 'Некорректные данные';
                                            InputLocality.style.borderColor = '#ff0404';
                                        } else {
                                            InputLocality.style.borderColor = '#c9c9c9';
                                        }
                
                                        FlagsVolidation.FlagLocality = false;
                
                                    }
                                })



                                TextAreaAddress.addEventListener('focus', () => {
                                    TextAreaAddress.style.borderColor = '#f9c823';
                                    document.querySelector('#hint-address').innerHTML = '';
                                })
                
                                TextAreaAddress.addEventListener('blur', () => {
                                    TextAreaAddress.value = TextAreaAddress.value.replace(/\s+/g,' ').trim();
                
                                    var RegForName = new RegExp("^[a-zA-Zа-яА-Я0-9-,.№ ']+?$");
                
                                    if (RegForName.test(TextAreaAddress.value)){
                
                                        FlagsVolidation.FlagAddress = true;
                                        TextAreaAddress.style.borderColor = '#c9c9c9';
                
                                    } else {
                
                                        if (TextAreaAddress.value != ""){
                                            document.querySelector('#hint-address').innerHTML = 'Некорректные данные';
                                            TextAreaAddress.style.borderColor = '#ff0404';
                                        } else {
                                            TextAreaAddress.style.borderColor = '#c9c9c9';
                                        }
                
                                        FlagsVolidation.FlagAddress = false;
                
                                    }
                                })


                                InputWishes.addEventListener('focus', () => {
                                    InputWishes.style.borderColor = '#f9c823';
                                })
                
                                InputWishes.addEventListener('blur', () => {
                                    InputWishes.value = InputWishes.value.replace(/\s+/g,' ').trim();

                
                                    if (InputWishes.value.length > 10){
                
                                        FlagsVolidation.FlagWishes = true;
                
                                    } else {
                
                                        FlagsVolidation.FlagWishes = false;
                
                                    }

                                    InputWishes.style.borderColor = '#c9c9c9';
                                })


                                //Method Delivery
                                var ContainerAllMethodDelivery = document.querySelector('#container-all-method-delivery');

                                ContainerAllMethodDelivery.addEventListener('click', (e) => {
                                    
                                    if (e.target.className == 'none-visibel-blok'){

                                        document.querySelector('#list-elem-delivery-method').style.borderColor = 'transparent';
                                        document.querySelector('#hint-delivery-method').innerHTML = '';

                                        document.querySelector('input[name="radio-delivery-method"][value="'+ e.target.id.replace('value-this-method-','')+'"]').checked = true;

                                        if (document.querySelector('.checked-element-delivery-method') != undefined){
                                            document.querySelector('.checked-element-delivery-method').classList.remove('checked-element-delivery-method');
                                        }

                                        e.target.classList.add('checked-element-delivery-method');

                                        if (e.target.id.replace('value-this-method-','') == 2){
                                            document.querySelector('.container-panel-address').style.display = 'flex';
                                            PriceMethodDelivery.innerHTML = PriceCourier.toFixed(2) + ' руб';
                                            AllPriceThisOrder.innerHTML = (PriceAllDetail + PriceCourier).toFixed(2) + ' руб';
                                        }


                                        if (e.target.id.replace('value-this-method-','') == 3){
                                            document.querySelector('.container-panel-address').style.display = "none";
                                            PriceMethodDelivery.innerHTML = '0.00 руб';
                                            AllPriceThisOrder.innerHTML = PriceAllDetail.toFixed(2) + ' руб';
                                        }
                                    }
                                })



                                //Method Payment
                                var ContainerAllMethodPayment= document.querySelector('#container-all-payment-method');

                                ContainerAllMethodPayment.addEventListener('click', (e) => {
                                    
                                    if (e.target.className == 'none-visibel-blok2'){

                                        document.querySelector('#list-elem-payment-method').style.borderColor = 'transparent';
                                        document.querySelector('#hint-payment-method').innerHTML = '';

                                        document.querySelector('input[name="radio-payment-method"][value="'+ e.target.id.replace('value-this-payment-method-','')+'"]').checked = true;

                                        if (document.querySelector('.checked-element-payment-method') != undefined){
                                            document.querySelector('.checked-element-payment-method').classList.remove('checked-element-payment-method');
                                        }

                                        e.target.classList.add('checked-element-payment-method');

                                    }
                                })


                                var ButIssueThisOrder = document.querySelector('#issue-this-order');

                                ButIssueThisOrder.addEventListener('click', () => {

                                    if (document.querySelector('input[name="radio-delivery-method"]:checked') != undefined && document.querySelector('input[name="radio-payment-method"]:checked') != undefined){

                                        
                                        if (document.querySelector('input[name="radio-delivery-method"]:checked').value == 2){

                                            if (FlagsVolidation.FlagLocality == true && FlagsVolidation.FlagAddress == true){
                                                //+
                                                var InfoThisOrder = {
                                                    idUser: user.id,
                                                    locality: InputLocality.value,
                                                    address: '\'' + TextAreaAddress.value + '\'',
                                                    deliveryMethod: 2,
                                                    paymentMethod: document.querySelector('input[name="radio-payment-method"]:checked').value,
                                                    wishes: null
                                                }

                                                if(FlagsVolidation.FlagWishes == true){
                                                    InfoThisOrder.wishes = '\'' + InputWishes.value + '\'';
                                                }

                                                fetch('/api/complitorder', {
                                                    method : 'POST',
                                                    body: JSON.stringify(InfoThisOrder),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {
                                                    window.location.hash = '#/main';
                                                })


                                            } else {

                                                if (FlagsVolidation.FlagLocality == false){

                                                    InputLocality.style.borderColor = '#ff0404';
                                                    document.querySelector('#hint-locality').innerHTML = 'Поле обязательное к заполнению';
                                                }
        
                                                if (FlagsVolidation.FlagAddress == false){
        
                                                    TextAreaAddress.style.borderColor = '#ff0404';
                                                    document.querySelector('#hint-address').innerHTML = 'Поле обязательное к заполнению';
                                                }
                                            }
                                            
                                        }


                                        if (document.querySelector('input[name="radio-delivery-method"]:checked').value == 3){

                                            if (FlagsVolidation.FlagLocality == true){
                                                //+
                                                var InfoThisOrder = {
                                                    idUser: user.id,
                                                    locality: InputLocality.value,
                                                    address: null,
                                                    deliveryMethod: 3,
                                                    paymentMethod: document.querySelector('input[name="radio-payment-method"]:checked').value,
                                                    wishes: null
                                                }

                                                if(FlagsVolidation.FlagWishes == true){
                                                    InfoThisOrder.wishes = '\'' + InputWishes.value + '\'';
                                                }

                                                fetch('/api/complitorder', {
                                                    method : 'POST',
                                                    body: JSON.stringify(InfoThisOrder),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {
                                                    window.location.hash = '#/main';
                                                })

                                            } else {

                                                if (FlagsVolidation.FlagLocality == false){

                                                    InputLocality.style.borderColor = '#ff0404';
                                                    document.querySelector('#hint-locality').innerHTML = 'Поле обязательное к заполнению';
                                                }

                                            }
                                            
                                        }
                                        

                                    } else {


                                        if (document.querySelector('input[name="radio-delivery-method"]:checked') == undefined){

                                            document.querySelector('#list-elem-delivery-method').style.borderColor = '#ff0404';
                                            document.querySelector('#hint-delivery-method').innerHTML = 'Поле обязательное к заполнению';
                                        }

                                        if (document.querySelector('input[name="radio-payment-method"]:checked') == undefined){

                                            document.querySelector('#list-elem-payment-method').style.borderColor = '#ff0404';
                                            document.querySelector('#hint-payment-method').innerHTML = 'Поле обязательное к заполнению';
                                        }

                                        if (FlagsVolidation.FlagLocality == false){

                                            InputLocality.style.borderColor = '#ff0404';
                                            document.querySelector('#hint-locality').innerHTML = 'Поле обязательное к заполнению';
                                        }

                                        if (FlagsVolidation.FlagAddress == false){

                                            TextAreaAddress.style.borderColor = '#ff0404';
                                            document.querySelector('#hint-address').innerHTML = 'Поле обязательное к заполнению';
                                        }


                                    }
                                })


                            })
                            
                        }
                    },0);
                }



            break;


            case '#/adminca':

                if (user.type == 'Администратор' || getCookie('login') != undefined && getCookie('password') != undefined){

                    if (user.id == ''){

                        var intervalSigninAdminca = setInterval( function(){
                            if (user.id != ''){
                                if (user.type == 'Администратор'){

                                    Content.innerHTML = 
                                    `<div class='page-adminca'>
                                        <div>
                                            <div class="container-select-table-bd">
                                                <select class="select-table-bd">
                                                    <option>Название таблицы</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div class='container-table-admin-page'>
                                            <table class='table-adminca-page'>

                                            </table>
                                        </div>

                                        <div class='panel-manipylation-value-db'>
                                            <div class='but-manipylation-value-db'>

                                                <div id='but-add-new-carteg' class='element-but-manipylation-value-db'>
                                                    <i class="fas fa-plus-circle"></i>
                                                    <div class='name-element-but-manipylation-value-db'>
                                                        Добавить
                                                    </div>
                                                </div>

                                                <div id='but-update-carteg' class='element-but-manipylation-value-db'>
                                                    <i class="far fa-edit"></i>
                                                    <div class='name-element-but-manipylation-value-db'>
                                                        Изменить
                                                    </div>
                                                </div>

                                                <div id='but-delete-carteg' class='element-but-manipylation-value-db'>
                                                    <i class="fas fa-trash-alt"></i>
                                                    <div class='name-element-but-manipylation-value-db'>
                                                        Удалить
                                                    </div>
                                                </div>
                                            </div>
                                            

                                            <div class='content-manipylation-value-db'>
                                            </div>
                                        </div>
                                    </div>`

                                    AddScriptForPage('script/adminca.js');
                                } else {

                                    window.location.hash = '#/signin';
                                }
                                
                                clearInterval(intervalSigninAdminca);
                            }
                        })
                    } else {

                        if (user.type == 'Администратор'){

                            Content.innerHTML = 
                            `<div class='page-adminca'>
                                <div>
                                    <div class="container-select-table-bd">
                                        <select class="select-table-bd">
                                            <option>Название таблицы</option>

                                        </select>
                                    </div>
                                </div>

                                <div class='container-table-admin-page'>
                                    <table class='table-adminca-page'>

                                    </table>
                                </div>

                                <div class='panel-manipylation-value-db'>
                                    <div class='but-manipylation-value-db'>

                                        <div id='but-add-new-carteg' class='element-but-manipylation-value-db'>
                                            <i class="fas fa-plus-circle"></i>
                                            <div class='name-element-but-manipylation-value-db'>
                                                Добавить
                                            </div>
                                        </div>

                                        <div id='but-update-carteg' class='element-but-manipylation-value-db'>
                                            <i class="far fa-edit"></i>
                                            <div class='name-element-but-manipylation-value-db'>
                                                Изменить
                                            </div>
                                        </div>

                                        <div id='but-delete-carteg' class='element-but-manipylation-value-db'>
                                            <i class="fas fa-trash-alt"></i>
                                            <div class='name-element-but-manipylation-value-db'>
                                                Удалить
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div class='content-manipylation-value-db'>
                                    </div>
                                </div>
                            </div>`

                            AddScriptForPage('script/adminca.js');
                        } else {

                            window.location.hash = '#/signin';
                        }
                    }
                } else {

                    window.location.hash = '#/signin';
                }
                
            break;


        }



        if (window.location.hash.indexOf('#/signin') == 0){

            Content.innerHTML = 
            `<div class="signin">

                <div class="title-page">Вход</div>

                <div class="list-signin">

                    <div class="element-list-signin">
                        <div id="hint-signin-signin" class="hint-reg"></div>

                        <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Логин</div></div>

                        <div class="container-input-element-singin">
                            <input id='login-signin' class="input-style" type="text">
                        </div>

                        <div id="hint-login-signin" class="hint-reg"></div>
                    </div>

                    <div class="element-list-signin">
                        <div class="container-title-element-signin"><div class="title-element-signin compulsory-pole">Пароль</div></div>

                        <div class="container-input-element-singin">
                            <input id='password-signin' class="input-style" type="password">
                        </div>

                        <div id="hint-password-signin" class="hint-reg"></div>
                    </div>

                    <div class="list-button-signin">
                        <div class="button-signin"><button id='but-signin' class="stylebutton">ВОЙТИ</button></div>
                        
                        <a class="a-style-signin" href="#/userplus">Зарегистрироваться</a>
                    </div>

                </div>

            </div>`



            var InputLoginSignIn = document.querySelector('#login-signin');
            var InputPasswordSignIn = document.querySelector('#password-signin');

            InputLoginSignIn.addEventListener('focus', () => {

                InputLoginSignIn.style.borderColor = '#c9c9c9';
                document.querySelector('#hint-signin-signin').innerHTML = '';
                document.querySelector('#hint-login-signin').innerHTML = '';
            })

            InputPasswordSignIn.addEventListener('click', () => {

                InputPasswordSignIn.style.borderColor = '#c9c9c9';
                document.querySelector('#hint-signin-signin').innerHTML = '';
                document.querySelector('#hint-password-signin').innerHTML = '';
            })



            var ButSingIn = document.querySelector('#but-signin');

            ButSingIn.addEventListener('click', () => {

                var SignInValue = {
                    login: InputLoginSignIn.value,
                    password: InputPasswordSignIn.value
                }
    
                if (SignInValue.login != '' && SignInValue.password != ''){

                    fetch('/api/signin', {
                        method : 'POST',
                        body: JSON.stringify(SignInValue),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    .then(res => res.json())
                    .then(data => {

                        if (data.result.length == 0){

                            window.scrollTo(0, 0);
                            document.querySelector('#hint-signin-signin').innerHTML = 'Неправильный логин или пароль';
                            InputLoginSignIn.style.borderColor = '#ff0404';
                            InputPasswordSignIn.style.borderColor = '#ff0404';

                        } else {

                            setCookie('login', InputLoginSignIn.value, {expires: 3600, path: 'path=/'});
                            setCookie('password', InputPasswordSignIn.value, {expires: 3600, path: 'path=/'});
                            
                            FlagUserSignIn = true;
                            user.img = data.result[0].image_user;
                            user.sname = data.result[0].s_name;
                            user.name = data.result[0].name;
                            user.type = data.result[0].name_type;
                            user.id = data.result[0].id_user;

                            if (window.location.hash == '#/signin'){
                                
                                window.location.hash = '#/main';
                            } else {
                                window.location.hash = window.location.hash.replace('#/signin?', '');
                            }
                            
                            
                            
                            CreatePanelUserAndSignOut(user);

                            if (getCookie('artikle_detail') != undefined){

                                var InfoCookie = {
                                    idUser: user.id,
                                    artikle: getCookie('artikle_detail').split('&'),
                                    count: getCookie('count_detail').split('&')
                                }
                                
                                fetch('/api/changebasketinfo', {
                                    method : 'POST',
                                    body: JSON.stringify(InfoCookie),
                                    headers: {
                                        'Content-Type': 'application/json',
                                    }
                                })
                                .then(res => res.json())
                                .then(data => {
                                    ButtonBasketValue(user);
                                })

                                
                                deleteCookie('artikle_detail');
                                deleteCookie('price_detail');
                                deleteCookie('count_detail');
                            }

                            ButtonBasketValue(user);



                            if (user.type == 'Администратор'){

                                var ContainerMenu = document.querySelector('.menu-nav-row');
            
                                var Link = document.createElement('a');
                                Link.href = '#/adminca';
                                Link.setAttribute('id', 'element-adminki');
                                ContainerMenu.appendChild(Link);
            
                                    var ElementRowMenu = document.createElement('div');
                                    ElementRowMenu.setAttribute('class', 'element-menu-nav-row');
                                    ElementRowMenu.innerHTML = 'Админка';
                                    Link.appendChild(ElementRowMenu);
                            }
                        }
                    })

                } else {

                    if (SignInValue.login == ''){
                        InputLoginSignIn.style.borderColor = '#ff0404';
                        document.querySelector('#hint-login-signin').innerHTML = 'Поле обязательное к заполнению';
                    }

                    if (SignInValue.password == ''){
                        InputPasswordSignIn.style.borderColor = '#ff0404';
                        document.querySelector('#hint-password-signin').innerHTML = 'Поле обязательное к заполнению';
                    }
                }
            })
        }



        if (window.location.hash.indexOf('#/catalog/search?=') == 0){

            var str = {
                word_search: decodeURIComponent(window.location.hash.replace('#/catalog/search?=', ''))
                        };
                        
            fetch('/api/search', {
                method : 'POST',
                body: JSON.stringify(str),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(data => {

                document.querySelector('.title-catalog-word').innerHTML = 'Поиск: ' + str.word_search;
                if (data.queryDetai.length > 0){

                    for ( var i = 0; i < data.queryDetai.length; i++){
                        CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                    }

                } else {

                    var ContainerResaltSearch = document.querySelector('.catalog-content');

                    var div = document.createElement('div');
                    div.setAttribute('class', 'container-resalt-search');
                    ContainerResaltSearch.appendChild(div);

                    var i = document.createElement('i');
                    i.setAttribute('class', 'fas fa-info-circle');
                    div.appendChild(i);

                    var word = document.createElement('div');
                    word.setAttribute('class', 'result-serch-word');
                    word.innerHTML = 'Ничего не найдено';
                    div.appendChild(word);
                }
            })

            Content.innerHTML = 
                `<div class="content-column1 column-catalog-and-filter">

                    <div class='hide-container-catalog'>
                        <i id='hide-but-catalog' class="fas fa-ellipsis-v icon-hide-catalog-and-filter"></i>

                        <div class="menu-nav-column">
                        
                            <div class="name-menu-nav-column">Каталог</div>

                        </div>
                    </div>


                    

                </div>

                <div class="content-column2 container-text-compani">

                    <div class="title-catalog">
                        <div class="title-catalog-word">Каталог</div>
                        
                    </div>


                    <div class="catalog-content">

                        

                    </div>

                    <!--<div class="catalog-list-pages">
                        <div><i class="fas fa-angle-left catalog-list-pages-nav left"></i></div>
                        <div class="namber-pages-for-catalog">
                            <div class="element-namber-pages-for-catalog" id="cheackpagecatalog">1</div>
                            <div class="element-namber-pages-for-catalog">2</div>
                            <div class="element-namber-pages-for-catalog">3</div>
                        </div>
                        <div><i class="fas fa-angle-right catalog-list-pages-nav right"></i></div>
                    </div>-->

                </div>`

                
                var ButHideCatalog = document.querySelector('#hide-but-catalog');


                var ContainerHideCatalog = document.querySelector('.menu-nav-column');


                var FlagHideCatalog = false;


                ButHideCatalog.addEventListener('click', () => {


                    if (FlagHideCatalog == false){

                        ContainerHideCatalog.style.display = 'block';
                        ButHideCatalog.style.backgroundColor = '#f9c823';
                        ButHideCatalog.style.borrderColor = '#c9c9c9';
                        FlagHideCatalog = true;
                      } else {
                
                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                      }

                })


        }



        if (window.location.hash.indexOf('#/catalog/') == 0 && window.location.hash.indexOf('?') == -1 && window.location.hash.indexOf('#/catalog/search?=') == -1){


            if (decodeURIComponent(window.location.hash.replace('#/catalog/', '')) != 'Товары со скидкой' && decodeURIComponent(window.location.hash.replace('#/catalog/', '')) != 'Популярные товары'){



                var str = {
                    name_type: decodeURIComponent(window.location.hash.replace('#/catalog/', ''))
                            };
    
                fetch('/api/postcatalog', {
                    method : 'POST',
                    body: JSON.stringify(str),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(data => {
                    document.querySelector('.title-catalog-word').innerHTML = str.name_type;
                    for ( var i = 0; i < data.queryDetai.length; i++){
                        CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                    }
                })




            } else {


                if (decodeURIComponent(window.location.hash.replace('#/catalog/', '')) == 'Товары со скидкой'){

                    fetch('/api/getqueyrdescontdetail')
                    .then(res => res.json())
                    .then(data => {
                        document.querySelector('.title-catalog-word').innerHTML = 'Товары со скидкой';
                        for ( var i = 0; i < data.queryDetai.length; i++){
                            CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                        }
                    })
                } else {

                    fetch('/api/getqueyrxitdetail')
                    .then(res => res.json())
                    .then(data => {
                        document.querySelector('.title-catalog-word').innerHTML = 'Популярные товары';
                        for ( var i = 0; i < data.queryDetai.length; i++){
                            CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                        }
                    })
                }

            }



            Content.innerHTML = 
                `<div class="content-column1 column-catalog-and-filter">

                    <div class='hide-container-catalog'>
                        <i id='hide-but-catalog' class="fas fa-ellipsis-v icon-hide-catalog-and-filter"></i>
                        <div class="menu-nav-column">
                        
                            <div class="name-menu-nav-column">Каталог</div>


                        </div>
                    </div>


                    <div class='hide-container-filter'>
                        <i id='hide-but-filter' class="fas fa-filter icon-hide-catalog-and-filter"></i>
                        <div class="filter">

                            <div class="title-filter">Фильтры</div>

                            <div class="element-filter">
                                <div id="filter-element-0" class="title-element-filter">
                                    <div>Цена</div>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                                
                                <div class="element-filter-submenu">
                                    <div class='element-filter-sell'>
                                        <div class="div-for-input">
                                            <input type="number" id='min-sell' class='input-style' placeholder="От">
                                        </div>
                                        <div>~</div>
                                        <div class="div-for-input">
                                            <input type="number" id='max-sell' class="input-style" placeholder="До">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            <div class="container-but-filter">
                                <button id='button-filter' class="stylebutton">Применить</button>
                            </div>
                            
                        </div>
                    </div>
                    

                </div>

                <div class="content-column2 container-text-compani">

                    <div class="title-catalog">
                        <div class="title-catalog-word">Каталог</div>
                        <div class="sorting-for-catalog">
                            <select class="select-sorting-for-catalog">
                                <option value='not-sort'>Сортировка</option>
                                <option value='price-asc'>по возрастанию цены</option>
                                <option value='price-desc'>по убыванию цены</option>
                                <option value='name-asc'>по названию</option>
                            </select>
                        </div>
                    </div>


                    <div class="catalog-content">

                        

                    </div>

                    <!--<div class="catalog-list-pages">
                        <div><i class="fas fa-angle-left catalog-list-pages-nav left"></i></div>
                        <div class="namber-pages-for-catalog">
                            <div class="element-namber-pages-for-catalog" id="cheackpagecatalog">1</div>
                            <div class="element-namber-pages-for-catalog">2</div>
                            <div class="element-namber-pages-for-catalog">3</div>
                        </div>
                        <div><i class="fas fa-angle-right catalog-list-pages-nav right"></i></div>
                    </div>-->

                </div>`

                
                AddScriptForPage('script/filter_script.js');

                var ButHideCatalog = document.querySelector('#hide-but-catalog');
                var ButHideFilter = document.querySelector('#hide-but-filter');

                var ContainerHideCatalog = document.querySelector('.menu-nav-column');
                var ContainerHideFilter = document.querySelector('.filter');

                var FlagHideCatalog = false;
                var FlagHideFilter = false;


                ButHideCatalog.addEventListener('click', () => {

                    if (FlagHideFilter == true){

                        ContainerHideFilter.style.display = 'none';
                        ButHideFilter.style.backgroundColor = 'transparent';
                        ButHideFilter.style.borrderColor = 'transparent';
                        FlagHideFilter = false;
                    }

                    if (FlagHideCatalog == false){

                        ContainerHideCatalog.style.display = 'block';
                        ButHideCatalog.style.backgroundColor = '#f9c823';
                        ButHideCatalog.style.borrderColor = '#c9c9c9';
                        FlagHideCatalog = true;
                      } else {
                
                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                      }

                })


                ButHideFilter.addEventListener('click', () => {

                    if (FlagHideCatalog == true){

                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                    }

                    if (FlagHideFilter == false){

                        ContainerHideFilter.style.display = 'block';
                        ButHideFilter.style.backgroundColor = '#f9c823';
                        ButHideFilter.style.borrderColor = '#c9c9c9';
                        FlagHideFilter = true;
                      } else {
                
                        ContainerHideFilter.style.display = 'none';
                        ButHideFilter.style.backgroundColor = 'transparent';
                        ButHideFilter.style.borrderColor = 'transparent';
                        FlagHideFilter = false;
                      }

                })

                var SelectSort = document.querySelector('.select-sorting-for-catalog');

                SelectSort.addEventListener('change', () => {

                    if (SelectSort.value != 'not-sort'){
                        window.location.hash += '?Sort='+SelectSort.value;
                    }

                })
            
        }



        if (window.location.hash.indexOf('#/detail/') == 0){
            
            var str = {
                artikle: decodeURIComponent(window.location.hash.replace('#/detail/', '')),
                idUser: ''
            }

            var CountDetail;
            var FilterData;
            var MasLabel;

            Content.innerHTML = 
                `<div class="content-column1 column-for-hide">
                    <div class="menu-nav-column">
                    
                        <div class="name-menu-nav-column">Каталог</div>


                    </div>
                </div>


                <div class="content-column2 container-text-compani">
                
                </div>`

            var ContentDetailForPageDetail = document.querySelector('.content-column2');
            

            if (user.id != '' || (getCookie('login') != undefined && getCookie('password') != undefined)){


                var intervalSigninDetailPage = setInterval( function() {

                    if (user.id != ''){

                        str.idUser = user.id;

                        fetch('/api/postquerydetailpage', {
                            method : 'POST',
                            body: JSON.stringify(str),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                        .then(res => res.json())
                        .then(data => { 
        
                            CountDetail = data.queryDetai[0].count;
                            FilterData = data.queryFilter;
                            MasLabel = data.queryLabel;
                            
                            ContentDetailForPageDetail.innerHTML += 
                            `<div class="page-detail">
        
                                    <div class="title-name-detail">${data.queryDetai[0].name_detail}</div>
        
                                    <div class="image-and-description-detail">
                                        <div class="slider-images-this-detail">
        
                                            <div class="image-and-labels">
                                                <img class="basic-image-detail" src="${data.queryDetai[0].img}">
                                                <div class="labels-list-from-page-detail">
                                                    
                                                </div>
                                            </div>
                                            <!--<div>
                                                <div class="slidercontainer-images-detai">
                                                    <div class="carousel-hider-slidercontainer-images-detai">
                                                        <div class="slider-nav-images-detai slider-nav-images-detai-left"><i class="fas fa-angle-left"></i></div>
                                                        <ul class="carousel-list-images-detai">
                                                            <li id='carousel-element-images-detai-1' class="carousel-element-images-detai"><img src="image/allimagedetail/1.jpg"></li>
                                                            <li id='carousel-element-images-detai-2' class="carousel-element-images-detai"><img src="image/allimagedetail/2.jpg"></li>
                                                            <li id='carousel-element-images-detai-3' class="carousel-element-images-detai"><img src="image/allimagedetail/3.jpg"></li>
                                                            <li id='carousel-element-images-detai-4' class="carousel-element-images-detai"><img src="image/allimagedetail/4.jpg"></li>
                                                            <li id='carousel-element-images-detai-5' class="carousel-element-images-detai"><img src="image/allimagedetail/1.jpg"></li>
                                                        </ul>
                                                        <div class="slider-nav-images-detai slider-nav-images-detai-right"><i class="fas fa-angle-right"></i></i></div>
                                                    </div>
                                                </div>
                                            </div>-->
                                        </div>
        
                                        <div class="basic-descriptin-detail">
        
                                            <div class="artikyl-and-availability">
                                                <div>Артикул: <span id="artikyl-text">${data.queryDetai[0].artikle}</span></div>
                                                <div class="availability-detail"></div>
                                            </div>
        
                                            <div class="price-ditai-in-basic-page">${data.queryDetai[0].price.toFixed(2)} руб</div>
        
                                            <div class="smoll-descriptin-detail">
                                                <div class="text-smoll-description">
                                                    ${data.queryDetai[0].description}
                                                </div>
                                            </div>
        
                                            <div class="counter-detail-and-but-buy">
                                                <div class="counter-detail-in-basic-detail-page">
                                                    <button class="button-change-counter-detail">-</button>
                                                    <input class="counter-detail" type="text" value="1">
                                                    <button class="button-change-counter-detail">+</button>
                                                </div>
                                                <div class="button-buy-detail"><button id='add-in-basket' class="stylebutton">В КОРЗИНУ</button></div>
                                            </div>
        
                                        </div>
                                    </div>
        
                                    <div class="description-and-characteristic-basic-detail">
                                        <div class="titels-description-and-characteristic-basic-detail">
        
                                            <div class="element-titels-description-and-characteristic-basic-detail element-menu-nav-topsell-cheack">Характеристика</div>
                                        </div>
        
                                        <div class="content-description-or-characteristic-basic-detail">
        
                                        </div>
                                    </div>
        
                                    <div class="similar-detail">
        
                                        <div class="title-similar-detail"><div class="element-title-similar-detail">ПОХОЖИЕ ТОВАРЫ</div></div>
        
                                        <div>
                                                <div class="slider-similar-detail">
                                                        <div class="slider-similar-detail-nav slider-similar-detail-nav-left"><i class="fas fa-arrow-alt-circle-left"></i></div>
                                                        <ul class="slider-similar-detail-carousel-list">
                                    
                                    
                                                            
                                                        </ul>
                                                        <div class="slider-similar-detail-nav slider-similar-detail-nav-right"><i class="fas fa-arrow-alt-circle-right"></i></div>
                                    
                                                    </div>
                                            </div>
                                    </div>
        
                                </div>
                            </div>`
                            
                            VNalichii(data.queryDetai[0].count);
                            CreateGridFilter(FilterData);
                            CreateLabelDetail(MasLabel);
        
                            var butonMinus = document.querySelectorAll('.button-change-counter-detail')[0];
                            var butonPlus = document.querySelectorAll('.button-change-counter-detail')[1];
                            var inputCountDetail = document.querySelector('.counter-detail');
                            var AddInBasket = document.querySelector('#add-in-basket');
        
                            var ThisDeatilInBasket = 0;
        
                            if (data.queryBasket.length > 0){
                                ThisDeatilInBasket = data.queryBasket[0].count_buy;
                            }
        
                            if (+CountDetail - ThisDeatilInBasket == 0){
                                inputCountDetail.value = 0;
                                butonMinus.disabled = true;
                                butonPlus.disabled = true;
                                AddInBasket.disabled = true;
                                AddInBasket.classList.remove('stylebutton');
                                AddInBasket.classList.add('stylebutton2');
                            }
        
                            butonMinus.addEventListener('click', () => {
                            
                                if (+inputCountDetail.value > 1){
                                    inputCountDetail.value = +inputCountDetail.value - 1;
                                }
                            })
        
        
                            butonPlus.addEventListener('click', () => {
                            
                                if (+inputCountDetail.value < +CountDetail - ThisDeatilInBasket){
                                    inputCountDetail.value = +inputCountDetail.value + 1;
                                }
                            })
        
                            inputCountDetail.addEventListener('change', () => {
        
                                var value= +inputCountDetail.value.replace(/\D/g,'')||0;
                                inputCountDetail.value = Math.min((+CountDetail - ThisDeatilInBasket), Math.max(1, value));
                            })
        
        
        
                            AddInBasket.addEventListener('click', () => {
                                
                                if (user.id != ''){
        
                                    var valueForBasketAndOrder = {
                                        idUser: user.id,
                                        artikle_detail: data.queryDetai[0].artikle,
                                        count: inputCountDetail.value
                                    }
                                    
                                    fetch('/api/adddetailinbasket', {
                                        method : 'POST',
                                        body: JSON.stringify(valueForBasketAndOrder),
                                        headers: {
                                            'Content-Type': 'application/json',
                                        }
                                    })
                                    .then(res => res.json())
                                    .then(data => {
                                        ButtonBasketValue(user);
                                    })
        
                                } else {
        
                                    if (getCookie('count_detail') != undefined){
        
                                        var strArtikle = getCookie('artikle_detail');
            
                                        if (strArtikle.indexOf(data.queryDetai[0].artikle) > -1){
            
                                            var strCount = getCookie('count_detail');
            
                                            var masArtikle = strArtikle.split('&');
                                            var masCount = strCount.split('&');
            
                                            for (var i = 0; i < masArtikle.length; i++){
            
                                                if (data.queryDetai[0].artikle == masArtikle[i]){
                                                    masCount[i] = +masCount[i] + +inputCountDetail.value;
                                                    break;
                                                }
                                            }
            
                                            setCookie('artikle_detail', getCookie('artikle_detail'), {expires: 0, path: 'path=/'});
                                            setCookie('price_detail', getCookie('price_detail'), {expires: 0, path: 'path=/'});
                                            setCookie('count_detail',  masCount.join('&'), {expires: 0, path: 'path=/'});
            
                                        } else {
            
                                            setCookie('artikle_detail', getCookie('artikle_detail') + '&' + data.queryDetai[0].artikle, {expires: 0, path: 'path=/'});
                                            setCookie('price_detail', getCookie('price_detail') + '&' + data.queryDetai[0].price.toFixed(2), {expires: 0, path: 'path=/'});
                                            setCookie('count_detail', getCookie('count_detail') + '&' + inputCountDetail.value, {expires: 0, path: 'path=/'});
                                        }
            
                                    } else {
            
                                        setCookie('artikle_detail', data.queryDetai[0].artikle, {expires: 0, path: 'path=/'});
                                        setCookie('price_detail', data.queryDetai[0].price.toFixed(2), {expires: 0, path: 'path=/'});
                                        setCookie('count_detail', inputCountDetail.value, {expires: 0, path: 'path=/'});
                                    }
        
                                    ButtonBasketValue(user);
                                }
                                //
                                if (ThisDeatilInBasket + +inputCountDetail.value < CountDetail){
                                    ThisDeatilInBasket += +inputCountDetail.value;
                                    inputCountDetail.value = 1;
                                } else {
                                    inputCountDetail.value = 0;
                                    butonMinus.disabled = true;
                                    butonPlus.disabled = true;
                                    AddInBasket.disabled = true;
                                    AddInBasket.classList.remove('stylebutton');
                                    AddInBasket.classList.add('stylebutton2');
                                }
                                
                            })
        
        
                            AddScriptForPage('script/script_slider_similar-detail.js');
                        })
                        clearInterval(intervalSigninDetailPage);
                    }
                },0)

            } else {

            fetch('/api/postquerydetailpage', {
                    method : 'POST',
                    body: JSON.stringify(str),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(data => { 

                    CountDetail = data.queryDetai[0].count;
                    FilterData = data.queryFilter;
                    MasLabel = data.queryLabel;
                    
                    ContentDetailForPageDetail.innerHTML += 
                    `<div class="page-detail">

                            <div class="title-name-detail">${data.queryDetai[0].name_detail}</div>

                            <div class="image-and-description-detail">
                                <div class="slider-images-this-detail">

                                    <div class="image-and-labels">
                                        <img class="basic-image-detail" src="${data.queryDetai[0].img}">
                                        <div class="labels-list-from-page-detail">
                                            
                                        </div>
                                    </div>
                                    <!--<div>
                                        <div class="slidercontainer-images-detai">
                                            <div class="carousel-hider-slidercontainer-images-detai">
                                                <div class="slider-nav-images-detai slider-nav-images-detai-left"><i class="fas fa-angle-left"></i></div>
                                                <ul class="carousel-list-images-detai">
                                                    <li id='carousel-element-images-detai-1' class="carousel-element-images-detai"><img src="image/allimagedetail/1.jpg"></li>
                                                    <li id='carousel-element-images-detai-2' class="carousel-element-images-detai"><img src="image/allimagedetail/2.jpg"></li>
                                                    <li id='carousel-element-images-detai-3' class="carousel-element-images-detai"><img src="image/allimagedetail/3.jpg"></li>
                                                    <li id='carousel-element-images-detai-4' class="carousel-element-images-detai"><img src="image/allimagedetail/4.jpg"></li>
                                                    <li id='carousel-element-images-detai-5' class="carousel-element-images-detai"><img src="image/allimagedetail/1.jpg"></li>
                                                </ul>
                                                <div class="slider-nav-images-detai slider-nav-images-detai-right"><i class="fas fa-angle-right"></i></i></div>
                                            </div>
                                        </div>
                                    </div>-->
                                </div>

                                <div class="basic-descriptin-detail">

                                    <div class="artikyl-and-availability">
                                        <div>Артикул: <span id="artikyl-text">${data.queryDetai[0].artikle}</span></div>
                                        <div class="availability-detail"></div>
                                    </div>

                                    <div class="price-ditai-in-basic-page">${data.queryDetai[0].price.toFixed(2)} руб</div>

                                    <div class="smoll-descriptin-detail">
                                        <div class="text-smoll-description">
                                            ${data.queryDetai[0].description}
                                        </div>
                                    </div>

                                    <div class="counter-detail-and-but-buy">
                                        <div class="counter-detail-in-basic-detail-page">
                                            <button class="button-change-counter-detail">-</button>
                                            <input class="counter-detail" type="text" value="1">
                                            <button class="button-change-counter-detail">+</button>
                                        </div>
                                        <div class="button-buy-detail"><button id='add-in-basket' class="stylebutton">В КОРЗИНУ</button></div>
                                    </div>

                                </div>
                            </div>

                            <div class="description-and-characteristic-basic-detail">
                                <div class="titels-description-and-characteristic-basic-detail">

                                    <div class="element-titels-description-and-characteristic-basic-detail element-menu-nav-topsell-cheack">Характеристика</div>
                                </div>

                                <div class="content-description-or-characteristic-basic-detail">

                                </div>
                            </div>

                            <div class="similar-detail">

                                <div class="title-similar-detail"><div class="element-title-similar-detail">ПОХОЖИЕ ТОВАРЫ</div></div>

                                <div>
                                        <div class="slider-similar-detail">
                                                <div class="slider-similar-detail-nav slider-similar-detail-nav-left"><i class="fas fa-arrow-alt-circle-left"></i></div>
                                                <ul class="slider-similar-detail-carousel-list">
                            
                            
                                                    
                                                </ul>
                                                <div class="slider-similar-detail-nav slider-similar-detail-nav-right"><i class="fas fa-arrow-alt-circle-right"></i></div>
                            
                                            </div>
                                    </div>
                            </div>

                        </div>
                    </div>`

                    
                    VNalichii(data.queryDetai[0].count);
                    CreateGridFilter(FilterData);
                    CreateLabelDetail(MasLabel);

                    var butonMinus = document.querySelectorAll('.button-change-counter-detail')[0];
                    var butonPlus = document.querySelectorAll('.button-change-counter-detail')[1];
                    var inputCountDetail = document.querySelector('.counter-detail');
                    var AddInBasket = document.querySelector('#add-in-basket');

                    var ThisDeatilInBasket = 0;
                    var IndexInCookie;

                    if (getCookie('artikle_detail') != undefined && getCookie('artikle_detail').indexOf(str.artikle) > -1){

                        var masArtikle = getCookie('artikle_detail').split('&');
                        var masCount = getCookie('count_detail').split('&');

                        for (var j = 0; j < masArtikle.length; j++){

                            if(masArtikle[j] == str.artikle){
                                ThisDeatilInBasket = masCount[j];
                                IndexInCookie = j;
                                break;
                            }
                        }

                    }

                    if (+CountDetail - ThisDeatilInBasket == 0){
                        inputCountDetail.value = 0;
                        butonMinus.disabled = true;
                        butonPlus.disabled = true;
                        AddInBasket.disabled = true;
                        AddInBasket.classList.remove('stylebutton');
                        AddInBasket.classList.add('stylebutton2');
                    }

                    butonMinus.addEventListener('click', () => {
                    
                        if (+inputCountDetail.value > 1){
                            inputCountDetail.value = +inputCountDetail.value - 1;
                        }
                    })


                    butonPlus.addEventListener('click', () => {
                    
                        if (+inputCountDetail.value < +CountDetail - ThisDeatilInBasket){
                            inputCountDetail.value = +inputCountDetail.value + 1;
                        }
                    })

                    inputCountDetail.addEventListener('change', () => {

                        var value= +inputCountDetail.value.replace(/\D/g,'')||0;
                        inputCountDetail.value = Math.min((+CountDetail - ThisDeatilInBasket), Math.max(1, value));
                    })



                    AddInBasket.addEventListener('click', () => {
                        
                            if (getCookie('count_detail') != undefined){

                                var strArtikle = getCookie('artikle_detail');
    
                                if (strArtikle.indexOf(data.queryDetai[0].artikle) > -1){
    
                                    var strCount = getCookie('count_detail');
    
                                    var masArtikle = strArtikle.split('&');
                                    var masCount = strCount.split('&');
    
                                    for (var i = 0; i < masArtikle.length; i++){
    
                                        if (data.queryDetai[0].artikle == masArtikle[i]){
                                            masCount[i] = +masCount[i] + +inputCountDetail.value;
                                            break;
                                        }
                                    }
    
                                    setCookie('artikle_detail', getCookie('artikle_detail'), {expires: 0, path: 'path=/'});
                                    setCookie('price_detail', getCookie('price_detail'), {expires: 0, path: 'path=/'});
                                    setCookie('count_detail',  masCount.join('&'), {expires: 0, path: 'path=/'});
    
                                } else {
    
                                    setCookie('artikle_detail', getCookie('artikle_detail') + '&' + data.queryDetai[0].artikle, {expires: 0, path: 'path=/'});
                                    setCookie('price_detail', getCookie('price_detail') + '&' + data.queryDetai[0].price.toFixed(2), {expires: 0, path: 'path=/'});
                                    setCookie('count_detail', getCookie('count_detail') + '&' + inputCountDetail.value, {expires: 0, path: 'path=/'});
                                }
    
                            } else {
    
                                setCookie('artikle_detail', data.queryDetai[0].artikle, {expires: 0, path: 'path=/'});
                                setCookie('price_detail', data.queryDetai[0].price.toFixed(2), {expires: 0, path: 'path=/'});
                                setCookie('count_detail', inputCountDetail.value, {expires: 0, path: 'path=/'});
                            }

                            ButtonBasketValue(user);
                            
                        //
                        if (ThisDeatilInBasket + +inputCountDetail.value < CountDetail){
                            ThisDeatilInBasket += +inputCountDetail.value;
                            inputCountDetail.value = 1;
                        } else {
                            inputCountDetail.value = 0;
                            butonMinus.disabled = true;
                            butonPlus.disabled = true;
                            AddInBasket.disabled = true;
                            AddInBasket.classList.remove('stylebutton');
                            AddInBasket.classList.add('stylebutton2');
                        }
                    })


                    AddScriptForPage('script/script_slider_similar-detail.js');
                })
            }

                



        }




        if (window.location.hash.indexOf('#/catalog?') == 0){



                var str = {
                    filter: []
                            };

                var strFilter = decodeURIComponent(window.location.hash.replace('#/catalog?', ''))

                var MasFilter = strFilter.split('&');

                for (var i = 0; i < MasFilter.length; i++){
                    var a = MasFilter[i].split('=');
                    str.filter.push(a);
                }

                fetch('/api/postcatalogalldetailfilter', {
                    method : 'POST',
                    body: JSON.stringify(str),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(data => {
                    
                    for ( var i = 0; i < data.queryDetai.length; i++){
                        CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                    }
                    
                })



            Content.innerHTML = 
                `<div class="content-column1 column-catalog-and-filter">

                    <div class='hide-container-catalog'>
                        <i id='hide-but-catalog' class="fas fa-ellipsis-v icon-hide-catalog-and-filter"></i>
                        <div class="menu-nav-column">
                            
                            <div class="name-menu-nav-column">Каталог</div>


                        </div>
                    </div>


                    <div class='hide-container-filter'>
                        <i id='hide-but-filter' class="fas fa-filter icon-hide-catalog-and-filter"></i>
                        <div class="filter">

                            <div class="title-filter">Фильтры</div>

                            <div class="element-filter">
                                <div id="filter-element-0" class="title-element-filter">
                                    <div>Цена</div>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                                
                                <div class="element-filter-submenu">
                                    <div class='element-filter-sell'>
                                        <div class="div-for-input">
                                            <input type="number" id='min-sell' class='input-style' placeholder="От">
                                        </div>
                                        <div>~</div>
                                        <div class="div-for-input">
                                            <input type="number" id='max-sell' class="input-style" placeholder="До">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            <div class="container-but-filter">
                                <button id='button-filter' class="stylebutton">Применить</button>
                            </div>
                            
                        </div>
                    </div>
                    

                </div>

                <div class="content-column2 container-text-compani">

                    <div class="title-catalog">
                        <div class="title-catalog-word">Каталог</div>
                        <div class="sorting-for-catalog">
                            <select class="select-sorting-for-catalog">
                                <option value='not-sort'>Сортировка</option>
                                <option value='price-asc'>по возрастанию цены</option>
                                <option value='price-desc'>по убыванию цены</option>
                                <option value='name-asc'>по названию</option>
                            </select>
                        </div>
                    </div>


                    <div class="catalog-content">

                        

                    </div>

                    

                </div>`


                AddScriptForPage('script/filter_script.js');

                var ButHideCatalog = document.querySelector('#hide-but-catalog');
                var ButHideFilter = document.querySelector('#hide-but-filter');

                var ContainerHideCatalog = document.querySelector('.menu-nav-column');
                var ContainerHideFilter = document.querySelector('.filter');

                var FlagHideCatalog = false;
                var FlagHideFilter = false;


                ButHideCatalog.addEventListener('click', () => {

                    if (FlagHideFilter == true){

                        ContainerHideFilter.style.display = 'none';
                        ButHideFilter.style.backgroundColor = 'transparent';
                        ButHideFilter.style.borrderColor = 'transparent';
                        FlagHideFilter = false;
                    }

                    if (FlagHideCatalog == false){

                        ContainerHideCatalog.style.display = 'block';
                        ButHideCatalog.style.backgroundColor = '#f9c823';
                        ButHideCatalog.style.borrderColor = '#c9c9c9';
                        FlagHideCatalog = true;
                      } else {
                
                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                      }

                })


                ButHideFilter.addEventListener('click', () => {

                    if (FlagHideCatalog == true){

                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                    }

                    if (FlagHideFilter == false){

                        ContainerHideFilter.style.display = 'block';
                        ButHideFilter.style.backgroundColor = '#f9c823';
                        ButHideFilter.style.borrderColor = '#c9c9c9';
                        FlagHideFilter = true;
                      } else {
                
                        ContainerHideFilter.style.display = 'none';
                        ButHideFilter.style.backgroundColor = 'transparent';
                        ButHideFilter.style.borrderColor = 'transparent';
                        FlagHideFilter = false;
                      }

                })

                var SelectSort = document.querySelector('.select-sorting-for-catalog');

                SelectSort.addEventListener('change', () => {

                    if (window.location.hash.indexOf('?Sort=') != -1){

                        var ThisURL = window.location.hash.substring(0, window.location.hash.indexOf('?Sort='));

                        if (SelectSort.value != 'not-sort'){
                            window.location.hash = ThisURL + '?Sort='+SelectSort.value;
                        } else {
                            window.location.hash = ThisURL;
                        }
                    } else {

                        if (window.location.hash.indexOf('&Sort=') != -1){

                            var ThisURL = window.location.hash.substring(0, window.location.hash.indexOf('&Sort='));
    
                            if (SelectSort.value != 'not-sort'){
                                window.location.hash = ThisURL + '&Sort='+SelectSort.value;
                            } else {
                                window.location.hash = ThisURL;
                            }
                            
                        } else {
    
                            if (SelectSort.value != 'not-sort'){
                                window.location.hash += '&Sort='+SelectSort.value;
                            } 
                        }
                    }

                    
                })
            
        }







        if (window.location.hash.indexOf('#/catalog/') == 0 && window.location.hash.indexOf('?') > -1 && window.location.hash.indexOf('#/catalog/search?=') == -1){

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


            if (str.name_type != 'Товары со скидкой' && str.name_type != 'Популярные товары'){


                fetch('/api/postcatalogfilter', {
                    method : 'POST',
                    body: JSON.stringify(str),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.queryDetai.length > 0){

                        for ( var i = 0; i < data.queryDetai.length; i++){
                            CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                        }
                    } else {

                        var ContainerResaltSearch = document.querySelector('.catalog-content');

                        var div = document.createElement('div');
                        div.setAttribute('class', 'container-resalt-search');
                        ContainerResaltSearch.appendChild(div);

                        var i = document.createElement('i');
                        i.setAttribute('class', 'fas fa-info-circle');
                        div.appendChild(i);

                        var word = document.createElement('div');
                        word.setAttribute('class', 'result-serch-word');
                        word.innerHTML = 'Ничего не найдено';
                        div.appendChild(word);
                    }
                    

                })




            } else {


                if (str.name_type == 'Товары со скидкой'){

                    fetch('/api/getqueyrdescontdetailfilter', {
                        method : 'POST',
                        body: JSON.stringify(str),
                        headers: {
                        'Content-Type': 'application/json',
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.queryDetai.length > 0){

                            for ( var i = 0; i < data.queryDetai.length; i++){
                                CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                            }
                        } else {
    
                            var ContainerResaltSearch = document.querySelector('.catalog-content');
    
                            var div = document.createElement('div');
                            div.setAttribute('class', 'container-resalt-search');
                            ContainerResaltSearch.appendChild(div);
    
                            var i = document.createElement('i');
                            i.setAttribute('class', 'fas fa-info-circle');
                            div.appendChild(i);
    
                            var word = document.createElement('div');
                            word.setAttribute('class', 'result-serch-word');
                            word.innerHTML = 'Ничего не найдено';
                            div.appendChild(word);
                        }
                    })
                } else {

                    fetch('/api/getqueyrxitdetailfilter', {
                        method : 'POST',
                        body: JSON.stringify(str),
                        headers: {
                        'Content-Type': 'application/json',
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.queryDetai.length > 0){

                            for ( var i = 0; i < data.queryDetai.length; i++){
                                CreateDetailForList(data.queryDetai[i], '.catalog-content', data.queryLabel);
                            }
                        } else {
    
                            var ContainerResaltSearch = document.querySelector('.catalog-content');
    
                            var div = document.createElement('div');
                            div.setAttribute('class', 'container-resalt-search');
                            ContainerResaltSearch.appendChild(div);
    
                            var i = document.createElement('i');
                            i.setAttribute('class', 'fas fa-info-circle');
                            div.appendChild(i);
    
                            var word = document.createElement('div');
                            word.setAttribute('class', 'result-serch-word');
                            word.innerHTML = 'Ничего не найдено';
                            div.appendChild(word);
                        }
                    })
                }

            }



            Content.innerHTML = 
                `<div class="content-column1 column-catalog-and-filter">

                    <div class='hide-container-catalog'>
                        <i id='hide-but-catalog' class="fas fa-ellipsis-v icon-hide-catalog-and-filter"></i>
                        <div class="menu-nav-column">
                            
                            <div class="name-menu-nav-column">Каталог</div>


                        </div>
                    </div>


                    <div class='hide-container-filter'>
                        <i id='hide-but-filter' class="fas fa-filter icon-hide-catalog-and-filter"></i>
                        <div class="filter">

                            <div class="title-filter">Фильтры</div>

                            <div class="element-filter">
                                <div id="filter-element-0" class="title-element-filter">
                                    <div>Цена</div>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                                
                                <div class="element-filter-submenu">
                                    <div class='element-filter-sell'>
                                        <div class="div-for-input">
                                            <input type="number" id='min-sell' class='input-style' placeholder="От">
                                        </div>
                                        <div>~</div>
                                        <div class="div-for-input">
                                            <input type="number" id='max-sell' class="input-style" placeholder="До">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            <div class="container-but-filter">
                                <button id='button-filter' class="stylebutton">Применить</button>
                            </div>
                            
                        </div>
                    </div>
                    

                </div>

                <div class="content-column2 container-text-compani">

                    <div class="title-catalog">
                        <div class="title-catalog-word">Каталог</div>
                        <div class="sorting-for-catalog">
                            <select class="select-sorting-for-catalog">
                                <option value='not-sort'>Сортировка</option>
                                <option value='price-asc'>по возрастанию цены</option>
                                <option value='price-desc'>по убыванию цены</option>
                                <option value='name-asc'>по названию</option>
                            </select>
                        </div>
                    </div>


                    <div class="catalog-content">

                        

                    </div>

                    <!--<div class="catalog-list-pages">
                        <div><i class="fas fa-angle-left catalog-list-pages-nav left"></i></div>
                        <div class="namber-pages-for-catalog">
                            <div class="element-namber-pages-for-catalog" id="cheackpagecatalog">1</div>
                            <div class="element-namber-pages-for-catalog">2</div>
                            <div class="element-namber-pages-for-catalog">3</div>
                        </div>
                        <div><i class="fas fa-angle-right catalog-list-pages-nav right"></i></div>
                    </div>-->

                </div>`

                document.querySelector('.title-catalog-word').innerHTML = str.name_type;
                AddScriptForPage('script/filter_script.js');

                var ButHideCatalog = document.querySelector('#hide-but-catalog');
                var ButHideFilter = document.querySelector('#hide-but-filter');

                var ContainerHideCatalog = document.querySelector('.menu-nav-column');
                var ContainerHideFilter = document.querySelector('.filter');

                var FlagHideCatalog = false;
                var FlagHideFilter = false;


                ButHideCatalog.addEventListener('click', () => {

                    if (FlagHideFilter == true){

                        ContainerHideFilter.style.display = 'none';
                        ButHideFilter.style.backgroundColor = 'transparent';
                        ButHideFilter.style.borrderColor = 'transparent';
                        FlagHideFilter = false;
                    }

                    if (FlagHideCatalog == false){

                        ContainerHideCatalog.style.display = 'block';
                        ButHideCatalog.style.backgroundColor = '#f9c823';
                        ButHideCatalog.style.borrderColor = '#c9c9c9';
                        FlagHideCatalog = true;
                      } else {
                
                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                      }

                })


                ButHideFilter.addEventListener('click', () => {

                    if (FlagHideCatalog == true){

                        ContainerHideCatalog.style.display = 'none';
                        ButHideCatalog.style.backgroundColor = 'transparent';
                        ButHideCatalog.style.borrderColor = 'transparent';
                        FlagHideCatalog = false;
                    }

                    if (FlagHideFilter == false){

                        ContainerHideFilter.style.display = 'block';
                        ButHideFilter.style.backgroundColor = '#f9c823';
                        ButHideFilter.style.borrderColor = '#c9c9c9';
                        FlagHideFilter = true;
                      } else {
                
                        ContainerHideFilter.style.display = 'none';
                        ButHideFilter.style.backgroundColor = 'transparent';
                        ButHideFilter.style.borrderColor = 'transparent';
                        FlagHideFilter = false;
                      }

                })


                var SelectSort = document.querySelector('.select-sorting-for-catalog');

                SelectSort.addEventListener('change', () => {
                    if (window.location.hash.indexOf('?Sort=') != -1){

                        var ThisURL = window.location.hash.substring(0, window.location.hash.indexOf('?Sort='));

                        if (SelectSort.value != 'not-sort'){
                            window.location.hash = ThisURL + '?Sort='+SelectSort.value;
                        } else {
                            window.location.hash = ThisURL;
                        }
                    } else {

                        if (window.location.hash.indexOf('&Sort=') != -1){

                            var ThisURL = window.location.hash.substring(0, window.location.hash.indexOf('&Sort='));
    
                            if (SelectSort.value != 'not-sort'){
                                window.location.hash = ThisURL + '&Sort='+SelectSort.value;
                            } else {
                                window.location.hash = ThisURL;
                            }
                            
                        } else {
    
                            if (SelectSort.value != 'not-sort'){
                                window.location.hash += '&Sort='+SelectSort.value;
                            } 
                        }
                    }
                    
                })
            
        }



        if (window.location.hash.indexOf('#/all-blogs/blog=') == 0){

            var title_blog = {
                title: decodeURIComponent(window.location.hash.replace('#/all-blogs/blog=', ''))
            }
            var DataBlogPage;

            fetch('/api/gatingoaboutpageblog', {
                method : 'POST',
                body: JSON.stringify(title_blog),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(data => {
                DataBlogPage = data;
            })

            Content.innerHTML = 
                `<div class="content-column1 column-for-hide">
                    <div class="menu-nav-column">
                        
                        <div class="name-menu-nav-column">Блог</div>
                        <div class="blog-menu-hide">
                            
                        </div>

                    </div>

                </div>

                <div class="content-column2">
                <div class='container-text-compani'>
                    <div class="title-page"></div>
                    <div class="blog-page">
                        <div class="container-image-blog-list">
                            <img class="image-blog-page" src="">
                        </div>

                    </div>
                </div>
                </div>`



            if (ListTitleBlogs == undefined){

                fetch('/api/gattitleblogs', {
                    method : 'POST',
                    body: JSON.stringify(title_blog),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(data => {

                    ListTitleBlogs = data;
                    CreateListBlogTitle(ListTitleBlogs);
                })
            } else {

                CreateListBlogTitle(ListTitleBlogs);
            }



            var timerBlogPage = setInterval( function() {
                if (DataBlogPage != undefined){

                    document.querySelector('.title-page').innerHTML = DataBlogPage[0].title_blog;
                    document.querySelector('.image-blog-page').src = DataBlogPage[0].img_blog;

                    var MasTextBlog;
                    for (var key in DataBlogPage[0]){
                        if (key == 'CONVERT(text_blog USING utf8)'){
                            MasTextBlog = DataBlogPage[0][key].split('§')
                        }
                    }
                    
                    var ContainerBlogPage = document.querySelector('.blog-page');
                    for (var i = 0; i < MasTextBlog.length; i++){

                        var ContainerTextBlog = document.createElement('div');
                        ContainerTextBlog.setAttribute('class', 'info-about-shop-content');
                        ContainerTextBlog.innerHTML = MasTextBlog[i];
                        ContainerBlogPage.appendChild(ContainerTextBlog);
                    }


                    clearInterval(timerBlogPage);
                }
            },0)
        }

    }


    window.addEventListener('hashchange', pageIndex);
})









