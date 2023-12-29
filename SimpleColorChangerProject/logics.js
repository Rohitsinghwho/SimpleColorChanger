const AllBtns= document.querySelectorAll('.button');
const heading1= document.querySelector('.firstHeading');

// console.log(AllBtns)
const ChangeHeading=(color)=>{
    // const newHeading= document.createElement('h1');
    // newHeading.append(`Color Change by ${color}`)
    heading1.textContent=`Color Change By Clicking ${color}`
}
AllBtns.forEach((value)=>{
    // console.log(value)
    value.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target)
        switch(e.target.id){
            case 'Yellow':
                document.body.style.backgroundColor=e.target.id;
                ChangeHeading(e.target.id);
                break;
            case 'Blue':
                document.body.style.backgroundColor=e.target.id;
                ChangeHeading(e.target.id);

                break;
            case 'Red':
                document.body.style.backgroundColor=e.target.id;
                ChangeHeading(e.target.id);

                break;
            case 'Green':
                document.body.style.backgroundColor=e.target.id;
                ChangeHeading(e.target.id);
                break;
            case 'White':
                document.body.style.backgroundColor=e.target.id;
                ChangeHeading(e.target.id);
                break;
            default:
                document.body.style.backgroundColor="white";
                ChangeHeading("white");
        }
        
    })
})