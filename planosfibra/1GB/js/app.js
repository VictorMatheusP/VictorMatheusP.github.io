const btnNext = document.querySelector("form .btn .next");
const btnPrev = document.querySelector("form .btn .prev");
const indicador = document.querySelector(".indicador .line span");
const indicadorItems = document.querySelectorAll(".indicador .bola");
const indicatorItemsChecked = document.querySelectorAll(".indicador .bola .check");
const indicatorItemsCircle = document.querySelectorAll(".indicador .bola .circle");
const form = document.querySelector("form");
const allTab = document.querySelectorAll("form .tab");
let i = 0;

allTab[i].classList.add("show");
indicador.style.width = i;
indicadorItems[i].classList.add("active");

if (i === 0) {
    btnPrev.style.display = "none";
} else {
    btnPrev.style.display = "block";
}

btnNext.addEventListener("click", function() {
    const allInputPerTab = allTab[i].querySelectorAll("input");

    for (let j = 0; j < allInputPerTab.length; j++) {
        allInputPerTab[j].addEventListener("input", function() {
            allInputPerTab[j].style.borderColor = "#ddd";
        });
    }

    /*para avançar os campos alterar o || por && */
    for (let j = 0; j < allInputPerTab.length; j++) {
        let formaPagamento = document.querySelector('input[name=forma_pagamento]:checked').value;
        if(i === allTab.length - 1 && formaPagamento == 'boleto'){
        }else{
            if (allInputPerTab[j].value === "" || !allInputPerTab[j].checkValidity()) {
                allInputPerTab[j].style.borderColor = "red";
                return false;
            }else {
                allInputPerTab[j].style.borderColor = "#ddd";
            }
        } 
    }

    indicatorItemsChecked[i].classList.remove("stepUnchecked");
    indicatorItemsCircle[i].classList.add("circleInvisible");

    i += 1;

    if (i >= allTab.length) {
        //form.submit();
        iniciaModal("modal-form");
        Finalizar();
        i = 2;
        return false;
    } else {
        for (let j = 0; j < allTab.length; j++) {
            // Alteração para aparecer o check
        
            allTab[j].classList.remove("show");
            indicadorItems[j].classList.remove("active");
        }

        for (let j = 0; j < i; j++) {
            indicadorItems[j].classList.add("active");
        }
        

        allTab[i].classList.add("show");
        indicador.style.width = `${i * 50}%`;
        indicadorItems[i].classList.add("active");
    }


    if (i === 0) {
        btnPrev.style.display = "none";
    } else {
        btnPrev.style.display = "block";
    }

    if (i === allTab.length - 1) {
        btnNext.innerHTML = "Finalizar"; 
    } else {
        btnNext.innerHTML = "Avançar &rarr;";
    }
});

btnPrev.addEventListener("click", function() {
    i -= 1;

    indicatorItemsChecked[i].classList.add("stepUnchecked");
    indicatorItemsCircle[i].classList.remove("circleInvisible");

    for (let j = 0; j < allTab.length; j++) {
        allTab[j].classList.remove("show");
        indicadorItems[j].classList.remove("active");
    }

    for (let j = 0; j < i; j++) {
        indicadorItems[j].classList.add("active");
    }

    allTab[i].classList.add("show");
    indicador.style.width = `${i * 50}%`;
    indicadorItems[i].classList.add("active");

    if (i === 0) {
        btnPrev.style.display = "none";
    } else {
        btnPrev.style.display = "block";
    }

    if (i === allTab.length - 1) {
        btnNext.innerHTML = "Finalizar";
    } else {
        btnNext.innerHTML = "Avançar &rarr;";
    }
});

function mostraDadosDebito() {
    document.getElementById('idDadosDebito').style.display = 'block';
    document.getElementById('idDadosBoleto').style.display = 'none';
}

function esconderDadosBoleto() {
    document.getElementById('idDadosDebito').style.display = 'none';
    document.getElementById('idDadosBoleto').style.display = 'block';
}

// Efeito label 
$(window).load(function() {
    $(".col-3 input").val("");

    $(".input-effect input").focusout(function() {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    });
});

/*Modal*/
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
      modal.classList.add("mostrar");
      modal.addEventListener("click", function (evento) {
        if (evento.target.id == "fechar") {
          modal.classList.remove("mostrar");
        }
      });
    }
  }
  

    // const btclick = document.querySelector(".btclick");
    // btclick.addEventListener("click", function () {
    //   iniciaModal("modal-form");
    // });
  
     //iniciaModal("modal-form");