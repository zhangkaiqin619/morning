
//菜单栏的显示
$(function(){
	$("#content_menu_wrap").children().hover(function(){
		$(this).css("background","#e62318");
		$(this).children(".item").children("a").css("color","#fff");
		$(this).children(".content_menu_content").css("border","1px solid #F0F0F0").show();
	},function(){
		$(this).children(".item").children("a").css("color","#424242");
		$(this).css("background","none");
		$(this).children(".content_menu_content").css("border","0px solid #F0F0F0").hide();
	})
})

window.onload = function () {
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {

                if (els[i].className.indexOf(cls + ' ') >=0 || els[i].className.indexOf(' ' + cls + ' ') >=0 || els[i].className.indexOf(' ' + cls) >=0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }
	
    var table = document.getElementById('cartTable'); // 购物车表格
    var selectInputs = document.getElementsByClassName('check'); // 所有勾选框
    var checkAllInputs = document.getElementsByClassName('check-all') // 全选框
    var tr = table.children[1].rows; //行
    var selectedTotal = document.getElementById('selectedTotal'); //已选商品数目容器
    var priceTotal = document.getElementById('priceTotal'); //总计
	var cartTotalPrice = document.getElementById('cartTotalPrice'); //总计
    var deleteAll = document.getElementById('deleteAll'); // 删除全部按钮
    var selected = document.getElementById('selected'); //已选商品
    var foot = document.getElementById('foot');
	

    // 更新总数和总价格，已选浮层
    function getTotal() {
		var seleted = 0;
		var price = 0;
		var HTMLstr = '';
		for (var i = 0, len = tr.length; i < len; i++) {
			if (tr[i].getElementsByTagName('input')[0].checked) {
				tr[i].className = 'on';
				seleted += parseInt(tr[i].getElementsByTagName('input')[1].value);
				price += parseFloat(tr[i].cells[4].innerHTML);
			}
			else {
				tr[i].className = '';
			}
		}	
		selectedTotal.innerHTML = seleted;
		priceTotal.innerHTML = price.toFixed(2);
		cartTotalPrice.value=price.toFixed(2);
		if (seleted == 0) {
			foot.className = 'foot';
		}
	}
    // 计算单行价格
    function getSubtotal(tr) {
        var cells = tr.cells;
        var price = cells[2]; //单价
        var subtotal = cells[4]; //小计td
        var countInput = tr.getElementsByTagName('input')[1]; //数目input
        var span = tr.getElementsByTagName('span')[1]; //-号
        //写入HTML
        subtotal.innerHTML = (parseInt(countInput.value) * parseFloat(price.innerHTML)).toFixed(2);
        //如果数目只有一个，把-号去掉
        if (countInput.value == 1) {
            span.innerHTML = '';
        }else{
            span.innerHTML = '-';
        }
    }

    // 点击选择框
    for(var i = 0; i < selectInputs.length; i++ ){
        selectInputs[i].onclick = function () {
            if (this.className.indexOf('check-all') >= 0) { //如果是全选，则吧所有的选择框选中
                for (var j = 0; j < selectInputs.length; j++) {
                    selectInputs[j].checked = this.checked;
                }
            }
            if (!this.checked) { //只要有一个未勾选，则取消全选框的选中状态
                for (var i = 0; i < checkAllInputs.length; i++) {
                    checkAllInputs[i].checked = false;
                }
            }
            getTotal();//选完更新总计
        }
    }

    //为每行元素添加事件
    for (var i = 0; i < tr.length; i++) {
        //将点击事件绑定到tr元素
        tr[i].onclick = function (e) {
            var e = e || window.event;
            var el = e.target || e.srcElement; //通过事件对象的target属性获取触发元素
            var cls = el.className; //触发元素的class
            var countInout = this.getElementsByTagName('input')[1]; // 数目input
            var value = parseInt(countInout.value); //数目
            var cartId = $(this).find(".count-input").attr("data-cartId"); //数目
            //通过判断触发元素的class确定用户点击了哪个元素
            switch (cls) {
                case 'add': //点击了加号
                    countInout.value = value + 1;
                    getSubtotal(this);
                    $.ajax({ 
							type:'post', 
							url:baselocation+'/cart/update', 
							data:{"cartId":cartId,"count":countInout.value}
					}); 
                    break;
                case 'reduce': //点击了减号
                    if (value > 1) {
                        countInout.value = value - 1;
                        getSubtotal(this);
                        $.ajax({ 
							type:'post', 
							url:baselocation+'/cart/update', 
							data:{"cartId":cartId,"count":countInout.value}
						}); 
                    }
                    break;
                case 'delete': //点击了删除 
					swal({   
						title: "删除商品",   
						text: "确定删除此商品吗？",  
						type: "warning",   
						showCancelButton: true,   
						confirmButtonColor: "#DD6B55",   
						confirmButtonText: "删除",   
						closeOnConfirm: false 
					}, function(){ 
					    $.ajax({ 
							type:'post', 
							url:baselocation+'/cart/delete', 
							data:{"cartId":cartId}
						}); 
						swal({
							title: "删除成功!",
							text: "总有更好的商品在等着你.",
							type: "success"},
						function(){
							window.location.reload();
						});
					});
                    break;
            }
            getTotal();
        }
        // 给数目输入框绑定keyup事件
        tr[i].getElementsByTagName('input')[1].onkeyup = function () {
            var val = parseInt(this.value);
            if (isNaN(val) || val <= 0) {
                val = 1;
            }
            if (this.value != val) {
                this.value = val;
            }
            getSubtotal(this.parentNode.parentNode); //更新小计
            getTotal(); //更新总数
        }
    }
	console.log("\u767e\u5ea6\u641c\u7d22\u3010\u7d20\u6750\u5bb6\u56ed\u3011\u4e0b\u8f7d\u66f4\u591aJS\u7279\u6548\u4ee3\u7801");
    // 默认全选
    checkAllInputs[0].checked = true;
    checkAllInputs[0].onclick();
}