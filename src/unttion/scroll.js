export function setupCardScroll(cardRef) {
    let cc = 0;  // 在函数内部定义 cc
    const calculateScrollTop = (scrollTop, scrollHeight, clientHeight, event) => {
        const { scrollHeight: scrollHeight1, clientHeight: clientHeight1 } = event.target.documentElement;
        return scrollHeight - clientHeight +
            (scrollTop -
                (scrollHeight1 - clientHeight1));
    };
    const handleScroll = (event) => {
       if(event!==null && cardRef!==null){
        const scrollTop = event.target.documentElement.scrollTop;
        setTimeout(() => {
            cc = scrollTop;
        }, 1);
        if (scrollTop < cc && cardRef.value !== null) {
            cardRef.value.scrollTop = calculateScrollTop(
                scrollTop,
                cardRef.value.scrollHeight,
                cardRef.value.clientHeight,
                event
            );
        } else {
           if(cardRef.value!==null){
            cardRef.value.scrollTop = scrollTop;
           }
        }
       }

        //   cc = scrollTop;
    };

    document.addEventListener("scroll", handleScroll);

    // 添加定时器

}


// let cc = ref(0);
// const cardscroll = () => {
//   const a = function (i) {
//     // 定时器
//     setTimeout(() => {
//       cc.value = i.target.documentElement.scrollTop;
//     }, 10);
//     if (i.target.documentElement.scrollTop < cc.value) {
//       card1.value.scrollTop =
//       card1.value.scrollHeight- card1.value.clientHeight+
//           (i.target.documentElement.scrollTop -
//             (i.target.documentElement.scrollHeight -
//               i.target.documentElement.clientHeight));
//       console.log(
//         card1.value.scrollHeight- card1.value.clientHeight+
//           (i.target.documentElement.scrollTop -
//             (i.target.documentElement.scrollHeight -
//               i.target.documentElement.clientHeight))
//       );
//     } else {
//       card1.value.scrollTop = i.target.documentElement.scrollTop;
//     }
//   };
//   document.addEventListener("scroll", a);
// };
const userinfos = require("../DataFile/text.json");

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength).replace(/\s+/g, "") + "...";
}

export function curtext() {
    function getUserInfoById(id) {
        const user = userinfos.find(item => item.id === id);
        if (user) {
            if (user) {
                return truncateText(user.text, 70);
            }
            return null;
        }
        }
    
    function getUserInfos() {
        return userinfos.map(item => ({
            ...item,
            text: truncateText(item.text, 70)
        }));
    }
    
    function getFullTextById(id) {
        const user = userinfos.find(item => item.id === id);
        if (user) {
            return user.text;
        }
        return null;
    }
    return { getUserInfoById, getUserInfos, getFullTextById };
}



// const Vibrant = require('node-vibrant/dist/vibrant.js');
// images.forEach((item,index) => {
//     Vibrant.from(item.url,{
//         quality:10, 
//         colorCount:128,
//     }).getPalette((err, palette) => {
//     if (err) {
//         console.error(err, "11");
//         return;
//     }
//     const vibrantColor = palette.DarkVibrant.getHex();
//     console.log(palette);
//     showbox.value[index]._.vnode.el.style.backgroundColor=vibrantColor
// });
  
// })


import list from "../DataFile/tabslist.json";
export function getlist(id) {
// 过滤
if(list.filter(item => item.id === id).length!=0){
    return list.filter(item => item.id === id)[0].tabs;
}else{
    return [];
}

}