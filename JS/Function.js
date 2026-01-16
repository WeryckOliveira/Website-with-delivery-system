$(function(){
    $(document).ready(function(){
        $('.nav-icon').click(function(){
        $(this).toggleClass('open');
    });
    }); 

    $(".nav-icon").click(function(){
        $(".menu-mobile ul").slideToggle();
    });

    $(".menu-mobile a").click(()=>{
        $(".menu-mobile ul").fadeOut();
        $(".nav-icon").removeClass('open');
    })

    $(".menu-mobile,.add,#cart .container,.aCart").click(()=>{
        return false;
    });
h
    $("html,body").click(()=>{
        $(".menu-mobile ul").fadeOut();
        $(".nav-icon").removeClass('open');
        $("#cart").fadeOut();
    });

    $("a.offset").click(function(){
        let href = $(this).attr('href');
        let offset = $(href).offset().top;

        $("html,body").animate({'scrollTop':offset});
    });

    $(".chamada a").click(function(){
        let href = $(this).attr('href');
        let offset = $(href).offset().top;

        $("html,body").animate({'scrollTop':offset});
    });

    $(window).scroll(function(){
        var winHeight = $(window).scrollTop();

        if(winHeight >  500){
            $(".return").css('cursor','pointer');
            $(".return").css('opacity','1');
        }else{
            $(".return").css('opacity','0');
            $(".return").css('cursor','auto');
        }
    })

    //slide

    var i = 0;
    var imgs = $(".slides img");

    $(imgs).css('display','none');
    $(imgs).eq(i).css('display','inline-block');
    setInterval(function(){
        $(imgs).eq(i).fadeOut(1500,function(){
            i++
        if(i == 3){
            i = 0;
        }

        $(imgs).eq(i).fadeIn(1500);
        })
    },10000)
    

    //menu

    var options = $(".type");
    var menuNumber = 0
    var viewMenu = $(".view");

    $(viewMenu).css('display','none')
    $(viewMenu).eq(menuNumber).css('display','inline-block')

    options.eq(0).find("button").addClass("selected");

    $(options).click(function(){
        $(options).find("button").removeClass("selected");
        $(this).find("button").addClass("selected");
        $(viewMenu).slideUp();
        menuNumber = $(this).index();
        $(viewMenu).eq(menuNumber).slideDown();
    });

    var mobileLeft = $(".mobile-left");
    var mobileRight = $(".mobile-right");

    $(mobileRight).click(function(){
        $(viewMenu).slideUp();
        if(menuNumber == 3){
            menuNumber -= 1;
        }
        $(viewMenu).slideUp();
        menuNumber += 1;
        $(viewMenu).eq(menuNumber).slideDown();
    });

    $(mobileLeft).click(function(){
        $(viewMenu).slideUp();
        if(menuNumber == 0){
            menuNumber += 1;
        }
        $(viewMenu).slideUp();
        menuNumber -= 1;
        $(viewMenu).eq(menuNumber).slideDown();
    })

    //less more buttons
    
    var buttonLess = $(".less");
    var buttonMore = $(".more");
    var number = $(".number");
    var amount = $(".amount");
    var value = $(amount).html();

    $(buttonLess).click(function(){
        $(this).closest(number).find(amount)[0].innerHTML -= 1;
        var value = $(this).closest(number).find(amount).html();

        if(value == -1){
            value = 0
            $(this).closest(number).find(amount)[0].innerHTML++;
        }
    })

    $(buttonMore).click(function(){
        $(this).closest(number).find(amount)[0].innerHTML++;
        var value = $(this).closest(number).find(amount).html();

        if(value == 11){
            value = 10
            $(this).closest(number).find(amount)[0].innerHTML -= 1;
        }
    })

    //cart


    function checkCart(){
            var y = 0;

        for(let i = 0; i < 5; i++){
            var check = $(".view").eq(y).find(".option").eq(i).find(amount).html();
            var item = $(".view").eq(y).find(".option").eq(i).find("p").html();
            var price = $(".view").eq(y).find(".option").eq(i).find("> span").html();
            var myCart = document.getElementById("my-cart");
            var cartItem = $(myCart).find("input[type='hidden']").val();

            if(check != 0  && check != undefined){
                $(myCart).prepend("<li><input min='1' max='10' type='number' value=" + check + ">" + "<input type='hidden' value='" + item + "'>" + "<p class='item'>" + item + "</p><span>" + price + "</span><button><i class='fas fa-trash-alt'></i><p>Remove</p></button></li>");
            }


            if(y == 4){
                i = 5;
            }

            if(i == 4){
                y++;
                i = -1;
            }

        }
        
    }

    var aCart = $(".aCart");
    var cartWraper = $("#cart");
    var exitCart = $("#exit");
    var empty = $(".empty");
    var total = $("#total");
    var initial = 0;


    function save(){
        let ulLength = $("#my-cart").find("li").length;
        if(ulLength >= 0){
            var storage = $("#my-cart").html();
            sessionStorage.cart = storage;
        }
    }

    function cartOpen(){

        $(cartWraper).fadeIn();

        $("#my-cart").find("button").click(function(){
            $(this).closest("li").remove();
            calcValue(0);
            save();
        });

        save();
    }

    function calcValue(initial){
        var liLength = $("#cart").find("li").length;

        if(liLength == 0){
            $(empty).css('display','block');
            $(total).css('display','none');
            $("#total").find("span").html("$0,00");

            $(".cart-number").css('background','transparent')
            $(".cart-number").html("");
        }else{
            $(empty).css('display','none');
            $(total).css("display",'inline-block')

            $(".cart-number").css('background','#c62828')
            $(".cart-number").html(liLength);
        }

        for(let i = 0; i < liLength; i++){
        var priceCart = $("#cart").find("li").eq(i).find("> span").html();
        var quant = $("#my-cart").find("input[type='number']").eq(i).val();
        var split = priceCart.split("$");
        var replace = split[1].toString().replace(",", ".");
        var math = Number(replace);
        var mult = math * quant;
        var finalV = initial += mult;
        var soma = $("#total").find("span").html("$" + finalV + ",00");
        }
    }

    $(aCart).click(()=>{
        calcValue(0);
        cartOpen();
    });

    $(".add").click(function(){
        checkCart();
        calcValue(0);
        cartOpen();
        
        $(".view").find(".amount").html("0");
    });

    $(document).on('keyup','#my-cart input[type="number"]',function(){
        calcValue(0);
        checkCalc(0);
        checkNumber();

        let numberVal = $(this).val();
        $(this).attr("value",numberVal);
        save();
    });

    $(document).on('change','#my-cart input[type="number"]',function(){
        calcValue(0);
        checkCalc(0);
        checkNumber();

        let numberVal = $(this).val();
        $(this).attr("value",numberVal);
        save();
    });

    $(exitCart).click(function(){
        $(cartWraper).fadeOut();
    });
    

    //Checkout

    const ulLength = $("#my-cart").find("li").length;
    if(ulLength == 0){
        $("#my-cart").html(sessionStorage.cart);
        calcValue(0);

    }
    
    var myStorage = $("#return-storage").find("ul");
    $(myStorage).html(sessionStorage.cart);
    $("input[name='produtos']").val(sessionStorage.cart);
    for(let y = 0; y < $(myStorage).find("li").length; y++){
    var checkItem = $(myStorage).find("li").eq(y).find("p.item").html();
    var checkAmount = $(myStorage).find("li").eq(y).find("input[type='number']").val();
    var checkPrice = $(myStorage).find("li").eq(y).find("span").html();
    var checkoutCart = $("#check-cart");

    $(checkoutCart).append("<li><div class='item'>" + checkItem + "<input min='1' max='10' type='number' value='" + checkAmount + "'></div><span>" + checkPrice + "</span><button>X</button</li>");
    };

    $("#check-cart li").find("button").click(function(e){
        e.preventDefault();
        let liIndex = $(this).closest("li").index();
        $(this).closest("li").remove();
        $("#return-storage").find("li").eq(liIndex).remove();
        checkCalc(0);
        calcValue(0);
        checkNumber();
        checkSave();
    });

    checkCalc(0);
    checkNumber();

    function checkSave(){
        let ulLength = $("#return-storage").find("li").length;
        if(ulLength >= 0){
            var storage = $("#return-storage ul").html();
            sessionStorage.cart = storage;
            $("input[name='produtos']").val(storage);
        }
    }

    function checkNumber(){
        var liLength = $("#check-cart").find("li").length;
        $(".check-payment > span").html(liLength);
    }

    function checkCalc(initial){
        var liLength = $("#check-cart").find("li").length;

        for(let i = 0; i < liLength; i++){
            var priceCart = $("#check-cart").find("li").eq(i).find("> span").html();
            var quant = $("#check-cart").find("input[type='number']").eq(i).val();
            var split = priceCart.split("$");
            var replace = split[1].toString().replace(",", ".");
            var math = Number(replace);
            var mult = math * quant;
            var finalV = initial += mult;
            var soma = $("#check-total").find("span").html("$" + finalV + ",00");
            $("input[name='total']").val(finalV);
            }

            if(liLength == 0){
                $("#check-total").find("span").html("$0,00");
            };
    };

    $(document).on('keyup','#check-cart input[type="number"]',function(){
        checkCalc(0);
        calcValue(0);
        checkNumber();
        
        var liIndex = $(this).closest("li").index();
        let numberVal = $(this).val();
        $(this).attr("value",numberVal);
        $("#return-storage").find("li").eq(liIndex).find("input[type='number']").attr("value",numberVal);

        checkSave();
    });

    $(document).on('change','#check-cart input[type="number"]',function(){
        checkCalc(0);
        calcValue(0);
        checkNumber();

        var liIndex = $(this).closest("li").index();
        let numberVal = $(this).val();
        $(this).attr("value",numberVal);
        $("#return-storage").find("li").eq(liIndex).find("input[type='number']").attr("value",numberVal);

        checkSave();
    });

});










