function print_contact () {
    alert ('skype:helper  \n telegramm:@helper \n telephone 1234567890')
}
function on_enter () {

    b = document.getElementById ('button');
    b.style.backgroundColor = "green";
    b.style.borderRadius = "0px";
    b.style.padding = "20px";

}

function on_leave () {

    b = document.getElementById ('button');
    b.style.backgroundColor = "red";
    b.style.borderRadius = "15px";
    b.style.padding = "10px";

}

function on_enter1 () {

    b = document.getElementById ('button1');
    b.style.backgroundColor = "brown";
    b.style.borderRadius = "8px";
    b.style.padding = "15px";

}

function on_leave1 () {

    b = document.getElementById ('button1');
    b.style.backgroundColor = "yellow";
    b.style.borderRadius = "4px";
    b.style.padding = "5px";

}
function changed_style () {

    b = document.getElementById('button2');

    if (window.getComputedStyle (b) .backgroundColor == "rgb (255, 0, 0) " )
    {
        b.style.backgroundColor = "green" ;
    }

    else 
        b.style.backgroundColor = "red" ;

    if (window.getComputedStyle (b) .borderRadius != "0px")
    {
        b.style.borderRadius = "0px"
    }
    else
        b.style.borderRadius = "10px" ;

    if (window.getComputedStyle (b) .padding != "20px"  )
    {
        b.style.padding = "20px";
    }
    else
    b.style.padding = "5px";
}

function show_modal () {
    var modal = document.getElementById("myModal");
    
    modal.style.display = "block";
}