function CreateDetailForSlider (mas, parent, data){

    var Panel = document.querySelector(parent);

    var ElementPanel = document.createElement('li');
    ElementPanel.setAttribute('class', 'element-slider-similar-detail');
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





$(document).ready(function() {


	var detail_slid_width_last;
	var FlagAddSlideDetail = false;

	var str = {
		artikle: decodeURIComponent(window.location.hash.replace('#/detail/', ''))
				};
				
	fetch('/api/postquerysimilardetail', {
		method : 'POST',
		body: JSON.stringify(str),
		headers: {
			'Content-Type': 'application/json',
		}
	})
	.then(res => res.json())
	.then(data => {

		var ContainerSlider = document.querySelector('.similar-detail');

		if (data.queryDetai.length > 0){

			ContainerSlider.style.display = 'block';
			for ( var i = 0; i < data.queryDetai.length; i++){
				CreateDetailForSlider(data.queryDetai[i], '.slider-similar-detail-carousel-list', data.queryLabel);
			}
			FlagAddSlideDetail = true;
		} else {
			document.querySelector('.page-detail').removeChild(ContainerSlider);
		}



		if ($('body').width() <= 730){

			if ($('body').width() <= 505){

				detail_slid_width_last = $('.slider-similar-detail').width() * (1/2);
    			$('.element-slider-similar-detail').css('width', detail_slid_width_last +'px');
			} else {

				detail_slid_width_last = $('.slider-similar-detail').width() * (1/3);
    			$('.element-slider-similar-detail').css('width', detail_slid_width_last +'px');
			}
		} else {

			detail_slid_width_last = $('.slider-similar-detail').width() * 0.25;
    		$('.element-slider-similar-detail').css('width', detail_slid_width_last +'px');
		}

	})

    //size image in slider



	var detail_slid_counter = 0;

	

	var element_slider_deteil_all_images = $('.carousel-hider-slidercontainer-images-detai').width() * 0.25;
    $('.carousel-element-images-detai').css('width', element_slider_deteil_all_images +'px');

	var slider_all_image_detail_counter = 0;







    window.onresize = function() {




		if ($('body').width() <= 730){

			if ($('body').width() <= 505){

				var detail_slid_width_now = $('.slider-similar-detail').width() * (1/2);
				$('.element-slider-similar-detail').css('width', detail_slid_width_now +'px');

				if (detail_slid_width_last - detail_slid_width_now != 0){

					leftvalue = detail_slid_counter * detail_slid_width_now;
					minofset = - ((ditail_slider_counter - 2) * detail_slid_width_now);

					detail_slider_list.animate({ left : 0 + "px"}, 0);
					detail_slider_list.animate({ left : leftvalue + "px"}, 0);

				}
			} else {

				var detail_slid_width_now = $('.slider-similar-detail').width() * (1/3);
				$('.element-slider-similar-detail').css('width', detail_slid_width_now +'px');

				if (detail_slid_width_last - detail_slid_width_now != 0){

					leftvalue = detail_slid_counter * detail_slid_width_now;
					minofset = - ((ditail_slider_counter - 3) * detail_slid_width_now);

					detail_slider_list.animate({ left : 0 + "px"}, 0);
					detail_slider_list.animate({ left : leftvalue + "px"}, 0);

				}
			
			}

		} else {

			var detail_slid_width_now = $('.slider-similar-detail').width() * 0.25;
			$('.element-slider-similar-detail').css('width', detail_slid_width_now +'px');

			if (detail_slid_width_last - detail_slid_width_now != 0){

				leftvalue = detail_slid_counter * detail_slid_width_now;
				minofset = - ((ditail_slider_counter - 4) * detail_slid_width_now);

				detail_slider_list.animate({ left : 0 + "px"}, 0);
				detail_slider_list.animate({ left : leftvalue + "px"}, 0);

			}
		}



		var element_slider_deteil_all_images_now = $('.carousel-hider-slidercontainer-images-detai').width() * 0.25;
		$('.carousel-element-images-detai').css('width', element_slider_deteil_all_images_now +'px');

		if (detail_slid_width_last - element_slider_deteil_all_images_now != 0){

			leftvalue_slider_deteil_all_images = slider_all_image_detail_counter * element_slider_deteil_all_images_now;
            minofset_slider_all_image = - ((slider_all_image_detail_counter - 4) * element_slider_deteil_all_images_now);

			slider_deteil_all_images_list.animate({ left : 0 + "px"}, 0);
			slider_deteil_all_images_list.animate({ left : leftvalue_slider_deteil_all_images + "px"}, 0);

		}
    }
    //

	














	var leftarrow = $('.slider-similar-detail-nav-left');
	var rightarrow = $('.slider-similar-detail-nav-right');
	var detail_slider_list;
	
    var leftvalue = 0;
    var detail_slider_slids;
	var ditail_slider_counter;
	var maximumOffset = 0;



	var flagright = true;
	var flagleft = true;


	var timerId = setInterval( function() {

		if (FlagAddSlideDetail == true){

			detail_slider_list = $('.slider-similar-detail-carousel-list');
			detail_slider_slids = document.querySelectorAll('.element-slider-similar-detail');
			ditail_slider_counter = detail_slider_slids.length;

			if ( ditail_slider_counter > 4){
				rightarrow.css("display", "block");
			}

			clearInterval(timerId);
		}
	},0)


	
	leftarrow.click(function() {

		var detail_slid_width_now = $('.slider-similar-detail').width() * 0.25;
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

		var detail_slid_width_now = $('.slider-similar-detail').width() * 0.25;
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









	var left_nav = $('.slider-nav-images-detai-left');
	var right_nav = $('.slider-nav-images-detai-right');
	var slider_deteil_all_images_list = $('.carousel-list-images-detai');
	
    var leftvalue_slider_deteil_all_images = 0;
    var slider_deteil_all_images_slids = document.querySelectorAll('.carousel-element-images-detai');
	var slider_deteil_all_images_counter = slider_deteil_all_images_slids.length;
	var maximumOffset = 0;



	var flagright2 = true;
	var flagleft2 = true;

	if ( slider_deteil_all_images_counter > 4){
		right_nav.css("display", "block");
	}

	left_nav.click(function() {

		var element_slider_deteil_all_images_now = $('.carousel-hider-slidercontainer-images-detai').width() * 0.25;
		var minofset_slider_all_image = - ((slider_deteil_all_images_counter - 4) * element_slider_deteil_all_images_now);

		if (flagright2){
		
			if (leftvalue_slider_deteil_all_images != maximumOffset) {

				flagright2 = false;
				leftvalue_slider_deteil_all_images += element_slider_deteil_all_images_now;

				var timer0 = setTimeout(function () {
					flagright2 = true;
				}, 500);

				slider_deteil_all_images_list.animate({ left : leftvalue_slider_deteil_all_images + "px"}, 500);
				slider_all_image_detail_counter++;


				right_nav.css("display", "block");
				if (0 == slider_all_image_detail_counter){
					left_nav.css("display", "none");
				}
			}else{
				left_nav.css('display', 'none')
			}
		}
	});
	




	right_nav.click(function() {

		var element_slider_deteil_all_images_now = $('.carousel-hider-slidercontainer-images-detai').width() * 0.25;

		var minofset_slider_all_image = - ((slider_deteil_all_images_counter - 4) * element_slider_deteil_all_images_now);

		if (flagleft2){

			if (leftvalue_slider_deteil_all_images != minofset_slider_all_image) {

				flagleft2 = false;
				leftvalue_slider_deteil_all_images -= element_slider_deteil_all_images_now;

				var timer3 = setTimeout(function () {
					flagleft2 = true;
				}, 500);

				slider_deteil_all_images_list.animate({ left : leftvalue_slider_deteil_all_images + "px"}, 500);

				slider_all_image_detail_counter--;


				left_nav.css("display", "block");
				if (slider_deteil_all_images_counter - 4 == slider_all_image_detail_counter * (-1)){
					right_nav.css("display", "none");
				}

		    }else{
				right_nav.css("display", "none");
			}
		}
	});


	// window.onclick=function(e){
	// 	var elem = e ? e.target : window.event.srcElement;
	// 	alert(elem.id)
	// }
	
});
