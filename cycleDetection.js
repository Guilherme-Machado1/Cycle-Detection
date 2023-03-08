function hasCycle(linkedList){
    let currentNode = linkedList.head; //recebe o head da linked list
    let newNode = linkedList.head //recebe o head da linked list
    let count = 0; //Seta um contador para verificar quantas vezes o valor foi visto na lista
    while (currentNode) {//Faz o loop na lista
        let storeCurrentValue = currentNode.value //Armazena o valor atual
      
        while(newNode){ //Re-executa o while no head do novo node
            if(newNode.value === storeCurrentValue){//Compara o valor que está vindo do head com o valor já armazenado
                count = count + 1 // Adiciona um no contador cada vez que entrar na validação
                if(count > 1){ // Se o contador estiver maior que 1 (significa que o valor foi visto mais de uma vez na lista) retorna 1 
                  
                    return 1;//Retorna (valor que deve retornar caso já tenha sido usado o valor na lista)
                }
            }
            newNode = newNode.next; //Passa a nova propriedade para o valor que foi utilizado.
        }
        count = 0 //Seta o contador para 0, para não acumular com os valores da lista
        currentNode = currentNode.next; // Passa para o próximo node
    }
    return 0;
}

hasCycle(linkedList);
