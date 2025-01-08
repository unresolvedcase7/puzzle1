import "../response.css";
import img1 from "../images/right1.png";
import img2 from "../images/right2.png";
import wrong from "../images/wrong.png";
import twitter from "../images/social2/twitter.svg";
import insta from "../images/social2/insta.svg";
import messanger from "../images/social2/messanger.svg";

function response() {
  return (
    <div className="top-container">
      <div className="answer an0">
        <div className="res_container">
          <img src={wrong} alt=" " />
        </div>
        <div className="wrong_container">
          <p>للأسف، ليست هذه المستندات المطلوبة لإثبات انها جريمة قتل</p>
          <p>لا تيأس، فعملية الانتحار هذه تلفيق من أحدهم</p>
          <p>*إذا أردت تلميحاً أضغط زر التلميح في الاسفل</p>
        </div>

        <div>
          <input
            className="btns"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".an0").style.display = "none";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="answer an1">
        <div className="res_container">
          <img src={wrong} alt=" " />
          <div className="wrong_container">
            <p>للأسف، ليست هذه المستندات المطلوبة لإثبات انها جريمة قتل</p>
            <p>يبدو تقدم رائع لقد حصلت على مستند واحد صحيح، راجع تحرياتك</p>
            <p>*إذا أردت تلميحاً أضغط زر التلميح في الاسفل</p>
          </div>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".an1").style.display = "none";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="answer an2">
        <div className="res_container right">
          <p>لقد اثبت إنها عملية قتل!</p>
          <p>عمل رائع أيها المحقق</p>
          <div className="images">
            <div>
              <p>استمارة سلاح الجريمة</p>
              <img src={img2} alt="استمارة سلاح الجريمة" />
            </div>
            <div>
              <p>تشريح الجثة</p>
              <img src={img1} alt="تشرح الجثة" />
            </div>
          </div>
          <p>
            لقد عثرت على معلومة مهمه جداً عيار الرصاصتين مختلفة عيار 9 مم للسلاح
            الذي بحوزة رامي، أما الرصاصة التي قتل فيها كانت 10مم. مما يعني انه
            تم قتل رامي بمسدس اخر وهذا يثبت انه لم يقتل نفسه
          </p>
          <p className="last">
            استخدم، وسائل التواصل الاجتماعي لإخبار الجميع أنك كشفت خدعة القاتل
          </p>
          <div className="social_right">
            <a
              href="https://twitter.com/unresolved_cass?s=11&t=lOCc8EkhDZBKspcssFHufw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt=" " />
            </a>
            <a
              href="https://instagram.com/unresolved_cass?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt=" " />
            </a>
            <a
              href="https://wa.me/966509330727"
              target="_blank"
              rel="noreferrer"
            >
              <img src={messanger} alt=" " />
            </a>
          </div>
        </div>
      </div>

      <div className="hint1 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>
            إحدى الوثيقتين اللتين تحتاج إليهما لإثبات انها عملية قتل هي مستند
            تشريح الجثة
          </p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل</p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint1").style.display = "none";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint1").style.display = "none";
              document.querySelector(".hint2").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint2 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>
            عندما تجد دليل على ان رامي لا يمكنه استعمال مسدس اخر سيبدو هذا
            واضحاً
          </p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل</p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint2").style.display = "none";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint2").style.display = "none";
              document.querySelector(".hint3").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint3 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>لإثبات وقوع جريمة، راجع جميع المستندات التي تتعلق بسلاح الجريمة</p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint3").style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default response;
