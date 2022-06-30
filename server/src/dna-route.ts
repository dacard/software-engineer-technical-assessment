import { Router } from 'express';
import { EndOfLineState } from 'typescript';
import * as DnaService from './dna-service';
import { dnaValidation, distanceValidation, levenshteinDistance } from './utils';

const router = Router();

router.get('/', async (req, res) => {    
    const message = await DnaService.getAll();
    res.json( message );
});

router.post('/', async (req, res) => {    

    const dna = req.body.dna;

    //dna validation
    try {
        dnaValidation(dna);
    }
    catch (err : any) {
        res.status(400).send(err.message);
        return;
    }

    //persist dna    
    const response = await DnaService.create(dna);

    //return response
    if (response) {
        res.json(response).end()
        return
    }
    res.status(400).json({msg: 'Something went wrong'});
});

router.post('/search', async (req, res) => {    

    //dna validation
    const dna = req.body.dna;
    const distance = req.body.distance;
    try {
        dnaValidation(dna);
        distanceValidation(distance);
    }
    catch (err : any) {
        
        res.status(400).send(err.message);
        return;
    }

    const dnas = await DnaService.getAll();

    //compute the distance between the dna and the dnas in the database
    const distances : any = dnas
        .map(_dna => {
            return {
                dna: _dna,
                distance: levenshteinDistance(dna, _dna.dna)
            }
        })
        .filter(dna => dna.distance <= distance)
        .sort((a, b) => a.distance - b.distance)

    res.json(distances);
});

export default router;