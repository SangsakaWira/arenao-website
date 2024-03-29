/**
 * Import every single icon we used across the site, if you're going to need different icons here is where you should add them
 */
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faDesktop,
  faDollarSign,
  faCashRegister,
  faExclamationCircle,
  faMoneyBillAlt as fasMoneyBillAlt,
  faPlug,
  faTag,
  faHeadphones,
  faHandshake,
  faQuestion,
  faTrophy,
  faEnvelope,
  faCreditCard,
  faMapMarker,
  faPhone,
  faRss,
  faSignInAlt,
  faUserPlus,
  faSearch,
  faCalendar,
  faHeart,
  faBookmark,
  faAngleLeft,
  faAngleRight,
  faListUl,
  faUsers,
  faCog,
  faLock,
  faUser,
  faCheckSquare,
  faPlay,
  faCheckCircle,
  faCalendarAlt,
  faHandHoldingUsd,
  faPalette,
  faBars,
  faCookieBite,
  faBan,
  faInfoCircle,
  faAddressCard,
  faTimes,
  faCheck,
  faExclamationTriangle,
  faRetweet,
  faCode,
  faQuoteRight,
  faAward,
  faUsersCog,
  faUserShield,
  faQuoteLeft,
  faChartLine,
  faFileInvoice,
  faBullseye
} from "@fortawesome/free-solid-svg-icons";

import {
  faLightbulb,
  faCreditCard as farCreditCard,
  faMoneyBillAlt as farMoneyBillAlt,
  faComment,
  faComments,
  faIdCard,
  faBuilding,
  faEnvelope as farEnvelope,
  faQuestionCircle,
  faBookmark as farBookmark,
  faHeart as farHeart,
  faPaperPlane as farPaperPlane,
  faCheckCircle as farCheckCircle,
  faCalendarAlt as farCalendarAlt
} from "@fortawesome/free-regular-svg-icons";

import {
  faFacebook,
  faFacebookF,
  faTwitter,
  faInstagram,
  faTwitterSquare,
  faLinkedin,
  faGooglePlusSquare,
  faLinkedinIn,
  faGooglePlus,
  faYoutube,
  faPinterest,
  faDribbble,
  faJs,
  faSass,
  faAngular
} from "@fortawesome/free-brands-svg-icons";

// Configure here the font-awesome icons you'll be using across the website
library.add(
  faAngleDown,
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faDesktop,
  faDollarSign,
  faCashRegister,
  faCreditCard,
  faExclamationCircle,
  farMoneyBillAlt,
  faPlug,
  faTag,
  faHeadphones,
  faHandshake,
  faQuestion,
  faTrophy,
  faEnvelope,
  faChartLine,
  faCalendarAlt,
  faFileInvoice,
  faBullseye,
  faMapMarker,
  faPhone,
  faRss,
  faSignInAlt,
  faUserPlus,
  faSearch,
  faCalendar,
  faHeart,
  faBookmark,
  faAngleLeft,
  faAngleRight,
  faListUl,
  faUsers,
  faCog,
  faLock,
  faUser,
  faCheckSquare,
  faPlay,
  faCheckCircle,
  faHandHoldingUsd,
  faPalette,
  faBars,
  faCookieBite,
  faBan,
  faInfoCircle,
  faAddressCard,
  faTimes,
  faCheck,
  faExclamationTriangle,
  faRetweet,
  faCode,
  faQuoteRight,
  faAward,
  faUsersCog,
  faUserShield,

  // far
  farCreditCard,
  farMoneyBillAlt,
  farCalendarAlt,
  faComment,
  faComments,
  faIdCard,
  faBuilding,
  farEnvelope,
  faQuestionCircle,
  faLightbulb,
  fasMoneyBillAlt,
  farBookmark,
  farHeart,
  farPaperPlane,
  farCheckCircle,

  //fab
  faFacebook,
  faFacebookF,
  faTwitter,
  faInstagram,
  faTwitterSquare,
  faLinkedin,
  faGooglePlusSquare,
  faLinkedinIn,
  faGooglePlus,
  faYoutube,
  faPinterest,
  faDribbble,
  faJs,
  faSass,
  faAngular,
  faQuoteLeft
);

dom.watch();
