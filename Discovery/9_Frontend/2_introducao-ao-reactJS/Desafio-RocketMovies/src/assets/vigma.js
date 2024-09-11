import fs from 'fs'

const FILE_KEY = 'A9ngfB3N5ykN40wZxG1WC8';
const TOKEN = 'figd_u5kOcyjXlv4BMljW4Y-IOwd0aqzUREc36sNHNgO6';


fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
    headers: {
        'X-Figma-Token': TOKEN
    }
})
.then(response => response.json())
.then(data => {
    const jsonString = JSON.stringify(data, null, 2)

    fs.writeFile('figma_data.txt', jsonString, 'utf8', (err) => {
        if (err) {
            console.error('Erro ao escrever o arquivo:', err);
        } else {
            console.log('Arquivo JSON salvo como figma_data.txt');
        }
    })

})
.catch(error => console.error('Erro:', error));

