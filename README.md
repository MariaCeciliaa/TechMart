# TechMart 🧑‍💻
Desenvolvimento da plataforma TechMart criada pelo grupo de alunos do 3º ano de Engenharia de Software da Unifil.

## Grupo:
- Leonardo Presotto de Matos 
- Lucas Vicente Unfried  
- Matheus Sitta Camargo 
- Maria Cecilia Molonha  
- Ruy Miguel Penha Rodrigues 

## Saiba Mais sobre o TechMart 🧐

### **Explicação**
O TechMart é uma plataforma de leilão de artigos eletrônicos que tem como objetivo proporcionar aos usuários uma forma mais acessível e sustentável de adquirir produtos eletrônicos. A plataforma permitirá que os usuários participem de leilões de artigos eletrônicos usados ou novos, fornecendo uma oportunidade de compra mais econômica, além de incentivar a reutilização de eletrônicos que antes seriam descartados no lixo.

### **Público-alvo**
O público-alvo do TechMart são pessoas que buscam uma forma mais econômica e sustentável de adquirir produtos eletrônicos, como estudantes, jovens profissionais, famílias de baixa renda, além de pessoas interessadas em contribuir para a preservação do meio ambiente.

## Como Executar :fire:

* Pré-requisitos: 
  * É necessário possuir o Laravel instalado no computador
  * É necessário possuir o Git instalado e configurado no computador
  * É necessário possuir o XAMPP instalado no computador
  * Também, é preciso ter um gerenciador de pacotes seja o NPM ou Yarn.

 1. Faça um clone do repositório:

```powershell
 $ git clone https://github.com/MariaCeciliaa/TechMart.git
```

2. Executando a Aplicação:

```powershell
  # IMPORTE O ARQUIVO OLXAPI.SQL PARA SUA MAQUINA PELO PHPMYADMIN
  # API
  $ cd Desenvolvimento
  $ cd backend
  # Instalando as dependências do projeto.
  $ composer install --no-scripts
  # renomeio o arquivo env.example para .env
  # no arquivo .env use DB_DATABASE=olxlaravel ou o nome que você colocou no db
  # Gere uma nova chave para a aplicação laravel:
  $ php artisan key:generate
  # Publicar configuração de JWT
  $ php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
  # Depois execute
  $ php artisan jwt:secret
  # Inicie a API
  $ php artisan serve --host=0.0.0.0

  # Aplicação web
  $ cd Desenvolvimento
  $ cd frontend
  # Instalando as dependências do projeto.
  $ yarn ou npm install
  # Caso de erro devido a conflitos de dependências durante a instalação de pacotes usando o npm
  # rode este comando:  npm install --legacy-peer-deps
  # Configurando arquivo api.js
  # troque o baseURL: para 'http://ipdasuamaquina:8000/api'
  # (para encontrar o ip da sua máquina rode no cmd ipconfig e será o número que estiver no  Endereço IPv4)
  # Inicie a aplicação web
  $ yarn start ou npm start
  # Caso de erro e não abra a página rode este comando: npm audit fix --force
  # e depois rode novamente o start.
```
