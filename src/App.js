import Footer from "./components/Footer";
import { useEffect } from "react";
import "./App.css";
import Response from "./components/response";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";

function App() {
  const check = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let correct = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        if (checkboxArray[i].name === "_4" || checkboxArray[i].name === "_2") {
          correct += 1;
        }
      }
    }
    document.querySelector(".top-container").style.display = "block";

    answer(correct);
  };
  const answer = (correct) => {
    if (correct === 0) {
      document.querySelector(".an0").style.display = "block";
    } else if (correct === 1) {
      document.querySelector(".an1").style.display = "block";
    } else if (correct === 2) {
      document.querySelector(".an2").style.display = "block";
    }
  };

  const times = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let selected = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        selected += 1;
      }
    }
    if (selected !== 2) {
      document.querySelector("#submit").removeEventListener("click", check);
    } else {
      document.querySelector("#submit").addEventListener("click", check);
    }
  };

  useEffect(() => times());
  const documents = [
    "صورة الضحية رامي",
    "دفتر مذكرات رامي",
    "تقرير الطبيب الشرعي",
    "ﺧرﻳﻄﻪ المنزل",
    "استمارة سلاح الجريمة",
    "صورة المشتبه ﺑﻪ­ - غسان ﻋﻠﻲ ﺻﺎﻟﺢ",
    "معلومات المشتبه ﺑﻪ - غسان علي صالح",
    "افادة الشاهد - اثير ﻋﻤر",
    "افادة الشاهد - فادي ﺻﻬﻴﺐ",
    "تحقيق الشرطة - غسان ﻋﻠﻲ ﺻﺎﻟﺢ",
    "صورة المشتبه ﺑﻪ - ­ﺳﻴﻒ الحق ",
    "معلومات المشتبه ﺑﻪ - ­ﺳﻴﻒ الحق ",
    "افادة اﻟﺸﺎﻫﺪ­ - الاستاذ فاروق",
    "اﻓﺎﺩﺓ اﻟﺸﺎﻫﺪ - انور ﻣﻬﻴﺐ",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﺳﻴﻒ الحق",
    "وثيقة المنحة",
    "صورة المشتبه به - ­ﻣﺤﺴﻦ ﺻﺒﻲ وثب ",
    "معلومات المشتبه ﺑﻪ­ - ﻣﺤﺴﻦ ﺻﺒﻲ وثب",
    "افادة اﻟﺸﺎﻫﺪ­ - ﻧﺒﻴﻞ حكيم ",
    "افادة اﻟﺸﺎﻫﺪ - ­ﺳﻤﻴﺢ ﻣﺆﻣﻦ",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﻣﺤﺴﻦ ﺻﺒﻲ وثب",
    "استمارة شهادة وفاة زهرة",
    "صورة المشتبه ﺑﻪ­ - ﺧﺎﻟﺪ اﺣﻤﺪ رضى",
    "معلومات المشتبه ﺑﻪ­ - ﺧﺎﻟﺪ اﺣﻤﺪ رضى",
    "افادة اﻟﺸﺎﻫﺪ­ - كمال رزق",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﺧﺎﻟﺪ اﺣﻤﺪ رضى",
    "صورة المشتبه ﺑﻪ - ­اﺑراﻫﻴﻢ ﻣﻨﻴﻒ",
    "معلومات المشتبه ﺑﻪ - ­اﺑراﻫﻴﻢ ﻣﻨﻴﻒ",
    "افادة اﻟﺸﺎﻫﺪ - ­ﺳﺤر فوزي",
    "افادة اﻟﺸﺎﻫﺪ - ­ﻏﺎﻟﺐ ﻳﺴﻴر",
    "ﺗﺤﻘﻴﻖ الشرطة - ­اﺑراﻫﻴﻢ ﻣﻨﻴﻒ",
    "استمارة ﻣﺨﺎﻟﻔﺔ اﻟﺴرﻋﺔ",
    "صورة سلاح الجريمة",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة ﺧﺎﻟﺪ اﺣﻤﺪ",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة ﻣﺤﺴﻦ ﺻﺒﻲ",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة ﺳﻴﻒ الحق",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة غسان ﻋﻠﻲ",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة اﺑراﻫﻴﻢ ﻣﻨﻴﻒ",
    "صورة رصاص مسرح اﻟﺠرﻳﻤﺔ",
    "صورة عداد اﻟﻜﻬرﺑﺎء",
    "صورة عداد اﻟﻜﻬرﺑﺎء ﻣﻘرب",
    "صورة مكتب اﻟﻀﺤﻴﺔ رامي",
    "صورة ﺟﻬﺎز اﻟﻀﺤﻴﺔ",
    "صورة ﺷﺎﺷﺔ اﻟﺠﻬﺎز",
    "ﺧﻄﺎب ﻗﻀﻴﺔ ﻣﻐﻠﻘﻪ",
  ];

  return (
    <main>
      <Nav />
      <NavMobile />
      <div className="header">
        <h1>موت في الظلام</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>هل بامكانك اثبات انها قضية قتل؟ </p>
        <p>هل تعرف ماهما المستندان اللذان يثبتان أنها عملية قتل ليست انتحار</p>
      </div>

      <div className="main_container">
        <div className="documents">
          {documents.map((doc, id) => (
            <label key={`___${id}`}>
              <input
                className="checkbox"
                type="checkbox"
                name={`_${id}`}
                key={id}
                onClick={(e) => {
                  e.target.parentNode.classList.toggle("red");
                  times();
                }}
              />
              <span key={`__${id}`} className="checkmark" id={`_${id}`}></span>
              <span className="selection">{doc}</span>
            </label>
          ))}
        </div>
        <div className="btns_container">
          <input id="submit" type="button" value="تحقق" className="submit" />
          <input
            type="button"
            value="تلميح"
            className="submit hint_home"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>
      <Footer />

      <Response />
    </main>
  );
}

export default App;
