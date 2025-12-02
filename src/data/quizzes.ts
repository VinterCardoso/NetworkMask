const quizzes = [
  {
    question: "Quantos bits tem um endereço IPv4?",
    options: ["16", "32", "64", "128"],
    answer: "32",
    explanations: [
      "Incorreto — 16 bits é muito pouco para IPv4.",
      "Correto — IPv4 usa endereços de 32 bits (4 bytes).",
      "Incorreto — 64 bits refere-se a alguns sistemas mais modernos, não IPv4.",
      "Incorreto — 128 bits é o tamanho do IPv6."
    ]
  },
  {
    question: "O que indica a notação CIDR 192.168.1.0/24?",
    options: [
      "Que 24 bits, a partir da esquerda, são parte da rede",
      "Que existem 24 endereços na sub-rede",
      "Que os últimos 24 bits são para hosts",
      "Que a máscara é 255.0.0.0"
    ],
    answer: "Que 24 bits, a partir da esquerda, são parte da rede",
    explanations: [
      "Correto — o número após a barra indica quantos bits são de rede (NetID).",
      "Incorreto — /24 não significa 24 endereços; significa 24 bits de rede.",
      "Incorreto — /24 indica os primeiros 24 bits são de rede, não os últimos.",
      "Incorreto — 255.0.0.0 corresponde a /8, não /24."
    ]
  },
  {
    question: "Qual é a máscara decimal correspondente a /24?",
    options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"],
    answer: "255.255.255.0",
    explanations: [
      "Correto — /24 corresponde a 24 uns seguidos por zeros → 255.255.255.0.",
      "Incorreto — 255.255.0.0 é /16.",
      "Incorreto — 255.0.0.0 é /8.",
      "Incorreto — 255.255.255.255 é /32."
    ]
  },
  {
    question: "Qual é o propósito principal de uma máscara de sub-rede?",
    options: [
      "Separar quais bits do endereço são de rede e quais são de host",
      "Criptografar tráfego na rede",
      "Atribuir endereços automaticamente (DHCP)",
      "Detectar dispositivos com malware"
    ],
    answer: "Separar quais bits do endereço são de rede e quais são de host",
    explanations: [
      "Correto — a máscara define NetID e HostID de um endereço IP.",
      "Incorreto — criptografia não é função da máscara.",
      "Incorreto — atribuição automática é função do DHCP.",
      "Incorreto — detecção de malware não é função da máscara."
    ]
  },
  {
    question: "Quantos hosts utilizáveis existem em uma sub-rede /26 (excluindo rede e broadcast)?",
    options: ["62", "64", "30", "32"],
    answer: "62",
    explanations: [
      "Correto — /26 tem 2^(32−26)=64 endereços; hosts utilizáveis normalmente = 64 − 2 = 62.",
      "Incorreto — 64 é o total de endereços, incluindo rede e broadcast.",
      "Incorreto — 30 corresponde aproximadamente a /27, não /26.",
      "Incorreto — 32 não corresponde a /26."
    ]
  },
  {
    question: "Qual é o endereço de broadcast para 192.168.1.0/24?",
    options: ["192.168.1.255", "192.168.1.0", "192.168.1.1", "192.168.1.254"],
    answer: "192.168.1.255",
    explanations: [
      "Correto — para /24 o último endereço (.255) é o broadcast.",
      "Incorreto — .0 é o endereço de rede.",
      "Incorreto — .1 é um host, não o broadcast.",
      "Incorreto — .254 é o último host utilizável, não o broadcast."
    ]
  },
  {
    question: "Na notação decimal pontuada, quantos octetos existem e qual o intervalo de cada um?",
    options: [
      "4 octetos, 0–255",
      "3 octetos, 0–255",
      "4 octetos, 0–65535",
      "2 octetos, 0–255"
    ],
    answer: "4 octetos, 0–255",
    explanations: [
      "Correto — IPv4 representa 32 bits como 4 octetos, cada um 0–255.",
      "Incorreto — IPv4 usa 4 octetos, não 3.",
      "Incorreto — cada octeto vai até 255, não 65535.",
      "Incorreto — IPv4 usa 4 octetos, não 2."
    ]
  },
  {
    question: "Por que o modelo classful foi substituído por classless (CIDR)?",
    options: [
      "Porque classful desperdiçava endereços e não permitia prefixos flexíveis",
      "Porque classful não suportava roteadores",
      "Porque classful exigia criptografia",
      "Porque classful só funcionava com IPv6"
    ],
    answer: "Porque classful desperdiçava endereços e não permitia prefixos flexíveis",
    explanations: [
      "Correto — classes fixas geravam desperdício; CIDR permite prefixos arbitrários e alocação eficiente.",
      "Incorreto — roteadores suportavam classful, o problema era eficiência de alocação.",
      "Incorreto — criptografia não é o motivo da mudança.",
      "Incorreto — classful é um conceito de IPv4, não relacionado ao IPv6."
    ]
  },
  {
    question: "Ao planejar sub-redes, qual informação a máscara ajuda a determinar diretamente?",
    options: [
      "O tamanho do bloco de endereços (quantos endereços e quantos hosts)",
      "A velocidade do link físico",
      "O fabricante do roteador",
      "A topologia física do cabeamento"
    ],
    answer: "O tamanho do bloco de endereços (quantos endereços e quantos hosts)",
    explanations: [
      "Correto — a máscara determina quantos bits são de host e assim o número de endereços do bloco.",
      "Incorreto — velocidade do link não é determinada pela máscara.",
      "Incorreto — máscara não identifica fabricante do roteador.",
      "Incorreto — máscara não descreve a topologia física do cabeamento."
    ]
  },
  {
    question: "Qual das seguintes notações CIDR é inválida?",
    options: ["192.168.1.0/24", "192.168.1.0/32", "192.168.1.0/33", "10.0.0.0/8"],
    answer: "192.168.1.0/33",
    explanations: [
      "Incorreto — /24 é válido.",
      "Incorreto — /32 é válido (representa um único endereço).",
      "Correto — /33 é inválido em IPv4; o máximo é /32.",
      "Incorreto — /8 é válido (máscara de Classe A tradicional)."
    ]
  },
  {
    question: "No conteúdo, qual é um uso prático citado para segmentar redes com máscaras?",
    options: [
      "Reduzir domínios de broadcast e melhorar segurança/performance",
      "Aumentar a potência do sinal Wi‑Fi",
      "Gerar chaves de criptografia",
      "Controlar velocidade dos switches"
    ],
    answer: "Reduzir domínios de broadcast e melhorar segurança/performance",
    explanations: [
      "Correto — as páginas apontam segmentação como forma de reduzir broadcast e melhorar segurança/performance.",
      "Incorreto — potência do sinal Wi‑Fi não é afetada pela máscara.",
      "Incorreto — máscara não gera chaves de criptografia.",
      "Incorreto — máscara não controla a velocidade dos switches."
    ]
  },
];

export default quizzes;