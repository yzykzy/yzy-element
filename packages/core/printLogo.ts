// 打印logo

export default function () {
  if (PROD) {
    const logo = `
____________________________________________________________________________________________________________

                                ___________.____     ___________   _____  ___________ __________________
 ___.__.___________.__.         \_   _____/|    |    \_   _____/  /     \ \_   _____/ \      \__    ___/
<   |  |\___   <   |  |  ______  |    __)_ |    |     |    __)_  /  \ /  \ |    __)_  /   |   \|    |   
 \___  | /    / \___  | /_____/  |        \|    |___  |        \/    Y    \|        \/    |    \    |   
 / ____|/_____ \/ ____|         /_______  /|_______ \/_______  /\____|__  /_______  /\____|__  /____|   
 \/           \/\/                      \/         \/        \/         \/        \/         \/                              
____________________________________________________________________________________________________________
                                                             author:yzy
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
    console.log("[EricUI]:dev mode...");
  }
}