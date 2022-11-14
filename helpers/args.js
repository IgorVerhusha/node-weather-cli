export const getArgs = (args) => {
    const res = {};
    const argsArr = args.slice(2);
    argsArr.forEach((value, index, array) => {
        if (value.charAt(0) === '-') {
            if (index === array.length - 1 || array[index + 1].charAt(0) === '-') {
                res[value.substring(1)] = true;
                return
            }
                res[value.substring(1)] = array[index + 1];
        }
    });
    return res;
};
