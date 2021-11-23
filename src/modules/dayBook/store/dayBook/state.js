 export default () => ({
     isloading:true,
     entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text:'Texto de una entrada',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text:'Texto de una entrada super molona',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text:'¿Cuándo nevará en Madrid?',
            picture: null
        },
     ]
 })