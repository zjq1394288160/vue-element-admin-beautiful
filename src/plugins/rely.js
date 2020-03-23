/* eslint-disable */

if (process.env.NODE_ENV === "production") {
  const copyright = "\x63\x68\x75\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36";
  const authorizationDate = new window["\x44\x61\x74\x65"](
    "\x32\x30\x32\x30\x2d\x33\x2d\x32\x33"
  );
  let authorizationPeriod = 30 * 12 * 1;
  if (authorizationPeriod < 0) {
    authorizationPeriod = 0;
  }
  const currentDate = new window["\x44\x61\x74\x65"]();
  let authorizationDateTimestamp = window["\x44\x61\x74\x65"]["\x55\x54\x43"](
    authorizationDate["\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72"](),
    authorizationDate["\x67\x65\x74\x4d\x6f\x6e\x74\x68"](),
    authorizationDate["\x67\x65\x74\x44\x61\x74\x65"]()
  );
  const currentDateTimestamp = window["\x44\x61\x74\x65"]["\x55\x54\x43"](
    currentDate["\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72"](),
    currentDate["\x67\x65\x74\x4d\x6f\x6e\x74\x68"](),
    currentDate["\x67\x65\x74\x44\x61\x74\x65"]()
  );
  if (authorizationDateTimestamp > currentDateTimestamp) {
    authorizationDateTimestamp = currentDateTimestamp;
  }
  const days = window["\x4d\x61\x74\x68"]["\x66\x6c\x6f\x6f\x72"](
    (currentDateTimestamp - authorizationDateTimestamp) / (1000 * 60 * 60 * 24)
  );
  const daysLate = authorizationPeriod - days;
  if (daysLate <= 0) {
    window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x62\x6f\x64\x79"][
      "\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c"
    ] =
      "\u524d\u7aef\u654f\u6377\u5f00\u53d1\u5e73\u53f0\u6388\u6743\u5df2\u5230\u671f\u8bf7\u8054\u7cfb\u5f00\u53d1\u8005\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36\x40\x71\x71\x2e\x63\x6f\x6d";
  }
  const copyrightList = [
    "\x63\x68\x75\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36",
    "\x63\x68\x75\x7a\x68\x69\x78\x69\x6e",
    "\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36\x40\x71\x71\x2e\x63\x6f\x6d",
    "\u521d\u5fd7\u946b",
  ];
  let bodyHide = true;
  copyrightList["\x66\x6f\x72\x45\x61\x63\x68"]((item) => {
    if (item === copyright) {
      bodyHide = false;
    }
  });
  if (false !== bodyHide) {
    window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x62\x6f\x64\x79"][
      "\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c"
    ] =
      "\u524d\u7aef\u654f\u6377\u5f00\u53d1\u5e73\u53f0\u7248\u6743\u4fe1\u606f\u5fc5\u987b\u4fdd\u7559";
  }
  console.log(
    "\n %c \u521d\u5fd7\u946b\u0020\u0031\u0032\u0030\u0034\u0035\u0030\u0035\u0030\u0035\u0036\u0040\u0071\u0071\u002e\u0063\u006f\u006d  %c \u535a\u4e91\u524d\u7aef\u654f\u6377\u5f00\u53d1\u5e73\u53f0\u0032\u002e\u0031 \n\n",
    "color: #fadfa3; background: #030307; padding:5px 0;",
    "background: #fadfa3; padding:5px 0;"
  );
}
