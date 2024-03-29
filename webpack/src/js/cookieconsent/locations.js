const COUNTRY_CODES = {
  // Representative group of countries with key differences
  US: "United States",
  UK: "United Kingdom",
  ES: "Spain",
  DE: "Germany",
  BE: "Belgium",
  "": "-----------------------------",

  // Every other country
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AD: "Andorra",
  AO: "Angola",
  AG: "Antigua And Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BZ: "Belize",
  BJ: "Benin",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia And Herzegovina",
  BW: "Botswana",
  BR: "Brazil",
  BN: "Brunei",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, Democratic Republic",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  EE: "Estonia",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  ET: "Ethiopia",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  GH: "Ghana",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GT: "Guatemala",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea, North",
  KR: "Korea, South",
  KS: "Kosovo",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Laos",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MR: "Mauritania",
  MU: "Mauritius",
  MX: "Mexico",
  FM: "Micronesia",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PL: "Poland",
  PT: "Portugal",
  QA: "Qatar",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  KN: "Saint Kitts And Nevis",
  LC: "Saint Lucia",
  VC: "Saint Vincent And Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome And Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  SS: "South Sudan",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syria",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad And Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vietnam",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe"
};

(function(C, U) {
  let popupInst;
  let $loc = document.getElementById("cookie-law-location");

  if (!$loc) return;

  U.fillSelect($loc, COUNTRY_CODES, COUNTRY_CODES["AC"]);

  $loc.onchange = function() {
    let code =
      $loc.selectedIndex >= 0 ? $loc[$loc.selectedIndex].value : undefined;

    if (!code) return;

    draw(code);
  };

  draw($loc[0].value);

  // $loc.focus();

  function draw(code) {
    let options = getOptions(code);

    if (popupInst) {
      popupInst.clearStatus();
      popupInst.destroy();
      popupInst = null;
    }

    cookieconsent.initialise(
      options,
      function(popup) {
        popupInst = popup;
        popupInst.autoOpen();
      },
      function(err) {
        console.error(err);
      }
    );

    // show country options on screen (so user knows how this country affected the settings)
    document.getElementById("message").innerHTML = getCountryDetails(code);
  }

  function getOptions(code) {
    return {
      type: "info",
      regionalLaw: true,
      palette: {
        popup: { background: "#343c66", text: "#cfcfe8" },
        button: { background: "#f71559" }
      },
      law: {
        // takes the "preferred" options and changes them slightly to match the country's law
        countryCode: code
      }
    };
  }

  function getCountryDetails(code) {
    // We only get these to show (on screen) how the country behaves
    let law = new cookieconsent.Law({});
    let countryOpts = law.get(code);

    if (!countryOpts.hasLaw) {
      return "Has cookie law? no";
    }

    return U.tabularObject({
      "Has cookie law?": "yes",
      "Choice has to be revokable?": countryOpts.revokable ? "yes" : "no",
      "Can be automatically dismissed?": countryOpts.explicitAction
        ? "no"
        : "yes"
    });
  }
})(window.cookieconsent, window.cookieconsent_example_util);
