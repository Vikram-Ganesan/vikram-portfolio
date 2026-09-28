export const DateFormat = {
  DD_MM: 1,
  DD_MM_YYYY: 2,
  MM_DD_YYYY: 3,
  YYYY_MM_DD: 4,
  DD_MMM_YYYY: 5,
  MMM_DD_YYYY: 6,
  DD_MMMM_YYYY: 7,
  MMMM_DD_YYYY: 8,
  YYYY: 9,
  MMM: 10,
  MMMM: 11,
  DD: 12,
  MM: 13,
  HH_MM: 14,
  HH_MM_SS: 15,
  HH_MM_AMPM: 16,
  ISO: 17,
  TIMESTAMP: 18,
} as const;

export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat];

export const formatDate = (format: DateFormat, isoDate: string | null): string => {
  const date = isoDate ? new Date(isoDate) : new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  const shortMonth = date.toLocaleString('en-US', { month: 'short' });
  const longMonth = date.toLocaleString('en-US', { month: 'long' });

  switch (format) {
    case DateFormat.DD_MM:
      return `${day}/${month}`;

    case DateFormat.DD_MM_YYYY:
      return `${day}/${month}/${year}`;

    case DateFormat.MM_DD_YYYY:
      return `${month}/${day}/${year}`;

    case DateFormat.YYYY_MM_DD:
      return `${year}-${month}-${day}`;

    case DateFormat.DD_MMM_YYYY:
      return `${day} ${shortMonth} ${year}`;

    case DateFormat.MMM_DD_YYYY:
      return `${shortMonth} ${day}, ${year}`;

    case DateFormat.DD_MMMM_YYYY:
      return `${day} ${longMonth} ${year}`;

    case DateFormat.MMMM_DD_YYYY:
      return `${longMonth} ${day}, ${year}`;

    case DateFormat.YYYY:
      return year;

    case DateFormat.MMM:
      return shortMonth;

    case DateFormat.MMMM:
      return longMonth;

    case DateFormat.DD:
      return day;

    case DateFormat.MM:
      return month;

    case DateFormat.HH_MM:
      return date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      });

    case DateFormat.HH_MM_SS:
      return date.toLocaleTimeString('en-GB');

    case DateFormat.HH_MM_AMPM:
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });

    case DateFormat.ISO:
      return date.toISOString();

    case DateFormat.TIMESTAMP:
      return String(date.getTime());

    default:
      return '';
  }
};
