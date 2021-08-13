$(function(){

    //hover menu
    $("nav li").eq(0).hover(()=>{
        $("nav i").eq(0).css('color','#d4e157');
        $("nav li a").eq(0).css('color','white');
    },function(){
        $("nav i").eq(0).css('color','#717171');
        $("nav li a").eq(0).css('color','#717171');
    });

    $("nav li").eq(1).hover(()=>{
        $("nav i").eq(1).css('color','#6a1b9a');
        $("nav li a").eq(1).css('color','white');
    },function(){
        $("nav i").css('color','#717171');
        $("nav li a").css('color','#717171');
    });

    $("nav li").eq(2).hover(()=>{
        $("nav i").eq(2).css('color','#1565c0');
        $("nav li a").eq(2).css('color','white');
    },function(){
        $("nav i").css('color','#717171');
        $("nav li a").css('color','#717171');
    });

    $("nav li").eq(3).hover(()=>{
        $("nav i").eq(3).css('color','#b71c1c');
        $("nav li a").eq(3).css('color','white');
    },function(){
        $("nav i").css('color','#717171');
        $("nav li a").css('color','#717171');
    });

    $("nav li").eq(4).hover(()=>{
        $("nav i").eq(4).css('color','#fb8c00');
        $("nav li a").eq(4).css('color','white');
    },function(){
        $("nav i").css('color','#717171');
        $("nav li a").css('color','#717171');
    });

    $("nav li").eq(5).hover(()=>{
        $("nav i").eq(5).css('color','#76ff03');
        $("nav li a").eq(5).css('color','white');
    },function(){
        $("nav i").css('color','#717171');
        $("nav li a").css('color','#717171');
    });

    //menu select

    $("nav ul li").eq(1).click(function(){
        $("nav ul li").eq(0).removeClass("selected");
        $("nav ul li").eq(1).addClass("selected2");
    });

    $("nav ul li").eq(0).click(function(){
        $("nav ul li").eq(1).removeClass("selected2");
        $("nav ul li").eq(0).addClass("selected");
    });


    /***/

    $(".search i").eq(0).click(function(){
        $(".search i").eq(0).css('display','none');
        $(".search i").eq(1).css('display','inline-block');
        $(".search input").css('width','200px');
        $(".search input").css('padding-left','20px');
    })

    $(".search i").eq(1).click(function(){
        $(".search i").eq(1).css('display','none');
        $(".search i").eq(0).css('display','inline-block');
        $(".search input").css('width','0');
        $(".search input").css('padding-left','0');
    })


    $(".menu i").click(function(){
        $("section.aside-left").css('left','0');
        $("section.aside-left").css('display','block');
        $("section.aside-left").css('position','absolute');
        $("section.aside-left").css('left','0');
        $("section.aside-left").css('top','0');
        $("section.aside-left").css('width','50%');
    })

    $(".arrow").click(function(){
        $("section.aside-left").css('left','0');
        $("section.aside-left").css('display','block');
        $("section.aside-left").css('position','absolute');
        $("section.aside-left").css('left','-200px');
        $("section.aside-left").css('top','0');
        $("section.aside-left").css('width','23%');
    });

    $("nav ul li").eq(1).click(function(){
        $("section.main").css('display','none');
        $("section.requests").css('display','block');
    });

    $("nav ul li").eq(0).click(function(){
        $("section.requests").css('display','none');
        $("section.main").css('display','block');
    });


    //search

    var $input = $("input[type='search']"),
    $content = $(".requests"),
    $results,
    currentClass = "current",
    offsetTop = 50,
    currentIndex = 0;

  function jumpTo() {
    if ($results.length) {
      var position,
        $current = $results.eq(currentIndex);
      $results.removeClass(currentClass);
      if ($current.length) {
        $current.addClass(currentClass);
        position = $current.offset().top - offsetTop;
        window.scrollTo(0, position);
      }
    }
  }

  $input.on("input", function() {
  	var searchVal = this.value;
    $content.unmark({
      done: function() {
        $content.mark(searchVal, {
          separateWordSearch: true,
          done: function() {
            $results = $content.find("mark");
            currentIndex = 0;
            jumpTo();
          }
        });
      }
    });
  });

   
    $(".search i").click(function(){
        $("input[type='search']").val("");
        $content.unmark();
    })


    //requests

    var bdLength = $(".storage-bd").length;

    for(let i = 0; i < bdLength; i++){
        let id = $(".storage-bd").eq(i).find("div").eq(0).html();
        let nome = $(".storage-bd").eq(i).find("div").eq(1).html();
        let telefone = $(".storage-bd").eq(i).find("div").eq(2).html();
        let horario = $(".storage-bd").eq(i).find("div").eq(3).html();
        let total = $(".storage-bd").eq(i).find("div").eq(4).html();
        let rua = $(".storage-bd").eq(i).find("div").eq(5).html();
        let numero = $(".storage-bd").eq(i).find("div").eq(6).html();
        let cep = $(".storage-bd").eq(i).find("div").eq(7).html();
        let email = $(".storage-bd").eq(i).find("div").eq(8).html();
        let table = $(".client");

        $(table).append("<tr><td class='ID'>" + id + "</td><td>" + nome + "</td><td>" + telefone + "</td><td>" + horario + "</td><td class='my-status'><span class='status-p'>Pendente</span></td><td>" + total + "</td></tr>")
    }

    $(".client tr").click(function(){
        let index = $(this).index();
        let clientData = $(".client-data");
        let clientDataWraper = $(".client-data-wraper");
        let id = $(".storage-bd").eq(index).find("div").eq(0).html();
        let nome = $(".storage-bd").eq(index).find("div").eq(1).html();
        let telefone = $(".storage-bd").eq(index).find("div").eq(2).html();
        let horario = $(".storage-bd").eq(index).find("div").eq(3).html();
        let total = $(".storage-bd").eq(index).find("div").eq(4).html();
        let rua = $(".storage-bd").eq(index).find("div").eq(5).html();
        let numero = $(".storage-bd").eq(index).find("div").eq(6).html();
        let cep = $(".storage-bd").eq(index).find("div").eq(7).html();
        let email = $(".storage-bd").eq(index).find("div").eq(8).html();
 
        //dados
        $(clientData).fadeIn();
        $(clientDataWraper).fadeIn();
        $(".blue").addClass("blue-vivacity");
        $(clientData).find("h2").html(nome + " #" + id);
        $(clientData).find(".dados").find("div").eq(0).html("<h2>Email</h2><p>" + email + "</p>");
        $(clientData).find(".dados").find("div").eq(1).html("<h2>Telefone</h2><p>" + telefone + "</p>");
        $(clientData).find(".dados").find("div").eq(2).html("<h2>Local</h2><p>" + cep + "</p>" + "<p>" + rua + "</p>" + "<p>" + numero + "</p>");

        //items

        $(".table-item tr").remove();
        var items = $(".storage-bd").eq(index).find("li");
        var liLength = $(items).length;

        for(let y = 0; y < liLength; y++){
            let itemName = $(items).eq(y).find(".item").html();
            let itemPrice = $(items).eq(y).find("span").html();
            let itemQuant = $(items).eq(y).find("input[type='number']").val();
    
            $(".table-item").append("<tr><td>" + itemQuant + "</td><td>" + itemName + "</td><td>" + itemPrice + "</td></tr>");
        }
        $(".table-item tr:last-of-type").after("<tr class='total'><td>Total</td><td></td><td class='total-num'></td></tr>");
        $(".total-num").html(total + ",00");
    });

    //status

    $(".buttons div").click(function(){
        closeData();
    });

    $(".buttons div").eq(0).click(function(){

        for(let i = 0; i < $(".client tr").length; i++){
            var contentH2 = $(this).closest(".client-data-wraper").find("h2").html();
            var split = contentH2.split("#");
            var myId = $(".ID").eq(i);
            var findId = $(".ID").eq(i).html();
            console.log(split[1])

            if(findId == split[1]){
                $(myId).closest("tr").find("span").removeClass();
                $(myId).closest("tr").find("span").addClass("status-p");
                $(myId).closest("tr").find("span").html("Pendente");
            }
        }

    });

    $(".buttons div").eq(1).click(function(){
        
        for(let i = 0; i < $(".client tr").length; i++){
            var contentH2 = $(this).closest(".client-data-wraper").find("h2").html();
            var split = contentH2.split("#");
            var myId = $(".ID").eq(i);
            var findId = $(".ID").eq(i).html();
            console.log(split[1])

            if(findId == split[1]){
                $(myId).closest("tr").find("span").removeClass();
                $(myId).closest("tr").find("span").addClass("status-x");
                $(myId).closest("tr").find("span").html("Cancelado");
            }
        }
    });

    $(".buttons div").eq(2).click(function(){

        for(let i = 0; i < $(".client tr").length; i++){
            var contentH2 = $(this).closest(".client-data-wraper").find("h2").html();
            var split = contentH2.split("#");
            var myId = $(".ID").eq(i);
            var findId = $(".ID").eq(i).html();
            console.log(split[1])

            if(findId == split[1]){
                $(myId).closest("tr").find("span").removeClass();
                $(myId).closest("tr").find("span").addClass("status-c");
                $(myId).closest("tr").find("span").html("Concluído");
            }
        }
    });
    
    //close modal

    $(".exit").click(function(){
        closeData();
    });

    $(".client-data,client-data-wraper,.client tr").click(function(){
        return false;
    });

    $("html,body").click(function(){
        closeData();
    })

    function closeData(){
        $(".client-data").fadeOut();
        $(".client-data-wraper").fadeOut();
        $(".blue").removeClass("blue-vivacity");
    }

    //storage-status

    $("button.send-status").click(function(){
        for(let i = 0; i < $(".client tr").length; i++){
            var myspan = $(".client tr").eq(i).find(".my-status").html();
            $(".save-status").append(myspan);
        };

        var saveStatus = $(".save-status").html();

        $(".storage-status input").val(saveStatus);
    });

    for(let i = 0; i < $(".client tr").length; i++){
        var bdSts = $(".storage-sts div").find("span").eq(i).html();
        var attrSts = $(".storage-sts div").find("span").eq(i).attr("class")
    
        $(".client tr").eq(i).find(".my-status").html("<span class='" + attrSts + "'>" + bdSts + "</span>");

        if($(".client tr").eq(i).find("span").hasClass("undefined")){
            $(".client tr").eq(i).find(".my-status").html("<span class='status-p'>Pendente</span>");
        };
        console.log(i)
    };

});