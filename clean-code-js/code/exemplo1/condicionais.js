// Sem refatoração
function Login(isAdmin,isLogged, isWifi){
    if(isWifi){
        if(isLogged){
            if(isAdmin){
                AccessAdminPanel();
            }else{
                console.log("Só pode entrar aqui se for admin!")
            }
        }else{
            console.log("Só pode entrar aqui se estiver logado!")  
        }
    }else{
            console.log("Só pode entrar aqui se o modo for WIFI!")
        }
    }

    
function AccessAdminPanel(){
}

// Com refatoração
function Login(isAdmin,isLogged, isWifi){

    if(!isWifi){
        console.log("Só pode entrar aqui se o modo for WIFI!");
        return;
    }

    if(!isLogged){
        console.log("Só pode entrar aqui se estiver logado!")  ;
        return;
    }

    if(!isAdmin){
        console.log("Só pode entrar aqui se for admin!");
        return;
    }
    AccessAdminPanel();
}

// Outro recurso de limpar condicionais usando ternário
let country = "Brasil";
let person = "";

if(country == "Brasil"){
    person = "Brasileiro";
}else{
    person = "Outro";
}

// fazendo a mesma coisa mas com o uso de ternário
let country2 = "Brasil";
let person2 = (country2 == "Brasil") ? "Brasileiro" : "Outro";
