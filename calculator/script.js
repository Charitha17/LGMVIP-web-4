function dis(val){
    document.getElementById("result").value+=val;
}
function myfunction(x){
    if(x.key=='0' ||x.key=='1' ||x.key=='2'||x.key=='3'||x.key=='4'||x.key=='5'||x.key=='6'||x.key=='7'||x.key=='8'||x.key=='9'||x.key=='+'||x.key=='-'||x.key=='*'||x.key=='/' )
    document.getElementById("result").value+=x.key;
}
var cal = document.getElementById("calci");
        cal.onkeyup = function (p) {
            if (p.keyCode === 13) {
                console.log("Enter");
                let x = document.getElementById("result").value
                console.log(x);
                solve();
            }
        }
function solve(){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
function clr()
{
    document.getElementById("result").value="";
}