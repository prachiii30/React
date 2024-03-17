const reactElement={
    type: 'a',
    props : {
        href : 'https://google.com',
        target: '_blank',
    },
    childern:'click me to visit google'
}

const mainContainer=document.querySelector('#root')

mainContainer.render