function rps(n){
    let user;
    let com = Math.floor(Math.random() * 3);
    let meRes = document.getElementsByClassName("competition")[0];
    let comRes = document.getElementsByClassName("competition")[1];
    let popnowin = document.getElementsByClassName("popup-nowin")[0];
    let popfail = document.getElementsByClassName("popup-fail")[0];
    let popwin = document.getElementsByClassName("popup-win")[0];

    switch(n){
        case 0:
            user = "scissors";
        break;
        case 1:
            user = "rock";
        break;
        case 2:
            user = "paper";
        break;
    }
    document.getElementById(user).style.transform = "scale(1.5)";
    document.getElementsByClassName(user)[0].style.display = 'block';
        
    switch(com){
        case 0:
            com = "scissors";
            document.getElementById('com-img').src = "images/sis.png";
        break;
        case 1:
            com = "rock";
            document.getElementById('com-img').src = "images/rock.png";
        break;
        case 2:
            com = "paper";
            document.getElementById('com-img').src = "images/paper.png";
        break;
    };
    if(user == "scissors"){
        document.getElementById('user-img').src = "images/sis.png";
    }else if(user == "rock"){
        document.getElementById('user-img').src = "images/rock.png";
    }else if(user == "paper"){
        document.getElementById('user-img').src = "images/paper.png";
    };
    if(((com == "scissors") && (user == "rock")) || ((com == "rock") && (user == "paper")) || ((com == "paper") && (user == "scissors"))){
        // 이김
        meRes.classList.toggle('me-success');
        popwin.style.display = "block";
    }else if(((com == "scissors") && (user == "paper")) || ((com == "rock") && (user == "scissors")) || ((com == "paper") && (user == "rock"))){
        // 짐
        comRes.classList.toggle('com-success');
        popfail.style.display = "block";
    }else{
        meRes.classList.toggle('me-com');
        comRes.classList.toggle('me-com');
        popnowin.style.display = "block";
        // relax;
    };




    function initFunc(){
        meRes.classList.remove('me-success');
        meRes.classList.remove('me-com');
        comRes.classList.remove('me-com');
        comRes.classList.remove('com-success');
        popnowin.style.display = "none";
        popfail.style.display = "none";
        popwin.style.display = "none";
        document.body.style.backgroundColor = "white";
        document.getElementById('scissors').style.transform = "scale(1)";
        document.getElementById('rock').style.transform = "scale(1)";
        document.getElementById('paper').style.transform = "scale(1)";
        document.getElementsByClassName("scissors")[0].style.display = 'none';
        document.getElementsByClassName("rock")[0].style.display = 'none';
        document.getElementsByClassName("paper")[0].style.display = 'none';
    };
    setTimeout(initFunc, 1000);
};

