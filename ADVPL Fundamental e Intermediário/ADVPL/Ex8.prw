Local nCnt
Local nSomaPar := 0

For nCnt := 0 To 100 Step 2
nSomaPar += nCnt
Next

Alert( "A soma dos 100 primeiros n�meros pares �: " + ;
       cValToChar(nSomaPar) )
Return
