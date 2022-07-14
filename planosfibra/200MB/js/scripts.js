let Informacoes = [];
let planos = [
    {
        id: 0,
        identificacao: "NaoEscolhido",
        nome: "Plano Não Encontrado",
        descricao: "Não Se Preocupe, preencha o Formulario e em Breve um de Nossos Consultores entrará em contato para lhe ajudar a escolher a melhor oferta para Você!",
        valorDe: "119,90",
        valor: "99,90",
        informativos: [" Instalação grátis", "60 Mega de upload", "Modem WIFI UP", "Ideal para até 10 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp"]
    },
    {
        id: 1,
        nome: "200 Mega",
        identificacao: "200_mega_99",
        descricao: "Qualidade e estabilidadde pra você trabalhar de casa, jogar online e ver vídeos.",
        valorDe: "119,90",
        valor: "99,90",
        informativos: [" Instalação grátis", "60 Mega de upload", "Modem WIFI UP", "Ideal para até 10 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp"]
    },
    {
        id: 2,
        nome: "400 Mega",
        identificacao: "400_mega_99",
        descricao: "Ainda mais velocidade e superestabilidade pra você trabalhar de casa, jogaronline e ver vídeos, em diversos dispositivos ao mesmo tempo.",
        valorDe: "189,90",
        valor: "99,90",
        informativos: [" Instalação grátis", "200 Mega de upload", "Modem WIFI UP", "Ideal para até 20 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp", "discoverkids.webp", "logo_paramountmais.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp", "oifibra-paramount-icon.png", "oifibra-mtv-icon.webp", "logo-nickjr.webp", "logo_nicklo.webp"]
    },
    {
        id: 3,
        nome: "1 Giga",
        identificacao: "1G_mega_499",
        descricao: "Melhor experiência de conexão pra usar em diversos dispositivos ao mesmo tempo como quiser.",
        valorDe: "519,90",
        valor: "279,90",
        informativos: [" Instalação grátis", "500 Mega de upload", "Modem WIFI UP", "Ideal para até 20 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp", "discoverkids.webp", "logo_paramountmais.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp", "oifibra-paramount-icon.png", "oifibra-mtv-icon.webp", "logo-nickjr.webp", "logo_nicklo.webp"]

    },
    {
        id: 4,
        nome: "400 Mega",
        identificacao: "400_mega_99",
        descricao: "Ainda mais velocidade e superestabilidade pra você trabalhar de casa, jogaronline e ver vídeos, em diversos dispositivos ao mesmo tempo.",
        valorDe: "189,90",
        valor: "119,90",
        informativos: [" Instalação grátis", "200 Mega de upload", "Modem WIFI UP", "Ideal para até 20 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp", "discoverkids.webp", "logo_paramountmais.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp", "oifibra-paramount-icon.png", "oifibra-mtv-icon.webp", "logo-nickjr.webp", "logo_nicklo.webp"]
    },
    {
        id: 11,
        nome: "200 Mega Empresarial",
        identificacao: "200_mega_99_empresarial",
        descricao: "Qualidade e estabilidadde pra você trabalhar de casa, jogar online e ver vídeos.",
        valorDe: "119,90",
        valor: "99,90",
        informativos: [" Instalação grátis", "60 Mega de upload", "Modem WIFI UP", "Ideal para até 10 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp"]
    },
    {
        id: 12,
        nome: "400 Mega Empresarial",
        identificacao: "400_mega_99_empresarial",
        descricao: "Ainda mais velocidade e superestabilidade pra você trabalhar de casa, jogaronline e ver vídeos, em diversos dispositivos ao mesmo tempo.",
        valorDe: "189,90",
        valor: "99,90",
        informativos: [" Instalação grátis", "200 Mega de upload", "Modem WIFI UP", "Ideal para até 20 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp", "discoverkids.webp", "logo_paramountmais.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp", "oifibra-paramount-icon.png", "oifibra-mtv-icon.webp", "logo-nickjr.webp", "logo_nicklo.webp"]
    },
    {
        id: 13,
        nome: "1 Giga Empresarial",
        identificacao: "1G_mega_499_empresarial",
        descricao: "Melhor experiência de conexão pra usar em diversos dispositivos ao mesmo tempo como quiser.",
        valorDe: "519,90",
        valor: "279,90",
        informativos: [" Instalação grátis", "500 Mega de upload", "Modem WIFI UP", "Ideal para até 20 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp", "discoverkids.webp", "logo_paramountmais.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp", "oifibra-paramount-icon.png", "oifibra-mtv-icon.webp", "logo-nickjr.webp", "logo_nicklo.webp"]

    },
    {
        id: 14,
        nome: "500 Mega",
        identificacao: "500_mega_119",
        descricao: "Ainda mais velocidade e superestabilidade pra você trabalhar de casa, jogaronline e ver vídeos, em diversos dispositivos ao mesmo tempo.",
        valorDe: "189,90",
        valor: "119,90",
        informativos: [" Instalação grátis", "200 Mega de upload", "Modem WIFI UP", "Ideal para até 20 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp", "discoverkids.webp", "logo_paramountmais.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp", "oifibra-paramount-icon.png", "oifibra-mtv-icon.webp", "logo-nickjr.webp", "logo_nicklo.webp"]
    },
    {
        id: 15,
        nome: "500 Mega",
        identificacao: "500_mega_129",
        descricao: "Ainda mais velocidade e superestabilidade pra você trabalhar de casa, jogaronline e ver vídeos, em diversos dispositivos ao mesmo tempo.",
        valorDe: "189,90",
        valor: "129,90",
        informativos: [" Instalação grátis", "200 Mega de upload", "Modem WIFI UP", "Ideal para até 20 dispositivos", "Fixo Ilimitado", "Acesso ao Oi Play", "Canais On Demand", "Canais Ao Vivo"],
        onDemand: ["download.webp", "discoverkids.webp", "logo_paramountmais.webp"],
        aoVivo: ["band.webp", "rn.webp", "cnn-logo.webp", "tv-cultura.webp", "oifibra-paramount-icon.png", "oifibra-mtv-icon.webp", "logo-nickjr.webp", "logo_nicklo.webp"]
    },
]
let Requirements = {
    nome: false,
    email: false,
    telefone: false,
    cpf: false,
    rg: false,
    nascimento: false,
    mae: false
};
let ViaCep;

let PlanoEscolhido = planos.find((item) => {
    return (item.id == identificacaoPlano) ? true : false;
})
Informacoes = {
    ...Informacoes,
    PlanoEscolhido
};
if (!PlanoEscolhido) {
    PlanoEscolhido = planos[0];
}
let DivPlano = document.querySelector('.card_dinamico').cloneNode(true);
DivPlano.querySelector(".model--nome").innerHTML = PlanoEscolhido.nome;
DivPlano.querySelector(".model--descricao").innerHTML = PlanoEscolhido.descricao;
DivPlano.querySelector(".model--valorDe").innerHTML = PlanoEscolhido.valorDe;
let virgula = PlanoEscolhido.valor.indexOf(',');
let centavos = PlanoEscolhido.valor.slice(virgula + 1);
let inteiros = PlanoEscolhido.valor.slice(0, virgula);
DivPlano.querySelector(".value-small-card-dinamico").innerHTML = centavos;
DivPlano.querySelector(".value-1-card-dinamico").innerHTML = inteiros;
document.querySelector('.card_oferta').append(DivPlano);

async function Salvar(item, cat = "x") {
    let name = item.srcElement.name;
    let id = item.srcElement.id;
    let Input = document.querySelector('#' + id);
    let value = Input.value;

    if (name == 'cpf') {
        value = value.replace(/\.|-/g, "");
    }
    if (name == 'rg') {
        if (value.length < 5) {
            Input.classList.add('is-invalid');
            Input.classList.remove('is-valid');
            Requirements['rg'] = false;
        } else {
            Input.classList.add('is-valid');
            Input.classList.remove('is-invalid');
            Requirements['rg'] = true;
        }
    }
    if (name == 'cep') {
        value = value.replace(/\.|-/g, "");
        if (value.length > 3) {
            let json = await PesquisaEndereco(value);
            Informacoes[cat] = {
                logradouro: json.logradouro,
                bairro: json.bairro,
                cidade: json.localidade,
                estado: json.uf
            };
        }
    }
    if (!Informacoes[cat]) {
        Informacoes[cat] = {};
    }
    if (value.length > 0) {
        Informacoes[cat][name] = value;
    }
    let DadosPessoais = Informacoes['DadosPessoais'];
    
    Informacoes = {
        ...Informacoes,
        DadosPessoais,
    } 
}


function CPFValidacao() {
    let Input = document.querySelector('#cpf');
    let cpf = Input.value.replace(/\.|-/g, "");
    if (cpf.length > 0) {
        if (cpf.length == 11) {
            if (validarCPF(cpf)) {
                Input.classList.add('is-valid');
                Input.classList.remove('is-invalid');
                Requirements['cpf'] = true;
            } else {
                Input.classList.add('is-invalid');
                Input.classList.remove('is-valid');
                Requirements['cpf'] = false;
            }
        }
        if ((cpf.length < 11)) {
            Input.classList.add('is-invalid');
            Input.classList.remove('is-valid');
            Requirements['cpf'] = false;
        }
    } else {
        Input.classList.remove('is-invalid');
        Input.classList.remove('is-valid');
        Requirements['cpf'] = false;

    }
}

async function PesquisaEndereco(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let r = await fetch(url);
    let json = await r.json();
    document.querySelector('#logradouro').value = json.logradouro;
    document.querySelector('#logradouro').classList.add('has-content');
    document.querySelector('#bairro').value = json.bairro;
    document.querySelector('#bairro').classList.add('has-content');
    document.querySelector('#cidade').value = json.localidade;
    document.querySelector('#cidade').classList.add('has-content');
    document.querySelector('#estado').value = json.uf;
    document.querySelector('#estado').classList.add('has-content');

    return json;
}

async function Finalizar() {
    let Vencimento;
    let formaPagamento = document.querySelector('input[name=forma_pagamento]:checked').value;
    let Termos = document.querySelector('#termos').checked;
    try {
        Vencimento = document.querySelector('input[name=data_vencimento]:checked').value;
    } catch (e) { }

    if (formaPagamento == 'boleto') {
        Informacoes['Pagamento'] = {
            formaPagamento: formaPagamento,
            diaVencimento: Vencimento,
            termos: Termos
        }
    } else {
        let Banco = document.querySelector('#banco').options[document.querySelector('#banco').selectedIndex].text;
        let Agencia = document.querySelector('#agencia').value;
        let Conta = document.querySelector('#conta').value;
        let Digito = document.querySelector('#digito').value;
        let Dia_venc = document.querySelector('#dia_venc').options[document.querySelector('#dia_venc').selectedIndex].text;
        Informacoes['Pagamento'] = {
            formaPagamento: formaPagamento,
            Banco,
            Agencia,
            Conta,
            Digito,
            diaVencimento: Dia_venc,
            termos: Termos
        }
    }
    /*Enviando JSON*/
    const url = "processa.php";
    $.ajax({
        url: url,
        method: "POST",
        data:Informacoes,
        datatype: "json",
        success: function (result) {
            console.log(result);
        },
    });
    console.log(Informacoes)
}   