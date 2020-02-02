// ist nicht aktiv
// Hier kommt ein einfacher Counter, bei dem man die Anzahl Sekunden eingeben kann 
// und der dann bis 0 herunterzählt
// geplante Option: am Schluss soll eine Meldung eingeblendet werden

document.write("Gib die Anzahl Sekunden ein und klicke dann auf Start.");
document.write("<br />Der Zähler kann zwischendurch gestoppt werden.");
gestartet=false
  function count(zahl){
  if (gestartet==false){
  countzahl=zahl;
  gestartet=true;
  document.form1.button.value="Stop";
  zaehler=setInterval("minus();",1000)
  }else{
  document.form1.button.value="Start";
  clearInterval(zaehler);
  gestartet=false
  }
  }
  function minus(){
  if(countzahl>0){
  countzahl--;
  document.form1.zeit.value=countzahl;
  }else{
  document.form1.button.value="Start";
  clearInterval(zaehler)
  gestartet=false
  }
  }
  
  function initcntdn() {
    document.write('<form name="form1">');
    document.write('<p><input type="text" value="300" maxlength="5" size="3" name="zeit" /><input type="button" name="button" value="Start" onclick="count(parseInt(document.form1.zeit.value))" /></p>');
    document.write('</form>');
  }