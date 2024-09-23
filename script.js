const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const imageContainer = document.querySelector('.image-container');

let currentAudio = null;

const passwords = {
  'саша': {
    image: 'download.png',
    music: '1726991660_kpbrsmsshdshjslnkfl.mp3',
    caption: 'я хуй знаю что писать короче пися'
  },
  'данил': {
    image: '1000018202.jpg',
    music: 'Valve_Software_-_Soldier_of_Dance_Saundtrek_iz_igry_Team_Fortress_2_VIPMP3.BIZ_(SkySound.cc).mp3',
    caption: 'данил- это человек(наверное)'
  },
  'маруся': {
    image: '1000022767.jpg',
    music: 'Zvuk_koshki_-_Myau-myau-myau_poyot_Bot_(SkySound.cc).mp3',
    caption: 'маруся- это легенда мира и тиктока '
  },
  'аня': {
    image: 'download.jpg',
    music: 'Joji - Tick Tock.mp3',
    caption: 'аня- это то чувство когда мама учит миями'
  }
};

submitButton.addEventListener('click', () => {
    const password = passwordInput.value.trim().toLowerCase();
    if (passwords[password]) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
      }
      const image = document.createElement('img');
      image.src = passwords[password].image;
      const caption = document.createElement('p');
      caption.classList.add('caption');
      caption.textContent = passwords[password].caption;
      const audio = new Audio(passwords[password].music);
      audio.play();
      currentAudio = audio;
      imageContainer.innerHTML = '';
      imageContainer.appendChild(image);
      imageContainer.appendChild(caption);
    } else {
      alert('Invalid password');
    }
  });
