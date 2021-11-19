const calcular = document.getElementById('calcular');


function juros () {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if ( nome !== '' && valor !== '' && juros !== '' && parcelas !== '') {

        const ValorJuros = valor*((1+juros)^parcelas - 1/juros);

        let classificacao = '';

        resultado.textContent = `Olá, ${nome}! se você aplicar R$:${valor} à taxa de juros de ${juros} % ao mês, durante ${parcelas} meses. acumulará uma poupança de R$: ${ValorJuros}`;

    }else {
        resultado.textContent = 'Preencha todos os campos requisitados, por favor.';
    }

}
calcular.addEventListener('click', juros);