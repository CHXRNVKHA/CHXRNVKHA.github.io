function CreateDetailForSlider (mas, parent, data){


    var Panel = document.querySelector(parent);

    var ElementPanel = document.createElement('li');
    ElementPanel.setAttribute('class', 'element-slider-list-detail-for-hom-page');
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


var MasXitDetail = [];
var MasDescontDetail = [];

$(document).ready(function() {

	
	function pageIndex(){
		clearInterval(timerInterval);
	}
	
	window.addEventListener('hashchange', pageIndex);


	var detail_slid_width_last;
	var ContainerSliderDetail = document.querySelector('.slider-list-detail-for-hom-page-carousel-list');
	var ButtonXitDetail = document.querySelector('#xitd-detail-slider');
	var ButtonDescontDetail = document.querySelector('#discont-detail-slider');


	fetch('/api/getqueyrxitdetail')
        .then(res => res.json())
        .then(data => {
            for ( var i = 0; i < data.queryDetai.length; i++){
                CreateDetailForSlider(data.queryDetai[i], '.slider-list-detail-for-hom-page-carousel-list', data.queryLabel);
			}

			MasXitDetail = data;

			ButtonXitDetail.classList.add("element-menu-nav-topsell-cheack");

			if ($('body').width() <= 730){

				if ($('body').width() <= 505){

					detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * (1/2);
   					$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
				} else {

					detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * (1/3);
   					$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
				}
			} else {

				detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * 0.25;
   				$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
			}
			
		});
	


	ButtonXitDetail.addEventListener('click', () => {

		ContainerSliderDetail.innerHTML = "";

		if (!ButtonXitDetail.classList.contains("element-menu-nav-topsell-cheack")){
			ButtonDescontDetail.classList.remove("element-menu-nav-topsell-cheack");
			ButtonXitDetail.classList.add("element-menu-nav-topsell-cheack");
		}

        for ( var i = 0; i < MasXitDetail.queryDetai.length; i++){
            CreateDetailForSlider(MasXitDetail.queryDetai[i], '.slider-list-detail-for-hom-page-carousel-list', MasXitDetail.queryLabel);
		}

		if ($('body').width() <= 730){

			if ($('body').width() <= 505){

				detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * (1/2);
				   $('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
			} else {

				detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * (1/3);
				   $('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
			}
		} else {

			detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * 0.25;
			   $('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
		}

	});


	ButtonDescontDetail.addEventListener('click', () => {

		ContainerSliderDetail.innerHTML = "";

		if (!ButtonDescontDetail.classList.contains("element-menu-nav-topsell-cheack")){
			ButtonXitDetail.classList.remove("element-menu-nav-topsell-cheack");
			ButtonDescontDetail.classList.add("element-menu-nav-topsell-cheack");
		}

		if (MasDescontDetail.length == 0){

			fetch('/api/getqueyrdescontdetail')
			.then(res => res.json())
			.then(data => {
				for ( var i = 0; i < data.queryDetai.length; i++){
					CreateDetailForSlider(data.queryDetai[i], '.slider-list-detail-for-hom-page-carousel-list', data.queryLabel);
				}

				MasDescontDetail = data;

				if ($('body').width() <= 730){

					if ($('body').width() <= 505){

						detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * (1/2);
						   $('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
					} else {
	
						detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * (1/3);
						   $('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
					}
				} else {
	
					detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * 0.25;
					   $('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
				}
			});

		} else {

			for ( var i = 0; i < MasDescontDetail.queryDetai.length; i++){
				CreateDetailForSlider(MasDescontDetail.queryDetai[i], '.slider-list-detail-for-hom-page-carousel-list', MasDescontDetail.queryLabel);
			}

			if ($('body').width() <= 730){

				if ($('body').width() <= 505){

					detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * (1/2);
   					$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
				} else {

					detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * (1/3);
   					$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
				}
				
			} else {

				detail_slid_width_last = $('.slider-list-detail-for-hom-page').width() * 0.25;
   				$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_last +'px');
			}
		}

	});




    //size image in slider
    var lastwidth = $('.slidercontainer').width();
    $('.carousel-element').css('width',lastwidth+'px');

	var counterslider = 0;



	var detail_slid_counter = 0;








    window.onresize = function() {

		var maxwidth = $('.slidercontainer').width();
		$('.carousel-element').css('width',maxwidth+'px');
		
		if (lastwidth - maxwidth != 0){

			currentLeftValue = counterslider * maxwidth;

			elementsList.animate({ left : 0 + "px"}, 0);
			elementsList.animate({ left : currentLeftValue + "px"}, 0);

		}



		if ($('body').width() <= 730){

			if ($('body').width() <= 505){

				var detail_slid_width_now = $('.slider-list-detail-for-hom-page').width() * (1/2);
				$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_now +'px');

				if (detail_slid_width_last - detail_slid_width_now != 0){

					leftvalue = detail_slid_counter * detail_slid_width_now;
					minofset = - ((ditail_slider_counter - 2) * detail_slid_width_now);

					detail_slider_list.animate({ left : 0 + "px"}, 0);
					detail_slider_list.animate({ left : leftvalue + "px"}, 0);

				}
			} else {

				var detail_slid_width_now = $('.slider-list-detail-for-hom-page').width() * (1/3);
				$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_now +'px');

				if (detail_slid_width_last - detail_slid_width_now != 0){

					leftvalue = detail_slid_counter * detail_slid_width_now;
					minofset = - ((ditail_slider_counter - 3) * detail_slid_width_now);

					detail_slider_list.animate({ left : 0 + "px"}, 0);
					detail_slider_list.animate({ left : leftvalue + "px"}, 0);

				}
			
			}

		} else {

			var detail_slid_width_now = $('.slider-list-detail-for-hom-page').width() * 0.25;
			$('.element-slider-list-detail-for-hom-page').css('width', detail_slid_width_now +'px');

			if (detail_slid_width_last - detail_slid_width_now != 0){

				leftvalue = detail_slid_counter * detail_slid_width_now;
				minofset = - ((ditail_slider_counter - 4) * detail_slid_width_now);

				detail_slider_list.animate({ left : 0 + "px"}, 0);
				detail_slider_list.animate({ left : leftvalue + "px"}, 0);

			}
		}
    }
    //

	
	





	var leftUIEl = $('.slider-nav-left');
	var rightUIEl = $('.slider-nav-right');
	var elementsList = $('.carousel-list');
	var list = document.querySelector('.carousel-list');
	

    var currentLeftValue = 0;
    var elementsSlider = document.querySelectorAll('.carousel-element');
	var elementsCount = elementsSlider.length;
	var maximumOffset = 0;



	var flagright = true;
	var flagleft = true;
	var timerInterval;
	var timerInterval1;



	
	leftUIEl.click(function() {
		clearInterval(timerInterval);
		clearInterval(timerInterval1);

		var maxwidth = $('.slidercontainer').width();
		var minimumOffset = - ((elementsCount-1) * maxwidth);

		if (flagright){

			if (currentLeftValue != maximumOffset) {

				flagright = false;
				currentLeftValue += maxwidth;

				var timer0 = setTimeout(function () {
					flagright = true;
				}, 500);

				elementsList.animate({ left : currentLeftValue + "px"}, 500);
				counterslider++;

			} else {

				flagright = false;
				var lilast = document.querySelectorAll('.carousel-element')[elementsCount - 1];
				list.insertBefore(lilast, list.firstChild);
            	elementsList.animate({ left : maximumOffset - maxwidth + "px"}, 0);
				elementsList.animate({ left : maximumOffset + "px"}, 500);
				
				var timer1 = setTimeout(function () {
					flagright = true;
				}, 500);

			}
		}

		timerInterval1 = setTimeout(function () {
			timer();
		}, 4000);
	});
	




	rightUIEl.click(function() {
		clearInterval(timerInterval);
		clearInterval(timerInterval1);

		var maxwidth = $('.slidercontainer').width();
		var minimumOffset = - ((elementsCount-1) * maxwidth);

		if (flagleft){

			if (currentLeftValue != minimumOffset) {

				flagleft = false;
				currentLeftValue -= maxwidth;

				var timer3 = setTimeout(function () {
					flagleft = true;
				}, 500);

				elementsList.animate({ left : currentLeftValue + "px"}, 500);

				counterslider--;

		} else {

			flagleft = false;
			var lilast = document.querySelectorAll('.carousel-element')[0];
            list.appendChild(lilast);
            elementsList.animate({ left : minimumOffset + maxwidth + "px"}, 0);
			elementsList.animate({ left : minimumOffset + "px"}, 500);

			var timer2 = setTimeout(function () {
				flagleft = true;
			}, 500);

			}
		}

		timerInterval1 = setTimeout(function () {
			timer();
		}, 4000);
	});





	function timer(){
		timerInterval = setInterval(function () {

			var maxwidth = $('.slidercontainer').width();
			var minimumOffset = - ((elementsCount-1) * maxwidth);
			
			if(window.location.hash != '#/main'){
				clearInterval(timerInterval);
			} else {

				if (currentLeftValue != minimumOffset) {
	
					flagleft = false;
					currentLeftValue -= maxwidth;
		
					var timer3 = setTimeout(function () {
						flagleft = true;
					}, 500);
					
					elementsList.animate({ left : currentLeftValue + "px"}, 1000);
	
					counterslider--;
		
				} else {
		
				flagleft = false;
				var lilast = document.querySelectorAll('.carousel-element')[0];
				list.appendChild(lilast);
				elementsList.animate({ left : minimumOffset + maxwidth + "px"}, 0);
				elementsList.animate({ left : minimumOffset + "px"}, 1000);
		
				var timer2 = setTimeout(function () {
					flagleft = true;
				}, 1000);
				
				}
			}

		}, 5000);
	}

	timer();















	var leftarrow = $('.slider-list-detail-for-hom-page-nav-left');
	var rightarrow = $('.slider-list-detail-for-hom-page-nav-right');
	var detail_slider_list = $('.slider-list-detail-for-hom-page-carousel-list');
	
    var leftvalue = 0;
    var detail_slider_slids = document.querySelectorAll('.element-slider-list-detail-for-hom-page');
	var ditail_slider_counter = detail_slider_slids.length;
	var maximumOffset = 0;



	var flagright = true;
	var flagleft = true;

	if ( ditail_slider_counter <= 1){
		rightarrow.css("display", "none");
	}

	
	leftarrow.click(function() {

		var detail_slid_width_now = $('.slider-list-detail-for-hom-page').width() * 0.25;
		var minofset = - ((ditail_slider_counter - 4) * detail_slid_width_now);

		if (flagright){
		
			if (leftvalue != maximumOffset) {

				flagright = false;
				leftvalue += detail_slid_width_now;

				var timer0 = setTimeout(function () {
					flagright = true;
				}, 500);

				detail_slider_list.animate({ left : leftvalue + "px"}, 500);
				detail_slid_counter++;


				rightarrow.css("display", "block");
				if (0 == detail_slid_counter){
					leftarrow.css("display", "none");
				}
			}else{
				leftarrow.css('display', 'none')
			}
		}
	});
	




	rightarrow.click(function() {

		var detail_slid_width_now = $('.slider-list-detail-for-hom-page').width() * 0.25;
		var minofset = - ((ditail_slider_counter - 4) * detail_slid_width_now);

		if (flagleft){
			if (leftvalue != minofset) {

				flagleft = false;
				leftvalue -= detail_slid_width_now;

				var timer3 = setTimeout(function () {
					flagleft = true;
				}, 500);

				detail_slider_list.animate({ left : leftvalue + "px"}, 500);

				detail_slid_counter--;


				leftarrow.css("display", "block");
				if (ditail_slider_counter - 4 == detail_slid_counter * (-1)){
					rightarrow.css("display", "none");
				}

		    }else{
				rightarrow.css("display", "none");
			}
		}
	});















	});
