const iconContainer = document.getElementById("icon-container");
const header = document.querySelector("header");
const detailsContainer = document.getElementById("details-container");
const popupContent = document.querySelector(".popup-content");
const detailsHtml = document.querySelector(".details-html");
const closeButton = document.getElementById("close-button");
const logos = document.querySelectorAll(".corporate-button");
const pageBody = document.querySelector("body");

const detailsData = {
  "hamrahe-aval-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7220406546650853376?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی برای آنبوردینگ</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7157719827048992768?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی: شهاب‌سنگ</h2>`,
  },
  "fanap-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7213469538376445952?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>گزارش کارگاه-بازی ارتباط موثر</h2>`,
  },
  "zarrino-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7219288258168451072?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از کارگاه-بازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7217804885428203521?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از کارگاه-بازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7215345343197048833?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>گزارش کارگاه-بازی بازخورد موثر</h2>`,
  },
  "digiexpress-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7195365293085327360?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>رویداد نوروزی</h2>`,
  },
  "riseco-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7209172738261798912?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد SAP</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7126885410219175936?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی خلاقیت گروهی</h2>`,
  },
  "royan-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7197891900861759488?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی بازخورد موثر</h2><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198652001302327297?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد کارمند پژوهشگاه از کارگاه-بازی</h2>`,
  },
  "khodro45-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7195353658274828288?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی ارزیابی عملکرد</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7189923056872562688?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی ارزیابی، روز دوم</h2>`,
  },
  "pilsan-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7182749904077762560?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد بازی آخر سال</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7195338707405623296?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از رویداد بازی</h2>`,
  },
  "digikala-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7149394306301063168?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی برای ارزیابی منابع انسانی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7152965242795278336?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از بازی ارزیابی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7132293429878751232?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی برای غرفه در نمایشگاه کار</h2>`,
  },
  "snappfood-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198279290109444097?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>گزارش رویداد روز جهانی PMO</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7200775715317764097?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر ارشد پروژه از روز جهانی PMO</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7173272758645051393?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر مرکز تعالی منابع انسانی از رویداد تیم‌سازی</h2>`,
  },
  "golrang-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7104443339537567744?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی دو روزه خلاقیت گروهی و ارتباط موثر</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7144281286306705408?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد کارشناس منابع انسانی از کارگاه-بازی خلاقیت گروهی و ارتباط موثر</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7113854591112228864?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7137410889611190272?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی</h2>`,
  },
  "esfehan-petroshimi-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7211674333964812288?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>کارگاه-بازی دوروزه خلاقیت و بازخورد موثر</h2>`,
  },
  "snapptrip-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7157424575885033472?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی کارتی اختصاصی برای جشن یلدا</h2>`,
  },
  "fakoor-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7191355877830864896?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد معاون سرمایه‌های انسانی از رویداد بازی</h2>`,
  },
  "hamrahtel-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187820756502740992?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مسئول ارتباطات سازمانی از بازی سین‌جیم</h2>`,
  },
  "cobel-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7172871797405659136?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی آخر سال در کیش</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7140356077941952512?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی تعامل و بازخورد موثر</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7192794663940947970?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد بازی</h2>`,
  },
  "ibshop-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7208079966188486656?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مسئول دیجیتال مارکتینگ از رویداد بازی</h2>`,
  },
  "mapna-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7225772539711528960?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد معاون منابع انسانی از رویداد بازی توسعه</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7223628386038878208?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد بازی توسعه برای مدیران</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7170054575620616192?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی ورود به بازار کار، روز دوم</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7168226915726659585?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی ورود به بازار کار، روز اول</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7142539060560007168?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی خلاقیت گروهی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7109447645030412288?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیک‌آف</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7109871729476284416?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر آموزش و سرمایه‌انسانی گروه مپنا از رویداد تیک‌آف</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7201115972491968512?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد خانواده</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7210993415516270592?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر آموزش و سرمایه‌انسانی گروه مپنا از رویداد خانواده</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7170719353544265731?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد شرکت‌کنندگان جوان مپنایی از مجموعه کارگاه-بازی‌ها</h2>`,
  },
  "boors-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7173645805487173632?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی مدیریت عملکرد</h2>`,
  },
  "saman-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7164585200977461248?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7168171072872255488?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد کارشناس برنامه‌ریزی فروش از رویداد تیم‌سازی</h2><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7159559920420274176?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازطراحی بازی رومیزی با برند سازمان</h2>`,
  },
  "okala-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7166028633424261120?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی و بازیوارسازی برای غرفه نمایشگاه کار</h2>`,
  },
  "khoshgovar-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7163481892195930113?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی خلاقیت و حل مسئله</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7159552284211757056?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد سرپرست آموزش از کارگاه-بازی</h2>`,
  },
  "tata-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7163174376513748995?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>جشن آنلاین یلدا</h2>`,
  },
  "avakatan-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7134863363481714688?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی‌های خلاقیت و حل مسئله</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7119616891228168192?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی مدل ذهنی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7162813129050017792?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر شعبه بروجرد از کارگاه-بازی مدل ذهنی و خلاقیت</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7140703243914960896?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر شعبه پالادیوم از کارگاه-بازی مدل ذهنی و خلاقیت</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7135203204249640960?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر چیدمان و برند از کارگاه-بازی خلاقیت و حل مسئله</h2>`,
  },
  "palayesh-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7154466503596064768?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد رئیس آموزش و توسعه از کارگاه-بازی خلاقیت و نوآوری</h2>`,
  },
  "kalleh-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7153326262025936896?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی دو روزه تیم‌سازی و ارزیابی عملکرد در آمل</h2>`,
  },
  "zarrin-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7145401203659628544?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازی شرلوک هلمز برای کارشناسان منابع انسانی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7150117982466183168?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد کارشناس توسعه سازمان و تکنولوژی منابع انسانی از بازی شرلوک هولمز</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7147512170266738688?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد سرپرست ارشد جنرال سرویس از رویداد بازی</h2>`,
  },
  "eshareh-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7144319814738640897?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد ری‌برندینگ</h2>`,
  },
  "solico-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7101146914544312320?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی تعامل موثر و هماهنگ</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7102210261104631808?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر راهبردی منابع انسانی از کارگاه-بازی مدل ذهنی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7138154233224232960?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد کارشناس توسعه و آموزش از کارگاه-بازی مدل ذهنی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7133039160755388416?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر راهبردی منابع انسانی از کارگاه-بازی تعامل موثر و هماهنگ</h2>`,
  },
  "asanbar-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7130170173755449344?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد کارشناس ارشد منابع انسانی از کارگاه-بازی همکاری اثربخش</h2>`,
  },
  "mehbang-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7129738308410097664?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی با بازی قصرتو بساز</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7124336080270598144?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌‌سازی</h2>`,
  },
  "khanoomi-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7122840447122571265?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از کارگاه-بازی طراحی برای شادی</h2>`,
  },
  "wallex-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7121822209794293760" height="858" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی</h2>`,
  },
  "pasargad-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7114591151512252418?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی تعامل موثر و هماهنگ</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7115306866682810368?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد خانم نرجس ولیپور از کارگاه-بازی تعامل موثر و هماهنگ</h2>`,
  },
  "lamaso-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7112021970518425600?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد جشن تولد سازمان</h2>`,
  },
};

logos.forEach((logo) => {
  logo.addEventListener("click", () => {
    isPopUp = true;
    let logoId = logo.id;
    let details = detailsData[logoId]["detail"];
    detailsHtml.innerHTML = details;
    detailsContainer.style.visibility = "visible";
    detailsContainer.style.opacity = "1";
    iconContainer.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)";
    const firstIframe = popupContent.querySelector("iframe");
    const firstHeading = popupContent.querySelector("h2");
    const firstPairHeight =
      firstIframe.offsetHeight + firstHeading.offsetHeight;
    popupContent.style.height = `${firstPairHeight + 80}px`;

    if (detailsHtml.children.length >= 3) {
      setTimeout(() => {
        detailsHtml.classList.add("animate");
      }, 2000);
    }
  });
});

closeButton.addEventListener("click", function () {
  detailsContainer.style.visibility = "hidden";
  detailsContainer.style.opacity = "0";
  iconContainer.style.filter = "blur(0px)";
  header.style.filter = "blur(0px)";
  detailsHtml.classList.remove("animate");
  detailsHtml.innerHTML = "";
});

detailsContainer.addEventListener("click", function (event) {
  if (event.target !== popupContent && !popupContent.contains(event.target)) {
    detailsContainer.style.visibility = "hidden";
    detailsContainer.style.opacity = "0";
    iconContainer.style.filter = "blur(0px)";
    header.style.filter = "blur(0px)";
    detailsHtml.classList.remove("animate");
    detailsHtml.innerHTML = "";
  }
});
