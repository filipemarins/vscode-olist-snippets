import colors from './colors';

const searchColor = (searchColor: String) => {
  const colorsLabel = Object.keys(colors);
  const colorsString: any = [];
  colorsLabel.forEach(colorLabel => {
    const colorsType = Object.keys(colors[colorLabel]);
    colorsType.forEach(colorType => {
    const colorsIntensity = Object.values(colors[colorLabel][colorType]);
      colorsIntensity.forEach((colorIntensity, index) => {
        if(colorIntensity === searchColor.toUpperCase()) {
          let colorStringFormated;
          if(colorType === 'primary') {
            colorStringFormated = `\${getColor('${colorLabel}')}`;
          } else if(index === 0) {
            colorStringFormated = `\${getColor('${colorLabel}', '${colorType}')}`;
          } else {
            colorStringFormated = `\${getColor('${colorLabel}', '${colorType}', ${index})}`;
          }
          colorsString.push(colorStringFormated);
        }
      });
    });
  });
  return colorsString;
};

export default searchColor;
