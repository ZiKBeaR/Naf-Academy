 import React from "react";
 import './NavBar.css';
 import './Head.css';
 import './AktualKurslar.css';
 import './Oqituvchilar.css';
 import './Academya-Haqida.css';
 import './Chegirmalar.css';
 import './Izohlar.css';
 import raketa from './assets/raketa.png'
 import './Boglanish.css'
 import map  from './assets/map.png' 
 import logo from './assets/logo.png'
 import './end.css'
 import insta from './assets/insta.png'
 import youtube from'./assets/youtube.png'
 import telegram from'./assets/telegram.png'
 import feacebook from'./assets/feacebook.png'


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

      {/* ------------------------------------NIMA UCHUN NAF IT ACADEMY?------------------------------ */}

        <div className="Nima-uchun-naf-academya">

          <div className="academya-haqida"> <div> NIMA UCHUN </div> <div className="yellow-text margin-left-text">NAF IT ACADEMY?</div></div>
          <div className="academya-haqidagi-cards">
            <div className="cards-size">
              <div className="like cards-icon"></div>
              <div className="big-text-black">Hamyonbop narx</div>
              <div className="cards-line"></div>
              <div className="card-texts-flex-column"> <div> Kurslarning narxlari hamyonbop va chegirmalarga boy qilib belgilangan. </div> <div className="yellow-text margin-left-text"> Chegirmalar haqida pastda batafsil tanishasiz!</div></div>
            </div>
            <div className="cards-size">
              <div className="fire cards-icon"></div>
              <div className="big-text-black">Malakali murabbiylar</div>
              <div className="cards-line"></div>
              <div className="card-texts-flex-column"> <div className="card-texts-flex"> <div> O‘z sohasida kamida </div> <div className="yellow-text margin-left-text"> 3+ yillik tajriba </div> <div className="margin-left-text"> va </div> <div className="yellow-text margin-left-text"> real </div> </div> <div className="card-texts-flex"> <div className="yellow-text margin-left-text"> keyslarga ega </div> <div className="margin-left-text"> ustozlar ta’lim beradi. </div> </div> </div>
            </div>
            <div className="cards-size">
              <div className="shit cards-icon"></div>
              <div className="big-text-black">Sifatli ta’lim</div>
              <div className="cards-line"></div>
              <div className="card-texts-flex-column"> <div> Ustozlarimiz malakali mutaxassislarni </div> <div className="card-texts-flex"> <div> yetishtirib chiqarish uchun </div> <div className="yellow-text margin-left-text"> o‘z bilimlarini </div></div> <div className="card-texts-flex"> <div className="yellow-text margin-left-text"> qizg‘anishmaydi. </div> <div className="margin-left-text"> Buni o‘quvchilarimiz </div> </div> <div> natijalarida ham ko‘rishingiz mumkin.</div></div>
            </div>
            <div className="cards-size">
              <div className="pc cards-icon"></div>
              <div className="big-text-black">Online ta’lim olish imkoniyati</div>
              <div className="cards-line"></div>
              <div className="card-texts-flex-column"> <div> Sizning ortiqcha vaqtingiz va pulingizni </div> <div className="card-texts-flex"> <div> tejash maqsadida </div> <div className="yellow-text margin-left-text"> sifatli online ta’lim </div></div> <div> berishni ham yo‘lga qo‘yganmiz.</div></div>
            </div>
            <div className="cards-size">
              <div className="file cards-icon"></div>
              <div className="big-text-black">Ishga joylashish imkoniyati</div>
              <div className="cards-line"></div>
              <div className="card-texts-flex-column"> <div> Biz faqat ta’lim bermaymiz, balki </div> <div className="card-texts-flex"> <div> o‘quvchilarimizga </div> <div className="yellow-text margin-left-text"> ish topishiga ham </div> </div> <div> yordam beramiz.</div></div>
            </div>
            <div className="cards-size">
              <div className="paper cards-icon"></div>
              <div className="big-text-black">Sertifikat olish imkoni</div>
              <div className="cards-line"></div>
              <div className="card-texts-flex-column"> <div> Kurslarni bitirganingizdan so‘ng sizga </div> <div className="card-texts-flex"> <div className="yellow-text margin-left-text"> mutaxassislik sertifikatlari </div> <div className="margin-left-text"> beriladi va siz bu </div></div> sertifikat orqali ishga joylashishingiz osonlashadi.</div>
            </div>
          </div>
          <div className="royxatdan-otish-btn">
          <div className="head-login-btn text-color-black">Ro’yhatdan o’tish</div>
          </div>

        </div>

        {/* -----------------------------------------CHEGIRMALAR------------------------------------- */}

        <div className="chegirmalar">
          <div>
            <div className="chegirmalar-mavzu">REAL IMKONIYATLAR TAQDIM ETUVCHI <div className="yellow-text margin-left-text">CHEGIRMALAR</div></div>
          </div>
          <div className="card-texts-flex-column chegirmalar-text-size">
            <div className="card-texts-flex">Agar doʻstingiz <div className="yellow-text margin-left-text"> sizning tavsiyangizga koʻra </div> <div className="margin-left-text"> bizning oʻquv markazimizda taʼlim olsa, bizdagi istalgan</div></div>
            <div className="card-texts-flex">kursning dastlabki oyi uchun <div className="yellow-text margin-left-text"> 50% chegirmani</div> qoʻlga kiritasiz!</div>
          </div>
          <div className="chegirma-yellow-card">
            <div className="chegirma-yellow-card-left"><div className="chegirma-yellow-card-left-img"></div></div>
            <div className="chegirma-yellow-card-right">
              <div className="big-text-size">DO’STING BILAN KEL</div>
              <div className="chegirma-foizi">50%</div>
              <div className="small-text-size">Chegirma bizdan</div>
            </div>
          </div>
        </div>

        {/* -------------------------------Izohlar------------------------------- */}

      <div>

        <div className="izohlar">
          <div className="izohlar-mavzu">BITIRUVCHILARIMIZDAN IZOHLAR</div>
          <div className="izohlar-cards">
            <div className="izohlar-cards-size">
              <div className="video-btn-backg"> <div className="yellow-play-btn"></div> Videoni ko’rish</div>
              <div className="izoh-egasi-ismi">
                <div className="izohlar-card-yellow-small-text">Grafik dizayner</div>
                <div className="izohlar-card-name">Feruza Shermatova</div>
              </div>
            </div>
            <div className="izohlar-cards-size">
            <div className="video-btn-backg"> <div className="yellow-play-btn"></div> Videoni ko’rish</div>
              <div className="izoh-egasi-ismi">
                <div className="izohlar-card-yellow-small-text">Grafik dizayner</div>
                <div className="izohlar-card-name">Feruza Shermatova</div>
              </div>
            </div>
            <div className="izohlar-cards-size">
            <div className="video-btn-backg"> <div className="yellow-play-btn"></div> Videoni ko’rish</div>
              <div className="izoh-egasi-ismi">
                <div className="izohlar-card-yellow-small-text">Grafik dizayner</div>
                <div className="izohlar-card-name">Feruza Shermatova</div>
              </div>
            </div>
            <div className="izohlar-cards-size">
            <div className="video-btn-backg"> <div className="yellow-play-btn"></div> Videoni ko’rish</div>
              <div className="izoh-egasi-ismi">
                <div className="izohlar-card-yellow-small-text">Grafik dizayner</div>
                <div className="izohlar-card-name">Feruza Shermatova</div>
              </div>
            </div>
          </div>
          <div className="izohlar-small-text-size">
            <div className="card-texts-flex">Oʻquv kurslarimiz, ustozlar, qoʻlga kiritilgan bilim va koʻnikmalar, <div className="yellow-text margin-left-text"> olingan natijalar</div></div>
            <div>haqida bitiruvchilarimizdan eshiting hamda ulardan kerakli tavsiyalar oling.</div>
          </div>
        </div>

      </div>

      {/* ---------------------------------------NafAcademy bilan bog'lanish-------------------------------- */}

      <div className="Boglanish">
        <div className="boglanish-left">
          <div className="boglanish-big-yellow-text">NAF IT ACADEMY</div>
          <div className="boglanish-small-text">BILAN BOG’LANISH</div>
          <div><img src={raketa} alt="reaketa.png"/></div>
        </div>

        <div className="boglanish-right">
          <div className="large-text">Kontaktlaringizni qoldiring va biz sizga yaqin orada bog’lanamiz</div>
          <div className="bold-text">O’z ma’lumotlaringizni qoldiring</div>
          
          <div className="xabar-qoldirish">
            <div className="input-margin">
              <div className="input-text">Ism</div>
              <input type="text" className="input" required />
            </div>
            <div className="input-margin">
              <div className="input-text card-texts-flex">Telefon <div className="yellow-text margin-left-text">(Ko'rsatilishi shart)</div> </div>
              <input type="tel" className="input" placeholder="90 123 45 67" pattern="[0-9]{9}" maxLength="9" required></input>
            </div>
            <div className="input-margin">
              <div className="input-text">Kursni tanlang</div>
              <select name="" id="" className="input">
                <option value="Marketing">Marketing</option>
                <option value="Grafik dizayn">Grafik dizayn</option>
                <option value="Web dizayn">Web dizayn</option>
              </select>
            </div>
            <div className="input-margin">
              <div className="input-text">Xabaringizni qoldiring</div>
              <textarea name="" id="" cols="30" rows="10" className="input textarea"></textarea>
            </div>

              <div className="head-login-btn text-color-black">Xabar qoldirish</div>

            <div className="card-texts-flex input-margin">
              <div>
                <input type="checkbox" />
              </div>
              <div className="checkbox-text" required>
                <div>Men shaxsiy ma'lumotlarni qayta ishlashga</div>
                <div className="card-texts-flex">rozilik beraman va <div className="yellow-text margin-left-text maxfiylik-text"> maxfiylik siyosatiga</div> roziman</div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* -----------------------------------------end-------------------------------- */}

      <div className="end">
        <div className="end-left">
          <div><img src={logo} alt="" /></div>
          <div>
            <div className="end-text-color">Manzil</div>
            <div>Toshkent, Chilonzor tumani, Shoxmed Klinikasi yonida</div>
          </div>
          <div>
            <div  className="end-text-color">Telefon nomer</div>
            <div>+99895 111 35 37</div>
          </div>
          <div>
            <div  className="end-text-color">Ijtimoiy tarmoqlar</div>
            <div className="card-texts-flex end-logos">
              <div><img src={insta} alt="" /></div>
              <div className="logos-margin-left"><img src={youtube} alt="" /></div>
              <div className="logos-margin-left"><img src={telegram} alt="" /></div>
              <div className="logos-margin-left"><img src={feacebook} alt="" /></div>
            </div>
          </div>
        </div>

        <div className="end-right">
          <div><a href="https://yandex.ru/maps/org/naf_academy/99191835879/?ll=69.187067%2C41.278394&z=17.09"><img src={map} alt=""/></a></div>
        </div>
      </div>


    </div>
)}

export default NafAcademy