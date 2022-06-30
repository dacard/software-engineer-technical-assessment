import * as DnaService from './dna-service';
const { Pool } = require('pg');
// setup for to mock pg
jest.mock('pg', () => {
  const mPool = {
    connect: function () {
      return { query: jest.fn() };
    },
    query: jest.fn(),
    end: jest.fn(),
    on: jest.fn(),
  };
  return { Pool: jest.fn(() => mPool) };
});

describe("DNA Service", () => {
  
  let db : any;

  //mocks
  const dnaMock = [
    {
        "id": 1,
        "dna": "ACTGACTG",
        "created_at": "2022-06-26T16:15:34.558Z"
    },
    {
        "id": 2,
        "dna": "ACTGACTGACTGACTG",
        "created_at": "2022-06-26T16:15:41.844Z"
    },      
  ]
  const newDnaString = "ACTGTCA"
  const newDnaMock = {    
    "id": 3,
    "dna": "ACTGTCA",
    "created_at": "2022-06-26T16:15:34.558Z"
  }
  

  // before each test case
  beforeEach(() => {
    db = new Pool();
  });

  // clean up after each test case done
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Get all DNA from Postgres database', async () => {  
    
    db.query.mockResolvedValue({ rows: dnaMock});

    const dnas = await DnaService.getAll();

    
    expect(db.query).toBeCalledTimes(1);
    expect(db.query).toBeCalledWith({"strings": ["SELECT * FROM dna;"], "values": []});
    expect(dnas).toEqual(dnaMock);
    // expect(pool.query).toHaveBeenCalledWith(expect.anything());
    
  });

  test('Create a DNA on Postgres database', async () => {  
    
    db.query.mockResolvedValue({ rows: [newDnaMock]});
    const dnas = await DnaService.create(newDnaString);
    expect(db.query).toBeCalledTimes(1);
    expect(db.query).toBeCalledWith({"strings": ["INSERT INTO dna (dna) VALUES (", ") RETURNING *;"], "values": ["ACTGTCA"]});
    expect(dnas).toEqual(newDnaMock);

  });

})