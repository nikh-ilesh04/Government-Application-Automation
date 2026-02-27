import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { extractDocumentData } from '../services/ocr.service';

export async function upload(req: Request, res: Response) {
  const { applicationId, filePath, documentType } = req.body;
  const ocr = extractDocumentData(filePath);
  const doc = await prisma.document.create({ data: { applicationId: Number(applicationId), filePath, documentType, confidenceScore: ocr.confidence } });
  res.status(201).json({ document: doc, ocr });
}
