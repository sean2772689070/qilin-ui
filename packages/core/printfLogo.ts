export default function () {
  if (PROD) {
    const logo = `
____________________________________________________________

 _______  __  _____    __                 _______  _______
|       ||__||     |_ |__|.-----. ______ |   |   ||_     _|
|   -  _||  ||       ||  ||     ||______||   |   | _|   |_
|_______||__||_______||__||__|__|        |_______||_______|

____________________________________________________________
              author:August
`;

    const rainbowGradient = `
background: linear-gradient(135deg, orange 60%, cyan);
background-clip: text;
color: transparent;
font-size: 16px;
line-height: 1;
font-family: monospace;
font-weight: 600;
`;

    console.info(`%c${logo}`, rainbowGradient);
  } else if (DEV) {
    console.log('[EricUI]:dev mode...');
  }
}
