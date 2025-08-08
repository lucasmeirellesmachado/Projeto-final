from fastapi import APIRouter

router_opcoes = APIRouter()

def formatar_opcoes(dicionario):
    return [{"codigo": k, "descricao": v} for k, v in dicionario.items()]

opcoes_especialidade = {
    1: "MEDICAMENTOS",
    2: "HEMOTERAPIA",
    3: "HEMODIÁLISE",
    4: "SERVIÇOS DE SAÚDE",
    5: "SERVIÇOS DE INTERESSE À SAÚDE",
    6: "PRODUTOS E DISPOSITIVOS PARA A SAÚDE",
    7: "PRODUTOS COSMÉTICOS E SANEANTES",
    8: "ALIMENTOS",
    9: "BANCO DE SANGUE TECIDOS, CÉLULAS E ÓRGÃOS",
    10: "FARMACOVIGILÂNCIA",
    11: "TECNOVIGILÂNCIA",
    12: "COSMETOVIGILÂNCIA",
    13: "HEMOVIGILÂNCIA",
    14: "TOXICOLOGIA",
    15: "SEGURANÇA DO PACIENTE E IRAS",
    16: "VIGILÂNCIA EPIDEMIOLÓGICA E EMERGÊNCIAS EM SAÚDE PÚBLICA",
    17: "ARQUITETURA E ENGENHARIA DE SERVIÇOS DE SAÚDE",
    18: "JURÍDICO",
    19: "GESTÃO",
    20: "ADMINISTRATIVO",
    21: "VIGILÂNCIA E FISCALIZAÇÃO DE SERVIÇOS DE SAÚDE",
    22: "VIGILÂNCIA E FISCALIZAÇÃO DE SERVIÇOS DE INTERESSE À SAÚDE",
    23: "VIGILÂNCIA E FISCALIZAÇÃO DE MEDICAMENTOS E PRODUTOS PARA A SAÚDE",
    24: "APOIO",
    25: "OUTROS"
}

opcoes_nivel_escolaridade = {
    1: "ENSINO MÉDIO",
    2: "ENSINO SUPERIOR",
    3: "OUTRO",
    4: "ENSINO FUNDAMENTAL",
    5: "ENSINO TÉCNICO PROFISSIONALIZANTE",
    6: "PÓS-GRADUAÇÃO (LATO SENSU)",
    7: "MESTRADO",
    8: "DOUTORADO (ou titulação acima)"
}

opcoes_capacitacao = {
    1: "VIGILÂNCIA/ INSPEÇÃO SANITÁRIA",
    2: "COLETA DE AMOSTRAS",
    3: "ROTULAGEM DE ALIMENTOS",
    4: "BOAS PRÁTICAS DE FABRICAÇÃO DE ALIMENTOS",
    5: "BOAS PRÁTICAS DE FABRICAÇÃO, ARMAZENAMENTO E DISTRIBUIÇÃO DE MEDICAMENTOS",
    6: "BOAS PRÁTICAS DE FABRICAÇÃO, ARMAZENAMENTO E DISTRIBUIÇÃO DE INSUMOS FARMACÊUTICOS",
    7: "BOAS PRÁTICAS DE FABRICAÇÃO, ARMAZENAMENTO E DISTRIBUIÇÃO DE RADIOFÁRMICOS",
    8: "BOAS PRÁTICAS DE FABRICAÇÃO, DISTRIBUIÇÃO E ARMAZENAMENTO DE PRODUTOS DE MEDICINA AVANÇADA",
    9: "BOAS PRÁTICAS DE FABRICAÇÃO, ARMAZENAMENTO E DISTRIBUIÇÃO DE PRODUTOS COSMÉTICOS",
    10: "BOAS PRÁTICAS DE FABRICAÇÃO, ARMAZENAMENTO E DISTRIBUIÇÃO DE PRODUTOS SANEANTES",
    11: "BOAS PRÁTICAS DE FABRICAÇÃO, ARMAZENAMENTO E DISTRIBUIÇÃO DE PRODUTOS E DISPOSITIVOS MÉDICOS",
    12: "SERVIÇOS DE SAÚDE",
    13: "LABORATÓRIOS ANALÍTICOS E CLÍNICOS",
    14: "RADIOPROTEÇÃO E RADIODIAGNÓSTICO",
    15: "SERVIÇOS DE ALIMENTAÇÃO",
    16: "SERVIÇOS DE SANGUE, TECIDOS, CÉLULAS E ÓRGÃOS",
    17: "SERVIÇOS DE INTERESSE À SAÚDE",
    18: "FUMÍGENOS E PRODUTOS DERIVADOS DE TABACO",
    19: "SISTEMAS DE GESTÃO DA QUALIDADE",
    20: "ILPI (INSTITUIÇÃO DE LONGA PERMANÊNCIA PARA IDOSOS)",
    21: "DIREITO SANITÁRIO",
    22: "GESTÃO EM SERVIÇOS DE SAÚDE",
    23: "NÃO POSSUO",
    24: "OUTRO"
}

opcoes_cbo_cnes = {
    1: "MÉDICO",
    2: "ENFERMEIRO",
    3: "FARMACÊUTICO",
    4: "VETERINÁRIO",
    5: "TÉCNICO DE ENFERMAGEM",
    6: "FISIOTERAPEUTA",
    7: "THD (TÉCNICO DE HIGIENE DENTAL)",
    8: "OUTRO",
    9: "ADVOGADO",
    10: "ADMINISTRADOR",
    11: "AGENTE DE ENDEMIAS",
    12: "ARQUITETO",
    13: "AUXILIAR/AGENTE ADMINISTRATIVO",
    14: "AUXILIAR DE ENFERMAGEM",
    15: "ASSISTENTE SOCIAL",
    16: "BIÓLOGO",
    17: "BIOQUÍMICO",
    18: "BIOMÉDICO",
    19: "CONTADOR",
    20: "ENGENHEIRO",
    21: "FONOAUDIÓLOGO",
    22: "NUTRICIONISTA",
    23: "PSICÓLOGO",
    24: "QUÍMICO",
    25: "SANITARISTA",
    26: "TÉCNICO DE SAÚDE BUCAL/ AUXILIAR SAÚDE BUCAL",
    27: "TÉCNICO DE LABORATÓRIO",
    28: "ODONTÓLOGO"
}

opcoes_vinculo_empregaticio = {
    1: "ESTATUTÁRIO (CONCURSADO)",
    2: "TERCEIRIZADO (CONTRATADO POR EMPRESA)",
    3: "CEDIDO (Servidor de outra Esfera de Governo Municipal, Estadual ou Federal)",
    4: "CARGO EM COMISSÃO",
    5: "OUTRO"
}

opcoes_cargo = {
    1: "MÉDICO",
    2: "ENFERMEIRO",
    3: "FARMACÊUTICO",
    4: "VETERINÁRIO",
    5: "TÉCNICO DE ENFERMAGEM",
    6: "FISIOTERAPEUTA",
    7: "THD (TÉCNICO DE HIGIENE DENTAL)",
    8: "OUTROS",
    9: "ADVOGADO",
    10: "ADMINISTRADOR",
    11: "AGENTE DE ENDEMIAS",
    12: "ARQUITETO",
    13: "AUXILIAR/AGENTE ADMINISTRATIVO OU T.I.",
    14: "AUXILIAR DE ENFERMAGEM",
    15: "ASSISTENTE SOCIAL",
    16: "BIÓLOGO",
    17: "BIOQUÍMICO",
    18: "BIOMÉDICO",
    19: "CONTADOR",
    20: "ENGENHEIRO",
    21: "FONOAUDIÓLOGO",
    22: "NUTRICIONISTA",
    23: "PSICÓLOGO",
    24: "QUÍMICO",
    25: "SANITARISTA",
    26: "TÉCNICO DE SAÚDE BUCAL/ AUXILIAR SAÚDE BUCAL",
    27: "TÉCNICO DE LABORATÓRIO",
    28: "ODONTÓLOGO",
    29: "AGENTE/ AUDITOR OU FISCAL DE INSPEÇÃO SANITÁRIA",
    30: "CHEFE/ COORDENADOR/ DIRETOR OU GERENTE DE VISA",
    31: "APOIO OPERACIONAL (MOTORISTA/ VIGIA/ RECEPCIONISTA)"
}

opcoes_genero = {
    1: "MASCULINO",
    2: "FEMININO",
    3: "OUTROS"
}

opcoes_unidade_vigilancia_sanitaria = {
    1: "ANVISA",
    2: "VIGILÂNCIA ESTADUAL",
    3: "VIGILÂNCIA MUNICIPAL"
}

# Rotas
@router_opcoes.get("/especialidades")
def get_especialidades():
    return formatar_opcoes(opcoes_especialidade)

@router_opcoes.get("/nivel_escolaridade")
def get_nivel_escolaridade():
    return formatar_opcoes(opcoes_nivel_escolaridade)

@router_opcoes.get("/capacitacoes")
def get_capacitacoes():
    return formatar_opcoes(opcoes_capacitacao)

@router_opcoes.get("/cbo_cnes")
def get_cbo_cnes():
    return formatar_opcoes(opcoes_cbo_cnes)

@router_opcoes.get("/vinculos")
def get_vinculos():
    return formatar_opcoes(opcoes_vinculo_empregaticio)

@router_opcoes.get("/cargos")
def get_cargos():
    return formatar_opcoes(opcoes_cargo)

@router_opcoes.get("/generos")
def get_generos():
    return formatar_opcoes(opcoes_genero)

@router_opcoes.get("/unidades_vigilancia")
def get_unidades():
    return formatar_opcoes(opcoes_unidade_vigilancia_sanitaria)