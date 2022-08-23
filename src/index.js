//import React from 'react';
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import styled, { css } from "styled-components";

//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getElementError } from '@testing-library/react';





//export default tajuk;



const root = ReactDOM.createRoot(document.getElementById('root'));

//var element = React.createElement('h1',{ className: 'Greeting ',align:'center'},'Hello World');
var myHeaders = new Headers();
myHeaders.append("Cookie", "PHPSESSID=9brhp3rh8mnph3pfsh03h15nok; TS01ca5017=01714ff36171fd66bd7253591ba05677a71a4df54ab5e3b1c3c0c1981484779eaed27b890ec3941c14913a55ea5650c07c921ff7012df757e954eb8fb81d8f70fc5c25e26d");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

//let respong="init"
//const element0 = <h1>Hi He</h1>
//root.render(element0)
fetch("https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=week&zone=TRG01")
  .then(response => response.json())
  .then(result => {
    //let date=result.prayerTime.date;
    //let day=result.prayerTime[0].day;
    //let subuh=result.prayerTime[0].fajr;
    //console.log(respong)
    var hari="Hari";
    var dateToday="";
    var hijriToday="";
    var imsakToday="";
    var subuhToday="";
    var syurukToday="";
    var zohorToday="";
    var asarToday="";
    var maghribToday="";
    var isyakToday="";






    const harini= new Date();
    const bulan=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const tarikhArini=`${harini.getDate().toString().padStart(2,'0')}-${bulan[harini.getMonth()]}-${harini.getFullYear()}`;
    console.log("heilah" + tarikhArini)
    
    const Tajukbesar = styled.span`
      textAlign: center;
      font-family: Arial;
      font-postscript-name: arial-regular;
      font-style: normal;
      font-weight: 100;
      color: rgba(126,211,33,1);
      font-size: 30px;
      margin-top: 10px;
      display: flex;
      height: 10vh;
      width: 100vw;
      `; 

      const Subtajuk = styled.span`
      textAlign: center;
      font-family: Arial;
      font-postscript-name: arial-regular;
      font-style: normal;
      font-weight: 100;
      color: rgba(126,211,33,1);
      font-size: 30px;
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      width: 100vw;   
      `; 


      const Senarai = styled.li`
      font-family: Arial;
      font-postscript-name: arial-regular;
      font-style: normal;
      font-weight: 100;
      color: rgba(126,211,33,1);
      font-size: 20px;
      margin: 10px;    
      `; 

      const Container = styled.div`
        display: flex;
       
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        max-width: 100%;
        
      `;
      const ImageStack = styled.div`
      width: 100vw;
      height: 600px;
      text-align: center;
      display: flex;
      flex-direction: column;
      
      background-image: url(${require("../src/assets/images/20220611_193707.jpg")});
      background-repeat: no-repeat;
      background-blend-mode: lighten;
      background-size: 100% 100%;
      background-color: rgba(255,255,255,0.4);
      
    `;    
      const WaktuSolatHariIni = styled.div`
      font-family: Verdana;
      margin-left : auto;
      margin-right: auto;
      font-style: normal;
      font-weight: 400;
      color: rgba(133,247,8,1);
      font-size: 30px;
      
    `;

      const ContainerSolat = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin-left : auto;
      margin-right: auto;
      margin-top: auto;
      margin-bottom: auto;      
    `;

    const ContainerWaktu = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin: 10px;
    `;

    const Zon = styled.div`
      margin: auto;
      bottom: 10px;
      width:100vh;
      
      `;

      

      const Image = styled.div`
           
      width: 100vw;
      height: 100vw;
      
      opacity: 0.54;
      background-color: rgba(155,218,86,0.54);
      
      
      background-image: url(${require("../src/assets/images/20220611_193707.jpg")});
      
    `;

     
   
// IMSAK top: 173px;
//left: 637px;
      const Imsak = styled.div`
        font-family: Verdana;
        
        
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 34px;
        text-align: center;
       
      `;
      
      //top: 138px;
      //left: 637px;
      

      //SYuruk top: 173px;
      //  left: 1038px;
      const Syuruk = styled.div`
        font-family: Verdana;
       
        margin-lefft: 10px;
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 34px;
        text-align: center;
      `;

      //top: 173px;
      //left: 175px;
      const Subuh = styled.div`
        font-family: Verdana;
        
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 34px;
        text-align: center;
      `;

      
      //top: 393px;
      //left: 115px;
      const Zohor = styled.div`
        font-family: Verdana;
        
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 34px;
        text-align: center;
      `;

      //top: 393px;
      //left: 489px;
      const Asar = styled.div`
        font-family: Verdana;
        
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 34px;
        text-align: center;
      `;

      //top: 393px;
      //left: 812px;
      const Maghrib = styled.div`
        font-family: Verdana;
       
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 34px;
        text-align: center;
      `;

      //top: 393px;
      //left: 1119px;
      const Isyak = styled.div`
        font-family: Verdana;
     
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 34px;
        text-align: center;
      `;
      const Reqimsak = styled.div`
      font-family: Verdana;
      margin: 10px
      font-style: normal;
      font-weight: 400;
      color: rgba(208,2,27,1);
      font-size: 25px;
      text-align: center;
    `;
      const Reqsubuh = styled.div`
        font-family: Verdana;
        margin: 10px
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 25px;
        text-align: center;
      `;

      


      const Reqsyuruk = styled.div`
      font-family: Verdana;
      margin: 10px
      font-style: normal;
      font-weight: 400;
      color: rgba(208,2,27,1);
      font-size: 25px;
      text-align: center;
      `;

      const Reqzohor = styled.div`
        font-family: Verdana;
        margin: 10px
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 25px;
        text-align: center;
      `;

      const Reqasar = styled.div`
        font-family: Verdana;
        margin: 10px
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 25px;
        text-align: center;
      `;

      const Reqmaghrib = styled.div`
        font-family: Verdana;
        margin: 10px
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 25px;
        text-align: center;
      `;

      const Reqisyak = styled.div`
      font-family: Verdana;
      margin: 10px
        font-style: normal;
        font-weight: 400;
        color: rgba(208,2,27,1);
        font-size: 25px;
        text-align: center;
    `;

                     

      





      

    const element = (
    
    
    <span>
    
    <Subtajuk>Jadual Waktu Solat Seminggu bagi Zone  : {result.zone}</Subtajuk>
    <table style={{borderSpacing:'10px',textAlign:'center'}}>
    <th>Tarikh</th><th>Hijri</th><th>Hari</th><th>Imsak</th><th>Subuh</th><th>Syuruk</th><th>Zohor</th>
    <th>Asar</th><th>Magrhib</th><th>Isyak</th>
      
        {result.prayerTime.map(solat => {
        hari=solat.day;
        if (solat.day=="Sunday"){hari="Ahad"}
        else if (solat.day=="Monday"){hari="Isnin"}
        else if (solat.day=="Tuesday"){hari="Selasa"}
        else if (solat.day=="Wednesday"){hari="Rabu"}
        else if (solat.day=="Thursday"){hari="Khamis"}
        else if (solat.day=="Friday"){hari="Jumaat"}
        else if (solat.day=="Saturday"){hari="Sabtu"}
        return<tr key={solat.date}>
        <td style={{color:'red'}} >{solat.date}</td><td>{solat.hijri}</td><td>{hari}</td><td>{solat.imsak}</td><td>{solat.fajr}</td><td>{solat.syuruk}</td>
        <td>{solat.dhuhr}</td><td>{solat.asr}</td><td>{solat.maghrib}</td><td>{solat.isha}</td>
        
        </tr>
    
    
      })}
      
      
    </table>
    </span>);

     {result.prayerTime.map(ement => {
      if (ement.date===tarikhArini){
        hari=ement.day;
        if (ement.day=="Sunday"){hari="Ahad"}
        else if (ement.day=="Monday"){hari="Isnin"}
        else if (ement.day=="Tuesday"){hari="Selasa"}
        else if (ement.day=="Wednesday"){hari="Rabu"}
        else if (ement.day=="Thursday"){hari="Khamis"}
        else if (ement.day=="Friday"){hari="Jumaat"}
        else if (ement.day=="Saturday"){hari="Sabtu"}
        dateToday=ement.date;
        hijriToday=ement.hijri;
        imsakToday=ement.imsak;
        subuhToday=ement.fajr;
        syurukToday=ement.syuruk;
        zohorToday=ement.dhuhr;
        asarToday=ement.asr;
        maghribToday=ement.maghrib;
        isyakToday=ement.isha;
      }
      
     })}
   
    
    root.render(
      <body>
      <Container>
           <ImageStack>
           <WaktuSolatHariIni>Waktu Solat Hari Ini, {hari} {dateToday} bersamaan {hijriToday}</WaktuSolatHariIni>
            <ContainerSolat>
              <ContainerWaktu>
                
                <Imsak>
                <Reqimsak>{imsakToday}</Reqimsak>
                IMSAK</Imsak></ContainerWaktu>
                <ContainerWaktu><Syuruk>
                <Reqsyuruk>{syurukToday}</Reqsyuruk>
                  SYURUK</Syuruk></ContainerWaktu>
                  <ContainerWaktu><Subuh>
                <Reqsubuh>{subuhToday}</Reqsubuh>
                  SUBUH</Subuh></ContainerWaktu>
                  <ContainerWaktu><Zohor>
                <Reqzohor>{zohorToday}</Reqzohor>ZOHOR</Zohor></ContainerWaktu>
                <ContainerWaktu><Asar>
                <Reqasar>{asarToday}</Reqasar>
                ASAR</Asar></ContainerWaktu>
                <ContainerWaktu><Maghrib>
                <Reqmaghrib> {maghribToday}</Reqmaghrib>
                MAGHRIB</Maghrib></ContainerWaktu>
                <ContainerWaktu><Isyak>
                  <Reqisyak>{isyakToday}</Reqisyak>
                ISYAK</Isyak></ContainerWaktu>
              
            </ContainerSolat>
            </ImageStack>
        <Zon>{element}</Zon>
      </Container>
      </body>
    )
      })
  .catch(error => console.log('error', error));

//console.log(respong)



//element.createElement('p',{className:'test p'},'PPPPP');

//element = React.createElement('p',{className:'Respon'},respong);


//ReactDOM.render(element,document.getElementById('root'));
//ReactDOM.render()

//const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
