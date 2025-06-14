#include "Protheus.ch"
#include "ApWebSRV.ch"
#include "TbiConn.ch"

WSSERVICE SERVERTIME Description "VEJA O HORARIO"

WSDATA Hor�rio AS String
WSDATA Par�metro AS String
//String Dado AdvPL do tipo string.
//Date Dado AdvPL do tipo data.
//Integer Dado AdvPL do tipo num�rico (apenas n�meros inteiros).
//Float Dado AdvPL do tipo num�rico (pode conter n�meros inteiros
//e n�o-inteiros).
//Boolean Dado AdvPL do tipo booleano (l�gico).
//Base64Binary Dado AdvPL do tipo string bin�ria, aceitando todos //os caracteres da tabela ASCII, de CHAR(0) A CHR(255)
WSMETHOD GetServerTime Description "METHOD DE VISUALIZA��O DO HORARIO"
ENDWSSERVICE
WSMETHOD GetServerTime WSRECEIVE Par�metro WSSEND Hor�rio WSSERVICE SERVERTIME
::Hor�rio:= TIME()
Return .T.
