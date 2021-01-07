//Create Table Admin Page
function CreateTableValuesAdminPage(data){

    var Table = document.querySelector('.table-adminca-page');
    Table.innerHTML = '';

    function ChangeDownLine(str){
        
        str = str.replace('_', ' ');

        if (str.indexOf('_') != -1){
            return ChangeDownLine(str);
        } else {
            return str;
        }
    }

    var trHeader = document.createElement('tr');
    for (var i = 0; i < data.masTh.length; i++){
        var th = document.createElement('th');
        th.innerHTML = ChangeDownLine(data.masTh[i].Field);
        trHeader.appendChild(th);
    }
    Table.appendChild(trHeader);


    for (var i = 0; i < data.masTd.length; i++){
        
        var tr = document.createElement('tr');
        tr.setAttribute('class', 'row' + i);
        for (var j = 0; j < data.masTh.length; j++){
            
            var td = document.createElement('td');
            td.setAttribute('class', 'td-row' + i);

            if (data.masTd[i][data.masTh[j].Field] == null){
                data.masTd[i][data.masTh[j].Field] = 'NULL';
            }

            if (data.masTh[j].Field == 'text_blog'){
                data.masTh[j].Field = 'CONVERT(text_blog USING utf8)';
            }

            if (data.masTh[j].Type == 'date'){
                var D = new Date(data.masTd[i][data.masTh[j].Field]);
                data.masTd[i][data.masTh[j].Field] = D.getFullYear() + '-' + (D.getMonth() + 1) + '-' + D.getDate();
            }

            if (data.masTh[j].Type == 'datetime'){
                var D = new Date(data.masTd[i][data.masTh[j].Field]);
                data.masTd[i][data.masTh[j].Field] = D.getFullYear() + '-' + (D.getMonth() + 1) + '-' + D.getDate() + ' ' + D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
            }

            td.innerHTML = data.masTd[i][data.masTh[j].Field];
            tr.appendChild(td);
        }
        Table.appendChild(tr);
    }
}


function pageIndex(){

    if (window.location.hash == '#/adminca'){

        fetch('/api/getnametabledb')
                .then(res => res.json())
                .then(data => {
                    
                    var SelectNameTablesThisDB = document.querySelector('.select-table-bd');

                    for (var i = 0; i < data.length; i++){
                        var option = document.createElement('option');
                        option.innerHTML = data[i].Tables_in_avtomir;
                        SelectNameTablesThisDB.appendChild(option);
                    }
                })





                var SelectNameTableBD = document.querySelector('.select-table-bd');

                SelectNameTableBD.addEventListener('change', () => {
                    
                    if (SelectNameTableBD.value == 'Название таблицы'){
                        document.querySelector('.container-table-admin-page').style.display = "none";
                        document.querySelector('.panel-manipylation-value-db').style.display = "none";
                        document.querySelector('.container-table-admin-page').innerHTML = '';
                    } else {

                        var NameTableBD = {
                            name: SelectNameTableBD.value
                        }

                        fetch('/api/getvaluetabledb', {
                            method : 'POST',
                            body: JSON.stringify(NameTableBD),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                        .then(res => res.json())
                        .then(data => {
                            
                            CreateTableValuesAdminPage(data);
                            document.querySelector('.container-table-admin-page').style.display = "flex";
                            document.querySelector('.panel-manipylation-value-db').style.display = 'block';
                            

                            var ContainerForManipylationValue = document.querySelector('.content-manipylation-value-db');
                            ContainerForManipylationValue.innerHTML = '';





                            var ButAddNewCarteg = document.querySelector('#but-add-new-carteg');
                            var FlagClickButAddNewCarteg = false;

                            //Add new carteg
                            ButAddNewCarteg.addEventListener('click', () => {

                                if (FlagClickButAddNewCarteg == false){

                                    if (FlagClickButUpdate == true){
                                        ContainerForManipylationValue.innerHTML = '';
                                        ButUpdate.style.backgroundColor = 'transparent';
                                        ButUpdate.style.borderColor = 'transparent';
                                        document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                        FlagClickButUpdate = false;
                                    }

                                    ButAddNewCarteg.style.backgroundColor = '#c9c9c9';
                                    ButAddNewCarteg.style.borderColor = '#b1b1b1';
                                    document.querySelector('.content-manipylation-value-db').style.display = 'flex';

                                    switch(SelectNameTableBD.value){



                                        case ('basket_and_order'):

                                            fetch('/api/getvalueforeignkeybasketandorder')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;

                                                ContainerForManipylationValue.innerHTML = 
                                                `<div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-detail' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_user
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-user' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>


                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_statys_basket_and_order
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-statys-basket-and-order' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Artikle_order
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_artikle_order' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Date_buy
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_date_buy' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Count_buy
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_count_buy' class='style-input-order'>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Locality
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_locality' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_delivery_method
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-delivery_method' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_payment_method
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-payment_method' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Address
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_address' class='style-input-order'>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Wishes
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_wishes' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var SelectIdDetail = document.querySelector('#select-id-detail');
                                                var SelectIdUser = document.querySelector('#select-id-user');
                                                var SelectIdStatys = document.querySelector('#select-id-statys-basket-and-order');
                                                var InputArtikleOrder = document.querySelector('#input_artikle_order');
                                                var InputDateBuy = document.querySelector('#input_date_buy');
                                                var InputCountBuy = document.querySelector('#input_count_buy');
                                                var InputLocality = document.querySelector('#input_locality');
                                                var SelectDeliveryMethod = document.querySelector('#select-id-delivery_method');
                                                var SelectPaymentMethod = document.querySelector('#select-id-payment_method');
                                                var InputAddress = document.querySelector('#input_address');
                                                var InputWishes = document.querySelector('#input_wishes');



                                                for (var i = 0; i < data.IdDetail.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', data.IdDetail[i].id_detail);
                                                    option.innerHTML = data.IdDetail[i].name_detail;
                                                    SelectIdDetail.appendChild(option);
                                                }

                                                for (var i = 0; i < data.IdUser.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', data.IdUser[i].id_user);
                                                    option.innerHTML = data.IdUser[i].login;
                                                    SelectIdUser.appendChild(option);
                                                }

                                                for (var i = 0; i < data.IdStatys.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', data.IdStatys[i].id_statys_basket_and_order);
                                                    option.innerHTML = data.IdStatys[i].name_statys;
                                                    SelectIdStatys.appendChild(option);
                                                }

                                                for (var i = 0; i < data.IdDelivery.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', data.IdDelivery[i].id_delivery_method);
                                                    option.innerHTML = data.IdDelivery[i].name_delivery_method;
                                                    SelectDeliveryMethod.appendChild(option);
                                                }

                                                for (var i = 0; i < data.IdPayment.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', data.IdPayment[i].id_payment_method);
                                                    option.innerHTML = data.IdPayment[i].name_method;
                                                    SelectPaymentMethod.appendChild(option);
                                                }




                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    SelectIdDetail.value = ValueForeignKays.IdDetail[0].id_detail;
                                                    SelectIdUser.value = ValueForeignKays.IdUser[0].id_user;
                                                    SelectIdStatys.value = ValueForeignKays.IdStatys[0].id_statys_basket_and_order;
                                                    InputArtikleOrder.value = '';
                                                    InputDateBuy.value = '';
                                                    InputCountBuy.value = '';
                                                    InputLocality.value = '';
                                                    SelectDeliveryMethod.value = ValueForeignKays.IdDelivery[0].id_delivery_method;
                                                    SelectPaymentMethod.value = ValueForeignKays.IdPayment[0].id_payment_method;
                                                    InputAddress.value = '';
                                                    InputWishes.value = '';
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        idDetail: SelectIdDetail.value,
                                                        idUser: SelectIdUser.value,
                                                        idStatys: SelectIdStatys.value,
                                                        artikleOrder: '\'' + InputArtikleOrder.value + '\'',
                                                        dateBuy: '\'' + InputDateBuy.value + '\'',
                                                        countBuy: InputCountBuy.value,
                                                        locality: '\'' + InputLocality.value + '\'',
                                                        deliveryMethod: SelectDeliveryMethod.value,
                                                        paymentMethod: SelectPaymentMethod.value,
                                                        address: '\'' + InputAddress.value + '\'',
                                                        wishes: '\'' + InputWishes.value + '\''
                                                    }

                                                    if (InputArtikleOrder.value == ''){
                                                        ListValueNewCarteg.artikleOrder = 'NULL';
                                                    }

                                                    if (InputDateBuy.value == ''){
                                                        ListValueNewCarteg.dateBuy = 'NULL';
                                                    }

                                                    if (InputLocality.value == ''){
                                                        ListValueNewCarteg.locality = 'NULL';
                                                    }

                                                    if (InputAddress.value == ''){
                                                        ListValueNewCarteg.address = 'NULL';
                                                    }

                                                    if (InputWishes.value == ''){
                                                        ListValueNewCarteg.wishes = 'NULL';
                                                    }

                                                    fetch('/api/inserttablebasketandorder', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                SelectIdDetail.value = ValueForeignKays.IdDetail[0].id_detail;
                                                                SelectIdUser.value = ValueForeignKays.IdUser[0].id_user;
                                                                SelectIdStatys.value = ValueForeignKays.IdStatys[0].id_statys_basket_and_order;
                                                                InputArtikleOrder.value = '';
                                                                InputDateBuy.value = '';
                                                                InputCountBuy.value = '';
                                                                InputLocality.value = '';
                                                                SelectDeliveryMethod.value = ValueForeignKays.IdDelivery[0].id_delivery_method;
                                                                SelectPaymentMethod.value = ValueForeignKays.IdPayment[0].id_payment_method;
                                                                InputAddress.value = '';
                                                                InputWishes.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                            })

                                        break;



                                        case ('blog'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Img_blog
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_img-blog' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Title_blog
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_title_blog' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Text_blog
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <textarea id='input_text_blog' class='textarea-adminca'></textarea>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Date_add
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_date_add' class='style-input-order'>
                                                        </div>
                                                    </div>
                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputImgBlog = document.querySelector('#input_img-blog');
                                                var InputTitleBlog = document.querySelector('#input_title_blog');
                                                var InputTextBlog = document.querySelector('#input_text_blog');
                                                var InputDateAdd = document.querySelector('#input_date_add');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputImgBlog.value = '';
                                                    InputTitleBlog.value = '';
                                                    InputTextBlog.value = '';
                                                    InputDateAdd.value = '';
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        img_blog: '\'' + InputImgBlog.value + '\'',
                                                        title_blog: '\'' + InputTitleBlog.value + '\'',
                                                        text_blog: '\'' + InputTextBlog.value + '\'',
                                                        date_add: '\'' + InputDateAdd.value + '\''
                                                    }

                                                    if (InputImgBlog.value == ''){
                                                        ListValueNewCarteg.img_blog = 'NULL';
                                                    }

                                                    if (InputTitleBlog.value == ''){
                                                        ListValueNewCarteg.title_blog = 'NULL';
                                                    }

                                                    if (InputTextBlog.value == ''){
                                                        ListValueNewCarteg.text_blog = 'NULL';
                                                    }

                                                    if (InputDateAdd.value == ''){
                                                        ListValueNewCarteg.date_add = 'NULL';
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputImgBlog.value = '';
                                                                InputTitleBlog.value = '';
                                                                InputTextBlog.value = '';
                                                                InputDateAdd.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;

                                        
                                        case ('brand'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_brand
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_brand' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameBrand = document.querySelector('#input_name_brand');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameBrand.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_brand: '\'' + InputNameBrand.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameBrand.value = '';
                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('delivery_method'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_delivery_method
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_delivery_method' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameDeliveryMethod = document.querySelector('#input_name_delivery_method');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameDeliveryMethod.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_delivery_method: '\'' + InputNameDeliveryMethod.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameDeliveryMethod.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('detail'):

                                            fetch('/api/getvalueforeignkeydetail')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;

                                                for (var i = 0; i < ValueForeignKays.IdSybTypeDetail.length; i++){
                                                    
                                                    if (ValueForeignKays.IdSybTypeDetail[i].name_sub_type_detail == null){
                                                        for (var j = 0; j < ValueForeignKays.IdTypeDetail.length; j++){
                                                            if (ValueForeignKays.IdSybTypeDetail[i].id_type_detail == ValueForeignKays.IdTypeDetail[j].id_type_detail){
                                                                ValueForeignKays.IdSybTypeDetail[i].name_sub_type_detail = ValueForeignKays.IdTypeDetail[j].name_type;
                                                            }
                                                        }
                                                    }
                                                }

                                                ContainerForManipylationValue.innerHTML = 
                                                `
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_detail' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Artikle
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_artikle' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Price
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_price' class='style-input-order'>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Count
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_count' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Img
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_img' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Description
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_description' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_brand
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-brand' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_sub_type_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-sub-type-detail' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>
                                                    

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameDetail = document.querySelector('#input_name_detail');
                                                var InputArtikle = document.querySelector('#input_artikle');
                                                var InputPrice = document.querySelector('#input_price');
                                                var InputCount = document.querySelector('#input_count');
                                                var InputImg = document.querySelector('#input_img');
                                                var InputDescription = document.querySelector('#input_description');
                                                var SelectBrand = document.querySelector('#select-id-brand');
                                                var SelectSubTypeDetail = document.querySelector('#select-id-sub-type-detail');



                                                for (var i = 0; i < data.IdBrand.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', data.IdBrand[i].id_brand);
                                                    option.innerHTML = data.IdBrand[i].name_brand;
                                                    SelectBrand.appendChild(option);
                                                }

                                                for (var i = 0; i < data.IdSybTypeDetail.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', data.IdSybTypeDetail[i].id_sub_type_detail);
                                                    option.innerHTML = data.IdSybTypeDetail[i].name_sub_type_detail;
                                                    SelectSubTypeDetail.appendChild(option);
                                                }





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameDetail.value = '';
                                                    InputArtikle.value = '';
                                                    InputPrice.value = '';
                                                    InputCount.value = '';
                                                    InputImg.value = '';
                                                    InputDescription.value = '';
                                                    SelectBrand.value = ValueForeignKays.IdBrand[0].id_brand;
                                                    SelectSubTypeDetail.value =  ValueForeignKays.IdSybTypeDetail[0].id_sub_type_detail;
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_detail: '\'' + InputNameDetail.value + '\'',
                                                        artikle: '\'' + InputArtikle.value + '\'',
                                                        price: InputPrice.value,
                                                        count: InputCount.value,
                                                        img: '\'' + InputImg.value + '\'',
                                                        description: '\'' + InputDescription.value + '\'',
                                                        id_brand: SelectBrand.value,
                                                        id_sub_type_detail: SelectSubTypeDetail.value
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameDetail.value = '';
                                                                InputArtikle.value = '';
                                                                InputPrice.value = '';
                                                                InputCount.value = '';
                                                                InputImg.value = '';
                                                                InputDescription.value = '';
                                                                SelectBrand.value = ValueForeignKays.IdBrand[0].id_brand;
                                                                SelectSubTypeDetail.value =  ValueForeignKays.IdSybTypeDetail[0].id_sub_type_detail;

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                            })

                                        break;


                                        case ('gender'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_gender
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_gender' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameGender = document.querySelector('#input_name_gender');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameGender.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_gender: '\'' + InputNameGender.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameGender.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('label'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_label
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_label' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameLabel = document.querySelector('#input_name_label');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameLabel.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_label: '\'' + InputNameLabel.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameLabel.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('filter'):

                                            fetch('/api/getvalueforeignkeyfilter')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;


                                                ContainerForManipylationValue.innerHTML = 
                                                `
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-detail' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_value_type_filter
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-value-type_filter' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>
                                                    

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`



                                                var Selectdetail = document.querySelector('#select-id-detail');
                                                var SelectValueTypeDetail = document.querySelector('#select-id-value-type_filter');



                                                for (var i = 0; i < ValueForeignKays.IdDetail.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdDetail[i].id_detail);
                                                    option.innerHTML = ValueForeignKays.IdDetail[i].name_detail;
                                                    Selectdetail.appendChild(option);
                                                }

                                                for (var i = 0; i < ValueForeignKays.IdValueTypeFilter.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdValueTypeFilter[i].id_value_type_filter);
                                                    option.innerHTML = ValueForeignKays.IdValueTypeFilter[i].name_type_filter + ' ' + ValueForeignKays.IdValueTypeFilter[i].value;
                                                    SelectValueTypeDetail.appendChild(option);
                                                }





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    Selectdetail.value = ValueForeignKays.IdDetail[0].id_detail;
                                                    SelectValueTypeDetail.value =  ValueForeignKays.IdValueTypeFilter[0].id_value_type_filter;
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        id_detail: Selectdetail.value,
                                                        id_value_type_filter: SelectValueTypeDetail.value
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                Selectdetail.value = ValueForeignKays.IdDetail[0].id_detail;
                                                                SelectValueTypeDetail.value =  ValueForeignKays.IdValueTypeFilter[0].id_value_type_filter;

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                            })

                                        break;


                                        case ('value_type_filter'):

                                            fetch('/api/getvalueforeignkeyvaluetypefilter')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;


                                                ContainerForManipylationValue.innerHTML = 
                                                `
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_type_filter
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-type-filter' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Value
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_value' class='style-input-order'>
                                                        </div>
                                                    </div>
                                                    

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`



                                                var SelectTypeFilter = document.querySelector('#select-id-type-filter');
                                                var InputValue = document.querySelector('#input_value');



                                                for (var i = 0; i < ValueForeignKays.IdTypeFilter.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdTypeFilter[i].id_type_filter);
                                                    option.innerHTML = ValueForeignKays.IdTypeFilter[i].name_type_filter;
                                                    SelectTypeFilter.appendChild(option);
                                                }






                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    SelectTypeFilter.value = ValueForeignKays.IdTypeFilter[0].id_type_filter;
                                                    InputValue.value =  '';
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        id_type_filter: SelectTypeFilter.value,
                                                        value: '\'' + InputValue.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                SelectTypeFilter.value = ValueForeignKays.IdTypeFilter[0].id_type_filter;
                                                                InputValue.value =  '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                            })

                                        break;


                                        case ('lable_detail'):

                                            fetch('/api/getvalueforeignkeylabledetail')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;


                                                ContainerForManipylationValue.innerHTML = 
                                                `
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-detail' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_label
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-label' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>
                                                    

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`



                                                var Selectdetail = document.querySelector('#select-id-detail');
                                                var SelectLabel = document.querySelector('#select-id-label');



                                                for (var i = 0; i < ValueForeignKays.IdDetail.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdDetail[i].id_detail);
                                                    option.innerHTML = ValueForeignKays.IdDetail[i].name_detail;
                                                    Selectdetail.appendChild(option);
                                                }

                                                for (var i = 0; i < ValueForeignKays.IdLabel.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdLabel[i].id_label);
                                                    option.innerHTML = ValueForeignKays.IdLabel[i].name_label;
                                                    SelectLabel.appendChild(option);
                                                }





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    Selectdetail.value = ValueForeignKays.IdDetail[0].id_detail;
                                                    SelectLabel.value =  ValueForeignKays.IdLabel[0].id_label;
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        id_detail: Selectdetail.value,
                                                        id_label: SelectLabel.value
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                Selectdetail.value = ValueForeignKays.IdDetail[0].id_detail;
                                                                SelectLabel.value =  ValueForeignKays.IdLabel[0].id_label;

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                            })

                                        break;


                                        case ('payment_method'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_payment_method
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_payment_method' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNamePaymentMethod = document.querySelector('#input_name_payment_method');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNamePaymentMethod.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_method: '\'' + InputNamePaymentMethod.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNamePaymentMethod.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('review'):

                                            fetch('/api/getvalueforeignkeyreview')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;


                                                ContainerForManipylationValue.innerHTML = 
                                                `
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_user
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-user' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Text_review
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_text_review' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Mark
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_mark' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Date_add
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_date_add' class='style-input-order'>
                                                        </div>
                                                    </div>
                                                    

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`



                                                var SelectUser = document.querySelector('#select-id-user');
                                                var InputTextReview = document.querySelector('#input_text_review');
                                                var InputMark = document.querySelector('#input_mark');
                                                var InputDateAdd = document.querySelector('#input_date_add');



                                                for (var i = 0; i < ValueForeignKays.IdUser.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdUser[i].id_user);
                                                    option.innerHTML = ValueForeignKays.IdUser[i].login;
                                                    SelectUser.appendChild(option);
                                                }





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    SelectUser.value = ValueForeignKays.IdUser[0].id_user;
                                                    InputTextReview.value = '';
                                                    InputMark.value = '';
                                                    InputDateAdd = '';
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        id_user: SelectUser.value,
                                                        text_review: '\'' + InputTextReview.value + '\'',
                                                        mark: '\'' + InputMark.value + '\'',
                                                        date_add: '\'' + InputDateAdd.value + '\''
                                                    }

                                                    if (InputMark.value != 'like' && InputMark.value != 'dislike'){
                                                        ListValueNewCarteg.mark = 'NULL'
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                SelectUser.value = ValueForeignKays.IdUser[0].id_user;
                                                                InputTextReview.value = '';
                                                                InputMark.value = '';
                                                                InputDateAdd = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                            })

                                        break;


                                        case ('statys_basket_and_order'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_statys
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_statys' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameStatys = document.querySelector('#input_name_statys');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameStatys.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_statys: '\'' + InputNameStatys.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameStatys.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('type_detail'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_type
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_type' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameStatys = document.querySelector('#input_name_type');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameStatys.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_type: '\'' + InputNameStatys.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameStatys.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('type_filter'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_type_filter
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_type' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameStatys = document.querySelector('#input_name_type');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameStatys.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_type_filter: '\'' + InputNameStatys.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameStatys.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('type_user'):


                                                ContainerForManipylationValue.innerHTML = 
                                                `

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_type
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_type' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`




                                                var InputNameStatys = document.querySelector('#input_name_type');





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    InputNameStatys.value = '';

                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        name_type: '\'' + InputNameStatys.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                InputNameStatys.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                        break;


                                        case ('sub_type_detail'):

                                            fetch('/api/getvalueforeignkeysubtypedetail')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;


                                                ContainerForManipylationValue.innerHTML = 
                                                `   
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_sub_type_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_sub_type_detail' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_type_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-type-detail' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>
                                                    

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`



                                                var SelectTypeDetail = document.querySelector('#select-id-type-detail');
                                                var InputNameSubTypeDetail = document.querySelector('#input_name_sub_type_detail');




                                                for (var i = 0; i < ValueForeignKays.IdTypeDetail.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdTypeDetail[i].id_type_detail);
                                                    option.innerHTML = ValueForeignKays.IdTypeDetail[i].name_type;
                                                    SelectTypeDetail.appendChild(option);
                                                }





                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    SelectTypeDetail.value = ValueForeignKays.IdTypeDetail[0].id_type_detail;
                                                    InputNameSubTypeDetail.value = '';
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        id_type_detail: SelectTypeDetail.value,
                                                        name_sub_type_detail: '\'' + InputNameSubTypeDetail.value + '\''
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                SelectTypeDetail.value = ValueForeignKays.IdTypeDetail[0].id_type_detail;
                                                                InputNameSubTypeDetail.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                            })

                                        break;


                                        case ('user'):

                                            fetch('/api/getvalueforeignkeyuser')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;


                                                ContainerForManipylationValue.innerHTML = 
                                                `   
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_type_user
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-type-user' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            S_name
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_s_name' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Patronemic
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_patronemic' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Telefon
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_telefon' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Mail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_mail' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Password
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_password' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Image_user
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_image_user' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Login
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_login' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Date_born
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_date_born' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_gender
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-gender' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Country
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_country' class='style-input-order'>
                                                        </div>
                                                    </div>
                                                    

                                                    <div class='element-containera-manipylation-but'>
                                                        <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                        <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                </div>`



                                                var SelectTypeUser = document.querySelector('#select-id-type-user');
                                                var InputSName = document.querySelector('#input_name_s_name');
                                                var InputName = document.querySelector('#input_name');
                                                var InputPatronemic = document.querySelector('#input_patronemic');
                                                var InputTelefon = document.querySelector('#input_telefon');
                                                var InputMail = document.querySelector('#input_mail');
                                                var InputPassword = document.querySelector('#input_password');
                                                var InpurImageUser = document.querySelector('#input_image_user');
                                                var InputLogin = document.querySelector('#input_login');
                                                var InputDateBorn = document.querySelector('#input_date_born');
                                                var SelectGender = document.querySelector('#select-id-gender');
                                                var InputCount = document.querySelector('#input_country');




                                                for (var i = 0; i < ValueForeignKays.IdGender.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdGender[i].id_gender);
                                                    option.innerHTML = ValueForeignKays.IdGender[i].name_gender;
                                                    SelectGender.appendChild(option);
                                                }


                                                for (var i = 0; i < ValueForeignKays.IdTypeUser.length; i++){
                                                    
                                                    var option = document.createElement('option');
                                                    option.setAttribute('value', ValueForeignKays.IdTypeUser[i].id_type_user);
                                                    option.innerHTML = ValueForeignKays.IdTypeUser[i].name_type;
                                                    SelectTypeUser.appendChild(option);
                                                }

                                                InpurImageUser.value ='static/image/user_image/no-image.png';
                                                SelectGender.value = ValueForeignKays.IdGender[2].id_gender


                                                var ButClier = document.querySelector('#but-clier-elements');
                                                
                                                ButClier.addEventListener('click', () => {

                                                    SelectTypeUser.value = ValueForeignKays.IdTypeUser[0].id_type_user
                                                    InputSName.value = '';
                                                    InputName.value = '';
                                                    InputPatronemic.value = '';
                                                    InputTelefon.value = '';
                                                    InputMail.value = '';
                                                    InputPassword.value = '';
                                                    InpurImageUser.value ='static/image/user_image/no-image.png';
                                                    InputLogin.value = '';
                                                    InputDateBorn.value = '';
                                                    SelectGender.value = ValueForeignKays.IdGender[2].id_gender
                                                    InputCount.value = '';
                                                })


                                                var ButAdd = document.querySelector('#but-add-new-cortage');

                                                ButAdd.addEventListener('click', () => {

                                                    var ListValueNewCarteg = {
                                                        nameTable: SelectNameTableBD.value,
                                                        id_type_user: SelectTypeUser.value,
                                                        s_name: '\'' + InputSName.value + '\'',
                                                        name: '\'' + InputName.value + '\'',
                                                        patronemic: '\'' + InputPatronemic.value + '\'',
                                                        telefon: '\'' + InputTelefon.value + '\'',
                                                        mail: '\'' + InputMail.value + '\'',
                                                        password: '\'' + InputPassword.value + '\'',
                                                        image_user: '\'' + InpurImageUser.value + '\'',
                                                        login: '\'' + InputLogin.value + '\'',
                                                        date_born: '\'' + InputDateBorn.value + '\'',
                                                        id_gender: SelectGender.value,
                                                        country: '\'' + InputCount.value + '\''
                                                    }

                                                    if (InputMail.value == ''){
                                                        ListValueNewCarteg.mail = 'NULL'
                                                    }

                                                    if (InputDateBorn.value == ''){
                                                        ListValueNewCarteg.date_born = 'NULL';
                                                    }

                                                    if (InputCount.value == ''){
                                                        ListValueNewCarteg.country = 'NULL';
                                                    }


                                                    fetch('/api/inserttable', {
                                                        method : 'POST',
                                                        body: JSON.stringify(ListValueNewCarteg),
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        
                                                        if (data[0] == '200'){

                                                            fetch('/api/getvaluetabledb', {
                                                                method : 'POST',
                                                                body: JSON.stringify(NameTableBD),
                                                                headers: {
                                                                    'Content-Type': 'application/json',
                                                                }
                                                            })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                window.scrollTo(0, 0);

                                                                CreateTableValuesAdminPage(data);

                                                                SelectTypeUser.value = ValueForeignKays.IdTypeUser[0].id_type_user
                                                                InputSName.value = '';
                                                                InputName.value = '';
                                                                InputPatronemic.value = '';
                                                                InputTelefon.value = '';
                                                                InputMail.value = '';
                                                                InputPassword.value = '';
                                                                InpurImageUser.value ='static/image/user_image/no-image.png';
                                                                InputLogin.value = '';
                                                                InputDateBorn.value = '';
                                                                SelectGender.value = ValueForeignKays.IdGender[2].id_gender
                                                                InputCount.value = '';

                                                                ListCheakedRow = [];
                                                            })
                                                        }
                                                    })
                                                })



                                            })

                                        break;

                                    }

                                    FlagClickButAddNewCarteg = true;
                                } else {


                                    ContainerForManipylationValue.innerHTML = '';
                                    ButAddNewCarteg.style.backgroundColor = 'transparent';
                                    ButAddNewCarteg.style.borderColor = 'transparent';
                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                    FlagClickButAddNewCarteg = false;
                                }
                            })









                            //Select
                            var ListCheakedRow = [];


                            //Basket_and_order
                            function addNewValueInListRow(idRow, name_detail, login, name_statys, artikle_order, date_buy, count_buy, locality, name_delivery_method, name_payment_method, address, wishes){

                                var valueRow = {
                                    idRow: idRow,
                                    name_detail: name_detail,
                                    login: login,
                                    name_statys: name_statys,
                                    artikle_order: artikle_order,
                                    date_buy: date_buy,
                                    count_buy: count_buy,
                                    locality: locality,
                                    name_delivery_method: name_delivery_method,
                                    name_method: name_payment_method,
                                    address: address,
                                    wishes: wishes
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Blog
                            function addNewValueInListRowBlog(idRow, id_blog, img_blog, title_blog, text_blog, date_add){

                                var valueRow = {
                                    idRow: idRow,
                                    id_blog: id_blog,
                                    img_blog: img_blog,
                                    title_blog: title_blog,
                                    text_blog: text_blog,
                                    date_add: date_add
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Brand
                            function addNewValueInListRowBrand(idRow, id_brand, name_brand){

                                var valueRow = {
                                    idRow: idRow,
                                    id_brand: id_brand,
                                    name_brand: name_brand
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Delivery Method
                            function addNewValueInListRowDeliveryMethod(idRow, id_delivery_method, name_delivery_method){

                                var valueRow = {
                                    idRow: idRow,
                                    id_delivery_method: id_delivery_method,
                                    name_delivery_method: name_delivery_method
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Payment Method
                            function addNewValueInListRowPaymentMethod(idRow, id_payment_method, name_method){

                                var valueRow = {
                                    idRow: idRow,
                                    id_payment_method: id_payment_method,
                                    name_method: name_method
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Detail
                            function addNewValueInListRowDetail(idRow, id_detail, name_detail, artikle, price, count, img, description, id_brand, id_sub_type_detail){

                                var valueRow = {
                                    idRow: idRow,
                                    id_detail: id_detail,
                                    name_detail: name_detail,
                                    artikle: artikle,
                                    price: price,
                                    count: count,
                                    img: img,
                                    descriptin: description,
                                    id_brand: id_brand,
                                    id_sub_type_detail
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Gender
                            function addNewValueInListRowGender(idRow, id_gender, name_gender){

                                var valueRow = {
                                    idRow: idRow,
                                    id_gender: id_gender,
                                    name_gender: name_gender
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Statys Basket And Order
                            function addNewValueInListRowStatysBasketAndOrder(idRow, id_statys_basket_and_order, name_statys){

                                var valueRow = {
                                    idRow: idRow,
                                    id_statys_basket_and_order: id_statys_basket_and_order,
                                    name_statys: name_statys
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Type Detail
                            function addNewValueInListRowTypeDetail(idRow, id_type_detail, name_type){

                                var valueRow = {
                                    idRow: idRow,
                                    id_type_detail: id_type_detail,
                                    name_type: name_type
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Type Filter
                            function addNewValueInListRowTypeFilter(idRow, id_type_filter, name_type_filter){

                                var valueRow = {
                                    idRow: idRow,
                                    id_type_filter: id_type_filter,
                                    name_type_filter: name_type_filter
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Type User
                            function addNewValueInListRowTypeUser(idRow, id_type_user, name_type){

                                var valueRow = {
                                    idRow: idRow,
                                    id_type_user: id_type_user,
                                    name_type: name_type
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Label
                            function addNewValueInListRowLabel(idRow, id_label, name_label){

                                var valueRow = {
                                    idRow: idRow,
                                    id_label: id_label,
                                    name_label: name_label
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Filter
                            function addNewValueInListRowFilter(idRow, id_detail, id_value_type_filter, value){

                                var valueRow = {
                                    idRow: idRow,
                                    id_detail: id_detail,
                                    id_value_type_filter: id_value_type_filter,
                                    value: value
                                }

                                ListCheakedRow.push(valueRow);
                            }


                            //Sub Type Detail
                            function addNewValueInListRowSubTypeDetail(idRow, id_sub_type_detail, name_sub_type_detail, id_type_detail){

                                var valueRow = {
                                    idRow: idRow,
                                    id_sub_type_detail: id_sub_type_detail,
                                    name_sub_type_detail: name_sub_type_detail,
                                    id_type_detail: id_type_detail
                                }

                                ListCheakedRow.push(valueRow);
                            }


                            //Value Type Filter
                            function addNewValueInListRowValueTypeFilter(idRow, id_value_type_filter, id_type_filter, value){

                                var valueRow = {
                                    idRow: idRow,
                                    id_value_type_filter: id_value_type_filter,
                                    id_type_filter: id_type_filter,
                                    value: value
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Lable Detail
                            function addNewValueInListRowLableDetail(idRow, id_detail, id_label){

                                var valueRow = {
                                    idRow: idRow,
                                    id_detail: id_detail,
                                    id_label: id_label
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //Review
                            function addNewValueInListRowReview(idRow, id_review, id_user, text_review, mark, date_add){

                                var valueRow = {
                                    idRow: idRow,
                                    id_review: id_review,
                                    id_user: id_user,
                                    text_review: text_review,
                                    mark: mark,
                                    date_add: date_add
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            //User
                            function addNewValueInListRowUser(idRow, id_user, id_type_user, s_name, name, patronemic, telefon, mail, password, image_user, login, date_born, id_gender, country){

                                var valueRow = {
                                    idRow: idRow,
                                    id_user: id_user,
                                    id_type_user: id_type_user,
                                    s_name: s_name,
                                    name: name,
                                    patronemic: patronemic,
                                    telefon: telefon,
                                    mail: mail,
                                    password: password,
                                    image_user: image_user,
                                    login: login,
                                    date_born: date_born,
                                    id_gender: id_gender,
                                    country: country
                                }

                                ListCheakedRow.push(valueRow);
                            }

                            var TableThisTableDB = document.querySelector('.table-adminca-page');

                            TableThisTableDB.addEventListener('click', (e) => {


                                if (e.target.className.indexOf('td-row') == 0){

                                    var Unic = true;
                                    var idThisRow = e.target.className.replace('td-row', '');
                                    var collectionTd = document.querySelectorAll('.' + e.target.className);

                                    for (var i = 0; i < ListCheakedRow.length; i++){
                                        if (ListCheakedRow[i].idRow == idThisRow){
                                            ListCheakedRow.splice(i, 1);
                                            for (var i = 0; i < collectionTd.length; i++){
                                                collectionTd[i].style.backgroundColor = 'transparent';
                                            }
                                            Unic = false;
                                            break;
                                        }
                                    }

                                    if (Unic){
                                        for (var i = 0; i < collectionTd.length; i++){
                                            collectionTd[i].style.backgroundColor = '#f9c823';
                                        }

                                        switch(SelectNameTableBD.value){

                                            case ('basket_and_order'):
                                                addNewValueInListRow(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML, collectionTd[2].innerHTML, collectionTd[3].innerHTML, collectionTd[4].innerHTML, collectionTd[5].innerHTML, collectionTd[6].innerHTML, collectionTd[7].innerHTML, collectionTd[8].innerHTML, collectionTd[9].innerHTML, collectionTd[10].innerHTML);
                                            break;

                                            case ('user'):
                                                addNewValueInListRowUser(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML, collectionTd[2].innerHTML, collectionTd[3].innerHTML, collectionTd[4].innerHTML, collectionTd[5].innerHTML, collectionTd[6].innerHTML, collectionTd[7].innerHTML, collectionTd[8].innerHTML, collectionTd[9].innerHTML, collectionTd[10].innerHTML, collectionTd[11].innerHTML, collectionTd[12].innerHTML);
                                            break;

                                            case ('blog'):
                                                addNewValueInListRowBlog(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML, collectionTd[2].innerHTML, collectionTd[3].innerHTML, collectionTd[4].innerHTML);
                                            break;

                                            case ('brand'):
                                                addNewValueInListRowBrand(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('delivery_method'):
                                                addNewValueInListRowDeliveryMethod(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('payment_method'):
                                                addNewValueInListRowPaymentMethod(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('detail'):
                                                addNewValueInListRowDetail(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML, collectionTd[2].innerHTML, collectionTd[3].innerHTML, collectionTd[4].innerHTML, collectionTd[5].innerHTML, collectionTd[6].innerHTML, collectionTd[7].innerHTML, collectionTd[8].innerHTML);
                                            break;

                                            case ('gender'):
                                                addNewValueInListRowGender(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('label'):
                                                addNewValueInListRowLabel(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('filter'):
                                                addNewValueInListRowFilter(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML, collectionTd[2].innerHTML);
                                            break;

                                            case ('sub_type_detail'):
                                                addNewValueInListRowSubTypeDetail(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML, collectionTd[2].innerHTML);
                                            break;

                                            case ('value_type_filter'):
                                                addNewValueInListRowValueTypeFilter(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML, collectionTd[2].innerHTML);
                                            break;

                                            case ('lable_detail'):
                                                addNewValueInListRowLableDetail(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('review'):
                                                addNewValueInListRowReview(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML, collectionTd[2].innerHTML, collectionTd[3].innerHTML, collectionTd[4].innerHTML);
                                            break;

                                            case ('statys_basket_and_order'):
                                                addNewValueInListRowStatysBasketAndOrder(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('type_detail'):
                                                addNewValueInListRowTypeDetail(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('type_filter'):
                                                addNewValueInListRowTypeFilter(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;

                                            case ('type_user'):
                                                addNewValueInListRowTypeUser(idThisRow, collectionTd[0].innerHTML, collectionTd[1].innerHTML);
                                            break;
                                        }
                                        
                                    }
                                
                                }


                            })








                            //Update carteg
                            var ButUpdate = document.querySelector('#but-update-carteg');
                            var FlagClickButUpdate = false;

                            ButUpdate.addEventListener('click', () => {

                                if (ListCheakedRow.length == 1){

                                    if (FlagClickButUpdate == false){

                                        if (FlagClickButAddNewCarteg == true){
                                            ContainerForManipylationValue.innerHTML = '';
                                            ButAddNewCarteg.style.backgroundColor = 'transparent';
                                            ButAddNewCarteg.style.borderColor = 'transparent';
                                            document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                            FlagClickButAddNewCarteg = false;
                                        }

                                        ButUpdate.style.backgroundColor = '#c9c9c9';
                                        ButUpdate.style.borderColor = '#b1b1b1';
                                        document.querySelector('.content-manipylation-value-db').style.display = 'flex';
    
                                        switch(SelectNameTableBD.value){
    
    
    
                                            case ('basket_and_order'):
    
                                                fetch('/api/getvalueforeignkeybasketandorder')
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    var ValueForeignKays = data;
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `<div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_detail
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-detail' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>
    
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_user
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-user' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>
    
    
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_statys_basket_and_order
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-statys-basket-and-order' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>
    
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Artikle_order
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_artikle_order' class='style-input-order'>
                                                            </div>
                                                        </div>
    
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Date_buy
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_date_buy' class='style-input-order'>
                                                            </div>
                                                        </div>
    
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Count_buy
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_count_buy' class='style-input-order'>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Locality
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_locality' class='style-input-order'>
                                                            </div>
                                                        </div>
    
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_delivery_method
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-delivery_method' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>
    
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_payment_method
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-payment_method' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Address
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_address' class='style-input-order'>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Wishes
                                                            </div>
    
                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_wishes' class='style-input-order'>
                                                            </div>
                                                        </div>
    
                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Отменить</button></div>
    
                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`
    
    
    
    
                                                    var SelectIdDetail = document.querySelector('#select-id-detail');
                                                    var SelectIdUser = document.querySelector('#select-id-user');
                                                    var SelectIdStatys = document.querySelector('#select-id-statys-basket-and-order');
                                                    var InputArtikleOrder = document.querySelector('#input_artikle_order');
                                                    var InputDateBuy = document.querySelector('#input_date_buy');
                                                    var InputCountBuy = document.querySelector('#input_count_buy');
                                                    var InputLocality = document.querySelector('#input_locality');
                                                    var SelectDeliveryMethod = document.querySelector('#select-id-delivery_method');
                                                    var SelectPaymentMethod = document.querySelector('#select-id-payment_method');
                                                    var InputAddress = document.querySelector('#input_address');
                                                    var InputWishes = document.querySelector('#input_wishes');
    
                                                    
    
                                                    for (var i = 0; i < data.IdDetail.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', data.IdDetail[i].id_detail);
                                                        option.innerHTML = data.IdDetail[i].name_detail;
                                                        SelectIdDetail.appendChild(option);

                                                        if (data.IdDetail[i].name_detail == ListCheakedRow[0].name_detail){
                                                            SelectIdDetail.value = data.IdDetail[i].id_detail;
                                                        }
                                                    }
    
                                                    for (var i = 0; i < data.IdUser.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', data.IdUser[i].id_user);
                                                        option.innerHTML = data.IdUser[i].login;
                                                        SelectIdUser.appendChild(option);

                                                        if (data.IdUser[i].login == ListCheakedRow[0].login){
                                                            SelectIdUser.value = data.IdUser[i].id_user;
                                                        }
                                                    }
    
                                                    for (var i = 0; i < data.IdStatys.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', data.IdStatys[i].id_statys_basket_and_order);
                                                        option.innerHTML = data.IdStatys[i].name_statys;
                                                        SelectIdStatys.appendChild(option);

                                                        if (data.IdStatys[i].name_statys == ListCheakedRow[0].name_statys){
                                                            SelectIdStatys.value = data.IdStatys[i].id_statys_basket_and_order;
                                                        }
                                                    }



                                                    if(ListCheakedRow[0].artikle_order == 'NULL'){
                                                        InputArtikleOrder.value = '';
                                                    } else {
                                                        InputArtikleOrder.value = ListCheakedRow[0].artikle_order;
                                                    }

                                                    if(ListCheakedRow[0].date_buy == 'NaN.NaN.NaN'){
                                                        InputDateBuy.value = '';
                                                    } else {
                                                        InputDateBuy.value = ListCheakedRow[0].date_buy;
                                                    }

                                                    if(ListCheakedRow[0].count_buy == 'NULL'){
                                                        InputCountBuy.value = '';
                                                    } else {
                                                        InputCountBuy.value = ListCheakedRow[0].count_buy;
                                                    }

                                                    if(ListCheakedRow[0].locality == 'NULL'){
                                                        InputLocality.value = '';
                                                    } else {
                                                        InputLocality.value = ListCheakedRow[0].locality;
                                                    }
    


                                                    for (var i = 0; i < data.IdDelivery.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', data.IdDelivery[i].id_delivery_method);
                                                        option.innerHTML = data.IdDelivery[i].name_delivery_method;
                                                        SelectDeliveryMethod.appendChild(option);

                                                        if (data.IdDelivery[i].name_delivery_method == ListCheakedRow[0].name_delivery_method){
                                                            SelectDeliveryMethod.value = data.IdDelivery[i].id_delivery_method;
                                                        }
                                                    }
    
                                                    for (var i = 0; i < data.IdPayment.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', data.IdPayment[i].id_payment_method);
                                                        option.innerHTML = data.IdPayment[i].name_method;
                                                        SelectPaymentMethod.appendChild(option);

                                                        if (data.IdPayment[i].name_method == ListCheakedRow[0].name_method){
                                                            SelectPaymentMethod.value = data.IdPayment[i].id_payment_method;
                                                        }
                                                    }



                                                    if(ListCheakedRow[0].address == 'NULL'){
                                                        InputAddress.value = '';
                                                    } else {
                                                        InputAddress.value = ListCheakedRow[0].address;
                                                    }

                                                    if(ListCheakedRow[0].wishes == 'NULL'){
                                                        InputWishes.value = '';
                                                    } else {
                                                        InputWishes.value = ListCheakedRow[0].wishes;
                                                    }
                                                    



                                                    var oldValue = {
                                                        idDetail: SelectIdDetail.value,
                                                        idUser: SelectIdUser.value,
                                                        idStatys: SelectIdStatys.value,
                                                        artikleOrder: '= \'' + InputArtikleOrder.value + '\'',
                                                        dateBuy: '= \'' + InputDateBuy.value + '\'',
                                                        countBuy: '= ' + InputCountBuy.value,
                                                        locality: '= \'' + InputLocality.value + '\'',
                                                        deliveryMethod: SelectDeliveryMethod.value,
                                                        paymentMethod: SelectPaymentMethod.value,
                                                        address: '= \'' + InputAddress.value + '\'',
                                                        wishes: '= \'' + InputWishes.value + '\''
                                                    }

                                                    if (InputArtikleOrder.value == ''){
                                                        oldValue.artikleOrder = 'is NULL';
                                                    }

                                                    if (InputDateBuy.value == ''){
                                                        oldValue.dateBuy = 'is NULL';
                                                    }

                                                    if (InputLocality.value == ''){
                                                        oldValue.locality = 'is NULL';
                                                    }

                                                    if (InputAddress.value == ''){
                                                        oldValue.address = 'is NULL';
                                                    }

                                                    if (InputWishes.value == ''){
                                                        oldValue.wishes = 'is NULL';
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        for (var i = 0; i < ValueForeignKays.IdDetail.length; i++){
                                                        
                                                            if (ValueForeignKays.IdDetail[i].name_detail == ListCheakedRow[0].name_detail){
                                                                SelectIdDetail.value = ValueForeignKays.IdDetail[i].id_detail;
                                                                break
                                                            }
                                                        }
        
                                                        for (var i = 0; i < ValueForeignKays.IdUser.length; i++){

    
                                                            if (ValueForeignKays.IdUser[i].login == ListCheakedRow[0].login){
                                                                SelectIdUser.value = ValueForeignKays.IdUser[i].id_user;
                                                                break;
                                                            }
                                                        }
        
                                                        for (var i = 0; i < ValueForeignKays.IdStatys.length; i++){
    
                                                            if (ValueForeignKays.IdStatys[i].name_statys == ListCheakedRow[0].name_statys){
                                                                SelectIdStatys.value = ValueForeignKays.IdStatys[i].id_statys_basket_and_order;
                                                                break;
                                                            }
                                                        }
    

                                                        if(ListCheakedRow[0].artikle_order == 'NULL'){
                                                            InputArtikleOrder.value = '';
                                                        } else {
                                                            InputArtikleOrder.value = ListCheakedRow[0].artikle_order;
                                                        }
    
                                                        if(ListCheakedRow[0].date_buy == 'NaN.NaN.NaN'){
                                                            InputDateBuy.value = '';
                                                        } else {
                                                            InputDateBuy.value = ListCheakedRow[0].date_buy;
                                                        }
    
                                                        if(ListCheakedRow[0].count_buy == 'NULL'){
                                                            InputCountBuy.value = '';
                                                        } else {
                                                            InputCountBuy.value = ListCheakedRow[0].count_buy;
                                                        }
    
                                                        if(ListCheakedRow[0].locality == 'NULL'){
                                                            InputLocality.value = '';
                                                        } else {
                                                            InputLocality.value = ListCheakedRow[0].locality;
                                                        }
        
                                                        
                                                        for (var i = 0; i < ValueForeignKays.IdDelivery.length; i++){
    
                                                            if (ValueForeignKays.IdDelivery[i].name_delivery_method == ListCheakedRow[0].name_delivery_method){
                                                                SelectDeliveryMethod.value = ValueForeignKays.IdDelivery[i].id_delivery_method;
                                                                break;
                                                            }
                                                        }
        
                                                        for (var i = 0; i < ValueForeignKays.IdPayment.length; i++){

                                                            if (ValueForeignKays.IdPayment[i].name_method == ListCheakedRow[0].name_method){
                                                                SelectPaymentMethod.value = ValueForeignKays.IdPayment[i].id_payment_method;
                                                                break;
                                                            }
                                                        }
    

                                                        if(ListCheakedRow[0].address == 'NULL'){
                                                            InputAddress.value = '';
                                                        } else {
                                                            InputAddress.value = ListCheakedRow[0].address;
                                                        }
    
                                                        if(ListCheakedRow[0].wishes == 'NULL'){
                                                            InputWishes.value = '';
                                                        } else {
                                                            InputWishes.value = ListCheakedRow[0].wishes;
                                                        }


                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            idDetail: SelectIdDetail.value,
                                                            idUser: SelectIdUser.value,
                                                            idStatys: SelectIdStatys.value,
                                                            artikleOrder: '\'' + InputArtikleOrder.value + '\'',
                                                            dateBuy: '\'' + InputDateBuy.value + '\'',
                                                            countBuy: InputCountBuy.value,
                                                            locality: '\'' + InputLocality.value + '\'',
                                                            deliveryMethod: SelectDeliveryMethod.value,
                                                            paymentMethod: SelectPaymentMethod.value,
                                                            address: '\'' + InputAddress.value + '\'',
                                                            wishes: '\'' + InputWishes.value + '\''
                                                        }
    
                                                        if (InputArtikleOrder.value == ''){
                                                            newValue.artikleOrder = 'NULL';
                                                        }
    
                                                        if (InputDateBuy.value == ''){
                                                            newValue.dateBuy = 'NULL';
                                                        }
    
                                                        if (InputLocality.value == ''){
                                                            newValue.locality = 'NULL';
                                                        }
    
                                                        if (InputAddress.value == ''){
                                                            newValue.address = 'NULL';
                                                        }
    
                                                        if (InputWishes.value == ''){
                                                            newValue.wishes = 'NULL';
                                                        }

                                                        var oldAndNewvalues = {
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetablebasketandorder', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
    
    
                                                })
    
                                            break;


                                            case ('blog'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Img_blog
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_img-blog' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Title_blog
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_title_blog' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Text_blog
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <textarea id='input_text_blog' class='textarea-adminca'></textarea>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Date_add
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_date_add' class='style-input-order'>
                                                            </div>
                                                        </div>
                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputImgBlog = document.querySelector('#input_img-blog');
                                                    var InputTitleBlog = document.querySelector('#input_title_blog');
                                                    var InputTextBlog = document.querySelector('#input_text_blog');
                                                    var InputDateAdd = document.querySelector('#input_date_add');
    
                                                    
    
                                                    InputImgBlog.value = ListCheakedRow[0].img_blog;
                                                    InputTitleBlog.value = ListCheakedRow[0].title_blog;
                                                    InputTextBlog.value = ListCheakedRow[0].text_blog;
                                                    InputDateAdd.value = ListCheakedRow[0].date_add;



                                                    var oldValue = {
                                                        id_blog: ListCheakedRow[0].id_blog
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputImgBlog.value = ListCheakedRow[0].img_blog;
                                                        InputTitleBlog.value = ListCheakedRow[0].title_blog;
                                                        InputTextBlog.value = ListCheakedRow[0].text_blog;
                                                        InputDateAdd.value = ListCheakedRow[0].date_add;
                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            img_blog: '\'' + InputImgBlog.value + '\'',
                                                            title_blog: '\'' + InputTitleBlog.value + '\'',
                                                            text_blog: '\'' + InputTextBlog.value + '\'',
                                                            date_add: '\'' + InputDateAdd.value + '\''
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('brand'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_brand
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_brand' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNameBrand = document.querySelector('#input_name_brand');

    
                                                    
    
                                                    InputNameBrand.value = ListCheakedRow[0].name_brand;




                                                    var oldValue = {
                                                        id_brand: ListCheakedRow[0].id_brand
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNameBrand.value = ListCheakedRow[0].name_brand;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_brand: '\'' + InputNameBrand.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('delivery_method'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_delivery_method
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_delivery_method' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNameDeliveryMethod = document.querySelector('#input_name_delivery_method');

    
                                                    
    
                                                    InputNameDeliveryMethod.value = ListCheakedRow[0].name_delivery_method;




                                                    var oldValue = {
                                                        id_delivery_method: ListCheakedRow[0].id_delivery_method
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNameDeliveryMethod.value = ListCheakedRow[0].name_delivery_method;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_delivery_method: '\'' + InputNameDeliveryMethod.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('payment_method'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_payment_method
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_payment_method' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNamePaymentMethod = document.querySelector('#input_name_payment_method');

    
                                                    
    
                                                    InputNamePaymentMethod.value = ListCheakedRow[0].name_method;




                                                    var oldValue = {
                                                        id_payment_method: ListCheakedRow[0].id_payment_method
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNamePaymentMethod.value = ListCheakedRow[0].name_method;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_method: '\'' + InputNamePaymentMethod.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('detail'):
                                                fetch('/api/getvalueforeignkeydetail')
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    var ValueForeignKays = data;

                                                    for (var i = 0; i < ValueForeignKays.IdSybTypeDetail.length; i++){
                                                        
                                                        if (ValueForeignKays.IdSybTypeDetail[i].name_sub_type_detail == null){
                                                            for (var j = 0; j < ValueForeignKays.IdTypeDetail.length; j++){
                                                                if (ValueForeignKays.IdSybTypeDetail[i].id_type_detail == ValueForeignKays.IdTypeDetail[j].id_type_detail){
                                                                    ValueForeignKays.IdSybTypeDetail[i].name_sub_type_detail = ValueForeignKays.IdTypeDetail[j].name_type;
                                                                }
                                                            }
                                                        }
                                                    }

                                                    ContainerForManipylationValue.innerHTML = 
                                                    `
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_detail
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_detail' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Artikle
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_artikle' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Price
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_price' class='style-input-order'>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Count
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_count' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Img
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_img' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Description
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_description' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_brand
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-brand' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_sub_type_detail
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-sub-type-detail' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>
                                                        

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                    </div>`




                                                    var InputNameDetail = document.querySelector('#input_name_detail');
                                                    var InputArtikle = document.querySelector('#input_artikle');
                                                    var InputPrice = document.querySelector('#input_price');
                                                    var InputCount = document.querySelector('#input_count');
                                                    var InputImg = document.querySelector('#input_img');
                                                    var InputDescription = document.querySelector('#input_description');
                                                    var SelectBrand = document.querySelector('#select-id-brand');
                                                    var SelectSubTypeDetail = document.querySelector('#select-id-sub-type-detail');



                                                    for (var i = 0; i < data.IdBrand.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', data.IdBrand[i].id_brand);
                                                        option.innerHTML = data.IdBrand[i].name_brand;
                                                        SelectBrand.appendChild(option);

                                                        if (ValueForeignKays.IdBrand[i].name_brand == ListCheakedRow[0].id_brand){
                                                            SelectBrand.value = ValueForeignKays.IdBrand[i].id_brand;
                                                        }
                                                    }

                                                    for (var i = 0; i < data.IdSybTypeDetail.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', data.IdSybTypeDetail[i].id_sub_type_detail);
                                                        option.innerHTML = data.IdSybTypeDetail[i].name_sub_type_detail;
                                                        SelectSubTypeDetail.appendChild(option);

                                                        if (ValueForeignKays.IdSybTypeDetail[i].name_sub_type_detail == ListCheakedRow[0].id_sub_type_detail){
                                                            SelectSubTypeDetail.value = ValueForeignKays.IdSybTypeDetail[i].id_sub_type_detail;
                                                        }
                                                    }


                                                    InputNameDetail.value = ListCheakedRow[0].name_detail;
                                                    InputArtikle.value = ListCheakedRow[0].artikle;
                                                    InputPrice.value = ListCheakedRow[0].price;
                                                    InputCount.value = ListCheakedRow[0].count;
                                                    InputImg.value = ListCheakedRow[0].img;
                                                    InputDescription.value = ListCheakedRow[0].descriptin;



                                                    var oldValue = {
                                                        id_detail: ListCheakedRow[0].id_detail
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-clier-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        for (var i = 0; i < ValueForeignKays.IdBrand.length; i++){

                                                            if (ValueForeignKays.IdBrand[i].name_brand == ListCheakedRow[0].id_brand){
                                                                SelectBrand.value = ValueForeignKays.IdBrand[i].id_brand;
                                                            }
                                                        }
    
                                                        for (var i = 0; i < ValueForeignKays.IdSybTypeDetail.length; i++){
                                                            
                                                            if (ValueForeignKays.IdSybTypeDetail[i].name_sub_type_detail == ListCheakedRow[0].id_sub_type_detail){
                                                                SelectSubTypeDetail.value = ValueForeignKays.IdSybTypeDetail[i].id_sub_type_detail;
                                                            }
                                                        }
    
    
                                                        InputNameDetail.value = ListCheakedRow[0].name_detail;
                                                        InputArtikle.value = ListCheakedRow[0].artikle;
                                                        InputPrice.value = ListCheakedRow[0].price;
                                                        InputCount.value = ListCheakedRow[0].count;
                                                        InputImg.value = ListCheakedRow[0].img;
                                                        InputDescription.value = ListCheakedRow[0].descriptin;
                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-add-new-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            nameTable: SelectNameTableBD.value,
                                                            name_detail: '\'' + InputNameDetail.value + '\'',
                                                            artikle: '\'' + InputArtikle.value + '\'',
                                                            price: InputPrice.value,
                                                            count: InputCount.value,
                                                            img: '\'' + InputImg.value + '\'',
                                                            description: '\'' + InputDescription.value + '\'',
                                                            id_brand: SelectBrand.value,
                                                            id_sub_type_detail: SelectSubTypeDetail.value
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
                                                })
    
                                            break;


                                            case ('gender'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_gender
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_gender' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNameGender = document.querySelector('#input_name_gender');

    
                                                    
    
                                                    InputNameGender.value = ListCheakedRow[0].name_gender;




                                                    var oldValue = {
                                                        id_gender: ListCheakedRow[0].id_gender
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNameGender.value = ListCheakedRow[0].name_gender;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_gender: '\'' + InputNameGender.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('label'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_label
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_label' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNamelabel = document.querySelector('#input_name_label');

    
                                                    
    
                                                    InputNamelabel.value = ListCheakedRow[0].name_label;




                                                    var oldValue = {
                                                        id_label: ListCheakedRow[0].id_label
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNamelabel.value = ListCheakedRow[0].name_label;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_label: '\'' + InputNamelabel.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('filter'):

                                                fetch('/api/getvalueforeignkeyfilter')
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    var ValueForeignKays = data;

                                                    ContainerForManipylationValue.innerHTML = 
                                                    `
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_detail
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-detail' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_value_type_filter
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-value-type_filter' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>
                                                        

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                    </div>`



                                                    var Selectdetail = document.querySelector('#select-id-detail');
                                                    var SelectValueTypeDetail = document.querySelector('#select-id-value-type_filter');



                                                    for (var i = 0; i < ValueForeignKays.IdDetail.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdDetail[i].id_detail);
                                                        option.innerHTML = ValueForeignKays.IdDetail[i].name_detail;
                                                        Selectdetail.appendChild(option);

                                                        if (ValueForeignKays.IdDetail[i].name_detail == ListCheakedRow[0].id_detail){
                                                            Selectdetail.value = ValueForeignKays.IdDetail[i].id_detail;
                                                        }
                                                    }

                                                    for (var i = 0; i < ValueForeignKays.IdValueTypeFilter.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdValueTypeFilter[i].id_value_type_filter);
                                                        option.innerHTML = ValueForeignKays.IdValueTypeFilter[i].name_type_filter + ' ' + ValueForeignKays.IdValueTypeFilter[i].value;
                                                        SelectValueTypeDetail.appendChild(option);

                                                        if (ValueForeignKays.IdValueTypeFilter[i].name_type_filter == ListCheakedRow[0].id_value_type_filter &&  ValueForeignKays.IdValueTypeFilter[i].value == ListCheakedRow[0].value){
                                                            SelectValueTypeDetail.value = ValueForeignKays.IdValueTypeFilter[i].id_value_type_filter;
                                                        }
                                                    }





                                                    var oldValue = {
                                                        id_detail: Selectdetail.value,
                                                        id_value_type_filter: SelectValueTypeDetail.value
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-clier-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        for (var i = 0; i < ValueForeignKays.IdDetail.length; i++){
    
                                                            if (ValueForeignKays.IdDetail[i].name_detail == ListCheakedRow[0].id_detail){
                                                                Selectdetail.value = ValueForeignKays.IdDetail[i].id_detail;
                                                            }
                                                        }
    
                                                        for (var i = 0; i < ValueForeignKays.IdValueTypeFilter.length; i++){
    
                                                            if (ValueForeignKays.IdValueTypeFilter[i].name_type_filter == ListCheakedRow[0].id_value_type_filter &&  ValueForeignKays.IdValueTypeFilter[i].value == ListCheakedRow[0].value){
                                                                SelectValueTypeDetail.value = ValueForeignKays.IdValueTypeFilter[i].id_value_type_filter;
                                                            }
                                                        }
                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-add-new-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            id_detail: Selectdetail.value,
                                                            id_value_type_filter: SelectValueTypeDetail.value
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
                                                })
    
                                            break;


                                            case ('value_type_filter'):

                                                fetch('/api/getvalueforeignkeyvaluetypefilter')
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    var ValueForeignKays = data;

                                                    ContainerForManipylationValue.innerHTML = 
                                                    `
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_type_filter
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-type-filter' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Value
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_value' class='style-input-order'>
                                                        </div>
                                                    </div>
                                                        

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-add-new-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`

                                                    


                                                    var SelectTypeFilter = document.querySelector('#select-id-type-filter');
                                                    var InputValue = document.querySelector('#input_value');



                                                    for (var i = 0; i < ValueForeignKays.IdTypeFilter.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdTypeFilter[i].id_type_filter);
                                                        option.innerHTML = ValueForeignKays.IdTypeFilter[i].name_type_filter;
                                                        SelectTypeFilter.appendChild(option);

                                                        if (ValueForeignKays.IdTypeFilter[i].name_type_filter == ListCheakedRow[0].id_type_filter){
                                                            SelectTypeFilter.value = ValueForeignKays.IdTypeFilter[i].id_type_filter;
                                                        }
                                                    }

                                                    InputValue.value = ListCheakedRow[0].value;








                                                    var oldValue = {
                                                        id_value_type_filter: ListCheakedRow[0].id_value_type_filter
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-clier-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        for (var i = 0; i < ValueForeignKays.IdTypeFilter.length; i++){
                                                        
                                                            var option = document.createElement('option');
                                                            option.setAttribute('value', ValueForeignKays.IdTypeFilter[i].id_type_filter);
                                                            option.innerHTML = ValueForeignKays.IdTypeFilter[i].name_type_filter;
                                                            SelectTypeFilter.appendChild(option);
    
                                                            if (ValueForeignKays.IdTypeFilter[i].name_type_filter == ListCheakedRow[0].id_type_filter){
                                                                SelectTypeFilter.value = ValueForeignKays.IdTypeFilter[i].id_type_filter;
                                                            }
                                                        }

                                                        InputValue.value = '';
                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-add-new-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            id_type_filter: SelectTypeFilter.value,
                                                            value: '\'' + InputValue.value + '\''
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
                                                })
    
                                            break;


                                            case ('lable_detail'):

                                                fetch('/api/getvalueforeignkeylabledetail')
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    var ValueForeignKays = data;


                                                    ContainerForManipylationValue.innerHTML = 
                                                    `
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_detail
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-detail' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_label
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-label' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>
                                                        

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-add-new-cortage' class="stylebutton">Добавить</button></div>
                                                    </div>`



                                                    var Selectdetail = document.querySelector('#select-id-detail');
                                                    var SelectLabel = document.querySelector('#select-id-label');



                                                    for (var i = 0; i < ValueForeignKays.IdDetail.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdDetail[i].id_detail);
                                                        option.innerHTML = ValueForeignKays.IdDetail[i].name_detail;
                                                        Selectdetail.appendChild(option);

                                                        if (ValueForeignKays.IdDetail[i].name_detail == ListCheakedRow[0].id_detail){
                                                            Selectdetail.value = ValueForeignKays.IdDetail[i].id_detail;
                                                        }
                                                    }

                                                    for (var i = 0; i < ValueForeignKays.IdLabel.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdLabel[i].id_label);
                                                        option.innerHTML = ValueForeignKays.IdLabel[i].name_label;
                                                        SelectLabel.appendChild(option);

                                                        if (ValueForeignKays.IdLabel[i].name_label == ListCheakedRow[0].id_label){
                                                            SelectLabel.value = ValueForeignKays.IdLabel[i].id_label;
                                                        }
                                                    }





                                                    var oldValue = {
                                                        id_detail: Selectdetail.value,
                                                        id_label: SelectLabel.value
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-clier-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        for (var i = 0; i < ValueForeignKays.IdDetail.length; i++){

                                                            if (ValueForeignKays.IdDetail[i].name_detail == ListCheakedRow[0].id_detail){
                                                                Selectdetail.value = ValueForeignKays.IdDetail[i].id_detail;
                                                            }
                                                        }
    
                                                        for (var i = 0; i < ValueForeignKays.IdLabel.length; i++){

                                                            if (ValueForeignKays.IdLabel[i].name_label == ListCheakedRow[0].id_label){
                                                                SelectLabel.value = ValueForeignKays.IdLabel[i].id_label;
                                                            }
                                                        }
                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-add-new-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            id_detail: Selectdetail.value,
                                                            id_label: SelectLabel.value
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
                                                })
    
                                            break;


                                            case ('review'):

                                                fetch('/api/getvalueforeignkeyreview')
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    var ValueForeignKays = data;


                                                    ContainerForManipylationValue.innerHTML = 
                                                    `
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_user
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-user' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Text_review
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_text_review' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Mark
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_mark' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Date_add
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_date_add' class='style-input-order'>
                                                            </div>
                                                        </div>
                                                        

                                                        <div class='element-containera-manipylation-but'>
                                                                <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                                <div><button id='but-add-new-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`



                                                    var SelectUser = document.querySelector('#select-id-user');
                                                    var InputTextReview = document.querySelector('#input_text_review');
                                                    var InputMark = document.querySelector('#input_mark');
                                                    var InputDateAdd = document.querySelector('#input_date_add');



                                                    for (var i = 0; i < ValueForeignKays.IdUser.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdUser[i].id_user);
                                                        option.innerHTML = ValueForeignKays.IdUser[i].login;
                                                        SelectUser.appendChild(option);

                                                        if (ValueForeignKays.IdUser[i].login == ListCheakedRow[0].id_user){
                                                            SelectUser.value = ValueForeignKays.IdUser[i].id_user;
                                                        }
                                                    }

                                                    InputTextReview.value = ListCheakedRow[0].text_review;
                                                    InputMark.value = ListCheakedRow[0].mark;
                                                    InputDateAdd.value = ListCheakedRow[0].date_add;





                                                    var oldValue = {
                                                        id_review: ListCheakedRow[0].id_review
                                                    }




                                                    var ButBackValue = document.querySelector('#but-clier-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {

                                                        for (var i = 0; i < ValueForeignKays.IdUser.length; i++){

                                                            if (ValueForeignKays.IdUser[i].login == ListCheakedRow[0].id_user){
                                                                SelectUser.value = ValueForeignKays.IdUser[i].id_user;
                                                            }
                                                        }
        
                                                        InputTextReview.value = ListCheakedRow[0].text_review;
                                                        InputMark.value = ListCheakedRow[0].mark;
                                                        InputDateAdd.value = ListCheakedRow[0].date_add;
                                                    })


                                                    var ButSaveChange = document.querySelector('#but-add-new-cortage');

                                                    ButSaveChange.addEventListener('click', () => {

                                                        var newValue = {
                                                            id_user: SelectUser.value,
                                                            text_review: '\'' + InputTextReview.value + '\'',
                                                            mark: '\'' + InputMark.value + '\'',
                                                            date_add: '\'' + InputDateAdd.value + '\''
                                                        }

                                                        if(InputMark.value != 'like' && InputMark.value != 'dislike'){
                                                            newValue.mark = 'NULL';
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }

                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){

                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);

                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })



                                                })

                                            break;

                                            
                                            case ('statys_basket_and_order'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_statys
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_statys' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNameStatys = document.querySelector('#input_name_statys');

    
                                                    
    
                                                    InputNameStatys.value = ListCheakedRow[0].name_statys;




                                                    var oldValue = {
                                                        id_statys_basket_and_order: ListCheakedRow[0].id_statys_basket_and_order
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNameStatys.value = ListCheakedRow[0].name_statys;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_statys: '\'' + InputNameStatys.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;

                                            case ('type_detail'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_type
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_statys' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNameStatys = document.querySelector('#input_name_statys');

    
                                                    
    
                                                    InputNameStatys.value = ListCheakedRow[0].name_type;




                                                    var oldValue = {
                                                        id_type_detail: ListCheakedRow[0].id_type_detail
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNameStatys.value = ListCheakedRow[0].name_type;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_type: '\'' + InputNameStatys.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('type_filter'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_type_filter
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_statys' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNameStatys = document.querySelector('#input_name_statys');

    
                                                    
    
                                                    InputNameStatys.value = ListCheakedRow[0].name_type_filter;




                                                    var oldValue = {
                                                        id_type_filter: ListCheakedRow[0].id_type_filter
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNameStatys.value = ListCheakedRow[0].name_type_filter;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_type_filter: '\'' + InputNameStatys.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('type_user'):
    
                                                    ContainerForManipylationValue.innerHTML = 
                                                    `

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name_type
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_statys' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-back-values-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-save-change-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`




                                                    var InputNameStatys = document.querySelector('#input_name_statys');

    
                                                    
    
                                                    InputNameStatys.value = ListCheakedRow[0].name_type;




                                                    var oldValue = {
                                                        id_type_user: ListCheakedRow[0].id_type_user
                                                    }
    

    
    
                                                    var ButBackValue = document.querySelector('#but-back-values-elements');
                                                    
                                                    ButBackValue.addEventListener('click', () => {
    
                                                        InputNameStatys.value = ListCheakedRow[0].name_type;

                                                    })
    
    
                                                    var ButSaveChange = document.querySelector('#but-save-change-cortage');
    
                                                    ButSaveChange.addEventListener('click', () => {
    
                                                        var newValue = {
                                                            name_type: '\'' + InputNameStatys.value + '\'',
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }
    
                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){
    
                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);
    
                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })
    
                                            break;


                                            case ('sub_type_detail'):

                                                fetch('/api/getvalueforeignkeysubtypedetail')
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    var ValueForeignKays = data;


                                                    ContainerForManipylationValue.innerHTML = 
                                                    `
                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Name_sub_type_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <input id='input_name_sub_type_detail' class='style-input-order'>
                                                        </div>
                                                    </div>

                                                    <div class='element-containera-manipylation'>
                                                        <div class='name-element-containera-manipylation'>
                                                            Id_type_detail
                                                        </div>

                                                        <div class='pole-element-containera-manipylation'>
                                                            <select id='select-id-type-detail' class="select-table-bd">
                            
                                                            </select>
                                                        </div>
                                                    </div>
                                                        

                                                        <div class='element-containera-manipylation-but'>
                                                                <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                                <div><button id='but-add-new-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`



                                                    var SelectTypeDetail = document.querySelector('#select-id-type-detail');
                                                    var InputNameSubTypeDetail = document.querySelector('#input_name_sub_type_detail');




                                                    for (var i = 0; i < ValueForeignKays.IdTypeDetail.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdTypeDetail[i].id_type_detail);
                                                        option.innerHTML = ValueForeignKays.IdTypeDetail[i].name_type;
                                                        SelectTypeDetail.appendChild(option);

                                                        if (ValueForeignKays.IdTypeDetail[i].name_type == ListCheakedRow[0].id_type_detail){
                                                            SelectTypeDetail.value = ValueForeignKays.IdTypeDetail[i].id_type_detail;
                                                        }
                                                    }


                                                    InputNameSubTypeDetail.value = ListCheakedRow[0].name_sub_type_detail;





                                                    var oldValue = {
                                                        id_sub_type_detail: ListCheakedRow[0].id_sub_type_detail
                                                    }




                                                    var ButBackValue = document.querySelector('#but-clier-elements');

                                                    ButBackValue.addEventListener('click', () => {

                                                        for (var i = 0; i < ValueForeignKays.IdTypeDetail.length; i++){

                                                            if (ValueForeignKays.IdTypeDetail[i].name_type == ListCheakedRow[0].id_type_detail){
                                                                SelectTypeDetail.value = ValueForeignKays.IdTypeDetail[i].id_type_detail;
                                                            }
                                                        }
                                                    })
                                                    


                                                    InputNameSubTypeDetail.value = ListCheakedRow[0].name_sub_type_detail;


                                                    var ButSaveChange = document.querySelector('#but-add-new-cortage');

                                                    ButSaveChange.addEventListener('click', () => {

                                                        var newValue = {
                                                            id_type_detail: SelectTypeDetail.value,
                                                            name_sub_type_detail: '\'' + InputNameSubTypeDetail.value + '\''
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }

                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){

                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);

                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })



                                                })

                                            break;


                                            case ('user'):

                                                fetch('/api/getvalueforeignkeyuser')
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                    var ValueForeignKays = data;


                                                    ContainerForManipylationValue.innerHTML = 
                                                    `   
                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_type_user
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-type-user' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                S_name
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name_s_name' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Name
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_name' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Patronemic
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_patronemic' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Telefon
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_telefon' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Mail
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_mail' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Password
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_password' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Image_user
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_image_user' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Login
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_login' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Date_born
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_date_born' class='style-input-order'>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Id_gender
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <select id='select-id-gender' class="select-table-bd">
                                
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class='element-containera-manipylation'>
                                                            <div class='name-element-containera-manipylation'>
                                                                Country
                                                            </div>

                                                            <div class='pole-element-containera-manipylation'>
                                                                <input id='input_country' class='style-input-order'>
                                                            </div>
                                                        </div>
                                                        

                                                        <div class='element-containera-manipylation-but'>
                                                            <div><button id='but-clier-elements' class="stylebutton">Очистить</button></div>

                                                            <div><button id='but-add-new-cortage' class="stylebutton">Сохранить</button></div>
                                                    </div>`



                                                    var SelectTypeUser = document.querySelector('#select-id-type-user');
                                                    var InputSName = document.querySelector('#input_name_s_name');
                                                    var InputName = document.querySelector('#input_name');
                                                    var InputPatronemic = document.querySelector('#input_patronemic');
                                                    var InputTelefon = document.querySelector('#input_telefon');
                                                    var InputMail = document.querySelector('#input_mail');
                                                    var InputPassword = document.querySelector('#input_password');
                                                    var InpurImageUser = document.querySelector('#input_image_user');
                                                    var InputLogin = document.querySelector('#input_login');
                                                    var InputDateBorn = document.querySelector('#input_date_born');
                                                    var SelectGender = document.querySelector('#select-id-gender');
                                                    var InputCountry = document.querySelector('#input_country');




                                                    for (var i = 0; i < ValueForeignKays.IdGender.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdGender[i].id_gender);
                                                        option.innerHTML = ValueForeignKays.IdGender[i].name_gender;
                                                        SelectGender.appendChild(option);

                                                        if (ValueForeignKays.IdGender[i].name_gender == ListCheakedRow[0].id_gender){
                                                            SelectGender.value = ValueForeignKays.IdGender[i].id_gender;
                                                        }
                                                    }


                                                    for (var i = 0; i < ValueForeignKays.IdTypeUser.length; i++){
                                                        
                                                        var option = document.createElement('option');
                                                        option.setAttribute('value', ValueForeignKays.IdTypeUser[i].id_type_user);
                                                        option.innerHTML = ValueForeignKays.IdTypeUser[i].name_type;
                                                        SelectTypeUser.appendChild(option);

                                                        if (ValueForeignKays.IdTypeUser[i].name_type == ListCheakedRow[0].id_type_user){
                                                            SelectTypeUser.value = ValueForeignKays.IdTypeUser[i].id_type_user;
                                                        }
                                                    }


                                                    InputSName.value = ListCheakedRow[0].s_name;
                                                    InputName.value = ListCheakedRow[0].name;
                                                    InputPatronemic.value = ListCheakedRow[0].patronemic;
                                                    InputTelefon.value = ListCheakedRow[0].telefon;
                                                    InputMail.value = ListCheakedRow[0].mail;
                                                    InputPassword.value = ListCheakedRow[0].password;
                                                    InpurImageUser.value = ListCheakedRow[0].image_user;
                                                    InputLogin.value = ListCheakedRow[0].login;
                                                    InputDateBorn.value = ListCheakedRow[0].date_born;
                                                    InputCountry.value = ListCheakedRow[0].country;



                                                    var oldValue = {
                                                        id_user: ListCheakedRow[0].id_user
                                                    }




                                                    var ButBackValue = document.querySelector('#but-clier-elements');

                                                    ButBackValue.addEventListener('click', () => {

                                                        for (var i = 0; i < ValueForeignKays.IdGender.length; i++){

                                                            if (ValueForeignKays.IdGender[i].name_gender == ListCheakedRow[0].id_gender){
                                                                SelectGender.value = ValueForeignKays.IdGender[i].id_gender;
                                                            }
                                                        }
    
    
                                                        for (var i = 0; i < ValueForeignKays.IdTypeUser.length; i++){

                                                            if (ValueForeignKays.IdTypeUser[i].name_type == ListCheakedRow[0].id_type_user){
                                                                SelectTypeUser.value = ValueForeignKays.IdTypeUser[i].id_type_user;
                                                            }
                                                        }
    
    
                                                        InputSName.value = ListCheakedRow[0].s_name;
                                                        InputName.value = ListCheakedRow[0].name;
                                                        InputPatronemic.value = ListCheakedRow[0].patronemic;
                                                        InputTelefon.value = ListCheakedRow[0].telefon;
                                                        InputMail.value = ListCheakedRow[0].mail;
                                                        InputPassword.value = ListCheakedRow[0].password;
                                                        InpurImageUser.value = ListCheakedRow[0].image_user;
                                                        InputLogin.value = ListCheakedRow[0].login;
                                                        InputDateBorn.value = ListCheakedRow[0].date_born;
                                                        InputCountry.value = ListCheakedRow[0].country;
                                                    })



                                                    var ButSaveChange = document.querySelector('#but-add-new-cortage');

                                                    ButSaveChange.addEventListener('click', () => {

                                                        var newValue = {
                                                            nameTable: SelectNameTableBD.value,
                                                            id_type_user: SelectTypeUser.value,
                                                            s_name: '\'' + InputSName.value + '\'',
                                                            name: '\'' + InputName.value + '\'',
                                                            patronemic: '\'' + InputPatronemic.value + '\'',
                                                            telefon: '\'' + InputTelefon.value + '\'',
                                                            mail: '\'' + InputMail.value + '\'',
                                                            password: '\'' + InputPassword.value + '\'',
                                                            image_user: '\'' + InpurImageUser.value + '\'',
                                                            login: '\'' + InputLogin.value + '\'',
                                                            date_born: '\'' + InputDateBorn.value + '\'',
                                                            id_gender: SelectGender.value,
                                                            country: '\'' + InputCountry.value + '\''
                                                        }

                                                        if (InputMail.value == ''){
                                                            newValue.mail = 'NULL'
                                                        }

                                                        if (InputDateBorn.value == '' || InputDateBorn.value == 'NaN-NaN-NaN'){
                                                            newValue.date_born = 'NULL';
                                                        }

                                                        if (InputCountry.value == ''){
                                                            newValue.country = 'NULL';
                                                        }


                                                        var oldAndNewvalues = {
                                                            nameTable: SelectNameTableBD.value,
                                                            oldValue: oldValue,
                                                            newValue: newValue
                                                        }

                                                        fetch('/api/updatetable', {
                                                            method : 'POST',
                                                            body: JSON.stringify(oldAndNewvalues),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            
                                                            if (data[0] == '200'){

                                                                fetch('/api/getvaluetabledb', {
                                                                    method : 'POST',
                                                                    body: JSON.stringify(NameTableBD),
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                    }
                                                                })
                                                                .then(res => res.json())
                                                                .then(data => {
                                                                    window.scrollTo(0, 0);

                                                                    CreateTableValuesAdminPage(data);
                                                                    ListCheakedRow.splice(0, 1);

                                                                    ContainerForManipylationValue.innerHTML = '';
                                                                    ButUpdate.style.backgroundColor = 'transparent';
                                                                    ButUpdate.style.borderColor = 'transparent';
                                                                    document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                                                    FlagClickButUpdate = false;
                                                                })
                                                            }
                                                        })
                                                    })



                                                })

                                            break;
                                        }
    
                                        FlagClickButUpdate = true;
                                    } else {
    
    
                                        ContainerForManipylationValue.innerHTML = '';
                                        ButUpdate.style.backgroundColor = 'transparent';
                                        ButUpdate.style.borderColor = 'transparent';
                                        document.querySelector('.content-manipylation-value-db').style.display = 'none';
                                        FlagClickButUpdate = false;
                                    }
                                }
                            })






                            //But Delete carteg
                            var ButDelete = document.querySelector('#but-delete-carteg');
                            
                            ButDelete.addEventListener('click', () => {

                                if (ListCheakedRow.length > 0){

                                    //Switch Tables for Delet carteg
                                    switch(SelectNameTableBD.value){


                                        case ('basket_and_order'):

                                        
                                            fetch('/api/getvalueforeignkeybasketandorder')
                                            .then(res => res.json())
                                            .then(data => {

                                                var ValueForeignKays = data;
                                                
                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }

                                                for (var i = 0; i < ListforDelete.valueForDelete.length; i++){

                                                    for (var j = 0; j < ValueForeignKays.IdDetail.length; j++){
                                                            
                                                        if (ValueForeignKays.IdDetail[j].name_detail == ListforDelete.valueForDelete[i].name_detail){
                                                            ListforDelete.valueForDelete[i].name_detail = ValueForeignKays.IdDetail[j].id_detail;
                                                            break;
                                                        }
                                                    }

                                                    for (var j = 0; j < ValueForeignKays.IdUser.length; j++){


                                                        if (ValueForeignKays.IdUser[j].login == ListforDelete.valueForDelete[i].login){
                                                            ListforDelete.valueForDelete[i].login = ValueForeignKays.IdUser[j].id_user;
                                                            break;
                                                        }
                                                    }

                                                    for (var j = 0; j < ValueForeignKays.IdStatys.length; j++){

                                                        if (ValueForeignKays.IdStatys[j].name_statys == ListforDelete.valueForDelete[i].name_statys){
                                                            ListforDelete.valueForDelete[i].name_statys = ValueForeignKays.IdStatys[j].id_statys_basket_and_order;
                                                            break;
                                                        }
                                                    }

                                                    
                                                    for (var j = 0; j < ValueForeignKays.IdDelivery.length; j++){

                                                        if (ValueForeignKays.IdDelivery[j].name_delivery_method == ListforDelete.valueForDelete[i].name_delivery_method){
                                                            ListforDelete.valueForDelete[i].name_delivery_method = ValueForeignKays.IdDelivery[j].id_delivery_method;
                                                            break;
                                                        }
                                                    }

                                                    for (var j = 0; j < ValueForeignKays.IdPayment.length; j++){

                                                        if (ValueForeignKays.IdPayment[j].name_method == ListforDelete.valueForDelete[i].name_method){
                                                            ListforDelete.valueForDelete[i].name_method = ValueForeignKays.IdPayment[j].id_payment_method;
                                                            break;
                                                        }
                                                    }

                                                    if (ListforDelete.valueForDelete[i].artikle_order == 'NULL'){
                                                        ListforDelete.valueForDelete[i].artikle_order = 'is NULL';
                                                    } else {
                                                        ListforDelete.valueForDelete[i].artikle_order = '= \'' + ListforDelete.valueForDelete[i].artikle_order + '\'';
                                                    }
                                                    if (ListforDelete.valueForDelete[i].date_buy == 'NaN-NaN-NaN'){
                                                        ListforDelete.valueForDelete[i].date_buy = 'is NULL';
                                                    } else {
                                                        ListforDelete.valueForDelete[i].date_buy = '= \'' + ListforDelete.valueForDelete[i].date_buy + '\'';
                                                    }
                                                    if (ListforDelete.valueForDelete[i].count_buy == 'NULL'){
                                                        ListforDelete.valueForDelete[i].count_buy = 'is NULL';
                                                    } else {
                                                        ListforDelete.valueForDelete[i].count_buy = '= ' + ListforDelete.valueForDelete[i].count_buy;
                                                    }
                                                    if (ListforDelete.valueForDelete[i].locality == 'NULL'){
                                                        ListforDelete.valueForDelete[i].locality = 'is NULL';
                                                    } else {
                                                        ListforDelete.valueForDelete[i].locality = '= \'' + ListforDelete.valueForDelete[i].locality + '\'';
                                                    }
                                                    if (ListforDelete.valueForDelete[i].address == 'NULL'){
                                                        ListforDelete.valueForDelete[i].address = 'is NULL';
                                                    } else {
                                                        ListforDelete.valueForDelete[i].address = '= \'' + ListforDelete.valueForDelete[i].address + '\'';
                                                    }
                                                    if (ListforDelete.valueForDelete[i].wishes == 'NULL'){
                                                        ListforDelete.valueForDelete[i].wishes = 'is NULL';
                                                    } else {
                                                        ListforDelete.valueForDelete[i].wishes = '= \'' + ListforDelete.valueForDelete[i].wishes + '\'';
                                                    }
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })
                                            })
                                        break;


                                        case ('blog'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;
                                            

                                        case ('brand'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('delivery_method'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('payment_method'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('detail'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('gender'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('label'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('filter'):

                                            fetch('/api/getvalueforeignkeyfilter')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;



                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                for (var i = 0; i < ListforDelete.valueForDelete.length; i++){

                                                    for (var j = 0; j < ValueForeignKays.IdDetail.length; j++){
    
                                                        if (ValueForeignKays.IdDetail[j].name_detail == ListforDelete.valueForDelete[i].id_detail){
                                                            ListforDelete.valueForDelete[i].id_detail = ValueForeignKays.IdDetail[j].id_detail;
                                                            break;
                                                        }
                                                    }
                                                    for (var j = 0; j < ValueForeignKays.IdValueTypeFilter.length; j++){

                                                        if (ValueForeignKays.IdValueTypeFilter[j].name_type_filter == ListforDelete.valueForDelete[i].id_value_type_filter &&  ValueForeignKays.IdValueTypeFilter[j].value == ListforDelete.valueForDelete[i].value){
                                                            ListforDelete.valueForDelete[i].id_value_type_filter = ValueForeignKays.IdValueTypeFilter[j].id_value_type_filter;
                                                            break;
                                                        }
                                                    }
                                                }

                                                


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })
                                            })



                                        break;


                                        case ('value_type_filter'):

                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }

                                                


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })



                                        break;


                                        case ('lable_detail'):

                                            fetch('/api/getvalueforeignkeylabledetail')
                                            .then(res => res.json())
                                            .then(data => {
                                                
                                                var ValueForeignKays = data;



                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                for (var i = 0; i < ListforDelete.valueForDelete.length; i++){

                                                    for (var j = 0; j < ValueForeignKays.IdDetail.length; j++){
    
                                                        if (ValueForeignKays.IdDetail[j].name_detail == ListforDelete.valueForDelete[i].id_detail){
                                                            ListforDelete.valueForDelete[i].id_detail = ValueForeignKays.IdDetail[j].id_detail;
                                                            break;
                                                        }
                                                    }
                                                    for (var j = 0; j < ValueForeignKays.IdLabel.length; j++){

                                                        if (ValueForeignKays.IdLabel[j].name_label == ListforDelete.valueForDelete[i].id_label){
                                                            ListforDelete.valueForDelete[i].id_label = ValueForeignKays.IdLabel[j].id_label;
                                                            break;
                                                        }
                                                    }
                                                }

                                                


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })
                                            })



                                        break;


                                        case ('review'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('statys_basket_and_order'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('type_detail'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('type_filter'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('type_user'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('sub_type_detail'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;


                                        case ('user'):


                                                var ListforDelete = {
                                                    nameTable: SelectNameTableBD.value,
                                                    valueForDelete: ListCheakedRow
                                                }


                                                fetch('/api/deletecarteg', {
                                                    method : 'POST',
                                                    body: JSON.stringify(ListforDelete),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data[0] == '200'){
        
                                                        fetch('/api/getvaluetabledb', {
                                                            method : 'POST',
                                                            body: JSON.stringify(NameTableBD),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            }
                                                        })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            window.scrollTo(0, 0);

                                                            CreateTableValuesAdminPage(data);
                                                            ListCheakedRow = [];
                                                        })
                                                    }
                                                })

                                        break;

                                    }


                                }
                            })
                        })
                    }
                })
    }
}



pageIndex();

window.addEventListener('hashchange', pageIndex);