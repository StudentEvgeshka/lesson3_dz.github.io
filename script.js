var flag=true;
var ch1='';
var ch2='';
var op=''

function oper(v) {
	flag=false;
	op=document.getElementById(v).value;
}

function rovno()
{	var rezult;
	var a=parseFloat(ch1);
	var b=parseFloat(ch2);
	flag=true;
	switch (op){

		case 'sum': { rezult= a+b; break;}
		case 'umn': { rezult= a*b; break;}
		case 'del': { if (b==0){rezult='не можливо'}else{rezult= a/b;} break;}
		case 'min': { rezult= a-b; break;}
		}
		var ekran = document.getElementById('ekran');
		ekran.innerHTML = rezult;
}

function sbros()
{	flag=true;
	var ekran = document.getElementById('ekran');
	ekran.innerHTML = 0;
	ch1='';
	ch2='';
}

function chislo(a)
{ var chislo='';
 	if (flag == true){
		chislo=document.getElementById(a).value;
		ch1+=chislo;
		var x=document.getElementById('ekran');
		ekran.innerHTML = ch1;
	} else {
		chislo=document.getElementById(a).value;
		ch2+=chislo;
		var x=document.getElementById('ekran');
		ekran.innerHTML = ch2;
	}

}

