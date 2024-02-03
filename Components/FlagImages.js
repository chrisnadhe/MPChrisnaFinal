import React from 'react';

interface Image {
  name: string;
  image: any;
}

class FlagImage {
  static images = [
    {
      name: 'Wake_Island.png',
      image: require('../assets/flags/Flag_of_Wake_Island.png'),
    },
    {
      name: 'Washington.png',
      image: require('../assets/flags/Flag_of_Washington.png'),
    },
    {
      name: 'West_Virginia.png',
      image: require('../assets/flags/Flag_of_West_Virginia.png'),
    },
    {
      name: 'Wisconsin.png',
      image: require('../assets/flags/Flag_of_Wisconsin.png'),
    },
    {
      name: 'Wyoming.png',
      image: require('../assets/flags/Flag_of_Wyoming.png'),
    },
    {
      name: 'American_Samoa.png',
      image: require('../assets/flags/Flag_of_American_Samoa.png'),
    },
    {
      name: 'Alabama.png',
      image: require('../assets/flags/Flag_of_Alabama.png'),
    },
    {
      name: 'Alaska.png',
      image: require('../assets/flags/Flag_of_Alaska.png'),
    },
    {
      name: 'Arizona.png',
      image: require('../assets/flags/Flag_of_Arizona.png'),
    },
    {
      name: 'Arkansas.png',
      image: require('../assets/flags/Flag_of_Arkansas.png'),
    },
    {
      name: 'California.png',
      image: require('../assets/flags/Flag_of_California.png'),
    },
    {
      name: 'Colorado.png',
      image: require('../assets/flags/Flag_of_Colorado.png'),
    },
    {
      name: 'Connecticut.png',
      image: require('../assets/flags/Flag_of_Connecticut.png'),
    },
    {
      name: 'Delaware.png',
      image: require('../assets/flags/Flag_of_Delaware.png'),
    },
    {
      name: 'Florida.png',
      image: require('../assets/flags/Flag_of_Florida.png'),
    },
    {
      name: 'Guam.png',
      image: require('../assets/flags/Flag_of_Guam.png'),
    },
    {
      name: 'Idaho.png',
      image: require('../assets/flags/Flag_of_Idaho.png'),
    },
    {
      name: 'Illinois.png',
      image: require('../assets/flags/Flag_of_Illinois.png'),
    },
    {
      name: 'Indiana.png',
      image: require('../assets/flags/Flag_of_Indiana.png'),
    },
    {
      name: 'Iowa.png',
      image: require('../assets/flags/Flag_of_Iowa.svg.png'),
    },
    {
      name: 'Kansas.png',
      image: require('../assets/flags/Flag_of_Kansas.png'),
    },
    {
      name: 'Kentucky.png',
      image: require('../assets/flags/Flag_of_Kentucky.png'),
    },
    {
      name: 'Louisiana.png',
      image: require('../assets/flags/Flag_of_Louisiana.png'),
    },
    {
      name: 'Maine.png',
      image: require('../assets/flags/Flag_of_Maine.png'),
    },
    {
      name: 'Maryland.png',
      image: require('../assets/flags/Flag_of_Maryland.png'),
    },
    {
      name: 'Massachusetts.png',
      image: require('../assets/flags/Flag_of_Massachusetts.png'),
    },
    {
      name: 'Michigan.png',
      image: require('../assets/flags/Flag_of_Michigan.png'),
    },
    {
      name: 'Minnesota.png',
      image: require('../assets/flags/Flag_of_Minnesota.png'),
    },
    {
      name: 'Mississippi.png',
      image: require('../assets/flags/Flag_of_Mississippi.png'),
    },
    {
      name: 'Missouri.png',
      image: require('../assets/flags/Flag_of_Missouri.png'),
    },
    {
      name: 'Montana.png',
      image: require('../assets/flags/Flag_of_Montana.png'),
    },
    {
      name: 'Nebraska.png',
      image: require('../assets/flags/Flag_of_Nebraska.png'),
    },
    {
      name: 'Nevada.png',
      image: require('../assets/flags/Flag_of_Nevada.png'),
    },
    {
      name: 'New_Hampshire.png',
      image: require('../assets/flags/Flag_of_New_Hampshire.png'),
    },
    {
      name: 'New_Jersey.png',
      image: require('../assets/flags/Flag_of_New_Jersey.png'),
    },
    {
      name: 'New_Mexico.png',
      image: require('../assets/flags/Flag_of_New_Mexico.png'),
    },
    {
      name: 'New_York.png',
      image: require('../assets/flags/Flag_of_New_York.png'),
    },
    {
      name: 'North_Carolina.png',
      image: require('../assets/flags/Flag_of_North_Carolina.png'),
    },
    {
      name: 'North_Dakota.png',
      image: require('../assets/flags/Flag_of_North_Dakota.png'),
    },
    {
      name: 'Ohio.png',
      image: require('../assets/flags/Flag_of_Ohio.png'),
    },
    {
      name: 'Oklahoma.png',
      image: require('../assets/flags/Flag_of_Oklahoma.png'),
    },
    {
      name: 'Oregon.png',
      image: require('../assets/flags/Flag_of_Oregon.png'),
    },
    {
      name: 'Palmyra_Atoll.png',
      image: require('../assets/flags/Flag_of_Palmyra_Atoll.png'),
    },
    {
      name: 'Pennsylvania.png',
      image: require('../assets/flags/Flag_of_Pennsylvania.png'),
    },
    {
      name: 'Puerto_Rico.png',
      image: require('../assets/flags/Flag_of_Puerto_Rico.png'),
    },
    {
      name: 'Rhode_Island.png',
      image: require('../assets/flags/Flag_of_Rhode_Island.png'),
    },
    {
      name: 'South_Carolina.png',
      image: require('../assets/flags/Flag_of_South_Carolina.png'),
    },
    {
      name: 'South_Dakota.png',
      image: require('../assets/flags/Flag_of_South_Dakota.png'),
    },
    {
      name: 'Tennessee.png',
      image: require('../assets/flags/Flag_of_Tennessee.png'),
    },
    {
      name: 'Texas.png',
      image: require('../assets/flags/Flag_of_Texas.png'),
    },
    {
      name: 'District_of_Columbia.png',
      image: require('../assets/flags/Flag_of_the_District_of_Columbia.png'),
    },
    {
      name: 'Midway_Islands.png',
      image: require('../assets/flags/Flag_of_the_Midway_Islands.png'),
    },
    {
      name: 'Northern_Mariana_Islands.png',
      image: require('../assets/flags/Flag_of_the_Northern_Mariana_Islands.png'),
    },
    {
      name: 'Georgia.png',
      image: require('../assets/flags/Flag_of_the_State_of_Georgia.png'),
    },
    {
      name: 'United_States_Virgin_Islands.png',
      image: require('../assets/flags/Flag_of_the_United_States_Virgin_Islands.png'),
    },
    {
      name: 'Utah.png',
      image: require('../assets/flags/Flag_of_Utah.png'),
    },
    {
      name: 'Vermont.png',
      image: require('../assets/flags/Flag_of_Vermont.png'),
    },
    {
      name: 'Virginia.png',
      image: require('../assets/flags/Flag_of_Virginia.png'),
    },
    {
      name: 'Hawaii.png',
      image: require('../assets/flags/Flag_of_Hawaii.png'),
    },
  ];

  static GetImage = name => {
    const found = FlagImage.images.find(e => e.name === name);
    return found
      ? found.image
      : require('../assets/flags/Flag_of_the_United_States.png');
  };
}

export default FlagImage;
