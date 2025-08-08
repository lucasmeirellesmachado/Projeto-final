// 1. DEFININDO A URL BASE
const BASE_URL = "http://127.0.0.1:8000";

// 2. CADASTRAR NOVO USUÁRIO
async function registrarUsuario(nome, email, senha) {
  try {
    const resposta = await fetch(`${BASE_URL}/auth/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha
      })
    });

    if (!resposta.ok) {
      const erro = await resposta.json();
      alert("Erro ao cadastrar: " + erro.detail);
      return;
    }

    alert("Usuário cadastrado com sucesso! Agora faça login.");
  } 
  
  catch (erro) {
    console.error("Erro ao registrar usuário:", erro);
    alert("Erro de conexão com o servidor.");
  }
}

// 3. REALIZAR LOGIN
async function login(email, senha) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      senha: senha,
    }),
  });

  if (!response.ok) {
    const erro = await response.json();
    console.error("Erro ao fazer login:", erro.detail);
    return null;
  }

  const data = await response.json();
  localStorage.setItem("token", data.access_token); // Guarda o token
  return data.access_token;
}

// 4. LISTAR AGENTES (com token e filtros)
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

// 5. CARREGAR OPÇÕES DE PREENCHIMENTO (ESPECIALIDADE, NÍVEL ESCOLARIDADE, ETC.)
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

// 6. ENVIAR FORMULÁRIO DE CADASTRO

// Função auxiliar: pega valores de <select multiple>
function getValoresSelectMultiplo(id) {
  const select = document.getElementById(id);
  return Array.from(select.selectedOptions).map(option => parseInt(option.value));
}

async function enviarFormulario() {
  const dados = {
    nu_cpf: document.querySelector("#cpf").value,
    nu_cns_cnes: document.querySelector("#cns").value,
    data_nascimento: document.querySelector("#data_nascimento").value,
    municipio: document.querySelector("#municipio").value,
    co_cep: document.querySelector("#cep").value,
    co_especialidade: getValoresSelectMultiplo("especialidade"),
    co_nivel_escolaridade: (document.querySelector("#nivel_escolaridade").value),
    co_capacitacao: getValoresSelectMultiplo("capacitacao"),
    co_cbo_cnes: getValoresSelectMultiplo("cbo_cnes"),
    ds_vinculo_empregaticio: (document.querySelector("#vinculo").value),
    ds_cargo: (document.querySelector("#cargo").value),
    co_genero: (document.querySelector("#genero").value),
    co_unidade_vigilancia_sanitaria: (document.querySelector("#unidade").value)
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
  } 
  
  catch (erro) {
    console.error("Erro ao enviar dados:", erro);
    alert("Erro de conexão com o servidor");
  }
}

// 8. LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.href = "site_login.html";
}