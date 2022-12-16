// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const closeButton = document.querySelector('#close');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');

// Background__Theme
const Bg1 = document.querySelector('.bg-1'); //light_background_(default)
const Bg2 = document.querySelector('.bg-2'); //Dark background
const Bg3 = document.querySelector('.bg-3'); // Black background

// ROOT_ELEMENT
var root = document.querySelector(':root');


//------------------SIDEBAR----------------------//

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

//------------------MESSAGES----------------------//
// Search Chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(user => {
        let name = user.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }
    })
}

// Search Chat
messageSearch.addEventListener('keyup', searchMessage);

// Hightlight messages card when messages menu item on the left sidebar is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
})


// THEME CUSTOMIZATION
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);



// Close Theme Customization Card

const closeThemeModal = () => {
    themeModal.style.display = 'none';
}

closeButton.addEventListener('click', closeThemeModal);


//------------------------------- FONT__SIZE-----------------------------//

//remove active class from font selectors or spans
const removeSizeSelector = () => {
    fontSizes.forEach(size=> {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        // Change Font Size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })    
})

//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change primary colors 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        
      //remove active class from colors
      changeActiveColorClass();

      if(color.classList.contains('color-1')){
        primaryHue = 252;
      }
      else if(color.classList.contains('color-2')){
        primaryHue = 52;
      }
      else if(color.classList.contains('color-3')){
        primaryHue = 352;
      }
      else if(color.classList.contains('color-4')){
        primaryHue = 152;
      }
      else if(color.classList.contains('color-5')){
        primaryHue = 202;
      }
      color.classList.add('active');
      
      root.style.setProperty('--primary-color-hue', primaryHue);

    })
})

// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changing background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


// changing background colors 
Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // removing active class from the other divs at the same time
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    // remove customized changes from local storage
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // removing active class from the other divs at the same time
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // removing active class from the other divs at the same time
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})





