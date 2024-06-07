export default function () {
  if (PROD) {
    const logo = `
_________________________________________________________________________

  ______   __  __        __                    __    __  ______
 /      \\ |  \\|  \\      |  \\                  |  \\  |  \\|      \\
|  $$$$$$\\ \\$$| $$       \\$$ _______          | $$  | $$ \\$$$$$$
| $$  | $$|  \\| $$      |  \\|       \\  ______ | $$  | $$  | $$
| $$  | $$| $$| $$      | $$| $$$$$$$\\|      \\| $$  | $$  | $$
| $$ _| $$| $$| $$      | $$| $$  | $$ \\$$$$$$| $$  | $$  | $$
| $$/ \\ $$| $$| $$_____ | $$| $$  | $$        | $$__/ $$ _| $$_
 \\$$ $$ $$| $$| $$     \\| $$| $$  | $$         \\$$    $$|   $$ \\
  \\$$$$$$\\ \\$$ \\$$$$$$$$ \\$$ \\$$   \\$$          \\$$$$$$  \\$$$$$$
      \\$$$

_________________________________________________________________________
              author:August
`;

    const rainbowGradient = `
background: linear-gradient(135deg, #FCD590 60%, #83F7D6);
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
