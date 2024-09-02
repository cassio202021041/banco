# banco
gerenciadorDeFinanancas

#front

requisitos,Angular 17,npm,vscode.

ng new front 
apos instalado no termnal insira 

cd nomeProjeto

ng serve

onde iniciará o projeto na porta: localhost:4200

#criação  modulo conta
ng generate module nomeModulo

#criaçao conta.ts

#criação service conta
ng generate service NomeService

#criação dos componentes Create, read, update e delete
ng generate compontent nomeComponent

#Criação back

requisitos refente a configuração local, Xampp, MySql, nmp, Php, laravel e Compose

Inicie o Apache e MySQL no Xampp


depois de instalar os requisitos inicie o comando abaixo
laravel new example-app

Depois que o projeto for criado, inicie o servidor 

cd example-app 
php artisan serve

e você preferir usar outro driver de banco de dados, como MySQL ou PostgreSQL, você pode atualizar seu .envarquivo de configuração para usar o banco de dados apropriado. Por exemplo, se você deseja usar MySQL, atualize as variáveis .env​​do seu arquivo de configuração DB_*assim:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

logo apos como o comando a seguir para migrar o bd

php artisan migrate