/*let musicSection = document.getElementById('musicSec');
let isPlaying = false;
let currentAudio = null;

musicSection.addEventListener('click', function(event) {
    let targetedElement = event.target;
    let parentMusic = targetedElement.closest('.music');

    if (!parentMusic) return; // Exit if the click is not on a music element

    let music = parentMusic.querySelector('.audio');
    let img = parentMusic.querySelector('.musicImg');

    if (!music || !img) return; // Exit if audio or image not found

    if (currentAudio && currentAudio !== music) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        isPlaying = false;
    }

    if (!isPlaying) {
        music.play();
        isPlaying = true;
        targetedElement.classList.replace('bx-play-circle', 'bx-pause');
        img.classList.add('playMusic');
    } else {
        music.pause();
        isPlaying = false;
        targetedElement.classList.replace('bx-pause', 'bx-play-circle');
        img.classList.remove('playMusic');
    }

    currentAudio = music;
});*/

const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach((player) => {
    player.addEventListener('play', () => {
        audioPlayers.forEach((otherPlayer) => {
            if (otherPlayer !== player) {
                otherPlayer.pause();
            }
        });
    });
});


var overlay = document.querySelector(".popup-overlay")
var Lyricbox = document.querySelector(".lyrics-box")

var imageElement = document.getElementById("lyricsLogo")
var comp = document.getElementById("Composer")
var sing = document.getElementById("Singer")
var para = document.getElementById("lyricPara")

function popupJailer() {
    
    para.innerHTML = `Alappara kelapparom
    Dha paaru da
    Kalavaram yeranguna
    Dha.. daaru da

    Chorus : Nelavaram puriyidha okkaruda
    Thalivaru kalathula superstaru da
    Varamora odachida set aanavan
    Thalamora kadakura hit aanavan
    Eliyavan manasula fit aanavan
    Mudivula jeichida urithaanavan

    Chorus : Nadakura nada puyala pochae
    Mudi othukuna styleya aache
    Kanavuilla idhu realaa pochae
    Thala mudhal adi vara
    Thalaivaru alappara
    <br>
    Chorus : Varum thalamura veila poche
    Ada noorku daila poche
    Sethukura idam jaila poche
    Sera mudhal theravara
    Thalaivarau alappara

    Chorus : Onn alumba paatthavan
    Ungoppan whisle-ah kaetavan
    Onn mavanum peranum
    Aatam poda veppavan
    Ivan paera thooka naalu paeru
    Pattattha parika nooru pearu
    Kutti chevutha etti paatha
    Usura kodukka kodi paeru

    Male : Hukum
    Tigerka hukum
    <br>
    Chorus : Alappara kelapparom
    Thalaiveru nirantharam

    Chorus : Nee end card vatcha
    Ivan trenda maathi vepan
    Nee kuliya parichi vacha
    Ivan malaiyil eri nippan`
    comp.innerHTML = "Anirudh"
    sing.innerHTML = "Singer : ArunRaj"
    Lyricbox.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(LyricsGIF/JailerGif.gif) no-repeat";
    Lyricbox.style.backgroundSize = "cover";
    imageElement.src = "MusicLogo\\mlogo1.jpg"
    Lyricbox.style.display = "block"
    overlay.style.display = "block"
}

function popupBeast() {
    
    para.innerHTML = `Male : Halamithi habibo
    Halamithi habi vandhaalae
    Halamithi habibo
    Halamithi habi vandhaa
    Halamithi habibo
    Halamithi habi vandhaalae
    Halamithi habibo
    Halamithi habibo..ooo
    
    Male : Malama pitha pithadhae
    Malama pitha pithadhae
    Mala pitha pithadhae
    Malama pithadhae
    
    Male : Hey malama pitha pithadhae
    Malama pitha pithadhae
    Mala pitha pithadhae
    Malama pithadhae
    
    Male : Holi holi
    Pakathula sirikkum rangoli
    Jolly jolly
    Vekkathula mayangura doli
    Female : Gaali gaali
    Mothathula avanum dhan gaali
    Jolly jolly adipoli
    
    Male : Halamithi habibo
    Halamithi mithi vandhaalae
    Halamithi habibo
    Halamithi mithi vandhaa
    Halamithi habibo
    Halamithi mithi vandhaale
    Halamithi habibo
    Halamithi mithi oo
    
    Male : Oh cutie nee sweety
    Un beauty adhil maati
    Naa mellamma mellamma gaali
    Adha sollala sollala podi
    Mudhal vaati padam kaati
    Enna vaati kanna kaati
    Love ah konjama konjama yethi
    Enna senjita senjita oruthi
    
    Female : Ivan yaaro sokka vachaanae
    En manasukulla kuzhandhai
    Pola konjikittaanae
    Love ah vachaanae
    Ivan yaaro kick ah vachaanae
    En vayasukulla mudhal mazhaiyaa
    Feel ah vachaanae
    
    Male : Halamithi habibo halamithi
    Halamithi habibo halamithi
    Halamithi habibo halamithi
    Halamithi habibo halamithi
    Female : Habidaa`

    comp.innerHTML = "Anirudh"
    sing.innerHTML = "Singer : Jonitha , Aniruth"
    Lyricbox.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(LyricsGIF/BeastGif.gif) no-repeat";
    Lyricbox.style.backgroundSize = "cover";
    imageElement.src = "MusicLogo\\mlogo2.jpg"
    Lyricbox.style.display = "block"
    overlay.style.display = "block"
}

function popupLover() {
    
    para.innerHTML = `"Ezhutha Kadhaiyo" is a song from the 2024 movie Lover sung by Sean Roldan and Meha Agarwal. The song is 3 minutes and 14 seconds long and was released in 
    January 2024. Mohan Rajan wrote the lyrics, and Sean Roldan composed the music`
    comp.innerHTML = "Sean Rolan"
    sing.innerHTML = "Singer : Sean Rolan"
    Lyricbox.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(LyricsGIF/Lover.jpg) no-repeat";
    Lyricbox.style.backgroundSize = "cover";
    imageElement.src = "MusicLogo\\mlogo3.jpg"
    Lyricbox.style.display = "block"
    overlay.style.display = "block"
}

function popupPremalu() {
    
    para.innerHTML = `Take that .. Like that Wait there Write that Drop ..beat Hi-hat 
    Shakespeare Verse -that Make sure Lite
    fat Long life No past! Kite high Smoke that Drake song I Dig that .. Cherakaay athirmeluyarane! 
    Kanavukal nanayume Kavarilaay karuthane Pidividaathe! Periya chelavithu keeshakaalaake Cheviyilorupidi 
    bhashakalaaye. Kada palaaram nirathinoram Karakkamaane velukkuvolam Vandichorukku Idi thammi vazhakku 
    kidapporunelakku Aduppathinedakku Kari oru mezhukku… Kudanjedukku thirakkithu ethukku? Pakalaayaalodukayo? 
    Nerampokkaayo? Carrom play aano? Naadaayo marunaado? Naattaarepolangaayenno? Kadakalithanavadhi kayaranatho kazhikkanamo? 
    Cheruthozhikkanamo? Thalavara palavuri thirayanatho Bhalam ganikkanatho? vidhichatho? Ravilannu nammalonnu chernnu cholli 
    rashikal Kunnukoodiyullilaasha van Pratheeksha minni thalaniraye! ( Re Intro ) Cherakaay athirmeluyarane Kanavukal nanayume Kavarilaay 
    karuthane Pidividaathe! Periya chelavithu keeshakaalaake Cheviyilorupidi bhashakalaaye Kada palaaram nirathinoram Karakkamaane velukkuvolam Take that .. 
    Like that Wait there Write that Drop ..beat Hi-hat Shakespeare Verse -that Make sure Lite – fat Long life No past! Kite high Smoke that


    Read more here: https://songlyricspro.in/welcome-to-hyderabad-song-lyrics-premalu/`

    comp.innerHTML = "Vishnu Vijay"
    sing.innerHTML = "Singer : ShakthiSree Gopalan"
    Lyricbox.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(LyricsGIF/PremaluGif.gif) no-repeat";
    Lyricbox.style.backgroundSize = "cover";
    imageElement.src = "MusicLogo\\mlogo4.jpg"
    Lyricbox.style.display = "block"
    overlay.style.display = "block"
}

function popupDada() {
    
    para.innerHTML = `Male : Thaaiyaaga maariduven
    Unaikaaga…
    Thavariya naan
    Mandiyitten unaiyendha
    
    Chorus : Haa…aaa………..
    
    Male : Vaa vaa ennuyirae
    Meendum oru jananam kodu
    Vaa daa en maganae
    Thandhai ena padhavi kodu
    
    Male : Siriyavan naan
    Siriyavan thaan
    Ulagin paarvaiyilae
    Periyavan naan
    Periyavan thaan
    Undhan kangalilae
    
    Male : Medhuvaai medhuvaai
    Unai naan anaikka
    Uyirum uyirum
    Ondraai inaikka
    
    Male : Oo…sithirai nee sendhamil nee
    Vaarthaigal illai azhaikka
    Sooriyan nee vinveli nee
    Kaelikaiyil rathinam nee
    
    Chorus : Haa..aaa………………..
    
    Male : Thaaiyaaga maariduven
    Unaikaaga
    Thavariya naan
    Mandiyitten unaiyendha`

    comp.innerHTML = "Sean Rolan"
    sing.innerHTML = "Singer : Dhanyashree"
    Lyricbox.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(LyricsGIF/DadaGif.gif) no-repeat";
    Lyricbox.style.backgroundSize = "cover";
    imageElement.src = "MusicLogo\\mlogo5.jpg"
    Lyricbox.style.display = "block"
    overlay.style.display = "block"
}
function popupJawan() {
    
    para.innerHTML = `Ho Zumba Oh Zumba Ohle
    Hahaha
    Ready
    Tananana Tananana Tana Na
    Tananana Tana Na
    Tananana Tananana Tana Na
    Tananana Tana Na
    Jawan Hai Jawan Tu
    Jawan Hai Jawan Tu
    Running With King Kong
    Bullets Rain Down
    Like It's Thunder
    Ready Or Not
    She Got The Glock
    She'll Put You Under
    You Know Its Game Time
    On The Front Line
    Till It's Over
    Deep In The Trenches For You
    Like A Soldier
    Ho Zumba Oh Zumba Ohle
    Whistle Sound
    Running With King Kong
    Bullets Rain Down
    Like It's Thunder
    Ready Or Not
    She Got The Glock
    She'll Put You Under
    You Know We Game
    Time On The Front Line
    Till It's Over
    Deep In The Trenches For You
    Like A Soldier`

    comp.innerHTML = "Anirudh"
    sing.innerHTML = "Singer : Anirudh"
    Lyricbox.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(LyricsGIF/JawanGif.webp) no-repeat";
    Lyricbox.style.backgroundSize = "cover";
    imageElement.src = "MusicLogo\\mlogo6.jpg"
    Lyricbox.style.display = "block"
    overlay.style.display = "block"
}
function popupHarleys() {
    
    para.innerHTML = `Boy, tell me, can you take my breath away?
    Cruisin' down a heart-shaped highway
    Got you swervin' lane-to-lane, don't hit the brakes
    'Cause I'm feelin' so safe
    I'll be your baby, on a Sunday
    Oh, why don't we get out of town?
    Call me your baby, on the same wave
    Oh, no, no, there's no slowin' down
    You and I, I
    Ridin' Harleys in Hawaii-i-i
    I'm on the back, I'm holdin' tight, I
    Want you to take me for a ri-ide, ride
    When I hula-hula, hula
    So good, you'll take me to the jeweler-jeweler, jeweler
    There's pink and purple in the sky-y-y
    We're ridin' Harleys in Hawaii-i-i
    Let me run my fingers through your salty hair
    Go ahead, explore the island
    Vibes so real that you can feel it in the air
    I'm revvin' up your engine
    I'll be your baby, on a Sunday
    Oh, why don't we get out of town? (Why don't we get out of town?)
    Call me your baby, catch the same wave
    Oh, no, no, there's no slowin' down (let's go)
    You and I, I
    Ridin' Harleys in Hawaii-i-i
    I'm on the back, I'm holdin' tight, I
    Want you to take me for a ri-ide, ride
    When I hula-hula, hula
    So good, you'll take me to the jeweler-jeweler, jeweler
    There's pink and purple in the sky-y-y
    We're ridin' Harleys in Hawaii-i-i`

    comp.innerHTML = "Katy Perry"
    sing.innerHTML = "Singer : Katy Perry"
    Lyricbox.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(LyricsGIF/HarleysGif.gif) no-repeat";
    Lyricbox.style.backgroundSize = "cover";
    imageElement.src = "MusicLogo\\mlogo7.jpg"
    Lyricbox.style.display = "block"
    overlay.style.display = "block"
}
function popupMeet() {
    
    para.innerHTML = `Ninge Yele Thaare
    Mari Nele Vaale Nede
    Anni Kotthenemo
    Chigurinche Snehamlone
    
    Cheye Chaache Chanuvedho
    Momaatamtho Aage
    Ayinaa Manase Parledhantu
    Saige Chesele
    
    Kottha Kottha Parichayame
    Gundeloki Cherenuga
    Maruvaleni Kalayikagaa
    Maaruthondhigaa
    Iddarunna Ekaantham
    Okkachote Enthandham
    Maatakanna Mounaale
    Nachhuthundagaa
    
    Jaade Leve Sankochaalu
    Maaye Em Chesaave
    Nanne Mooge Sandehaalu
    Darike Raave
    
    Kannulone Daachaalemo Ee Kaalaalu
    Vachhelope Aapaalemo Ika Dhooraalu
    Thalape Leni Tarunam Baagundhe
    
    Choosinattu Roopam, Gurthu Raadhu Paapam
    Inthalone Vachhesthundhe Gundelonike
    Maarinaaka Vesham Thelikaaye Sneham
    Chinna Navvuthone Laaguthondi Nanne
    
    Mabbulu Veedipoyaayi Ganuka
    Haddhulu Aaguthunnaayi Venaka
    Iddharilonu Mounaalu Daagele`

    comp.innerHTML = "Vijay Bulganin"
    sing.innerHTML = "Singer : Vijay Bulganin"
    Lyricbox.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(LyricsGIF/meetCute.jpg) no-repeat";
    Lyricbox.style.backgroundSize = "cover";
    imageElement.src = "MusicLogo\\mlogo8.jpg"
    Lyricbox.style.display = "block"
    overlay.style.display = "block"
}

function closeBox() { 
    Lyricbox.style.display = "none";
    overlay.style.display = "none";
}




