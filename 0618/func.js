function NoBlockLevelScope(){
    
    if (1 > 0)
    {
        var myVar = 22;

    }

    console.log(myVar);
}
// console.log(myVar);

NoBlockLevelScope();
