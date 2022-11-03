 import React from "react";
 import './NavBar.css';
 import './Head.css';
 import './AktualKurslar.css';
 import './Oqituvchilar.css';



 const NafAcademy = () => {
  return (
    <div>


    <div className="head-backg">
    <div className="head-backg-img">

{/* -----------------------------------Nav Bar------------------------------------------------ */}

      <div className="NavBar">
        <div className="Naf-logo"></div>
        <div className="navbar-text">
          <div>Kurslar</div>
          <div className="text-center-line"></div>
          <div>Biz bilan aloqa</div>
        </div>
      </div>    

{/* -------------------------------Head------------------------------------------------ */}

      <div className="head-text">
        <div className="head-yellow-text">Zamonaviy kasblarni oʻrganib hayotingni</div>
        <div className="head-big-text">180° ga</div>
        <div className="head-yellow-text">oʻzgartir</div>
        <div className="head-login-btn">Ro’yhatdan o’tish</div>
      </div>

      </div>

{/* ---------------------------backg-stars-img---------------------------- */}

      <div className="backg-stars-img">

        <div className="backg-stars-text">
          <div className="yellow-line"></div>
            <div>
            <div className="white-box">Statistika ma’lumotlariga qaraganda, dunyoda <pre> 60%  ODAM O’ZI YOQTIRMAGAN </pre> ishda ishlashga majbur bo‘lar ekan.</div>
            <div className="white-text">BUNING ASOSIY SABABLARI:</div>
          </div>
        </div>

        <div className="yellow-boxs">
          <div className="yellow-box">
            <div className="money"></div>
            <div className="yellow-box-text">Daromadning kamligi</div>
          </div>
          <div className="yellow-box">
            <div className="headcas"></div>
            <div className="yellow-box-text">O‘g‘ir jismoniy mehnat</div>
          </div>
          <div className="yellow-box">
            <div className="stress"></div>
            <div className="yellow-box-text">Noqulay ish sharoiti</div>
          </div>
      </div>

      <div className="question">
        <div className="question-text">Albatta, oramizda ko‘pchilikda <div> USHBU MUAMMO BOR</div> yoki <div>KAFOLATLANMAGAN</div></div>
        <div className="question-text width-text"> <div> TA’LIM DARGOHLARINI BITIRIB,</div> bu muammolarga <div> DUCH KELISH EHTIMOLI</div></div>
        <div className="question-text width-text">mavjud. Hammamizda bir savol tug‘iladi:</div>
        <div className="question-text-yellow-end">BUNGA YECHIM BORMI?</div>
      </div>

      </div>


    </div>

{/* ---------------------------backg-img-mauntain-------------------------------- */}

    <div>
        
        <div className="backg-img-mauntain">
          <div className="text-black-backg">
            <div className="yellow-texts-black-bckg">Albatta, bugun <div> ZAMONAVIY KASBLARNI O’RGANISH </div> orqali ushbu muammollarga</div>
            <div className="yellow-texts-black-bckg">barham berish mumkin. Lekin bugun zamonaviy kasblarni <div> O’RGANISH </div></div>
            <div className="yellow-texts-black-bckg"> <div> AYRIMLAR UCHUN QIMMATLIK </div> qiladi. <div>ARZON KURSLAR </div> esa <div> SIFATSIZ.</div> </div>
            <div className="yellow-texts-black-bckg">Aynan yuqoridagi holatlarni bartaraf etish uchun <div> NAF IT ACADEMY</div></div>
            <div className="yellow-texts-black-bckg"> sizga <div>YORDAM BERADI.</div></div>
          </div>
        </div>

    </div>

{/* -------------------------------AktualKurslar----------------------------- */}

    <div>
      <div className="aktual-kurslar">
      <div>AKTUAL KURSLAR</div>
      </div>

      <div className="aktual-kurslar-left-right-displey">
        <div className="aktual-kurslar-left">
          <div className="aktual-kurslar-left-btn">
            <div className="Marketing btns">Marketing</div>
            <div className="Grafik-dizayn btns">Grafik dizayn</div>
            <div className="web-dizayn btns">Web dizayn</div>
          </div>
          <div className="aktual-kurslar-left-texts">
          <div className="kurs-name">Marketing</div>
          <div className="yellow-black-text"><div>Agar siz grafik dizayn sohasini kuchli o'rgansangiz</div>
          <div className="aktual-kurslar-left-text-yellow">umringizni oxirigacha pul haqida qayg'urmaysiz.</div></div>
          <div>Grafik dizayn 4 oy davomiyligi 3 oy nazariy amaliy 1 oy faqat amaliy.
Dars davomida photoshop,illustrator,figma dasturlari o’rgatiladi
Smm post yaratish,logo brending, web dizayn yonalishlari o’rgatiladi (qo’shimcha poligrafik dizayn,qadoq dizayni,tipografik dizayn boshlang’ich darajada o’rgatiladi).Texnalogiylardan: shriftlar bilan ishlash,ranglar garmoniyasi,dizayn texnalogiyasi,dizaynda uslub va dizayn nazaryasi to’liq o’rgatiladi.</div>
          <div className="aktual-kurslar-left-bold-text">Siz kansultatsiyadan ro'yxatdan o'tishingiz mumkin bu mutlaqo bepul.Bu kansultatsiyada siz pulga sotib olib bo'lmaydigan ma'lumotlarni olasiz.Kansultatsiyamiz yoqmasa bir tin to'lamaysiz va kansultatsiyadan keyin bizdan sotib olishga majbur bo'lmaysiz.</div>
        </div>
        </div>

        <div className="aktual-kurslar-right">
          <div className="video-player"></div>
        </div>
      </div>

    </div>

    {/* --------------------------O'qituvchilarimiz bilan tanishing------------------ */}

      <div className="oqituvchilar">
        <div className="oqituvchilar-left oqituvchilar-btn"><div className="oqituvchilar-btn-left-icon"></div></div>
        
        <div className="oqituvchilar-center">
          <div className="head-text-oqituvchilar-bilan-tanishish">
              <div className="yellow-text head-text-size">O’QITUVCHILARIMIZ </div>
              <div>BILAN TANISHING</div>            
          </div>

          <div className="tanishuv-window">
            <div className="tanishuv-left">
              <div className="tanishuv-yonalishi">
                <div className="black-line"></div>
                <div className="yonalish-text-size">Grafik & web dizayner</div>
              </div>
              <div className="oqituvchi-name">Mironshoh Nasimov</div>
              <div className="oqituvchi-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacus, neque, mauris, nam neque. Sapien morbi nisi, etiam duis at ac amet dictum amet. Nisi amet amet vel diam ridiculus habitasse dictum. Quam tincidunt suspendisse amet lectus sed vitae tempus cras. Enim mi quam ut nulla vitae, magna neque, sollicitudin. </div>
              
              <div className="oqituvchi-infos-cards">
                <div className="oqituvchi-info-card-text">
                  <div className="yellow-number">3+</div>
                  <div className="card-small-text">Yillik tajriba</div>
                </div>
                <div className="oqituvchi-info-card-text">
                  <div className="yellow-number">125+</div>
                  <div className="card-small-text">Loyihalar</div>
                </div>
                <div className="oqituvchi-info-card-text">
                  <div className="yellow-number">50+</div>
                  <div className="card-small-text">O’quvchilar</div>
                </div>
              </div>
            </div>

            <div className="tanishuv-right">
              <div className="oqituvchi-img"></div>
            </div>
          </div>
        </div>
        
        <div className="oqituvchilar-right oqituvchilar-btn"><div className="oqituvchilar-btn-right-icon"></div></div>
      </div>

    </div>
)}

export default NafAcademy