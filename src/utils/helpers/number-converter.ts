import isEmpty from "./isEmpty.utility";

interface NumberToBanglaOptions {
  decimals?: boolean;
  decimalPlaces?: number;
}
type MonthKey =
    | "January" | "February" | "March" | "April" | "May" | "June"
    | "July" | "August" | "September" | "October" | "November" | "December";

const EN_TO_BN_DIGITS: Record<string, string> = {
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
  ".": ".",
};

function convertNumberToBangla(
  input: string | number,
  options: NumberToBanglaOptions = {
    decimalPlaces: 1,
    decimals: true
  }
): string {
  const numberRegex = /\d+(\.\d+)?/g;

  return input.toString().replace(numberRegex, (match) => {
    let num = parseFloat(match);

    if (options.decimals && options.decimalPlaces !== undefined) {
      num = parseFloat(num.toFixed(options.decimalPlaces));
    } else if (!options.decimals) {
      num = Math.round(num);
    }

    const numStr = num.toString();
    return numStr
      .split("")
      .map((char) => EN_TO_BN_DIGITS[char] ?? char)
      .join("");
  });
}

const formatNumber = (value: number | number = 0, fixedCount?: number) => {
  var flag = '';
  // 1000 = 1K
  // 1000000 = 1M = 1K * 1000
  // 1M * 1000 = 1B
  // 1B * 1000 = 1T
  let amount = parseFloat(value.toString());
  if (isEmpty(amount) || isNaN(Number(amount))) {
    return 0 + flag;
  }
  if (amount >= 1000000000000000000000000) {
    amount = amount / 1000000000000000000000000;
    flag = 'Y';
  }
  if (amount >= 1000000000000000000000) {
    amount = amount / 1000000000000000000000;
    flag = 'Z';
  }
  if (amount >= 1000000000000000000) {
    amount = amount / 1000000000000000000;
    flag = 'E';
  }
  if (amount >= 1000000000000000) {
    amount = amount / 1000000000000000;
    flag = 'P';
  }
  if (amount >= 1000000000000) {
    amount = amount / 1000000000000;
    flag = 'T';
  } else if (amount >= 1000000000) {
    amount = amount / 1000000000;
    flag = 'B';
  } else if (amount >= 1000000) {
    amount = amount / 1000000;
    flag = 'M';
  } else if (amount >= 1000) {
    amount = amount / 1000;
    flag = 'K';
  }
  return amount?.toFixed(fixedCount || 2) + flag;
};

const convertToBanglaDate = (dateStr: string) => {
  // English → Bangla month map
  const monthMap: Record<MonthKey, string> = {
    "January": "জানুয়ারি",
    "February": "ফেব্রুয়ারি",
    "March": "মার্চ",
    "April": "এপ্রিল",
    "May": "মে",
    "June": "জুন",
    "July": "জুলাই",
    "August": "আগস্ট",
    "September": "সেপ্টেম্বর",
    "October": "অক্টোবর",
    "November": "নভেম্বর",
    "December": "ডিসেম্বর"
  };
  let result = dateStr.replace(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/,
    (match) => monthMap[match as MonthKey]
  );
  return convertNumberToBangla(result, {decimals: false});
};


export {convertNumberToBangla, formatNumber, convertToBanglaDate}