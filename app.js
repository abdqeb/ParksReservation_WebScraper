var request = require("request");
var fs = require("fs");
const nodeMailer = require('nodemailer');

var timer = 1000 * 60 * 15; //Every 15 minutes
var counter = -1;
console.log("The Start!  --  " + Date(Date.now()));
setTimeout(ScrapeCampSite, timer);


console.log("Before Function!");
function ScrapeCampSite(){
    counter++;
    console.log(Date(Date.now()) + " -- Scrape Attempt: " + counter);

    var options = { method: 'GET',
    url: 'https://reservation.pc.gc.ca/BrucePeninsula/CyprusLake',
    qs: { List: '' },
    headers: 
        { 'cache-control': 'no-cache',
        Connection: 'keep-alive',
        referer: 'https://reservation-pc.fjgc-gccf.gc.ca/GccfLanguage.aspx?lang=eng&ret=https%3a%2f%2freservation.pc.gc.ca%3a443%2fBrucePeninsula%2fCyprusLake%3fList',
        cookie: 'ASP.NET_SessionId=lavvhsnsxamzrxw15krqyw0e; BNI_persistence=cNROLq8_bq8Km97zbPUTpOBuSIuu78qd0sTx2JVUrdCrZumEjReRvWmFp8JHVmORs-y0bPLEzyZ5uNo4djGFOg==; BNES_ASP.NET_SessionId=w7jDoWAde2PXQE8pCYbxAXyYEnfTzqn/yoy7kP5BnmXvp0diSInbl7k1F+0NYPsUHz29bjuh9+ba4fLfirC3nEndg3BS7h0hw+w96J0zoB2SBOI051DKew==; CookieLocaleName=en-CA; BNES_CookieLocaleName=RLVhy35OJa5CYslFVDSXTyY4FSRJ7l5Mz380D8Va/6yrln1YkWwRR30Vz4MMT/2mxElTYeAV52RBRaHB+0KqueWKa3UogLvf',
        'Postman-Token': 'f45208fc-e5e3-40c3-b732-efc5d6222f49,9422a5d3-d3b9-45d2-b325-d74d0c826b94',
        'Cache-Control': 'no-cache',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
        'Upgrade-Insecure-Requests': '1' } };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);
        //   fs.appendFile("log.txt", body, "utf8", err => {
        //     if (err) console.log("Error Appending to log.txt: " + err);
        //   });
    });


    var options = { method: 'POST',
    url: 'https://reservation.pc.gc.ca/ResInfo.ashx',
    headers: 
        { 'cache-control': 'no-cache',
        Connection: 'keep-alive',
        'content-length': '160',
        'accept-encoding': 'gzip, deflate',
        cookie: 'ASP.NET_SessionId=lavvhsnsxamzrxw15krqyw0e; BNI_persistence=cNROLq8_bq8Km97zbPUTpOBuSIuu78qd0sTx2JVUrdCrZumEjReRvWmFp8JHVmORs-y0bPLEzyZ5uNo4djGFOg==; BNES_ASP.NET_SessionId=w7jDoWAde2PXQE8pCYbxAXyYEnfTzqn/yoy7kP5BnmXvp0diSInbl7k1F+0NYPsUHz29bjuh9+ba4fLfirC3nEndg3BS7h0hw+w96J0zoB2SBOI051DKew==; CookieLocaleName=en-CA; BNES_CookieLocaleName=RLVhy35OJa5CYslFVDSXTyY4FSRJ7l5Mz380D8Va/6yrln1YkWwRR30Vz4MMT/2mxElTYeAV52RBRaHB+0KqueWKa3UogLvf',
        Host: 'reservation.pc.gc.ca',
        'Postman-Token': 'f9aa0721-f2fc-453d-b504-17fce9ed8b4c,f6285271-c376-46dd-b690-bdd9c6ab0e5f',
        'Cache-Control': 'no-cache',
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
        Origin: 'https://reservation.pc.gc.ca' },
    form: 
        { Accessible_excl: 'on',
        apId: 'null',
        arrDate: '2019-07-20',
        bookingDisplay: '1',
        equipment: '',
        equipmentSub: 'MediumTent',
        nights: '1',
        partySize: '6',
        resType: 'Campsite',
        tentPads: '',
        vehicleType: '' } };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);
        //   console.log(body);
    });


    var options = { method: 'GET',
    url: 'https://reservation.pc.gc.ca/BrucePeninsula/CyprusLake',
    qs: { List: '' },
    headers: 
        { 'cache-control': 'no-cache',
        Connection: 'keep-alive',
        referer: 'https://reservation-pc.fjgc-gccf.gc.ca/GccfLanguage.aspx?lang=eng&ret=https%3a%2f%2freservation.pc.gc.ca%3a443%2fBrucePeninsula%2fCyprusLake%3fList',
        //  'accept-encoding': 'gzip, deflate',
        cookie: 'ASP.NET_SessionId=lavvhsnsxamzrxw15krqyw0e; BNI_persistence=cNROLq8_bq8Km97zbPUTpOBuSIuu78qd0sTx2JVUrdCrZumEjReRvWmFp8JHVmORs-y0bPLEzyZ5uNo4djGFOg==; BNES_ASP.NET_SessionId=w7jDoWAde2PXQE8pCYbxAXyYEnfTzqn/yoy7kP5BnmXvp0diSInbl7k1F+0NYPsUHz29bjuh9+ba4fLfirC3nEndg3BS7h0hw+w96J0zoB2SBOI051DKew==; CookieLocaleName=en-CA; BNES_CookieLocaleName=RLVhy35OJa5CYslFVDSXTyY4FSRJ7l5Mz380D8Va/6yrln1YkWwRR30Vz4MMT/2mxElTYeAV52RBRaHB+0KqueWKa3UogLvf',
        'Postman-Token': 'f45208fc-e5e3-40c3-b732-efc5d6222f49,9422a5d3-d3b9-45d2-b325-d74d0c826b94',
        'Cache-Control': 'no-cache',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
        'Upgrade-Insecure-Requests': '1' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        var msg = "";
        if (body.includes("area avail"))
            msg = "True!";
        else if (body.includes("area unavail"))
            msg = "False!";
        else
            msg = "Error!"

        if (counter % 16 == 0)
            msg = "Still Alive, but nothing found!"

        if (msg != "False!"){
            var transporter = nodeMailer.createTransport({
                host: 'MVDC01.mittenvinyl.local',
                port: 25,
                secure: false
            });
            var mailOptions = {
                from: '"NodeJs Test" <nodejs@mittenbp.com>', // sender address
                to: 'abdqeb@gmail.com, aqeblawi@mittenbp.com', // list of receivers
                subject: 'Camp Monitor: ' + msg, // Subject line
                text: 'Hello world in text?' + counter, // plain text body
                html: '<b>Hello world in html?</b>' + counter // html body
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                console.log(error);
                } else {
                console.log("Success sending email!");
                }
            });
        }

        fs.appendFile("log.txt", body, "utf8", err => {
            if (err) console.log("Error Appending to log.txt: " + err);
        });
    });
  
    setTimeout(ScrapeCampSite, timer);
}

console.log("The End!");
