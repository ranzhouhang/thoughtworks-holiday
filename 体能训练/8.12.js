for(a=0;a<10;a++){
    for(b=0;b<10;b++){
        for(c=0;c<10;c++){
            if(a*a*a+b*b*b+c*c*c===a*100+b*10+c){
                if((a*100+b*10+c)>100){
                    console.log(a*100+b*10+c)
                }
            }
        }
    }
}