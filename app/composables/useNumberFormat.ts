export const useNumberFormat = (
  options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  locale = "zh-CN",
) => {
  const nf = new Intl.NumberFormat(locale, options);

  /** 格式化为字符串；非数字返回 '--' */
  const format = (value: number | string | null | undefined) => {
    if (value === null || value === undefined || value === "") return "--";
    const num = Number(value);
    return Number.isNaN(num) ? "--" : nf.format(num);
  };

  return { format };
};
