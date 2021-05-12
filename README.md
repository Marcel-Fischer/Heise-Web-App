# Aufgabe 1
Um die Apps zu starten bitte sowohl das Frontend als auch das Backend runterladen. Anschließend beides mit "npm install" initiieren. Das Backend kann anschließend mit dem Befehl "nodemon index.js" gestartet werden. Das Frontend mit "npm start". 

# Aufgabe 2

Der Client probiert mit dem Browser eine Get-Anfrage auf die Internetadresse „https://hk-test-api.herukoapp.com/temperature" zu initiieren. Der Server im Hintergrund der Webseite sendet eine Fehlermeldung „Internal Server Error“ mit dem Fehlercode 500 zurück an den Browser. Er zeigt an, dass bei der Verbindung zum Server ein Fehler aufgetreten ist. Der Statuscode 500 ist eine sehr allgemeine Fehlermeldung und gibt keine genauere Auskunft über das vorhandene Problem. Ohne Blick in die Server-Logs zu haben ist das Debugging aus dem Browser nur schwer möglich. Eine kurzfristige Lösung bietet das „Refreshen“ der Webseite. Dadurch wird der Inhalt der Webseite (13.5) sichtbar. Die eigentliche Fehlerursache könnte allerdings verschiedene Ursachen haben. Angefangen von Zeitüberschreitungen bis hin zu Fehlern im Code.
