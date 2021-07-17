function Interestt(){
  let p = document.getElementById("in1").value;
  let r = document.getElementById("in2").value;
  let t = document.getElementById("in3").value;
  let s = document.getElementById("in4");
  let c = document.getElementById("in5");
  let d = (p*r*t)/100 ;
  let e = Number(d);
     s.value = e;
  let f = p*(Math.pow((1+r/100),t)) - p;
     let g = Number(f);
     c.value = g;

}
