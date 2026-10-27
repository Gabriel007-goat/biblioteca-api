import { Request, Response } from "express";
import { Livro } from "../models/livro";

//Armazenamento em memoria (os dados somem quando o servidor reseta)
const livrps: Livro[] = [];
