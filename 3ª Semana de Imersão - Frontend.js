// 1. DEFININDO A URL BASE
const BASE_URL = "http://localhost:8000";

// 2. LOGIN
async function login(email, senha) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username: email,
      password: senha,
    }),
  });

  if (!response.ok) {
    const erro = await response.json();
    console.error("Erro ao logar:", erro.detail);
    return null;
  }

  const data = await response.json();
  localStorage.setItem("token", data.access_token); // Guarda o token
  return data.access_token;
}

// 3. LISTAR AGENTES (com token e filtros)
async function listarAgentes(filtros = {}) {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("Token não encontrado. Faça login primeiro.");
    return;
  }

  const params = new URLSearchParams(filtros);

  const response = await fetch(`${BASE_URL}/agentes?${params}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const erro = await response.json();
    console.error("Erro ao buscar agentes:", erro.detail);
    return;
  }

  const resultado = await response.json();
  console.log("Agentes encontrados:", resultado);
}

// 4. CARREGAR OPÇÕES DE PREENCHIMENTO (ESPECIALIDADE, NÍVEL ESCOLARIDADE, ETC.)
async function carregarOpcoes(url, seletor) {
  try {
    const resposta = await fetch(url);
    const opcoes = await resposta.json();

    const select = document.querySelector(seletor);
    opcoes.forEach(opcao => {
      const option = document.createElement("option");
      option.value = opcao.codigo;
      option.textContent = opcao.descricao;
      select.appendChild(option);
    });
  } catch (erro) {
    console.error(`Erro ao carregar ${seletor}:`, erro);
  }
}

const campos = {
  "#especialidade": `${BASE_URL}/opcoes/especialidades`,
  "#nivel_escolaridade": `${BASE_URL}/opcoes/nivel_escolaridade`,
  "#capacitacao": `${BASE_URL}/opcoes/capacitacoes`,
  "#cbo_cnes": `${BASE_URL}/opcoes/cbo_cnes`,
  "#vinculo": `${BASE_URL}/opcoes/vinculos`,
  "#cargo": `${BASE_URL}/opcoes/cargos`,
  "#genero": `${BASE_URL}/opcoes/generos`,
  "#unidade": `${BASE_URL}/opcoes/unidades_vigilancia`
};

// Executa o carregamento ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  for (const [seletor, url] of Object.entries(campos)) {
    carregarOpcoes(url, seletor);
  }
});

// 5. ENVIAR FORMULÁRIO DE CADASTRO
async function enviarFormulario() {
  const dados = {
    nu_cpf: document.querySelector("#cpf").value,
    nu_cns_cnes: document.querySelector("#cns").value,
    data_nascimento: document.querySelector("#data_nascimento").value,
    municipio: document.querySelector("#municipio").value,

    co_especialidade: parseInt(document.querySelector("#especialidade").value),
    co_nivel_escolaridade: parseInt(document.querySelector("#nivel_escolaridade").value),
    co_capacitacao: parseInt(document.querySelector("#capacitacao").value),
    co_cbo_cnes: parseInt(document.querySelector("#cbo_cnes").value),
    ds_vinculo_empregaticio: parseInt(document.querySelector("#vinculo").value),
    ds_cargo: parseInt(document.querySelector("#cargo").value),
    co_genero: parseInt(document.querySelector("#genero").value),
    co_unidade_vigilancia_sanitaria: parseInt(document.querySelector("#unidade").value)
  };

  try {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa fazer login antes de enviar o formulário.");
      return;
    }

    const resposta = await fetch(`${BASE_URL}/agentes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(dados)
    });

    if (!resposta.ok) {
      const erro = await resposta.json();
      alert("Erro ao enviar: " + erro.detail);
    } else {
      const resultado = await resposta.json();
      alert("Agente cadastrado com sucesso!");
      console.log(resultado);
    }
  } catch (erro) {
    console.error("Erro ao enviar dados:", erro);
    alert("Erro de conexão com o servidor");
  }
}
