#INCLUDE "protheus.ch"
#INCLUDE "apwebsrv.ch"

/* ===============================================================================
WSDL Location    http://srverp01:8002/SERVERTIME.apw?WSDL
Gerado em        27/11/24 13:01:25
Observa��es      C�digo-Fonte gerado por ADVPL WSDL Client 1.120703
                 Altera��es neste arquivo podem causar funcionamento incorreto
                 e ser�o perdidas caso o c�digo-fonte seja gerado novamente.
=============================================================================== */

User Function _DZRMMHP ; Return  // "dummy" function - Internal Use 

/* -------------------------------------------------------------------------------
WSDL Service WSSERVERTIME
------------------------------------------------------------------------------- */

/*
Este c�digo o IDE gera, informando os includes obrigat�rias para o Client do WebService executar. Foi criada uma 
fun��o User Function _DZRMMHP aleat�ria para esse fonte, cujo nome poder� ser alterado pelo usu�rio 
posteriormente.
*/

WSCLIENT WSSERVERTIME

	WSMETHOD NEW
	WSMETHOD INIT
	WSMETHOD RESET
	WSMETHOD CLONE
	WSMETHOD GETSERVERTIME

	WSDATA   _URL                      AS String
	WSDATA   _HEADOUT                  AS Array of String
	WSDATA   _COOKIES                  AS Array of String
	WSDATA   cPARMETRO                 AS string
	WSDATA   cGETSERVERTIMERESULT      AS string

ENDWSCLIENT

WSMETHOD NEW WSCLIENT WSSERVERTIME

/*
Essa parte inicializa a cria��o do client do WebService. Podemos notar que o nome do cliente do WebService 
SERVERTTIME � parecido com o nome do Client WSSERVERTTIME.
Vejamos que foram criados 4 m�todos que n�o existiam no pr�prio WebService.
WSMETHOD NEW
WSMETHOD INIT
WSMETHOD RESET
WSMETHOD CLONE
O m�todo criado pelo IDE NEW.
Trata-se de um processo de cria��o do objeto WebService para repassar todo o conte�do do WebService gerado para 
uma vari�vel definida pelo usu�rio. 
*/

::Init()
If !FindFunction("XMLCHILDEX")
	UserException("O C�digo-Fonte Client atual requer os execut�veis do Protheus Build [7.00.210324P-20240718] ou superior. Atualize o Protheus ou gere o C�digo-Fonte novamente utilizando o Build atual.")
EndIf
Return Self

/*
Pode, analisando o pr�prio m�todo, chamar outro m�todo gerado pelo IDE INIT. 
Trata-se de um processo de cria��o do objeto WebService para disponibilizar a cria��o ou chamada de outros servi�os 
dispon�vel no reposit�rio para complementar o WebService do cliente.
*/

WSMETHOD INIT WSCLIENT WSSERVERTIME
Return

WSMETHOD RESET WSCLIENT WSSERVERTIME
	::cPARMETRO          := NIL 
	::cGETSERVERTIMERESULT := NIL 
	::Init()
Return

/*
Analisamos agora o Method RESET. 
Trata-se de um processo de limpeza de vari�veis do WebService para que voc� possa utiliz�-lo novamente sem estar 
com as informa��es executadas anteriormente.
*/

WSMETHOD CLONE WSCLIENT WSSERVERTIME
Local oClone := WSSERVERTIME():New()
	oClone:_URL          := ::_URL 
	oClone:cPARMETRO     := ::cPARMETRO
	oClone:cGETSERVERTIMERESULT := ::cGETSERVERTIMERESULT
Return oClone

/*
Analisaremos agora o m�todo CLONE.
Tratamento de gerar uma nova vari�vel com o Objeto criado do WebService. Duplica a informa��o dos dados do 
WebService. 
*/

// WSDL Method GETSERVERTIME of Service WSSERVERTIME

WSMETHOD GETSERVERTIME WSSEND cPARMETRO WSRECEIVE cGETSERVERTIMERESULT WSCLIENT WSSERVERTIME
Local cSoap := "" , oXmlRet

/*
Analisaremos agora o m�todo GETSERVERTTIME. 
Tratamento de executar o service dispon�vel pelo WebService e retornar o processo executado por ele, retornando na 
vari�vel cGETSERVERTTIMERESULT.
*/

BEGIN WSMETHOD

cSoap += '<GETSERVERTIME xmlns="http://srverp01:8002/">'
cSoap += WSSoapValue("PARMETRO", ::cPARMETRO, cPARMETRO , "string", .T. , .F., 0 , NIL, .F.,.F.) 
cSoap += "</GETSERVERTIME>"

oXmlRet := SvcSoapCall(Self,cSoap,; 
	"http://srverp01:8002/GETSERVERTIME",; 
	"DOCUMENT","http://srverp01:8002/",,"1.031217",; 
	"http://srverp01:8002/SERVERTIME.apw")

::Init()
::cGETSERVERTIMERESULT :=  WSAdvValue( oXmlRet,"_GETSERVERTIMERESPONSE:_GETSERVERTIMERESULT:TEXT","string",NIL,NIL,NIL,NIL,NIL,NIL) 

END WSMETHOD

oXmlRet := NIL
Return .T.

/*
O c�digo fonte utiliza uma fun��o chamada WSSoapValue. Esta fun��o executa toda a estrutura do XML para dentro 
do WebService, criando as suas respectivas tags que o m�todo solicitado exige. 
Logo abaixo � apresentada outra fun��o: WSADVVALUE, que retorna o valor que o WebService est� disponibilizando.
Devemos compilar o c�digo fonte gerado pelo DevStudio e podemos fazer tratamentos de notifica��es no M�todo com 
a fun��o SetSoapFault.
*/
