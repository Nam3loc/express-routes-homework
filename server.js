const express = require("express");
const app = express();
const PORT = 3000;

const fs = require('fs')
app.engine('coleman', (filePath, options, callback) => { 
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#bio#','<div>'+ options.bio + '</div>' )
    return callback(null, rendered)
  })
})

app.set('views', './views')
app.set('view engine', 'coleman')

// app.get('/', function(req, res) {
//     res.send('<h1>Hello Express</h1>');
// });

app.get('/', (req, res) => {
    res.render('template', { 
        title: 'League of Legends Champs', 
        message: 'Welcome traveller!', 
        content: 'Scroll through the paths (/1, /2, /3, etc.) to see my favorite Champs in League of Legends. Starting from path /6 and ending at path /10, take the journey to see some of my favorite movies. <br><br> <button><a href="/1">Ashe</a></button>' 
    })
})

app.get('/1', (req, res) => {
    res.render('template1', { 
        title: 'Ashe', 
        message: 'Ashe', 
        content: '<img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg" alt="Ashe from Legue of Legends">',
        bio: 'The best ADC in the game. She has a passive that slows enemies when she shoots her ffrost arrows at them. This gives Ashe the ability to shoot people and run away without being caught because she can slow them. Her ultimate ability is also global and is very useful for stunning people in a 5v5 team fight. <br><br> <button><a href="/2">Kaisa</a></button>' 
    })
})
  
app.get('/2', (req, res) => {
    res.render('template1', { 
        title: "Kai'sa", 
        message: "Kai'sa", 
        content: '<img src="https://sportshub.cbsistatic.com/i/2021/03/16/72f87412-7d38-461d-a88d-65edec03a76b/league-of-legends-kaisa-1124646.jpg?width=1200" alt="Kaisa from Legue of Legends">',
        bio: 'I love Kaisa because she is such a mobile champ. Kaisa is more of a burst champion. Kaisa scales very hard into the mid and late game once you have built one or two items, then you can pop her ult, jump on people and press your Q ability and it will melt their health. <br><br> <button><a href="/3">Sivir</a></button>' 
    })
})
  
app.get('/3', (req, res) => {
    res.render('template1', { 
        title: 'Sivir', 
        message: 'Sivir', 
        content: '<img src="https://preview.redd.it/2dyuls5liml61.png?width=640&format=png&auto=webp&s=174559bcd02a506139450946c7c0a3aea8383997" alt="Sivir from Legue of Legends">', 
        bio: 'I love playing Sivir because she has great wave clear and can show wave into turrets quickly. Sivirs ability to shove lanes and rotate to fights happening around the map makes her a fun champ to play. <br><br> <button><a href="/4">Garen</a></button>'
    })
})

app.get('/4', (req, res) => {
    res.render('template1', { 
        title: 'Garen', 
        message: 'Who!', 
        content: '<img src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltda4249a36a7acf13/60ee0dbd66d52e63b8eb6b4f/Garen_0.jpg" alt="Garen from Legue of Legends">', 
        bio: 'Whenever I play top lane, I love to play Garen. Garens passive regenerates health as long as you have not been hit recently. With his passive combined with Garens ult, which is an instant kill I they are low health, make Garen a very dangerous top-laner. <br><br> <button><a href="/5">Dr. Mundo</a></button>'
    })
})

app.get('/5', (req, res) => {
    res.render('template1', { 
        title: 'Dr. Mundo', 
        message: 'Dr. Mundo', 
        content: '<img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg" alt="Dr. Mundo from Legue of Legends">', 
        bio: 'I love Mundo because he is one of the tankiest champs in the game. If you build straight armor and tank, then Mundo becomes virtually unkillable mixed with his ult that give him health regen and more damage. <br><br> <button><a href="/6">The Proposal</a></button>'
    })
})

app.get('/6', (req, res) => {
    res.render('template2', { 
        title: 'Favorite Movies', 
        message: 'The Proposal!', 
        content: '<img src="https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="The proposal movie">', 
        bio: 'This is one of my all time favorite movies. I love the story line. I love the beautiful scenery. I love the humor and I love Ryan Reynolds. <br><br> <button><a href="/7">Shes The Man</a></button>'
    })
})

app.get('/7', (req, res) => {
    res.render('template2', { 
        title: 'Favorite Movies', 
        message: 'Shes The Man', 
        content: '<img src="https://m.media-amazon.com/images/M/MV5BZGRmNzYxM2QtNGVlZi00ZWZhLWFlMzEtNzE5NGM4YjlkYjY0XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_FMjpg_UX1000_.jpg" alt="Shes the Man movie">', 
        bio: 'Shes the man is a classic for me. I it is back in the prime of Amanda Bynes and has some of the most humorous dialogue out there. I also love the story line mirroring the Shakespearean play Twelfth Night. <br><br> <button><a href="/8">The Last Samurai</a></button>'
    })
})

app.get('/8', (req, res) => {
    res.render('template2', { 
        title: 'Favorite Movies', 
        message: 'The Last Samurai', 
        content: '<img src="https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_.jpg" alt="The Last Samurai Movie">', 
        bio: 'I love The Last Samurai because it is a beautiful depiction of life away rom the craziness of the tech boom. I also love Japanese culture so this is very interesting for me to witness and similar depiction of what life used to be like in Fuedal Japan. This story is very well written and very well acted. <br><br> <button><a href="/9">Focus</a></button>'
    })
})

app.get('/9', (req, res) => {
    res.render('template2', { 
        title: 'Favorite Movies', 
        message: 'Focus', 
        content: '<img src="https://flxt.tmsimg.com/assets/p10939169_p_v8_ap.jpg" alt="Focus Movie">', 
        bio: 'I love Focus because it is one o those movies that makes youthink. I love the romance story line mixed with the con-artist story line. Will Smiths acting is some of the best acting that I have seen and I think Focus is a good depiction of that. <br><br> <button><a href="/10">Warrior</a></button>'
    })
})

app.get('/10', (req, res) => {
    res.render('template2', { 
        title: 'Favorite Movies', 
        message: 'Warrior', 
        content: '<img src="https://flxt.tmsimg.com/assets/p8063104_p_v8_ak.jpg" alt="Warrior Movie">', 
        bio: 'I love Warrior because it has amazing fight scenes and is a beautiful underdog story that makes you sit on the edge of your seat. This is one of the coolest most action packed movies and is in my top 10 for sure. <br><br> <button><a href="/">Main Page</a></button>'
    })
})

app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
});