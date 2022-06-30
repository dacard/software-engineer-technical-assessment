import request  from "supertest";
import express from "express";
import dnaRouter from "./dna-route";
import * as DnaService from "./dna-service";
import * as Utils from "./utils";

const app = express();
app.use("/dna", dnaRouter);


describe("DNA Router", () => {
  // let dnaService: any;
  let utils: any;

  const dnaMock = [
    {
      id: 1,
      dna: "ACTGACTG",
      created_at: "2022-06-26T16:15:34.558Z",
    },
    {
      id: 2,
      dna: "ACTGACTGACTGACTG",
      created_at: "2022-06-26T16:15:41.844Z",
    },
  ];
  const newDnaMock = {    
    "id": 3,
    "dna": "ACTGTCA",
    "created_at": "2022-06-26T16:15:34.558Z"
  }

  // before each test case
  beforeEach(() => {
    // dnaService = DnaService;
    utils = Utils;
  });

  // clean up after each test case done
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("When Get /dna", async () => {
    
  });

  test("When POST /dna", async () => {    

  });
});
