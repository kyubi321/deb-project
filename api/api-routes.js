
import Router from 'express';

const router =Router();

router.get('/',(req,res)=>{
    res.send('Hello world')
})

const greetingList = [
    "Hello world", 
    "Hola mundo", 
    "Bonjour le monde", 
    "Hallo Welt", 
    "Ciao mondo", 
    "Selamat dunia",
    "Saluton mondo",  
    "Hei maailma", 
    "Merhaba dünya", 
    "Bok svete",
    "Terve maailma", 
    "Habari dunia", 
    "Sawubona Mhlaba", 
    "Sawubona Mhlaba", 
    "Kaixo mundua", 
    "Hallo Welt", 
    "Hei verden", 
    "Halo dunia", 
];

router.get('/greetings',async (req,res)=>{
    res.json(greetingList)
})

router.get('/Visitors',async (req,res)=>{
    const visitorCount= Math.floor(Math.random() * 1000);
    res.json(visitorCount)
})

export default router;