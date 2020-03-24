/* eslint-disable */
import { copyright } from "@/settings";

if (process.env.NODE_ENV !== "development") {
  const __encode = "boyunshijue",
    _0xb483 = [
      "\x5F\x64\x65\x63\x6F\x64\x65",
      "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C",
    ];
  (function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1];
  })(window);
  const __Ox5e866 = [
    "\x32\x30\x31\x39\x2D\x31\x31\x2D\x31\x33",
    "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72",
    "\x67\x65\x74\x4D\x6F\x6E\x74\x68",
    "\x67\x65\x74\x44\x61\x74\x65",
    "\x66\x6C\x6F\x6F\x72",
    "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
    "\x62\x6F\x64\x79",
    "\u524D\u7AEF\u654F\u6377\u5F00\u53D1\u5E73\u53F0\u6388\u6743\u5DF2\u5230\u671F",
    "\u535A\u4E91\u89C6\u89C9\u79D1\u6280\x28\u9752\u5C9B\x29\u6709\u9650\u516C\u53F8",
    "\u535A\u4E91\u89C6\u89C9\x28\u5317\u4EAC\x29\u79D1\u6280\u6709\u9650\u516C\u53F8",
    "\x63\x68\x75\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36",
    "\x66\x6F\x72\x45\x61\x63\x68",
    "\u524D\u7AEF\u654F\u6377\u5F00\u53D1\u5E73\u53F0\u7248\u6743\u4FE1\u606F\u5FC5\u987B\u4FDD\u7559",
  ];
  const authorizationDate = new Date(__Ox5e866[0x0]);
  let authorizationPeriod = 30 * 12 * 10;
  if (authorizationPeriod < 0) {
    authorizationPeriod = 0;
  }
  const currentDate = new Date();
  let authorizationDateTimestamp = Date.UTC(
    authorizationDate[__Ox5e866[0x1]](),
    authorizationDate[__Ox5e866[0x2]](),
    authorizationDate[__Ox5e866[0x3]]()
  );
  const currentDateTimestamp = Date.UTC(
    currentDate[__Ox5e866[0x1]](),
    currentDate[__Ox5e866[0x2]](),
    currentDate[__Ox5e866[0x3]]()
  );
  if (authorizationDateTimestamp > currentDateTimestamp) {
    authorizationDateTimestamp = currentDateTimestamp;
  }
  const days = Math[__Ox5e866[0x4]](
    (currentDateTimestamp - authorizationDateTimestamp) / (1000 * 60 * 60 * 24)
  );
  const daysLate = authorizationPeriod - days;
  if (daysLate <= 0) {
    document[__Ox5e866[0x6]][__Ox5e866[0x5]] = __Ox5e866[0x7];
  }
  const copyrightList = [__Ox5e866[0x8], __Ox5e866[0x9], __Ox5e866[0xa]];
  let bodyHide = true;
  copyrightList[__Ox5e866[0xb]]((_0xfb16xa) => {
    if (_0xfb16xa === copyright) {
      bodyHide = false;
    }
  });
  if (false !== bodyHide) {
    document[__Ox5e866[0x6]][__Ox5e866[0x5]] = __Ox5e866[0xc];
  }
  if (process.env.NODE_ENV !== "staging") {
    console.log(
      "\n %c ${copyright} %c \u535a\u4e91\u524d\u7aef\u654f\u6377\u5f00\u53d1\u5e73\u53f0\u0032\u002e\u0031 \n\n",
      "color: #fadfa3; background: #030307; padding:5px 0;",
      "background: #fadfa3; padding:5px 0;"
    );
  } else {
    console.log(
      "\n %c \u521d\u5fd7\u946b\u0020\u0031\u0032\u0030\u0034\u0035\u0030\u0035\u0030\u0035\u0036\u0040\u0071\u0071\u002e\u0063\u006f\u006d  %c \u535a\u4e91\u524d\u7aef\u654f\u6377\u5f00\u53d1\u5e73\u53f0\u0032\u002e\u0031 \n\n",
      "color: #fadfa3; background: #030307; padding:5px 0;",
      "background: #fadfa3; padding:5px 0;"
    );
  }
}
