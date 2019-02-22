export const temperatureConvert = (kelvin, symbol) => {
    return symbol === 'c' ?  kelvin - 273.15 :  ((kelvin - 273.15) * 9/5 + 32);
};